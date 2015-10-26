<?php 

require_once 'connection.php';
session_start();


$firstname=mysqli_real_escape_string($con,$_POST['firstname']);
$lastname=mysqli_real_escape_string($con,$_POST['lastname']);
$emailid=mysqli_real_escape_string($con,$_POST['emailid']);
$password=mysqli_real_escape_string($con,$_POST['password']);
$verificationnumber=mysqli_real_escape_string($con,$_POST['verificationnumber']);
$table="users";
//echo $_SESSION['code'];
if($_SESSION['code'] == $verificationnumber)
{

		
		$createQuery="create table `".$emailid.".tests`("
		."id int not null auto_increment,"
		."testName varchar(100),"
		."subjectname varchar(100),"
		."timer varchar(20),"
		."marks int not null default 0,"
		."statusOfExam int not null default 0,"
		."answers varchar(255),"
		."marked varchar(255),"
		."primary key(id));";
		
		mysqli_query($con,$createQuery) or die(mysqli_error($con));
		
		$str = file_get_contents('../questions/tests.json');
		$jsonData = json_decode($str, true);
		
		$answerstring="";
		for ($i=1;$i<=30;$i++)
		{
		$answerstring.='0';
		
		}
		// echo $jsonData["tests"][1]["subjectname"]."1";
		$insertQuery;
		for($i = 0;$i<4;$i++)
		{
		$insertQuery = "insert into `".$emailid.".tests` (testname,subjectname,timer,marks,statusOfExam,answers,marked) values("
				."'".$jsonData["tests"][$i]["subjectid"]."',"
				."'".$jsonData["tests"][$i]["subjectname"]."',"
				."'00:29:60',"
				."0,"
				."0,"
				."'".$answerstring."',"
				."'".$answerstring."'"
				.");";
		
				mysqli_query($con,$insertQuery) or die(mysqli_error($con));
		}
		
		
		
		
		$insertQuery="insert into ".$table."(emailid,firstname,lastname,password,imagename) values ('".$emailid."','".$firstname."','".$lastname."','".$password."','user.jpg');";
		
		mysqli_query($con,$insertQuery) or die(mysqli_error($con));
		echo '{"error":"0"}';
		
	
}
else {
	
	echo '{"error":"1"}';
}


?>
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
		."marks varchar(10) not null default 0,"
		."statusOfExam int not null default 0,"
		."activationStatus int not null default 0,"
		."answers varchar(1000),"
		."marked varchar(255),"
		."noOfQuestions int,"
		."primary key(id));";
		
		mysqli_query($con,$createQuery) or die(mysqli_error($con));
		
		$str = file_get_contents('../questions/tests.json');
		$jsonData = json_decode($str, true);
		
		
		
		//echo $answerstring;
		// echo $jsonData["tests"][1]["subjectname"]."1";
		$insertQuery;
		for($i = 0;$i<=4;$i++)
		{
			
			
			
			
			$markedstring="";
			for ($j=1;$j<=$jsonData["tests"][$i]["noOfQuestions"];$j++)
			{
				$markedstring.='0';
			}
			
			$answerstring='{"answers":[{"dummy":""},';
			for($j=1;$j<=$jsonData["tests"][$i]["noOfQuestions"];$j++)
			{
			
				$answerstring.='{"answer":""}';
				if($j!=$jsonData["tests"][$i]["noOfQuestions"])
				{
					$answerstring.=',';
				}
			}
			$answerstring.=']}';
			
			
			
			
		$insertQuery = "insert into `".$emailid.".tests` (testname,subjectname,timer,marks,statusOfExam,activationStatus,answers,marked,noOfQuestions) values("
				."'".$jsonData["tests"][$i]["subjectid"]."',"
				."'".$jsonData["tests"][$i]["subjectname"]."',"
				."'00:29:60',"
				."'0',"
				."0,"
				."'".$jsonData["tests"][$i]["activationStatus"]."',"
				."'".$answerstring."',"
				."'".$markedstring."',"
				.$jsonData["tests"][$i]["noOfQuestions"]
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
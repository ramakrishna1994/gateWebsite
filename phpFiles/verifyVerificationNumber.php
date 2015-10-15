<?php 

require_once 'connection.php';

$emailid=mysqli_real_escape_string($con,$_POST['emailid']);
$verificationnumber=$_POST['verificationnumber'];
//echo $verificationnumber;
$table="users";

$selectQuery = "select verificationnumber from ".$table." where emailid = '".$emailid."';";
$result = mysqli_query($con,$selectQuery) or die(mysqli_error($con));

while($row = mysqli_fetch_array($result))
{
	
	if($row['verificationnumber'] == $verificationnumber)
	{
		$updateQuery = "update ".$table." set activationstatus = 1 where emailid = '".$emailid."';";
		mysqli_query($con,$updateQuery) or die(mysqli_query($con));
		
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
		
		
		echo '{"error":"0"}';
	}
		
	else
		echo '{"error":"1"}';
}



?>
<?php 

require_once 'isSessionSet.php';
require_once 'connection.php';

$_SESSION['examname']=mysqli_real_escape_string($con,$_POST['test']);
$username=$_SESSION['gateusername'];
$tableName=$username.".tests";

$selectQuery = "select activationStatus,noOfQuestions,subjectName from `".$tableName."` where testName = '".$_SESSION['examname']."';";
$result = mysqli_query($con,$selectQuery) or die(mysqli_error($con));

while($row = mysqli_fetch_array($result))
{
	if($row['activationStatus'] == 1)
	{
		$_SESSION['noOfQuestions']=$row['noOfQuestions'];
		$_SESSION['fullNameOfSubject']=$row['subjectName'];
		$updateQuery = "update `".$tableName."` set statusOfExam = 1 where testName = '".$_SESSION['examname']."';";
		mysqli_query($con,$updateQuery) or die(mysqli_error($con));
		echo '{"error":"0"}';
	}
	else
	{
		echo '{"error":"1"}';
	}
}


mysqli_close($con);
?>
<?php 
require_once 'isSessionSet.php';
require_once 'connection.php';

$tablename = $_SESSION['gateusername'].".tests";
$subjectname = $_SESSION['examname'];

$updatequery ="update `".$tablename."` set "
		     ."statusOfExam = 1 "
		     ."where testname = '".$subjectname."';";

mysqli_query($con,$updatequery) or die(mysqli_error($con));

$json ='{"subjectName":"'.$subjectname.'","testStatus":"1"}';

echo $json;


$_SESSION['examname'] = "";
$_SESSION['fullNameOfSubject']="";

mysqli_close($con);
?>
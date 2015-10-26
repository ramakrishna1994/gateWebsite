<?php
require_once 'isSessionSet.php';
header('Content-type: application/json');
require_once 'connection.php';
$tableName=$_SESSION['gateusername'].".tests";
$examname = $_SESSION['examname'];
$filename=$examname."questions";


$selectquery="select * from `".$tableName."` where testName = 'cd01';";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));
$answerarray;
$markedarray;
while($row = mysqli_fetch_array($result))
{
	$answerarray=$row['answers'];
	$markedarray=$row['marked'];
}
echo $answerarray;

$jsondata = json_decode($answerarray,true);

$jsondata["answers"][1]["answer"] = "TENNIS";
$newjson = json_encode($jsondata,true);

$selectquery="update `".$tableName."` set answers = '".$newjson."' where testName = 'cd01';";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));



?>
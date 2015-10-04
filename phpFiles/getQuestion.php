<?php
session_start();
if(!isset($_SESSION['gateusername']) || !isset($_SESSION['examname']))
	header('location:../login.html');



header('Content-type: application/json');
require_once 'connection.php';

$questionNo=$_GET["questionNo"];
$tableName="gateQuestions";
$examname = $_SESSION['examname'];
$filename=$examname."questions"; 


$selectquery="select * from ".$tableName." where questionNo = ".$questionNo.";";

$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$str = file_get_contents('../questions/'.$filename.'.json');
$jsonData = json_decode($str, true);

$json="";

while($row = mysqli_fetch_array($result)){
	$json .='{';
	$json .= '"questionNo":'.'"'.$jsonData["questions"][$questionNo]["questionNo"].'",';
	$json .= '"question":'.'"'.$jsonData["questions"][$questionNo]["question"].'",';
	$json .= '"optionA":'.'"'.$jsonData["questions"][$questionNo]["optionA"].'",';
	$json .= '"optionB":'.'"'.$jsonData["questions"][$questionNo]["optionB"].'",';
	$json .= '"optionC":'.'"'.$jsonData["questions"][$questionNo]["optionC"].'",';
	$json .= '"optionD":'.'"'.$jsonData["questions"][$questionNo]["optionD"].'",';
	$json .= '"answered":'.'"'.$row["answered"].'",';
	$json .= '"current":'.'"'.$questionNo.'"';
    $json .='}';
}


echo $json;

mysqli_close($con);
?>
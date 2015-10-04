<?php
session_start();
if(!isset($_SESSION['gateusername']) || !isset($_SESSION['examname']))
	header('location:../login.html');



header('Content-type: application/json');
$db_host="localhost";
$db_user="gate";
$db_password="gate";
$db_name="gate";
$questionNo=$_GET["questionNo"];
$tableName="gateQuestions";
$examname = $_SESSION['examname'];
$filename=$examname."questions"; 
$con=mysqli_connect($db_host,$db_user,$db_password);

mysqli_select_db($con,$db_name) or die(mysqli_error($con));

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
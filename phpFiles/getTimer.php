<?php
session_start();
if(!isset($_SESSION['gateusername']) || !isset($_SESSION['examname']))
	header('location:../login.html');


$db_host="localhost";
$db_user="gate";
$db_password="gate";
$db_name="gate";
$username=$_SESSION['gateusername'];
$tableName=$username."tests";
$subjectName=$_SESSION['examname'];
$con=mysqli_connect($db_host,$db_user,$db_password);

mysqli_select_db($con,$db_name) or die(mysqli_error());

$selectQuery="select timer from ".$tableName." where testname='".$subjectName."';";

$result=mysqli_query($con,$selectQuery) or die(mysqli_error($con));

$json="";

while($row = mysqli_fetch_array($result)){
	$json .='{';
	$json .= '"timer":'.'"'.$row["timer"].'"';
	$json .='}';
}

echo $json;
mysqli_close($con);
?>
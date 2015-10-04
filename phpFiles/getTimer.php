<?php
session_start();
if(!isset($_SESSION['gateusername']) || !isset($_SESSION['examname']))
	header('location:../login.html');


require_once 'connection.php';

$username=$_SESSION['gateusername'];
$tableName=$username."tests";
$subjectName=$_SESSION['examname'];


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
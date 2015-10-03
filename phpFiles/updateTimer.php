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
$timer=$_POST['timer'];
echo $timer;
$con=mysqli_connect($db_host,$db_user,$db_password);

mysqli_select_db($con,$db_name) or die(mysqli_error());

$insertQuery="update ".$tableName." set timer='".$timer."'  where testname='".$subjectName."';";

mysqli_query($con,$insertQuery) or die(mysqli_error($con));

mysqli_close($con);

?>
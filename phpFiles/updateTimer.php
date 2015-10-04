<?php
session_start();
if(!isset($_SESSION['gateusername']) || !isset($_SESSION['examname']))
	header('location:../login.html');



require_once 'connection.php';

$username=$_SESSION['gateusername'];
$tableName=$username."tests";
$subjectName=$_SESSION['examname'];
$timer=$_POST['timer'];
echo $timer;


$insertQuery="update ".$tableName." set timer='".$timer."'  where testname='".$subjectName."';";

mysqli_query($con,$insertQuery) or die(mysqli_error($con));

mysqli_close($con);

?>
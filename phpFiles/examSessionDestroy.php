<?php 
session_start();
if(!isset($_SESSION['gateusername']))
	header('location:../login.html');

require_once 'connection.php';

$tablename = $_SESSION['gateusername']."tests";
$subjectname = $_SESSION['examname'];

$updatequery ="update ".$tablename." set "
		     ."endofexam = 1 ,"
		     ."timer = '00:00:00' "
		     ."where testname = ".$subjectname.";";

mysqli_query($con,$updatequery) or die(mysqli_error($con));

unset($subjectname);

mysqli_close($con);
?>
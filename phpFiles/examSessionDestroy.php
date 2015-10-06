<?php 
require_once 'isSessionSet.php';
require_once 'connection.php';

$tablename = $_SESSION['gateusername']."tests";
$subjectname = $_SESSION['examname'];

$updatequery ="update ".$tablename." set "
		     ."endofexam = 1 ,"
		     ."timer = '00:00:00' "
		     ."where testname = '".$subjectname."';";

mysqli_query($con,$updatequery) or die(mysqli_error($con));

unset($subjectname);

mysqli_close($con);
?>
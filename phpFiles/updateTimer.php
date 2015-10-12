<?php
require_once 'isSessionSet.php';

require_once 'connection.php';

$username=$_SESSION['gateusername'];
$tableName=$username.".tests";
$subjectName=$_SESSION['examname'];
$timer=mysqli_real_escape_string($con,$_POST['timer']);
echo $timer;


$insertQuery="update `".$tableName."` set timer='".$timer."'  where testname='".$subjectName."';";

mysqli_query($con,$insertQuery) or die(mysqli_error($con));

mysqli_close($con);

?>
<?php 

require_once 'isSessionSet.php';
require_once 'connection.php';

$_SESSION['examname']=mysqli_real_escape_string($con,$_POST['test']);
$username=$_SESSION['gateusername'];
$tableName=$username.".tests";


$updateQuery = "update `".$tableName."` set statusOfExam = 1 where testName = '".$_SESSION['examname']."';";
mysqli_query($con,$updateQuery) or die(mysqli_error($con));



mysqli_close($con);
?>
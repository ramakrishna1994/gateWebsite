<?php 
session_start();
if(!isset($_SESSION['gateusername']))
	header('location:../login.html');

require_once 'connection.php';

$_SESSION['examname']=$_POST['test'];

$username=$_SESSION['gateusername'];
$tableName=$username."tests";

$checkQuery = "select * from ".$tableName." where testname = '".$_SESSION['examname']."';";

$result = mysqli_query($con,$checkQuery) or die(mysqli_error($con));

$insertQuery = "insert into ".$tableName."(testname,timer,marks,endOfExam) values"
		     ."('".$_SESSION['examname']."',"
			 ."'00:29:60',"
			 ."0,0)";

if(mysqli_num_rows($result)==0)
{
	mysqli_query($con,$insertQuery) or die(mysqli_error($con));
}


mysqli_close($con);
?>
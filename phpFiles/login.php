<?php 
session_start();
session_unset();
$username=$_POST['username'];
$password=$_POST['password'];
$table="users";

require_once 'connection.php';

$selectQuery="select * from users where username='".$username."' and password='".$password."' ;";

$result=mysqli_query($con,$selectQuery) or die(mysqli_error($con));

if(mysqli_num_rows($result)>0)
{
	//echo 'login successful';
	$_SESSION['gateusername']=$username;
	echo json_encode(array("error"=>"0"));
}
else 
{
	
  echo json_encode(array("error"=>"1"));
}
  
mysqli_close($con);
?>
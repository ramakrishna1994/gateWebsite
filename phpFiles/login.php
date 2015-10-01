<?php 
session_start();
$username=$_POST['username'];
$password=$_POST['password'];
$table="users";
$db_host="localhost";
$db_user="gate";
$db_password="gate";
$db_name="gate";

$con=mysqli_connect($db_host,$db_user,$db_password);

mysqli_select_db($con,$db_name) or die(mysqli_error());

$selectQuery="select * from users where username='".$username."' and password='".$password."' ;";

$result=mysqli_query($con,$selectQuery) or die(mysqli_error($con));

if(mysqli_num_rows($result)>0)
{
	echo 'login successful';
	$_SESSION['gateusername']=$username;
	header('location:../tests.html');
}
else 
{
	
	echo 'login unsuccessful';
}
?>
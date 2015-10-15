<?php 
session_start();
session_unset();

require_once 'connection.php';

$emailid=mysqli_real_escape_string($con,$_POST['loginemailid']);
$password=mysqli_real_escape_string($con,$_POST['password']);
$table="users";



$selectQuery="select * from users where emailid='".$emailid."' and password='".$password."' ;";

$result=mysqli_query($con,$selectQuery) or die(mysqli_error($con));


if(mysqli_num_rows($result)>0)
{
	while($row=mysqli_fetch_array($result))
	{
		if($row['activationstatus'] == 1)
		{
		$_SESSION['gateusername']=$emailid;
		$_SESSION['gatefirstname']=$row['firstname'];
		$_SESSION['gatelastname']=$row['lastname'];
		echo json_encode(array("error"=>"0"));
		}
		else
		{
			echo json_encode(array("error"=>"2"));
		}
		
	}
	//echo 'login successful';
	
}
else 
{
	
  echo json_encode(array("error"=>"1"));
}
  
mysqli_close($con);
?>
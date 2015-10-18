<?php 
require_once 'isSessionSet.php';
require_once 'connection.php';

$emailid = $_SESSION['gateusername'];
$selectQuery = "select * from users where emailid = '".$emailid."';";
$result = mysqli_query($con,$selectQuery);



		
$json = "{";
while($row = mysqli_fetch_array($result))
{
	
	$json .='"firstname":"'.$row['firstname'].'",'
	      .'"lastname":"'.$row['lastname'].'",'
	      .'"image":"'.$row['emailid'].'"'
	      ."}";
}
echo $json;

?>
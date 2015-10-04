<?php
session_start();
if(!isset($_SESSION['gateusername']) || !isset($_SESSION['examname']))
	header('location:../login.html');



header('Content-type: application/json');

require_once 'connection.php';


$tableName="gateQuestions";



$selectquery="select * from ".$tableName.";";

$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$json="[";

while($row = mysqli_fetch_array($result)){
	$json .='{';
	$json .= '"questionNo":'.'"'.$row["questionNo"].'",';
	$json .= '"marked":'.'"'.$row["marked"].'"';
	$json .='}';
   
	if($row['questionNo']!='30')
		$json .=',';
}
$json .="]";
echo $json;

mysqli_close($con);
?>
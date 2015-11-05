<?php 
require_once 'isSessionSet.php';
require_once 'connection.php';
header('Content-type: application/json');

$tableName=$_SESSION['gateusername'].".tests";
$subjectname=mysqli_real_escape_string($con,$_POST['subject']);;


$selectquery="select noOfQuestions,activationStatus from `".$tableName."` where testname = '".$subjectname."' ;";

$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$json="";

while($row = mysqli_fetch_array($result)){
	$json .='{';
	if($row['activationStatus']==1)
			$json .= '"noOfQuestions":'.$row['noOfQuestions'];
	else 
			$json .='"error":"1"';
	$json .='}';
	 
}

echo $json;

mysqli_close($con);


?>
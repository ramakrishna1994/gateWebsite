<?php
header('Content-type: application/json');
$db_host="localhost";
$db_user="gate";
$db_password="gate";
$db_name="gate";
$questionNo=$_GET["questionNo"];

$con=mysqli_connect($db_host,$db_user,$db_password);

mysqli_select_db($con,$db_name) or die(mysqli_error());

$selectquery="select * from gatequestions where questionNo = ".$questionNo.";";

$result=mysqli_query($con,$selectquery) or die(mysqli_error());

$json="";

while($row = mysqli_fetch_array($result)){
	$json .='{';
	$json .= '"questionNo":'.'"'.$row["questionNo"].'",';
	$json .= '"question":'.'"'.$row["question"].'",';
	$json .= '"optionA":'.'"'.$row["optionA"].'",';
	$json .= '"optionB":'.'"'.$row["optionB"].'",';
	$json .= '"optionC":'.'"'.$row["optionC"].'",';
	$json .= '"optionD":'.'"'.$row["optionD"].'",';
	$json .= '"answered":'.'"'.$row["answered"].'",';
	$json .= '"current":'.'"'.$questionNo.'"';
    $json .='}';
}

echo $json;

?>
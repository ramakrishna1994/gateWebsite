<?php
header('Content-type: application/json');
$db_host="localhost";
$db_user="gate";
$db_password="gate";
$db_name="gate";
$questionNo=$_GET["questionNo"];
$tableName="gatequestions";
$answer=$_GET["answer"];
$marked=$_GET["marked"];


$con=mysqli_connect($db_host,$db_user,$db_password);

mysqli_select_db($con,$db_name) or die(mysqli_error());

if($answer!=-1)
{
	
$updatequery="update ".$tableName." set answered ='".$answer."',marked='".$marked."' where questionNo=".$questionNo.";";

mysqli_query($con,$updatequery);
}

$questionNo=$questionNo+1;

if($questionNo==31)
	$questionNo=1;

$selectquery="select * from ".$tableName." where questionNo = ".$questionNo.";";


$result=mysqli_query($con,$selectquery) or die(mysqli_error());
$str = file_get_contents('http://localhost/gate/questions.json');
$jsonData = json_decode($str, true);

$json="";

while($row = mysqli_fetch_array($result)){
	$json .='{';
	$json .= '"questionNo":'.'"'.$jsonData["questions"][$questionNo]["questionNo"].'",';
	$json .= '"question":'.'"'.$jsonData["questions"][$questionNo]["question"].'",';
	$json .= '"optionA":'.'"'.$jsonData["questions"][$questionNo]["optionA"].'",';
	$json .= '"optionB":'.'"'.$jsonData["questions"][$questionNo]["optionB"].'",';
	$json .= '"optionC":'.'"'.$jsonData["questions"][$questionNo]["optionC"].'",';
	$json .= '"optionD":'.'"'.$jsonData["questions"][$questionNo]["optionD"].'",';
	$json .= '"answered":'.'"'.$row["answered"].'",';
	$json .= '"current":'.'"'.$questionNo.'"';
	$json .='}';
}



echo $json;

?>
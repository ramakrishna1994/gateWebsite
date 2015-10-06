<?php
require_once 'isSessionSet.php';
header('Content-type: application/json');
require_once 'connection.php';
$questionNo=$_GET["questionNo"];
$tableName=$_SESSION['gateusername']."tests";
$answer=$_GET["answer"];
$marked=$_GET["marked"];
$examname = $_SESSION['examname'];
$filename=$examname."questions";


$selectquery="select * from ".$tableName." where testName = '".$examname."';";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));
$answerarray;
$markedarray;
while($row = mysqli_fetch_array($result))
{
	$answerarray=$row['answers'];
	$markedarray=$row['marked'];
}
//echo $answerarray;
//echo $markedarray;
 
$answerarray[$questionNo-1] = $answer;
$markedarray[$questionNo-1] = $marked; 

if($answer!=-1)
{
	
$updatequery="update ".$tableName." set answers ='".$answerarray."',marked='".$markedarray."' where testName='".$examname."';";

mysqli_query($con,$updatequery);
}

$questionNo=$questionNo+1;

if($questionNo==31)
	$questionNo=1;


$str = file_get_contents('../questions/'.$filename.'.json');
$jsonData = json_decode($str, true);




	$json  ='{';
	$json .= '"questionNo":'.'"'.$jsonData["questions"][$questionNo]["questionNo"].'",';
	$json .= '"question":'.'"'.$jsonData["questions"][$questionNo]["question"].'",';
	$json .= '"optionA":'.'"'.$jsonData["questions"][$questionNo]["optionA"].'",';
	$json .= '"optionB":'.'"'.$jsonData["questions"][$questionNo]["optionB"].'",';
	$json .= '"optionC":'.'"'.$jsonData["questions"][$questionNo]["optionC"].'",';
	$json .= '"optionD":'.'"'.$jsonData["questions"][$questionNo]["optionD"].'",';
	$json .= '"answered":'.'"'.$answerarray[$questionNo-1].'",';
	$json .= '"current":'.'"'.$questionNo.'"';
	$json .='}';




echo $json;

mysqli_close($con);

?>
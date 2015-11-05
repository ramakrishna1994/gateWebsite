<?php
require_once 'isSessionSet.php';
header('Content-type: application/json');
require_once 'connection.php';
$questionNo=mysqli_real_escape_string($con,$_GET["questionNo"]);
$tableName=$_SESSION['gateusername'].".tests";
$answer=mysqli_real_escape_string($con,$_GET["answer"]);
$marked=mysqli_real_escape_string($con,$_GET["marked"]);
$examname = $_SESSION['examname'];
$filename=$examname."questions";

//echo $answer;
$selectquery="select answers,marked,activationStatus from `".$tableName."` where testName = '".$examname."';";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));
$answerarray;
$markedarray;
$activationStatus;
while($row = mysqli_fetch_array($result))
{
	$answerarray=$row['answers'];
	$markedarray=$row['marked'];
	$activationStatus = $row['activationStatus'];
}

$answerjsondata = json_decode($answerarray,true);
$answerjsondata["answers"][$questionNo]["answer"]=$answer;

//echo $answerarray;
//echo $markedarray;
 

$markedarray[$questionNo-1] = $marked; 


$questionNo=$questionNo+1;

if($questionNo==$_SESSION['noOfQuestions']+1)
	$questionNo=1;


$str = file_get_contents('../questions/'.$filename.'.json');
$jsonData = json_decode($str, true);

$json="";
if($activationStatus == 1)
{
	$json  ='{';
	$json .= '"questionNo":'.'"'.$jsonData["questions"][$questionNo]["questionNo"].'",';
	$json .= '"question":'.'"'.$jsonData["questions"][$questionNo]["question"].'",';
	$json .= '"optionA":'.'"'.$jsonData["questions"][$questionNo]["optionA"].'",';
	$json .= '"optionB":'.'"'.$jsonData["questions"][$questionNo]["optionB"].'",';
	$json .= '"optionC":'.'"'.$jsonData["questions"][$questionNo]["optionC"].'",';
	$json .= '"optionD":'.'"'.$jsonData["questions"][$questionNo]["optionD"].'",';
	$json .= '"isNumerical":'.'"'.$jsonData["questions"][$questionNo]["isNumerical"].'",';
	$json .= '"isImage":'.'"'.$jsonData["questions"][$questionNo]["isImage"].'",';
	$json .= '"imagePath":'.'"'.$jsonData["questions"][$questionNo]["imagePath"].'",';
	$json .= '"answered":'.'"'.$answerjsondata["answers"][$questionNo]["answer"].'",';
	$json .= '"current":'.'"'.$questionNo.'"';
	$json .='}';


	$newanswerjsondata = json_encode($answerjsondata,true);
	

	if($answer!=-1)
	{
		$updatequery="update `".$tableName."` set answers ='".$newanswerjsondata."',marked='".$markedarray."' where testName='".$examname."';";
		mysqli_query($con,$updatequery);
	}

}
else
{
	$json='{"error":"1"}';
}
	
echo $json;

mysqli_close($con);

?>
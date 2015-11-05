<?php
require_once 'isSessionSet.php';
header('Content-type: application/json');
require_once 'connection.php';

$questionNo=mysqli_real_escape_string($con,$_GET["questionNo"]);
$tableName=$_SESSION['gateusername'].".tests";
$examname = $_SESSION['examname'];
$filename=$examname."questions"; 

//echo $filename;
$selectquery="select answers,activationStatus from `".$tableName."` where testName = '".$examname."';";

$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$str = file_get_contents('../questions/'.$filename.'.json');
$jsonData = json_decode($str, true);



$json="";

while($row = mysqli_fetch_array($result)){
	
	if($row['activationStatus']!=0)
	{
		$json .='{';
		$json .= '"questionNo":'.'"'.$jsonData["questions"][$questionNo]["questionNo"].'",';
		$json .= '"question":'.'"'.$jsonData["questions"][$questionNo]["question"].'",';
		$json .= '"optionA":'.'"'.$jsonData["questions"][$questionNo]["optionA"].'",';
		$json .= '"optionB":'.'"'.$jsonData["questions"][$questionNo]["optionB"].'",';
		$json .= '"optionC":'.'"'.$jsonData["questions"][$questionNo]["optionC"].'",';
		$json .= '"optionD":'.'"'.$jsonData["questions"][$questionNo]["optionD"].'",';
		$json .= '"isNumerical":'.'"'.$jsonData["questions"][$questionNo]["isNumerical"].'",';
		$json .= '"isImage":'.'"'.$jsonData["questions"][$questionNo]["isImage"].'",';
		$json .= '"imagePath":'.'"'.$jsonData["questions"][$questionNo]["imagePath"].'",';
	
		$answerjsondata = json_decode($row["answers"],true);
	
		$json .= '"answered":'.'"'.$answerjsondata["answers"][$questionNo]["answer"].'",';
		$json .= '"current":'.'"'.$questionNo.'"';
	    $json .='}';
	}
	else
	{
		$json ='{"error":"1"}';
	}
}


echo $json;

mysqli_close($con);
?>
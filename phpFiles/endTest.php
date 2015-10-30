<?php 
require_once 'isSessionSet.php';
require_once 'isExamSessionSet.php';
require_once 'connection.php';

//echo $_SESSION['examname'];
$tableName=$_SESSION['gateusername'].".tests";
$examname = $_SESSION['examname'];
$filename=$examname."questions";
$total = 0;

$str = file_get_contents('../questions/'.$filename.'.json');
$jsonData = json_decode($str, true);

$selectQuery = "select * from `".$tableName."` where testName = '".$examname."' ;";
$result = mysqli_query($con,$selectQuery) or die(mysqli_error($con));
$answerarray;

while($row = mysqli_fetch_array($result))
{
	$answerarray = $row['answers'];
}

$answerjsondata = json_decode($answerarray,true);

for($i=1;$i<=$_SESSION['noOfQuestions'];$i++)
{
	$val = $answerjsondata["answers"][$i]["answer"];
	if($jsonData["questions"][$i]["answer"] == $val)
	{
		$total = $total + $jsonData["questions"][$i]["marks"];
	}
	else
	 {
	 	$total = $total - ($jsonData["questions"][$i]["marks"] / 3);
	}
	//echo 1;
}

$updateQuery = "update `".$tableName."` set marks='".$total."',timer='00:00:00',statusOfExam=2 where testName = '".$examname."';";
mysqli_query($con,$updateQuery) or die(mysqli_error($con));

echo $total;

$_SESSION['examname'] = "";

mysqli_close($con);
?>
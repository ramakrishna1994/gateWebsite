<?php 
require_once 'isSessionSet.php';
require_once 'connection.php';


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

$val = $answerarray[9];
//echo $val;
//echo $jsonData["questions"][1]["answer"];
for($i=0;$i<30;$i++)
{
	$val = $answerarray[$i];
	if($jsonData["questions"][$i+1]["answer"] == $val)
	{
		$total = $total + $jsonData["questions"][$i+1]["marks"];
	}
	else
	 {
	 	$total = $total - ($jsonData["questions"][$i+1]["marks"] / 3);
	}
	echo 1;
}

$updateQuery = "update `".$tableName."` set marks = ".$total.",statusOfExam = 2,timer = '00:00:00' where testName = '".$examname."';";
mysqli_query($con,$updateQuery) or die(mysqli_error($con));

echo $total;

mysqli_close($con);
?>
<?php 


require_once 'isSessionSet.php';
header('Content-type: application/json');
require_once 'connection.php';


$tableName=$_SESSION['gateusername'].".tests";
$examname = mysqli_real_escape_string($con,$_POST["subject"]);;
$filename=$examname."questions";

//echo $filename;
$selectquery="select answers,marks from `".$tableName."` where testName = '".$examname."';";

$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$str = file_get_contents('../questions/'.$filename.'.json');
$jsonData = json_decode($str, true);




$i =1;
$answerjsondata ="";
$json = "";
while($row = mysqli_fetch_array($result)){

	$answerjsondata = json_decode($row["answers"],true);
	$json .= '[{"totalMarks":'.number_format((float)$row["marks"], 2, '.', '').'},';
			
}



for($i=1;$i<=$jsonData["questions"][0]["noOfQuestions"];$i++)
{
	
		$json .='{';
		
		$json .= '"questionNo":'.'"'.$jsonData["questions"][$i]["questionNo"].'",';
		$json .= '"isNumerical":'.'"'.$jsonData["questions"][$i]["isNumerical"].'",';
		$json .= '"marks":'.$jsonData["questions"][$i]["marks"].',';
		
		if($answerjsondata["answers"][$i]["answer"] == $jsonData["questions"][$i]["answer"])
		{
				$json .= '"yourMarks":'.$jsonData["questions"][$i]["marks"].',';
				$json .= '"correct":'.'1';
				
		}
		else if($jsonData["questions"][$i]["isNumerical"] == '1')
		{
				$json .= '"yourMarks":'.'0,';
				$json .= '"correct":'.'0';
		}
		else 
		{	
				$json .= '"yourMarks":'.-number_format((float)($jsonData["questions"][$i]["marks"] / 3), 2, '.', '').',';
				$json .= '"correct":'.'0';
		}
		
		$json.='}';
		
		if($i!=$jsonData["questions"][0]["noOfQuestions"])
				$json.=',';
	
}

$json .= ']';


echo $json;

mysqli_close($con);

?>
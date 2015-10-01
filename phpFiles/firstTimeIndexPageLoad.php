<?php
header('Content-type: application/json');
$db_host="localhost";
$db_user="gate";
$db_password="gate";
$db_name="gate";
$tableName="gatequestions";


$con=mysqli_connect($db_host,$db_user,$db_password);

mysqli_select_db($con,$db_name) or die(mysqli_error());

$selectquery="select * from ".$tableName.";";

$result=mysqli_query($con,$selectquery) or die(mysqli_error());

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

?>
<?php

require_once 'isSessionSet.php';
require_once 'connection.php';
header('Content-type: application/json');

$tableName=$_SESSION['gateusername'].".tests";
$subjectname=$_SESSION['examname'];


$selectquery="select marked from `".$tableName."` where testname = '".$subjectname."' ;";

$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$json="";

while($row = mysqli_fetch_array($result)){
	$json .='{';
    $json .= '"marked":'.'"'.$row["marked"].'"';
	$json .='}';
   
}

echo $json;

mysqli_close($con);
?>
<?php 
require_once 'isSessionSet.php';
require_once 'connection.php';

$tablename = $_SESSION['gateusername'].".tests";

$selectQuery = "select testName,statusOfExam,subjectName,activationStatus from `".$tablename."` where statusOfExam <> 2 order by activationStatus desc;";
$result = mysqli_query($con,$selectQuery) or die(mysqli_error($con));

$testsArray;
$json="[";
$out = array();
while($row = mysqli_fetch_array($result))
 {
  $out[] = array($row['testName'], $row['statusOfExam'],$row['subjectName'],$row['activationStatus']);
 }
echo json_encode($out);
mysqli_close($con);
?>
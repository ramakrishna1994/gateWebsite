<?php
require_once 'isSessionSet.php';
header('Content-type: application/json');
require_once 'connection.php';
$tableName=$_SESSION['gateusername'].".tests";
$examname = $_SESSION['examname'];
$filename=$examname."questions";


$str = file_get_contents('../questions/dummy.json');
$jsonData = json_decode($str, true);

echo $jsonData["questions"][1]["questionNo"];
?>
<?php 

require_once 'connection.php';
require_once 'isSessionSet.php';

$table = $_SESSION['gateusername'].'.tests';
$subjectName = mysqli_real_escape_string($con,$_POST['subject']);

$selectQuery= "select marks from `".$table."` where testName = '".$subjectName."';";
$result = mysqli_query($con,$selectQuery) or die(mysqli_error($con));

while($row = mysqli_fetch_array($result))
{
	
	echo '{"score":"'.$row['marks'].'"}';
	
}

mysqli_close($con);
?>
<?php 

require_once 'connection.php';
require_once 'isSessionSet.php';
require_once 'isExamSessionSet.php';

$table = $_SESSION['gateusername'].'.tests';
$selectQuery = "select activationStatus from `".$table."` where testName = '".$_SESSION['examname']."';";
$result=mysqli_query($con,$selectQuery) or die(mysqli_error($con));

while($row = mysqli_fetch_array($result))
{
	if($row['activationStatus'] != 1)
	{
		header('location:../gate/notSubscribed.php');
	}
}

mysqli_close($con);

?>
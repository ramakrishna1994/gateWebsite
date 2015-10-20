<?php 

$db_host="localhost";
$db_user="gate";
$db_password="gate";
$db_name="gate";



$con=mysqli_connect($db_host,$db_user,$db_password);

mysqli_select_db($con,$db_name) or die(mysqli_error($con));


?>
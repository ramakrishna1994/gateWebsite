<?php 

$db_host="localhost";
$db_user="gate";
$db_password="Saradhi@2";
$db_name="gate2016";



$con=mysqli_connect($db_host,$db_user,$db_password);

mysqli_select_db($con,$db_name) or die(mysqli_error($con));


?>
<?php 

$username=$_POST['username'];
$password=$_POST['password'];
$table="users";
$db_host="localhost";
$db_user="gate";
$db_password="gate";
$db_name="gate";

$con=mysqli_connect($db_host,$db_user,$db_password);

mysqli_select_db($con,$db_name) or die(mysqli_error($con));

$createQuery="create table if not exists ".$table."(id int not null auto_increment,username varchar(100),password varchar(100),primary key(id));";

mysqli_query($con,$createQuery) or die(mysqli_error($con));

$insertQuery="insert into ".$table."(username,password) values ('".$username."','".$password."');";

mysqli_query($con,$insertQuery) or die(mysqli_error($con));


?>
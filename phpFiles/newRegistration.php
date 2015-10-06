<?php 

$username=$_POST['username'];
$password=$_POST['password'];
$table="users";
require_once 'connection.php';

$createQuery="create table if not exists ".$table."("
              ."id int not null auto_increment,"
              ."username varchar(100),"
              ."password varchar(100),"
              ."primary key(id));";

mysqli_query($con,$createQuery) or die(mysqli_error($con));

$insertQuery="insert into ".$table."(username,password) values ('".$username."','".$password."');";

mysqli_query($con,$insertQuery) or die(mysqli_error($con));

$createQuery="create table ".$username."tests("
             ."id int not null auto_increment,"
             ."testName varchar(100),"
             ."timer varchar(20),"
             ."marks int not null default 0,"
             ."endOfExam int not null default 0,"
             ."answers varchar(255),"
             ."marked varchar(255),"
             ."primary key(id));";

mysqli_query($con,$createQuery) or die(mysqli_error($con));

mysqli_close($con);
?>
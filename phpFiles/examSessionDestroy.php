<?php 
session_start();
if(!isset($_SESSION['gateusername']))
	header('location:../login.html');
session_unset($_SESSION['examname']);


?>
<?php 
session_start();
if(isset($_SESSION['gateusername']))
	 session_destroy();
header('location:../login.html');
?>
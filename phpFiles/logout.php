<?php 
session_start();
if(!isset($_SESSION['gateusername']))
{
	
   header('location:../login.html');
}

session_destroy();

?>
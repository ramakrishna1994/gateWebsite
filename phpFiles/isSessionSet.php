<?php 
session_start();
if(!isset($_SESSION['gateusername']))
	header('location:/gate/index.html');
?>
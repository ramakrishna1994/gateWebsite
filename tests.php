<?php
session_start();
if(!isset($_SESSION['gateusername']))
  header('location:login.html');

echo $_SESSION['gateusername'];

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>tests</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="js/tests.js"></script>
</head>
<body>
<input type="button" value="COMPUTER NETWORKS TEST" onclick="openPopUp('cn01')">
<input type="button" value="log out" onclick="logout()">
</body>
</html>
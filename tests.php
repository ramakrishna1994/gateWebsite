<?php
session_start();
if(!isset($_SESSION['gateusername']))
  header('location:login.html');

echo "WELCOME ".$_SESSION['gateusername'];

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>tests</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="js/tests.js"></script>
<link rel="stylesheet" type="text/css" href="css/tests.css">
</head>
<body>

<input type="button" value="log out" onclick="logout()">
 <div id="testsContainer">
 <div>
  <div class="subjectContainer">CN</div>
  <div class="statusContainer" onclick="openExamWindow('cn01')">START TEST</div>
 </div>
 <div>
  <div class="subjectContainer">CO</div>
  <div class="statusContainer" onclick="openExamWindow('co01')">START TEST</div>
 </div>
 <div>
  <div class="subjectContainer">TOC</div>
  <div class="statusContainer" onclick="openExamWindow('toc01')">START TEST</div>
 </div>
 <div>
  <div class="subjectContainer">CD</div>
  <div class="statusContainer" onclick="openExamWindow('cd01')">START TEST</div>
 </div>
 </div>
</body>
</html>
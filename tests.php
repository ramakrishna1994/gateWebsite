<?php
session_start();
if(!isset($_SESSION['gateusername']))
  header('location:login.html');
//echo "WELCOME ".$_SESSION['gateusername'];
?>

<html>
<head>
<link rel="stylesheet" type="text/css" href="css/tests.css">
<script type="text/javascript" src="js/jquery-min.js"></script>
<script type="text/javascript" src="js/tests.js"></script>


</head>
<body>
<div class="mainDivision">
  <div class="headerDivision">
   <div class="Division1">WELCOME</div>
   <div class="Division2">GATE ONLINE</div>
   <div class="logOutDivision"><div class="logOutButtonDivision" onclick="logout()">LOG OUT</div></div>
   <div class="Division1">
   <?php 
   echo $_SESSION['gateusername'];
   ?>
   </div>
   <div class="division2">TEST SERIES</div>
  </div>
  
  <div class="sideBarDivision">
    <div class="profilePictureDivision"><img src="images/user.jpg" style="height:90px;width:90px"></div>
    <div class="sideBarDivision1" onclick="updateProfile()">UPDATE PROFILE</div>
    <div class="sideBarDivision1" onclick="accountSettings()">ACCOUNT SETTINGS</div>
    <div class="sideBarDivision1" onclick="buyTestSeries()">BUY TEST SERIES</div>
  </div>
  
  <div class="mainTestsDivision">
    <div class="testsheaderDivision">
       <div class="snoDivision1">S.NO</div>
       <div class="testNameDivision1">TEST NAME</div>
       <div class="testStatusDivision1">TEST STATUS</div>
    </div>
    <div class="testsDivision" id="testsDivision">
    <!-- ---------this division will be loaded automatically -->
       <div class="snoDivision">1</div>
       <div class="testNameDivision">CN</div>
       <div class="testStatusDivision">Cn</div>
    <!-- ---------------------------------------------------- -->
  
    </div>
  </div>
</div>

</body>
</html>
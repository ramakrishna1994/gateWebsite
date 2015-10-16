<?php 
require_once '/phpFiles/isSessionSet.php';
?>

<html>
<head>
<link rel="stylesheet" type="text/css" href="css/tests.css">
<link rel="stylesheet" type="text/css" href="css/profile.css">
<script type="text/javascript" src="js/jquery-min.js"></script>
<script type="text/javascript" src="js/tests.js"></script>
<script type="text/javascript" src="js/getAndUpdateProfile.js"></script>


</head>
<body>
<div class="mainDivision">
  <div class="headerDivision">
   <div class="Division1">WELCOME</div>
   <div class="Division2">GATE ONLINE</div>
   <div class="logOutDivision"><div class="logOutButtonDivision" onclick="logout()">LOG OUT</div></div>
   <div class="Division1">
   <?php 
   echo $_SESSION['gatefirstname'].' '.$_SESSION['gatelastname'];
   ?>
   </div>
   <div class="division2">TEST SERIES</div>
  </div>
  
  <div class="sideBarDivision">
    <div class="profilePictureDivision"><img src="images/user.jpg" style="height:90px;width:90px"></div>
    <div class="sideBarDivision1" onclick="getProfile()">UPDATE PROFILE</div>
    <div class="sideBarDivision1" onclick="accountSettings()">ACCOUNT SETTINGS</div>
    <div class="sideBarDivision1" onclick="buyTestSeries()">BUY TEST SERIES</div>
  </div>
  
  <div class="mainDivision1" id="mainDivision1">
    
    <!-- ---------this division will be loaded automatically -->
      
    <!-- ---------------------------------------------------- -->
  
    </div>
  </div>
</div>

</body>
</html>
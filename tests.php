<?php 
require_once 'phpFiles/isSessionSet.php';
?>

<html>
<head>
<link rel="stylesheet" type="text/css" href="css/tests.css">
<link rel="stylesheet" type="text/css" href="css/aboutUs.css">
<link rel="stylesheet" type="text/css" href="css/profile.css">
<link rel="stylesheet" type="text/css" href="css/accounts.css">
<link rel="stylesheet" type="text/css" href="css/syllabus.css">
<link rel="stylesheet" type="text/css" href="css/contactUs.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="js/tests.js"></script>
<script type="text/javascript" src="js/getAndUpdateProfile.js"></script>
<script type="text/javascript" src="js/getAndUpdateAccountSettings.js"></script>
<script type="text/javascript" src="js/getSyllabus.js"></script>
<script type="text/javascript" src="js/contactUs.js"></script>

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
    <div class="profilePictureDivision" id="profilePicture" ><img src="profilePictures/<?php echo $_SESSION['gateimage'] ?>" style="height:90px;width:90px"></div>
    <div class="sideBarDivision1" onclick="getTests()">MY TESTS</div>
    <div class="sideBarDivision1" onclick="getSyllabus()">TESTS SYLLABUS</div>
    <div class="sideBarDivision1" onclick="getProfile(0)">UPDATE PROFILE</div>
    <div class="sideBarDivision1" onclick="getAccountSettings(0)">ACCOUNT SETTINGS</div>
    <div class="sideBarDivision1" onclick="buyTestSeries()">BUY TEST SERIES</div>
    <div class="sideBarDivision1" onclick="displayAboutUs()">ABOUT US</div>
    <div class="sideBarDivision1" onclick="contactUs()">CONTACT US</div>
  </div>
  
  <div class="mainDivision1" id="mainDivision1" >
    
    <!-- ---------this division will be loaded automatically -->
      
    <!-- ---------------------------------------------------- -->
    
    </div>
  </div>


</body>
</html>
<?php 
require_once 'phpFiles/isSessionSet.php';
?>

<html>
<head>
<link rel="stylesheet" type="text/css" href="css/tests.css">
<link rel="stylesheet" type="text/css" href="css/showAnswers.css">
<link rel="stylesheet" type="text/css" href="css/buyTestSeries.css">
<link rel="stylesheet" type="text/css" href="css/aboutUs.css">
<link rel="stylesheet" type="text/css" href="css/profile.css">
<link rel="stylesheet" type="text/css" href="css/accounts.css">
<link rel="stylesheet" type="text/css" href="css/syllabus.css">
<link rel="stylesheet" type="text/css" href="css/contactUs.css">
<script src="js/jquery-min.js"></script>
<script type="text/javascript" src="js/tests.js"></script>
<script type="text/javascript" src="js/getAndUpdateProfile.js"></script>
<script type="text/javascript" src="js/getAndUpdateAccountSettings.js"></script>
<script type="text/javascript" src="js/getSyllabus.js"></script>
<script type="text/javascript" src="js/contactUs.js"></script>
<script type="text/javascript" src="js/showAnswers.js"></script>

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
    <div class="tabSelected" onclick="clickTab(1)" id="tab1"  >MY TESTS</div>
    <div class="tabNotSelected" onclick="clickTab(2)" id="tab2" >TEST RESULTS</div>
    <div class="tabNotSelected" onclick="clickTab(3)" id="tab3" >TESTS SYLLABUS</div>
    <div class="tabNotSelected" onclick="clickTab(4)" id="tab4" >UPDATE PROFILE</div>
    <div class="tabNotSelected" onclick="clickTab(5)" id="tab5" >ACCOUNT SETTINGS</div>
    <div class="tabNotSelected" onclick="clickTab(6)" id="tab6" >BUY TEST SERIES</div>
    <div class="tabNotSelected" onclick="clickTab(7)" id="tab7" >ABOUT US</div>
    <div class="tabNotSelected" onclick="clickTab(8)" id="tab8" >CONTACT US</div>
  </div>
  
  
  
  
  <div class="popupDivision" id="popup" >
   
   	 <div id="popupCloseDivision" onClick="closePopup()">
   	   <img src="images/close.png" style="height:20px;width:20px;border-radius:50%" >
   	 </div>
   		
      
    	<div id="popupQuestionsDivision">
    	
    	</div>
    	
       <div id ="popupPreviousDivision">PREVIOUS</div>
       <div id="popupRightOrWrongDivision"></div>
    	<div id="popupQuestionNoDivision">
    	
    	</div>
    	<div id="popupMarksDivision"></div>
    	<div id ="popupNextDivision">NEXT</div>
    <div id="popupMarksDistributionDivision">
    
    </div>	
    <div id="popupMainDivision" >
    	<div id="popupQuestionDivision">
    	
    	</div>
    	<div id="popupImageDivision">
    	
    	</div>
    	
    	<div class="optionDivision" id="popupOptionDivision1">A</div>
    	<div id="popupoptionADivision">
    	
    	</div>
    	
    	<div class="optionDivision" id="popupOptionDivision2">B</div>
        <div id="popupoptionBDivision">
    	
    	</div>
    	
    	<div class="optionDivision" id="popupOptionDivision3">C</div>
       <div id="popupoptionCDivision">
    	
    	</div>
    	
    	<div class="optionDivision" id="popupOptionDivision4">D</div>
       <div id="popupoptionDDivision">
    	
       </div>
       
       
       <div id="popupYourAnswerDivision">
    	
       </div>
       <div id="popupViewSolutionDivision" onclick = "viewSolution()">
         VIEW SOLUTION
       </div>
       <div id="popupCorrectAnswerDivision">
    	
       </div>
       
       <div id="popupSolutionDivision">
       </div>
    </div>
  
  </div>
  
  
  
  
  <div class="sideBarDivision1">
   
   
    <div style="margin-top:130px;background-image:url('images/background.png');width:20px;height:20px;" id="showtab1"  ></div>
    <div style="margin-top:35px;background-image:;width:20px;height:20px;" id="showtab2"  ></div>
    <div style="margin-top:29px;background-image:;width:20px;height:20px;" id="showtab3"  ></div>
    <div style="margin-top:32px;background-image:;width:20px;height:20px;" id="showtab4"  ></div>
    <div style="margin-top:32px;background-image:;width:20px;height:20px;" id="showtab5"  ></div>
    <div style="margin-top:33px;background-image:;width:20px;height:20px;" id="showtab6"  ></div>
    <div style="margin-top:32px;background-image:;width:20px;height:20px;" id="showtab7"  ></div>
    <div style="margin-top:32px;background-image:;width:20px;height:20px;" id="showtab8"  ></div>
  </div>
  
  <div class="mainDivision1" id="mainDivision1" >
    
    <!-- ---------this division will be loaded automatically -->
      
    <!-- ---------------------------------------------------- -->
    </div>
  </div>


</body>
</html>
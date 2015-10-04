<?php
session_start();
if(!isset($_SESSION['gateusername']))
{
 header('location:login.html');
}


echo $_SESSION['examname'];
echo $_SESSION['gateusername'];
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/index.css">
 <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
</head>
<body>
<script src = "js/firstTimeIndexPageLoad.js"></script>
<script src = "js/getAndUpdateTimer.js"></script>
 <script src = "js/getQuestion.js"></script>
 <script src = "js/saveAndNext.js"></script>
 <script src = "js/reviewAndNext.js"></script>
<div id="mainDivision">
  <div id="timerDivision">
    <div id="secondsDivision"></div>
    <div id="columnDivision">:</div>
    <div id="minutesDivision"></div>
    <div id="columnDivision">:</div>
    <div id="hoursDivision"></div>
    
  </div>
  <div id="questionDivision">
      <div id="questionNo">
        1
      </div>
      <div id="question">
      
        <img src="images/loader.gif" style="height: 40px;width: 40px">
      </div>
      <div>
           <div id="optionABox">
             <input type="radio" id="optionARadio" name="option" value="A"><p id="optionA">
                 <img src="images/loader.gif" style="height: 40px;width: 40px;">
             </p>
           </div>
           <div id="optionBBox">
              <input type="radio" id="optionBRadio" name="option" value="B"><p id="optionB"> 
                <img src="images/loader.gif" style="height: 40px;width: 40px">
              </p>
           </div>
      </div>
      <div>
           <div id="optionCBox">
             <input type="radio" id="optionCRadio" name="option" value="C"> <p id="optionC">
               <img src="images/loader.gif" style="height: 40px;width: 40px">
             </p>
           </div>
           <div id="optionDBox">
              <input type="radio" id="optionDRadio" name="option" value="D"> <p id="optionD">
                <img src="images/loader.gif" style="height: 40px;width: 40px">
              </p>
           </div>
      </div>
      <div id="submitDivision">
        <div id="saveAndNextDivision" onclick="saveAndNext(1)">
        save and next
        </div>
        <div id="reviewAndNextDivision" onclick="reviewAndNext(1)">
        Mark for Review and Next
        </div>
      </div>
  </div>
  <div id="questionSelectorDivision">
      
      <div id="questionsDivision">
        
        <!-- division will be loaded -->
    <img src="images/loader.gif" style="height: 40px;width: 40px;padding-top: 50%">
     </div>  
   </div>
</div>

</body>
</html>
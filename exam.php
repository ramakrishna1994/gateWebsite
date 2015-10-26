<?php 
require_once 'phpFiles/isSessionSet.php';
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/exam.css">
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src = "js/firstTimeIndexPageLoad.js"></script>
<script src = "js/getAndUpdateTimer.js"></script>
 <script src = "js/getQuestion.js"></script>
 <script src = "js/saveAndNext.js"></script>
 <script src = "js/reviewAndNext.js"></script>
 
 </head>
<body>
<div class="mainDivision">

<div class="headerDivision">
	<div class="timerDivision">
		
		<div id="secondsDivision"></div>
    	<div id="columnDivision">:</div>
    	<div id="minutesDivision"></div>
    	<div id="columnDivision">:</div>
    	<div id="hoursDivision"></div>
    
	</div>
</div>

<div class="mainTestDivision">

    	<div class="questionNoDivision" id="questionNo">
      	QUESTION NO : 01
  		</div>
 		
 		<div class="questionDivision" id="question">
    		asdnlansdlansdlandlasndannnnnnnnnnnnnnnnnnnnnnnnnnnnnnn asdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
 		</div>
 		
 		<div class="imageDivision" id="imageDivision">
 
 		</div>
 		
 		<div class="numericalAnswerDivision" id="numericalAnswerDivision">
            PLEASE ENTER YOUR ANSWER HERE : <input type="text" id="numericalAnswer">
 		</div>
 		
 		<div class="optionDivision" id="optionADivision" ticked="0" onclick="setAnswer(1)">
   		<div class="firstDivision">A</div>
   		<div class="secondDivision" id="optionA">A</div>
  		</div>
  
 		<div class="optionDivision" id="optionBDivision" ticked="0" onclick="setAnswer(2)">
   		<div class="firstDivision">B</div>
   		<div class="secondDivision" id="optionB">B</div>
  		</div>
 
 
 		<div class="optionDivision" id="optionCDivision" ticked="0" onclick="setAnswer(3)">
   		<div class="firstDivision">C</div>
   		<div class="secondDivision" id="optionC">C</div>
  		</div>
 

 		<div class="optionDivision" id="optionDDivision" ticked="0" onclick="setAnswer(4)">
   		<div class="firstDivision">D</div>
   		<div class="secondDivision" id="optionD">D</div>
  		</div>
</div>

<div id="numbersDivision">
 
	 <!-- This division will be loaded dynamically -->
	<img src="images/redloader.gif" style="height: 30px;width: 30px">

</div>

<div class="submitDivision">

 
  		<div class="buttonDivision" >
  		<div id="reviewAndNextDivision">MARK FOR REVIEW AND NEXT</div>
 		</div>
 		
  		<div class="buttonDivision">
  		<div id="saveAndNextDivision"> SAVE AND NEXT</div>
 		</div>

</div>
</div>
 </body>
 
 </html>
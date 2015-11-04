<?php 
require_once 'phpFiles/isSessionSet.php';
require_once 'phpFiles/isSubscribed.php';
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
 <script src = "js/exam.js"></script>
 
 </head>
<body>

		<div id="mainAlertDivision">
		
				<div id="loaderAlertDivision"><img src="images/redloader.gif" style="height: 20px;width: 20px"></div>
		 		<div class="alertDivision" id="manualEndTest">
		 		If you end the test now , you will not be able to continue it in the future !!! <br><font color="aqua">Do you really want to end the test?</font>
		 		
		 		 		<div class="alertButtonDivision" onClick="">YES</div>
				 		<div class="alertButtonDivision" onClick="abort()">NO</div>
		
		 		</div>
				
				<div class="alertDivision" id="automaticEndTest">
		 		You have Successfully completed your test . You can check your results in<br> <b>'MY RESULTS'</b> tab
		 		
		 		 		<div class="alertButtonDivision1" onClick="window.close()">CLOSE</div>
				 		
		
		 		</div>		 		
		
		</div>



<div class="mainDivision" id="ramakrishna"><div class="headerDivision">

  	<div class="subjectHeaderDivision">
  	 <?php echo $_SESSION['fullNameOfSubject'];?>
  	</div>
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


<div class="instructionsDivision">
	<div class="inDivision"><div style="background-color:white;width:150px;height:25px;margin:auto;"><p>Not Answered</p></div></div>
  	<div class="inDivision"><div style="background-color:green;width:150px;height:25px;margin:auto;color:white"><p>Saved</p></div></div>
  	<div class="inDivision"><div style="background-color:purple;width:150px;height:25px;margin:auto;color:white"><p>Marked For Review</p></div></div>
 
</div>



<div class="submitDivision">

 
  		<div class="buttonDivision" >
  		<div id="reviewAndNextDivision">MARK FOR REVIEW AND NEXT</div>
 		</div>
 		
  		<div class="buttonDivision">
  		<div id="saveAndNextDivision"> SAVE AND NEXT</div>
 		</div>

</div>



<div class="endTestDivision">
	
	<div class="endTestButton" onClick="manualEndTestByUser()">END TEST</div>
</div>



</div>
 </body>
 
 </html>
<?php 
require_once 'phpFiles/isSessionSet.php';
?>
   
    <div id="contactusmessagedivision" style="display:block;"> </div>
	<div class="contactUsTextDivision">
    If you have any suggestions on improving the site or found any bugs ,reports or anything whether it is good or bad for the 
    website , please feel free to write to us and we will be more than happy to reply you with the answer .
    </div>
    <input type="hidden" id="feedbackemailid" value="<?php echo $_SESSION['gateusername'];?>">
   <textarea rows="10" cols="60" id="feedback"></textarea>
   <div class="contactUsButton" onclick="sendFeedback()">SUBMIT</div>
  
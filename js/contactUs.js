

function displayAboutUs()
{
	$('#mainDivision1').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');
	$(document).ready(function(){
	    
	        $("#mainDivision1").load("aboutus.html", function(responseTxt, statusTxt, xhr){
	            
	        });
	    
	});		

}


function contactUs()
{

	
	$('#mainDivision1').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');
	$(document).ready(function(){
	    
	        $("#mainDivision1").load("contactus.php", function(responseTxt, statusTxt, xhr){
	        	$('#contactusmessagedivision').html('');
	        });
	    
	});	
}


function sendFeedback()
{
	
 $('#contactusmessagedivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;">');
 var feedback = document.getElementById("feedback").value; 
 var emailid = document.getElementById("feedbackemailid").value;
 
 if(feedback != "")
  {
 $(document).ready(function(){
	 
	 $.post("phpFiles/sendFeedback.php",{feedback : feedback , emailid :emailid},function(){
		 
		   $('#contactusmessagedivision').html('Thanks for giving us your feedback!! We appreciate your time and will get back to you as soon as possible.');
		   document.getElementById("feedback").value = ""; 
	 });
	 
 });
 
  }
 else
	 {
	 $('#contactusmessagedivision').html('Please Enter your feedback.');
	   document.getElementById("feedback").value = "";
	 }


}

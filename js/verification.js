
function verifyVerificationId()
{
	
	var emailid = document.getElementById("verificationemailid").value;
	var verificationnumber = document.getElementById("verificationnumber").value;
	 $('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	 
	 if(verificationnumber == "")
		 {
		  document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
     	  $('#errorOrSuccessDivision').html("Please Enter Verification Code");
     	  return;
		 }
	$(document).ready(function(){
		 
		 
		
		 $.post( "phpFiles/verifyVerificationNumber.php", {emailid : emailid , verificationnumber : verificationnumber},function( data ) {
		   
		  //alert(data.error);
		 if(data.error == 1)
			 {	
			        document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	$('#errorOrSuccessDivision').html("Verification Code is wrong");
		        	security(1); 
			
			 
			 }
		 else
		 {  

			    document.getElementById("errorOrSuccessDivision").className = 'successStatus';
	        	$('#errorOrSuccessDivision').html("Successfully registered!! Please Login");
	        	showLogin(1);
		 
		 }
		
	 },"json");
});
}



function resendCode()
{
	
	 $('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	var emailid = document.getElementById("verificationemailid").value;
	$(document).ready(function(){
		var request = $.ajax({
            url: 'phpFiles/sendMail.php',
            type: 'POST',
           data:
           {
            	registrationemailid : emailid
            }
        });
    	
    	$.when(request).done(function(){
    		document.getElementById("errorOrSuccessDivision").className = 'successStatus';
        	$('#errorOrSuccessDivision').html("We have sent the Verification code to your Mail Id . Please enter it below to verify your account");
        	
    	});
		
	});
}

















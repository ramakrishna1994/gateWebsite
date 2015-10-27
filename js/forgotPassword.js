function showForgotPasswordDialogueBox()
{
	 $('#errorOrSuccessDivision').html('');
	 $("#loginDivision").slideUp(1000,function(){
		 
		 $('#forgotPasswordDivision').slideDown(1000,function(){
			 
			 document.getElementById("forgotemailid").value = "";
		 });
		 
	 });

}

function sendPasswordToMail()
{
	$('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	var emailid = document.getElementById("forgotemailid").value;
	
	if(emailid == '' || emailid == null)
	 {
	
		document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		$('#errorOrSuccessDivision').html("Please Enter Email Id");
		return;
	 
	 }
	 
	else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid)))  
	  {  

	     document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		 $('#errorOrSuccessDivision').html("Please Enter Valid Email Address");
		 return;
		 	  
	  }  
	else
	{
		$(document).ready(function(){
			
			
			$.post("phpFiles/forgotPassword.php",{emailid : emailid},function(data){
				
				if(data.error == 1)
					{
					document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
					 $('#errorOrSuccessDivision').html("Email Id Does Not Exists");
					}
				else
					{
					document.getElementById("errorOrSuccessDivision").className = 'successStatus';
					 $('#errorOrSuccessDivision').html("Your password has been sent to the Your Mail Id");
					 document.getElementById("forgotemailid").value = "";
					}
				
			},"json");
		});
	  

	
	}
}

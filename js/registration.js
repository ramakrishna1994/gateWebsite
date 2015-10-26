function checkRegistrationParameters(){
	
	 $('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	 var val1 = document.getElementById("Ranswer").value;
	 var firstname = document.getElementById("registrationfirstname").value;
	 var lastname = document.getElementById("registrationlastname").value;
	 var emailid = document.getElementById("registrationemailid").value;
	 var password = document.getElementById("registrationpassword").value;
	 var confirmPassword = document.getElementById("registrationconfirmpassword").value;
	
	 if(firstname == '' || firstname == null)
		 {
		
		 document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
     	 $('#errorOrSuccessDivision').html("Please Enter First Name");
     	 return;
		 }
	
	 
	 if(emailid == '' || emailid == null)
	 {
	
	 document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
 	 $('#errorOrSuccessDivision').html("Please Enter Email Id");
 	 return;
 	 
	 }
	 
	  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid)))  
	   {  

	     document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		 $('#errorOrSuccessDivision').html("Please Enter Valid Email Address");
		 return;
		 	  
	   }  
	     
	 
	 if(password == '' || password == null)
	 {
	
	 document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
 	 $('#errorOrSuccessDivision').html("Please Enter password");
 	 return;
 	 
	 }
	 
	 if(confirmPassword == '' || confirmPassword == null)
	 {
	
	 document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
 	 $('#errorOrSuccessDivision').html("Please confirm password");
 	 return;
 	 
	 }
	 
	 if(confirmPassword != password )
	 {
	
	 document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
 	 $('#errorOrSuccessDivision').html("Passwords are not Matching");
 	 return;
 	 
	 }
	 
	 if(val1 == '' || val1 == null)
	 {
	
	 document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
 	 $('#errorOrSuccessDivision').html("Please Enter Security");
 	 return;
 	 
	 }
	 

		       if(answer != val1)
		       {
		    	   
		    	  /*********registration*******/
			       
			        	
			        	document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
			        	
			        	$('#errorOrSuccessDivision').html("Security is Wrong");
			        	
			        
			        security(2);
		       } 
		       else
			  {
			       doRegistration();
			       
			  }
			
	
}









function doRegistration()
{
 var registrationemailid = document.getElementById("registrationemailid").value;
 var registrationfirstname = document.getElementById("registrationfirstname").value;
 var registrationlastname = document.getElementById("registrationlastname").value;
 var password = document.getElementById("registrationpassword").value;
 $('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
// alert(username);
 //alert(password);
 
 $(document).ready(function(){
	 

		 $.post( "phpFiles/newRegistration.php", {registrationfirstname : registrationfirstname ,registrationlastname : registrationlastname, registrationemailid : registrationemailid,password : password},function( data ) {
		//alert(data.error);
		 if(data.error == 1)
			 {

	    	  
		       
		        	
		        	document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		        	$('#errorOrSuccessDivision').html("Email Id Already Exists");
		        	
		           	security(2);
			    
			 
			 }
		 else
		 {
			
		        	
		        	
		        	var request = $.ajax({
		                url: 'phpFiles/sendVerificationCode.php',
		                type: 'POST',
		               data:
		               {
		                	registrationemailid : registrationemailid ,
		                	
		                	
		                }
		            });
		        	
		        	$.when(request).done(function(){
		        		document.getElementById("errorOrSuccessDivision").className = 'successStatus';
			        	$('#errorOrSuccessDivision').html("Just One More Step!!");
			        	document.getElementById("verificationemailid").value = registrationemailid;
			        	document.getElementById("verificationfirstname").value = registrationfirstname;
			        	document.getElementById("verificationlastname").value = registrationlastname;
			        	document.getElementById("verificationpassword").value = password;
			        	showSecurityMailDivision();
		        	});
		        	
			 
		 }
	 },"json");
 });
}








function showRegistration(){
	
	clearRegistrationParameters();
	$(document).ready(function(){
		
	
    	 $('#errorOrSuccessDivision').html('');
       $('#loginDivision').slideUp(1000,function(){
			
    	   $('#securityMailDivision').slideUp(1000,function(){
			   $('#registrationDivision').slideDown(1000,function(){
					

					document.title="REGISTRATION";
					security(2);
					
				});
			
			});
			
       });
		
	});
}





function clearRegistrationParameters()
{
	
document.getElementById("registrationfirstname").value="";
document.getElementById("registrationlastname").value="";
document.getElementById("registrationemailid").value="";
document.getElementById("registrationpassword").value="";
document.getElementById("registrationconfirmpassword").value="";
document.getElementById("verificationnumber").value="";
document.getElementById("Ranswer").value="";
	
}

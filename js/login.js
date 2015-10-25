$(document).ready(function(){
	 $("#loginDivision").show();
	 $("#registrationDivision").hide();
	 $("#securityMailDivision").hide();
	// $("#forgotPasswordDivision").hide();
	 
});

var valueOne,valueTwo,operator;
var answer;
security(1);

function security(val)
{
 valueOne = Math.floor((Math.random() * 10) + 1);
 
 
 do{
	 valueTwo = Math.floor((Math.random() * 10) + 1);
	 
 }while(valueOne==valueTwo);
 
 //alert(valueOne+","+valueTwo);
 
 operator = Math.floor((Math.random() * 3) + 1);
 if(operator == 1)
	 {
	  answer = valueOne +valueTwo;
	  operator = '+';
	 }
 else if(operator == 2)
	 {
	  answer = valueOne-valueTwo;
	  operator = '-';
	 }
 else{
	  answer = valueOne * valueTwo;
	  operator = 'X';
     }
 
 //alert(operator+","+answer);
 $(document).ready(function(){
	if(val == 1)
		{
	     $('#LValueOne').html(valueOne);
	     $('#LValueTwo').html(valueTwo);
	     $('#LOperator').html(operator);
	     document.getElementById("Lanswer").value="";
		}
	else
		{
		 $('#RValueOne').html(valueOne);
	     $('#RValueTwo').html(valueTwo);
	     $('#ROperator').html(operator);
	     document.getElementById("Ranswer").value="";
		}
 });
 
}

function checkLoginParameters()
{
	 $('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
		var val1 = document.getElementById("Lanswer").value;

		var emailid = document.getElementById("loginemailid").value;
		var password = document.getElementById("loginpassword").value;
		
		if(emailid=='' || emailid==null)
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
		if(password=='' || password==null)
			{

			document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
			$('#errorOrSuccessDivision').html("Please Enter Password");
			return;
			}
		if(val1=='' || val1==null)
			{
			document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
			$('#errorOrSuccessDivision').html("Please Enter Security");
			return;
			}
		if(answer != val1)
	       {
	    	   
		       /**********login********/
	        	
	        	document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
	        	
	        	$('#errorOrSuccessDivision').html("Security is Wrong");
	        	
	       security(1);
	       } 
	       else
		  {
		       doLogin();
		  }
}


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
		                url: 'phpFiles/sendMail.php',
		                type: 'POST',
		               data:
		               {
		                	registrationemailid : registrationemailid
		                }
		            });
		        	
		        	$.when(request).done(function(){
		        		document.getElementById("errorOrSuccessDivision").className = 'successStatus';
			        	$('#errorOrSuccessDivision').html("Just One More Step!!");
			        	document.getElementById("verificationemailid").value = registrationemailid;
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


function showLogin(id){
	
	clearLoginParameters();
	$(document).ready(function(){ 
		
		if(id==2)
			$('#errorOrSuccessDivision').html('');
		
		$('#securityMailDivision').slideUp(1000,function(){
		$('#registrationDivision').slideUp(1000,function(){
			
			
			   $('#loginDivision').slideDown(1000,function(){
					

					document.title="LOGIN";
					security(1);
					
				});
			
			});
			
		});	
		
	});
}

function doLogin()
{
 var loginemailid = document.getElementById("loginemailid").value;
 var password = document.getElementById("loginpassword").value;
 $('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
// alert(username);
 //alert(password);
 
 $(document).ready(function(){
	 
	 
		
		 $.post( "phpFiles/login.php", {loginemailid : loginemailid , password : password},function( data ) {
		   
		  //alert(data.error);
		 if(data.error == 1)
			 {	
			 document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	$('#errorOrSuccessDivision').html("Username or Password is wrong");
		        	security(1); 
			
			 
			 }
		 else if(data.error == 2)
			 {
			   document.getElementById("verificationemailid").value=loginemailid;
		    	document.getElementById("errorOrSuccessDivision").className = 'successStatus';
	        	$('#errorOrSuccessDivision').html("Please Verify Your Account");
	        	showSecurityMailDivision();
	     
		  
			 }
		 else
		 {
			  window.open('tests.php','_self');
		 }
		
	 },"json");
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


function clearLoginParameters()
{
	
document.getElementById("loginemailid").value="";
document.getElementById("loginpassword").value="";
document.getElementById("Lanswer").value="";
	
}

function showSecurityMailDivision(){
	
	document.getElementById("verificationnumber").value="";
	$('#loginDivision').slideUp(1000,function(){
	$('#registrationDivision').slideUp(1000,function(){
		
		
		   $('#securityMailDivision').slideDown(1000,function(){
				

				
			});
		
		});
	});
}
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




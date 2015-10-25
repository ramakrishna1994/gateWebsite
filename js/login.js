$(document).ready(function(){
	 $("#loginDivision").show();
	 $("#registrationDivision").hide();
	 $("#securityMailDivision").hide();
	 $("#forgotPasswordDivision").hide();
	 
});


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








function showLogin(id){
	
	clearLoginParameters();
	$(document).ready(function(){ 
		
		if(id==2)
			$('#errorOrSuccessDivision').html('');
		
		$('#forgotPasswordDivision').slideUp(1000,function(){
		$('#securityMailDivision').slideUp(1000,function(){
		$('#registrationDivision').slideUp(1000,function(){
			
			
			   $('#loginDivision').slideDown(1000,function(){
					

					document.title="LOGIN";
					security(1);
					
				});
			
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






function clearLoginParameters()
{
	
document.getElementById("loginemailid").value="";
document.getElementById("loginpassword").value="";
document.getElementById("Lanswer").value="";
	
}


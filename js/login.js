$(document).ready(function(){
	 $("#loginDivision").show();
	 $("#registrationDivision").hide();
	 $("#errorOrSuccessDivision").hide();
});

var valueOne,valueTwo,answer,operator;
security(1);

function security(val)
{
 valueOne = Math.floor((Math.random() * 10) + 1);
 valueTwo = Math.floor((Math.random() * 10) + 1);
 
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
	  operator = '*';
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


function checkParameters(id)
{
	var val1 = document.getElementById("Lanswer").value;
	var val2 = document.getElementById("Ranswer").value;
	if(id == 2)
		{
	       if(answer != val2)
	       {
	    	   $('#errorOrSuccessDivision').slideUp(1000,function(){
	    		   
	    		   $('#errorOrSuccessDivision').html("");   
	    		   document.getElementById("errorOrSuccessDivision").className = 'dummy';
	    	   });
	    	   
		        $('#errorOrSuccessDivision').slideDown(1000,function(){
		        	
		        	document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		        	$('#errorOrSuccessDivision').html("security is wrong");
		        	
		        });
		        security(2);
	       } 
	       else
		  {
		       doRegistration();
		       
		  }
		}
	else{
		if(answer != val1)
	       {
			$('#errorOrSuccessDivision').slideUp(1000,function(){
	    		   
	    		   $('#errorOrSuccessDivision').html("");   
	    		   document.getElementById("errorOrSuccessDivision").className = 'dummy';   
			});
			$('#errorOrSuccessDivision').slideDown(1000,function(){
	        	
	        	document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
	        	
	        	$('#errorOrSuccessDivision').html("security is wrong");
	        	
	        });
			security(1);
	       } 
	       else
		  {
		       doLogin();
		  }
		
	}
}

function doRegistration()
{
 var username = document.getElementById("registrationusername").value;
 var password = document.getElementById("registrationpassword").value;
 
// alert(username);
 //alert(password);
 
 $(document).ready(function(){
	 

		 $.post( "phpFiles/newRegistration.php", {username : username , password : password},function( data ) {
		//alert(data.error);
		 if(data.error == 1)
			 {
			 $('#errorOrSuccessDivision').slideUp(1000,function(){
	    		   
	    		   $('#errorOrSuccessDivision').html("");   
	    		   document.getElementById("errorOrSuccessDivision").className = 'dummy';
	    	   });
			    $('#errorOrSuccessDivision').slideDown(1000,function(){
			       	
		        	document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		        	$('#errorOrSuccessDivision').html("Username Already Exists");
		        	security(2);
			    });
			 
			 }
		 else
		 {
			 $('#errorOrSuccessDivision').slideUp(1000,function(){
	    		   
	    		   $('#errorOrSuccessDivision').html("");   
	    		   document.getElementById("errorOrSuccessDivision").className = 'dummy';
	    	   });
			 $('#errorOrSuccessDivision').slideDown(1000,function(){
		        	
		        	document.getElementById("errorOrSuccessDivision").className = 'successStatus';
		        	
		        	$('#errorOrSuccessDivision').html("Successfully registered!! Please login");
		        	showLogin();
			 });
			 
		 }
	 },"json");
 });
}


function showRegistration(){
	
	$(document).ready(function(){
		$('#loginDivision').slideUp(1000,function(){
			
			
			
			$("#errorOrSuccessDivision").slideUp(500,function(){
				
				$('#errorOrSuccessDivision').html("");	
				document.getElementById("errorOrSuccessDivision").className = 'dummy';
			});
			
			$('#registrationDivision').slideDown(1000,function(){
				

				document.title="REGISTRATION";
				security(2);
				
			});
		});
		
	});
}


function showLogin(){
	
	$(document).ready(function(){
		$('#registrationDivision').slideUp(1000,function(){
		
			
			$('#loginDivision').slideDown(1000,function(){
				

				document.title="LOGIN";
				security(1);
				
				
			});
		});
		
	});
}

function doLogin()
{
 var username = document.getElementById("loginusername").value;
 var password = document.getElementById("loginpassword").value;
 
// alert(username);
 //alert(password);
 
 $(document).ready(function(){
	 
	 
		
		 $.post( "phpFiles/login.php", {username : username , password : password},function( data ) {
		   
		  //alert(data.error);
		 if(data.error == 1)
			 {
			 $('#errorOrSuccessDivision').slideUp(1000,function(){
	    		   
	    		   $('#errorOrSuccessDivision').html("");   
	    		   document.getElementById("errorOrSuccessDivision").className = 'dummy';
	    	   });
			 $('#errorOrSuccessDivision').slideDown(1000,function(){
		        	
		        	document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		        	$('#errorOrSuccessDivision').html("Username or Password Entered is wrong");
		        	security(1); 
			 });
			 
			 }
		 else
		 {
			 $('#errorOrSuccessDivision').slideUp(1000,function(){
	    		   
	    		   $('#errorOrSuccessDivision').html("");   
	    		   document.getElementById("errorOrSuccessDivision").className = 'dummy';
	    	   });
			 $('#errorOrSuccessDivision').slideDown(1000,function(){
		        	
		        	document.getElementById("errorOrSuccessDivision").className = 'successStatus';
		        	
		        	$('#errorOrSuccessDivision').html("Success login");
		        });	 
		 }
		
	 },"json");
 });
}

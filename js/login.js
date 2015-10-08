$(document).ready(function(){
	 $("#loginDivision").show();
	 $("#registrationDivision").hide();
	 $("#errorOrSuccessDivision").hide();
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


function checkParameters(id)
{
	var val1 = document.getElementById("Lanswer").value;
	var val2 = document.getElementById("Ranswer").value;
	if(id == 2)
		{
	       if(answer != val2)
	       {
	    	   $('#errorOrSuccessDivision').slideUp(250,function(){
	    		   
	    		   $('#errorOrSuccessDivision').html("");   
	    		   document.getElementById("errorOrSuccessDivision").className = 'dummy';
	    	   });
	    	   
		        $('#errorOrSuccessDivision').slideDown(250,function(){
		        	
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
			$('#errorOrSuccessDivision').slideUp(250,function(){
	    		   
	    		   $('#errorOrSuccessDivision').html("");   
	    		   document.getElementById("errorOrSuccessDivision").className = 'dummy';   
			});
			$('#errorOrSuccessDivision').slideDown(250,function(){
	        	
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
			 $('#errorOrSuccessDivision').slideUp(250,function(){
	    		   
	    		   $('#errorOrSuccessDivision').html("");   
	    		   document.getElementById("errorOrSuccessDivision").className = 'dummy';
	    	   });
			    $('#errorOrSuccessDivision').slideDown(250,function(){
			       	
		        	document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		        	$('#errorOrSuccessDivision').html("Username Already Exists");
		        	security(2);
			    });
			 
			 }
		 else
		 {
			 $('#errorOrSuccessDivision').slideUp(250,function(){
	    		   
	    		   $('#errorOrSuccessDivision').html("");   
	    		   document.getElementById("errorOrSuccessDivision").className = 'dummy';
	    	   });
			 $('#errorOrSuccessDivision').slideDown(250,function(){
		        	
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
		

		$("#errorOrSuccessDivision").slideUp(250,function(){
			
			$('#errorOrSuccessDivision').html("");	
			document.getElementById("errorOrSuccessDivision").className = 'dummy';
			
		   $('#loginDivision').slideUp(1000,function(){
			
			
			   $('#registrationDivision').slideDown(1000,function(){
					

					document.title="REGISTRATION";
					security(2);
					
				});
			
			});
			
					});
		
	});
}


function showLogin(){
	
	$(document).ready(function(){
$("#errorOrSuccessDivision").slideUp(250,function(){
			
			$('#errorOrSuccessDivision').html("");	
			document.getElementById("errorOrSuccessDivision").className = 'dummy';
			
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
 var username = document.getElementById("loginusername").value;
 var password = document.getElementById("loginpassword").value;
 
// alert(username);
 //alert(password);
 
 $(document).ready(function(){
	 
	 
		
		 $.post( "phpFiles/login.php", {username : username , password : password},function( data ) {
		   
		  //alert(data.error);
		 if(data.error == 1)
			 {
			 $('#errorOrSuccessDivision').slideUp(250,function(){
	    		   
	    		   $('#errorOrSuccessDivision').html("");   
	    		   document.getElementById("errorOrSuccessDivision").className = 'dummy';
	    	   });
			 $('#errorOrSuccessDivision').slideDown(250,function(){
		        	
		        	document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		        	$('#errorOrSuccessDivision').html("Username or Password Entered is wrong");
		        	security(1); 
			 });
			 
			 }
		 else
		 {
			 $('#errorOrSuccessDivision').slideUp(250,function(){
	    		   
	    		   $('#errorOrSuccessDivision').html("");   
	    		   document.getElementById("errorOrSuccessDivision").className = 'dummy';
	    	   });
			 $('#errorOrSuccessDivision').slideDown(250,function(){
		        	
		        	document.getElementById("errorOrSuccessDivision").className = 'successStatus';
		        	
		        	$('#errorOrSuccessDivision').html("Success login");
		        });
			 window.open('tests.php','_self');
		 }
		
	 },"json");
 });
}

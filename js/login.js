$(document).ready(function(){
	 $("#loginDivision").show();
	 $("#registrationDivision").hide();
	 
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
	 $('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	var val1 = document.getElementById("Lanswer").value;
	var val2 = document.getElementById("Ranswer").value;
	if(id == 2)
		{
	       if(answer != val2)
	       {
	    	   
	    	  
		       
		        	
		        	document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		        	$('#errorOrSuccessDivision').html("security is wrong");
		        	
		        
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
	    	   
		       
	        	
	        	document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
	        	
	        	$('#errorOrSuccessDivision').html("security is wrong");
	        	
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
		        	
		        	$('#errorOrSuccessDivision').html("User Name already exists");
		        	
		           	security(2);
			    
			 
			 }
		 else
		 {
			
		        	
		        	document.getElementById("errorOrSuccessDivision").className = 'successStatus';
		        	
		        	$('#errorOrSuccessDivision').html("Successfully registered!! Please login");
		        	showLogin(1);
			 
			 
		 }
	 },"json");
 });
}


function showRegistration(){
	
	$(document).ready(function(){
		
	
    	 $('#errorOrSuccessDivision').html('');
       $('#loginDivision').slideUp(1000,function(){
			
			
			   $('#registrationDivision').slideDown(1000,function(){
					

					document.title="REGISTRATION";
					security(2);
					
				});
			
			});
			
				
		
	});
}


function showLogin(id){
	
	$(document).ready(function(){ 
		
		if(id==2)
			$('#errorOrSuccessDivision').html('');
		
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
		 else
		 {
			  window.open('tests.php','_self');
		 }
		
	 },"json");
 });
}

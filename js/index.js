

displayLogin();


function displayLogin()
{
	$('#mainDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');
	$(document).ready(function(){
	    
	         $("#mainDivision").load("login.html", function(responseTxt, statusTxt, xhr){
	        	 
	       document.title="LOGIN";
	       security(1);
	        });
	    
	});		

}


function displayAboutUs()
{
	$('#mainDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');
	$(document).ready(function(){
	    
	        $("#mainDivision").load("aboutus.html", function(responseTxt, statusTxt, xhr){
	       
	        	document.title="ABOUT US";
	        });
	    
	});		

}

function getAccountSettings()
{
	
 
    
	 
	 $('#mainDivision1').html('');
	 var innerhtml = '<div id="profileBox">';
		
			 
			 innerhtml += '<div id="errorOrSuccessDivision" class="dummy"> </div>'
				       + '<div class="secondBox"><input type="password" id="currentpassword" placeholder="ENTER CURRENT PASSWORD"></div>' 
		               + '<div class="secondBox"><input type="password" id="newpassword" placeholder="ENTER NEW PASSWORD"></div>'
		               + '<div class="secondBox"><input type="text" id="confirmnewpassword" placeholder="CONFIRM NEW PASSWORD"></div>'
		               + '<div class="submitDivision" ><div class="loginButtonDivision1" onClick="changePassword()">CHANGE PASSWORD</div></div>'   
		               + '</div>';
			 
	$('#mainDivision1').html(innerhtml);
 

}

function changePassword()
{

	 $('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;">');
	var currentpassword = document.getElementById('currentpassword').value;
	var newpassword = document.getElementById('newpassword').value;
	var confirmnewpassword = document.getElementById('confirmnewpassword').value;
   
	if(currentpassword == "")
	{
		
		 document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		  $('#errorOrSuccessDivision').html("PLEASE ENTER CURRENT PASSWORD");
		  return;
		        	
 	}


	else if(newpassword == "")
	{
		
		 document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		  $('#errorOrSuccessDivision').html("PLEASE ENTER NEW PASSWORD");
		  return;      	
	}


	else if(confirmnewpassword == "")
	{
		
		 document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		  $('#errorOrSuccessDivision').html("PLEASE CONFIRM PASSWORD");
		  return;	
	}
	else if(newpassword != confirmnewpassword)
		{
		
		document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
    	
		  $('#errorOrSuccessDivision').html("PASSWORDS DO NOT MATCH");
		  return;	
		
		}
	
	else
		{
		
		alert('success');
		}

}
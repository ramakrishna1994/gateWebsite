function getAccountSettings(id)
{
	
 
    
	 
	 $('#mainDivision1').html('');
	
	 var innerhtml = '<div id="accountBox">';
		
			 
			 innerhtml += '<div id="errorOrSuccessDivision" class="accountdummy"> </div>'
				       + '<div class="accountsecondBox"><input type="password" id="currentpassword" placeholder="ENTER CURRENT PASSWORD"></div>' 
		               + '<div class="accountsecondBox"><input type="password" id="newpassword" placeholder="ENTER NEW PASSWORD"></div>'
		               + '<div class="accountsecondBox"><input type="text" id="confirmnewpassword" placeholder="CONFIRM NEW PASSWORD"></div>'
		               + '<div class="submitDivision" ><div class="accountloginButtonDivision" onClick="changePassword()">CHANGE PASSWORD</div></div>'   
		               + '</div>';
			 
	$('#mainDivision1').html(innerhtml);
	if(id==1)
		{
		document.getElementById("errorOrSuccessDivision").className = 'successStatus';
    	
		     $('#errorOrSuccessDivision').html("YOUR PASSWORD UPDATED SUCCESSFULLY");
		     	
		}
 

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
		
		 var formData = new FormData();
	     formData.append("currentpassword", currentpassword);
	     formData.append("newpassword", newpassword);
	     
		 
		 $(document).ready(function(){
			 

			 $.ajax({
			        url: "phpFiles/updatePassword.php",// give your url
			        type: "POST",
			        data: formData,
			        dataType: 'json',
			        processData: false,
			        contentType: false,
			        success: function (response) {
			            console.log(response.error);
			            
			            if(response.error == 1)
			            	{
			            	 document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
			            	
			      		     $('#errorOrSuccessDivision').html("PLEASE ENTER CORRECT PASSWORD");
			      		     return;	
			            	}
			            else
			            	{
			            	getAccountSettings(1)
			            	}
			        }
			    });
	 });
		}

}
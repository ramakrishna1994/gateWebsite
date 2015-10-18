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
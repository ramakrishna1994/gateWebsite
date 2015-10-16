function getProfile()
{

 var innerhtml = '<div id="profileBox">';
	$.getJSON("phpFiles/getProfile.php",{},function(data){
		 
		 innerhtml += '<div id="errorOrSuccessDivision" class="dummy"> </div>'
			   
			     +'<div class="firstBox"><img src="images/user.jpg" width="32px" height="32px"></div>'
	            + '<div class="secondBox"><input type="text" id="firstname" placeholder="'+data.firstname+'" disabled></div>' 
	            
	            +'<div class="firstBox"><img src="images/user.jpg" width="32px" height="32px"></div>'
	            + '<div class="secondBox">';
	           
	             if(data.lastname == "")
	                innerhtml +='<input type="text" id="lastname" placeholder="LAST NAME">';
	             else
	               innerhtml  +='<input type="text" id="lastname" placeholder="'+data.lastname+'" disabled>';
	                
	          innerhtml +='<div class="submitDivision" ><div class="loginButtonDivision" onClick="updateProfile()">UPDATE PROFILE</div></div>'   
	                    + '</div></div>';
		 

		 $('#mainDivision1').html('');
		 $('#mainDivision1').html(innerhtml);

	 
	  });
	 

}

function updateProfile()
{
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	 $('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	 
	 
	 $(document).ready(function(){
		 

		 $.post( "phpFiles/updateProfile.php", {firstname : firstname ,lastname : lastname},function( data ) {
		//alert(data.error);
		 if(data.error == 0)
			 {

	    	  
		       
		        	
		        	document.getElementById("errorOrSuccessDivision").className = 'successStatus';
		        	
		        	$('#errorOrSuccessDivision').html("PROFILE UPDATED SUCCESSFULLY");
		        	
		        	getProfile();
		           	
	                 		    
			 
			 }
		 
		 	 },"json");
 });
}





function getProfile(id,error)
{

	
	$('#mainDivision1').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');
	
 var innerhtml = '<div id="profileBox"><div id="errorOrSuccessDivision" class="dummy"> </div>';
	$.getJSON("phpFiles/getProfile.php",{},function(data){
		 
		 innerhtml += ''
			   
			     +'<div class="profilefirstBox">FIRST NAME</div>'
	            + '<div class="profilesecondBox"><input type="text" id="firstname" value="'+data.firstname+'"></div>' 
	            
	            +'<div class="profilefirstBox">LAST NAME</div>'
	            + '<div class="profilesecondBox">';
	           
	             if(data.lastname == "")
	                innerhtml +='<input type="text" id="lastname" placeholder="LAST NAME">';
	             else
	               innerhtml  +='<input type="text" id="lastname" value="'+data.lastname+'">';
	                
	             innerhtml +='</div><div class="profilefirstBox">CHOOSE A PICTURE</div>'
	            	       + '<div class="profilesecondBox"><input type="file" name="image" id="image"></div>'
	                       +'<div class="submitDivision" ><div class="profileloginButtonDivision" onClick="updateProfile()">UPDATE PROFILE</div></div>'   
	                       + '</div></div>';
		 

	            
		 $('#mainDivision1').html('');
		 $('#mainDivision1').html(innerhtml);
		 
		 if(id==1)
			 {
			// alert(error);
			 if(error == 1){
				 
				    document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		        	$('#errorOrSuccessDivision').html("FILE IS NOT AN IMAGE");
		        	
			     }
			 
			 else if(error == 2)
				 {
				  document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		        	$('#errorOrSuccessDivision').html("IMAGE SIZE IS LARGE");
		        	
				 }
			 
			 else if(error == 3)
				 {
				  document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
		        	
		        	$('#errorOrSuccessDivision').html("IMAGE FORMAT NOT SUPPORTED");
		        	
				 }
			 
	          else{
	        	  
	  	        	document.getElementById("errorOrSuccessDivision").className = 'profileSuccessStatus';
	  	        	
	  	        	$('#errorOrSuccessDivision').html("PROFILE UPDATED SUCCESSFULLY");
	  	        	
	  	        	
	  	        	$('#profilePicture').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');
	  	        	
	  	        	$('#profilePicture').html('<img src="profilePictures/'+data.image+'?'+new Date().getTime()+'" style="height:90px;width:90px">');
		
	              }

	}
	  });
	 

}

function updateProfile()
{
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	 $('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	 var formData = new FormData();
     formData.append("firstname", firstname);
     formData.append("lastname", lastname);
     formData.append( 'image', $( '#image' )[0].files[0] );
	 
	 $(document).ready(function(){
		 

		 $.ajax({
		        url: "phpFiles/updateProfile.php",// give your url
		        type: "POST",
		        data: formData,
		        dataType: 'json',
		        processData: false,
		        contentType: false,
		        success: function (response) {
		            console.log(response.error);
		            getProfile(1,response.error);
		        }
		    });
 });
}






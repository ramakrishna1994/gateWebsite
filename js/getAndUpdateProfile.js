


function getProfile(id)
{

	
	$('#mainDivision1').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');
	
 var innerhtml = '<div id="profileBox">';
	$.getJSON("phpFiles/getProfile.php",{},function(data){
		 
		 innerhtml += '<div id="errorOrSuccessDivision" class="dummy"> </div>'
			   
			     +'<div class="firstBox">FIRST NAME</div>'
	            + '<div class="secondBox"><input type="text" id="firstname" value="'+data.firstname+'"></div>' 
	            
	            +'<div class="firstBox">LAST NAME</div>'
	            + '<div class="secondBox">';
	           
	             if(data.lastname == "")
	                innerhtml +='<input type="text" id="lastname" placeholder="LAST NAME">';
	             else
	               innerhtml  +='<input type="text" id="lastname" value="'+data.lastname+'">';
	                
	             innerhtml +='</div><div class="firstBox">CHOOSE A PICTURE</div>'
	            	       + '<div class="secondBox"><input type="file" name="image" id="image"></div>'
	                       +'<div class="submitDivision" ><div class="loginButtonDivision" onClick="updateProfile()">UPDATE PROFILE</div></div>'   
	                       + '</div></div>';
		 

	            
		 $('#mainDivision1').html('');
		 $('#mainDivision1').html(innerhtml);
		 
		 if(id==1)
			 {
			 
	        	document.getElementById("errorOrSuccessDivision").className = 'successStatus';
	        	
	        	$('#errorOrSuccessDivision').html("PROFILE UPDATED SUCCESSFULLY");
	        	
	        	
	        	$('#profilePicture').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');
	        	
	        	$('#profilePicture').html('<img src="profilePictures/'+data.image+'.jpg?'+new Date().getTime()+'" style="height:90px;width:90px">');
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
		        processData: false,
		        contentType: false,
		        success: function (response) {
		            console.log(response);
		            getProfile(1);
		        }
		    });
 });
}






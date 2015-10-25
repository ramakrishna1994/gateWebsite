function aboutUs()
{

	$('#mainDivision1').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');
	$(document).ready(function(){
	    
	        $("#mainDivision1").load("aboutus.php", function(responseTxt, statusTxt, xhr){
	            
	        });
	    
	});	
}
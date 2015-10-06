$(document).ready(function(){
	
	var innerHtml="";
	$.getJSON("phpFiles/firstTimeIndexPageLoad.php",function(data){
		var i;
		var markedarray= data.marked;
		
		for(i=1; i<=markedarray.length;i++)
			{
			  //alert('inside1');
			  
		      if(markedarray[i-1]==0)
		    	  {
			       innerHtml +='<div class="notanswered" id="question'+i+'" onclick="getQuestion('+i+')">'+i+'</div>';
		    	   //alert('o1');
		    	  }
			       
		      else if(markedarray[i-1]==1)
		    	  {
				   innerHtml +='<div class="saved" id="question'+i+'" onclick="getQuestion('+i+')">'+i+'</div>';
				   //alert('o2');
		    	  }
		      
				  else
					  {
		             innerHtml +='<div class="markedForReview" id="question'+i+'" onclick="getQuestion('+i+')">'+i+'</div>';
		             //alert('o3');
					  }
			}
		
		$("#questionsDivision").html("");
		$("#questionsDivision").html(innerHtml);
	
	});
	
});
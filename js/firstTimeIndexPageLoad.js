$(document).ready(function(){
	
	var innerHtml="";
	$.getJSON("phpFiles/firstTimeIndexPageLoad.php",function(data){
		var i,j;
		var markedarray= data.marked;
		
		for(i=1; i<=markedarray.length;i++)
			{
			  //alert('inside1');
			j=i;
			  if(i<10)
				  {
				  j="0"+i;
				  }
		      if(markedarray[i-1]==0)
		    	  {
			       innerHtml +='<div class="notAnswered" id="question'+i+'" onclick="getQuestion('+i+')">'+j+'</div>';
		    	   //alert('o1');
		    	  }
			       
		      else if(markedarray[i-1]==1)
		    	  {
				   innerHtml +='<div class="saved" id="question'+i+'" onclick="getQuestion('+i+')">'+j+'</div>';
				   //alert('o2');
		    	  }
		      
				  else
					  {
		             innerHtml +='<div class="markedForReview" id="question'+i+'" onclick="getQuestion('+i+')">'+j+'</div>';
		             //alert('o3');
					  }
			}
		
		$("#numbersDivision").html("");
		$("#numbersDivision").html(innerHtml);
	
	});
	
});
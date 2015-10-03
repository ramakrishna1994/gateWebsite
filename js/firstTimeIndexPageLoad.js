$(document).ready(function(){
	
	var innerHtml="";
	$.getJSON("phpFiles/firstTimeIndexPageLoad.php",function(data){
		var i;
		for(i=0;i<data.length;i++)
			{
			 
			  if(data[i].marked=='0')
			   innerHtml +='<div class="notAnswered" id="question'+data[i].questionNo+'" onclick="getQuestion('+data[i].questionNo+')">'+data[i].questionNo+'</div>';
			  else if(data[i].marked=='1')
				   innerHtml +='<div class="saved" id="question'+data[i].questionNo+'" onclick="getQuestion('+data[i].questionNo+')">'+data[i].questionNo+'</div>';
			  else
				   innerHtml +='<div class="markedForReview" id="question'+data[i].questionNo+'" onclick="getQuestion('+data[i].questionNo+')">'+data[i].questionNo+'</div>';
				
			
			}
		alert(i);
		$("#questionsDivision").html("");
		$("#questionsDivision").html(innerHtml);
	
	});
	
});
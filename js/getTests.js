$(document).ready(function(){
	var i,innerhtml="";
	  $.getJSON( "phpFiles/getTests.php", {}, function( data ) {
		  
		//alert(data[1][0]);
		//alert(data.length);
		for(i=0;i<data.length;i++)
			{
			//alert(1);
			  if(data[i][1] == 0)
				  {
				  innerhtml  += '<div>'
				             +'<div class="subjectContainer">'+data[i][0]+'</div>'
				             + '<div class="testNotStarted" onclick="openExamWindow(\''+data[i][0]+'\')" id="'+data[i][0]+'">START TEST</div>'
				             +'</div>';
				  }
			  else if(data[i][1] == 1)
				  {

				  innerhtml  += '<div>'
				             +'<div class="subjectContainer">'+data[i][0]+'</div>'
				             + '<div class="testIncomplete" onclick="openExamWindow(\''+data[i][0]+'\')" id="'+data[i][0]+'">CONTINUE TEST</div>'
				             +'</div>';
				  }
			  else
				  {

				  innerhtml += '<div>'
				             +'<div class="subjectContainer">'+data[i][0]+'</div>'
				             + '<div class="testComplete" onclick="openResultsWindow(\''+data[i][0]+'\')" id="'+data[i][0]+'">TEST RESULTS</div>'
				             +'</div>';
				  }
			}
		
		$('#testsContainer').html('');
		$('#testsContainer').html(innerhtml);
	});
	
});
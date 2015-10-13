	


function logout()
{
	window.open('login.html','_self');
	
	$.ajax({
        url: 'phpFiles/logout.php',
        
        
    });
	
	
}
var intervalID, childWindow;

function openExamWindow(subjectName)
{
	var request = $.ajax({
        url: 'phpFiles/createTest.php',
        type: 'POST',
       data:
       {
        	test : subjectName
        }
    });
	
	$.when(request).done(function(){
    	
		intervalID  = setInterval(function(){ checkWindow(); }, 100);
    	childWindow = window.open('index.php','testWindow','toolbar=no, location=no, directories=no, status=no, menubar=no,height = 800px,width = 1100px');
    });
	
	
}

function checkWindow() 
{
	
    if (childWindow && childWindow.closed) 
    {
        window.clearInterval(intervalID);
    	
       var request =  $.ajax({
	        url: 'phpFiles/examSessionDestroy.php',
	        
	       
	    });
       
       $.when(request).done(function(){
    	   
    	   //alert(1);
    	   window.opener.location.reload();
    	   getTests();
       });
        //alert('closed');
        
    }
}




getTests();


function getTests()
{


$(document).ready(function(){
	var i,innerhtml="";
	var j;
	  $.getJSON( "phpFiles/getTests.php", {}, function( data ) {
		  
		//alert(data[1][0]);
		//alert(data.length);
		for(i=0;i<data.length;i++)
			{
			//alert(1);
			j=i+1;
			  if(data[i][1] == 0)
				  {

			       innerhtml +='<div class="snoDivision">'+j+'</div>'
			                 +'<div class="testNameDivision">'+data[i][2]+'</div>'
			    	         +'<div class="testStatusDivision"><div class="testNotStarted" onclick="openExamWindow(\''+data[i][0]+'\')" id="'+data[i][0]+'">START TEST</div></div>';
			    
				  }
			  else if(data[i][1] == 1)
				  {
				  innerhtml +='<div class="snoDivision">'+j+'</div>'
	                 +'<div class="testNameDivision">'+data[i][2]+'</div>'
	    	         +'<div class="testStatusDivision"><div class="testIncomplete" onclick="openExamWindow(\''+data[i][0]+'\')" id="'+data[i][0]+'">CONTINUE TEST</div></div>';
	    

				  }
			  else
				  {
                      
				  innerhtml +='<div class="snoDivision">'+j+'</div>'
	                 +'<div class="testNameDivision">'+data[i][2]+'</div>'
	    	         +'<div class="testStatusDivision"><div class="testComplete" onclick="openResultsWindow(\''+data[i][0]+'\')" id="'+data[i][0]+'">TEST RESULTS</div></div>';
	    
				  }
			}
		
		$('#testsDivision').html('');
		$('#testsDivision').html(innerhtml);
	});
	
});



}
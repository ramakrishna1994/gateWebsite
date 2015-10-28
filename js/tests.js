	


function logout()
{
	window.open('index.html','_self');
	
	$.ajax({
        url: 'phpFiles/logout.php',
        
        
    });
	
	
}
var intervalID, childWindow;

function openExamWindow(subjectName)
{
	
	$.post("phpFiles/createTest.php",{test : subjectName },function(data){
		
		if(data.error == '0')
			{
    	//alert(0);
		intervalID  = setInterval(function(){ checkWindow(); }, 100);
    	childWindow = window.open('exam.php','testWindow','toolbar=no, location=no, directories=no, status=no, menubar=no,height = 800px,width = 1100px');
    
			}
		else
			{
			//alert(1);
			childWindow = window.open('notSubscribed.php','testWindow','toolbar=no, location=no, directories=no, status=no, menubar=no,height = 800px,width = 1100px');
			}
		
     },"json");
	
	
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

	$('#mainDivision1').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');

$(document).ready(function(){
	var i,innerhtml='<div class="testsheaderDivision">'
                    +'<div class="snoDivision1">S.NO</div>'
                    +'<div class="testNameDivision1">TEST NAME</div>'
                    +'<div class="testStatusDivision1">TEST STATUS</div>'
                    +'</div>'
                    +'<div class="testsDivision" id="testsDivision">"';
	var j;
	  $.getJSON( "phpFiles/getTests.php", {}, function( data ) {
		  
		//alert(data[1][0]);
		//alert(data.length);
		for(i=0;i<data.length;i++)
			{
			//alert(1);
			j=i+1;
			if(data[i][3] == 1)
			{
			
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
			else
				{
				  innerhtml +='<div class="snoDivision">'+j+'</div>'
	                 +'<div class="testNameDivision">'+data[i][2]+'</div>'
	    	         +'<div class="testStatusDivision"><div class="testNotStarted" onclick="buyTestSeries()">BUY TEST SERIES</div></div>';
				}
		}
			
		
		$('#mainDivision1').html('');
		$('#mainDivision1').html(innerhtml);
	});
	
});



}




function buyTestSeries()
{
	
	$('#mainDivision1').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');
	$(document).ready(function(){
	    
	        $("#mainDivision1").load("buyTestSeries.php", function(responseTxt, statusTxt, xhr){
	            
	        });
	    
	});		
}
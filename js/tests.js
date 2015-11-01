	


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
    	   
    	   
    	   window.opener.location.reload();
    	   
       });
      
        
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
                    +'<div class="testsDivision" id="testsDivision">';
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
			 
			}
			else
				{
				  innerhtml +='<div class="snoDivision">'+j+'</div>'
	                 +'<div class="testNameDivision">'+data[i][2]+'</div>'
	    	         +'<div class="testStatusDivision"><div class="testNotStarted" onclick="clickTab(6)">BUY TEST SERIES</div></div>';
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




function getTestResults()
{
	$('#mainDivision1').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');
	
	$(document).ready(function(){
		
		var j;
		  $.getJSON( "phpFiles/getTestResults.php", {}, function( data ) {
			  
			//alert(data[1][0]);
			//alert(data.length);
		if(data.length != 0)
		{
			
			var i,innerhtml='<div class="testsheaderDivision">'
                +'<div class="snoDivision1">S.NO</div>'
                +'<div class="testNameDivision1">TEST NAME</div>'
                +'<div class="testStatusDivision1">TEST STATUS</div>'
                +'</div>'
                +'<div class="testsDivision" id="testsDivision">';
			for(i=0;i<data.length;i++)
				{
				//alert(1);
				j=i+1;
				
				
				  
				  
	                      
					  innerhtml +='<div class="snoDivision">'+j+'</div>'
		                 +'<div class="testNameDivision">'+data[i][2]+'</div>'
		    	         +'<div class="testStatusDivision"><img src="images/plus.png" style="border-radius:50%;height:20px;width:20px;float:left;margin-left:20px;margin-top:10px;cursor:pointer" onclick="showExpand(\''+data[i][0]+'\','+j+','+data.length+')" id="expandTab'+j+'" ticked="0" ><div class="testComplete" onclick="showExpand(\''+data[i][0]+'\','+j+','+data.length+')" id="'+data[i][0]+'">TEST RESULTS</div></div>'
		    	         +'<div class="resultsDivision" id="result'+j+'"></div>';
		    
					  
				
			}
			
			innerhtml +='</div>';
		}
		else
		{
			 innerhtml='<div style="height: 30px;width: 300px;margin:auto;margin-top:50px;">You have not completed any tests</div>';
		}
			
			$('#mainDivision1').html('');
			$('#mainDivision1').html(innerhtml);
		});
		  
		  
		
	});
	

 	
}






function clickTab(id)
{

 var tab = "tab"+id;
 var showtab = "showtab"+id;

 var i;
 for(i=1;i<=8;i++)
	 {
	  var tab1 = "tab"+i;
	  var showtab1="showtab"+i;
	 
	  document.getElementById(tab1).className = 'tabNotSelected';
	  document.getElementById(showtab1).style.backgroundImage = "url('')";
	  document.getElementById(showtab1).style.border = "0px";
	  
	  
	 }
 
 document.getElementById(tab).className = 'tabSelected';
 document.getElementById(showtab).style.backgroundImage ="url('images/background.png')";
 document.getElementById(showtab1).style.border = "1 px solid";

 
 	switch(id)
 	{
 		case 1:
 			getTests();
 			break;
 		case 2:
 			getTestResults();
 			break;
 		case 3:
 			getSyllabus();
 			break;
 		case 4:
 			getProfile(0);
 			break;
 		case 5:
 			getAccountSettings(0);
 			break;
 		case 6:
 			buyTestSeries();
 			break;
 		case 7:
 			displayAboutUs();
 			break;
 		case 8:
 			contactUs();
 			break;
 			
 		
 	}
}

function showExpand(subject,id,length)
{
  
	var expand = 'expandTab'+id;
	if(document.getElementById(expand).getAttribute("ticked")==1)
		{
		
		var result = 'result'+id;
		$('#'+result).slideUp(500,function(){
			
			    document.getElementById(expand).src = 'images/plus.png'
				document.getElementById(expand).setAttribute("ticked", "0");
		});
		
		}
	else
		{
		
		 showResultsWindow(subject, id, length)
		}
}


function showResultsWindow(subject,id,length)
{
	
	var result= "result"+id;
	var expand = "expandTab"+id;
	var i,innerhtml;
    for(i=1;i<=length;i++)
    	{
    		var result1 = "result"+i;
    		$('#'+result1).slideUp(500);
    		 var expand1 = "expandTab"+i;
    		document.getElementById(expand1).src = 'images/plus.png';
    		document.getElementById(expand1).setAttribute("ticked", "0");
    	}
    $('#'+result).slideDown(500);
    $('#'+result).html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:40px;">');
    document.getElementById(expand).src = 'images/minus.png';
    document.getElementById(expand).setAttribute("ticked", "1");
    
    $(document).ready(function(){
    	
    	$.post("phpFiles/getTestScores.php",{subject :subject},function(data){
    		
    		if(data.error == '1')
    			{
    			  window.location.reload();
    			}
    		else
    			{
    			 innerhtml ='<div style="width:400px;height:40px;margin:auto;margin-top:20px;font-family:cursive">'
    				       +'Your score for this test is  &nbsp;&nbsp;"'+data.score+'"</div>'
    				       +'<div class="viewSolutions"  onClick="showAnswers(\''+subject+'\')">VIEW YOUR ANSWERS AND SOLUTIONS</div>';
    			}
    		
    		 $('#'+result).html(innerhtml);
    		
    	},"json");
    });
    
 
}








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
    	
    	childWindow = window.open('index.php','testWindow','toolbar=no, location=no, directories=no, status=no, menubar=no,height = 800px,width = 1000px');
    });
	
	
}

function checkWindow() 
{
	
    if (childWindow && childWindow.closed) 
    {
        window.clearInterval(intervalID);
    	
        $.ajax({
	        url: 'phpFiles/examSessionDestroy.php',
	        
	       
	    });
        window.opener.location.reload();
        //alert('closed');
        
    }
}

intervalID  = setInterval(function(){ checkWindow(); }, 1000);
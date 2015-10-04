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
    	
    	childWindow = window.open('index.php','testWindow','toolbar=no, location=no, directories=no, status=no, menubar=no,height = 1000px,widht = 1200px');
    });
	
	
}

function checkWindow() 
{
	
    if (childWindow && childWindow.closed) 
    {
        window.clearInterval(intervalID);
    	window.open('tests.php','_self');
        $.ajax({
	        url: 'phpFiles/examSessionDestroy.php',
	        
	       
	    });
        alert('closed');
        
    }
}

intervalID  = setInterval(function(){ checkWindow() }, 1000);
function manualEndTestByUser()
{
	

 	
 	var r = confirm("If you end the test now , you will not be able to continue this test in the future.\nDo you really want to end this test ?");
 	if (r == true) 
 	{
 		endTest();
 	} 
 	else
 	{
 		return;
 	}
}
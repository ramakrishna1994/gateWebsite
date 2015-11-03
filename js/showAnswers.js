var noOfQuestions,previousQuestionNo,nextQuestionNo;


function showAnswers(subject)
{
	

 	$('#popup').slideDown(500,function(){
 		
 		
 		displayPopupQuestions(subject);
 	});
 	
 	
	

}

function closePopup()
{
	

	 	$('#popup').slideUp(500,function(){
	 		
	 		$('#popupQuestionsDivision').html('');
	 		$('#popupQuestionNoDivision').html('');
	 		$('#popupQuestionDivision').html('');
	 		$('#popupImageDivision').html('');
	 		$('#popupoptionADivision').html('');
	 		$('#popupoptionBDivision').html('');
	 		$('#popupoptionCDivision').html('');
	 		$('#popupoptionDDivision').html('');
	 		$('#popupYourAnswerDivision').html('');
	 		$('#popupCorrectAnswerDivision').html('');
	 		$('#popupSolutionDivision').html('');
	 		
	 	});
	 	
	 	
	
	
}

function displayPopupQuestions(subject)
{
	 $(document).ready(function(){
		 
		 
		 $.post("phpFiles/displayPopupQuestions.php",{subject:subject},function(data){
			 
			 
			 
				 var i,j,innerhtml="";
				 
			if(data.error == '1')
				{
					window.open("tests.php","_self");
					return;
				}
				 noOfQuestions = data.noOfQuestions;
				  for(i=1;i<=data.noOfQuestions;i++)
					  {
					   
					  	j=i;
					  	
					  	if(i<10)
						 {
					  		j="0"+i;
						 }
					  	
					    if(i==1)
					    	innerhtml += '<div class="selected" id="question'+i+'" onclick="clickQuestion(\''+subject+'\','+i+')">'+j+'</div>';
					    else
					    	innerhtml += '<div class="notSelected" id="question'+i+'" onclick="clickQuestion(\''+subject+'\','+i+')">'+j+'</div>';
					  }
				  innerhtml += '<div class="marksDistributionButton" onclick="getMarksDistribution(\''+subject+'\')">MARKS DISTRIBUTION</div>';
				  getPopupQuestion(subject,1);
				  $('#popupQuestionsDivision').html(innerhtml);
				  
				 
			 
		 },"json")
	 });
  
}


function clickQuestion(subject,questionNo)
{
	var question = 'question'+questionNo;
	var i;
	for(i=1;i<=noOfQuestions;i++)
		{
		   var question1 = 'question'+i;
		   document.getElementById(question1).className = 'notSelected';
		}
	document.getElementById(question).className = 'selected';
	getPopupQuestion(subject, questionNo);

}


function getPopupQuestion(subject,questionNo)
{
	
	
	$('#popupQuestionNoDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupQuestionDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupImageDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupoptionADivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupoptionBDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupoptionCDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupoptionDDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupYourAnswerDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupCorrectAnswerDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupSolutionDivision').hide();
	
	
	$(document).ready(function(){
		 
		 
		 $.post("phpFiles/getPopupQuestion.php",{subject:subject,questionNo:questionNo},function(data){
			 
			 $('#popupQuestionNoDivision').html('QUESTION NO : '+data.questionNo);
			 $('#popupMarksDivision').html('MARKS : '+data.marks);
			 $('#popupQuestionDivision').html(data.question);
			 
			 if(data.error == '1')
				 {
				   window.open("tests.php","_self");
				   return;
				 }
			 if(data.isImage == '1')
				 {
				  	$('#popupImageDivision').show();
				  	$('#popupImageDivision').html('<img style="align:center" src="'+data.imagePath+'">');
				  	
				 }
			 else
				 {
				    $('#popupImageDivision').hide(); 
				    $('#popupImageDivision').html('');
				 }
			 if(data.isNumerical == '0')
				 {
				 		$('#popupoptionADivision').show();
				 		$('#popupoptionBDivision').show();
				 		$('#popupoptionCDivision').show();
				 		$('#popupoptionDDivision').show();
				 		
				 		$('#popupoptionADivision').html(data.optionA);
				 		$('#popupoptionBDivision').html(data.optionB);
				 		$('#popupoptionCDivision').html(data.optionC);
				 		$('#popupoptionDDivision').html(data.optionD);
				 		
				 }
			 else
				 {
				 		$('#popupoptionADivision').hide();
				 		$('#popupoptionBDivision').hide();
				 		$('#popupoptionCDivision').hide();
				 		$('#popupoptionDDivision').hide();
				 }
			 if(data.yourAnswer == "")
				 {
				 		$('#popupYourAnswerDivision').html('<div style="background-color:red"><font color="white">You have not Answered this question</font></div>');
				 		$('#popupRightOrWrongDivision').html('<image src="images/wrong.jpg" style="height:20px;width:20px;border-radius:50%">');
				 }
			 else if(data.yourAnswer == data.correctAnswer)
				 {
				 		$('#popupYourAnswerDivision').html('<div style="background-color:green"><font color="white">You have Answered '+data.yourAnswer+'</font></div>');
				 		$('#popupRightOrWrongDivision').html('<image src="images/correct.jpg" style="height:20px;width:20px;border-radius:50%">');
				 }
			 else 
				 {
				 		$('#popupYourAnswerDivision').html('<div style="background-color:red"><font color="white">You have Answered '+data.yourAnswer+'</font></div>');
				 		$('#popupRightOrWrongDivision').html('<image src="images/wrong.jpg" style="height:20px;width:20px;border-radius:50%">');
				 }
				 		
			 
			 $('#popupCorrectAnswerDivision').html('Correct answer is '+data.correctAnswer);
			 
			 
			 previousQuestionNo = questionNo - 1;
			 if(previousQuestionNo <=0)
				 {
				   previousQuestionNo = noOfQuestions;
				 }
			 nextQuestionNo = questionNo + 1;
			 if(nextQuestionNo == (noOfQuestions+1))
				 {
				   nextQuestionNo = 1;
				 }
			
			 document.getElementById("popupPreviousDivision").setAttribute("onclick","clickQuestion('"+subject+"',"+previousQuestionNo+")");
			 document.getElementById("popupNextDivision").setAttribute("onclick","clickQuestion('"+subject+"',"+nextQuestionNo+")");
			 
			 $('#popupSolutionDivision').hide();
				 
			 $('#popupViewSolutionDivision').html('VIEW SOLUTION');
			 document.getElementById("popupViewSolutionDivision").setAttribute("onclick","viewSolution()");
				 
			 
		 },"json")
	 });
  
}



function viewSolution()
{
	$('#popupSolutionDivision').slideDown(500,function(){
		
	});

	$('#popupViewSolutionDivision').html('HIDE SOLUTION');
	document.getElementById("popupViewSolutionDivision").setAttribute("onclick","hideSolution()");
	
}


function hideSolution()
{
	$('#popupSolutionDivision').slideUp(500,function(){
		
		
	});
	$('#popupViewSolutionDivision').html('VIEW SOLUTION');
	document.getElementById("popupViewSolutionDivision").setAttribute("onclick","viewSolution()");
	
}



function getMarksDistribution(subject)
{
	
	$(document).ready(function(){
		
		 $.post("phpFiles/getMarksDistribution.php",{subject:subject},function(data){
			 
			 
			 
			 
		 },"json");
		 
	});

}













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
					    	innerhtml += '<div class="selected" id="question'+i+'" onclick="clickQuestion(\''+subject+'\','+i+','+1+')">'+j+'</div>';
					    else
					    	innerhtml += '<div class="notSelected" id="question'+i+'" onclick="clickQuestion(\''+subject+'\','+i+','+1+')">'+j+'</div>';
					  }
				  innerhtml += '<div class="marksDistributionButtonNotSelected" id="marksDistribution" onclick="clickQuestion(\''+subject+'\','+-1+','+2+')">MARKS DISTRIBUTION</div>';
				  getPopupQuestion(subject,1);
				  $('#popupQuestionsDivision').html(innerhtml);
				  
				 
			 
		 },"json")
	 });
  
}


function clickQuestion(subject,questionNo,calledValue)
{
	var question = 'question'+questionNo;
	var i;
	for(i=1;i<=noOfQuestions;i++)
		{
		   var question1 = 'question'+i;
		   document.getElementById(question1).className = 'notSelected';
		}
	document.getElementById("marksDistribution").className = 'marksDistributionButtonNotSelected';
	
	if(calledValue == 1)
	{
		document.getElementById(question).className = 'selected';
		getPopupQuestion(subject, questionNo);
	}
	else
	{
		document.getElementById("marksDistribution").className = 'marksDistributionButtonSelected';	
		getMarksDistribution(subject);
		
	}

}


function getPopupQuestion(subject,questionNo)
{
	
	$('#popupPreviousDivision').show();
	$('#popupQuestionNoDivision').show();
	$('#popupRightOrWrongDivision').show();
	$('#popupMarksDivision').show();
	$('#popupNextDivision').show();
	$('#popupMainDivision').show();
	
	$('#popupMarksDistributionDivision').hide();
	
	
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
				 		$('#popupOptionDivision1').show();
				 		$('#popupOptionDivision2').show();
				 		$('#popupOptionDivision3').show();
				 		$('#popupOptionDivision4').show();
				 		
				 		$('#popupoptionADivision').html(data.optionA);
				 		$('#popupoptionBDivision').html(data.optionB);
				 		$('#popupoptionCDivision').html(data.optionC);
				 		$('#popupoptionDDivision').html(data.optionD);
				 		
				 }
			 else
				 {
				        $('#popupOptionDivision1').hide();
				        $('#popupOptionDivision2').hide();
				        $('#popupOptionDivision3').hide();
				        $('#popupOptionDivision4').hide();
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
			
			 document.getElementById("popupPreviousDivision").setAttribute("onclick","clickQuestion('"+subject+"',"+previousQuestionNo+",1)");
			 document.getElementById("popupNextDivision").setAttribute("onclick","clickQuestion('"+subject+"',"+nextQuestionNo+",1)");
			 
			 $('#popupSolutionDivision').hide();
				 
			 $('#popupViewSolutionDivision').html('VIEW SOLUTION');
			 document.getElementById("popupViewSolutionDivision").setAttribute("onclick","viewSolution()");
				 
			 $('#popupSolutionDivision').html(data.solution);
			 
		 },"json");
	 });
  
}



function viewSolution()
{
	$('#popupSolutionDivision').slideDown(500);

	$('#popupViewSolutionDivision').html('HIDE SOLUTION');
	document.getElementById("popupViewSolutionDivision").setAttribute("onclick","hideSolution()");
	
}


function hideSolution()
{
	$('#popupSolutionDivision').slideUp(500);
	$('#popupViewSolutionDivision').html('VIEW SOLUTION');
	document.getElementById("popupViewSolutionDivision").setAttribute("onclick","viewSolution()");
	
}



function getMarksDistribution(subject)
{
	$('#popupPreviousDivision').hide();
	$('#popupQuestionNoDivision').hide();
	$('#popupRightOrWrongDivision').hide();
	$('#popupMarksDivision').hide();
	$('#popupNextDivision').hide();
	$('#popupMainDivision').hide();
	
	$('#popupMarksDistributionDivision').show();
	$('#popupMarksDistributionDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	
	var i;
	 var innerhtml = '<table border="1px solid" style="text-align:center;padding:2px;">'
		  		   + '<tr><td>Question No</td><td>Given Marks</td><td>Status</td><td>Your Marks</td></tr>';
	$(document).ready(function(){
		
		 $.post("phpFiles/getMarksDistribution.php",{subject:subject},function(data){
			 
				 			
				 	for(i=1;i<data.length;i++)
				 		{
				 		
				 		 	innerhtml +='<tr><td>'+data[i].questionNo+'</td><td>'+data[i].marks+'</td>';
				 		 
				 		 	if(data[i].correct == 1)
				 		 		 innerhtml +='<td><image src="images/correct.jpg" style="height:20px;width:20px;border-radius:50%"></td>';
				 		 	else
				 		 		 innerhtml +='<td><image src="images/wrong.jpg" style="height:20px;width:20px;border-radius:50%"></td>';
				 		 	
				 		 	innerhtml += '<td>'+data[i].yourMarks+'</td></tr>';
				 		}
				 	innerhtml +='<tr><td colspan="3">Total Marks</td><td>'+data[0].totalMarks+'</td></tr></table>';
					 
					 $('#popupMarksDistributionDivision').html(innerhtml);
			 
		 },"json");
		 
		 
		 
	});

}













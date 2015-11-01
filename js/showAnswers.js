var noOfQuestions,previousQuestionNo,nextQuestionNo;


function showAnswers(subject)
{
	

 	$('#popup').slideDown(500,function(){
 		
 		
 		displayPopupQuestions(subject);
 	});
 	
 	
	

}

function closePopup()
{
	

	 	$('#popup').slideUp(500);
	 	
	 	
	
	
}

function displayPopupQuestions(subject)
{
	 $(document).ready(function(){
		 
		 
		 $.post("phpFiles/displayPopupQuestions.php",{subject:subject},function(data){
			 
			 
			 
				 var i,j,innerhtml="";
				 noOfQuestions = data.noOfQuestions;
				  for(i=1;i<=data.noOfQuestions;i++)
					  {
					   
					  	j=i;
					  	
					  	if(i<10)
						 {
					  		j="0"+i;
						 }
					  	
					    
					  	innerhtml += '<div class="notAnswered" id="question'+i+'" onclick="getPopupQuestion(\''+subject+'\','+i+')">'+j+'</div>'
					  }
				  getPopupQuestion(subject,1);
				  $('#popupQuestionsDivision').html(innerhtml);
				  
				 
			 
		 },"json")
	 });
  
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
			 $('#popupQuestionDivision').html(data.question);
			 
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
				 		$('#popupYourAnswerDivision').html('<font color="red">You have not Answered this question</font>');
			 else if(data.yourAnswer == data.correctAnswer)
				 		$('#popupYourAnswerDivision').html('<font color="green">You have Answered '+data.yourAnswer+'</font>');
			 else 
				 		$('#popupYourAnswerDivision').html('<font color="red">You have Answered '+data.yourAnswer+'</font>');
				 		
			 
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
			
			 document.getElementById("popupPreviousDivision").setAttribute("onclick","getPopupQuestion('"+subject+"',"+previousQuestionNo+")");
			 document.getElementById("popupNextDivision").setAttribute("onclick","getPopupQuestion('"+subject+"',"+nextQuestionNo+")");
			 
			 $('#popupSolutionDivision').hide();
				  
				 
			 
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


 function reviewAndNext(current){ 

	  var questionNo="question"+current;
	 

	
	 
		 
		 var value;
		 if(document.getElementById("optionARadio").checked==true)
			 {
			 value="A";
			 document.getElementById(questionNo).className="markedForReview";	 
			 }
		 else if(document.getElementById("optionBRadio").checked==true)
		 {
			 value="B";
			 document.getElementById(questionNo).className="markedForReview";	 
			 }

		 else if(document.getElementById("optionCRadio").checked==true)
		 {
			 value="C";
			 document.getElementById(questionNo).className="markedForReview";	 
			 }

		 else if(document.getElementById("optionDRadio").checked==true)
		 {
			 value="D";
			 document.getElementById(questionNo).className="markedForReview";	 
			 }
		 else
		 {
			 value="0";
			 //document.getElementById(questionNo).className="markedForReview";	 
			 }
		 	 
	 

	 
  $(document).ready(function(){
	  
	  $.getJSON( "phpFiles/saveAndReviewQuestion.php", { questionNo : current ,answer : value,marked:2}, function( data ) {
    	 // alert( data.question ); 
    	  //alert( data.optionA ); 

    	  document.getElementById("questionNo").innerHTML=data.questionNo;
    	  document.getElementById("question").innerHTML=data.question;
    	  document.getElementById("optionA").innerHTML=data.optionA;
    	  document.getElementById("optionB").innerHTML=data.optionB;
    	  document.getElementById("optionC").innerHTML=data.optionC;
    	  document.getElementById("optionD").innerHTML=data.optionD;
    	  document.getElementById("saveAndNextDivision").setAttribute("onclick","saveAndNext("+data.current+")");
    	  document.getElementById("reviewAndNextDivision").setAttribute("onclick","reviewAndNext("+data.current+")");
    	  
    	  if(data.answered!='0')
		  {
		    
		    var radioButton="option"+data.answered+"Radio";
		    document.getElementById(radioButton).checked=true;
		    
		  }
	  else
		  {
		  document.getElementById("optionARadio").checked=false;
		  document.getElementById("optionBRadio").checked=false;
		  document.getElementById("optionCRadio").checked=false;
		  document.getElementById("optionDRadio").checked=false;
		  }
    	});
  
  });    
 }
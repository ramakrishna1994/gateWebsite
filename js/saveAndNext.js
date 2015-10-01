 function saveAndNext(current){ 
     
	  var questionNo="question"+current;
	  

		
		 
		 var value;
		 if(document.getElementById("optionARadio").checked==true)
			 {
			 value="A";
			 document.getElementById(questionNo).className="saved";	 
			 }
		 else if(document.getElementById("optionBRadio").checked==true)
		 {
			 value="B";
			 document.getElementById(questionNo).className="saved";	 
			 }

		 else if(document.getElementById("optionCRadio").checked==true)
		 {
			 value="C";
			 document.getElementById(questionNo).className="saved";	 
			 }

		 else if(document.getElementById("optionDRadio").checked==true)
		 {
			 value="D";
			 document.getElementById(questionNo).className="saved";	 
			 }
		 else
		 {
			 value="0";
			 //document.getElementById(questionNo).className="notAnswered";	 
			 }
		 
		 $("#questionNo").html('<img src="images/loader.gif" style="height: 40px;width: 40px">');
		  $("#question").html('<img src="images/loader.gif" style="height: 40px;width: 40px">');
	      $("#optionA").html('<img src="images/loader.gif" style="height: 40px;width: 40px">');
	      $("#optionB").html('<img src="images/loader.gif" style="height: 40px;width: 40px">');
	      $("#optionC").html('<img src="images/loader.gif" style="height: 40px;width: 40px">');
	      $("#optionD").html('<img src="images/loader.gif" style="height: 40px;width: 40px">');
	 
  $(document).ready(function(){
	 
	  $.getJSON( "phpFiles/saveAndReviewQuestion.php", { questionNo : current, answer:value ,marked:1 }, function( data ) {
	
		  $("#questionNo").html(data.questionNo);
          $("#question").html(data.question);
	      $("#optionA").html(data.optionA);
	      $("#optionB").html(data.optionB);
	      $("#optionC").html(data.optionC);
	      $("#optionD").html(data.optionD);
        	  document.getElementById("questionNo").innerHTML=data.questionNo;
    	  document.getElementById("question").innerHTML=data.question;
    	  document.getElementById("optionA").innerHTML=data.optionA;
    	  document.getElementById("optionB").innerHTML=data.optionB;
    	  document.getElementById("optionC").innerHTML=data.optionC;
    	  document.getElementById("optionD").innerHTML=data.optionD;
    	  document.getElementById("reviewAndNextDivision").setAttribute("onclick","reviewAndNext("+data.current+")");
    	  document.getElementById("saveAndNextDivision").setAttribute("onclick","saveAndNext("+data.current+")");
    	 
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
 
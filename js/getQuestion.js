
getQuestion(1);


 function getQuestion(current){
	 
	  $(document).ready(function(){
		  
		 	 
		  $("#questionNo").html('<img src="images/loader.gif" style="height: 40px;width: 40px">');
		  $("#question").html('<img src="images/loader.gif" style="height: 40px;width: 40px">');
	      $("#optionA").html('<img src="images/loader.gif" style="height: 40px;width: 40px">');
	      $("#optionB").html('<img src="images/loader.gif" style="height: 40px;width: 40px">');
	      $("#optionC").html('<img src="images/loader.gif" style="height: 40px;width: 40px">');
	      $("#optionD").html('<img src="images/loader.gif" style="height: 40px;width: 40px">');
	
		  
		  $.getJSON( "phpFiles/getQuestion.php", { questionNo: current}, function( data ) {
		
			  $("#questionNo").html(data.questionNo);
	          $("#question").html(data.question);
		      $("#optionA").html(data.optionA);
		      $("#optionB").html(data.optionB);
		      $("#optionC").html(data.optionC);
		      $("#optionD").html(data.optionD);
	    	  document.getElementById("saveAndNextDivision").setAttribute("onclick","saveAndNext("+data.current+")");
	    	  document.getElementById("reviewAndNextDivision").setAttribute("onclick","reviewAndNext("+data.current+")");
	    	  
	    	  var answerarray = data.answers;
	    	  answerarray = answerarray.split(',');
	    	  
	    	  if(answerarray[questionNo]!=0)
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
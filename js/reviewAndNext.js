 function reviewAndNext(current,isNumerical){ 

	  var questionNo="question"+current;
	 //alert("enteredrev");

	
	 
		 
		 var value,marked;
		 
	if(isNumerical == '0')
	{
		 if(document.getElementById("optionADivision").getAttribute("ticked")==1)
			 {
			 
			 value="A";
			 marked="2";
			 document.getElementById(questionNo).className="markedForReview";	 
			 }
		 else if(document.getElementById("optionBDivision").getAttribute("ticked")==1)
		 {
			 
			 value="B";
			 marked="2";
			 document.getElementById(questionNo).className="markedForReview";	 
			 }

		 else if(document.getElementById("optionCDivision").getAttribute("ticked")==1)
		 {
			 
			 value="C";
			 marked="2";
			 document.getElementById(questionNo).className="markedForReview";	 
			 }

		 else if(document.getElementById("optionDDivision").getAttribute("ticked")==1)
		 {
			 
			 value="D";
			 marked="2";
			 document.getElementById(questionNo).className="markedForReview";	 
		 }
		 else
			 {
			 
			 value="";
			 marked="0";
			 }
	}
	else
	{
		 value=document.getElementById("numericalAnswer").value;
		 alert("numerical");
		 if(value!="")
			 {
			 marked="2";
			 document.getElementById(questionNo).className="markedForReview";	 
			 }
		 else
			 {
			  marked="0";
			 }
		 
	}
		
		 	 

		 $("#questionNo").html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
		  $("#question").html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	      $("#optionA").html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	      $("#optionB").html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	      $("#optionC").html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	      $("#optionD").html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	 
  $(document).ready(function(){
	  
	  $.getJSON( "phpFiles/saveAndReviewQuestion.php", { questionNo : current ,answer : value,marked:marked}, function( data ) {
    	 
		  $("#questionNo").html("QUESTION NO : "+data.questionNo);
          $("#question").html(data.question);
          $("#imageDivision").hide();
          
          document.getElementById("optionADivision").setAttribute("ticked", "0");
		  document.getElementById("optionBDivision").setAttribute("ticked", "0");
		  document.getElementById("optionCDivision").setAttribute("ticked", "0");
		  document.getElementById("optionDDivision").setAttribute("ticked", "0");
		  
		  document.getElementById("optionADivision").className='optionDivision';
  		  document.getElementById("optionBDivision").className='optionDivision';
  		  document.getElementById("optionCDivision").className='optionDivision';
  		  document.getElementById("optionDDivision").className='optionDivision';
  		  
  		  if(data.error == '1')
  		  {
  			  window.location.reload();
  			  return;
  		  }
  		
          if(data.isNumerical == '0')
          {
        	  
        	  $("#numericalAnswerDivision").hide();
        	  $("#optionADivision").show();
        	  $("#optionBDivision").show();
        	  $("#optionCDivision").show();
        	  $("#optionDDivision").show();
        	  
        	  $("#optionA").html(data.optionA);
    	      $("#optionB").html(data.optionB);
    	      $("#optionC").html(data.optionC);
    	      $("#optionD").html(data.optionD);
        	
    	      document.getElementById("numericalAnswer").value="";
    		  
        	  
        	  if(data.answered!='')
    		  {
    		    
        		  var radioButton="option"+data.answered+"Division";
      		    
      		    //alert(radioButton);
      		    document.getElementById(radioButton).className='answered';
      		    document.getElementById(radioButton).setAttribute("ticked", "1");
      		    
      		  }
        	  
        	  
 	    	  if(data.isImage == '1')
 	    		  {
 	    		   $('#imageDivision').show();
 	    		   $('#imageDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
 	    		  $('#imageDivision').html('<img src="'+data.imagePath+'">');
 	    		   
 	    		  }
 	    	  else
 	    		  {
 	    		 $('#imageDivision').hide();
 	    		  }

          }
          
          else
        	  {
        	  
        	  $("#optionADivision").hide();
        	  $("#optionBDivision").hide();
        	  $("#optionCDivision").hide();
        	  $("#optionDDivision").hide();
        	  
        	  $("#numericalAnswerDivision").show();
        	  document.getElementById("numericalAnswer").value="";
        	  var answer = data.answered;
	 	    	 
	 	    	  if(answer!= '')
	     		  {
	     		    
	     		    document.getElementById("numericalAnswer").value=answer;
	       		    
	     		    
	     		  }
	 	    	  
	 	    	 
        	  }
            	 
          
          
          
          
          if(data.isImage == '1')
 		  {
        	  $('#imageDivision').show();
        	  $('#imageDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
        	  $('#imageDivision').html('<img src="'+data.imagePath+'">');
 		   
 		  }
          else
 		  {
        	  $('#imageDivision').hide();
 		  }

    	  
    	  document.getElementById("saveAndNextDivision").setAttribute("onclick","saveAndNext("+data.current+",'"+data.isNumerical+"')");
    	  document.getElementById("reviewAndNextDivision").setAttribute("onclick","reviewAndNext("+data.current+",'"+data.isNumerical+"')");
    	  
    	});
  
  });    
 }

getQuestion(1);

function setAnswer(val)
{
	//alert(val);
	var array=['dummy','A','B','C','D'];	
 var id="option"+array[val]+"Division";
 //alert(id);

 document.getElementById(id).setAttribute("ticked", "1");
 document.getElementById(id).className="answered";
 
 var i=0;
 for(i=1;i<=4;i++)
	 {
	 id="option"+array[i]+"Division";
	  if(i!=val)
		  {
   //      alert(1);
		  document.getElementById(id).setAttribute("ticked", "0");
		  document.getElementById(id).className="optionDivision";
		   
		  }
	 }

 
}

 function getQuestion(current){
	 
	  $(document).ready(function(){
		  
		  $("#imageDivision").hide();
			 $("#questionNo").html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
			  $("#question").html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
		      $("#optionA").html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
		      $("#optionB").html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
		      $("#optionC").html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
		      $("#optionD").html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
		 
		  
		  $.getJSON( "phpFiles/getQuestion.php", { questionNo: current}, function( data ) {
		
			  $("#questionNo").html("QUESTION NO : "+data.questionNo);
	          $("#question").html(data.question);
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

	    		  document.getElementById("optionADivision").setAttribute("ticked", "0");
	    		  document.getElementById("optionBDivision").setAttribute("ticked", "0");
	    		  document.getElementById("optionCDivision").setAttribute("ticked", "0");
	    		  document.getElementById("optionDDivision").setAttribute("ticked", "0");
	    		  
	    		  document.getElementById("optionADivision").className='optionDivision';
	    		  document.getElementById("optionBDivision").className='optionDivision';
	    		  document.getElementById("optionCDivision").className='optionDivision';
	    		  document.getElementById("optionDDivision").className='optionDivision';
	    		  
	    		  var answer = data.answered;
	 	    	 
	 	    	  if(answer!= '0')
	     		  {
	 	    		 // alert(data.answered);
	     		    
	     		    var radioButton="option"+answer+"Division";
	     		    
	     		    //alert(radioButton);
	     		    document.getElementById(radioButton).className='answered';
	       		    document.getElementById(radioButton).setAttribute("ticked", "1");
	     		    
	     		  }
	        	  
	          }
	          else
	          {
	        	  $("#optionADivision").hide();
	        	  $("#optionBDivision").hide();
	        	  $("#optionCDivision").hide();
	        	  $("#optionDDivision").hide();
	        	  
	        	  document.getElementById("optionADivision").setAttribute("ticked", "0");
	    		  document.getElementById("optionBDivision").setAttribute("ticked", "0");
	    		  document.getElementById("optionCDivision").setAttribute("ticked", "0");
	    		  document.getElementById("optionDDivision").setAttribute("ticked", "0");
	    		  
	    		  document.getElementById("optionADivision").className='optionDivision';
	      		  document.getElementById("optionBDivision").className='optionDivision';
	      		  document.getElementById("optionCDivision").className='optionDivision';
	      		  document.getElementById("optionDDivision").className='optionDivision';
	      		  
	        	  $("#numericalAnswerDivision").show();
	        	  
	        	  var answer = data.answered;
		 	    	 
		 	    	  
		 	    	  if(answer!= '0')
		     		  {
		     		    
		     		    document.getElementById("numericalAnswer").value=answer;
		       		    
		     		    
		     		  }
		 	    	  
	          }
		      document.getElementById("saveAndNextDivision").setAttribute("onclick","saveAndNext("+data.current+")");
	    	  document.getElementById("reviewAndNextDivision").setAttribute("onclick","reviewAndNext("+data.current+")");

	    	 
    	  
	    	});
		  
	  });	 
 }
 
 

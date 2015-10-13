
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
		      $("#optionA").html(data.optionA);
		      $("#optionB").html(data.optionB);
		      $("#optionC").html(data.optionC);
		      $("#optionD").html(data.optionD);
	    	  document.getElementById("saveAndNextDivision").setAttribute("onclick","saveAndNext("+data.current+")");
	    	  document.getElementById("reviewAndNextDivision").setAttribute("onclick","reviewAndNext("+data.current+")");

    		  document.getElementById("optionADivision").setAttribute("ticked", "0");
    		  document.getElementById("optionBDivision").setAttribute("ticked", "0");
    		  document.getElementById("optionCDivision").setAttribute("ticked", "0");
    		  document.getElementById("optionDDivision").setAttribute("ticked", "0");
	    	  var answerarray = data.answers;
	    	 // alert(answerarray);
	    	  var val = parseInt(current) - 1;
	    	  answerarray= answerarray.split('');
	    	  //alert(answerarray[val]);
	    	  if(answerarray[val]!= '0')
    		  {
    		    
    		    var radioButton="option"+answerarray[val]+"Division";
    		    
    		    //alert(radioButton);
    		    document.getElementById(radioButton).className='answered';
      		  document.getElementById(radioButton).setAttribute("ticked", "1");
    		    
    		  }
    	  else
    		  {
    		  document.getElementById("optionADivision").className='optionDivision';
    		  document.getElementById("optionBDivision").className='optionDivision';
    		  document.getElementById("optionCDivision").className='optionDivision';
    		  document.getElementById("optionDDivision").className='optionDivision';
    		  }
	    	});
		  
	  });	 
 }
 
 

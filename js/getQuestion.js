
getQuestion(1);


 function getQuestion(current){
	 
	  $(document).ready(function(){
		  
		  $.getJSON( "phpFiles/getQuestion.php", { questionNo: current}, function( data ) {
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
	    	  
	    	  if(data.answered!=0)
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
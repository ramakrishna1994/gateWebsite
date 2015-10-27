var valueOne,valueTwo,operator;
var answer;


function security(val)
{
 valueOne = Math.floor((Math.random() * 10) + 1);
 
 
 do{
	 valueTwo = Math.floor((Math.random() * 10) + 1);
	 
 }while(valueOne==valueTwo);
 
 //alert(valueOne+","+valueTwo);
 
 operator = Math.floor((Math.random() * 3) + 1);
 if(operator == 1)
	 {
	  answer = valueOne +valueTwo;
	  operator = '+';
	 }
 else if(operator == 2)
	 {
	  answer = valueOne-valueTwo;
	  operator = '-';
	 }
 else{
	  answer = valueOne * valueTwo;
	  operator = 'X';
     }
 
 //alert(operator+","+answer);
 $(document).ready(function(){
	if(val == 1)
		{
	     $('#LValueOne').html(valueOne);
	     $('#LValueTwo').html(valueTwo);
	     $('#LOperator').html(operator);
	     document.getElementById("Lanswer").value="";
		}
	else
		{
		 $('#RValueOne').html(valueOne);
	     $('#RValueTwo').html(valueTwo);
	     $('#ROperator').html(operator);
	     document.getElementById("Ranswer").value="";
		}
 });
 
}






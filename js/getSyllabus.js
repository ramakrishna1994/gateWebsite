function getSyllabus()
{

	$('#mainDivision1').html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:50px;">');
	$(document).ready(function(){
	    
	        $("#mainDivision1").load("syllabus.html", function(responseTxt, statusTxt, xhr){
	            
	        });
	    
	});
}


function showChapters(mainId,len){
	
	var i,mainDiv,childDiv,chapterDiv,expandDiv;
	
	
	for(i=1;i<=10;i++)
		{
		chapterDiv = "chaptersDivision"+i;
		$('#'+chapterDiv).slideUp(500);
		childDiv = "subjectNameDivision"+i;
		document.getElementById(childDiv).setAttribute("onclick","showChapters("+i+","+len+")");
	    expandDiv = "expandDivision"+i;		 
	    document.getElementById(expandDiv).setAttribute("onclick","showChapters("+i+","+len+")");
	    $('#'+expandDiv).html('');
		$('#'+expandDiv).html('<img src="images/plus.png" style="width:30px;height:30px;border-radius:50%">');
		}

	mainDiv = "subjectNameDivision"+mainId;
	chapterDiv = "chaptersDivision"+mainId;
	expandDiv = "expandDivision"+mainId;
	$('#'+chapterDiv).slideDown(500);
	document.getElementById(mainDiv).setAttribute("onclick","hideChapters("+mainId+","+len+")");
	document.getElementById(expandDiv).setAttribute("onclick","hideChapters("+mainId+","+len+")");
	$('#'+expandDiv).html('');
	$('#'+expandDiv).html('<img src="images/minus.png" style="width:30px;height:30px;border-radius:50%">');
	
}


function hideChapters(mainId,len){
	
	var mainDiv,chapterDiv,expandDiv;
	mainDiv = "subjectNameDivision"+mainId;
	chapterDiv = "chaptersDivision"+mainId;
    $('#'+chapterDiv).slideUp(500);
	document.getElementById(mainDiv).setAttribute("onclick","showChapters("+mainId+","+len+")");
	expandDiv = "expandDivision"+mainId;		 
    document.getElementById(expandDiv).setAttribute("onclick","showChapters("+mainId+","+len+")");
    $('#'+expandDiv).html('');
	$('#'+expandDiv).html('<img src="images/plus.png" style="width:30px;height:30px;border-radius:50%">');
}




function showSyllabus(mainId,childId,len){
	
	var i,mainDiv,childDiv,expandDiv;
	
	
	for(i=1;i<=len;i++)
    {
		mainDiv = "subjectNameChapterDivision"+mainId+i;
		childDiv="subjectNameChapterSyllabusDivision"+mainId+i;
		expandDiv="expandDivision"+mainId+i;
		$('#'+childDiv).slideUp(500);
		document.getElementById(mainDiv).setAttribute("onclick","showSyllabus("+mainId+","+i+","+len+")");
		document.getElementById(expandDiv).setAttribute("onclick","showSyllabus("+mainId+","+i+","+len+")");
		$('#'+expandDiv).html('');
		$('#'+expandDiv).html('<img src="images/plus.png" style="width:30px;height:30px;border-radius:50%">');
	}
	
	mainDiv = "subjectNameChapterDivision"+mainId+childId;
	childDiv = "subjectNameChapterSyllabusDivision"+mainId+childId;
	expandDiv = "expandDivision"+mainId+childId;
	$('#'+childDiv).slideDown(500);
	document.getElementById(mainDiv).setAttribute("onclick","hideSyllabus("+mainId+","+childId+","+len+")");
	document.getElementById(expandDiv).setAttribute("onclick","hideSyllabus("+mainId+","+childId+","+len+")");
	$('#'+expandDiv).html('');
	$('#'+expandDiv).html('<img src="images/minus.png" style="width:30px;height:30px;border-radius:50%">');
}


function hideSyllabus(mainId,childId,len){
	
	var mainDiv,childDiv,expandDiv;
	childDiv = "subjectNameChapterSyllabusDivision"+mainId+childId;
	mainDiv = "subjectNameChapterDivision"+mainId+childId;
	expandDiv = "expandDivision"+mainId+childId;
	$('#'+childDiv).slideUp(500);
	document.getElementById(mainDiv).setAttribute("onclick","showSyllabus("+mainId+","+childId+","+len+")");
	document.getElementById(expandDiv).setAttribute("onclick","showSyllabus("+mainId+","+childId+","+len+")");
	$('#'+expandDiv).html('');
	$('#'+expandDiv).html('<img src="images/plus.png" style="width:30px;height:30px;border-radius:50%">');
}

<?php 

$username=$_POST['username'];
$password=$_POST['password'];
$table="users";

require_once 'connection.php';

$createQuery="create table if not exists ".$table."("
              ."id int not null auto_increment,"
              ."username varchar(100),"
              ."password varchar(100),"
              ."primary key(id));";

mysqli_query($con,$createQuery) or die(mysqli_error($con));

$insertQuery="insert into ".$table."(username,password) values ('".$username."','".$password."');";

mysqli_query($con,$insertQuery) or die(mysqli_error($con));

$createQuery="create table ".$username."tests("
             ."id int not null auto_increment,"
             ."testName varchar(100),"
             ."timer varchar(20),"
             ."marks int not null default 0,"
             ."statusOfExam int not null default 0,"
             ."answers varchar(255),"
             ."marked varchar(255),"
             ."primary key(id));";

mysqli_query($con,$createQuery) or die(mysqli_error($con));

$str = file_get_contents('../questions/tests.json');
$jsonData = json_decode($str, true);
//echo $jsonData;
$answerstring="";
for ($i=1;$i<=30;$i++)
{
	$answerstring.='0';

}
echo $jsonData["tests"][1]["subjectname"]."1";
$insertQuery;
for($i = 0;$i<4;$i++)
{
    $insertQuery = "insert into ".$username."tests (testname,timer,marks,statusOfExam,answers,marked) values("
                  ."'".$jsonData["tests"][$i]["subjectname"]."',"
                  ."'00:29:60',"
                  ."0,"
                  ."0,"
                  ."'".$answerstring."',"
                  ."'".$answerstring."'"
                  .");";

mysqli_query($con,$insertQuery) or die(mysqli_error($con));
}
mysqli_close($con);
?>
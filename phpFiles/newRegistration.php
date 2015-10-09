<?php 

$firstname=mysqli_real_escape_string($con,$_POST['registrationfirstname']);
$lastname=mysqli_real_escape_string($con,$_POST['registrationlastname']);
$emailid=mysqli_real_escape_string($con,$_POST['registrationemailid']);
$password=mysqli_real_escape_string($con,$_POST['password']);
$table="users";

require_once 'connection.php';

$createQuery="create table if not exists ".$table."("
              ."id int not null auto_increment,"
              ."emailid varchar(100),"
              ."firstname varchar(100),"
              ."lastname varchar(100),"
              ."password varchar(100),"
              ."primary key(id));";

mysqli_query($con,$createQuery) or die(mysqli_error($con));

$checkQuery = "select * from users where emailid = '".$emailid."'";
$result = mysqli_query($con,$checkQuery) or die(mysqli_error($con));
//echo "no of rows:".mysqli_num_rows($result);
if(mysqli_num_rows($result) == 0)
{

   $insertQuery="insert into ".$table."(emailid,firstname,lastname,password) values ('".$emailid."','".$firstname."','".$lastname."','".$password."');";

   mysqli_query($con,$insertQuery) or die(mysqli_error($con));

   $createQuery="create table `".$emailid.".tests`("
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

    $answerstring="";
    for ($i=1;$i<=30;$i++)
    {
	   $answerstring.='0';

     }
    // echo $jsonData["tests"][1]["subjectname"]."1";
     $insertQuery;
     for($i = 0;$i<4;$i++)
     {
        $insertQuery = "insert into `".$emailid.".tests` (testname,timer,marks,statusOfExam,answers,marked) values("
                  ."'".$jsonData["tests"][$i]["subjectname"]."',"
                  ."'00:29:60',"
                  ."0,"
                  ."0,"
                  ."'".$answerstring."',"
                  ."'".$answerstring."'"
                  .");";

        mysqli_query($con,$insertQuery) or die(mysqli_error($con));
      }
      echo '{"error":"0"}';
}

else {
	echo '{"error":"1"}';
}
mysqli_close($con);
?>
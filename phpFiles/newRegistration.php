<?php 

require_once 'connection.php';
require_once 'sendMail.php';

$firstname=mysqli_real_escape_string($con,$_POST['registrationfirstname']);
$lastname=mysqli_real_escape_string($con,$_POST['registrationlastname']);
$emailid=mysqli_real_escape_string($con,$_POST['registrationemailid']);
$password=mysqli_real_escape_string($con,$_POST['password']);
$table="users";



$createQuery="create table if not exists ".$table."("
              ."id int not null auto_increment,"
              ."emailid varchar(100),"
              ."firstname varchar(100),"
              ."lastname varchar(100),"
              ."password varchar(100),"
              ."activationstatus int,"
              ."verificationnumber int,"
              ."primary key(id));";

mysqli_query($con,$createQuery) or die(mysqli_error($con));

$checkQuery = "select * from users where emailid = '".$emailid."'";
$result = mysqli_query($con,$checkQuery) or die(mysqli_error($con));
//echo "no of rows:".mysqli_num_rows($result);


$random = mt_rand(100000,999999);
//echo $random;

if(mysqli_num_rows($result) == 0)
{
   $insertQuery="insert into ".$table."(emailid,firstname,lastname,password,activationstatus,verificationnumber) values ('".$emailid."','".$firstname."','".$lastname."','".$password."',0,".$random.");";

   mysqli_query($con,$insertQuery) or die(mysqli_error($con));

  sendMail();
      echo '{"error":"0"}';
}

else {
	echo '{"error":"1"}';
}
mysqli_close($con);
?>
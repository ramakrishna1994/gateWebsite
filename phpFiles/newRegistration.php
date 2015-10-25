<?php 

require_once 'connection.php';



$emailid=mysqli_real_escape_string($con,$_POST['registrationemailid']);

$table="users";



$createQuery="create table if not exists ".$table."("
              ."id int not null auto_increment,"
              ."emailid varchar(100),"
              ."firstname varchar(100),"
              ."lastname varchar(100),"
              ."password varchar(100),"
              ."imagename varchar(100),"
              ."primary key(id));";

mysqli_query($con,$createQuery) or die(mysqli_error($con));

$checkQuery = "select * from users where emailid = '".$emailid."'";
$result = mysqli_query($con,$checkQuery) or die(mysqli_error($con));
//echo "no of rows:".mysqli_num_rows($result);



//echo $random;

if(mysqli_num_rows($result) == 0)
{
  
 
      echo '{"error":"0"}';
}

else {
	echo '{"error":"1"}';
}
mysqli_close($con);
?>
<?php
//echo phpinfo();

require_once 'connection.php';
session_start();
$emailid=mysqli_real_escape_string($con,$_POST['registrationemailid']);



$random = mt_rand(100000,999999);
$_SESSION['code'] = $random;


echo $_SESSION['code'];


$to = $emailid;
$subject = "Gate Verification Code";

$message = "
<html>
<head>
</head>
<body>
<p>Please enter the below Verification code</p>
<table style='border:1px solid;border-color:black;'>
<tr>
<th>Verifcation Code</th>
<th>".$random."</th>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <Gate@thankyou.com>' . "\r\n";


mail($to,$subject,$message,$headers);

?>
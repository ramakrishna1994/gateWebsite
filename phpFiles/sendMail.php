<?php
//echo phpinfo();

require_once 'connection.php';

$emailid=mysqli_real_escape_string($con,$_POST['registrationemailid']);
//$emailid ="ramakrishnasaradhi@gmail.com";
$table = "users";
$selectQuery = "select verificationnumber from ".$table." where emailid = '".$emailid."';";
$result = mysqli_query($con,$selectQuery) or die(mysqli_error($con));
$val = 0;
while($row = mysqli_fetch_array($result))
{
	$val = $row['verificationnumber'];
}

$to = $emailid;
$subject = "Verification Code";

$message = "
<html>
<head>
<title>Verification Code</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Verifcation Code</th>
<th>".$val."</th>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <Gate2016@example.com>' . "\r\n";


mail($to,$subject,$message);

?>
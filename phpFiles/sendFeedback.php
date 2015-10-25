<?php
//echo phpinfo();

require_once 'isSessionSet.php';
require_once 'connection.php';

$emailid=mysqli_real_escape_string($con,$_POST['emailid']);
$feedback=mysqli_real_escape_string($con,$_POST['feedback']);

$to = "ramakrishnasaradhi@gmail.com";
$subject = "GATE WEBSITE FEEDBACK";

$message = "
<html>
<head>
</head>
<body>
<p>Feedback</p>
<table style='border:1px solid;border-color:black;width:500px;display:inline-block;'>
<tr>
".$feedback."
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <'.$emailid.'>' . "\r\n";


mail($to,$subject,$message,$headers);

?>
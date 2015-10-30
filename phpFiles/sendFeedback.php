<?php
//echo phpinfo();

require_once 'isSessionSet.php';
require_once 'connection.php';
require_once '/home/u955060507/public_html/gate/phpmailer/phpmailer/PHPMailerAutoload.php';



$emailid=mysqli_real_escape_string($con,$_POST['emailid']);
$feedback=mysqli_real_escape_string($con,$_POST['feedback']);

$to = "ramakrishnasaradhi@gmail.com";


$mail = new PHPMailer;

//Enable SMTP debugging. 
//$mail->SMTPDebug = 3;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "mx1.serversfree.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "admin@gate2016.bugs3.com";                 
$mail->Password = "saradhi@2";                           
//If SMTP requires TLS encryption then set it
                        
//Set TCP port to connect to 
$mail->Port = 2525;                                   

$mail->From = "admin@gate2016.bugs3.com";
$mail->FromName = "Admin";

$mail->addAddress($to);

$mail->isHTML(true);

$mail->Subject = "GATE WEBSITE FEEDBACK";
$mail->Body = "
<html>
<head>
</head>
<body>

<table style='border:1px solid;border-color:black;'>
<tr>".$emailid."</tr>
<tr>".$feedback."</tr>
</table>
</body>
</html>
";



if(!$mail->send()) 
{
    echo "Mailer Error: " . $mail->ErrorInfo;
} 
else 
{
    echo "Message has been sent successfully";
}
?>
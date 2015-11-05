<?php


require_once 'connection.php';
require_once '/home/ramakrishna1994/public_html/gate2016/phpmailer/PHPMailerAutoload.php';



session_start();
$emailid=mysqli_real_escape_string($con,$_POST['registrationemailid']);



$random = mt_rand(100000,999999);
$_SESSION['code'] = $random;


//echo $_SESSION['code'];


$to = $emailid;



$mail = new PHPMailer;

//Enable SMTP debugging. 
$mail->SMTPDebug = 3;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "mail.goodcreed.in";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "admin@goodcreed.in";                 
$mail->Password = "Saradhi@123";                           
//If SMTP requires TLS encryption then set it
                        
//Set TCP port to connect to 
$mail->Port = 25;                                   

$mail->From = "admin@goodcreed.in";
$mail->FromName = "Admin";

$mail->addAddress($to);

$mail->isHTML(true);

$mail->Subject = "GATE VERIFICATION CODE";
$mail->Body = "
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



if(!$mail->send()) 
{
    //echo "Mailer Error: " . $mail->ErrorInfo;
} 
else 
{
 //   echo "Message has been sent successfully";
}

?>
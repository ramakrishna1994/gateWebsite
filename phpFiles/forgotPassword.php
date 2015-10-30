<?php 
require_once 'connection.php';
require_once '/home/u955060507/public_html/gate/phpmailer/phpmailer/PHPMailerAutoload.php';


$emailid = mysqli_real_escape_string($con,$_POST['emailid']);
$selectQuery = "select password from users where emailid = '".$emailid."';";

$result = mysqli_query($con,$selectQuery) or die(mysqli_error($con));

if(mysqli_num_rows($result)==0)
{
	echo '{"error":"1"}';
}
else 
{
	
	while($row = mysqli_fetch_array($result))
	{
		$password = $row['password'];
	}
       echo '{"error":"0"}';
	sendMail($password,$emailid);
	
	//echo $password;
}


function sendMail($password,$emailid)
{
	
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

$mail->addAddress($emailid);

$mail->isHTML(true);

$mail->Subject = "GATE ACCOUNT PASSWORD";
$mail->Body = "
<html>
<head>
</head>
<body>
<p>Below is your password.Please Change it after you log in</p>
<table style='border:1px solid;border-color:black;'>
<tr>
<th>PASSWORD IS </th>
<th>".$password."</th>
</tr>
</table>
</body>
</html>
";



if(!$mail->send()) 
{
  //  echo "Mailer Error: " . $mail->ErrorInfo;
} 
else 
{
    //echo "Message has been sent successfully";
}

}
?>
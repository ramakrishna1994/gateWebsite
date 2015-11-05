<?php 
require_once 'connection.php';
require_once '/home/ramakrishna1994/public_html/gate2016/phpmailer/PHPMailerAutoload.php';


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
		//$mail->isSMTP();            
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

		$mail->addAddress($emailid);

		$mail->isHTML(true);

		$mail->Subject = "GATE ACCOUNT PASSWORD";
		$mail->Body = "<html><body>
					   <p>Below is your password.Please Change it after you log in</p>
						<table style='border:1px solid;border-color:black;'>
						<tr>
						<th>PASSWORD IS </th>
						<th>".$password."</th>
						</tr>
						</table>
						</body>
						</html>";



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
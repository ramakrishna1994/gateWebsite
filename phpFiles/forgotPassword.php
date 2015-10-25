<?php 
require_once 'connection.php';

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
	sendMail($password,$emailid);
	echo '{"error":"0"}';
	//echo $password;
}


function sendMail($password,$emailid)
{
	
	$to = $emailid;
	$subject = "Gate Verification Code";
	
	$message = "<html><body>
				<p>BELOW IS YOUR PASSWORD.PLEASE CHANGE IT AFTER LOGGING IN</p>
				<table style='border:1px solid;border-color:black;'>
				<tr>
				<th>Password</th>
				<th>".$password."</th>
				</tr>
				</table>
				</body>
				</html>";
	
	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	
	// More headers
	$headers .= 'From: <Gate@thankyou.com>' . "\r\n";
	
	
	mail($to,$subject,$message,$headers);
	
}
?>
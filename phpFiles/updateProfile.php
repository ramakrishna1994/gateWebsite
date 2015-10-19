<?php 
require_once 'isSessionSet.php';
require_once 'connection.php';


$firstname = mysqli_real_escape_string($con,$_POST['firstname']);
$lastname = mysqli_real_escape_string($con,$_POST['lastname']);

$updateQuery = "update users set lastname = '".$lastname."' where emailid = '".$_SESSION['gateusername']."';";
mysqli_query($con,$updateQuery) or die(mysqli_error($con));
$error = -1;
if(isset($_FILES['image']))
{
$target_dir = "../profilePictures/";
$target_file = $target_dir . basename($_FILES["image"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

$temp = explode(".", $_FILES["image"]["name"]);
$newfilename = $_SESSION['gateusername'] . '.' . end($temp);

// Check if image file is a actual image or fake image

	$check = getimagesize($_FILES["image"]["tmp_name"]);
	if($check != false) {
		//echo "File is an image - " . $check["mime"] . ".";
		$uploadOk = 1;
	} else {
		//echo "File is not an image.";
		$error = 1;
		$uploadOk = 0;
	}


// Check file size
if ($_FILES["image"]["size"] > 1000000) {
	//echo "Sorry, your file is too large.";
	$uploadOk = 0;
	$error = 2;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "JPG" && $imageFileType != "PNG" && $imageFileType != "JPEG") {
			//echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
			$uploadOk = 0;
			$error = 3;
		}
		// Check if $uploadOk is set to 0 by an error
		if ($uploadOk == 0) {
			//echo "Sorry, your file was not uploaded.";
			// if everything is ok, try to upload file
		} else {
			if (move_uploaded_file($_FILES["image"]["tmp_name"], "../profilePictures/" . $newfilename)) {
				
				$error = 0;
				$updateQuery = "update users set imagename = '".$newfilename."' where emailid = '".$_SESSION['gateusername']."';";		
				mysqli_query($con,$updateQuery);
				$_SESSION['gateimage'] = $newfilename;
			} else {
				//echo "Sorry, there was an error uploading your file.";
			}
		}
}
	echo '{"error":"'.$error.'"}';
		
?>

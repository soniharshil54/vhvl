<?php

$cn = mysqli_connect("localhost","phpmyadmin","soni","vhvl"); 

$c1 = $_REQUEST['name1'];  
 $c2 = $_REQUEST['phone1'];
 $c3 = $_REQUEST['email1'];
 $c4 = $_REQUEST['message1'];
 $c5 = $_REQUEST['subject1'];
 $c6 = $_REQUEST['resume1'];
 $c7 = $_REQUEST['resumepath1'];


mysqli_query($cn,"insert into career (name,phone,email,subject,message,resume) values ('$c1','$c2','$c3','$c5','$c4','$c6')") or die(mysqli_error()); 





?>

<?php
$target_dir = "resumes/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
?>
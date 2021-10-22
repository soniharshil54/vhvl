<?php

$cn = mysqli_connect("localhost","vhvl-inc-soni","Sonivhvlinc","vhvl"); 

$c1 = $_REQUEST['name1'];  
 $c2 = $_REQUEST['phone1'];
 $c3 = $_REQUEST['email1'];
 $c4 = $_REQUEST['message1'];
 $c5 = $_REQUEST['subject1'];


mysqli_query($cn,"insert into contactvhvl (name,phone,email,subject,message) values ('$c1','$c2','$c3','$c5','$c4')") or die(mysqli_error()); 

	// Account details
  	$apiKey = urlencode('S8ngji9gaRQ-dafHnRDq5dA9RPcAoMDm8kUXqkDFKa');
	
	// Message details
	$numbers = array(918320006375);
	$sender = urlencode('TXTLCL');
	$message = rawurlencode($c1 . " No: ".$c2. " Email: ".$c3. " inquired:  ". $c4 );
 
	$numbers = implode(',', $numbers);
 
	// Prepare data for POST request
	$data = array('apikey' => $apiKey, 'numbers' => $numbers, "sender" => $sender, "message" => $message);
 
	// Send the POST request with cURL
	$ch = curl_init('https://api.textlocal.in/send/');
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	curl_close($ch);
	
	// Process your response here
	echo $response;



?>
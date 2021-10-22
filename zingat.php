<?php header('Access-Control-Allow-Origin: *'); 


$cn = mysqli_connect("localhost","vhvl-inc-soni","Sonivhvlinc","vhvl"); 

$c1 = $_REQUEST['name1'];  
 $c2 = $_REQUEST['phone1'];
 $c3 = $_REQUEST['service1'];
 $c4 = $_REQUEST['subservice1'];
 $c5 = $_REQUEST['address1'];


mysqli_query($cn,"insert into customerszingat (name,contact,service,subservice,address) values ('$c1','$c2','$c3','$c4','$c5')") or die(mysqli_error()); 





?>
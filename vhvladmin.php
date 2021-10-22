<?php 
$cn = mysqli_connect("localhost","vhvl-inc-soni","Sonivhvlinc","vhvl"); 
    $sel=mysqli_query($cn,"select * from contactvhvl order by id DESC");
   

 ?>

<!DOCTYPE html>
<html>
<head>
	<title>admin vhvl</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
	<table align="center" border="1" class="table table-bordered">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>contact no.</th>
                    <th>email</th>
                    <th>subject</th>
                    <th>message</th>

                </tr>
                </thead>
                <tbody>
                <?php
                while($ft=mysqli_fetch_array($sel))
                {
                    ?> 
                        <tr>
                            <td><?php echo $ft[0];?></td>
                            <td><?php echo $ft[1];?></td>
                            <td><?php echo $ft[2];?></td>
                            <td><?php echo $ft[3];?></td>
                            <td><?php echo $ft[4];?></td>
                            <td><?php echo $ft[5];?></td>
                           
                        </tr>
                    <?php 
                    
                }
                ?>
               </tbody>
            </table>
</body>
</html>
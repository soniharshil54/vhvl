<?php 
$cn = mysqli_connect("localhost","vhvl-inc-soni","Sonivhvlinc","vhvl"); 
    $sel=mysqli_query($cn,"select * from customerszingat order by customerid DESC");
   

 ?>

<!DOCTYPE html>
<html>
<head>
	<title>admin zingaro</title>
</head>
<body>
	<table align="center" border="1" class="table table-striped">
                <tr>
                    <th>c. id</th>
                    <th>name</th>
                    <th>contact</th>
                    <th>service</th>
                    <th>subservice</th>
                    <th>address</th>

                </tr>
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
               
            </table>
</body>
</html>
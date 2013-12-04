<?php
$con=mysqli_connect("localhost","root","root","address");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$sql="INSERT INTO locationPlace (placeName, addressName)
VALUES
('$_POST[placeNameForm]','$_POST[addressNameForm]')";

if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }
echo '1 record added back to <a href="../cms.php">cms</a>';

mysqli_close($con);
?>
<?php
include 'database.php';

$sql="INSERT INTO locationPlace (placeName, addressName)
VALUES
('$_POST[placeNameForm]','$_POST[addressNameForm]')";

if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }

mysqli_close($con);
header("Location: ../cms.php");
?>
<!DOCTYPE html>
<html>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
<meta charset="utf-8">
<title>Geocoding service</title>
<body>



<form action="include/insert.php" method="post">
Location Name: <input type="text" name="placeNameForm">
Address: <input type="text" name="addressNameForm">
<input type="submit">
</form>

<?php
	include 'include/database.php';

$result = mysqli_query($con,"SELECT * FROM locationPlace");
while($row = mysqli_fetch_array($result))
{
	 echo '<ul>';
	 echo '<li>'.$row['placeName'].'</li>';
	 echo '<li>'.$row['addressName'].'</li>';
	 echo '</ul>';
}
?>
</body>
</html>
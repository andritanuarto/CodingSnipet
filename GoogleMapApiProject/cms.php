<!DOCTYPE html>
<html>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
<meta charset="utf-8">
<title>Geocoding service</title>
<body>



<form action="include/insert.php" method="post">
Location Name: <input type="text" name="placeNameForm"></br>
Address: <input type="text" name="addressNameForm"></br>
<input type="submit">
</form>

<?php
	include 'include/database.php';

$result = mysqli_query($con,"SELECT * FROM locationPlace");
while($row = mysqli_fetch_array($result))
{
	 echo '<form action="include/delete.php" method="post">';
	 echo $row['placeName'];
	 echo ' ';
	 echo $row['addressName'];
	 echo ' <a href="include/delete.php?id='.$row['id'].'">delete</a>';
	 echo '</form>';
}
?>
</body>
</html>
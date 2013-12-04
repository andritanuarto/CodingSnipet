<?php
	include 'include/database.php';
	$result = mysqli_query($con,"SELECT * FROM locationPlace");
	while($row = mysqli_fetch_array($result))
	{
		 echo '<li>';
		 echo '<div>';
		 echo '<a class="locationStore" value="'.$row['addressName'].'">';
		 echo '<h3 class="storeName">'.$row['placeName'].'</h3>';
		 echo '<span class="storeAddress">'.$row['addressName'].'</span>';
		 echo '</a>';
		 echo '</div>';
		 echo '</li>';
	}

	mysqli_close($con);
?>
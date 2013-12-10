<?php
include 'database.php';

mysqli_query($con,"DELETE FROM locationPlace WHERE id=".$_GET['id']);
mysqli_close($con);
header("Location: ../cms.php");
?> 
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
<meta charset="utf-8">
<title>Geocoding service</title>
<link type="text/css" rel="stylesheet" charset="UTF-8" href="css/map.css">

</head>
<body>
	<div id="frameContent">
		<ul class="location" id="menu">
		<?php include 'include/select-address.php';?>
		</ul>
	</div>
	<div id="mapContent">
		<div id="panel">
	      <input id="address" type="textbox" value="Type City or Country">
	      <input type="button" value="Geocode" onclick="codeAddress()">
    	</div>
		<div id="map-canvas"></div>
	</div>
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyD5u7v5mlHIxkDMPUSUIJ7i1gJ0tgAlVf4&sensor=false">
</script>
<script src="js/map.js"></script>
<script type=​"text/​javascript" src=​"js/jquery.js">​</script>​
</body>
</html>
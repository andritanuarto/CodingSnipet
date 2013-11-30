
var geocoder;
var map;

// Initialize Map as first view
function initialize() {
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 8,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

//initialize map
google.maps.event.addDomListener(window, 'load', initialize);

function codeAddress() {
  geocoder = new google.maps.Geocoder(); //create new geocoder object

  var address = document.getElementById('address').value; //get address from value
  console.log(address);
  geocoder.geocode(
      {'address': address}, 
      function(results, status) {
        console.log(results);
        console.log(status);
        if (status == google.maps.GeocoderStatus.OK) { //check if the address is valid
          map.setCenter(results[0].geometry.location); //set map center
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      }
  );
}

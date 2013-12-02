
var geocoder;
var map;
var latlng = new google.maps.LatLng(-34.397, 150.644);

// Initialize Map as first view
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

//initialize map
google.maps.event.addDomListener(window, 'load', initialize);

var addresses = document.getElementsByClassName("locationStore");

for(var i = 0; i < addresses.length; i++){
  addresses[i].onclick = function(){
    geocoder = new google.maps.Geocoder(); //create new geocoder object

    var address = this.getAttribute("value"); //get address from value
  
    geocoder.geocode(
        {'address': address}, 
        function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) { //check if the address is valid
            map.setCenter(results[0].geometry.location); //set map center
            map.setZoom(15);
            
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
            });

          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        }
    );
  }
}
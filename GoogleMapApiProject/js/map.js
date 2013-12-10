var geocoder;
var map;
var latlng = new google.maps.LatLng(0, 0);

// Initialize Map as first view
function initialize() {
  var mapOptions = {
    zoom: 2,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

//initialize map
google.maps.event.addDomListener(window, 'load', initialize);

var addresses = document.getElementsByClassName("locationStore");



function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
    } else {
      console.log('Geocode was not successful for the following reason: ' + status);
    }
  });
  map.setZoom(12);
}

for(var i = 0; i < addresses.length; i++){
  geocoder = new google.maps.Geocoder(); //create new geocoder object
  addresses[i].onclick = function(){
    geocoder.geocode(
        {'address': this.getAttribute("value")}, 
        function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) { //check if the address is valid
            map.setCenter(results[0].geometry.location); //set map center
            map.setZoom(17);
          } else {
            console.log('Geocode was not successful for the following reason: ' + status);
          }
        }
    );
  }
}

var infowindow = new google.maps.InfoWindow({
      content: null,
      maxWidth: 300,
      minHeight: 100
});

var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>London Eye</h3>' +
        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>Palace of Westminster</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>']
];


for(var i = 0; i < addresses.length; i++){
  for(var y = 0; y <infoWindowContent.length; y++){
  geocoder.geocode(
    {
      'address': addresses[i].getAttribute("value")

    }
      , function(results, status) {
          var markers = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
          });

          google.maps.event.addListener(markers,'click', function(){
            map.setCenter(markers.getPosition()); 
            infowindow.setContent(results[0].formatted_address + "<br> (lat, lng): " + results[0].geometry.location);
            console.log(results[0].formatted_address + "<br> lat lng:" + results[0].geometry.location);
            infowindow.open(map,markers);
            map.setZoom(18);
          });       
      }
  );
  }
}



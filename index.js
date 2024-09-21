
var map = L.map('map', {keepBuffer:2}).setView([9.0820, 8.6753], 6);
var osm =L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 12,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});osm.addTo(map);

var marker = L.marker([8.4799, 4.5418],9).addTo(map);
// var marker2 = L.markerClusterGroup();
// marker2.addlayer(L.marker([7.16, 3.35]), L.marker([8.4799, 4.5418]));
// map.addlayer(marker2);


var polygon = L.polygon([
  [6.5244, 3.3792],
  [7.621, 5.32],
  [6.3382, 5.6257],
]).addTo(map);

//circle
var circle = L.circle([9.3152, 9.8420], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 50000,
}).addTo(map);
var circle = L.circle([6.3382, 5.6257], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 50000,
}).addTo(map);

// popups alart
marker.bindPopup("<b>Hello world!</b><br>High vulnurebility spot.").openPopup();
circle.bindPopup("vulnurable spot.").openPopup();
polygon.bindPopup("low vuln.").openPopup();

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);

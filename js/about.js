function initMap() {
  const location = { lat: 13.6288, lng: 79.4192 }; // Sri Venkateswara University coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });
  new google.maps.Marker({
    position: location,
    map: map,
  });
}

window.onload = function () {
  initMap();
};

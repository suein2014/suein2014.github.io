
function show_map_div(){
        // Create a leaflet map object.
//        var map = L.map('map').setView([37.7749, -122.4194], 13);
        var map = L.map('map').setView([37.7749, -122.4194], 13);
        map.invalidateSize();

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 18
        }).addTo(map);

        // when change to the tab: location-page
        $('a[data-tab="location-page"]').on('click', function() {
          // get the current position for user
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
              // set it as map center
              map.setView([position.coords.latitude, position.coords.longitude], 13);

              // show position data in the tab title.
              $('a[data-tab="location-page"]').text('Location (' + map.getCenter().toString() + ')');

//               $('a[data-tab="location-page"]').on('shown.bs.tab', function() {
//  map.invalidateSize();
//});
              // add a marker, mark user's position
              var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
              marker.bindPopup("You are here!").openPopup();
            });
          } else {
            alert("Geolocation is not supported by your browser.");
          }
        });


//        var locationpage = document.getElementById("location-page");
//
////        document.getElementById("map").addEventListener("click", function () {
//          locationpage.style.display = "block";
//            map.invalidateSize(); // Uncomment this line and re-run to get correct behaviour.
////            map2.fitBounds([[50.5, 5], [52.5, 6]]);
////        });

//        document.getElementById("hidelocation").addEventListener("click", function () {
//            locationpage.style.display = "none";
//        });

    }




function show_map_mobile(){
        var mobile_map = L.map('m-map').setView([37.7749, -122.4194], 13);
        mobile_map.invalidateSize();


        // add a map layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 18
        }).addTo(mobile_map);

        // when change to the tab: location-page
        $('a[data-tab="location-page"]').on('click', function() {
          // get the current position for user
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
              // set it as map center
              mobile_map.setView([position.coords.latitude, position.coords.longitude], 13);

              // show position data in the tab title.
              $('a[data-tab="location-page"]').text('Location (' + mobile_map.getCenter().toString() + ')');
              var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mobile_map);
              marker.bindPopup("You are here!").openPopup();
            });
          } else {
            alert("Geolocation is not supported by your browser.");
          }
        });

}





function show_map_canvas(){

    // Create the map on the canvas element
    var map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -2,
      maxZoom: 2
    });

    // Create a tile layer with OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker at the center of the map
    var marker = L.marker([0, 0]).addTo(map);

    // Update the marker position when the map is moved
    map.on('move', function(e) {
      var center = map.getCenter();
      marker.setLatLng(center);
    });

}




$(document).ready(function(){

    $('.ui.menu .item').tab();

     $('.ui.accordion').accordion();

    $('.ui.sidebar').sidebar({
      context: $('.bottom.attached.segment')
    }).sidebar('attach events', '.sidebar.item');


    //click button of toy1 in homepage  ---> then jump(change) to toy3 products-tab ---> and open this accordion of toy1
    $("#jump-to-toy1, #m-jump-to-toy1").each(function(){
        $(this).on('click',function(){
            $(".menu .item[data-tab='products-page'").tab('change tab', 'products-page')
            $('#toy1-accordion, #m-toy1-accordion').accordion('open', 0)
        });
    });

    // jump to toy2
    $("#jump-to-toy2, #m-jump-to-toy2").each(function(){
        $(this).on('click',function(){
            $(".menu .item[data-tab='products-page'").tab('change tab', 'products-page')
            $('#toy2-accordion, #m-toy2-accordion').accordion('open', 0)
        });
    });


    //jump to toy3
    $("#jump-to-toy3, #m-jump-to-toy3").each(function(){
        $(this).on('click',function(){
            $(".menu .item[data-tab='products-page'").tab('change tab', 'products-page')
            $('#toy3-accordion, #m-toy3-accordion').accordion('open', 0)
        });
    });


    //click buy button, change to products tab without any accordion open.
    $("#buy-now, #m-buy-now").each(function(){
        $(this).on('click',function(){
            $(".menu .item[data-tab='products-page'").tab('change tab', 'products-page')
        });
    });

//    show_map_canvas();
    show_map_div();
    show_map_mobile();

});




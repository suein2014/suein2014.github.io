
  // main function
    $(function(){
        setTimeout(function() { //fix the issue of map not filling the container
             show_map();
         }, 100);


    });


    //function to show the map
    function show_map(){
        var map = L.map('mapid').setView([37.7749, -122.4194], 13);
        map.invalidateSize();
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(map);

        $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        // 如果当前页签是“Home”页签
        if ($(e.target).attr('aria-controls') == 'location') {
          // get the current position for user
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
              // set it as map center
              map.setView([position.coords.latitude, position.coords.longitude], 13);
              map.invalidateSize();
              $('#mapid').prev('h2').text('Location - ' + map.getCenter().toString());
              // add a marker, mark user's position
              var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
              marker.bindPopup("You are here!").openPopup();
            });
            //IMPORTANT: update the layout when container size changed
          } else {
            alert("Geolocation is not supported by your browser.");
          };
        };
        });
    }

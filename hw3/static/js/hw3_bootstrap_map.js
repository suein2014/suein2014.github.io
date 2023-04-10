     // main function
    $(function(){
        show_map();


    });


    //function to show the map
    function show_map(){
        var map = L.map('mapid').setView([37.7749, -122.4194], 13);


        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(map);

        // when change to the tab: location-page
        $('a[data-tab="location-page"]').on('click', function() {




     // 绑定点击事件，初始化地图并显示
//      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//        if (e.target.hash === './location.html') {


          // get the current position for user
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
              // set it as map center
              map.setView([position.coords.latitude, position.coords.longitude], 13);

              // show position data in the title.
//              $('a[data-tab="location-page"]').text('Location (' + map.getCenter().toString() + ')');
//              $('#mapid').prev('h2').text('Location Page - ' + map.getCenter().toString());

              // add a marker, mark user's position
              var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);


              marker.bindPopup("You are here!").openPopup();
            });
            //IMPORTANT: update the layout when container size changed
            map.invalidateSize();  //for refresh
          } else {
            alert("Geolocation is not supported by your browser.");
          }
//        };
//      });
        });
    }

function show_map_div(id_name){
        var map = L.map(id_name).setView([37.7749, -122.4194], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 18,
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

              // add a marker, mark user's position
              var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);

              marker.bindPopup("You are here!").openPopup();
            });
            //IMPORTANT: update the layout when container size changed
            map.invalidateSize();
          } else {
            alert("Geolocation is not supported by your browser.");
          }
        });
    }



//
//function show_map_mobile(){
//        var mobile_map = L.map('map_mobile').setView([37.7749, -122.4194], 13);
//
//        // add a map layer
//        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//          attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
//          maxZoom: 18
//        }).addTo(mobile_map);
//
//        // when change to the tab: location-page
//        $('a[data-tab="location-page"]').on('click', function() {
//          // get the current position for user
//          if ("geolocation" in navigator) {
//            navigator.geolocation.getCurrentPosition(function(position) {
//              // set it as map center
//              mobile_map.setView([position.coords.latitude, position.coords.longitude], 13);
//
//              // show position data in the tab title.
//              $('a[data-tab="location-page"]').text('Location (' + mobile_map.getCenter().toString() + ')');
//              var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mobile_map);
//              marker.bindPopup("You are here!").openPopup();
//            });
//            //IMPORTANT: update the layout when container size changed
//            mobile_map.invalidateSize();
//          } else {
//            alert("Geolocation is not supported by your browser.");
//          }
//        });
//
//}




function others(){
    $('.ui.menu .item').tab();
    $('.ui.accordion').accordion();

    $('.ui.sidebar').sidebar({
      context: $('.bottom.attached.segment')
    }).sidebar('attach events', '.sidebar.item');

    // Initialize the modal
    $('.ui.modal').modal();

    // Show the modal when the trigger is clicked
    $("#toy1-modal-trigger, #toy2-modal-trigger,#toy3-modal-trigger,#toy4-modal-trigger").each(function(){
        $(this).on('click',function(){
            modal_i = $(this).attr('id').replace('-trigger','')
            $('.ui.modal').modal();
            $("#"+modal_i).modal('show');
        });
    })

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
}



var loadPartial = async function(name) {
  var html = await $.ajax({url:'partials/' + name + '.html',type:'GET'});
  Handlebars.registerPartial(name, html);
};


$(function(){
    loadPartial('nav_data').then(function() {
        var source = $('.nav_data_tpl').html();
        var template = Handlebars.compile(source);
        var data = {};
        var html = template(data);
        $('#m_nav_container').html(html);
        $('#nav_container').html(html);
        others();
    });

//    if (navigator.userAgentData.mobile){
        loadPartial('mobile_content_2nd_version').then(function() {
            var source1 = $('.m_content_tpl').html();
            var template1 = Handlebars.compile(source1);

            var data = {};
            var html = template1(data);
            $('#m_content_container').html(html);

            others();
            show_map_div('map_mobile');
        });
//    }else{
        loadPartial('content_2nd_version').then(function() {
            var source = $('.content_tpl').html();
            var template = Handlebars.compile(source);
            var data = {};
            var html = template(data);
            $('#content_container').html(html);
            others();
            show_map_div('map_computer');
        });
//    };

});




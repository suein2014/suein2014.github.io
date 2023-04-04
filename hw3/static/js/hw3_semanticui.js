
function show_map(id_name){
        var map = L.map(id_name).setView([37.7749, -122.4194], 13);
        map.invalidateSize();

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(map);

        // when change to the tab: location-page
        $('a[data-tab="location-page"]').on('click', function() {
            map.invalidateSize(); //for mobile side  refresh
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
            map.invalidateSize();  //for computer side refresh
          } else {
            alert("Geolocation is not supported by your browser.");
          }
        });
    }


function jummp_to_toytab(){
    var toy_array = ["#jump-to-toy1", "#jump-to-toy2", "#jump-to-toy3"];
    $.each(toy_array, function(index, toy_id){
        var accordion_id = '#toy' + toy_id.slice(-1) + '-accordion' ;
        $(toy_id).on('click',function(){
            $(".menu .item[data-tab='products-page'").tab('change tab', 'products-page')
            $(accordion_id).accordion('open', 0)
        });
    });
};

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
    jummp_to_toytab();


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



async function renderContent() {
    await loadPartial('mobile_content');
    var source1 = $('.m_content_tpl').html();
    var template1 = Handlebars.compile(source1);

    var data = {};
    var html = template1(data);
    $('#m_content_container').html(html);
    others();
    show_map('map_mobile');

    await loadPartial('content');
    var source = $('.content_tpl').html();
    var template = Handlebars.compile(source);
    var data = {};
    var html = template(data);
    $('#content_container').html(html);
    others();
    show_map('map_computer');
}



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


//    Promise.all([
//        loadPartial('mobile_content'),
//        loadPartial('content'),
//    ]).then(function() {
//        var mobileSource = $('.m_content_tpl').html();
//        var mobileTemplate = Handlebars.compile(mobileSource);
//        var mobileData = {};
//        var mobileHtml = mobileTemplate(mobileData);
//        $('#m_content_container').html(mobileHtml);
//        show_map('map_mobile');
//
//        var source = $('.content_tpl').html();
//        var template = Handlebars.compile(source);
//        var data = {};
//        var html = template(data);
//        $('#content_container').html(html);
//        show_map('map_computer');
//    });






//    renderContent();









    $('#map_computer, #map_mobile').show();

    loadPartial('content').then(function() {

        var source = $('.content_tpl').html();
        var template = Handlebars.compile(source);
        var data = {};
        var html = template(data);
        $('#content_container').html(html);
        others();
        
        setTimeout(function() { //fix the issue of map not filling the container
         show_map('map_computer');
     }, 100);
    });


    loadPartial('mobile_content').then(function() {
        var source1 = $('.m_content_tpl').html();
        var template1 = Handlebars.compile(source1);

        var data = {};
        var html = template1(data);
        $('#m_content_container').html(html);
        others();
        show_map('map_mobile');
    });







});





var loadPartial = async function(name) {
  var html = await $.ajax({url:'partials/' + name + '.html',type:'GET'});
  //console.log(html);
  Handlebars.registerPartial(name, html);
}

$(document).ready(function(){



    loadPartial('nav_data').then(function() {
        var source = $('.nav_data_tpl').html();
        var template = Handlebars.compile(source);
        var data={}
        var html = template(data);
        $('#nav_container').html(html);
        $('.ui.menu .item').tab();

    });

    loadPartial('content').then(function() {
        var source = $('.content_tpl').html();
        var template = Handlebars.compile(source);
        var data={}
        var html = template(data);
        $('#content_container').html(html);
        $('.ui.menu .item').tab();

    });





    //$('.ui.accordion').accordion();

});




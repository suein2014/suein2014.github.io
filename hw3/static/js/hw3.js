$(document).ready(function(){
    $('.ui.menu .item').tab();

     $('.ui.accordion').accordion();

    $('.ui.sidebar').sidebar({
      context: $('.bottom.attached.segment')
    }).sidebar('attach events', '.sidebar.item');
})
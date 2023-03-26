$(document).ready(function(){
    $('.ui.menu .item').tab();



    $('.ui.sidebar').sidebar({
      context: $('.bottom.attached.segment')
    }).sidebar('attach events', '.sidebar.item');
})
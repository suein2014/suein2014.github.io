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




});
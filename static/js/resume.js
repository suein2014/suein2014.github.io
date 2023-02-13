$(document).ready(function(){

    var $header_btn = $("header h1"),
    delaytime = 500,
    original_btn_styles= $header_btn.css(['color','font-size']);

    $("button").on('click',function(){
        $header_btn.css({'color':'red'});
        $header_btn.animate({fontSize: '2em'});

        $('figure img').css({'border':'0px solid white'}).animate({borderWidth:"2px"});

        setTimeout(function(){
            $.each(original_btn_styles, function(key, value){
               $header_btn.css( key,value )
            })
        }, delaytime);
  });



});
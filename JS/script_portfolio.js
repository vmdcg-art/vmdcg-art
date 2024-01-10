//AMPLIACIÓN DE LA GALERÍA
$(function(){
    "use strict";
    $("#modal").hide();
    
    $(".art").click(function(){
        $('body').css('overflow', 'hidden');
        $("#modal").fadeIn(500); 
        
        var ruta = $(this).children("img").attr("src");
        $("#modal").find("img").attr("src", ruta);
        
        var pie = $(this).children("figcaption").text();
        $("#modal > figure > figcaption").text(pie);  
    });
    $("#modal").click(function(){
        $("#modal").fadeOut(250);
        $('body').css('overflow', '');
    });
    $("#modal > .art").click(function(e){
        e.stopPropagation();
    });
    
    
    $("#cerrar").click(function(){
        $("#modal").fadeOut(250);
    });
});

/*----------------------------------------------------------------*/


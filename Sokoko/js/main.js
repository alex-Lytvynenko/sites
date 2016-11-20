$(document).ready(function($){



    $("#carousel").owlCarousel({

        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        pagination: true,
        autoHeight: true
    });

    var $container = $('#container');
    $container.masonry({
        columnWidth: 1,
        itemSelector: '.ping',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false}
    });

    $("#clients-carousel").owlCarousel( {
        singleItem: false,
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        pagination: false,
        autoHeight: true,
        loop:true
    });
    $(document).on('click', ".clients-left", function(){
        var carusel = $(this).parents('#clients');
        left_carusel(carusel);
        return false;
    });
    $(document).on('click', ".clients-right", function() {
        var carusel = $(this).parents('#clients');
        right_carusel(carusel);
        return false;
    });
    function left_carusel(carusel){
        var block_width = $(carusel).find('.carousel-item').outerWidth();
        $(carusel).find(".carousel-clients-items .carousel-item").eq(-1).clone().prependTo($(carusel).find(".carousel-clients-items"));
        $(carusel).find(".carousel-clients-items").css({"left":"-"+block_width+"px"});
        $(carusel).find(".carousel-clients-items .carousel-item").eq(-1).remove();
        $(carusel).find(".carousel-clients-items").animate({left: "0px"}, 200);
    };
    function right_carusel(carusel){
        var block_width = $(carusel).find('.carousel-item').outerWidth();
        $(carusel).find('.carousel-clients-items').animate({left: "-" +block_width +"px"}, 200, function(){
           $(carusel).find(".carousel-clients-items .carousel-item").eq(0).clone().appendTo($(carusel).find(".carousel-clients-items"));
            $(carusel).find(".carousel-clients-items .carousel-item").eq(0).remove();
            $(carusel).find(".carousel-clients-items").css({"left":"0px"});
        });
    }
});
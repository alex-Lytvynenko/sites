$(document).ready(function(){
    var touch 	= $('.sandwich-icon');
    var menu 	= $('.mob-menu');

    $(touch).click(function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(touch).click(
        function(){$(this).toggleClass('active')}
    );
    $(window).on("resize", function(){
        if ($(window).width() > 720) {
            $(".mob-menu").removeAttribute("style")
        }


    })
});


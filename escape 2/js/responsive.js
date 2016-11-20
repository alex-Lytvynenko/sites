$(document).ready(function(){
    var touch 	= $('#touch-menu');
    var menu 	= $('nav');

    $(touch).click(function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(touch).click(
        function(){$(this).toggleClass('active')}
    );
});


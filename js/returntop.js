var speed = 750;
var fade = 500;
        
$(document).ready(function(){        
    $(window).bind('scroll', function(){
        if ($(this).scrollTop() > 150) {
            $('.rtt').fadeIn(fade);
        } else {
            $('.rtt').fadeOut(fade);
        }
    });
});

$(function () {
    $('body').on("click", ".rtt", function (e) {
        
        e.preventDefault();
        
        $('body,html').animate({
            scrollTop: 0
        }, speed);
    });
});
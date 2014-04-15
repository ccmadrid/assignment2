var speed = 800;
$(function () {
    $('body').on("click", ".rtt", function (e) {
        
        e.preventDefault();
        
        $('body,html').animate({
            scrollTop: 0
        }, speed);
    });
});
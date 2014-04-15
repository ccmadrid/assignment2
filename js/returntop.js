$(function () {
    $('body').on("click", ".rtt", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});
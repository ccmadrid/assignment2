var gotop = document.querySelector('.button');

// Wait for the user to click on the nav button
 gotop.addEventListener('click', function (e) {
  // Javascript passes an event object for event listeners
  // It's being captured in the `e` argument above

  // Since .nav-btn is a link, by default it navigate somewhere
  // `e.preventDefault()` will stop the link from doing what it normally does
  e.preventDefault();

  // Will toggle @data-state on .nav-top and .nav-btn
  // @data-state is being used in CSS to style what the nav elements will look like

document.ready(function() {
    /*window.scroll(function () {
       if (this.scrollTop() > 200) {
           gotop.fadeIn(200);
       }else{
           gotop.fadeOut(200);
       }
    });
    */
    gotop.click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0},300);
    })
});
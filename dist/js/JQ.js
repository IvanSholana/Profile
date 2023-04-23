$(window).scroll(function() {
    var position = $('header').offset().top;
    if (window.pageYOffset > position) {
        $("header").addClass("navbar-fixed");
    } else {
        $("header").removeClass("navbar-fixed");
    }
});

  

$("#hamburger").click(function() { 
    $(this).toggleClass("hamburger-active");
});

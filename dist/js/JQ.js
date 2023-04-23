$(window).scroll(function() {
    var position = 0;
    if (window.pageYOffset > position) {
        $("header").addClass("navbar-fixed");
        console.log("add : " + window.pageYOffset + "position : " + position);
    } else {
        $("header").removeClass("navbar-fixed");
        console.log("remove : " + window.pageYOffset + "position : " + position);
    }
});

  

$("#hamburger").click(function() { 
    $(this).toggleClass("hamburger-active");
});

$(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        center: true,
        singleItem: true,
        autoplay: true,
        loop: true,
        autoplayTimeout: 5500,
        smartSpeed: 1000,
        nav: true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]

    });
});
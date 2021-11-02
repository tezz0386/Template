 $('.mainbanner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.new-products').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})

$('.sale-products').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})


var Dropdowns = function() {
    var t = $(".dropup, .dropright, .dropdown, .dropleft")
      , e = $(".dropdown-menu")
      , r = $(".dropdown-menu .dropdown-menu");
    $(".dropdown-menu .dropdown-toggle").on("click", function() {
        var a;
        return (a = $(this)).closest(t).siblings(t).find(e).removeClass("show"),
        a.next(r).toggleClass("show"),
        !1
    }),
    t.on("hide.bs.dropdown", function() {
        var a, t;
        a = $(this),
        (t = a.find(r)).length && t.removeClass("show")
    })
}()


// $(document).ready(function(){
//     $(window).scroll(function(){

//         var positiontop = $(document).scrollTop();
//         console.log(positiontop);

//         if((positiontop > 800) && (positiontop < 900)){

//             $('.main-nav').addClass('margin: 0px;');
//         }
//     });
// });
$(document).ready(function(){
    $(window).scroll(function(){

        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if((positiontop > 0) && (positiontop < 100)){

            $('#logo-hide').css({"display": "none"});
            $('#logo-hide').css({"display": "none"});
            $('#logo-hide').addClass('animate__animated animate__backInLeft animate__delay-0.1s');
        }
    });
});
$(document).ready(function(){
    $(window).scroll(function(){

        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if((positiontop > 100) && (positiontop < 10000)){

            $('#logo-hide').css({"display": "block"});
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){

        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if((positiontop > 400) && (positiontop < 1600)){

            $('#new').addClass('animate__animated animate__backInLeft animate__delay-0.1s');
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){

        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if((positiontop > 1800) && (positiontop < 3100)){

            $('#top').addClass('animate__animated animate__backInRight animate__delay-0.1s');
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){

        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if((positiontop > 3200) && (positiontop < 4500)){

            $('#all').addClass('animate__animated animate__backInUp animate__delay-0.1s');
        }
    });
});

// $(document).ready(function(){
//     $(window).scroll(function(){

//         var positiontop = $(document).scrollTop();
//         console.log(positiontop);

//         if((positiontop > 4600) && (positiontop < 4700)){

//             $('#news').addClass('animate__animated animate__backInUp animate__delay-0.1s');
//             $('#email-sb').addClass('animate__animated animate__backInLeft animate__delay-0.1s');
//             $('#btn-sub').addClass('animate__animated animate__backInRight animate__delay-0.1s');
//         }
//     });
// });



(function($) {
    "use strict";

    var $navbar = $("#navbar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed").clearQueue().animate({
                top: "-48px"
            }, 0);
        }
    });

})(jQuery, undefined);
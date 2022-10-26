$(document).ready(function () {
    var clk = 0;
    $(".goTop").fadeOut();
    $('.toggle').click(function () {
        clk += 1
        $('.menu-bar').toggleClass("active");
        if (clk % 2 == 0) {
            $('.toggle').addClass("fa-bars");
            $(".toggle").removeClass("fa-window-close");
        }
        else {
            $('.toggle').addClass("fa-window-close");
            $(".toggle").removeClass("fa-bars");

        }
    });


    $(window).scroll(function () {
        if (this.scrollY > 60) {
            $(".menu-wrap").addClass("sticky");
            $(".nav-toggle").addClass("sticky");

            $(".goTop").fadeIn();
        }
        else {
            $(".menu-wrap").removeClass("sticky");
            $(".nav-toggle").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    });


    $(window).scroll(function () {
        if (this.scrollY > 100) {
            $(".nav-toggle").addClass("sticky");
            $(".menu-bar").addClass("sticky2");

        }
        else {
            $(".nav-toggle").removeClass("sticky");
            $(".menu-bar").removeClass("sticky2");
        }
    });

    $(".goTop").click(function () { scroll(0, 0) });


    $(".image-slides").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }); +
        (function () {
            window.onload = function () {
                var preloader = document.querySelector('.cs-page-loading');
                preloader.classList.remove('active');
                setTimeout(function () {
                    preloader.remove();
                }, 2000);
            };
        })();
    $(".image-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});





/* ===================================================================
    Author          : Modina Theme
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).ready( function() {

        new WOW().init();    

        //>> Scroll Up Start <<//
        $("#scrollUp").on("click", function () {
            setTimeout(function () {
                $("html, body").animate({ scrollTop: "-=1000000px" }, "slow");
            }, 1000);
        });

        //>> Banner Animation <<//
        let sliderActive2 = ".banner__slider";
        let sliderInit2 = new Swiper(sliderActive2, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 3000,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".arry__prev",
                prevEl: ".arry__next",
            },
            pagination: {
                el: ".banner-pagination",
                clickable: true,
            },
        });
        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive2 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive2, sliderInit2);

        //>> Banner Three Slider Start <<//
        let sliderActive1 = ".banner-slider";
        let sliderInit1 = new Swiper(sliderActive1, {
            loop: true,
            slidesPerView: 1,
            speed: 2000,
            effect: "fade",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".banner-two__dot",
                clickable: true,
            },
        });
        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive1 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive1, sliderInit1);

        const banner_two_slider = new Swiper(".banner-two__slider", {
            loop: "true",
            effect: "fade",
            speed: 2000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".banner-two__dot",
                clickable: true,
            },
        });

        //>> Menu Fixed Components <<//
        let fixed_top = $(".header-section");
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 20) {
                fixed_top.addClass("menu-fixed animated fadeInDown");
                fixed_top.removeClass("slideInUp");
                $("body").addClass("body-padding");
            } else {
                fixed_top.removeClass("menu-fixed fadeInDown");
                fixed_top.addClass("slideInUp");
                $("body").removeClass("body-padding");
            }
        });
        //>> Menu Fixed Components <<//

        //>> Main Menu <<//
        $(".header-bar").on("click", function (e) {
            $(".main-menu, .header-bar").toggleClass("active");
        });
        $(".main-menu li a").on("click", function (e) {
            //e.preventDefault();
            let element = $(this).parent("li");
            if (element.hasClass("open")) {
                element.removeClass("open");
                element.find("li").removeClass("open");
                element.find("ul").slideUp(600);
            } else {
                element.siblings("li").removeClass("open");
                element.siblings("li").find("li").removeClass("open");
                element.addClass("open");
                element.find("ul").slideDown(600);
                element.siblings("li").find("ul").slideUp(600);
                element.siblings("li").find("ul").slideUp(600);
            }
        });
        $(".scrollToTop").on("click", function () {
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                700
            );
            return false;
        });

        //>> Sidebar Area Start <<//
        $(document).on("click", ".share-btn", function() {
            let target = $(this).data("target");
            $("#" + target).toggle();
        });
        $(document).on("click", "#openButton", function() {
            $("#targetElement").removeClass("side_bar_hidden");
        });
        $(document).on("click", "#closeButton", function() {
            $("#targetElement").addClass("side_bar_hidden");
        });

        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });
        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {
            }
        });
        
        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 20,
            time: 3000,
        });
        //>> Nice Select Start <<//
        $('select').niceSelect();

        //>> Data Background Start <<//
        $("[data-background").each(function () {
            $(this).css(
                "background-image",
                "url( " + $(this).attr("data-background") + "  )"
            );
        });

        //>> Project Slider Start <<//
        const project__wrapper = new Swiper(".project__wrapper", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                992: {
                    slidesPerView: 2,
                },
            },
        });

        //>> Testimonial Slider Start <<//
        const testimonial__image__items = new Swiper(".testimonial__image__items", {
            loop: true,
            spaceBetween: 10,
            autoplay: true,
            slidesPerView: 3,
            freeMode: true,
            speed: 1000,
            direction: "vertical",
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".arry__prev",
                prevEl: ".arry__next",
            },
            pagination: {
                el: ".testi__dot",
                clickable: true,
            },
        });

        const testimonial__content__wrapper = new Swiper(".testimonial__content__wrapper", {
            loop: "true",
            grabCursor: true,
            speed: 1000,
            autoplay: true,
            slidesPerView: 1,
            direction: "vertical",
            navigation: {
                nextEl: ".arry__prev",
                prevEl: ".arry__next",
            },
            pagination: {
                el: ".testi__dot",
                clickable: true,
            },
            thumbs: {
                swiper: testimonial__image__items,
            },
        });

        const testimonial__wrapper__two = new Swiper(".testimonial__wrapper__two", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                992: {
                    slidesPerView: 1,
                },
                1199: {
                    slidesPerView: 1,
                },
            },
        });

        const single__testimonial__wrapper__three = new Swiper(".single__testimonial__wrapper__three", {
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
        });

        //>> Feature Slider Start <<//
        const feature__single__wrapper = new Swiper(".feature__single__wrapper",{
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                992: {
                    slidesPerView: 1,
                },
                1199: {
                    slidesPerView: 2,
                },
                1499: {
                    slidesPerView: 3,
                },
            },
        });

        //>> Brand Slider Start <<//
        const brand__wrapper = new Swiper(".brand__wrapper",{
            spaceBetween: 50,
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            speed: 1000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1199: {
                    slidesPerView: 5,
                },
            },
        });

        //>> Brand Slider Start <<//
        const single__project__wrapper__three = new Swiper(".single__project__wrapper__three",{
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            speed: 2000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                767: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
        });

        //>> History Slider Start <<//
        const history__wrapper = new Swiper(".history__wrapper",{
            spaceBetween: 150,
            speed: 1000,
            loop: "true",
            centeredSlides: true,
            slidesPerView: 5,
            speed: 1000,
            autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
            navigation: {
                nextEl: ".arry__prev",
                prevEl: ".arry__next",
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 2,
                },
                1499: {
                    slidesPerView: 5,
                },
            },
        });

        //>> Mouse Cursor Start <<//
        function mousecursor() {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function(s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "a, .cursor-pointer", function() {
                        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                            t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
        $(function() {
            mousecursor();
        });

        //>> Search Popup Start <<//
        const $searchWrap = $(".search-wrap");
        const $navSearch = $(".nav-search");
        const $searchClose = $("#search-close");

        $(".search-trigger").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).addClass("open");
        });

        $(".search-close").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).removeClass("open");
        });

        function closeSearch() {
            $searchWrap.fadeOut(200);
            $navSearch.add($searchClose).removeClass("open");
        }

        $(document.body).on("click", function (e) {
            closeSearch();
        });

        $(".search-trigger, .main-search-input").on("click", function (e) {
            e.stopPropagation();
        });

        //>> Price Range Start <<//
        if ($(".get-insurance__progress-range").length) {
            $(".get-insurance__progress-range").each(function() {
                let balanceTag = $(this).find(".get-insurance__balance span");
                let balanceInput = $(this).find(".get-insurance__balance__input");
                $(this).find(".balance-range-slider").ionRangeSlider({
                    onStart: function(data) {
                        balanceTag.html(data.from);
                        balanceInput.prop("value", data.from);
                    },
                    onChange: function(data) {
                        balanceTag.html(data.from);
                        balanceInput.prop("value", data.from);
                    }
                });
            });
        }

        $(".circle-bar").loading();

        // Hover over the elements with the class "service__item"
        $(".feature__items, .service__card__items, .single__feature__items__three, .quality__service__card").hover(
            // Function to run when the mouse enters the element
            function () {
                // Remove the "active" class from all elements
                $(".feature__items, .service__card__items, .single__feature__items__three, .quality__service__card").removeClass("active");
                // Add the "active" class to the currently hovered element
                $(this).addClass("active");
            }
        );
     

    }); // end document ready function

    //>> Progressbar Start <<//
    $.fn.loading = function () {
        let DEFAULTS = {
            backgroundColor: '#b3cef6',
            progressColor: '#4b86db',
            percent: 75,
            duration: 2000
        };	
        
        $(this).each(function () {
            let $target  = $(this);

            let opts = {
            backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
            progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
            percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
            duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
            };
            // console.log(opts);
    
            $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');
    
            $target.find('.background').css('background-color', opts.backgroundColor);
            $target.find('.left').css('background-color', opts.backgroundColor);
            $target.find('.rotate').css('background-color', opts.progressColor);
            $target.find('.right').css('background-color', opts.progressColor);
    
            let $rotate = $target.find('.rotate');
            setTimeout(function () {	
                $rotate.css({
                    'transition': 'transform ' + opts.duration + 'ms linear',
                    'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
                });
            },1);		

            if (opts.percent > 50) {
                let animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
                let animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';  
                $target.find('.right').css({
                    animation: animationRight,
                    opacity: 1
                });
                $target.find('.left').css({
                    animation: animationLeft,
                    opacity: 0
                });
            } 
        });
    }

    //>> Contact Form Start <<//
    $(function () {
        // Get the form.
        const form = $("#contact-form");
        // Get the messages div.
        const formMessages = $(".form-message");
        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            const formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: formData,
            })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass("error");
                    $(formMessages).addClass("success");
                    // Set the message text.
                    $(formMessages).text(response);
                    // Clear the form.
                    $("#form input, #form textarea").val("");
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass("success");
                    $(formMessages).addClass("error");
                    // Set the message text.
                    if (data.responseText !== "") {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text(
                            "Oops! An error occured and your message could not be sent."
                        );
                    }
                });
        });
    });

    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }
    loader();

})(jQuery); // End jQuery




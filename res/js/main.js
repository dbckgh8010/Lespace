$(function() {
    var mySwiper = new Swiper(".swiper", {
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        autoplay: {delay: 3000},
        navigation: {nextEl: '.swiper_next', prevEl: '.swiper_prev'},
        pagination: {el: '.page', type: 'custom', renderCustom: function (swiper, current, total) {
            const currentFormatted = current.toString().padStart(2, '0');
            const totalFormatted = total.toString().padStart(2, '0');
            return  `<span class="current_page">${currentFormatted}</span>
                    <span class="separator"> / </span>
                    <span class="total_page">${totalFormatted}</span>`
        }},
    });
    $(".pause_btn").on("click", function() {
        mySwiper.autoplay.stop();
        $(this).hide();
        $(".play_btn").show();
    });
    $(".play_btn").on("click", function() {
        mySwiper.autoplay.start();
        $(this).hide();
        $(".pause_btn").show();
    });
    $(".play_btn").hide();

    $(".section3 .banner").mouseover(function() {
        $(this).addClass('on');
        $(".section3 .banner").not(this).removeClass('on');
    });
});


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

$(window).on("load", function () {
    gsap.to(".section2 .section2__top", {
        scrollTrigger: {
            trigger: ".section2",
            start: "top top",
            end: "50% top",
            toggleActions: "restart reverse rsstart reverse",
            onEnter: function() {
                $("body").css("overflow", "hidden");
                setTimeout(function() {
                    $("body").css("overflow", "auto");
                }, 2000);
            }
        },
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        duration: 0.1,
    });

    gsap.to(".section2 .section2__top", {
        scrollTrigger: {
            trigger: ".section2",
            start: "35% top",
            toggleActions: "restart reverse restart reverse"
        },
        opacity: 0,
        duration: 0.1,
    })
    
    gsap.to(".section2 .section2__bottom", {
        scrollTrigger: {
            trigger: ".section2",
            start: "50% top",
            end: "100% bottom",
            toggleActions: "restart reverse restart reverse",
        },
        opacity: 1,
        position: "fixed",
        duration: 0.1,
    });
    
    gsap.to(".section2 .text2__bg", {
        scrollTrigger: {
            trigger: ".section2",
            start: "50% top",
            end: "100% bottom",
            toggleActions: "restart reverse restart reverse",
        },
        opacity: 0.5,
    })
    
    gsap.to(".section3 .banner__info", {
        scrollTrigger: {
            trigger: ".section3",
            start: "-1% bottom",
            end: "bottom bottom",
            scrub: true,
            snap: {
                snapTo: 1,
                delay: 0.1,
                duration: 0.5,
                ease: "power1.inOut",
            },
            onEnter: function() {
                $("body").css("overflow", "hidden");
                setTimeout(function() {
                    $("body").css("overflow", "auto");
                }, 3000);
            }
        }
    })

    $("body").css("overflow", "hidden");
    setTimeout(function() {
        $("body").css("overflow", "auto");
    }, 500);
});

$(function() {
    const banners = $(".section3 .banner");
    const shadow = $(".section3 .banner__shadow");

    banners.on('mouseover', function() {
        banners.addClass("inactive")
        $(this).removeClass("inactive").addClass("active");
        shadow.css("visibility", "visible");
    });
    const wrapper = $(".section3 .banner__info");

    wrapper.on('mouseleave', function() {
        banners.removeClass("inactive active");
        shadow.css("visibility", "hidden")
    });

    const site = $(".footer .footer__site");

    site.on('click', function() {
        $(this).toggleClass("open");
    });
});

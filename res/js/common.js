$(document).ready(function() {
    const $image = $('.section_intro');
    $image.show();
    setTimeout(function() {
        $image.hide();
    }, 3000);

    setTimeout(function() {
        gsap.to(".intro", {
            duration: 3,
            top: "38px",
            width: "146px",
            ease: "power2.out"
        });
    }, 3000);

    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 3000);
});








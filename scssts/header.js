var nav = document.querySelector(".primary-navigation");
var navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

    var visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.primary-header').addClass('sticky');
        } else {
            $('.primary-header').removeClass('sticky');
        }
    })
});
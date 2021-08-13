"use strict";
(function ($) {
  "use strict";
  $(document).ready(function () {
    //  sticky navbar
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $('.navbar_wrapper ').addClass("navbar-fixed");
      } else {
        $('.navbar_wrapper ').removeClass("navbar-fixed");
      }

    });
    $(".bar_line").click(function () {
      $(this).hide();
      $(".times_icon").show();


    });
    $(".times_icon").click(function () {
      $(this).hide();
      $(".bar_line").show();



    });







  });

})(jQuery);
// ScrollToUp
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrolltop");
  scroll.classList.toggle("scroll_active", window.scrollY > 500);


})

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Preloader
function preloader() {
  var pre_number = setInterval(function () {
    var pre_class = parseInt($(".preloader_number").text());
    $(".preloader_number").text((++pre_class).toString());
    if (pre_class == 100) {
      clearInterval(pre_number);
      $(".preloader_number").addClass("pre_hide");
      $(".preloader").addClass("pre_active");

    }
  })
}
preloader();


// AOS On Page Scroll JS
$(function () {
  AOS.init({
    duration: 1100,
    offest: 50,
  });
});
$(window).on('load', function () {
  AOS.refresh();
});











(function($) {
  "use strict";

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  $('.play-popup').magnificPopup({
    type: 'iframe'
  });

  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true
  });

  // setTimeout(function(){
  //   $.magnificPopup.open({
  //         items:{
  //             src: '#start-popup',
  //             type: 'inline'
  //         },
  //         fixedContentPos: true,
  //         fixedBgPos: true,
  //         overflowY: 'auto',
  //         closeBtnInside: true,
  //         preloader: false,
  //         midClick: true,
  //         removalDelay: 300,
  //         mainClass: 'mfp-fade'
  //     });
  // }, 2000);
})(jQuery);

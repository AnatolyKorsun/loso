$(document).ready(function () {
  "use strict";
  $(window).scroll(function () {
    "use strict";
    if ($(window).scrollTop() < 80) {
      $(".navbar").css({
        "margin-top": "-100px",
        opacity: "0",
      });
    } else {
      $(".navbar").css({
        "margin-top": "0px",
        opacity: "1",
      });
    }
  });
});

// Smooth scrolling
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1300, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

  // Active menu item on click
  $(document).ready(function(){
    'use strict'
    $('.navbar-nav li a').click(function(){
    'use strict'
    $('.navbar-nav li a').parent().removeClass("active");
      $(this).parent().addClass("active");
  })
})


// Highlight menu-item on scroll
$(document).ready(function(){
  'use strict';
$(window).scroll(function(){
  'use strict';
  $("section").each(function(){
  'use strict';
    let bb = $(this).attr("id");
    let hei = $(this).outerHeight();
    let grttop = $(this).offset().top -100;

    if( $(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
      $(".navbar-nav li a[href='#" + bb +"']").parent().addClass("active");
    }
    else {
      $(".navbar-nav li a[href='#" + bb +"']").parent().removeClass("active");
    }
  });
});
});

// Add auto padding to header
$(document).ready(function(){
  'use strict';
  setInterval(function(){
    'use strict';
    let windowHeight = $(window).height();
    let containerHeight = $(".header-container").height();
    let padTop = windowHeight - containerHeight;
    
    $(".header-container").css({
      'padding-top': Math.round(padTop / 2) + 'px',
      'padding-bottom': Math.round(padTop / 2) + 'px'
    });
  },10)
});

// Add bxslider to screens
$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 50
  });
});

// Add counter
$(document).ready(function(){
  $('.counter-number').counterUp({
    delay: 10,
    time: 2000
  });  
});

// // Add animation
// $(document).ready(function(){
//   'use strict';
//   // init wow animation
//   new WOW().init();
// });
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
    let hei = $(this).outherHeight()
  })
})
})
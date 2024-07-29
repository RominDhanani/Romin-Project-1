//-------------Preloder-----------
setTimeout(function(){
  $('.its').fadeToggle();
}, 500);

//-------------Back to Top-----------
var btn = $('.button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//---------------Initiate the wowjs
 new WOW().init();

//----------------Counter------------
$('#waypoint').waypoint(function() {
    $('.counter').addClass('timer');
    $('.timer').countTo()
  }, { 
    offset: '100%',
    triggerOnce: false 
  });
 $('.timer').countTo()

 //----------------Owal Carousel------------
$(".owl-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  margin: 25,
  dots: false,
  loop: true,
  nav : true,
  navText : [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>'
  ],
  responsive: {
      0:{
          items:1
      },
      992:{
          items:2
      }
  }
});

//---------------Isotop-----------------
var portfolioIsotope = $('.portfolio-container').isotope({
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows'
});
$('#portfolio-flters li').on('click', function () {
  $("#portfolio-flters li").removeClass('active');
  $(this).addClass('active');

  portfolioIsotope.isotope({filter: $(this).data('filter')});
});
(jQuery);

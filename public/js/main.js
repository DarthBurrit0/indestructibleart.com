
$('.image-popup-vertical-fit').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  mainClass: 'mfp-img-mobile',
  image: {
    verticalFit: true
  }
});

$('.image-popup-fit-width').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  image: {
    verticalFit: false
  }
});

$('.image-popup-no-margins').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  mainClass: 'mfp-no-margins', // class to remove default margin from left and right side
  image: {
    verticalFit: true
  }
});


//---------------Stick Nav to top of page on scroll---------------//
// $(window).scroll(function(e){
//   var navtop = $('.sticky_js').offset().top;
//   var sticky = $('.sticky_js');
//   var holder = $('.stickyHolder_js').offset().top;

//   if ($(this).scrollTop() >= navtop){
//     sticky.addClass('stuck_js');
//   }
//   if (navtop < holder && sticky.hasClass('stuck_js')){
//     sticky.removeClass('stuck_js');
//   }
// });
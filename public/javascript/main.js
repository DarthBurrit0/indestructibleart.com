
//---------------Stick Nav to top of page on scroll---------------//
$(window).scroll(function(e){ 
  var navtop = $('.sticky_js').offset().top;
  var sticky = $('.sticky_js');
  var holder = $('.stickyHolder_js').offset().top;

  if ($(this).scrollTop() >= navtop){ 
    sticky.addClass('stuck_js');
  }
  if (navtop < holder && sticky.hasClass('stuck_js')){
    sticky.removeClass('stuck_js');
  }
});

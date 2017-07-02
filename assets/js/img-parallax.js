$(function(){

  $window.on('scroll', function(){
    if ($window.width() >= 768) {
      $('.js-img-parallax').each(function(){
        if (ws + sh >= ($(this).offset().top - 250)) {
          position = (ws + sh - $(this).offset().top)/10*0.5;
          $(this).css({'background-position': 'center ' + position + 'px'});
        }
      });
    }
  });
});

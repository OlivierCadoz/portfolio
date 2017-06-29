$(function(){

  $window.on('scroll', function(){
    $('.js-img-parallax').each(function(){
      if (ws >= ($(this).offset().top - 250)) {
        position = (ws - $(this).offset().top)/10*1.5;
        $(this).css({'background-position': 'center -' + position + 'px'});
      }
    });
  });
});

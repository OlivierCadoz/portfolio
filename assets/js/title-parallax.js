var $window = $(window),
    scroll,
    px;

$window.on('scroll', function(){
  if ($window.height() >= 640) {
    scroll = $window.scrollTop();
    px = (scroll/1.4);
    $('.js-banner-parallax').css({ 'bottom': px });
  }
});

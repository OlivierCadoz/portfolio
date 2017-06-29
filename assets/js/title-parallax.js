function parallax() {
  ws = $window.scrollTop();
  px = ws + 80;
  if ((ws < sh - 180) && (px < sh - 180)) {
      $('.js-title').css({ 'top': px/2 });
  }
}

$(function(){
  parallax();

  $window.on('scroll', function(){
    parallax();

  });
});

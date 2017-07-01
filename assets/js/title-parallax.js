function parallax() {
  navbar();
  ws = $window.scrollTop();
  px = ws + nbh;
  if ((ws < sh - nbh - 100) && (px < sh - nbh - 100)) {
      $('.js-title').css({ 'top': px/2 });
  }
}

function navbar() {
  if ($window.width() >= 992) {
    nbh = 80;
  } else {
    nbh = 50;
  }
}

$(function(){
  $window.resize(navbar);
  parallax();

  $window.on('scroll', function(){
    parallax();

  });

});

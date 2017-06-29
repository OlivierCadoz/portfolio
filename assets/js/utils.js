function minWidthMd(fc1, fc2) {
  fc2 = fc2 || (function(){});
  if ($window.width() >= 992) {
    fc1();
  } else {
    fc2();
  }
}


function updateOnScroll(){
  ws = $window.scrollTop();
  wh = $window.height();
  wb = ws + wh;
}

$(function(){
  $window.on('scroll', function(){
    updateOnScroll();
  });
});

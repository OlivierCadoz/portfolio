$(function(){
  function footerPos(){
    var fh = $('.js-footer').height() + 80;
    console.log(fh);

    if (fh) {
      $('.js-footer-spacer').height(fh);
    }
  }

  footerPos();

  // $window.on('scroll', footerPos());

  $window.resize(footerPos);
});

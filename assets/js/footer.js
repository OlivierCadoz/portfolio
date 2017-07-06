$(function(){
  function footerPos(){
    var fh = $('.js-footer').outerHeight();
    console.log(fh);

    if (fh) {
      $('.js-footer-spacer').height(fh);
    }
  }

  footerPos();

  // $window.on('scroll', footerPos());

  $window.resize(footerPos);
});

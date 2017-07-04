$(function(){
  function footerPos(){
    var fh = $('.js-footer').height() + 80;
    console.log(fh);

    if (fh) {
      $('.js-footer').css({'top': $('.js-section').height() - fh});
      $('.js-footer-spacer').height(fh);
    }
  }

  footerPos();

  $window.resize(footerPos);
});

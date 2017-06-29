(function ( $ ) {

  $.fn.scrollTo = function() {
    $(this).on('click', function() {
      var $id = '#' + $(this).data('scroll-to'),
          timing = $(this).data('timing') || 1250;

      $($id).velocity('scroll', {
        easing: [0.56, 0, 0.05, 1],
        duration: timing
      });
    });
  };
}(jQuery));

$(function(){
    $('.js-scroll-to').scrollTo();
});

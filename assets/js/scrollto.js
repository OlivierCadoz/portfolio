(function ( $ ) {
    $.fn.scrollTo = function() {

        return this.click(function(e) {
        var target = $(this).data('scroll-to'),
            position = $(target).offset().top,
            // delta = Math.abs(position - wtop)*3/4,
            timing = $(this).data('timing') || 1000;

        e.preventDefault();

        if ($(target).length) {
            $(target).velocity("scroll", { duration: timing, easing: [0.770, 0.000, 0.175, 1.000] });
        }
      });
    };
}( jQuery ));

$(function(){
    $('.js-scroll-to').scrollTo();
});

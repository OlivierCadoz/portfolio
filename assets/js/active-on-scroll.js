(function ( $ ) {
    $.fn.activeOnScroll = function() {

        var items = [];

        $(this).each(function() {

            var $that = $(this),
                offset = ($that.height()*$that.data('offset')) || 50,
                top = $that.offset().top + offset,
                toActv = wb > top ? true : false;

            if (toActv) {
                $that.addClass('active');
            } else {
                items.push({
                    trigger: $that,
                    top : top
                });
            }
        });

        return $(window).on('scroll', function(e) {
            e.preventDefault();
            // wb = ws + wh;
            items.map(function(elem, i){
                if (elem.top <= wb) {
                    elem.trigger.addClass('active');
                    // items.splice(i, 1);
                }
            });
        });
    };
}( jQuery ));

$(function(){
  if ($('.js-active').length) {
    $('.js-active').activeOnScroll();
  }
});

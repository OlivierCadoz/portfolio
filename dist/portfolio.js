var $window = $(window),
    $header = $('.js-header'),
    sh = $('.js-section').height(),
    ws = $window.scrollTop(),
    wh = $window.height(),
    wb = ws + wh,
    ww = $window.width(),
    px = 0;

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

function headerActive(){
  if (ws > 0) {
    $header.addClass('bg-primary');
  } else {
    $header.removeClass('bg-primary');
  }
}
$(function(){
  headerActive();

  $window.on('scroll', function(){
    headerActive();
  });

});

function toggleActive(){
  $('.js-header, .js-burger').toggleClass('active');
}
function removeActive(){
  $('.js-header, .js-burger').removeClass('active');
}

function updateWidth(){
  minWidthMd(removeActive);
}

$(function(){
  $('.js-burger').on('click', function(){
    toggleActive();
  });


  $(window).resize(updateWidth);

});

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

$(function(){

  $window.on('scroll', function(){
    $('.js-img-parallax').each(function(){
      if (ws >= ($(this).offset().top - 250)) {
        position = (ws - $(this).offset().top)/10*1.5;
        $(this).css({'background-position': 'center -' + position + 'px'});
      }
    });
  });
});

$(function(){
  $('.js-slider').slick({
    autoplay: true,
  });
});
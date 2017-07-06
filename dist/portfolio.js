var $window = $(window),
    $header = $('.js-header'),
    sh = $('.js-section').height(),
    ws = $window.scrollTop(),
    wh = $window.height(),
    wb = ws + wh,
    ww = $window.width(),
    px = 0,
    nbh = 0;

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
  $('.js-body').toggleClass('body-fixed');
}
function rmClass(){
  $('.js-header, .js-burger').removeClass('active');
  $('.js-body').removeClass('body-fixed');
}

function updateWidth(){
  minWidthMd(rmClass);
}

$(function(){
  $('.js-burger').on('click', function(){
    toggleActive();
  });

  $('.js-scroll-to').on('click', function(){
    $('.js-header, .js-burger').removeClass('active');
    $('.js-body').removeClass('body-fixed');
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

$(function(){

  $window.on('scroll', function(){
    if ($window.width() >= 768) {
      $('.js-img-parallax').each(function(){
        if (ws + sh >= ($(this).offset().top - 250)) {
          position = (ws + sh - $(this).offset().top)/10*0.5;
          $(this).css({'background-position': 'center ' + position + 'px'});
        }
      });
    }
  });
});

$(function(){
  $('.js-slider').slick({
    autoplay: true,
  });
});

$(function(){
  var evnt = '';

  if ($window.width() >= 768) {
    evnt = 'mouseenter mouseleave';
  } else {
    evnt = 'click';
  }

  $('.js-skill').on(evnt, function(){
    $(this).toggleClass('active');
  });

});

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

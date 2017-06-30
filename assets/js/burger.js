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

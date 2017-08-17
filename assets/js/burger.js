function toggleActive(){
  $('.js-header, .js-burger').toggleClass('active');
  $('.js-body').toggleClass('o-hidden');
}
function rmClass(){
  $('.js-header, .js-burger').removeClass('active');
  $('.js-body').removeClass('o-hidden');
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
    $('.js-body').removeClass('o-hidden');
  });


  $(window).resize(updateWidth);

});

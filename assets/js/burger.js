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

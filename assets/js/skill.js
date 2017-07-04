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

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

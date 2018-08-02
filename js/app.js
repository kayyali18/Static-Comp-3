$(document).ready(function() {
  var $toggleButton = $('.toggle-button'),
      $menuWrap = $('.menu-wrap'),
      $headerWrap = $('.header-wrap'),
      $main = $('main');
  $toggleButton.on('click', function () {
    $(this).toggleClass('button-open');
    $menuWrap.toggleClass('menu-show');
    $headerWrap.toggleClass('slide-right');
  });

  var $hotLinks = $('.hot-links.mobile a');
    $hotLinks.on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).siblings('.active').toggleClass('active');
      console.log('hi')
    });
});

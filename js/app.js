$(document).ready(function() {
  var $toggleButton = $('.toggle-button'),
      $menuWrap = $('.menu-wrap'),
      $headerWrap = $('.header-wrap'),
      $main = $('main');
  $toggleButton.on('click', function () {
    $(this).toggleClass('button-open');
    $menuWrap.toggleClass('menu-show');
    $headerWrap.toggleClass('slide-right');
    $main.toggleClass('slide-right');
  });

  var $sidebarArrow = $('.sidebar-menu-arrow');
    $sidebarArrow.click(function() {
        $(this).next().slideToggle(300);
    });
});

$(document).ready(function () {
//Menu Responsivo
  $('.toggle-nav').click(function (e) {
    $(this).toggleClass('active');
    $('.menu ul').toggleClass('active');

    e.preventDefault();
  });

  $('nav.menu > ul > li').click(function(e){
  	$(this).find('ul').toggle();

  	
  });
});
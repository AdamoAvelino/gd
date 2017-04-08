$(document).ready(function () {
  var tooltip;
  var tooltips_ativar = document.getElementsByClassName('tooltip_invisivel');
  var numero_tooltips = tooltips_ativar.length;

//Menu Responsivo
  $('.toggle-nav').click(function (e) {
    $(this).toggleClass('active');
    $('.menu ul').toggleClass('active');

    e.preventDefault();
  });
  
  
//============================================
//Formatação texto header centro
$('.bloco').each(function(i){
  var header = 0;
  var article = 0;
  var altura_bloco = $(this).height();

    // console.log($(this).children().children().prop('tagName'));

   if($(this).children().children().prop('tagName') != 'HEADER'){
     article = $(this).children().next();
   }else{
     article = $(this).children('.menor');
      console.log(article.children());
   }
   
   
   header = article.children().height();
   var altura_centro =  (parseInt(altura_bloco) - parseInt(header)) / 2;


   article.children().attr('style', 'margin-top:'+altura_centro+'px');
 });

//=============================================

/*----------------Aplica entradas de animadas em elementos que contem classes animacao acompnhado de data-animacao
 * - data-animacao
 *    
 */

  $(window).scroll(function () {

    $('.animacao').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {

        var classe = $(this).attr('data-animacao');
        $(this).addClass(classe)
      }

    });

  });

  for (var i = 0; i < numero_tooltips; i++) {

    tooltip_data_ativo = tooltips_ativar[i].getAttribute('data-ativo').split('_');

    elemento_more = tooltip_data_ativo[0];
    
    document.getElementById(elemento_more).onmouseover = function () {

      var tooltip_id = "div_" + this.getAttribute('id').toLowerCase();
      mostra_posicao(tooltip_id, this.getAttribute('id'));
    };

    document.getElementById(elemento_more).onmouseleave = function () {
      var tooltip_id = "div_" + this.getAttribute('id').toLowerCase();
      esconde_elemento(tooltip_id);
    };

  }

});

// Function posiciona o tooltip na posição emediatamente ao lado do elemento
function mostra_posicao(tooltip_id, elemento_more) {


  document.getElementById(tooltip_id).removeAttribute('class');

  var tooltip_data_ativo = document.getElementById(tooltip_id).getAttribute('data-ativo').split('_');
  var classe_tooltip = 'tooltip_' + tooltip_data_ativo[1] + '_' + tooltip_data_ativo[2];

  document.getElementById(tooltip_id).setAttribute('class', classe_tooltip + ' tooltip_visivel');

//Elemento More
  var el = document.getElementById(elemento_more);
  var pos = el.getBoundingClientRect();

//Elemento Container
  var el_cont = document.getElementById(el.parentElement.getAttribute('id'));
  var pos_cont = el_cont.getBoundingClientRect();

//Elemento Tootip
  var altura_elemento = document.getElementById(tooltip_id).offsetHeight;
  var largura_elemento = document.getElementById(tooltip_id).offsetWidth;

  if (tooltip_data_ativo[2] == 'left') {

    var left = (pos.left - pos_cont.left) + (largura_elemento / 6);
    var top = (pos.top - pos_cont.top - altura_elemento);
  } else if (tooltip_data_ativo[2] == 'right' && tooltip_data_ativo[1] == 'big') {
    var left = 0;
    var top = (pos.top - pos_cont.top - altura_elemento);
  } else {
    var left = (pos.left - pos_cont.left - largura_elemento);
    var top = (pos.top - pos_cont.top - altura_elemento);

  }
  /*console.log('Posição top do elemento ḿore: = '+pos.top);*/
  /*console.log('Posição top do elemento Container: = '+pos_cont.top);*/
  /*console.log('Altura do elemento Toolltip:  = '+altura_elemento);*/

  var style = 'position: absolute; top:' + top + 'px; left:' + left + 'px;';

  document.getElementById(tooltip_id).setAttribute('style', style);
}


function esconde_elemento(tooltip_id) {
  document.getElementById(tooltip_id).removeAttribute('class');
  document.getElementById(tooltip_id).setAttribute('class', 'tooltip tooltip_invisivel');

}

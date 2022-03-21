$(document).ready(function () {

  /*
    - Lógica dos blocos: A variável multiplicacao_algumNumero já começa transparente, para o usuário não ver a tabuada,
      Toda vez que um container multiplicacao_algumNumero  for clicado, eu vou adicionar blur em todas as outras multiplicações
      e deixar o container que o usuário clicou visivel, para que ele treine a multiplicação.

      - Existem dois botões no container, 
        1. Serve para deixar as respostas transparentes, adicionando a classe transparencia no resultado da multiplicação. 
        2. E o de mostrar as respostas que seria o resultado da multiplicação

    - Essa lógica serve para todos os blocos

  */

  // Tabuada do 2 (parte 1)
  let multiplicacao_1 = $('#multiplicacao-1').addClass('transparencia');


  // Ao clicar na  tabuada, o filtro de blur some
  multiplicacao_1.click(function () {
    // Alvo
    multiplicacao_1.css({ 'filter': 'none' })

    multiplicacao_2.css({ 'filter': 'blur(10px)' })
    multiplicacao_3.css({ 'filter': 'blur(10px)' })
    multiplicacao_4.css({ 'filter': 'blur(10px)' })
    multiplicacao_5.css({ 'filter': 'blur(10px)' })
    multiplicacao_6.css({ 'filter': 'blur(10px)' })
    multiplicacao_7.css({ 'filter': 'blur(10px)' })
    multiplicacao_8.css({ 'filter': 'blur(10px)' })
    multiplicacao_9.css({ 'filter': 'blur(10px)' })
    multiplicacao_10.css({ 'filter': 'blur(10px)' })

  })

  // Ao clicar no botão de mostrar a resposta, o resultado da operação aparece
  $('#botao-1').click(function () {
    $('.resultado-1').removeClass('transparencia');
  })

  // Ao clicar no botão de esconder a resposta, o resultado desaparece
  $('#btn-esconder-1').click(function () {
    $('.resultado-1').addClass('transparencia');
  })





  // Tabuada do 2 (parte 2)
  let multiplicacao_2 = $('#multiplicacao-2').addClass('transparencia');

  multiplicacao_2.click(function () {

    // Alvo
    multiplicacao_2.css({ 'filter': 'none' })

    // Tabuadas ficam com blur de novo
    multiplicacao_1.css({ 'filter': 'blur(10px)' })
    multiplicacao_3.css({ 'filter': 'blur(10px)' })
    multiplicacao_4.css({ 'filter': 'blur(10px)' })
    multiplicacao_5.css({ 'filter': 'blur(10px)' })
    multiplicacao_6.css({ 'filter': 'blur(10px)' })
    multiplicacao_7.css({ 'filter': 'blur(10px)' })
    multiplicacao_8.css({ 'filter': 'blur(10px)' })
    multiplicacao_9.css({ 'filter': 'blur(10px)' })
    multiplicacao_10.css({ 'filter': 'blur(10px)' })
  })


  // Ao clicar no botão de mostrar a resposta, o resultado da operação aparece
  $('#botao-2').click(function () {
    $('.resultado-2').removeClass('transparencia');
  })

  // Ao clicar no botão de esconder a resposta, o resultado desaparece
  $('#btn-esconder-2').click(function () {
    $('.resultado-2').addClass('transparencia');
  })





  // Tabuada do 2 (parte 3)
  let multiplicacao_3 = $('#multiplicacao-3').addClass('transparencia');

  multiplicacao_3.click(function () {
    // alvo
    multiplicacao_3.css({ 'filter': 'none' })



    multiplicacao_1.css({ 'filter': 'blur(10px)' })
    multiplicacao_2.css({ 'filter': 'blur(10px)' })
    multiplicacao_4.css({ 'filter': 'blur(10px)' })
    multiplicacao_5.css({ 'filter': 'blur(10px)' })
    multiplicacao_6.css({ 'filter': 'blur(10px)' })
    multiplicacao_7.css({ 'filter': 'blur(10px)' })
    multiplicacao_8.css({ 'filter': 'blur(10px)' })
    multiplicacao_9.css({ 'filter': 'blur(10px)' })
    multiplicacao_10.css({ 'filter': 'blur(10px)' })
  })

  // Ao clicar no botão de mostrar a resposta, o resultado da operação aparece
  $('#botao-3').click(function () {
    $('.resultado-3').removeClass('transparencia');
  })

  // Ao clicar no botão de esconder a resposta, o resultado desaparece
  $('#btn-esconder-3').click(function () {
    $('.resultado-3').addClass('transparencia');
  })




  // Tabuada do 2 (parte 4)
  let multiplicacao_4 = $('#multiplicacao-4').addClass('transparencia');

  multiplicacao_4.click(function () {
    // Alvo
    multiplicacao_4.css({ 'filter': 'none' })

    multiplicacao_1.css({ 'filter': 'blur(10px)' })
    multiplicacao_2.css({ 'filter': 'blur(10px)' })
    multiplicacao_3.css({ 'filter': 'blur(10px)' })
    multiplicacao_5.css({ 'filter': 'blur(10px)' })
    multiplicacao_6.css({ 'filter': 'blur(10px)' })
    multiplicacao_7.css({ 'filter': 'blur(10px)' })
    multiplicacao_8.css({ 'filter': 'blur(10px)' })
    multiplicacao_9.css({ 'filter': 'blur(10px)' })
    multiplicacao_10.css({ 'filter': 'blur(10px)' })
  })

  // Ao clicar no botão de mostrar a resposta, o resultado da operação aparece
  $('#botao-4').click(function () {
    $('.resultado-4').removeClass('transparencia');
  })

  // Ao clicar no botão de esconder a resposta, o resultado desaparece
  $('#btn-esconder-4').click(function () {
    $('.resultado-4').addClass('transparencia');
  })





  // Tabuada do 2 (parte 5)
  let multiplicacao_5 = $('#multiplicacao-5').addClass('transparencia');

  multiplicacao_5.click(function () {
    // Alvo
    multiplicacao_5.css({ 'filter': 'none' })

    multiplicacao_1.css({ 'filter': 'blur(10px)' })
    multiplicacao_2.css({ 'filter': 'blur(10px)' })
    multiplicacao_3.css({ 'filter': 'blur(10px)' })
    multiplicacao_4.css({ 'filter': 'blur(10px)' })
    multiplicacao_6.css({ 'filter': 'blur(10px)' })
    multiplicacao_7.css({ 'filter': 'blur(10px)' })
    multiplicacao_8.css({ 'filter': 'blur(10px)' })
    multiplicacao_9.css({ 'filter': 'blur(10px)' })
    multiplicacao_10.css({ 'filter': 'blur(10px)' })
  })

  // Ao clicar no botão de mostrar a resposta, o resultado da operação aparece
  $('#botao-5').click(function () {
    $('.resultado-5').removeClass('transparencia');
  })

  // Ao clicar no botão de esconder a resposta, o resultado desaparece
  $('#btn-esconder-5').click(function () {
    $('.resultado-5').addClass('transparencia');
  })





  // Tabuada do 2 (parte 6)
  let multiplicacao_6 = $('#multiplicacao-6').addClass('transparencia');

  multiplicacao_6.click(function () {
    // Alvo
    multiplicacao_6.css({ 'filter': 'none' })

    multiplicacao_1.css({ 'filter': 'blur(10px)' })
    multiplicacao_2.css({ 'filter': 'blur(10px)' })
    multiplicacao_3.css({ 'filter': 'blur(10px)' })
    multiplicacao_4.css({ 'filter': 'blur(10px)' })
    multiplicacao_5.css({ 'filter': 'blur(10px)' })
    multiplicacao_7.css({ 'filter': 'blur(10px)' })
    multiplicacao_8.css({ 'filter': 'blur(10px)' })
    multiplicacao_9.css({ 'filter': 'blur(10px)' })
    multiplicacao_10.css({ 'filter': 'blur(10px)' })
  })

  // Ao clicar no botão de mostrar a resposta, o resultado da operação aparece
  $('#botao-6').click(function () {
    $('.resultado-6').removeClass('transparencia');
  })

  // Ao clicar no botão de esconder a resposta, o resultado desaparece
  $('#btn-esconder-6').click(function () {
    $('.resultado-6').addClass('transparencia');
  })





  // Tabuada do 2 (parte 7)
  let multiplicacao_7 = $('#multiplicacao-7').addClass('transparencia');

  multiplicacao_7.click(function () {
    // Alvo
    multiplicacao_7.css({ 'filter': 'none' })

    multiplicacao_1.css({ 'filter': 'blur(10px)' })
    multiplicacao_2.css({ 'filter': 'blur(10px)' })
    multiplicacao_3.css({ 'filter': 'blur(10px)' })
    multiplicacao_4.css({ 'filter': 'blur(10px)' })
    multiplicacao_5.css({ 'filter': 'blur(10px)' })
    multiplicacao_6.css({ 'filter': 'blur(10px)' })
    multiplicacao_8.css({ 'filter': 'blur(10px)' })
    multiplicacao_9.css({ 'filter': 'blur(10px)' })
    multiplicacao_10.css({ 'filter': 'blur(10px)' })
  })

  // Ao clicar no botão de mostrar a resposta, o resultado da operação aparece
  $('#botao-7').click(function () {
    $('.resultado-7').removeClass('transparencia');
  })

  // Ao clicar no botão de esconder a resposta, o resultado desaparece
  $('#btn-esconder-7').click(function () {
    $('.resultado-7').addClass('transparencia');
  })





  // Tabuada do 2 (parte 8)
  let multiplicacao_8 = $('#multiplicacao-8').addClass('transparencia');

  multiplicacao_8.click(function () {
    // Alvo
    multiplicacao_8.css({ 'filter': 'none' })

    multiplicacao_1.css({ 'filter': 'blur(10px)' })
    multiplicacao_2.css({ 'filter': 'blur(10px)' })
    multiplicacao_3.css({ 'filter': 'blur(10px)' })
    multiplicacao_4.css({ 'filter': 'blur(10px)' })
    multiplicacao_5.css({ 'filter': 'blur(10px)' })
    multiplicacao_6.css({ 'filter': 'blur(10px)' })
    multiplicacao_7.css({ 'filter': 'blur(10px)' })
    multiplicacao_9.css({ 'filter': 'blur(10px)' })
    multiplicacao_10.css({ 'filter': 'blur(10px)' })
  })

  // Ao clicar no botão de mostrar a resposta, o resultado da operação aparece
  $('#botao-8').click(function () {
    $('.resultado-8').removeClass('transparencia');
  })

  // Ao clicar no botão de esconder a resposta, o resultado desaparece
  $('#btn-esconder-8').click(function () {
    $('.resultado-8').addClass('transparencia');
  })






  // Tabuada do 2 (parte 9)
  let multiplicacao_9 = $('#multiplicacao-9').addClass('transparencia');

  multiplicacao_9.click(function () {
    // Alvo
    multiplicacao_9.css({ 'filter': 'none' })

    multiplicacao_1.css({ 'filter': 'blur(10px)' })
    multiplicacao_2.css({ 'filter': 'blur(10px)' })
    multiplicacao_3.css({ 'filter': 'blur(10px)' })
    multiplicacao_4.css({ 'filter': 'blur(10px)' })
    multiplicacao_5.css({ 'filter': 'blur(10px)' })
    multiplicacao_6.css({ 'filter': 'blur(10px)' })
    multiplicacao_7.css({ 'filter': 'blur(10px)' })
    multiplicacao_8.css({ 'filter': 'blur(10px)' })
    multiplicacao_10.css({ 'filter': 'blur(10px)' })
  })

  // Ao clicar no botão de mostrar a resposta, o resultado da operação aparece
  $('#botao-9').click(function () {
    $('.resultado-9').removeClass('transparencia');
  })

  // Ao clicar no botão de esconder a resposta, o resultado desaparece
  $('#btn-esconder-9').click(function () {
    $('.resultado-9').addClass('transparencia');
  })





  // Tabuada do 2 (parte 10)
  let multiplicacao_10 = $('#multiplicacao-10').addClass('transparencia');

  multiplicacao_10.click(function () {
    // Alvo
    multiplicacao_10.css({ 'filter': 'none' })

    multiplicacao_1.css({ 'filter': 'blur(10px)' })
    multiplicacao_2.css({ 'filter': 'blur(10px)' })
    multiplicacao_3.css({ 'filter': 'blur(10px)' })
    multiplicacao_4.css({ 'filter': 'blur(10px)' })
    multiplicacao_5.css({ 'filter': 'blur(10px)' })
    multiplicacao_6.css({ 'filter': 'blur(10px)' })
    multiplicacao_7.css({ 'filter': 'blur(10px)' })
    multiplicacao_8.css({ 'filter': 'blur(10px)' })
    multiplicacao_9.css({ 'filter': 'blur(10px)' })
  })

  // Ao clicar no botão de mostrar a resposta, o resultado da operação aparece
  $('#botao-10').click(function () {
    $('.resultado-10').removeClass('transparencia');
  })

  // Ao clicar no botão de esconder a resposta, o resultado desaparece
  $('#btn-esconder-10').click(function () {
    $('.resultado-10').addClass('transparencia');
  })



})
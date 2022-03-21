$(document).ready(function () {

  /*
    - Lógica dos blocos: A variável divisao_algumNumero já começa transparente, para o usuário não ver a tabuada,
      Toda vez que um container divisao_algumNumero  for clicado, eu vou adicionar blur em todas as outras multiplicações
      e deixar o container que o usuário clicou visivel, para que ele treine a multiplicação.

      - Existem dois botões no container, 
        1. Serve para deixar as respostas transparentes, adicionando a classe transparencia no resultado da multiplicação. 
        2. E o de mostrar as respostas que seria o resultado da multiplicação

    - Essa lógica serve para todos os blocos

  */

  // Tabuada do 2 (parte 1)
  let divisao_1 = $('#divisao-1').addClass('transparencia');


  // Ao clicar na  tabuada, o filtro de blur some
  divisao_1.click(function () {
    // Alvo
    divisao_1.css({ 'filter': 'none' })

    divisao_2.css({ 'filter': 'blur(10px)' })
    divisao_3.css({ 'filter': 'blur(10px)' })
    divisao_4.css({ 'filter': 'blur(10px)' })
    divisao_5.css({ 'filter': 'blur(10px)' })
    divisao_6.css({ 'filter': 'blur(10px)' })
    divisao_7.css({ 'filter': 'blur(10px)' })
    divisao_8.css({ 'filter': 'blur(10px)' })
    divisao_9.css({ 'filter': 'blur(10px)' })
    divisao_10.css({ 'filter': 'blur(10px)' })

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
  let divisao_2 = $('#divisao-2').addClass('transparencia');

  divisao_2.click(function () {

    // Alvo
    divisao_2.css({ 'filter': 'none' })

    // Tabuadas ficam com blur de novo
    divisao_1.css({ 'filter': 'blur(10px)' })
    divisao_3.css({ 'filter': 'blur(10px)' })
    divisao_4.css({ 'filter': 'blur(10px)' })
    divisao_5.css({ 'filter': 'blur(10px)' })
    divisao_6.css({ 'filter': 'blur(10px)' })
    divisao_7.css({ 'filter': 'blur(10px)' })
    divisao_8.css({ 'filter': 'blur(10px)' })
    divisao_9.css({ 'filter': 'blur(10px)' })
    divisao_10.css({ 'filter': 'blur(10px)' })
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
  let divisao_3 = $('#divisao-3').addClass('transparencia');

  divisao_3.click(function () {
    // alvo
    divisao_3.css({ 'filter': 'none' })



    divisao_1.css({ 'filter': 'blur(10px)' })
    divisao_2.css({ 'filter': 'blur(10px)' })
    divisao_4.css({ 'filter': 'blur(10px)' })
    divisao_5.css({ 'filter': 'blur(10px)' })
    divisao_6.css({ 'filter': 'blur(10px)' })
    divisao_7.css({ 'filter': 'blur(10px)' })
    divisao_8.css({ 'filter': 'blur(10px)' })
    divisao_9.css({ 'filter': 'blur(10px)' })
    divisao_10.css({ 'filter': 'blur(10px)' })
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
  let divisao_4 = $('#divisao-4').addClass('transparencia');

  divisao_4.click(function () {
    // Alvo
    divisao_4.css({ 'filter': 'none' })

    divisao_1.css({ 'filter': 'blur(10px)' })
    divisao_2.css({ 'filter': 'blur(10px)' })
    divisao_3.css({ 'filter': 'blur(10px)' })
    divisao_5.css({ 'filter': 'blur(10px)' })
    divisao_6.css({ 'filter': 'blur(10px)' })
    divisao_7.css({ 'filter': 'blur(10px)' })
    divisao_8.css({ 'filter': 'blur(10px)' })
    divisao_9.css({ 'filter': 'blur(10px)' })
    divisao_10.css({ 'filter': 'blur(10px)' })
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
  let divisao_5 = $('#divisao-5').addClass('transparencia');

  divisao_5.click(function () {
    // Alvo
    divisao_5.css({ 'filter': 'none' })

    divisao_1.css({ 'filter': 'blur(10px)' })
    divisao_2.css({ 'filter': 'blur(10px)' })
    divisao_3.css({ 'filter': 'blur(10px)' })
    divisao_4.css({ 'filter': 'blur(10px)' })
    divisao_6.css({ 'filter': 'blur(10px)' })
    divisao_7.css({ 'filter': 'blur(10px)' })
    divisao_8.css({ 'filter': 'blur(10px)' })
    divisao_9.css({ 'filter': 'blur(10px)' })
    divisao_10.css({ 'filter': 'blur(10px)' })
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
  let divisao_6 = $('#divisao-6').addClass('transparencia');

  divisao_6.click(function () {
    // Alvo
    divisao_6.css({ 'filter': 'none' })

    divisao_1.css({ 'filter': 'blur(10px)' })
    divisao_2.css({ 'filter': 'blur(10px)' })
    divisao_3.css({ 'filter': 'blur(10px)' })
    divisao_4.css({ 'filter': 'blur(10px)' })
    divisao_5.css({ 'filter': 'blur(10px)' })
    divisao_7.css({ 'filter': 'blur(10px)' })
    divisao_8.css({ 'filter': 'blur(10px)' })
    divisao_9.css({ 'filter': 'blur(10px)' })
    divisao_10.css({ 'filter': 'blur(10px)' })
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
  let divisao_7 = $('#divisao-7').addClass('transparencia');

  divisao_7.click(function () {
    // Alvo
    divisao_7.css({ 'filter': 'none' })

    divisao_1.css({ 'filter': 'blur(10px)' })
    divisao_2.css({ 'filter': 'blur(10px)' })
    divisao_3.css({ 'filter': 'blur(10px)' })
    divisao_4.css({ 'filter': 'blur(10px)' })
    divisao_5.css({ 'filter': 'blur(10px)' })
    divisao_6.css({ 'filter': 'blur(10px)' })
    divisao_8.css({ 'filter': 'blur(10px)' })
    divisao_9.css({ 'filter': 'blur(10px)' })
    divisao_10.css({ 'filter': 'blur(10px)' })
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
  let divisao_8 = $('#divisao-8').addClass('transparencia');

  divisao_8.click(function () {
    // Alvo
    divisao_8.css({ 'filter': 'none' })

    divisao_1.css({ 'filter': 'blur(10px)' })
    divisao_2.css({ 'filter': 'blur(10px)' })
    divisao_3.css({ 'filter': 'blur(10px)' })
    divisao_4.css({ 'filter': 'blur(10px)' })
    divisao_5.css({ 'filter': 'blur(10px)' })
    divisao_6.css({ 'filter': 'blur(10px)' })
    divisao_7.css({ 'filter': 'blur(10px)' })
    divisao_9.css({ 'filter': 'blur(10px)' })
    divisao_10.css({ 'filter': 'blur(10px)' })
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
  let divisao_9 = $('#divisao-9').addClass('transparencia');

  divisao_9.click(function () {
    // Alvo
    divisao_9.css({ 'filter': 'none' })

    divisao_1.css({ 'filter': 'blur(10px)' })
    divisao_2.css({ 'filter': 'blur(10px)' })
    divisao_3.css({ 'filter': 'blur(10px)' })
    divisao_4.css({ 'filter': 'blur(10px)' })
    divisao_5.css({ 'filter': 'blur(10px)' })
    divisao_6.css({ 'filter': 'blur(10px)' })
    divisao_7.css({ 'filter': 'blur(10px)' })
    divisao_8.css({ 'filter': 'blur(10px)' })
    divisao_10.css({ 'filter': 'blur(10px)' })
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
  let divisao_10 = $('#divisao-10').addClass('transparencia');

  divisao_10.click(function () {
    // Alvo
    divisao_10.css({ 'filter': 'none' })

    divisao_1.css({ 'filter': 'blur(10px)' })
    divisao_2.css({ 'filter': 'blur(10px)' })
    divisao_3.css({ 'filter': 'blur(10px)' })
    divisao_4.css({ 'filter': 'blur(10px)' })
    divisao_5.css({ 'filter': 'blur(10px)' })
    divisao_6.css({ 'filter': 'blur(10px)' })
    divisao_7.css({ 'filter': 'blur(10px)' })
    divisao_8.css({ 'filter': 'blur(10px)' })
    divisao_9.css({ 'filter': 'blur(10px)' })
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
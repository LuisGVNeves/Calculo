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
  let subtracao_1 = $('#subtracao-1').addClass('transparencia');


  // Ao clicar na  tabuada, o filtro de blur some
  subtracao_1.click(function () {
    // Alvo
    subtracao_1.css({ 'filter': 'none' })

    subtracao_2.css({ 'filter': 'blur(10px)' })
    subtracao_3.css({ 'filter': 'blur(10px)' })
    subtracao_4.css({ 'filter': 'blur(10px)' })
    subtracao_5.css({ 'filter': 'blur(10px)' })
    subtracao_6.css({ 'filter': 'blur(10px)' })
    subtracao_7.css({ 'filter': 'blur(10px)' })
    subtracao_8.css({ 'filter': 'blur(10px)' })
    subtracao_9.css({ 'filter': 'blur(10px)' })
    subtracao_10.css({ 'filter': 'blur(10px)' })

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
  let subtracao_2 = $('#subtracao-2').addClass('transparencia');

  subtracao_2.click(function () {

    // Alvo
    subtracao_2.css({ 'filter': 'none' })

    // Tabuadas ficam com blur de novo
    subtracao_1.css({ 'filter': 'blur(10px)' })
    subtracao_3.css({ 'filter': 'blur(10px)' })
    subtracao_4.css({ 'filter': 'blur(10px)' })
    subtracao_5.css({ 'filter': 'blur(10px)' })
    subtracao_6.css({ 'filter': 'blur(10px)' })
    subtracao_7.css({ 'filter': 'blur(10px)' })
    subtracao_8.css({ 'filter': 'blur(10px)' })
    subtracao_9.css({ 'filter': 'blur(10px)' })
    subtracao_10.css({ 'filter': 'blur(10px)' })
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
  let subtracao_3 = $('#subtracao-3').addClass('transparencia');

  subtracao_3.click(function () {
    // alvo
    subtracao_3.css({ 'filter': 'none' })



    subtracao_1.css({ 'filter': 'blur(10px)' })
    subtracao_2.css({ 'filter': 'blur(10px)' })
    subtracao_4.css({ 'filter': 'blur(10px)' })
    subtracao_5.css({ 'filter': 'blur(10px)' })
    subtracao_6.css({ 'filter': 'blur(10px)' })
    subtracao_7.css({ 'filter': 'blur(10px)' })
    subtracao_8.css({ 'filter': 'blur(10px)' })
    subtracao_9.css({ 'filter': 'blur(10px)' })
    subtracao_10.css({ 'filter': 'blur(10px)' })
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
  let subtracao_4 = $('#subtracao-4').addClass('transparencia');

  subtracao_4.click(function () {
    // Alvo
    subtracao_4.css({ 'filter': 'none' })

    subtracao_1.css({ 'filter': 'blur(10px)' })
    subtracao_2.css({ 'filter': 'blur(10px)' })
    subtracao_3.css({ 'filter': 'blur(10px)' })
    subtracao_5.css({ 'filter': 'blur(10px)' })
    subtracao_6.css({ 'filter': 'blur(10px)' })
    subtracao_7.css({ 'filter': 'blur(10px)' })
    subtracao_8.css({ 'filter': 'blur(10px)' })
    subtracao_9.css({ 'filter': 'blur(10px)' })
    subtracao_10.css({ 'filter': 'blur(10px)' })
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
  let subtracao_5 = $('#subtracao-5').addClass('transparencia');

  subtracao_5.click(function () {
    // Alvo
    subtracao_5.css({ 'filter': 'none' })

    subtracao_1.css({ 'filter': 'blur(10px)' })
    subtracao_2.css({ 'filter': 'blur(10px)' })
    subtracao_3.css({ 'filter': 'blur(10px)' })
    subtracao_4.css({ 'filter': 'blur(10px)' })
    subtracao_6.css({ 'filter': 'blur(10px)' })
    subtracao_7.css({ 'filter': 'blur(10px)' })
    subtracao_8.css({ 'filter': 'blur(10px)' })
    subtracao_9.css({ 'filter': 'blur(10px)' })
    subtracao_10.css({ 'filter': 'blur(10px)' })
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
  let subtracao_6 = $('#subtracao-6').addClass('transparencia');

  subtracao_6.click(function () {
    // Alvo
    subtracao_6.css({ 'filter': 'none' })

    subtracao_1.css({ 'filter': 'blur(10px)' })
    subtracao_2.css({ 'filter': 'blur(10px)' })
    subtracao_3.css({ 'filter': 'blur(10px)' })
    subtracao_4.css({ 'filter': 'blur(10px)' })
    subtracao_5.css({ 'filter': 'blur(10px)' })
    subtracao_7.css({ 'filter': 'blur(10px)' })
    subtracao_8.css({ 'filter': 'blur(10px)' })
    subtracao_9.css({ 'filter': 'blur(10px)' })
    subtracao_10.css({ 'filter': 'blur(10px)' })
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
  let subtracao_7 = $('#subtracao-7').addClass('transparencia');

  subtracao_7.click(function () {
    // Alvo
    subtracao_7.css({ 'filter': 'none' })

    subtracao_1.css({ 'filter': 'blur(10px)' })
    subtracao_2.css({ 'filter': 'blur(10px)' })
    subtracao_3.css({ 'filter': 'blur(10px)' })
    subtracao_4.css({ 'filter': 'blur(10px)' })
    subtracao_5.css({ 'filter': 'blur(10px)' })
    subtracao_6.css({ 'filter': 'blur(10px)' })
    subtracao_8.css({ 'filter': 'blur(10px)' })
    subtracao_9.css({ 'filter': 'blur(10px)' })
    subtracao_10.css({ 'filter': 'blur(10px)' })
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
  let subtracao_8 = $('#subtracao-8').addClass('transparencia');

  subtracao_8.click(function () {
    // Alvo
    subtracao_8.css({ 'filter': 'none' })

    subtracao_1.css({ 'filter': 'blur(10px)' })
    subtracao_2.css({ 'filter': 'blur(10px)' })
    subtracao_3.css({ 'filter': 'blur(10px)' })
    subtracao_4.css({ 'filter': 'blur(10px)' })
    subtracao_5.css({ 'filter': 'blur(10px)' })
    subtracao_6.css({ 'filter': 'blur(10px)' })
    subtracao_7.css({ 'filter': 'blur(10px)' })
    subtracao_9.css({ 'filter': 'blur(10px)' })
    subtracao_10.css({ 'filter': 'blur(10px)' })
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
  let subtracao_9 = $('#subtracao-9').addClass('transparencia');

  subtracao_9.click(function () {
    // Alvo
    subtracao_9.css({ 'filter': 'none' })

    subtracao_1.css({ 'filter': 'blur(10px)' })
    subtracao_2.css({ 'filter': 'blur(10px)' })
    subtracao_3.css({ 'filter': 'blur(10px)' })
    subtracao_4.css({ 'filter': 'blur(10px)' })
    subtracao_5.css({ 'filter': 'blur(10px)' })
    subtracao_6.css({ 'filter': 'blur(10px)' })
    subtracao_7.css({ 'filter': 'blur(10px)' })
    subtracao_8.css({ 'filter': 'blur(10px)' })
    subtracao_10.css({ 'filter': 'blur(10px)' })
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
  let subtracao_10 = $('#subtracao-10').addClass('transparencia');

  subtracao_10.click(function () {
    // Alvo
    subtracao_10.css({ 'filter': 'none' })

    subtracao_1.css({ 'filter': 'blur(10px)' })
    subtracao_2.css({ 'filter': 'blur(10px)' })
    subtracao_3.css({ 'filter': 'blur(10px)' })
    subtracao_4.css({ 'filter': 'blur(10px)' })
    subtracao_5.css({ 'filter': 'blur(10px)' })
    subtracao_6.css({ 'filter': 'blur(10px)' })
    subtracao_7.css({ 'filter': 'blur(10px)' })
    subtracao_8.css({ 'filter': 'blur(10px)' })
    subtracao_9.css({ 'filter': 'blur(10px)' })
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
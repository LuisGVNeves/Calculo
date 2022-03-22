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
  let adicao_1 = $('#adicao-1').addClass('transparencia');


  // Ao clicar na  tabuada, o filtro de blur some
  adicao_1.click(function () {
    // Alvo
    adicao_1.css({ 'filter': 'none' })

    adicao_2.css({ 'filter': 'blur(10px)' })
    adicao_3.css({ 'filter': 'blur(10px)' })
    adicao_4.css({ 'filter': 'blur(10px)' })
    adicao_5.css({ 'filter': 'blur(10px)' })
    adicao_6.css({ 'filter': 'blur(10px)' })
    adicao_7.css({ 'filter': 'blur(10px)' })
    adicao_8.css({ 'filter': 'blur(10px)' })
    adicao_9.css({ 'filter': 'blur(10px)' })
    adicao_10.css({ 'filter': 'blur(10px)' })

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
  let adicao_2 = $('#adicao-2').addClass('transparencia');

  adicao_2.click(function () {

    // Alvo
    adicao_2.css({ 'filter': 'none' })

    // Tabuadas ficam com blur de novo
    adicao_1.css({ 'filter': 'blur(10px)' })
    adicao_3.css({ 'filter': 'blur(10px)' })
    adicao_4.css({ 'filter': 'blur(10px)' })
    adicao_5.css({ 'filter': 'blur(10px)' })
    adicao_6.css({ 'filter': 'blur(10px)' })
    adicao_7.css({ 'filter': 'blur(10px)' })
    adicao_8.css({ 'filter': 'blur(10px)' })
    adicao_9.css({ 'filter': 'blur(10px)' })
    adicao_10.css({ 'filter': 'blur(10px)' })
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
  let adicao_3 = $('#adicao-3').addClass('transparencia');

  adicao_3.click(function () {
    // alvo
    adicao_3.css({ 'filter': 'none' })



    adicao_1.css({ 'filter': 'blur(10px)' })
    adicao_2.css({ 'filter': 'blur(10px)' })
    adicao_4.css({ 'filter': 'blur(10px)' })
    adicao_5.css({ 'filter': 'blur(10px)' })
    adicao_6.css({ 'filter': 'blur(10px)' })
    adicao_7.css({ 'filter': 'blur(10px)' })
    adicao_8.css({ 'filter': 'blur(10px)' })
    adicao_9.css({ 'filter': 'blur(10px)' })
    adicao_10.css({ 'filter': 'blur(10px)' })
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
  let adicao_4 = $('#adicao-4').addClass('transparencia');

  adicao_4.click(function () {
    // Alvo
    adicao_4.css({ 'filter': 'none' })

    adicao_1.css({ 'filter': 'blur(10px)' })
    adicao_2.css({ 'filter': 'blur(10px)' })
    adicao_3.css({ 'filter': 'blur(10px)' })
    adicao_5.css({ 'filter': 'blur(10px)' })
    adicao_6.css({ 'filter': 'blur(10px)' })
    adicao_7.css({ 'filter': 'blur(10px)' })
    adicao_8.css({ 'filter': 'blur(10px)' })
    adicao_9.css({ 'filter': 'blur(10px)' })
    adicao_10.css({ 'filter': 'blur(10px)' })
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
  let adicao_5 = $('#adicao-5').addClass('transparencia');

  adicao_5.click(function () {
    // Alvo
    adicao_5.css({ 'filter': 'none' })

    adicao_1.css({ 'filter': 'blur(10px)' })
    adicao_2.css({ 'filter': 'blur(10px)' })
    adicao_3.css({ 'filter': 'blur(10px)' })
    adicao_4.css({ 'filter': 'blur(10px)' })
    adicao_6.css({ 'filter': 'blur(10px)' })
    adicao_7.css({ 'filter': 'blur(10px)' })
    adicao_8.css({ 'filter': 'blur(10px)' })
    adicao_9.css({ 'filter': 'blur(10px)' })
    adicao_10.css({ 'filter': 'blur(10px)' })
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
  let adicao_6 = $('#adicao-6').addClass('transparencia');

  adicao_6.click(function () {
    // Alvo
    adicao_6.css({ 'filter': 'none' })

    adicao_1.css({ 'filter': 'blur(10px)' })
    adicao_2.css({ 'filter': 'blur(10px)' })
    adicao_3.css({ 'filter': 'blur(10px)' })
    adicao_4.css({ 'filter': 'blur(10px)' })
    adicao_5.css({ 'filter': 'blur(10px)' })
    adicao_7.css({ 'filter': 'blur(10px)' })
    adicao_8.css({ 'filter': 'blur(10px)' })
    adicao_9.css({ 'filter': 'blur(10px)' })
    adicao_10.css({ 'filter': 'blur(10px)' })
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
  let adicao_7 = $('#adicao-7').addClass('transparencia');

  adicao_7.click(function () {
    // Alvo
    adicao_7.css({ 'filter': 'none' })

    adicao_1.css({ 'filter': 'blur(10px)' })
    adicao_2.css({ 'filter': 'blur(10px)' })
    adicao_3.css({ 'filter': 'blur(10px)' })
    adicao_4.css({ 'filter': 'blur(10px)' })
    adicao_5.css({ 'filter': 'blur(10px)' })
    adicao_6.css({ 'filter': 'blur(10px)' })
    adicao_8.css({ 'filter': 'blur(10px)' })
    adicao_9.css({ 'filter': 'blur(10px)' })
    adicao_10.css({ 'filter': 'blur(10px)' })
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
  let adicao_8 = $('#adicao-8').addClass('transparencia');

  adicao_8.click(function () {
    // Alvo
    adicao_8.css({ 'filter': 'none' })

    adicao_1.css({ 'filter': 'blur(10px)' })
    adicao_2.css({ 'filter': 'blur(10px)' })
    adicao_3.css({ 'filter': 'blur(10px)' })
    adicao_4.css({ 'filter': 'blur(10px)' })
    adicao_5.css({ 'filter': 'blur(10px)' })
    adicao_6.css({ 'filter': 'blur(10px)' })
    adicao_7.css({ 'filter': 'blur(10px)' })
    adicao_9.css({ 'filter': 'blur(10px)' })
    adicao_10.css({ 'filter': 'blur(10px)' })
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
  let adicao_9 = $('#adicao-9').addClass('transparencia');

  adicao_9.click(function () {
    // Alvo
    adicao_9.css({ 'filter': 'none' })

    adicao_1.css({ 'filter': 'blur(10px)' })
    adicao_2.css({ 'filter': 'blur(10px)' })
    adicao_3.css({ 'filter': 'blur(10px)' })
    adicao_4.css({ 'filter': 'blur(10px)' })
    adicao_5.css({ 'filter': 'blur(10px)' })
    adicao_6.css({ 'filter': 'blur(10px)' })
    adicao_7.css({ 'filter': 'blur(10px)' })
    adicao_8.css({ 'filter': 'blur(10px)' })
    adicao_10.css({ 'filter': 'blur(10px)' })
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
  let adicao_10 = $('#adicao-10').addClass('transparencia');

  adicao_10.click(function () {
    // Alvo
    adicao_10.css({ 'filter': 'none' })

    adicao_1.css({ 'filter': 'blur(10px)' })
    adicao_2.css({ 'filter': 'blur(10px)' })
    adicao_3.css({ 'filter': 'blur(10px)' })
    adicao_4.css({ 'filter': 'blur(10px)' })
    adicao_5.css({ 'filter': 'blur(10px)' })
    adicao_6.css({ 'filter': 'blur(10px)' })
    adicao_7.css({ 'filter': 'blur(10px)' })
    adicao_8.css({ 'filter': 'blur(10px)' })
    adicao_9.css({ 'filter': 'blur(10px)' })
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
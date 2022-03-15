$(document).ready(function () {



  // Tabuada do 2 (parte 1)
  let multiplicacao_1 = $('#multiplicacao-1').addClass('transparencia');

  multiplicacao_1.click(function () {
    multiplicacao_1.css({ 'filter': 'none' })
  })


  // Tabuada do 2 (parte 2)
  let multiplicacao_2 = $('#multiplicacao-2').addClass('transparencia');

  multiplicacao_2.click(function () {
    multiplicacao_2.css({ 'filter': 'none' })
    multiplicacao_1.css({ 'filter': 'blur(10px)' })
  })




  // Tabuada do 2 (parte 3)
  let multiplicacao_3 = $('#multiplicacao-3').addClass('transparencia');

  multiplicacao_3.click(function () {
    multiplicacao_3.css({ 'filter': 'none' })
    multiplicacao_1.css({ 'filter': 'blur(10px)' })
    multiplicacao_2.css({ 'filter': 'blur(10px)' })
  })


})
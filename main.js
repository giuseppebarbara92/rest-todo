// PRIMA PARTE DELL'ESERCIZIO: CHIAMATA GET

// var urlApi = 'http://157.230.17.132:3003/todos';
// var container = $('.container');
//
// $(document).ready(function(){
//   $.ajax({
//     url: 'http://157.230.17.132:3003/todos',
//     method: 'GET',
//     success: function(data)
//     {
//     console.log(data);
//     printData(data);
//     },
//     error: function(errore)
//     {
//
//     }
//   });
// });
//
// function printData(obj){
//   container.html('<ul>');
//   for (var i = 0; i < obj.length; i++) {
//     container.children('ul').append('<li>' + obj[i].text + '</li>');
//   }
//   container.append('</ul>');
// }
// -----------------------------------------------------------------------------

// // SECONDA PARTE DELL'ESERCIZIO: CHIAMATA GET + CREAZIONE DI UN NUOVO ELEMENTO
//
// var urlApi = 'http://157.230.17.132:3003/todos';
// var container = $('.container');
// var button = $('#my-button');
// var input = $('#insert');
//
// $(document).ready(function(){
//
//   getData();
//
//   button.click(function(){
//    var mytext = input.val();
//    console.log(mytext);
//    $.ajax({
//      url: 'http://157.230.17.132:3003/todos',
//      method: 'POST',
//      data: {
//        text: mytext
//      },
//      success: function(data)
//      {
//      console.log(data);
//      getData();
//      },
//      error: function(errore)
//      {
//
//      }
//    });
//   });
// });
//
// function printData(obj){
//   container.html('<ul>');
//   for (var i = 0; i < obj.length; i++) {
//     container.children('ul').append('<li>' + obj[i].text + '</li>');
//   }
//   container.append('</ul>');
// }
//
// function getData(){
//   $.ajax({
//     url: 'http://157.230.17.132:3003/todos',
//     method: 'GET',
//     success: function(data)
//     {
//     console.log(data);
//     printData(data);
//     },
//     error: function(errore)
//     {
//
//     }
//   });
// }
// ---------------------------------------------------------------------

// TERZA PARTE DELL'ESERCIZIO: CHIAMATA GET + CREAZIONE DI UN NUOVO ELEMENTO + ELIMINA ELEMENTO

var urlApi = 'http://157.230.17.132:3003/todos';
var container = $('.container');
var button = $('#my-button');
var input = $('#insert');
var deleteButton = $('.elimina');

$(document).ready(function(){

  getData();

  button.click(function(){
   var mytext = input.val();
   console.log(mytext);
   $.ajax({
     url: urlApi,
     method: 'POST',
     data: {
       text: mytext
     },
     success: function(data)
     {
     console.log(data);
     getData();
     },
     error: function(errore)
     {

     }
   });
  });
  $(document).on('click', '.elimina', function(){
    var id = $(this).attr('data-id');
    console.log(id);
    $.ajax({
      url: urlApi + '/' + id,
      method: 'DELETE',
      success: function(data)
      {
      console.log(data);
      getData();
      },
      error: function(errore)
      {

      }
    });
  });
});

function printData(obj){
  container.html('<ul>');
  for (var i = 0; i < obj.length; i++) {
    container.children('ul').append('<li><span class="elimina" data-id="' + obj[i].id + '"> x </span>' + obj[i].text + '</li>');
  }
  container.append('</ul>');
}

function getData(){
  $.ajax({
    url: urlApi,
    method: 'GET',
    success: function(data)
    {
    console.log(data);
    printData(data);
    },
    error: function(errore)
    {

    }
  });
}

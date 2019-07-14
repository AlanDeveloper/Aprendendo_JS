// console.log('alguma coisa');

var table = document.querySelector('table');
// table.onclick = function () {
//   alert('click!');
// };
table.addEventListener('click', function(evento) {
  console.log(this); // this é o objeto que executou a função
  var celula = evento.target;
  celula.className = 'pt';
});

console.log('construtor.js');

function Dado(faces = 6) {
  //PROPRIEDADES
  this.faces = faces;
  this.valor = 1;
  //MÉTODOS
  this.rolar = function () {
    this.valor = parseInt(Math.random() * faces) +1;
  }
}


let d = new Dado();
console.log(d);
console.log(d.valor); //1
d.rolar();
console.log(d.valor); //?



function Moeda(op1 = "Cara", op2 = "Coroa") {
  this.op1 = op1;
  this.op2 = op2;
  // this.lancar = function () {
  //   var n = parseInt(Math.random()*2);
  //   this.valor = n == 0 ? this.op1 : this.ops2;
  // }
}


Moeda.prototype.lancar = function(){
  var n = parseInt(Math.random()*2);
  this.valor = n == 0 ? this.op1 : this.op2;
}
let m =new Moeda();
m.lancar();
console.log(m.valor);

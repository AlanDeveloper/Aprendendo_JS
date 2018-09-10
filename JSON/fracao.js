//const => constante //não pode ser redefinido
const Fracao = function (numerador, denominador = 1){
  if(denominador === 0){
    //lançamento de exceção!
    throw "Denominador inválido : não pode ser zero";
  }
  return {
    "numerador": numerador,
    "denominador": denominador,
    "multiplica": function (outraFracao) {
      return Fracao(this.numerador * outraFracao.numerador,this.denominador *outraFracao.denominador)
    },
    "inverte": function () {
      //torna Fracao mutável
      //let d =this.denominador;
      //this.denominador = this.numerador;
      //this.numerador = d;
      //para este exemplo a Fracao será imutável
      return Fracao(this.denominador,this.numerador);
    },
    "divide": function (outra) {
      return this.multiplica(outra.inverte());
    }
  };
};

console.log(Fracao);

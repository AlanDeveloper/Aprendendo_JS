function ArCon(marca,potencia,inversor = false) {
  let objeto = {
    "marca": marca,
    "potencia": potencia  ,
    "inversor": inversor,
    "ligado": false,
    "temperatura": 21,
    //ação/comandos: são chamados de MÉTODOS!
    "ligardesligar": function () {
      this.ligado = ! this.ligado;
    },
    "aumentarTemp" : function () {
      if(this.ligado && this.temperatura <30){
        this.temperatura++;
      }
    },
    "baixarTemp" : function () {
      if(this.ligado && this.temperatura >17){
        this.temperatura--;
      }
    }
  };
  return objeto;
}
console.log('Crie seu arcondicionado');
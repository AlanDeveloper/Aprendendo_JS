// função Fábrica de ArCondicionado
// propriedades perenes (duráveis, fixas, etc)
// o nome da função inicia com letra
// maiúscula porque cria um Objeto
// const ArCondicionado = function() {...}
function ArCondicionado(marca, potencia, inversor = false) {
  let objeto = {
    // marca, potencia e inversor são constantes
    'marca': marca,
    'potencia': potencia,
    'inversor': inversor,
    // ligado e temperatura são variáveis (estado)
    'ligado': false,  // true, false
    'temperatura': 21, // 17 a 30
    // ação/comando: são chamados de MÉTODOS! // verbo
    'ligarDesligar': function() {
      this.ligado = ! this.ligado;
    },
    'aumentarTemp': function () {
      if (this.ligado && this.temperatura < 30)
        this.temperatura++;
    },
    'baixarTemp': function () {
      if (this.ligado && this.temperatura > 17)
        this.temperatura--;
    }
  };
  return objeto;
}

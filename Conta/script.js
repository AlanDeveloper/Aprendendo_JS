function Conta(saldo = 500) {
  this.contador = 1;
  if(saldo >= 500){
    this.saldo = saldo;
  }else{
    this.saldo = "saldo inicial invalido";
    throw "saldo inicial invalido";
  }
  this.historico = ["abertura: +"+this.saldo];
  this.sacar = function (saque) {
      if(saque<=this.saldo && saque>=5){
        this.saldo = this.saldo - saque;
        this.historico[this.contador] = "saque: -"+saque;
        this.contador++;
        return true;
      }else{
        return false;
      }
  }
  this.depositarDinheiro = function (valor) {
    if(valor<= 1000){
      this.saldo = this.saldo + valor;
      this.historico[this.contador] = "deposito dinheiro: +"+valor;
      this.contador++;
      return true;
    }else{
      return false;
    }
  }
  this.depositarCheque = function (valor) {
    if(valor<=10000){
      this.saldo = this.saldo + valor;
      this.historico[this.contador] = "deposito cheque: +"+valor;
      this.contador++;
      return true;
    }else{
      return false;
    }
  }
  this.transfere = function (valor,conta) {
    if(valor > 5000){
      throw "transferencia excede limite de 5000";
    }
    if(valor <= this.saldo){
      if(valor <= 5000){
        this.saldo = this.saldo - valor;
        conta.saldo = conta.saldo + valor;
        this.historico[this.contador] = "transferencia: -"+valor;
        conta.historico[conta.contador] = "transferencia: +"+valor;
        this.contador++;
        conta.contador++;
        return true;
      }
    }else{
      throw "saldo insuficiente para transferencia";
    }
  }
}

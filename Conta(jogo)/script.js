function Conta(name="undefined",nick="undefined",arm = 5) {
  if(name === "undefined" || nick === "undefined" || name === "" || nick === ""){
    throw "Deve preencher todos campos";
  }
  let buys = ["Troca de nick",20,"Amuletos",10,"Equipamentos",50];
  this.c = 0;
  this.arm =  arm;
  this.shopping = [];
  this.name = name;
  this.nick = nick;
  this.cash = 0;
  this.tofuel = function (cs) {
    if(cs === 5 || cs === 10 || cs === 20 || cs === 50 || cs === 100 || cs === 150){
      return this.cash = this.cash + cs;
    }else{
       return false;
    }
  }
  this.buy = function (nm,nk) {
    if(this.shopping.length+1 <= this.arm){
      if(buys.indexOf(nm) > -1){
        let c1 = 0;
        while(buys[c1] != nm){
          c1++;
        }
        if(nm === "Troca de nick"){
          if(this.cash >= buys[c1+1] ){
            return this.nick = nk,this.cash=this.cash-buys[c1+1],c1 = 0;
          }else{
            throw "Pouco cash disponível";
          }
        }else{
          if(this.cash >= buys[c1+1] ){
            this.shopping[this.c] = buys[c1];
            this.c++;
            return this.shopping[this.c],this.c,this.cash=this.cash-buys[c1+1],c1 = 0;
          }else{
            throw "Pouco cash disponível";
          }
        }
      }else{
        throw "Compra Inválida";
      }
    }else{
      throw "Espaço insuficiente";
    }
  }
  this.present = function (conta,present) {
    if(conta.shopping.length+1 <= conta.arm){
      let present1 = this.shopping[present];
      if(this.cash >= 5 && present1.length > 0 && present1 != undefined){
        return this.cash = this.cash - 5,conta.shopping[conta.c]=this.shopping[present],this.shopping[present] = "",this.c=present;
      }else{
        if(this.cash < 5){
          throw "Pouco cash disponível";
        }
      }
    }else{
      throw "Espaço insuficiente";
    }
  }
  this.sell = function (equip) {
    if(this.shopping.indexOf(equip) > -1){
      let c3 = 0;
      while(this.shopping[c3] != equip){
        c3++;
      }
      if(equip === "Amuletos"){
        if(this.shopping[this.c] != ""){
          this.c = c3;
        }
        return this.c,this.shopping[c3] = "",this.cash = this.cash + (10*75)/100;
      }
      if(equip === "Equipamentos"){
        if(this.shopping[this.c] != ""){
          this.c = c3;
        }
        return this.c,this.shopping[c3] = "",this.cash = this.cash + (50*75)/100;
      }
    }else{
      return false;
    }
  }
  this.exchange = function (number,conta,number1) {
    let exchange = this.shopping[number];
    let exchange1 = conta.shopping[number1];
    if(exchange.length > 0 && exchange1.length > 0 ){
      this.shopping[number] = exchange1;
      conta.shopping[number1] = exchange;
    }
  }
}

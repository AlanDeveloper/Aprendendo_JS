function ATM() {
  let five = 0;
  let ten = 0;
  let twenty = 0;
  let fifty = 0;
  let hundred = 0;
  this.abastecer = function (number,note) {
    if(note === 5 || note === 10 || note === 20 || note === 50 || note === 100){
      if (note === 5) {
        return five = number + five;
      }
      if (note === 10) {
        return ten = number + ten;
      }
      if (note === 20) {
        return twenty = number + twenty;
      }
      if (note === 50) {
        return fifty = number + fifty;
      }
      if (note === 100) {
        return hundred = number + hundred;
      }
    }
  }
  this.consultarQuantidade = function (note) {
    if(note === 5 || note === 10 || note === 20 || note === 50 || note === 100){
       if(note === 5){
        return five;
      }
      if(note === 10){
        return ten;
      }
      if(note === 20){
        return twenty;
      }
      if(note === 50){
        return fifty;
      }
      if(note === 100){
        return hundred;
      }
    }else{
      return 0;
    }
  }
  this.consultarValor = function () {
    return hundred*100 + fifty*50 + twenty*20 + ten*10 + five*5;
  }
  this.retirar = function (number) {
    let hund = 0;
    let fif = 0;
    let twen = 0;
    let t = 0;
    let f = 0;
    if(hundred > 0){
      hund = parseInt(number / 100);
      if(hund>hundred){
        number = number - hundred*100;
        hund = 0;
      }else{
        number = number - hund*100;
        hund = hundred - hund;
      }
    }
    if (fifty > 0){
      fif = parseInt(number / 50);
      if(fif>fifty){
        number = number - fifty*50;
        fif = 0;
      }else{
        number = number - fif*50;
        fif = fifty - fif;
      }
    }
    if (twenty > 0){
      twen = parseInt(number / 20);
      if(twen > twenty){
        number = number - twenty*20;
        twen = 0;
      }else{
        number = number - twen*20;
        twen = twenty - twen;
      }
    }
    if (ten > 0){
      t = parseInt(number / 10);
      if(t>ten){
        number = number - ten*10;
        t = 0;
      }else{
        number = number - t*10;
        t = ten - t;
      }
    }
    if (five > 0){
      f = parseInt(number / 5);
      if(f>five){
        number = number - five*5;
        f = 0;
      }else{
        number = number - f*5
        f = five - f;
      }
    }
    if(number === 0){
      return hundred = hund,fifty = fif,twenty = twen,ten = t,five = f;
    }
  }
}

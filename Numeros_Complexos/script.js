function Complex(string,string1){
  var complex = {
    real : 0,
    imaginary :0
  };
  string1 = Number(string1);
  if(string1 % 1 === 0){
    complex.imaginary = Number(string1);
    complex.real = Number(string);
  }else{
    var c = 0;
    string = string.toString();
    var c1 = string.length;
    var char = string.charAt(c);
    var char2 = "";
    if((char==="+")||(char==="-")){
      char2 = char2+char;
      c++;
      char = string.charAt(c);
    }
    while((char!="+")&&(char!="-")&&(c<c1)){
      if(char!=" "){
        char2 = char2+char;
      }
      c++;
      char = string.charAt(c);
    }
    if(c===c1){
      if(char2.indexOf('i')===-1){
        complex.imaginary = 0 ;
        complex.real = Number(char2);
      }
      if(char2.indexOf('i')!=-1){
        char2 = char2.replace('i','');
        complex.imaginary = Number(char2);
        complex.real = 0 ;
      }
    }else{
      var char3 = "";
      var char = string.charAt(c)
      if(char==="i"){
        char = 1;
        c++;
      }
      while((c<c1)&&(char!="i")){
        if(char!=" "){
          char3 = char3+char;
        }
        c++;
        var char = string.charAt(c)
      }
      complex.real = Number(char2);
      complex.imaginary = Number(char3);
    }
  }
  return complex;
}

function add(a,b){
  var complex = {
    real : 0,
    imaginary :0
  };

  complex.real = Number(a.real) + Number(b.real);
  complex.imaginary = Number(a.imaginary) + Number(b.imaginary);
  return complex;
}

function subtract(a,b){
  var complex = {
    real : 0,
    imaginary :0
  };

  complex.real = Number(a.real) - Number(b.real);
  complex.imaginary = Number(a.imaginary) - Number(b.imaginary);
  return complex;
}

function multiply(a,b){
  var complex = {
    real : 0,
    imaginary :0
  };

  complex.real = Number(a.real) * Number(b.real) - Number(a.imaginary) * Number(b.imaginary);;
  complex.imaginary = Number(a.real) * Number(b.imaginary) + Number(b.real) * Number(a.imaginary);
  return complex;
}

function conjugate(a){
  var complex = {
    real : 0,
    imaginary :0
  };

  complex.real = Number(a.real);
  complex.imaginary = Number(a.imaginary)*-1;
  return complex;
}

function complexToString(a,b){
  var complex = "";
  if(b % 1 === 0){
    console.log('ola');
  }else{
    if(a.imaginary>0){
      complex = a.real.toString()+"+"+a.imaginary.toString()+"i";
    }
    if(a.imaginary===0){
      complex = a.real.toString();
    }
    if(a.imaginary<0){
      complex = a.real.toString()+""+a.imaginary.toString()+"i";
    }
  }
  return complex;
}
var c1 = {real: 2, imaginary: 3};
console.log(c1.real === 2);
console.log(c1.imaginary === 3);

var c2 = Complex('2+3i');
console.log(c2.real === 2);
console.log(c2.imaginary === 3);

var c3 = Complex('5');
console.log(c3.real === 5);
console.log(c3.imaginary === 0);

var c4 = Complex('4i');
console.log(c4.real === 0);
console.log(c4.imaginary === 4);

var c5 = Complex('5 + 4i');
console.log(c5.real === 5);
console.log(c5.imaginary === 4);

var c6 = Complex('5.5 + 4.3i');
console.log(c6.real === 5.5);
console.log(c6.imaginary === 4.3);

var c7 = Complex(2, 3);
console.log(c7.real === 2);
console.log(c7.imaginary === 3);

var c8 = Complex(2);
console.log(c8.real === 2);
console.log(c8.imaginary === 0);

var c9 = add(c1, c5); // 2+3i + 5+4i = 7+7i
console.log(c9.real === 7);
console.log(c9.imaginary === 7);

var cc1 = add(c5,c8); // 5+4i + 2 = 7+4i
console.log(cc1.real === 7);
console.log(cc1.imaginary === 4);

var cc2 = add(c3,c4); //  5+4i
console.log(cc2.real === 5 );
console.log(cc2.imaginary === 4 );

var c10 = subtract(c5, c1); // 5+4i - 2+3i = 3+1i
console.log(c10.real === 3);
console.log(c10.imaginary === 1);

var cc3 = subtract(c5,c8); // 5+4i - 2 = 3+4i
console.log(cc3.real === 3);
console.log(cc3.imaginary === 4);

var cc3 = subtract(c2,c3); //  2+3i - 5 = -3+3i
console.log(cc3.real === -3);
console.log(cc3.imaginary === 3);

var c11 = multiply(c1, c9); // 2+3i * 7+7i = 2*7 - 3*7
console.log(c11.real === -7);
console.log(c11.imaginary === 35);

var cc4 = multiply(c5,c8); // 5+4i * 2 = 10+8i
console.log(cc4.real === 10);
console.log(cc4.imaginary === 8);

var cc5 = multiply(c2,c3); //  2+3i * 5 = 10+15i
console.log(cc5.real === 10);
console.log(cc5.imaginary === 15);

var c12 = subtract(c1, c10); // 2+3i - 3+1i = -1+2i
console.log(c12.real === -1);
console.log(c12.imaginary === 2);

var c13 = conjugate(c9); // conjugate(7+7i) = 7-7i
console.log(c13.real === 7);
console.log(c13.imaginary === -7);

var cc6 = conjugate(c2); // conjugate(2+3i) = 2-3i
console.log(cc6.real === 2);
console.log(cc6.imaginary === -3);

var cc7 = conjugate(c4); // conjugate(4i) = -4i
console.log(cc7.real === 0);
console.log(cc7.imaginary === -4);

console.log(add(Complex("4+7i"), Complex("5+9i")).real === 9);
console.log(add(Complex("4+7i"), Complex("5+9i")).imaginary === 16);

var s1 = complexToString(c11);
console.log(s1 === "-7+35i");
console.log(complexToString(c12) === "-1+2i");
console.log(complexToString(c13) === "7-7i");
console.log(complexToString(Complex(8)) === "8");
console.log(complexToString(Complex(8, 2)) === "8+2i");
console.log(complexToString(Complex("8 + 2i")) === "8+2i");

var p1,p2,p3;

p1=30;
p2=50;

var s = "coxinha";
var v = [30,50,20,45,10];
v[1];

vs=["aaa","bbb","cccc"]; //pode armazenar carcteres/numeros.
v[2];

var vetor = [];
vetor[0]="pipoca";
vetor[1]=1+1;
vetor[2]=3.1415;
vetor[3]=prompt("Digite o quarto elemento");
vetor[4]=["oi","tchau"];
alert(vetor[1]);
alert(vetor[4][1][3]);


//-------------_----------


v=[];
v=[[],[]];


//armazenar 5 valores em 1 vetor.

var v=[];
for (i=0; i<5; i++){
v[i]=prompt("V");
}
alert(v);

alert(v.length);







var v1 = ["a" , "b" , "c"];
var v2=[1,2,3];
alert(v1.concat(v2)); //["a","b","C",1,2,3] --> concatena c1 com v2.
alert(v1); //["a" , "b" , "c"]
alert(v2); //[1,2,3]




alert([1,2,3].fill(4)); //[4,4,4]
alert([1,2,3].fill(4,1)); //[1,4,4] ---> colocar o 4 a partir da posiçao 1.
alert([1,2,3].fill(4,1,2)); //[1,4,3]
alert([1,2,3].fill(4,1,3)); //[1,4,4]


  v=[2,9,15,9,23];
alert(v.indexOf(1)); //-1 --> quando não tem
alert(v.indexOf(9)); //1




v=[2,9,15,9,23];
alert(v.indexOf(9,3)); //3




var v=[2,5,9,2];
alert(v.lastIndexOf(2)); //3
alert(v.lastIndexOf(7)); //-1




var v ={1,2];
alert(v.push(9)); //3 ---> tres elementos
alert(v); //[1,2,9]
alert(v.pop()); //9
alert(v); //[1,2]
//*retiram o último elemento

var =[1,2];
alert(v.unshift(9)); //3
alert(v); //[9,1,2]
alert(v.shift()); //9
alert(v); //[1,2]
*tira o primeiro elemento


var v= [1,2,3];
v.reverse();
alert(v) //[3,2,1]
*inverte



 v1=["banana","orange","lemon","apple","mango"];
 v2= v1.slice(3);

 v3=v1.slice(1,3);
alert(v1); //["banana","orange","lemon","aple","mango"]
alert(v2); //["apple","mango"]
alert(v3); //["orange","lemon"]




----------------------------------------------

v=[1,6,2,4,9,7,11,25];
v.sort(); //---> ordena os valores em ordem crescente

var v=["angel","clown","mandarin","surgeon"];
alert(v.splice(2,0,"drum")); //[] ---> vai colocar o drum na posição 2, e o zero, significa que nn vai retirar nada
alert(v); //["angel","clown","drum","mandarin","surgeon"]
alert(v.splice(3,1)); //["mandarin"]
alert(v); //["angel","clown","drum","surgeon"]
alert(v.splice(2,1,"trumpet")); //["drum"]
alert(v); //["angel,"clown","trumpet","surgeon"]
alert(v.splice(0,2,"parrot","anemone","blue")); //["angel","clown"]
alert(v); //["parrot","anemone","blue","trumpet","surgeon"]





var v=[1,2,3,4,5];
alert(v.join("/")); //"1/2/3/4/5" ---> separa por barras(ou qualquer outra coisa que por).
"teste raquel".split("").reverse().join("");  ************************
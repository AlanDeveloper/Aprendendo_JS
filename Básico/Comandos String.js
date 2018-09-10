var x="123abc";
x.charAt(0);
//Nome
alert(String.fromCharCode(65,108,97,110));
alert("Alan".charCodeAt(0)+"+"+"Alan".charCodeAt(1)+"+"+"Alan".charCodeAt(2)+"+"+"Alan".charCodeAt(3));
// -32 passa para letra maiuscula e +32 para minuscula
var y=String.fromCharCode("abc".charCodeAt(0)-32)+String.fromCharCode("abc".charCodeAt(1)-32)+String.fromCharCode("abc".charCodeAt(2)-32);
alert(y);
//Ler uma palavra e retorna-lá invertida em letras maiúculas
var a=prompt("Digite uma palavra");
var C=-1;
var C1=a.length
var BU="";
while(C1!=C){
	BU+=a.charAt(C1)
	C1--;
}
alert(BU.toUpperCase());
//Repetir
var y="abc ".repeat(2);
alert(y);
//Mostrar em qual posição está a letra,se der -1 não achou a letra/palavra
var a="banana";
var p1=a.indexOf("n");
alert(p1);
//
alert(a.startsWith("banana";//Começa com "banana" /true
alert(a.endsWith("banana")//Termina com "banana"/false
//Pegar a posição e pegar tudo que vier a frente
var b="raciocínio lógico";
alert(b.substr(11));//"lógico"
alert(b.substring(7));//"lógico"
//Pega duma posição a outra
alert(b.substr(11,3));//"lóg"//Pega da posição 11 e só pega 3 caracters a frente
alert(b.substring(11,14));//"lóg"//Pega da posição 11 (inicio) e 14(fim)
//Substituir um erro
alert(b.replace("lógico","matemático"));//Quem quer trocar e pelo que
//Retira os espaços do início e do fim da palavra
alert(b.trim());
//Ler uma palavra e retornar quantas vogais a numa palavra 
var a=prompt("Digite uma palavra").toLowerCase();
var C=-1;
var C1=a.length;
var BU="";
var acer=0;
while(C1!=C){
	BU=a.charAt(C1);
	if(BU=="a"){
		acer++;
	}
	if(BU=="e"){
		acer++;
	}
	if(BU=="i"){
		acer++;
	}
	if(BU=="o"){
		acer++;
	}
	if(BU=="u"){
		acer++;
	}
	C1--;
}
alert(acer);
//Ver quantas não há repitidas
var a=prompt("Digite uma palavra").toLowerCase();
var C1=a.length;
var C=-1;
var acer=0;
var S;
while(C1==C){
	S=a.charAt(C1);
	if(S=="a"){
		acer++
	}
	C1--;
}
alert(acer);
//cortar string 
S="testando o slice";
S.slice(13);//ice
s.slice(11,16);//inicio e fim
s.includes("ice")//se está incluindo na string
//ler uma frase e remover os espaços em brancos e ler uma palavra inverter letras minusculas e maiusculas
var a=prompt("Digite uma palavra");
var C1=a.length;
var BU=0;
var C=0;
var BU2="";
while(C1!=C){
	BU=a.charCodeAt(C);
	if((BU>=97)&&(BU<=122)){
		BU=BU-32;
	}
	if((BU>=65)&&(BU<=90)){
		BU=BU+32;
	}
	BU2+=BU;
	C++;
}
alert(BU2);

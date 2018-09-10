//mostra número de 1 a 10 juntos e separados
var N;
N=1;
BU=" ";
while	(N!=10){
	BU+=N+" ";	
	N++;
}
alert(BU);
//Exibir todos os anos bissestos dentro de uma faixa de ano determinada pelo usuário
var N,N1,BU;
N=parseInt(prompt("Digite o 1 ano"));
N1=parseInt(prompt("Digite o 2 ano"));
BU=" ";
while	(N<=N1){
	if	(N%4==0){
		BU+=N+" ";
	}
        N++;
}
alert(BU);
//Ler 10 números e mostrar a soma destes números
J=1;
S=0;
while	(J<=10){
	J++;
	N=parseInt(prompt("Digite o número"));
	S+=N;
}
alert(S);
//Ler números infinitamentes até ser digitado valor 0,somar e fazer a média
var J,BU,N,M;
J=-1;
N=1;
BU=0;
M=0
while	(N!=0){
	N=parseInt(prompt("Digite o número"));	
	BU+=N;
	J++;
	M=BU/J;
}
alert("Soma: "+BU);
alert("Média: "+M);
//Calcular uma multiplicação sem usar o sinal
var V=parseInt(prompt("Digite o número de vezes"));
var S=parseInt(prompt("Digite o número para somar"));
var S1=0
var	V1=0
while(V1!=V){
	V1++
	S1+=S
}
alert(S1);
//Calcular uma divisão sem usar o sinal
var N=0
var S=parseInt(prompt("Digite o número"));
var V=parseInt(prompt("Digite o número de vezes"));
while(V>0){
	V--;
	N++
}
alert(N);
//calcular fatorial de n
var N=parseInt(prompt("Digite um fatorial"));
var N1=1;
var C=0;
var BU=1;
while(N!=C){
	C++;
	BU*=N1;
	N1++;
}
alert(BU);
//Sequência de fibonate
var P=parseInt(prompt("Digite a posição"));
var N1=1;
var N2=1;
var N3=0;
var N4=0;
while(P>2){
	N3=N1+N2;
	N1=N2;
	N2=N3;
	P--;
}
alert(N1);
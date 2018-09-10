//Tabuleiro de 1 a 9;
var N=1;
var C=1;
var M="";
while(N<=9){
	while(C<=10){
		M+=N+"x"+C+"="+N*C+"\n";
		C++;
	}
	N++
	C=1;
}
alert(M);
//Fazer jogo de adivinhação 
1-Fácil-10-3
2-Médio-100-10
3-Dificil-500-20
Dica se é maior ou menor,disser número já que não acertou
var C;
var V=2;
C=Math.random();
C=Math.trunc(C*10);
P=parseInt(prompt("Niveis:\n1-Fácil\n2-Médio\n3-Difícil"));
switch(P){
	case 1:
		P=parseInt(prompt("Chute um número (0-10)"));
		while(V!=0){
			P=parseInt(prompt("Erroouuu!Chute um número:"));
			--V;
			if(V==1){
				if(C%2==0){
					alert("O número é par");
				}
				if(C%2!=0){
					alert("O número é impar");
				}
			}
		}
		alert("O número era "+C);
}
if(P==C){
alert("Você ganhou,fim do jogo :)");
}
if(P!=C){
	alert("Você perdeu,fim do jogo :(");
}
var C;
var V;
C=Math.random();
C=Math.trunc(C*10);
if(C==0){
	C++;
}
P=parseInt(prompt("Niveis:\n1-Fácil\n2-Médio\n3-Difícil"));
switch(P){
	case 1:
		V=3;
		while(V!=0){
			P=parseInt(prompt("Chute um número (1-10),digite zero para receber a dica"));
			--V;
			if(P==0){
				if(C%2==0){
					alert("O número é par");
				}
				if(C%2!=0){
					alert("O número é impar");
				}
				++V
			}
		}
}
if(P==C){
alert("Você ganhou,fim do jogo ");
}
if(P!=C){
	alert("Você perdeu,fim do jogo ");
}



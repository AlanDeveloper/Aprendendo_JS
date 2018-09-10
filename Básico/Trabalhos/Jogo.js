var C;
var C2;
var C3;
var V;
C=Math.floor(Math.random() * 10);
C2=C;
C3=C;
alert("Bem-Vindo jogo da sorte");
if(C==0){
	C++;
}
P=parseInt(prompt("Niveis:\n1-Fácil\n2-Médio\n3-Difícil"));
switch(P){
	case 1:
		V=3;
		while(V!=0){
			P=parseInt(prompt("Chute um número (1-10)\nDigite 0 para mostrar ou repetir a dica\n"+V+" tentativas"));
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
			if(P==C){
				alert("Você ganhou,fim do jogo ");
				V=0
			}
		}break;
	case 2:
		C=Math.floor(Math.random() * 100);
		V=10;
		while(V!=0){
			P=parseInt(prompt("Chute um número (1-100)\nDigite 0 ou 111 para ver as dicas ou repetir\n"+V+" tentativas"));
			--V;
			if(P==0){
				if(C%2==0){
					alert("O número é par");
				}
				if(C%2!=0){
					alert("O número é impar");
				}
				V++
			}
			if(P==111){
				C2=C
				C3=C
				C2=C+20
				C3=C-5
				alert("O número está entre "+C3+" e "+C2);
				++V
			}
			if(P==C){
				alert("Você ganhou,fim do jogo ");
				V=0
			}
		}break;
	case 3:
		C=Math.floor(Math.random() * 1000);		
		V=20;
		while(V!=0){
			P=parseInt(prompt("Chute um número (1-500)\nDigite 0,1111 ou 2222 para ver as dicas ou repetir\n"+V+" tentativas"));
			--V;
			if(P==0){
				if(C%2==0){
					alert("O número é par");
				}
				if(C%2!=0){
					alert("O número é impar");
				}
				V++
			}
			if(P==1111){
				C2=C
				C3=C
				C2=C+20
				C3=C-5
				alert("O número está entre "+C3+" e "+C2);
				++V
			}
			if(P==2222){
				P=parseInt(prompt("Diga um número"));
				if(C>P){
					alert("Mais alto");
				}
				if(C<P){
					alert("Mais baixo");
				}
			}
			if(P==C){
				alert("Você ganhou,fim do jogo ");
				V=0
			}
		}break;
}
if(P!=C){
	alert("Você perdeu,fim do jogo ");
}

//Trabalho concurso público
var P1;
var n1=0;
var S1;
var n2=0;
var P2;
var n3=0;
var S2;
var n4=0;
var T2;
var n5=0;
var nins=1;
var nf;
var C=-1;
var C1=-1;
var C2=0;
var C3=3;
var C4=0;
var T1;
var T2;
var T3;
var Bu="";
var ni;
var R;
var A=0;
var E=0;
var nport=0;
var nmat=0;
var nesp=0;
var nmat1=0;
var nesp1=0;
var nmat2=0;
var nesp2=0;
var nmat3=0;
var nesp3=0;
var nmat4=0;
var nesp4=0;
var nmat5=0;
var nesp5=0;
var nas=0;
var nas1=0;
var nas2=0;
var nas3=0;
var nas4=0;
var nas5=0;
while(nins!=0){
	nins=prompt("Número de Inscrição:");
	if(nins!=0){
		while(C4!=1){
			nas=parseInt(prompt("Digite sua data de nascimento DDMMAAAA\nAno sendo contado desde 1000 até hoje"));
			T1=Math.trunc((nas/1000000));
			if((T1>=1)&&(T1<=30)){
				T2=Math.trunc(((Math.trunc(nas/10000)/100)-T1)*100)
				if((T2>=1)&&(T2<=12)){
					T3=Math.trunc(((((nas/1000000)-T1)*100)-T2)*10000)			
					if(T2<10){
						T2="0"+T2;
					}
					if(T1<10){
						T1="0"+T1;
					}
					Bu=T3+Bu+T2+Bu+T1;			
					C4=1;
				}
				else{
					alert("Digite um mês válido dentre 1-12");
				}
			}
			else{
				alert("Digite um dia válido dentre 1-30");
			}
		}
		ni=parseInt(prompt("Qual seu nível? \n 1-Superior \n 2-Técnico"));
		alert("Pegue sua prova e resposta o gabarito e veja sua nota\n1=A\n2=B\n3=C\n4=D\n5=E\n6=Não sei");
		alert("Prova de Português");
		C2=0;
		C3=3;
		A=0;
		E=0;			
		while(C2<15){
			C2++;
			R=parseInt(prompt("Resposta?"));
			if(R==C3){
				A++;
			}
			if(R!=C3){
				if(R==6){
				}
				else{
					E++;
				}
			}
			C3++;
			if(C3==6){
				C3=1;
			}
		}
		nport=((10*A)-(0.2*E))/15;
		C2=0;
		C3=3;
		A=0;
		E=0;
		alert("Prova de Conhecimentos");
		while(C2<20){
			C2++;
			R=parseInt(prompt("Resposta?"));
			if(R==C3){
				A++;
			}
			if(R!=C3){
				if(R==6){
				}
				else{
					E++;
				}
			}
			C3++;
			if(C3==6){
				C3=1;
			}
		}
		nesp=((10*A)-(0.2*E))/20;
		C2=0;
		C3=3;
		A=0;
		E=0;
		alert("Prova de Matemática e Raciocínio Lógico");
		while(C2<15){
			C2++;
			R=parseInt(prompt("Resposta?"));
			if(R==C3){
				A++;
			}
			if(R!=C3){
				if(R==6){
				}
				else{
					E++;
				}
			}
			C3++;
			if(C3==6){
				C3=1;
			}
		}
		nmat=((10*A)-(0.2*E))/15;
		C2=0;
		A=0;
		E=0;
		nf = ((2*nport)+(2*nmat)+(6*nesp))/10;
		if((nf<6)&&(nesp<6)&&(nmat<6)&&(nport<6)){
			ni=0;
			alert("Candidato não apto");
		}
		if(ni==1){
			C++;
			if(nf>n1){
				S1=P1;
				n2=n1;
				nesp2=nesp1;
				nmat2=nmat1;
				nas2=nas1;				
				P1=nins;
				n1=nf;
				nesp1=nesp;
				nmat1=nmat;
				nas1=nas;
			}
			if(nf==n1){
				if(nesp1<nesp){
					S1=P1;
					n2=n1;
					nesp2=nesp1;
					nmat2=nmat1;
					nas2=nas1;				
					P1=nins;
					n1=nf;
					nesp1=nesp;
					nmat1=nmat;
					nas1=nas;
				}
				if(nesp1==nesp){
					if(nmat1<nmat){
						S1=P1;
						n2=n1;
						nesp2=nesp1;
						nmat2=nmat1;
						nas2=nas1;			
						P1=nins;
						n1=nf;
						nesp1=nesp;
						nmat1=nmat;
						nas1=nas;
					}
					if(nmat1==nmat){
						if(nas1>nas){
							S1=P1;
							n2=n1;
							nesp2=nesp1;
							nmat2=nmat1;
							nas2=nas1;				
							P1=nins;
							n1=nf;
							nesp1=nesp;
							nmat1=nmat;
							nas1=nas;
						}
						if(nas1==nas){
							if(P1>nins){
								S1=P1;
								n2=n1;
								nesp2=nesp1;
								nmat2=nmat1;
								nas2=nas1;				
								P1=nins;
								n1=nf;
								nesp1=nesp;
								nmat1=nmat;
								nas1=nas;
							}
							if(P1<nins){
								S1=nins;
								n2=nf;
								nesp2=nesp;
								nmat2=nmat;
								nas2=nas;
							}
						}
						if(nas1<nas){
							S1=nins;
							n2=nf;
							nesp2=nesp;
							nmat2=nmat;
							nas2=nas;
						}
					}
					if(nmat1>nmat){
							S1=nins;
							n2=nf;
							nesp2=nesp;
							nmat2=nmat;
							nas2=nas;
					}
				}
				if(nesp1>nesp){
					S1=nins;
					n2=nf;
					nesp2=nesp;
					nmat2=nmat;
					nas2=nas;
				}
			}
			else{
				if(nf>n2){
					S1=nins;
					n2=nf;				
					nesp2=nesp;
					nmat2=nmat;
					nas2=nas;
				}
				if(nf==n2){
					if(nesp2<nesp){				
						S1=nins;
						n2=nf;
						nesp2=nesp;
						nmat2=nmat;
						nas2=nas;
					}
					if(nesp2==nesp){
						if(nmat2<nmat){			
							S1=nins;
							n2=nf;
							nesp2=nesp;
							nmat2=nmat;
							nas2=nas;
						}
						if(nmat2==nmat){
							if(nas2>nas){				
								S1=nins;
								n2=nf;
								nesp2=nesp;
								nmat2=nmat;
								nas2=nas;
							}
							if(nas2==nas){
								if(S1>nins){				
									S1=nins;
									n2=nf;
									nesp2=nesp;
									nmat2=nmat;
									nas2=nas;
								}
							}
						}
					}
				}
			}
		}
		if(ni==2){
			C1++;
			if(nf>n3){
				S2=P2;
				n4=n3;
				nesp4=nesp3;
				nmat4=nmat3;
				nas4=nas3;				
				P2=nins;
				n3=nf;
				nesp3=nesp;
				nmat3=nmat;
				nas3=nas;
			}
			if(nf==n3){
				if(nesp3<nesp){
					S2=P2;
					n4=n3;
					nesp4=nesp3;
					nmat4=nmat3;
					nas4=nas3;				
					P2=nins;
					n3=nf;
					nesp3=nesp;
					nmat3=nmat;
					nas3=nas;
				}
				if(nesp3==nesp){
					if(nmat3<nmat){
						S2=P2;
						n4=n3;
						nesp4=nesp3;
						nmat4=nmat3;
						nas4=nas3;			
						P2=nins;
						n3=nf;
						nesp3=nesp;
						nmat3=nmat;
						nas3=nas;
					}
					if(nmat3==nmat){
						if(nas3>nas){
							S2=P2;
							n4=n3;
							nesp4=nesp3;
							nmat4=nmat3;
							nas4=nas3;				
							P2=nins;
							n3=nf;
							nesp3=nesp;
							nmat3=nmat;
							nas3=nas;
						}
						if(nas3==nas){
							if(P2>nins){
								S2=P2;
								n4=n3;
								nesp4=nesp3;
								nmat4=nmat3;
								nas4=nas3;				
								P2=nins;
								n3=nf;
								nesp3=nesp;
								nmat3=nmat;
								nas3=nas;
							}
							if(P2<nins){
								S2=nins;
								n4=nf;
								nesp4=nesp;
								nmat4=nmat;
								nas4=nas;
							}
						}
						if(nas3<nas){
							S2=nins;
							n4=nf;
							nesp4=nesp;
							nmat4=nmat;
							nas4=nas;
						}
					}
					if(nmat3>nmat){
							S2=nins;
							n4=nf;
							nesp4=nesp;
							nmat4=nmat;
							nas4=nas;
					}
				}
				if(nesp3>nesp){
					S2=nins;
					n4=nf;
					nesp4=nesp;
					nmat4=nmat;
					nas4=nas;
				}
			}
			if(nf>n4){
				T2=S2;
				n5=n4;
				nesp5=nesp4;
				nmat5=nmat4;
				nas5=nas4;				
				P2=nins;
				n4=nf;
				nesp4=nesp;
				nmat4=nmat;
				nas4=nas;
			}
			if(nf==n4){
				if(nesp4<nesp){
					T2=S2;
					n5=n4;
					nesp5=nesp4;
					nmat5=nmat4;
					nas5=nas4;				
					S2=nins;
					n4=nf;
					nesp4=nesp;
					nmat4=nmat;
					nas4=nas;
				}
				if(nesp4==nesp){
					if(nmat4<nmat){
						S2=P2;
						n5=n3;
						nesp5=nesp4;
						nmat5=nmat4;
						nas5=nas4;			
						S2=nins;
						n4=nf;
						nesp4=nesp;
						nmat4=nmat;
						nas4=nas;
					}
					if(nmat4==nmat){
						if(nas4>nas){
							T2=S2;
							n5=n3;
							nesp5=nesp4;
							nmat5=nmat4;
							nas5=nas4;				
							S2=nins;
							n4=nf;
							nesp4=nesp;
							nmat4=nmat;
							nas4=nas;
						}
						if(nas4==nas){
							if(S2>nins){
								T2=S2;
								n5=n3;
								nesp5=nesp4;
								nmat5=nmat4;
								nas5=nas4;				
								S2=nins;
								n4=nf;
								nesp4=nesp;
								nmat4=nmat;
								nas4=nas;
							}
							if(S2<nins){
								T2=nins;
								n5=nf;
								nesp5=nesp;
								nmat5=nmat;
								nas5=nas;
							}
						}
						if(nas4<nas){
							T2=nins;
							n5=nf;
							nesp5=nesp;
							nmat5=nmat;
							nas5=nas;
						}
					}
					if(nmat4>nmat){
							T2=nins;
							n5=nf;
							nesp5=nesp;
							nmat5=nmat;
							nas5=nas;
					}
				}
				if(nesp4>nesp){
					T2=nins;
					n5=nf;
					nesp5=nesp;
					nmat5=nmat;
					nas5=nas;
				}
			}
			else{
				if(nf>n5){
					T2=nins;
					n5=nf;				
					nesp5=nesp;
					nmat5=nmat;
					nas5=nas;
				}
				if(nf==n5){
					if(nesp5<nesp){				
						T2=nins;
						n5=nf;
						nesp5=nesp;
						nmat5=nmat;
						nas5=nas;
					}
					if(nesp5==nesp){
						if(nmat5<nmat){			
							T2=nins;
							n5=nf;
							nesp5=nesp;
							nmat5=nmat;
							nas5=nas;
						}
						if(nmat5==nmat){
							if(nas5>nas){				
								T2=nins;
								n5=nf;
								nesp5=nesp;
								nmat5=nmat;
								nas5=nas;
							}
							if(nas5==nas){
								if(T2>nins){				
									T2=nins;
									n5=nf;
									nesp5=nesp;
									nmat5=nmat;
									nas5=nas;
								}
							}
						}
					}
				}
			}
		}
	}
}
switch(C){
	case -1:
		alert("Nenhum candidato é do nível superior");
		break;
	case 0:
		alert("Nível Superior:\n"+P1+"\nNão")
		break;
	case 1:		
		alert("Nível Superior:\n"+P1+"\n"+S1);
		break;
}
switch(C1){
	case -1:
		alert("Nenhum candidato é do nível técnico");
		break;
	case 0:
		alert("Nível Técnico:\n"+P2+"\nNão\nNão");
		break;
	case 1:
		alert("Nível Técnico:\n"+P2+"\n"+S2+"\nNão");
		break;
	case 2:
		alert("Nível Técnico:\n"+P2+"\n"+S2+"\n"+T2);
		break;
}

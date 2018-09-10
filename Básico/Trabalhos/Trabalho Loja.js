var P,P1,P2,P3,P4,P5,P6,C,C1,C2,C3,C5,N,N1,N2,N3,N4,N5,V,S,NC,NC1,NC2;
C=0;
N=0;
C1=0;
N1=0;
C2=0;
N2=0;
C3=0;
N3=0;
C4=0;
N4=0;
C5=0;
N5=0;
alert("Bem-Vindo a nossa loja online");
P=prompt("Repita as letras que estão maiúsculas\nH-Hardware	 S-Software 	U-Utilitários");
switch(P){
	case "H":
		if	(P=="H"){
			P1=prompt("Repita as letras que estão maiúsculas\nP-Périfericos		 O-Outros");
			if	(P1=="P"){
				C=prompt("Repita as letras que estão maiúsculas\nMouse		R$5,00\nTeclado		R$8,00\nCaixa de Som	R$20,00\nFoNes		R$10,00");
				N=parseInt(prompt("Quantos?"));					
				break;			
			}
			if	(P1=="O"){
				C=prompt("Repita as letras que estão maiúsculas\nHD-500GB		R$50,00\nMemória Ram	R$125,00\nGabinete		R$80,00\nPlaca Mãe		R$150,00");
				N=parseInt(prompt("Quantos?"));			
				break;			
			}	
		}
	case "S":
		if	(P=="S"){
			C=prompt("Repita as letras que estão maiúsculas\nCompra de Jogos 	  R$5,00\nInslação de ProgramasR$20,00\nLimpeza			  R$10,00\nFormatação		  R$25,00\nErros				  R$30,00\nAtualização	  	  R$20,00");
			N=parseInt(prompt("Quantos?"));								
			break;		
		}
	case "U":
		if	(P=="U"){
			C=prompt("Repita as letras que estão maiúsculas\nPasta Térmica		        R$15,00\nPIncel				R$10,00\nÁlcool Isopropílico		R$20,00");
			N=parseInt(prompt("Quantos?"));		
			break;		
		}
			
}
P2=prompt("Quer comprar denovo na mesma categoria?(S/N)");
switch(P2){
	case "S":			
		if	(P=="H"){
			P1=prompt("Repita as letras que estão maiúsculas\nP-Périfericos		 O-Outros");
			if	(P1=="P"){
				C1=prompt("Repita as letras que estão maiúsculas\nMouse		R$5,00\nTeclado		R$8,00\nCaixa de Som	R$20,00\nFoNes		R$10,00");
				N1=parseInt(prompt("Quantos?"));							
				break;		
			}	
			if	(P1=="O"){
				C1=prompt("Repita as letras que estão maiúsculas\nHD-500GB			R$50,00\nMemória Ram	R$125,00\nGabinete		R$80,00\nPlaca Mãe		R$150,00");
				N1=parseInt(prompt("Quantos?"));			
				break;			
			}	
		}
		if	(P=="S"){
			C1=prompt("Repita as letras que estão maiúsculas\nCompra de Jogos 	  R$5,00\nInslação de ProgramasR$20,00\nLimpeza			  R$10,00\nFormatação		  R$25,00\nErros				  R$30,00\nAtualização	  	  R$20,00");
			N1=parseInt(prompt("Quantos?"));								
			break;	
		}
		if	(P=="U"){
			C1=prompt("Repita as letras que estão maiúsculas\nPasta Térmica		        R$15,00\nPIncel				R$10,00\nÁlcool Isopropílico		R$20,00");
			N1=parseInt(prompt("Quantos?"));							
			break;	
		}
}
P3=prompt("Comprar em outra categoria ?(S/N)");		
if	(P3=="S"){
	if	(P=="H"){
		S=prompt("Repita as letras que estão maiúsculas \nS-Software 	U-Utilitários");				
		if	(S=="S"){
			C2=prompt("Repita as letras que estão maiúsculas\nCompra de Jogos 	  R$5,00\nInslação de ProgramasR$20,00\nLimpeza			  R$10,00\nFormatação		  R$25,00\nErros				  R$30,00\nAtualização	  	  R$20,00");
			N2=parseInt(prompt("Quantos?"));
			P4=prompt("Quer comprar denovo na mesma categoria?(S/N)");				
		}
		if	(S=="U"){
			C2=prompt("Repita as letras que estão maiúsculas\nPasta Térmica		        R$15,00\nPIncel				R$10,00\nÁlcool Isopropílico		R$20,00");
			N2=parseInt(prompt("Quantos?"));
			P4=prompt("Quer comprar denovo na mesma categoria?(S/N)");			
		}	
	}
	if	(P=="S"){
		S=prompt("Repita as letras maiúsculas \nH-Hardware 	U-Utilitários");				
		if	(S=="H"){
			P1=prompt("Repita as letras que estão maiúsculas\nPérifericos		 Outros");
			if	(P1=="P"){
				C2=prompt("Repita as letras que estão maiúsculas\nMouse		R$5,00\nTeclado		R$8,00\nCaixa de Som	R$20,00\nFoNes		R$10,00");
				N2=parseInt(prompt("Quantos?"));
				P4=prompt("Quer comprar denovo na mesma categoria?(S/N)");										
			}
			if	(P1=="O"){
				C2=prompt("Repita as letras que estão maiúsculas\nHD-500GB			R$50,00\nMemória Ram	R$125,00\nGabinete		R$80,00\nPlaca Mãe		R$150,00");
				N2=parseInt(prompt("Quantos?"));
				P4=prompt("Quer comprar denovo na mesma categoria?(S/N)");						
			}
		}
		if	(S=="U"){
			C2=prompt("Repita as letras que estão maiúsculas\nPasta Térmica		        R$15,00\nPIncel				R$10,00\nÁlcool Isopropílico		R$20,00");
			N2=parseInt(prompt("Quantos?"));
			P4=prompt("Quer comprar denovo na mesma categoria?(S/N)");			
		}
	}
	if	(P=="U"){
		S=prompt("Repita as letras maiúsculas \nH-Hardware 	S-Software");				
		if	(S=="H"){
			P1=prompt("Repita as letras que estão maiúsculas\nPérifericos		 Outros");
			if	(P1=="P"){
				C2=prompt("Repita as letras que estão maiúsculas\nMouse		R$5,00\nTeclado		R$8,00\nCaixa de Som	R$20,00\nFoNes		R$10,00");
				N2=parseInt(prompt("Quantos?"));
				P4=prompt("Quer comprar denovo na mesma categoria?(S/N)");								
			}
			if	(P1=="O"){
				C2=prompt("Repita as letras que estão maiúsculas\nHD-500GB			R$50,00\nMemória Ram	R$125,00\nGabinete		R$80,00\nPlaca Mãe		R$150,00");
				N2=parseInt(prompt("Quantos?"));
				P4=prompt("Quer comprar denovo na mesma categoria?(S/N)");						
			}
		}
		if	(S=="S"){
				C2=prompt("Repita as letras que estão maiúsculas\nCompra de Jogos 	  R$5,00\nInslação de ProgramasR$20,00\nLimpeza			  R$10,00\nFormatação		  R$25,00\nErros				  R$30,00\nAtualização	  	  R$20,00");
				N2=parseInt(prompt("Quantos?"));
				P4=prompt("Quer comprar denovo na mesma categoria?(S/N)");				
		}
		}
}
switch(P4){
	case "S":
		if	(S=="H"){
			P1=prompt("Repita as letras que estão maiúsculas\nP-Périfericos		 O-Outros");
			if	(P1=="P"){
				C3=prompt("Repita as letras que estão maiúsculas\nMouse		R$5,00\nTeclado		R$8,00\nCaixa de Som	R$20,00\nFoNes		R$10,00");
				N3=parseInt(prompt("Quantos?"));
				P5=prompt("Quer comprar em outra categoria?(S/N)");							
				break;		
			}	
			if	(P1=="O"){
				C3=prompt("Repita as letras que estão maiúsculas\nHD-500GB			R$50,00\nMemória Ram	R$125,00\nGabinete		R$80,00\nPlaca Mãe		R$150,00");
				N3=parseInt(prompt("Quantos?"));
				P5=prompt("Quer comprar em outra categoria?(S/N)");			
				break;			
			}	
		}
		if	(S=="S"){
			C3=prompt("Repita as letras que estão maiúsculas)\nCompra de Jogos 	  R$5,00\nInslação de ProgramasR$20,00\nLimpeza			  R$10,00\nFormatação		  R$25,00\nErros				  R$30,00\nAtualização	  	  R$20,00");
			N3=parseInt(prompt("Quantos?"));
			P5=prompt("Quer comprar em outra categoria?(S/N)");								
			break;	
		}
		if	(S=="U"){
			C3=prompt("Repita as letras que estão maiúsculas\nPasta Térmica		        R$15,00\nPIncel				R$10,00\nÁlcool Isopropílico		R$20,00");
			N3=parseInt(prompt("Quantos?"));
			P5=prompt("Quer comprar em outra categoria?(S/N)");							
			break;	
		}
	case "N":
		P5=prompt("Quer comprar em outra categoria?(S/N)");
}
switch(P5){
	case "S":
		switch(P){
			case "H":
				if	(S=="U"){	
					C4=prompt("Repita as letras que estão maiúsculas\nCompra de Jogos 	  R$5,00\nInslação de ProgramasR$20,00\nLimpeza			  R$10,00\nFormatação		  R$25,00\nErros				  R$30,00\nAtualização	  	  R$20,00");
					N4=parseInt(prompt("Quantos?"));
					P6=prompt("Quer comprar na mesma categoria denovo?(S/N)");
					break;
				}
				if	(S=="S"){
					C4=prompt("Repita as letras que estão maiúsculas\nPasta Térmica		        R$15,00\nPIncel				R$10,00\nÁlcool Isopropílico		R$20,00");
					N4=parseInt(prompt("Quantos?"));
					P6=prompt("Quer comprar na mesma categoria denovo?(S/N)");
					break;	
				}
			case "S":
				if	(S=="U"){
					P1=prompt("Repita as letras que estão maiúsculas\nP-Périfericos		 O-Outros");
					if	(P1=="P"){
						C4=prompt("Repita as letras que estão maiúsculas\nMouse		R$5,00\nTeclado		R$8,00\nCaixa de Som	R$20,00\nFoNes		R$10,00");
						N4=parseInt(prompt("Quantos?"));
						P6=prompt("Quer comprar na mesma categoria denovo?(S/N)");	
						break;			
					}
					if	(P1=="O"){
						C4=prompt("Repita as letras que estão maiúsculas\nHD-500GB			R$50,00\nMemória Ram	R$125,00\nGabinete		R$80,00\nPlaca Mãe		R$150,00");
						N4=parseInt(prompt("Quantos?"));
						P6=prompt("Quer comprar na mesma categoria denovo?(S/N)");
						break;			
					}
				}
				if	(S=="H"){	
					C4=prompt("Repita as letras que estão maiúsculas\nPasta Térmica		        R$15,00\nPIncel				R$10,00\nÁlcool Isopropílico		R$20,00");
					N4=parseInt(prompt("Quantos?"));
					P6=prompt("Quer comprar na mesma categoria denovo?(S/N)");
					break;	
				}
			case "U":
				if	(S=="H"){	
					C4=prompt("Repita as letras que estão maiúsculas\nCompra de Jogos 	  R$5,00\nInslação de ProgramasR$20,00\nLimpeza			  R$10,00\nFormatação		  R$25,00\nErros				  R$30,00\nAtualização	  	  R$20,00");
					N4=parseInt(prompt("Quantos?"));
					P6=prompt("Quer comprar na mesma categoria denovo?(S/N)");
					break;
					
				}
				if	(S=="S"){
					P1=prompt("Repita as letras que estão maiúsculas\nP-Périfericos		 O-Outros");
					if	(P1=="P"){
						C4=prompt("Repita as letras que estão maiúsculas\nMouse		R$5,00\nTeclado		R$8,00\nCaixa de Som	R$20,00\nFoNes		R$10,00");
						N4=parseInt(prompt("Quantos?"));
						P6=prompt("Quer comprar na mesma categoria denovo?(S/N)");	
						break;			
					}
					if	(P1=="O"){
						C4=prompt("Repita as letras que estão maiúsculas\nHD-500GB			R$50,00\nMemória Ram	R$125,00\nGabinete		R$80,00\nPlaca Mãe		R$150,00");
						N4=parseInt(prompt("Quantos?"));
						P6=prompt("Quer comprar na mesma categoria denovo?(S/N)");
						break;			
					}
				}
		}
}
switch(P6){
	case "N":
		break;
	case "S":
		switch(P){
			case "H":
				if	(S=="U"){	
					C5=prompt("Repita as letras que estão maiúsculas\nCompra de Jogos 	  R$5,00\nInslação de ProgramasR$20,00\nLimpeza			  R$10,00\nFormatação		  R$25,00\nErros				  R$30,00\nAtualização	  	  R$20,00");
					N5=parseInt(prompt("Quantos?"));
					break;
				}
				if	(S=="S"){
					C5=prompt("Repita as letras que estão maiúsculas\nPasta Térmica		        R$15,00\nPIncel				R$10,00\nÁlcool Isopropílico		R$20,00");
					N5=parseInt(prompt("Quantos?"));
					break;	
				}
			case "S":
				if	(S=="U"){
					P1=prompt("Repita as letras que estão maiúsculas\nP-Périfericos		 O-Outros");
					if	(P1=="P"){
						C5=prompt("Repita as letras que estão maiúsculas\nMouse		R$5,00\nTeclado		R$8,00\nCaixa de Som	R$20,00\nFoNes		R$10,00");
						N5=parseInt(prompt("Quantos?"));	
						break;			
					}
					if	(P1=="O"){
						C5=prompt("Repita as letras que estão maiúsculas\nHD-500GB			R$50,00\nMemória Ram	R$125,00\nGabinete		R$80,00\nPlaca Mãe		R$150,00");
						N5=parseInt(prompt("Quantos?"));
						break;			
					}
				}
				if	(S=="H"){	
					C5=prompt("Repita as letras que estão maiúsculas\nPasta Térmica		        R$15,00\nPIncel				R$10,00\nÁlcool Isopropílico		R$20,00");
					N5=parseInt(prompt("Quantos?"));
					break;
				}
			case "U":
				if	(S=="H"){	
					C5=prompt("Repita as letras que estão maiúsculas\nCompra de Jogos 	  R$5,00\nInslação de ProgramasR$20,00\nLimpeza			  R$10,00\nFormatação		  R$25,00\nErros				  R$30,00\nAtualização	  	  R$20,00");
					N5=parseInt(prompt("Quantos?"));
					break;
					
				}
				if	(S=="S"){
					P1=prompt("Repita as letras que estão maiúsculas\nP-Périfericos		 O-Outros");
					if	(P1=="P"){
						C5=prompt("Repita as letras que estão maiúsculas\nMouse		R$5,00\nTeclado		R$8,00\nCaixa de Som	R$20,00\nFoNes		R$10,00");
						N5=parseInt(prompt("Quantos?"));	
						break;			
					}
					if	(P1=="O"){
						C5=prompt("Repita as letras que estão maiúsculas\nHD-500GB			R$50,00\nMemória Ram	R$125,00\nGabinete		R$80,00\nPlaca Mãe		R$150,00");
						N5=parseInt(prompt("Quantos?"));
						break;			
					}
				}
		}
}
switch(C){
	case "T":
		C=8;
		C=C*N;
		NC="Teclado";
		break;
	case "M":
		C=5;
		C=C*N;
		NC="Mouse";
		break;
	case "CS":
		C=20;
		C=C*N;
		NC="Caixas de Som";	
		break;
	case "FN":
		C=10;
		C=C*N;
		NC="Fones";		
		break;
	case "HD":
		C=75;
		C=C*N;
		NC="HD";		
		break;
	case "MR":
		C=125;
		C=C*N;
		NC="Memória Ram";			
		break;
	case "G":
		C=80;
		C=C*N;
		NC="Gabinete";		
		break;
	case "PM":
		C=150;
		C=C*N;
		NC="Placa Mãe";	
		break;
	case "IP":
		C=20;
		C=C*N;
		NC="Instalação de Programas";	
		break;
	case "L":
		C=10;
		C=C*N;
		NC="Limpeza";
		break;
	case "F":
		C=25;
		C=C*N;
		NC="Formatação";			
		break;
	case "E":
		C=30;
		C=C*N;
		NC="Erros";	
		break;
	case "A":
		C=20;
		C=C*N;
		NC="Atualização";			
		break;
	case "PT":
		C=15;
		C=C*N;
		NC="Pasta Térmica";			
		break;
	case "PI":
		C=10;
		C=C*N;
		NC="PIncel";		
		break;
	case "AI":
		C=20;
		C=C*N;
		NC="Álcool Isopropílico";			
		break;
	case "CJ":
		C=5;
		C=C*N;
		NC="Compra de Jogos";		
		break;
}
switch(P2){
	case "S":
		switch(C1){
			case "T":
				C1=8;
				C1=C1*N1;		
				C=C+C1;
				NC=NC+",Teclado";				
				break;
			case "M":
				C1=5;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Mouse";
				break;
			case "CS":
				C1=20;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Caixa de Som";
				break;
			case "FN":
				C1=10;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Fone";
				break;
			case "HD":
				C1=75;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",HD";
				break;
			case "MR":
				C1=125;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Memória Ram";
				break;
			case "G":
				C1=80;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Gabinete";
				break;
			case "PM":
				C1=150;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Placa Mãe";
				break;
			case "IP":
				C1=20;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Instalação de programas";
				break;
			case "L":
				C1=10;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Limpeza";
				break;
			case "F":
				C1=25;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Formatação";
				break;
			case "E":
				C1=30;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Erros";
				break;
			case "A":
				C1=20;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Atualização";
				break;
			case "PT":
				C1=15;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Pasta Térmica";
				break;
			case "PI":
				C1=10;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",PIncel";
				break;
			case "AI":
				C1=20;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Álcool Isopropílico";
				break;
			case "CJ":
				C1=5;
				C1=C1*N1;
				C=C+C1;
				NC=NC+",Compra de jogos";
				break;
		}
}	
switch(C2){
	case "T":
		C2=8;
		C2=C2*N2;
		NC1="Teclado";
		break;
	case "M":
		C2=5;
		C2=C2*N2;
		NC1="Mouse";
		break;
	case "CS":
		C2=20;
		C2=C2*N2;
		NC1="Caixas de Som";	
		break;
	case "FN":
		C2=10;
		C2=C2*N2;
		NC1="Fones";	
		break;
	case "HD":
		C2=75;
		C2=C2*N2;
		NC1="HD";			
		break;
	case "MR":
		C2=125;
		C2=C2*N2;
		NC1="Memória Ram";			
		break;
	case "G":
		C2=80;
		C2=C2*N2;
		NC1="Gabinete";
		break;
	case "PM":
		C2=150;
		C2=C2*N2;
		NC1="Placa Mãe";
		break;
	case "IP":
		C2=20;
		C2=C2*N2;
		NC1="Instalação de Programas";
		break;
	case "L":
		C2=10;
		C2=C2*N2;
		NC1="Limpeza";
		break;
	case "F":
		C2=25;
		C2=C2*N2;
		NC1="Formatação";			
		break;
	case "E":
		C2=30;
		C2=C2*N2;
		NC1="Erros";		
		break;
	case "A":
		C2=20;
		C2=C2*N2;
		NC1="Atualização";			
		break;
	case "PT":
		C2=15;
		C2=C2*N2;
		NC1="Pasta Térmica";			
		break;
	case "PI":
		C2=10;
		C2=C2*N2;
		NC1="PIncel";	
		break;
	case "AI":
		C2=20;
		C2=C2*N2;
		NC1="Álcool Isopropílico";			
		break;
	case "CJ":
		C2=5;
		C2=C2*N2;
		NC1="Compra de Jogos";		
		break;
}
switch(P4){
	case "S":
		switch(C3){
			case "T":
				C3=8;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Teclado";
				break;
			case "M":
				C3=5;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Mouse";
				break;
			case "CS":
				C3=20;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Caixa de Som";
				break;
			case "FN":
				C3=10;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Fone";
				break;
			case "HD":
				C3=75;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",HD";
				break;
			case "MR":
				C3=125;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Memória Ram";
				break;
			case "G":
				C3=80;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Gabinete";
				break;
			case "PM":
				C3=150;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Placa Mãe";
				break;
			case "IP":
				C3=20;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Instalação de Programas";
				break;
			case "L":
				C3=10;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Limpeza";	
				break;
			case "F":
				C3=25;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Formatação";
				break;
			case "E":
				C3=30;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Erros";
				break;
			case "A":
				C3=20;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Atualização";
				break;
			case "PT":
				C3=15;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Pasta Térmica";
				break;
			case "PI":
				C3=10;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",PIncel";
				break;
			case "AI":
				C3=20;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Álcool Isopropílico";
				break;
			case "CJ":
				C3=5;
				C3=C3*N3;
				C2=C2+C3;
				NC1=NC1+",Compra de Jogos";
				break;
		}
}
switch(C4){
	case "T":
		C4=8;
		C4=C4*N4;
		NC2="Teclado";
		break;
	case "M":
		C4=5;
		C4=C4*N4;
		NC2="Mouse";
		break;
	case "CS":
		C4=20;
		C4=C4*N4;
		NC2="Caixas de Som";	
		break;
	case "FN":
		C4=10;
		C4=C4*N4;
		NC2="Fones";	
		break;
	case "HD":
		C4=75;
		C4=C4*N4;
		NC2="HD";			
		break;
	case "MR":
		C4=125;
		C4=C4*N4;
		NC2="Memória Ram";			
		break;
	case "G":
		C4=80;
		C4=C4*N4;
		NC2="Gabinete";
		break;
	case "PM":
		C4=150;
		C4=C4*N4;
		NC2="Placa Mãe";
		break;
	case "IP":
		C4=20;
		C4=C4*N4;
		NC2="Instalação de Programas";
		break;
	case "L":
		C4=10;
		C4=C4*N4;
		NC2="Limpeza";
		break;
	case "F":
		C4=25;
		C4=C4*N4;
		NC2="Formatação";			
		break;
	case "E":
		C4=30;
		C4=C4*N4;
		NC2="Erros";		
		break;
	case "A":
		C4=20;
		C4=C4*N4;
		NC2="Atualização";			
		break;
	case "PT":
		C4=15;
		C4=C4*N4;
		NC2="Pasta Térmica";			
		break;
	case "PI":
		C4=10;
		C4=C4*N4;
		NC2="PIncel";	
		break;
	case "AI":
		C4=20;
		C4=C4*N4;
		NC2="Álcool Isopropílico";			
		break;
	case "CJ":
		C4=5;
		C4=C4*N4;
		NC2="Compra de Jogos";		
		break;
}
switch(P6){
	case "S":
		switch(C5){
			case "T":
				C5=8;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",Teclado";
				break;
			case "M":
				C5=5;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",Mouse";
				break;
			case "CS":
				C5=20;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",Caixa de Som";
				break;
			case "FN":
				C5=10;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",Fone";
				break;
			case "HD":
				C5=75;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",HD";
				break;
			case "MR":
				C5=125;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",Memória Ram";
				break;
			case "G":
				C5=80;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",Gabinete";
				break;
			case "PM":
				C5=150;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+" ,Placa Mãe";
				break;
			case "IP":
				C5=20;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",Instalação de Programas";
				break;
			case "L":
				C5=10;
				C5=C5*N5;
			        C4=C4+C5;
				NC2=NC2+" ,Limpeza";
				break;
			case "F":
				C5=25;
				C5=C5*N5;
		        	C4=C4+C5;
				NC2=NC2+",Formatação";
				break;
			case "E":
				C5=30;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",Erros";
				break;
			case "A":
				C5=20;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",Atualização";
				break;
			case "PT":
			        C5=15;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",Pasta Térmica";
				break;
			case "PI":
				C5=10;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",PIncel";
				break;
			case "AI":
				C5=20;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",Álcool Isopropílico";
				break;
			case "CJ":
				C5=5;
				C5=C5*N5;
				C4=C4+C5;
				NC2=NC2+",Compra de Jogos";
				break;
		}
}		
V1=C+C2+C4
V=C+C2
if	(P3=="N"){
	alert("Você comprou: "+NC+"\n Total a pagar:R$"+C+",00");
}
if	((P3=="S")&&(P5=="N")){
	alert("Você comprou: "+NC+","+NC1+"\n Total a pagar:R$"+V1+",00");
}
if	((P3=="S")&&(P5=="S")){
		alert("Você comprou: "+NC+","+NC1+","+NC2+"\n Total a pagar:R$"+V1+",00");
}
alert("Obrigado por visitar nossa loja volte sempre!");

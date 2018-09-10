var con1="ATO CÃO COTA TACO TOCA";
var co1=5;
var con2="CARO ARCO COAR ORCA ROCA";
var co2=5;
var con3="MAR ROA ROMA AMOR MORA RAMO";
var co3=6;
var con4="LAVE LEVA VALE VELA";
var co4=4;	
var con5="MAL AME ALÉM LEMA"
var co5=4;
var con6="ASA ASMA AMAS";
var co6=3;
var con7="VAI VIA LIA VILA VALI";
var co7=5;
var con8="RÉU DER DEU RUDE";
var co8=4;
var con9="DOR ORA ROA DOAR RODA";
var co9=5;
var con10="DOM MODA DAMO DOAM";
var co10=4;
var con11="CATO COTA CHATO TOCHA"
var co11=4;
var con12="BOA SOAM SOMA SAMBA"
var co12=4;
var con13="HORA NORA ORNA HONRA"
var co13=4;
var con14="ARCA ACHAR RACHA"
var co14=3;
var con15="ARMA CARA CAMA CARMA MARCA"
var co15=5;
var con16="SACA CASA CALA SALA CASAL LASCA"
var co16=6;
var con17="SENO ONDE DONS DENSO"
var co17=4;
var con18="TACO CACTO COCOTA"
var co18=3
var con19="ATEAR CERTA CEARA CARTA CARETA"
var co19=5;
var con20="OUTRA ATUAR ARAUTO AUTORA"
var co20=4;
var con21="ANEL NETA TELA LENTE LENTA ELEFANTE";
var co21=6;
var con22="MEIO REPRIMI REPRIMO OPRIMIR PRIMEIRO";
var co22=5;
var con23="ROUPA RAPTOU PASTOR TRAPOS POSTURA";
var co23=5;
var con24="ALIAM MANIA INALA ANIMAL LAMINA";
var co24=5;
var con25="ADUBO ROUBA DOBRA ABSURDO";
var co25=4;
var v33="";
var rr=5;
var m2="";
var v23=0;
var ind=0;
var oi=0;
var rr1="";
var v=-1;
var v1=0;
var e="";
var p=0;
var cont=0;
var r3="";
var nl=parseInt(prompt("Qual dificuldade?\n1-Fácil\n2-Médio\n3-Difícil"));
switch(nl){
	case 1:
		while(oi<1){
			rr=Math.floor(Math.random() * 10);
			var v8=m2.indexOf(rr);
			if(v8==-1){
					var m2=m2+","+rr;
					oi++;
			}
		}
		oi=0;
		switch(rr){
					case 1:
						rr1=con1;
						var r2=co1;
						r3="TOCA";
						break;
					case 2:
						rr1=con2;
						var r2=co2;
						r3="ROCA";
						break;
					case 3:
						rr1=con3;
						var r2=co3;
						r3="ARMO";
						break;
					case 4:
						rr1=con4;
						var r2=co4;
						r3="VELA";
						break;
					case 5:
						rr1=con5;
						var r2=co5;
						r3="MELA";
						break;
					case 6:
						rr1=con6;
						var r2=co6;
						r3="AMAS";
						break;
					case 7:
						rr1=con7;
						var r2=co7;
						r3="VALI";
						break;
					case 8:
						rr1=con8;
						var r2=co8;
						r3="RUDE";
						break;
					case 9:
						rr1=con9;
						var r2=co9;
						r3="RODA";
						break;
					case 10:
						rr1=con10;
						var r2=co10;
						r3="DOAM";
						break;
		}
		var num=rr1.length -1;
		var b="";
		var f="";
		while(num!=-1){
			f= rr1.charAt(num);
			if(f!=" "){
				f="-";
				b=f+""+b;
			}
			else{
				b=f+" "+b;
			}
			num--;
		}
		var e33="";
		var j1="";
		var iii=0;
		while(iii!=4){
			var j=Math.floor(Math.random() * 10);
			var c=r3.charAt(r3.indexOf(j));
			if(c>-1){
				var g=e33.indexOf(j);
				if(g==-1){
					e33=e33+""+j;
					if((j>-1)&&(j<=3)){
						var j1=j1+" "+r3.charAt(j);
						iii++
					}
				}
			}
		}
		while((ind!=1)&&(cont<11)){
			alert(b);
			if(plv==1){
				var e33="";
				var j1="";
				var iii=0;
				while(iii!=4){
					var j=Math.floor(Math.random() * 10);
					var c=r3.charAt(r3.indexOf(j));
					if(c>-1){
						var g=e33.indexOf(j);
						if(g==-1){
							e33=e33+""+j;
							if((j>-1)&&(j<=3)){
								var j1=j1+" "+r3.charAt(j);
								iii++
							}
						}
					}
				}
				p=p+2;
			}
			if(v23<=r2){
				var plv=prompt("Digite uma palavra "+j1).toUpperCase();
				if(plv=="CAO"){
					plv="CÃO";
				}
				if(plv=="REU"){
					plv="RÉU";
				}
				if(plv=="ALEM"){
					plv="ALÉM";
				}
			}
			var num=plv.length;
			var c=rr1.indexOf(plv);
			if(c==-1){
				if(plv==0){
				}
				if((plv!=1)&&(plv!=0)){
					alert("Você errou,tente novamente!");
					p=p+num;
				}
			}
			if(c>-1){
				var f=e.indexOf(plv);
				if((f==-1)&&(f!="")){
					var e=e+","+plv;
					if(num==3){
						v=v+3;
						b=b.replace("---",plv);
					}
					if(num==4){
						v=v+4;
						b=b.replace("----",plv);
					}
					alert("Acertou!");
					v33=v33+","+plv;
					v23++;
				}
				if((f>-1)&&(f!="")){
					alert("Repetindo as palavras?");
					p=p+3;
				}
			}
			if(plv==0){
				alert("Fim do jogo");
				ind++;
			}
			if((v23==r2)&&(v!="")){
				alert("Você ganhou está rodada!");
				if(cont!=9){
					jo=parseInt(prompt("Quer continuar jogando?\n 1-Sim\n 2-Não"));
					if(jo==1){
						v23=0;
						ind=0;
						cont++;
						e="";
						while(oi<1){
							rr=Math.floor(Math.random() * 10);
							var v8=m2.indexOf(rr);
							if(v8==-1){
									var m2=m2+","+rr;
									oi++;
							}
						}
						oi=0;
						switch(rr){
									case 1:
										rr1=con1;
										var r2=co1;
										r3="TOCA";
										break;
									case 2:
										rr1=con2;
										var r2=co2;
										r3="ROCA";
										break;
									case 3:
										rr1=con3;
										var r2=co3;
										r3="ARMO";
										break;
									case 4:
										rr1=con4;
										var r2=co4;
										r3="VELA";
										break;
									case 5:
										rr1=con5;
										var r2=co5;
										r3="MELA";
										break;
									case 6:
										rr1=con6;
										var r2=co6;
										r3="AMAS";
										break;
									case 7:
										rr1=con7;
										var r2=co7;
										r3="VALI";
										break;
									case 8:
										rr1=con8;
										var r2=co8;
										r3="RUDE";
										break;
									case 9:
										rr1=con9;
										var r2=co9;
										r3="RODA";
										break;
									case 10:
										rr1=con10;
										var r2=co10;
										r3="DOAM";
										break;
						}
						var num=rr1.length -1;
						var b="";
						var f="";
						while(num!=-1){
							f= rr1.charAt(num);
							if(f!=" "){
								f="-";
								b=f+""+b;
							}
							else{
								b=f+" "+b;
							}
							num--;
						}
						var e33="";
						var j1="";
						var iii=0;
						while(iii!=4){
							var j=Math.floor(Math.random() * 10);
							var c=r3.charAt(r3.indexOf(j));
							if(c>-1){
								var g=e33.indexOf(j);
								if(g==-1){
									e33=e33+""+j;
									if((j>-1)&&(j<=3)){
										var j1=j1+" "+r3.charAt(j);
										iii++
									}
								}
							}
						}
					}
				}
				if(jo==2){
					ind++;
				}
			}
		}
	break;
	case 2:
		while(oi<1){
			rr=Math.floor(Math.random() * 100);
			var v8=m2.indexOf(rr);
			if((v8==-1)&&(rr>=11)&&(rr<=20)){
				var m2=m2+","+rr;
				oi++;
			}
		}
		oi=0;
		switch(rr){
					case 11:
						rr1=con11;
						var r2=co11;
						r3="TOCHA";
						break;
					case 12:
						rr1=con12;
						var r2=co12;
						r3="SAMBA";
						break;
					case 13:
						rr1=con13;
						var r2=co13;
						r3="HONRA";
						break;
					case 14:
						rr1=con14;
						var r2=co14;
						r3="RACHA";
						break;
					case 15:
						rr1=con15;
						var r2=co15;
						r3="MARCA";
						break;
					case 16:
						rr1=con16;
						var r2=co16;
						r3="LASCA";
						break;
					case 17:
						rr1=con17;
						var r2=co17;
						r3="DENSO";
						break;
					case 18:
						rr1=con18;
						var r2=co18;
						r3="COCOTA";
						break;
					case 19:
						rr1=con19;
						var r2=co19;
						r3="CARETA";
						break;
					case 20:
						rr1=con20;
						var r2=co20;
						r3="AUTORA";
						break;
		}
		var num=rr1.length -1;
		var b="";
		var f="";
		while(num!=-1){
			f= rr1.charAt(num);
			if(f!=" "){
				f="-";
				b=f+""+b;
			}
			else{
				b=f+" "+b;
			}
			num--;
		}
		var e33="";
		var j1="";
		var iii=0;
		while(iii!=6){
			var j=Math.floor(Math.random() * 10);
			var c=r3.charAt(r3.indexOf(j));
			if(c>-1){
				var g=e33.indexOf(j);
				if(g==-1){
					e33=e33+""+j;
					if((j>-1)&&(j<=5)){
						var j1=j1+" "+r3.charAt(j);
						iii++
					}
				}
			}
		}
		while((ind!=1)&&(cont<11)){
			alert(b);
			if(plv==1){
				var e33="";
				var j1="";
				var iii=0;
				while(iii!=6){
					var j=Math.floor(Math.random() * 10);
					var c=r3.charAt(r3.indexOf(j));
					if(c>-1){
						var g=e33.indexOf(j);
						if(g==-1){
							e33=e33+""+j;
							if((j>-1)&&(j<=5)){
								var j1=j1+" "+r3.charAt(j);
								iii++
							}
						}
					}
				}
				p=p+2;
			}
			if(v23<=r2){
				var plv=prompt("Digite uma palavra "+j1).toUpperCase();
			}
			var num=plv.length;
			var c=rr1.indexOf(plv);
			if(c==-1){
				if(plv==0){
				}
				if((plv!=1)&&(plv!=0)){
					alert("Você errou,tente novamente!");
					p=p+""+num;
				}
			}
			if(c>-1){
				var f=e.indexOf(plv);
				if((f==-1)&&(f!="")){
					var e=e+","+plv;
					if(num==3){
						v=v+3;
						b=b.replace("---",plv);
					}
					if(num==4){
						v=v+4;
						b=b.replace("----",plv);
					}
					if(num==5){
						v=v+5;
						b=b.replace("-----",plv);
					}
					if(num==6){
						v=v+6;
						b=b.replace("------",plv);
					}
					alert("Acertou!");
					v33=v33+","+plv;
					v23++;
				}
				if((f>-1)&&(f!="")){
					alert("Repetindo as palavras?");
					p=p+3;
				}
			}
			if(plv==0){
				alert("Fim do jogo");
				ind++;
			}
			if((v23==r2)&&(v!="")){
				alert("Você ganhou está rodada!")
				if(cont!=9){
					jo=parseInt(prompt("Quer continuar jogando?\n 1-Sim\n 2-Não"));
				}
				if(jo==1){
					v23=0;
					ind=0;
					cont++;
					e="";
					while(oi<1){
						rr=Math.floor(Math.random() * 100);
						var v8=m2.indexOf(rr);
						if((v8==-1)&&(rr>=11)&&(rr<=20)){
							var m2=m2+","+rr;
							oi++;
						}
					}
					oi=0;
					switch(rr){
								case 11:
									rr1=con11;
									var r2=co11;
									r3="TOCHA";
									break;
								case 12:
									rr1=con12;
									var r2=co12;
									r3="SAMBA";
									break;
								case 13:
									rr1=con13;
									var r2=co13;
									r3="HONRA";
									break;
								case 14:
									rr1=con14;
									var r2=co14;
									r3="RACHA";
									break;
								case 15:
									rr1=con15;
									var r2=co15;
									r3="MARCA";
									break;
								case 16:
									rr1=con16;
									var r2=co16;
									r3="LASCA";
									break;
								case 17:
									rr1=con17;
									var r2=co17;
									r3="DENSO";
									break;
								case 18:
									rr1=con18;
									var r2=co18;
									r3="COCOTA";
									break;
								case 19:
									rr1=con19;
									var r2=co19;
									r3="CARETA";
									break;
								case 20:
									rr1=con20;
									var r2=co20;
									r3="AUTORA";
									break;
					}
					var num=rr1.length -1;
					var b="";
					var f="";
					while(num!=-1){
						f= rr1.charAt(num);
						if(f!=" "){
							f="-";
							b=f+""+b;
						}
						else{
							b=f+" "+b;
						}
						num--;
					}
					var e33="";
					var j1="";
					var iii=0;
					while(iii!=6){
						var j=Math.floor(Math.random() * 10);
						var c=r3.charAt(r3.indexOf(j));
						if(c>-1){
							var g=e33.indexOf(j);
							if(g==-1){
								e33=e33+""+j;
								if((j>-1)&&(j<=5)){
									var j1=j1+" "+r3.charAt(j);
									iii++
								}
							}
						}
					}
							}
				if(jo==2){
					ind++;
				}
			}
		}
	break;
	case 3:
		while(oi<1){
			rr=Math.floor(Math.random() * 100);
			var v8=m2.indexOf(rr);
			if((v8==-1)&&(rr>=21)&&(rr<=25)){
				var m2=m2+","+rr;
				oi++;
			}
		}
		oi=0;
		switch(rr){
					case 21:
						rr1=con21;
						var r2=co21;
						r3="ELEFANTE";
						break;
					case 22:
						rr1=con22;
						var r2=co22;
						r3="PRIMEIRO";
						break;
					case 23:
						rr1=con23;
						var r2=co23;
						r3="POSTURA";
						break;
					case 24:
						rr1=con24;
						var r2=co24;
						r3="LAMINA";
						break;
					case 25:
						rr1=con25;
						var r2=co25;
						r3="ABSURDO";
						break;
		}
		var num=rr1.length -1;
		var b="";
		var f="";
		while(num!=-1){
			f= rr1.charAt(num);
			if(f!=" "){
				f="-";
				b=f+""+b;
			}
			else{
				b=f+" "+b;
			}
			num--;
		}
		var e33="";
		var j1="";
		var iii=0;
		while(iii!=8){
			var j=Math.floor(Math.random() * 10);
			var c=r3.charAt(r3.indexOf(j));
			if(c>-1){
				var g=e33.indexOf(j);
				if(g==-1){
					e33=e33+""+j;
					if((j>-1)&&(j<=7)){
						var j1=j1+" "+r3.charAt(j);
						iii++
					}
				}
			}
		}
		while((ind!=1)&&(cont<6)){
			alert(b);
			if(plv==1){
				var e33="";
				var j1="";
				var iii=0;
				while(iii!=8){
					var j=Math.floor(Math.random() * 10);
					var c=r3.charAt(r3.indexOf(j));
					if(c>-1){
						var g=e33.indexOf(j);
						if(g==-1){
							e33=e33+""+j;
							if((j>-1)&&(j<=7)){
								var j1=j1+" "+r3.charAt(j);
								iii++
							}
						}
					}
				}
				p=p+2;
			}
			if(v23<=r2){
				var plv=prompt("Digite uma palavra "+j1).toUpperCase();
			}
			var num=plv.length;
			var c=rr1.indexOf(plv);
			if(c==-1){
				if(plv==0){
				}
				if((plv!=1)&&(plv!=0)){
					alert("Você errou,tente novamente!");
					p=p+""+num;
				}
			}
			if(c>-1){
				var f=e.indexOf(plv);
				if((f==-1)&&(f!="")){
					var e=e+","+plv;
					if(num==3){
						v=v+3;
						b=b.replace("---",plv);
					}
					if(num==4){
						v=v+4;
						b=b.replace("----",plv);
					}
					if(num==5){
						v=v+5;
						b=b.replace("-----",plv);
					}
					if(num==6){
						v=v+6;
						b=b.replace("------",plv);
					}
					if(num==7){
						v=v+7;
						b=b.replace("-------",plv);
					}
					if(num==8){
						v=v+8;
						b=b.replace("--------",plv);
					}
					if(num==9){
						v=v+9;
						b=b.replace("---------",plv);
					}
					alert("Acertou!");
					v33=v33+","+plv;
					v23++;
				}
				if((f>-1)&&(f!="")){
					alert("Repetindo as palavras?");
					p=p+3;
				}
			}
			if(plv==0){
				alert("Fim do jogo");
				ind++;
			}
			if((v23==r2)&&(v!="")){
				alert("Você ganhou está rodada!")
				if(cont!=4){
					jo=parseInt(prompt("Quer continuar jogando?\n 1-Sim\n 2-Não"));
					if(jo==1){
						v23=0;
						ind=0;
						cont++;
						e="";
						while(oi<1){
							rr=Math.floor(Math.random() * 100);
							var v8=m2.indexOf(rr);
							if((v8==-1)&&(rr>=21)&&(rr<=25)){
								var m2=m2+","+rr;
								oi++;
							}
						}
						oi=0;
						switch(rr){
								case 21:
									rr1=con21;
									var r2=co21;
									r3="ELEFANTE";
									break;
								case 22:
									rr1=con22;
									var r2=co22;
									r3="PRIMEIRO";
									break;
								case 23:
									rr1=con23;
									var r2=co23;
									r3="POSTURA";
									break;
								case 24:
									rr1=con24;
									var r2=co24;
									r3="LAMINA";
									break;
								case 25:
									rr1=con25;
									var r2=co25;
									r3="ABSURDO";
									break;
						}
						var num=rr1.length -1;
						var b="";
						var f="";
						while(num!=-1){
							f= rr1.charAt(num);
							if(f!=" "){
								f="-";
								b=f+""+b;
							}
							else{
								b=f+" "+b;
							}
							num--;
						}
						var e33="";
						var j1="";
						var iii=0;
						while(iii!=8){
							var j=Math.floor(Math.random() * 10);
							var c=r3.charAt(r3.indexOf(j));
							if(c>-1){
								var g=e33.indexOf(j);
								if(g==-1){
									e33=e33+""+j;
									if((j>-1)&&(j<=7)){
										var j1=j1+" "+r3.charAt(j);
										iii++
									}
								}
							}
						}
					}
					if(jo==2){
						ind++;
					}
				}
			}
		}
	break;
}
var pont=v-p;
alert("Sua pontuação foi: "+pont);
alert("Palavras acertadas: "+v33);
//ler 2 numeros inteiros de 5 algarismos e mostrar o resultado a intersecção entre eles
BU="";
A=parseInt(prompt("Digite o 1 número em 5 algarismos"));
B=parseInt(prompt("Digite o 2 número em 5 algarismos"));
A1=parseInt(Math.trunc(A/10000));
A2=parseInt(Math.trunc((A-(Math.trunc(A/10000)*10000))/1000));
A3=parseInt(Math.trunc((A-(Math.trunc(A/1000)*1000))/100));
A4=parseInt(Math.trunc((A-(Math.trunc(A/100)*100))/10));
A5=parseInt(Math.trunc(A-(Math.trunc(A/100)*100))-(Math.trunc((A-(Math.trunc(A/100)*100))/10)*10));
B1=parseInt(Math.trunc(B/10000));
B2=parseInt(Math.trunc((B-(Math.trunc(B/10000)*10000))/1000));
B3=parseInt(Math.trunc((B-(Math.trunc(B/1000)*1000))/100));
B4=parseInt(Math.trunc((B-(Math.trunc(B/100)*100))/10));
B5=parseInt(Math.trunc(B-(Math.trunc(B/100)*100))-(Math.trunc((B-(Math.trunc(B/100)*100))/10)*10));
if	(A1==B1){
	BU+=A1;
}
if	(A1==B2){
	BU+=A1;
}
if	(A1==B3){
	BU+=A1;
}
if	(A1==B4){
	BU+=A1;
}
if	(A1==B5){
	BU+=A1;
}
if	(A2==B1){
	BU+=A2;
}
if	(A2==B2){
	BU+=A2;
}
if	(A2==B3){
	BU+=A2;
}
if	(A2==B4){
	BU+=A2;
}
if	(A2==B5){
	BU+=A2;
}
if	(A3==B1){
	BU+=A3;
}
if	(A3==B2){
	BU+=A3;
}
if	(A3==B3){
	BU+=A3;
}
if	(A3==B4){
	BU+=A3;
}
if	(A3==B5){
	BU+=A3;
}
if	(A4==B1){
	BU+=A4;
}
if	(A4==B2){
	BU+=A4;
}
if	(A4==B3){
	BU+=A4;
}
if	(A4==B4){
	BU+=A4;
}
if	(A4==B5){
	BU+=A4;
}
if	(A5==B1){
	BU+=A5;
}
if	(A5==B2){
	BU+=A5;
}
if	(A5==B3){
	BU+=A5;
}
if	(A5==B4){
	BU+=A5;
}
if	(A5==B5){
	BU+=A5;
}
alert(BU);
//ler uma data em 8 digitos e calcular a idade de uma pessoa com base na data atual
A=parseInt(prompt("Digite sua idade em 8 digitos"));
alert("Será checado na data 07/06/2016");
D=7;
M=6;
AN=2016;
D1=Math.trunc(A/1000000);
M1=Math.trunc((A-(D1*1000000))/10000);
A1=A-(Math.trunc(A/10000)*10000);
if	(A1<2016){
	A1=2016-A1;
	alert("Sua idade é de :"+A1);
}
if	(A1==2016){
	if	(M1<6){
		M1=6-M1
		alert("Você tem :"+M1+" meses de idade");
	}
	if	(M1>6){
		M1=M1-6
		alert("Você tem :"+M1+" meses de idade");
	}
	if	(M1==6){
		if	(D1<7){
			alert("Você nem nasceu ainda!!")
		}
		if	(D1>7){
			D1=D1-7
			alert("Você tem "+D1+" dias de idade");
		}
	}
}

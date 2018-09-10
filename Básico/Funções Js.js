//Funções em JS
function Calcula_IMC(peso,altura){
	imc=peso/(altura*altura);
	return imc;
}
peso = (prompt("Peso : "));
altura = (prompt("Altura : "));
var meuIMC = Calcula_IMC(peso,altura);
alert(+meuIMC);
//
function BarryAlen(distancia,tempos){
	v = distancia/tempos;
	return v;
}
distancia = (prompt("Distancia em metros : "));
tempos = (prompt("Tempo em segundos : "));
var velocidade = BarryAlen(distancia,tempos);
alert(velocidade+"m/s");

//
function Julius(pp,vp){
	l = vp-pp;
	return l;
}
pp=prompt("Informe o preço do produto");
vp=prompt("Informe o valor pago");
var vf = Julius(pp,vp);
if(vf==vp){
	alert("Não há mais nada a pagar, porque o preço é igual");
}
if(vf<vp){
	vb = (vf*-1)
	alert("O cliente deverá pagar "+vb+" reais");
}
if(vf>vp){
	alert("Deverá dar de troco "+vf+" reais");
}
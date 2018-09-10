//
var Vo=parseInt(prompt("Velocidade:"));
var A=parseInt(prompt("Ângulo em radianos:"));
var h0=parseInt(prompt("Altura inicial:"));
var Voy=Vo*(Math.sin(A));
var g=9.81;
var t=0;
var x1;
var x2;
var h=h0+(Voy*t)-(g*(t*t)/2);
var h1=h-1;	
while(h1<h){
	t=t+0.1;
	h1=h;
	h=h0+(Voy*t)-(g*(t*t)/2);
}
alert("Altura máxima atingida: "+h1);
a=-(g/2);
b=Voy;
c=h0;
t1=(b*b)-(4*(a)*(c));
x1=(-b+Math.sqrt(t1))/(2*a);
x2=(-b-Math.sqrt(t1))/(2*a);
if(x1>0){
	alert("Tempo: "+x1);
}
if(x2>0){
	alert("Tempo: "+x2);
}

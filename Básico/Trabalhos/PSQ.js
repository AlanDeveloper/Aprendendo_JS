//PSQ
var N=parseInt(prompt("Digite um número:"));
var N1=1;
var N2;
var N3=0;
while(N3<N){
	N1=N1+0.1;
	N2=N1;
	N3=N1*N1;
}
N2=Math.trunc(N2);
alert(N2);

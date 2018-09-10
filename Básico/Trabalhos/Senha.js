//Escreva um método que permita fazer uma busca e um valor inteiro e um vetor de números inteiros,esse método deve receber 2 parametros:
um vetor de numeros inteiros e um valor inteiro a ser procurado no vetor,deve retornar um valor inteiro contendo o 
número da posição onde o valor foi encontradono vetor ou -1 caso o valor n seja encontrado
Faça um programa que leia um vetor de 10 posições contendo senhas númericas válidas para um determinado equipamento
 de segurança.Programa deve repetir a leitura de uma senha(um número inteiro)até que o usuário digite a senha correta(um número 
 que esteja no vetor),utilizando o método que você definiu antes)
function Senha(i,r){
	while(c!=10){
		i = v[c];
		if(r==i){
				v1 = c;
				c1 = 1;
		}

		c++;
	}
	if(c1!=1){
		v1 = -1;
	}
	return v1
}
v = [];
v1 = 0;
c = 0;
c1 = 0;
while(c!=2){
	p = prompt("Digite 10 números inteiros");
	f = p.indexOf(".");
	while(f>-1){
		alert("Digite um número inteiro");
		p = prompt("Digite os 10 números válidos");
		f = p.indexOf(".");
	}
	v[c] = p;
	c++;
}
r = prompt("Digite uma senha válida");
i = v[c];
c = 0;
Senha(i,r);
alert(v1);
while(c1!=1){
	r = prompt("Digite uma senha válida");
	i = v[c];
	c = 0;
	Senha(i,r);
	alert(v1);
}
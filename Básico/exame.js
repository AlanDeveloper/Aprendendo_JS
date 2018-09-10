//1
function sequencia(i){
	if(i%2==0){
		while(cc1>0){
			ii = Math.floor(Math.random()*25)+65;
			a = String.fromCharCode(ii);
			if((a !="A")&&(a !="E")&&(a !="I")&&(a !="O")&&(a !="U")){
				cc1 = 0;
				cc = 1;
				p = p+a;
			}
		}
	}
	cc1 = 1;
	cc = 0;
	while(i>0){
		ii = Math.floor(Math.random()*25)+65;
		while(cc>0){
			ii = Math.floor(Math.random()*25)+65;
			a = String.fromCharCode(ii);
			if((a =="A")||(a =="E")||(a =="I")||(a =="O")||(a =="U")){
				cc = 0;
				cc1  =1;
				p = p+a;
			}
		}
		i--;
		while(cc1>0){
			ii = Math.floor(Math.random()*25)+65;
			a = String.fromCharCode(ii);
			if((a !="A")&&(a !="E")&&(a !="I")&&(a !="O")&&(a !="U")){
				cc1 = 0;
				cc = 1;
				p = p+a;
			}
		}
		i--;
	}
	alert(p);
}
var n,i,ii,cc1,cc,a,p;
cc = 0;
cc1 = 1
p = "";
i = prompt("Digite a quantidade");
sequencia(i)
//2
function validos(d1,d2){
	da  = (a2 - a1) * 360;
	m = m1;
	while(c<2){
		switch(m){
			case 1:
				mc = 31;
			break;
			case 2:
				mc = 28;
			break;
			case 3:
				mc = 30;
			break;
			case 4:
				mc = 31;
			break;
			case 5:
				mc = 30;
			break;
			case 6:
				mc = 31;
			break;
			case 7:
				mc = 30;
			break;
			case 8:
				mc = 31;
			break;
			case 9:
				mc = 30;
			break;
			case 10:
				mc = 31;
			break;
			case 11:
				mc = 30;
			break;
			case 12:
				mc = 31;
			break;
		}
		if(d11>mc){
			alert("Vocẽ digitou dia errado");
			n++;
		}
		if(c==0){
			m1 = m;
		}else{
			m2 = m;
		}
		if(c>0){
			if(d22>mc){
				alert("Vocẽ digitou dia errado");
				n++;
			}
		}
		c++
		m = m2;
	}
	c = 0;
	m = m1;
	while(c<2){
		switch(m){
			case 1:
				m = 0;
			break;
			case 2:
				m = 31;	
			break;
			case 3:
				m = 59;
			break;
			case 4:
				m = 89;
			break;
			case 5:
				m = 120;
			break;
			case 6:
				m = 150;
			break;
			case 7:
				m = 181;
			break;
			case 8:
				m = 211;
			break;
			case 9:
				m = 242;
			break;
			case 10:
				m = 272;
			break;
			case 11:
				m = 303;
			break;
			case 12:
				m = 334;
			break;
		}
		if(c==0){
			m1 = m;
		}else{
			m2 = m;
		}
		c++
		m = m2;
	}
	if(n==0){
		if(d11==d22){
			df = (d22+m2)-(d11+m1);
			if(m2==m1){
				df = da;
			}
		}else{
			df1 = d11+ m1;
			df2 = d22+m2;
			df = (d22-d11)+(m2-m1)+(da);
		}
		alert("Dias  : "+df);
	}
}
var d1,d2,d11,m1,a1,d22,m2,a2,df1,df2,da,c,df,n,mc;
c = 0;
n = 0;
mc = 0;
alert("Informe a data no formato dd/mm/aaaa ");
d2 = prompt("Informe uma data para contagem de dias : ");
d1 = prompt("Informe uma data igual ou anterior a que já foi informada : ");
d11 = d1.slice(0,2);
m1 = d1.slice(3,5);
a1 = d1.slice(6);
d22 = d2.slice(0,2);
m2 = d2.slice(3,5);
a2 = d2.slice(6);
d11 = parseInt(d11);
m1 = parseInt(m1);
a1 = parseInt(a1);
d22 = parseInt(d22);
m2 = parseInt(m2);
a2 = parseInt(a2);
if(a1<=a2){
	if(m2>=m1){
		if((d11>=0)&&(d11<=31)&&(d22>=0)&&(d22<=31)){
			validos(d1,d2)
		}
	}
}
else{
	alert("Você não informou as datas corretas!");
}
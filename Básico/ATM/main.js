const atm = new ATM();
// abastecendo com 20 notas de 100
atm.abastecer(33, 100);
// verificando a quantidade de cédulas de 100
console.log(atm.consultarQuantidade(100)); // 33
// espera-se 33 cédulas
console.log(atm.consultarQuantidade(100) === 33);
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.consultarQuantidade(5)); // 0
console.log(atm.consultarQuantidade(5) === 0);
console.log(atm.consultarQuantidade(50)); // 0
console.log(atm.consultarQuantidade(50) === 0);
// mesmo os que não existem
console.log(atm.consultarQuantidade(3)); // 0
console.log(atm.consultarQuantidade(3) === 0);
// abastecimento de cédulas não existentes são rejeitados
atm.abastecer(8, 3); // 8 cédulas de R$ 3,00
console.log(atm.consultarQuantidade(3) === 0);
// consultando o valor
console.log(atm.consultarValor()); // 33 * 100 = 3300 reais
console.log(atm.consultarValor() === 3300);
// retirada rejeitada, não há cédulas que combinem R$ 350,00 (por ex.: de R$ 10, R$ 20 ou R$ 50)
atm.retirar(350);
console.log(atm.consultarQuantidade(100) === 33);
console.log(atm.consultarValor() === 3300);

// até aqui 0.3 pontos <=========================================

// retirada válida
atm.retirar(300); // 3 cédulas de 100
console.log(atm.consultarQuantidade(100) === 30);
console.log(atm.consultarValor() === 3000);
// retirada rejeitada
atm.retirar(3100); // não há cédulas suficientes
console.log(atm.consultarQuantidade(100) === 30);
console.log(atm.consultarValor() === 3000);
// retirada válida
atm.retirar(3000); // vai esvaziar o ATM
console.log(atm.consultarQuantidade(100) === 0);
console.log(atm.consultarValor() === 0);
// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecer(10, 10); // 10 cédulas de R$ 10,00
atm.abastecer(10, 50); // 10 cédulas de R$ 50,00
console.log(atm.consultarQuantidade(10) === 10);
console.log(atm.consultarQuantidade(50) === 10);
console.log(atm.consultarValor() === 600); // 10 * 10 + 10 * 50
// retirada prioriza cédulas de maior valor
atm.retirar(100); // retira 2 cédulas de R$ 50,00
console.log(atm.consultarQuantidade(10) === 10);
console.log(atm.consultarQuantidade(50) === 8);
console.log(atm.consultarValor() === 500); // 10 * 10 + 8 * 50
// retirada combinada
atm.retirar(90); // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.consultarQuantidade(10) === 6);
console.log(atm.consultarQuantidade(50) === 7);
console.log(atm.consultarValor() === 410); // 6 * 10 + 7 * 50

// até aqui 0.7 ponto <=========================================

// incluir mais 10 casos de teste com retiradas
// que combinam 4 e 5 cédulas diferentes, válidas e inválidas
// -------------------------------------------------------------

//retirada combinada válida de todas cédulas
atm.retirar(410); // 7 cédulas de R$ 50,00 e 6 cédulas de R$ 10,00
console.log(atm.consultarQuantidade(10) === 0);
console.log(atm.consultarQuantidade(50) === 0);
console.log(atm.consultarValor()); // 0

atm.abastecer(4,100); // 4 cédulas de R$ 100,00
atm.abastecer(2,50); // 2 cédulas de R$ 50,00
atm.abastecer(4,20); // 4 cédulas de R$ 20,00
atm.abastecer(5,10); // 5 cédulas de R$ 10,00
atm.abastecer(4,5); // 4 cédulas de R$ 5,00

//retirada válida
atm.retirar(175);
console.log(atm.consultarQuantidade(5) === 3);
console.log(atm.consultarQuantidade(20) === 3);
console.log(atm.consultarQuantidade(50) === 1);
console.log(atm.consultarQuantidade(100) === 3);

//retirada válida
atm.retirar(85);
console.log(atm.consultarQuantidade(5) === 2);
console.log(atm.consultarQuantidade(10) === 4);
console.log(atm.consultarQuantidade(20) === 2);
console.log(atm.consultarQuantidade(50) === 0);
console.log(atm.consultarValor()); //390

//retirada inválida
atm.retirar(395);
console.log(atm.consultarQuantidade(5) === 2);
console.log(atm.consultarQuantidade(10) === 4);
console.log(atm.consultarQuantidade(20) === 2);
console.log(atm.consultarQuantidade(50) === 0);
console.log(atm.consultarQuantidade(100) === 3);
console.log(atm.consultarValor()); //390

//retirada inválida
atm.retirar(56);
console.log(atm.consultarQuantidade(5) === 2);
console.log(atm.consultarQuantidade(10) === 4);
console.log(atm.consultarQuantidade(20) === 2);
console.log(atm.consultarQuantidade(50) === 0);
console.log(atm.consultarValor()); // 390

//retirada válida
atm.retirar(365);
console.log(atm.consultarQuantidade(5) === 1);
console.log(atm.consultarQuantidade(10) === 2);
console.log(atm.consultarQuantidade(20) === 0);
console.log(atm.consultarQuantidade(100) === 0);
console.log(atm.consultarValor()); // 25

atm.abastecer(3,5); // 3 cédulas de R$5,00
atm.abastecer(5,10); // 5 cédulas de R$10,00
atm.abastecer(2,20); // 2 cédulas de R$20,00
atm.abastecer(10,50); // 10 cédulas de R$50,00
atm.abastecer(7,100); // 7 cédulas de R$100,00
console.log(atm.consultarValor()); // 1330

//retirada válida
atm.retirar(135);
console.log(atm.consultarQuantidade(5) === 3);
console.log(atm.consultarQuantidade(10) === 6);
console.log(atm.consultarQuantidade(20) === 1);
console.log(atm.consultarQuantidade(100) === 6);

//retirada inválida
atm.retirar(1250);
console.log(atm.consultarQuantidade(5) === 3);
console.log(atm.consultarQuantidade(10) === 6);
console.log(atm.consultarQuantidade(20) === 1);
console.log(atm.consultarQuantidade(50) === 10);
console.log(atm.consultarQuantidade(100) === 6);

//retirada válida
atm.retirar(135);
console.log(atm.consultarQuantidade(5) === 2);
console.log(atm.consultarQuantidade(10) === 5);
console.log(atm.consultarQuantidade(20) === 0);
console.log(atm.consultarQuantidade(100) === 5);
console.log(atm.consultarValor()); //1060

//retirada inválida
atm.retirar(1059);
console.log(atm.consultarQuantidade(5) === 2);
console.log(atm.consultarQuantidade(10) === 5);
console.log(atm.consultarQuantidade(20) === 0);
console.log(atm.consultarQuantidade(50) === 10);
console.log(atm.consultarQuantidade(100) === 5);

//retirada inválida
atm.retirar(1100);
console.log(atm.consultarQuantidade(5) === 2);
console.log(atm.consultarQuantidade(10) === 5);
console.log(atm.consultarQuantidade(20) === 0);
console.log(atm.consultarQuantidade(50) === 10);
console.log(atm.consultarQuantidade(100) === 5);
// até aqui 1.0 ponto <=========================================

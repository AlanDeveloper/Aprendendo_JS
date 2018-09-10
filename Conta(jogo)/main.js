//Criação de uma conta de um jogo que segue algumas regras
let conta1 = new Conta("Alan","Destroyer");
console.log(conta1.name === "Alan");
console.log(conta1.nick === "Destroyer");

//ToFuel

conta1.tofuel(20);
console.log(conta1.cash === 20);
console.log(conta1.tofuel(65) === false); // O jogo só vende pacotes de 5,10,20,50,100 e 150
let conta2 = new Conta("Hugo","Castiel");

conta1.tofuel(100);
console.log(conta1.cash === 120);

//Buy

conta1.buy("Amuletos");
conta1.buy("Equipamentos");
console.log(conta1.shopping[0] === "Amuletos");
console.log(conta1.shopping[1] === "Equipamentos");

conta1.buy("Troca de nick","Beholder");
console.log(conta1.nick === "Beholder");
console.log(conta1.cash === 40);

try {
  conta1.buy("Troca de nome");
  console.log(false);
} catch(e) {
  console.log(e); // compra inválida
  console.log(e === "Compra Inválida"); // Não existe o que o usuário deseja comprar
}
try {
  conta1.buy("Equipamentos");
  console.log(false);
} catch(e) {
  console.log(e); // compra inválida
  console.log(e === "Pouco cash disponível");
}
try {
  conta2.buy("Amulets");
  console.log(false);
} catch(e) {
  console.log(e); // compra inválida
  console.log(e === "Compra Inválida"); // Não há como comprar um item que não existe
}
console.log(conta1.cash === 40);

//Present

conta2.tofuel(50);
console.log(conta2.cash === 50);
conta2.buy("Amuletos"); // - 10
conta2.buy("Amuletos"); // - 10
conta2.buy("Amuletos"); // - 10
conta2.buy("Amuletos"); // - 10
conta2.present(conta1,0); // Enviar presente custa 5 cash
console.log(conta2.shopping[0] === "");
console.log(conta1.shopping[2] === "Amuletos");
console.log(conta2.cash === 5);
conta2.present(conta1,1); // - 5

try {
  conta2.present(conta1,2);
  console.log(false);
} catch(e) {
  console.log(e); //Não tinha cash suficiente para enviar um presente
}
conta2.tofuel(50);
try {
  conta2.present(conta1,6);
  console.log(false);
} catch(e) {
  console.log(conta2.cash === 50);
  console.log(conta1.shopping);
  console.log(conta2.shopping);
  // Não será enviado pois o local do presente selecionado vai além do length do inventário
}

//Sell

console.log(conta1.cash === 40);
conta1.sell("Equipamentos");
console.log(conta1.shopping[1] === ""); // Item vendido
console.log(conta1.cash === 77.5); // Quando se vende um item ganha 75% do dinheiro que usou para compra-lo

conta1.buy("Amuletos");
conta1.buy("Amuletos");

conta1.sell("Amuletos"); // Vende apenas o primeiro amuleto
conta1.buy("Amuletos"); // Amuleto comprado ficou no lugar do item que estava na posição 0( o que foi vendido )

conta2.tofuel(100);
console.log(conta2.cash === 150);
conta2.buy("Equipamentos");
conta2.buy("Amuletos");
conta2.sell("Amuletos");
conta2.sell("Amuletos");
console.log(conta2.sell("Amuletos") === false); // Não há como vender um item que não possui

// Exchange

console.log(conta1.shopping[0] === "Amuletos");
console.log(conta2.shopping[1] === "Equipamentos");
conta1.exchange(0,conta2,1);
console.log(conta1.shopping[0] === "Equipamentos");
console.log(conta2.shopping[1] === "Amuletos");
conta1.exchange(0,conta2,0); // Não haverá troca pois a conta 2 não possui nenhum item na posição 1 para poder trocar
console.log(conta1.shopping[0] === "Equipamentos");
console.log(conta2.shopping[0] === "");

try {
  conta1.exchange(0,conta2,5);
  console.log(false);
} catch(e) {
  //Não haverá troca pois a segunda conta para troca está selecionando uma posição além do seu inventário
  console.log(conta1.shopping[0] === "Equipamentos");
  console.log(conta2.shopping[5]); // undefined
  //Não houve troca podendo confirmar nas 2 linhas acima
}

//

try {
  let conta3 = new Conta("Junior");
  console.log(false);
} catch(e) {
  console.log(e);
  console.log(e === "Deve preencher todos campos");
}
try {
  let conta3 = new Conta("","Juh");
  console.log(false);
} catch(e) {
  console.log(e);
  console.log(e === "Deve preencher todos campos");
}

let conta3 = new Conta("James","Dark Side",6);
conta3.tofuel(150);
conta3.buy("Amuletos");
conta3.buy("Amuletos");
conta3.buy("Amuletos");
conta3.buy("Amuletos");
conta3.buy("Amuletos");

conta1.present(conta3,2);
console.log(conta3.shopping[5] === "Amuletos");

try {
  conta1.present(conta3,1);
  console.log(false);
} catch(e) {
  console.log(e);
  console.log(e === "Espaço insuficiente");
}
try {
  conta3.buy("Equipamentos");
  console.log(false);
} catch(e) {
  console.log(e);
  console.log(e === "Espaço insuficiente");
}

const e1 = EBook("Os inovadores", 544);

console.log(e1.titulo); // Os inovadores
console.log(e1.titulo === "Os inovadores"); // true

console.log(e1.paginas); // 544
console.log(e1.paginas === 544); // true

console.log(e1.paginaAtual === 1);

try {
  let ebookInvalido = EBook("", 544); // titulo vazio
  console.log(false); // essa linha não deve ser alcançada
} catch(e) { // a exceção deve ser capturada
  console.log(e); // O título não pode ser vazio
  console.log(e === "O título não pode ser vazio"); // true
}

try {
  let ebookInvalido = EBook("Um titulo", 0); // sem páginas
  console.log(false);
} catch (e) {
  console.log(e); // O EBook deve ter entre 1 e 5000 páginas
  console.log(e === "O EBook deve ter entre 1 e 5000 páginas"); // true
}

try {
  let ebookInvalido = EBook("Um titulo", -10); // páginas negativas
  console.log(false);
} catch (e) {
  console.log(e === "O EBook deve ter entre 1 e 5000 páginas"); // true
}

try {
  let ebookInvalido = EBook("Um titulo", 6000); // páginas > 5000
  console.log(false);
} catch (e) {
  console.log(e === "O EBook deve ter entre 1 e 5000 páginas"); // true
}

const e2 = EBook("A catedral e o bazar", 14);
console.log(e2.titulo === "A catedral e o bazar");
console.log(e2.paginas === 14);
console.log(e2.paginaAtual === 1);

e2.virarPagina(); // paginaAtual + 1
console.log(e2.paginaAtual === 2);

for (let i = 0; i < 10; i++) e2.virarPagina(); // 10 pag viradas
console.log(e2.paginaAtual === 12);

e2.voltarPagina(); // paginaAtual - 1
console.log(e2.paginaAtual === 11);

for (let i = 0; i < 10; i++) e2.voltarPagina(); // 10 pag atrás
console.log(e2.paginaAtual === 1);

e2.voltarPagina();
console.log(e2.paginaAtual === 1);


const e3 = EBook("O (comovente) guia de Ruby do why", 121);
console.log(e3.titulo === "O (comovente) guia de Ruby do why");
console.log(e3.paginas === 121);
console.log(e3.paginaAtual === 1);

e3.irParaPagina(10);
console.log(e3.paginaAtual === 10);

e3.irParaPagina(123);
console.log(e3.paginaAtual === 121);

e3.irParaPagina(0);
console.log(e3.paginaAtual === 1);
e3.irParaPagina(-8);
console.log(e3.paginaAtual === 1);

e3.irParaUltimaPagina();
console.log(e3.paginaAtual === 121);

e3.irParaPrimeiraPagina();
console.log(e3.paginaAtual === 1);

e3.irParaPagina(64);
e3.colocarMarcador(); // marca a página 64

e3.irParaPrimeiraPagina();
console.log(e3.paginaAtual === 1);
e3.irParaMarcador();
console.log(e3.paginaAtual === 64);

const e4 = EBook("JavaScript Garden", 32);

e4.virarPagina();
console.log(e4.paginaAtual === 2);

e4.virarPagina(6);
console.log(e4.paginaAtual === 8);

e4.voltarPagina(5);
console.log(e4.paginaAtual === 3);

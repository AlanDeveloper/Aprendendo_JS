function EBook(titulo,paginas,paginaAtual){
  if(titulo === ""){
    titulo = "O título não pode ser vazio";
    throw "O título não pode ser vazio";
  }
  if((paginas <= 0) || (paginas > 5000)){
    paginas = "O EBook deve ter entre 1 e 5000 páginas";
    throw "O EBook deve ter entre 1 e 5000 páginas";
  }
  return {
    'titulo': titulo,
    'paginas': paginas,
    'paginaAtual': 1,
    'marcador': 1,
    'virarPagina': function (number) {
      if(number>0){
        return this.paginaAtual = this.paginaAtual + number;
      }else{
        return this.paginaAtual++;
      }
    },
    'voltarPagina': function (number) {
      if(this.paginaAtual === 1){
        if(number>0){
          return this.paginaAtual = this.paginaAtual - number;
        }
      }else{
        if(number>0){
          return this.paginaAtual = this.paginaAtual - number;
        }else{
          return this.paginaAtual--;
        }
      }
      return this.paginaAtual;
    },
    'irParaPagina': function (page) {
      if (page <= 0) {
        return this.paginaAtual = 1;
      }
      if(page>this.paginas){
        return this.paginaAtual = paginas;
      }else{
        return this.paginaAtual = page;

      }
    },
    'irParaUltimaPagina': function () {
      return this.paginaAtual = paginas;
    },
    'irParaPrimeiraPagina': function () {
      return this.paginaAtual = 1;
    },
    'colocarMarcador': function () {
      return  this.marcador = this.paginaAtual;
    },
    'irParaMarcador': function () {
      return this.paginaAtual = this.marcador;
    }
  }
}

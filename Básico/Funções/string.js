function w(conteudo) { // função para escrever
    document.write(conteudo);
}

function h(n, texto) {
    var s = '<h' + n + '>' + texto + '</h' + n + '>';
    // var s = `<h${n}>${texto}</h${n}>` // JS2015
    return s;
}

w('teste');
console.log(h(1, 'titulo') === '<h1>titulo</h1>');
w(h(1, 'titulo'));
console.log(h(2, 'subtitulo') === '<h2>subtitulo</h2>');
w(h(2, 'subtitulo'));

console.log('upcase de texto é TEXTO',
            upcase('texto') === 'TEXTO');

console.log('upcase de Te1tO é TEXTO',
            upcase('Te1tO') === 'TE1TO');

console.log(upcase('Te1tO'));

w(h(1, upcase('meu titulo')));


function upcase(str) {
    var ret = '';
        for (var i = 0; i < str.length; i++) {
            var code = str.charCodeAt(i);
            if (code >= 97 && code <= 122) {
                ret += String.fromCharCode(code - 32);
            } else {
                ret += str[i];
            }
        }
    return ret;
}
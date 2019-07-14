function soma(a, b) {
    var r = a + b;
    return r;
} 
function subtrai(a, b) {
    var r = a - b;
    return r;
}
function multiplica(a, b) {
    var r = 0;
    for (var i = 0; i < a; i++) r += b;
    return r;
}

console.log('5 + 3 = ' + soma(5, 3));
console.log('6 - 2 = ' + subtrai(6, 2));
console.log('5 * 3 = ' + multiplica(5, 3));
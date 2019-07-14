const form = document.querySelector('form');
const divResultado = document.querySelector('#resultado');
const scriptTemplate = document.querySelector('#template');
const divAlertDanger = document.querySelector('.alert');
const span = document.querySelector('#close_0');
const span0 = document.querySelector('#close_1');

form.addEventListener('submit', function(e) {
    if (form.cep.value.length === 8) {
        busca(form.cep.value, form.comp.value);
    } else {
        divResultado.innerHTML = '';
        divAlertDanger.style.visibility = 'visible';
    }
    e.preventDefault();
});

span.addEventListener('click', function () {
    form.cep.value = '';
    txt = '';
});
span0.addEventListener('click', function () {
    form.comp.value = '';
});

function ajax(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = callback;
  xhr.send();
}

function busca(cep, comp) { // cep : 96201460
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    form.cep.value = '';
    txt = '';
    form.comp.value = '';
    ajax(url, function(e) {
        if (e.target.response.length -1 < 18) {
            divResultado.innerHTML = '';
            divAlertDanger.style.visibility = 'visible';
        } else {
            divAlertDanger.style.visibility = 'hidden';
            e = JSON.parse(e.target.response);
            e.complemento = comp;
            printa(e);
        }
    });
}

function printa(json) {
    const template = scriptTemplate.innerText;
    const handlebars = Handlebars.compile(template);
    const html = handlebars(json);
    divResultado.innerHTML = html;
}

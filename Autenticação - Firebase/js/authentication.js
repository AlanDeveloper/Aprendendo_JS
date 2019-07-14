const btnLogin = document.querySelector('#submit');
const pError = document.querySelector('#error');

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(function (result) {
        sessionStorage.setItem('email', email.value);
        sessionStorage.setItem('password', password.value);

        window.location.href = 'user.html';
    }).catch(function (error) {
        pError.innerText = error.message;
    });
});

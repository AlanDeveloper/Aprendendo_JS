/* global firebase */

console.log('ok');
const provider = new firebase.auth.GoogleAuthProvider();

document.querySelector('div.naologado a')
    .addEventListener('click', function() {
    firebase.auth().signInWithRedirect(provider);
});

firebase.auth()
.getRedirectResult().then(function(result) {
    if ( ! result.user) return;
    const user = result.user;
    document.querySelector('div.logado img')
    .src = user.photoURL;
    document.querySelector('div.logado span')
    .textContent = user.displayName;
    document.querySelector('div.logado')
    .style.display = 'block';
    document.querySelector('div.naologado')
    .style.display = 'none';
}).catch(function(error) {
    alert(error.message);
});

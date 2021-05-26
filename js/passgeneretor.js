
var nome = prompt ('inserisci il tuo nome');
console.log (nome);

var cognome = prompt ('insersci il tuo cognome');
console.log (cognome);

var colorePreferito = prompt ('colore preferito');
console.log (colorePreferito);

alert ('la tua password è:'+ nome + cognome + colorePreferito + '21');

document.getElementById('password').innerHTML = 'la tua password è:'+ nome + cognome + colorePreferito + '21';

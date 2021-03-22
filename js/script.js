// numero
var numeroCasuale = Math.floor(Math.random() * 6) +1;
console.log(numeroCasuale);

var numeroCasualePC = Math.floor(Math.random() * 6) +1;
console.log(numeroCasualePC);

if (numeroCasuale > numeroCasualePC) {
    document.getElementById('vinto').innerHTML = 'hai vinto';
} else if (numeroCasuale < numeroCasualePC) {
    document.getElementById('perso').innerHTML = 'hai perso';
} else {
    document.getElementById('pareggio').innerHTML = 'pareggio';
}
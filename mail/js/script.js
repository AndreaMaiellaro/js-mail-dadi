// lista email
var eMail = ["andrea@gmail.com","edoardo@gmail.com","luca@gmail.com","francesco@gmail.com"];

//mail utente
var mailUtente = prompt('Dimmi la tua mail');
console.log( mailUtente );

// controllo email utente con lista
var mailSi = false;

var thisMail;

for( var i = 0; i < eMail.length; i++) {
    console.log( eMail[i] );

    if( thisMail == mailUtente ) {
        mailSi = true;
    }

    console.log(mailSi);
}

//se si ok altrimenti no
if ( mailSi == true ) {
    alert("benvenuto");
} else {
    alert("non puoi entrare")
}
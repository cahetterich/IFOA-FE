/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10;
let b = 20;

document.getElementById('a').innerHTML = a;
document.getElementById('b').innerHTML = b;

if (a > b) { 
  document.getElementById('esercizio1').innerHTML ='Il numero più grande è ' + a;
} else if (b > a) {
  document.getElementById('esercizio1').innerHTML ='Il numero più grande è ' + b;
} else {
  document.getElementById('esercizio1').innerHTML ='Il numero sono uguali';
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const esercizio2 = 5

document.getElementById('esercizio2').innerHTML = esercizio2;

if (esercizio2 == 5) {
  console.log ("Equal")
  document.getElementById('equal').innerHTML ='Equal';
  
} else {
  console.log ("Not Equal")
  document.getElementById('notEqual').innerHTML ='Not Equal';
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroDivisibile = 25;

document.getElementById('numeroDivisibile').innerHTML = numeroDivisibile;

if (numeroDivisibile % 5 === 0) {
  document.getElementById('divisibile').innerHTML ='Questo numero è divisibile per 5';
  } else {
    document.getElementById('nonDivisibile').innerHTML ='Questo numero non è divisibile per 5';
    }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 3;
let numero2 = 4;

document.getElementById('numero1').innerHTML = numero1;
document.getElementById('numero2').innerHTML = numero2;

if (numero1 === 8 || numero2 === 8) {
  document.getElementById('numeroUguale').innerHTML = 'Uno dei due numeri è uguale a 8';
} else if (numero1 + numero2 === 8)  {
  document.getElementById('numeroAdd').innerHTML = 'L addizione dei numeri è 8';
}  else if (numero1 - numero2 === 8 || numero2 - numero1 === 8) {
  document.getElementById('numeroSott').innerHTML = 'L sottrazione dei numeri è 8';
} else {
  document.getElementById('numeroNon').innerHTML = 'Nessuno dei numeri è 8, oppure la loro addizione e sottrazione dà come risultato 8';
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 35; 
let spedizione = 10;
let total = totalShoppingCart + spedizione;

document.getElementById('totalShoppingCart').innerHTML = '€' + totalShoppingCart;

if (totalShoppingCart > 50) {
  document.getElementById('supera50').innerHTML = 'Se l acquisto supera i 50 euro, la spedizione è gratuita!';
} else {
  document.getElementById('nonSupera50').innerHTML ='Il tuo acquisto ammonta a €' + totalShoppingCart + ', con spedizione da €' + spedizione + '. Il totale da pagare è €' +total + '.';
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 35; 
let blackFriday = 0.8 * totalShoppingCart2;
let spedizione2 = 10;
let total2 =  blackFriday + spedizione2;

document.getElementById('totalShoppingCart2').innerHTML = '€' + blackFriday;

if (blackFriday > 50) {
  document.getElementById('supera502').innerHTML = 'Se l acquisto supera i 50 euro, la spedizione è gratuita!';
} else {
  document.getElementById('nonSupera502').innerHTML ='Il tuo acquisto ammonta a €' + blackFriday + ' con 20% di sconto Black Friday, e spedizione da €' + spedizione2 + '. Il totale da pagare è €' +total2 + '.';
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 5;
let num2 = 30;
let num3 = 15;

document.getElementById('num1').innerHTML = num1;
document.getElementById('num2').innerHTML = num2;
document.getElementById('num3').innerHTML = num3;

/*let myArray = ["15", "30", "5"];
var min = Math.min(myArray);
var max = Math.max(myArray);*

console.log(min);/


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valoreFornito = 5;
document.getElementById('valoreFornito').innerHTML = valoreFornito;

if (typeof valoreFornito === "number") {
  document.getElementById('valoreNumero').innerHTML = 'Il valore fornito è un numero.';
} else {
  document.getElementById('valoreNumero').innerHTML = 'Il valore fornito non è numero.';
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valoreFornito2 = 1432;
document.getElementById('valoreFornito2').innerHTML = valoreFornito2;

if (valoreFornito2 % 2 === 0) {
  document.getElementById('numeroPari').innerHTML = 'Il numero è pari';
} else {
  document.getElementById('numeroPari').innerHTML = 'Il numero è dispari';
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {  //array se lê de forma normal - banalmente isso
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ******** ESERCIZIO 13 - ******** NON FARE ********
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ******** ESERCIZIO 14 - ******** NON FARE ******** 
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ******** ESERCIZIO 15 - ******** NON FARE ********
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

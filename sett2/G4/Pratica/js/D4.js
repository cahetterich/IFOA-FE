/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2){
 let calcolareLarea = l1 * l2;
 return calcolareLarea;
}
console.log('Esercizio 1');
console.log(area(15,30));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sommaDue;

function crazySum(numeri1, numeri2) {
    if ( numeri1 != numeri2) {
    let sommaDue = numeri1 + numeri2;
    return sommaDue; 

    } else {(numeri1 === numeri2) 
    let sommaMol = Number(numeri1 + numeri2) * 3; 
    return sommaMol; 
    } }

console.log('Esercizio 2');
console.log(crazySum(3,3))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeroP = 19;

function crazyDiff (numeroP) {
    if (numeroP < 19) {
    let menore = 19 - Number(numeroP);
    return menore;   

    } else if  (numeroP > 19) {
    let maggiore = Number(numeroP) - 19;
    let differenzaAss =  Number(maggiore) *3; 
    return differenzaAss;   

    } else { (numeroP === 19)
        return numeroP; 
    }
}

console.log('Esercizio 3');
console.log(crazyDiff(numeroP));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro,
  e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary (numeroN) {
    if  (numeroN === 400 || (numeroN > 20 && numeroN <= 100)) {
    return false; 

    } else { (numeroN < 20 > 100) 
    return true;
    } 
}

console.log('Esercizio 4');
console.log(boundary(400))


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* -----
function epify(stringa) { 

}

console.log('Esercizio 5');

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

//console.log('Esercizio 6');

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7  = utiliza reverse na stringa
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */  

//console.log('Esercizio 7');

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//console.log('Esercizio 8');

/* ESERCIZIO 9  - stringa.length
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//console.log('Esercizio 9');

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//console.log('Esercizio 10');
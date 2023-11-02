/*Ricevere attraverso un form il nome e l'anno di nascita, calcolare l'età,
 verificare se la persona è maggiorenne, salutarla indicando la maggiore o minore età 

  - ELEMENTI DELL'ALGORITMO -

1 - LEGGERE IL CAMPO NOME E MEMORIZARLO
2 - LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3 - CALCOLARE L'ETÀ
4 - VERIFICA LA MAGGIORE O MINORE ETÀ
5 - SCRIVE NELL'HTML
6 - CANCELLARE IL FORM
 
 - EVENTO SCATENANTE -
       *CLICK*

 - VARIABILI GLOBALI:

nome
anno
eta
stato
 
 */

let nome; // globale in quanto utilizzata per leggere il campo di input e per stampare a video
let anno; // globale in quanto utilizzata per leggere il campo di input, calcolare l'erà, verifica l'èta, stampare a vide
let eta;
let stato;  // globale in quanto utilizzata in quanto per verificare l'età e stampare a video
let errore = document.getElementById('errore')

// ORDINE DELLE FUNZIONI: SEGUIAMO LO STESSO ORDINE PER SCRIVERE E ORGANIZZARE IL NOSTRO CODICE - OGNI FUNZIONE FA UNA COSA 
// ORDEM DAS FUNÇÕES: SEGUIMOS A MESMA PARA ESCREVER E ORGANIZAR O NOSSO CÓDIGO - CADA FUNÇÃO FAZ UMA COISA 

function eventHandler() {  // che definisce quali funzioni devono seguire - função que define quais funções devem seguir 
    leggiForm();
    if (anno >= 1900 && anno <= 2023 && nome != '') { //erro 
        errore.innerHTML = '&nbsp;'; // errore H3 /  &nbsp; - posiziona la riga nel browser
    calcolaEta();
    verifica();
    scrivi();
    cancellaForm(); 
} else {   // controle dos valores 
    errore.innerHTML = 'Attenzione" Compilare tutti i campi e inserire un numero tra 1900 e 2023!'; // errore H3
    return;
    }
}
    function leggiForm() {
    nome = document.getElementById('nome').value;
    anno = document.getElementById('anno').value;
   // console.log(nome, anno);  //  mettiamo "console.log" per poter analizzare nella console se è corretto
}

function calcolaEta(){
    eta = 2023 - Number(anno);  // string
    // console.log(eta);  //  mettiamo "console.log" per poter analizzare nella console se è corretto
}

function verifica() {
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne';
   // console.log(stato); //  mettiamo "console.log" per poter analizzare nella console se è corretto
}

function scrivi() {
    document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
    document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + '; sei ' + stato;
}

function cancellaForm() {   // apaga os dados 
    document.getElementById('nome').value ='';
    document.getElementById('anno').value ='';
}
// 1 - Dobbiamo capire in che mese siamo, per scriverlo nell'h1, e quanti giorni ha il mese, per generare il corretto numero di celle

const now = new Date();   /* estrutura que nos dirá que dia é hoje */

/* 2 - Per salvare gli appuntamenti abbiamo bisogno di un'array, perché ogni appuntamento è una stringa,
 ogni giorno può contenere infiniti appuntamenti e ogni mese ha un numero di giorni variabile.
 Creeremo quindi un array di array, dove l'array padre è il mese e gli array figli rappresentano i giorni
 
 [representa il mese
    [reppresenta il primo giorno], [reppresenta il secondo giorno], [terzo]....
]
 
ES. Oggi è il 10 novembre: l'array padre reppresenta novembre, gli array figli rappresentano i trenta giorno

[
    [],
    [],
    [],
    ['09:00 - live coding calendario', '14:00 - esercizio quotidiano: tombola'...],
    ....
]

Non sapendo quanti giorni ci sono nel mese in corso, si crea il "guscio" del mese */

const appointments = [];  // array onde estará nossos appuntamenti

// Dentro appointments pushiamo tanti sottoarray quanti sono i giorni del mese corrente

const monthNames = [   //array que criamos nós para identificar os meses em italiano  *  No array contamos [0 a 11], mas quando puxa o mês com "getDate()" aparecera os números dos dias [1,2,3,4..30]
    'Gennaio', 
    'Febbraio', 
    'Marzo', 
    'Aprile', 
    'Maggio', 
    'Giugno', 
    'Luglio', 
    'Agosto', 
    'Settembre', 
    'Ottobre', 
    'Novembre', 
    'Dicembre', 
];

// QUANTOS MESES TEMOS ? 
const scriviMese = function() {   // QUANTOS MESES TEMOS ? 
    const title = document.querySelector('h1'); // Seleciono que o nosso monthNames aparecerá no local de 'h1'
    const indiceMese = now.getMonth(); // getMonth dá o número do mês que estamos, que hoje é 10 perché siamo a novembre, e puxamos o 10 do nosso "monthNames"
    const nomeMese = monthNames[indiceMese]; // cicla = monthNames[novembre] até encontrar a décima posição da nossa array (nosso mês)
    //console.log(nomeMese);  // aparece qual o mês que estamos no console, para verificar se está puxando corretamente
    title.innerText = nomeMese; 
};

scriviMese(); // chamamos a função 

// Sappiamo in che mese siamo, ma quanti giorni ha questo mese? 
// Dal momento che febbraio negli anni bisestili ha 29 giorno, per sapere il mio mese quanti giorni ha
// mi serve anche l'anno

// QUANTOS DIAS TEMOS NO TOTAL ? 
const giorniTotali = function() {
    const anno = now.getFullYear(); // 2023 perché siamo nel 2023
    const mese = now.getMonth(); // 10 perché siamo a novembre 

    // dal momento che nell'oggeto date il numero dei giorni del mese parte da 1, mi basta sapere qual'è l'ultimo giorno
    // del mese in corso per avere il suo numero di giorni
    // Per sapere l'ultimo giorno del mese in corso? Creo la data del primo giorno del mese successivo al mese in corso e faccio -1

    let ultimoGiorno = new Date(anno, mese + 1, 0); // getFullYear = ano, getMonth = mês, +1 = próximo mÊs, 0 = primeiro dia) 
    //- esta data corresponde ao 0 dezembro 2023, que não existe.. e logo é 30 de novembro 2023 (pega o último dia do mês anterior).
    //console.log('numero di giorni', ultimoGiorno); // mostra: data - ano no console
    const numeroGiorni = ultimoGiorno.getDate();
    //console.log(numeroGiorni);
    return numeroGiorni; // numeroGiorni è il numero di volte per cui dovrò ripetere la creazione dei div corrispondenti aos dias do mês correspondente
};

giorniTotali();

// Quando carico un mese, eventuali classi selected precedenti devono essere rimosse, altrimenti mi troverò selezionati i giorni del mese precedente
// che avevano degli appuntamenti   - que é nosso div class

// Seleziono TUTTE gli elementi con classi .selected e rimuovo la classe

const deselezionaCelle = function () { 
    const celle = document.querySelectorAll('.day'); // querySelectorAll cria um Array
    celle.forEach((element) => {
         element.classList.remove('selected');  // remover 
    });
};

// Quando faccio click su un giorno, nel div id= newMeetingDay dovrò leggere la data selezionata

const giornoAppuntamento = function(indiceGiorno) {
    const giorno = document.getElementById('newMeetingDay'); // newMeetingDay está no html
    giorno.classList.add('hasDay');  // hasDay está no css dando stilo ao  html 
    giorno.innerText = indiceGiorno + 1; // aqui aparecerá no browser 
};

// A questo punto va creata la "griglia" dei div contenenti i giorni del mese in corso
// questa griglie userà il numero di giorni per gestire l'array globale creato all'inizio e scriverà i vari div  

const creaGriglia = function(numeroGiorni) { //numeroGiorni e il numero di giorni del mese corrente - um parametro
    const calendarDiv = document.getElementById('calendar');

    for (let i = 0; i < numeroGiorni; i++) {
        const cellaGiorno = document.createElement('div'); // ad ogni giorno associo un div
        cellaGiorno.classList.add('day'); // stilizzo il div come definito in css

        // EVENTO CLICK SUL SINGOLO GIORNO
        cellaGiorno.addEventListener('click', function(e) {  // rendo cliccabili i div dei giorni
            deselezionaCelle(); // deseleziono l'eventuale altra cella selezionata
            cellaGiorno.classList.add('selected');  // aggiungo la classe css day selected per mostrare la selezione del giorno cliccato
            giornoAppuntamento(i); //giornoAppuntamento deve receber um indice do giorno cliccato nella sezione Giorno del Form
            // Se ci sono già eventi nella giornata, devo far comparire la lista
            if (appointments[i].length > 0) {    // aqui vamos ver se no dia existe algum appuntamento na nossa array de appuntamento do dia
                mostraAppuntamenti(i);  // e aqui chegam os appuntamentos 
                 } else {
                      const divAppuntamenti = document.getElementById('appointments');  // caso não tenha, não aparecerá nada "none"
                      divAppuntamenti.style.display = 'none';
         }
        });

        // Criação da "GRIGLIA E ARRAY "
        // devo scrivere il numero del giorno nei div
        const valoreCella = document.createElement('h3');
        valoreCella.innerText = i + 1;
        // 'appendo' gli elementi creati
        cellaGiorno.appendChild(valoreCella);
        calendarDiv.appendChild(cellaGiorno);

        // creato il calendario, inserisco nell'array appointsments l'array dei giorni e del mese
        appointments.push([]); 
       // console.log(appointments);    // mostra os arrays vazios que criamos para colocar nossos dias do calendário e nossas tarefas/appuntamento
    }
};

creaGriglia(giorniTotali());  // argumento da função = giorniTotali, que traz o valor verdadeiro


// LISTA DE TAREFAS - APPUNTAMENTI  mostra o que encontra no dia selecionado 
const mostraAppuntamenti = function(indiceGiorno) {  // puxamos de 'mostraAppuntamenti(i);'
    // Con questa funzione si popopla la lista degli appuntamenti con gli appuntamenti del giorno

    // 01 - prendere gli appuntamenti giusti 
    const appuntamentiGiorno = appointments[indiceGiorno]; // [] dentro do array ele vai buscar os appointments que tem ali
    // 02 - selezionare la lista contenitore
    const lista = document.querySelector('#appointments ul');
    //03 - svuotare la lista
    lista.innerHTML = '';

    //04 - cliclare gli appuntamenti del giorno a creare un li per ciascuno di esse
    appuntamentiGiorno.forEach((element) => {
        const newLi = document.createElement('li');  // aqui ela cicla a array e vai puxando seus valores
        newLi.innerText = element;
        lista.appendChild(newLi);
    });

    // 05 - la lista è piena ma è ancora nascosta
        const divAppuntamenti = document.getElementById('appointments');
        divAppuntamenti.style.display = 'block';  // contenitore da lista - esconde a lista para que não acumule informações na nossa aba de navegação
};

// dobbiamo creare nuovi appuntamenti!   ***  // FORM //  *** 
/*const submitForm = function(e) {  // como nosso form é de tipo submit, automaticamente ele busca fazer alguma coisa quando clicamos em cima (por isso não precisamos incluir nosso botão - click)
    e.preventDefault();   // prevenir comportamente de Default no botão 
    
    // 01 - giorno dell'appuntamento
    const selectedDay = document.getElementById('newMeetingDay').innerText;
    // 02 - ora dell'evento selezionato
    const meetingTime = document.getElementById('newMeetingTime').value;
    // 03 - nome dell'appuntamento
    const meetingName = document.getElementById('newMeetingName').value;
    // 04 - creo la stringa dell'appuntamento
    const stringaAppuntamento = `${meetingTime} - ${meetingName}`;
    // 05 - scrivo l'appuntamento nell'array
    const indiceArray = parseInt(selectedDay) - 1; // devemos colocar -1 para que acha o dia correto
    // console.log('array prima del salve', appointments);
    appointments[indiceArray].push(stringaAppuntamento);
    //console.log('array dopo il salve', appointments);
}*/

//

const meetingForm = document.querySelector('form');
//meetingForm.addEventListener('submit', submitForm);
meetingForm.addEventListener('submit', function(e) {
    e.preventDefault();   // prevenir comportamente de Default no botão 
    
    // 01 - giorno dell'appuntamento
    const selectedDay = document.getElementById('newMeetingDay').innerText;
    // 02 - ora dell'evento selezionato
    const meetingTime = document.getElementById('newMeetingTime').value;
    // 03 - nome dell'appuntamento
    const meetingName = document.getElementById('newMeetingName').value;
    // 04 - creo la stringa dell'appuntamento
    const stringaAppuntamento = `${meetingTime} - ${meetingName}`;
    // 05 - scrivo l'appuntamento nell'array
    const indiceArray = Number(selectedDay) - 1; // devemos colocar -1 para que acha o dia correto
    // console.log('array prima del salve', appointments);
    appointments[indiceArray].push(stringaAppuntamento);
    //console.log('array dopo il salve', appointments);

   // Creo un pallino che evidenzi nel calendario la presenza di un appuntamento
   const pallino = document.createElement('div');
   pallino.classList.add('pallino'); // puxamos essa class do css
   // cerco il div del giorno selezionato 
   const divSelezionato = document.querySelector('.selected');  // selected chama class - o . chama uma class
   if (!divSelezionato.querySelector('.pallino')) {
    divSelezionato.appendChild(pallino);  // aqui, se tivemos um pallino na cella selecionada (bolinha) ela não aparecerà, apenas a pallino do texto
   } 
   mostraAppuntamenti(indiceArray);
});


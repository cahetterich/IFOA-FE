     /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
      //const changeTitle = function () {}

       newPageTitle = 'Pratica Sett 3 G2'; // title
       document.title = newPageTitle;

       testoH1 = 'Pratica Sett 3 G2';  // h1
       document.querySelector('h1').textContent = testoH1;

       console.log('- Esercizio 1 -');
       console.log(newPageTitle);

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
      //const addClassToTitle = function () {}    
     
       const addClassToTitle = document.getElementById('titolo'); 
       addClassToTitle.classList.toggle('myHeading');

       console.log('- Esercizio 2 -');
       console.log(addClassToTitle);

       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div   */ 
       //  const changePcontent = function () {}    
      
         const changePcontent = function () {
         document.querySelector("div p").innerText = "Questo è il testo modificato di un placeholder per gli esercizi";
        };

        changePcontent();

       /*const changePcontent = document.querySelectorAll('.idPadre .pFigli'); 
        changePcontent.forEach(element => {
        document.querySelector('pFigli').textContent = newTestoP;
       
        });*/       

       console.log('- Esercizio 3 -');
      
       /* ESERCIZIO 4  
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = document.querySelector ("#link4");
       changeUrls.href = "https://www.google.com";

 
       console.log('- Esercizio 4 -');
       console.log(changeUrls);

       /* ESERCIZIO 5    <ul id="secondList"> <li> 3 i
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
       /*const addToTheSecond = document.querySelector(#secondList, li) {  // ERROOOO
        let listaEl =  addToTheSecond.push ("Nuova linea");
    }
    
       console.log('- Esercizio 5 -');
       console.log(listaEl);*/

       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {}
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       const hideFirstUl = function () {}
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {}
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
       const makeItClickable = function () {}
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {}
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {}
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {}
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {}
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {}
 
       /* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () {}
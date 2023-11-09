const btn = document.getElementById('invia');
// * ADDEVENTLISTERNER - ativa uma volta, e fine até quando deve ocorrer * CLICK = ação
btn.addEventListener('click', function (e) {  // METODO GET = MANDA DADOS E BUSCA FILE 
	//e.preventDefault();
	let form = document.querySelector('form');  // no momento do click dizemos todos os dados incluidos e sua validade segundo o que escrevemos no HTML
	let nome = document.getElementById('nome');
	let cognome = document.getElementById('cognome');
	let email = document.getElementById('email');
	let eta = document.getElementById('eta');

	if (!cognome.checkValidity()) {
		cognome.style.backgroundColor = 'red';  // ESCREGVE EM ROSSO O QUE NÃO ESTIVER INSERIDO NO CAMPO
		document.getElementById('nomeForm').innerText =
			cognome.validationMessage;
		return;
	} else if (!email.checkValidity()) {
		email.style.backgroundColor = 'red';
		document.getElementById('nomeForm').innerText = email.validationMessage;
		return;
	} else if (!eta.checkValidity()) {
		eta.style.backgroundColor = 'red';
		document.getElementById('nomeForm').innerText = eta.validationMessage;
		return;
	}

	cognome.style.backgroundColor = 'transparent';  // SE TUDO ESTIVER CERTO, VOLTA A SER TRANSPARENTE
	email.style.backgroundColor = 'transparent';  // MAS DEVEMOS COLCOAR TUDO TRANSPARENTE
	eta.style.backgroundColor = 'transparent';

	nome = nome.value;
	cognome = cognome.value;
	email = email.value;
	eta = eta.value;

	confirm('Sei sicuro dei dati inseriti?');   // CONFIRMAR DADOS ? 

	if (confirm) {
		document.getElementById('nomeForm').innerText = nome;
		document.getElementById('cognomeForm').innerText = cognome;
		document.getElementById('emailForm').innerText = email;
		document.getElementById('etaForm').innerText = eta;
	} else {
		form.reset();  // COM TUDO CERTO, CANCELA O FORM
	}
});

// setTimeout

let btnRigenera = document.getElementById('ricrea');  //BUSCA
function generaCodice() {   // GERA CÓDIGO
    btnRigenera.setAttribute('disabled', 'true');
    document.getElementById('rigenera').innerText = ''
    document.getElementById('codice').style.textDecoration = 'none';

    let codice = Math.floor(Math.random() * 100001);
    if(codice < 100000) {   // SE O CÓDIGO FOR MENOR QUE 100000, ADICIONA RANDOM 100000 (CÓDIGO DE 6 DIGITOS)
        codice = codice + 100000;
    }
    document.getElementById('codice').innerText = codice;  // ESCREVEMOS O CÓDIGO
    scadenza(); // E DETERMINAMOS A SUA ESCADENZA
}

const scadenza = (() => {    // DETERMINAMOS O NOME DO TIMEOUT
    setTimeout(() => {
        rigenera();  // SETTIMEAOUT DEVE FAZ - O QUE DEVE ACONTECER - function rigenera ()
    }, 5000);  // POR QUANTO MILESEGUNDOS DEVE FAZER? 
});

// function scadenza() {    
//     setTimeout(() => {
//         rigenera();
//     }, 5000);
// }

function rigenera() {  // APÓS OS MILESEGUNDOS, O CÓDIGO CANCELA E DEVEMOS GERAR UM NOVO código
    document.getElementById('codice').style.textDecoration = 'line-through';
    document.getElementById('rigenera').innerText = 'Codice scaduto, rigenerare!' // AVISO AO UTENTI CODIGO SCADUTO
    btnRigenera.removeAttribute('disabled');
}

generaCodice(); // PUXA NOVAMENTE O INICIO DA FUNÇÃO, PARA PODER GERAR UM NOVO CÓDIGO! 

// setInterval 

let barra = document.getElementById('barra');  // CHAMAMOS A BARRA

const avviaTimer = (() => {  // DETERMINAMOS UMA CONST
    let timer = 0;  // ELA VAI PARTIR DA ZERO
    barra.style.width = '0px';
    document.getElementById('stop').innerText = ''; // ESSA BARRA ESTÁ COM ERRO ** POIS NÃO PARA QUANDO SOLICITADO /STOP/
    document.getElementById('percentuale').innerText = '';
    document.getElementById('stop').innerText = '';

    setInterval(() => {  // AQUI PUXARÁ O QUE VAI ACONTECER
        if (timer < 501) { // POR QUANTO TEMPO < 501 
            barra.style.width = `${timer}px`;  // AUMENTA A LARGURA DA BARRA
            let percentuale = timer / 5;  // AUMENTA INCREMENTA 5 PX  POR MILISEGUNDO 
            document.getElementById('percentuale').innerText = `${percentuale}` // MOSTRA O PERCENTUAL DE CARREGAMENTO DA BARRA
            timer++;  //  DEPOIS DE 10 MILISEGUNDOS  TIMER++
        } else { // SERVE PARA BLOCAR, SE NÃO TIVER O IF E ELSE FICARIA CARREGANDO A BARRA INFINITAMENTE
            document.getElementById('stop').innerText = 'Progress Bar interrotta';
            clearInterval(avviaTimer); // APÓS TERMIANR O CARREGAMENTO, FIRMA QUI! 
        }
    }, 10); // EM QUANTO TEMPO - 10 MILISEGUNDOS 
});

// avviaTimer();
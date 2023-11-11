/*
Correto utilizzo del DOM per creare una task list (detta anche to-do-list) dinamica in JavaScript

Requisiti: 

*All'avvio l'applicazione deve apresentare un tag INPUT per poter inserire il nome del nuovo task

*Un bottone a fianco del tag input aggiungerà il testo inserito alla lista dei task sottostante

*Ogni task nella lista deve poter reagire al click del mouse, che lo segnerà come "completato" 
(un task completato si differenzia per il testo attraversato da una linea orizzontale)

* Ogni task nella lista deve poter essere eliminato individualmente tramite un bottone dedicato

* Cerca di rendere l'applicazione accattivante nello stile e piacevole da utilizzare per l'utente!

*/

// Dimensione Browser: 1024x768

const addBtn = document.querySelector('#inserisci');
let taskList = document.querySelector('#listaTask');
const task = document.querySelector('#task');
const tasks = [];

addBtn.addEventListener('click', function () {
	if (task.value !== '') {
		aggiungiTask();
		scriviLista();
		cancellaInput();
	} else {
		alert('Inserire un task nel campo di input!');
		return;
	}
});

const aggiungiTask = () => {
	tasks.push(task.value);
};

const scriviLista = () => {
	taskList.innerHTML = '';
	tasks.forEach((element, index) => {
		let singletask = document.createElement('li');
        singletask.style.borderBottom = '1px solid gray';
		singletask.innerHTML = `${element} <button class="button" onclick="elimina(${index})"> <i class="fa-solid fa-xmark"></i> </button>`;
		taskList.appendChild(singletask);
	});
	barraTask();
};

function cancellaInput() {
	task.value = '';
}

function elimina(index) {
	tasks.splice(index, 1);
	scriviLista();
}

function barraTask() {
	const elencoTask = document.querySelectorAll('li');
	elencoTask.forEach((element) => {
		element.onclick = function () {
			element.classList.toggle('barrato');
		};
	});
}

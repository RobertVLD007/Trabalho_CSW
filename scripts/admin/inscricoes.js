


const element1 = document.getElementById('element1');
element1.classList.add('filter-active');
function buttonActive(buttonId) {
	let element2 = document.getElementById('element2');
	let element3 = document.getElementById('element3');
	switch (buttonId){
	case 'element1':
		element2.classList.remove('filter-active');
		element3.classList.remove('filter-active');
		element2.classList.add('default');
		element3.classList.add('default');
		element1.classList.add('filter-active');
		break;
	case 'element2':
		element1.classList.remove('filter-active');
		element3.classList.remove('filter-active');
		element1.classList.add('default');
		element3.classList.add('default');
		element2.classList.add('filter-active');

		break;
	case 'element3':
		element1.classList.remove('filter-active');
		element2.classList.remove('filter-active');
		element1.classList.add('default');
		element2.classList.add('default');
		element3.classList.add('filter-active');
		break;
	}
}

// ==========================================================
// CATEGORIA 2

const element4 = document.getElementById('element4');
const conteudo1 = document.getElementById('conteudo#1');
const conteudo2 = document.getElementById('conteudo#2');

conteudo1.classList.add('conteudo-active');

element4.classList.add('filter-active');
function buttonActive2(buttonId) {
	let element5 = document.getElementById('element5');

	switch (buttonId){
	case 'element4':
		element5.classList.remove('filter-active');
		element5.classList.add('default');
		element4.classList.add('filter-active');

		conteudo2.classList.remove('conteudo-active');
		conteudo2.classList.add('conteudo-default');
		conteudo1.classList.add('conteudo-active');

		break;
	case 'element5':
		element4.classList.remove('filter-active');
		element4.classList.add('default');
		element5.classList.add('filter-active');

		conteudo1.classList.remove('conteudo-active');
		conteudo1.classList.add('conteudo-default');
		conteudo2.classList.add('conteudo-active');

		break;
	}
}

// ============================================================
// LISTA DE SOLICITACOES



function listActive(tipo) {
	let element = document.getElementById(tipo);
	let checkbox = document.getElementById(tipo+'-check');
	if(checkbox.checked) {
	element.classList.add("list-active");
	} else {
	element.classList.remove("list-active");
	}

}
function openMail(tipo) {
let valor = document.getElementById(tipo).value;
const mail = document.getElementById('mail#'+valor);
const allMails = document.querySelectorAll('[id^="mail#"]');
    allMails.forEach(mail => {
        mail.classList.remove('mail-active');
    });
 mail.classList.add('mail-active');
}
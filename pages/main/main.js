const typeForm = document.forms.type;
const tickets = typeForm.elements.tickets;
const basicBtnDec = document.querySelector('#basic-btn-dec');
const basicBtnInc = document.querySelector('#basic-btn-inc');
const seniorBtnDec = document.querySelector('#senior-btn-dec');
const seniorBtnInc = document.querySelector('#senior-btn-inc');
const basicInput = document.querySelector('#basic-input');
const seniorInput = document.querySelector('#senior-input');
const buyNowBtn = document.querySelector('#buy-now-btn');

basicBtnDec.onclick = function(event) {
	decBasicValue();
}

basicBtnInc.onclick = function(event) {
	incBasicValue();
}

seniorBtnDec.onclick = function(event) {
	decSeniorValue();
}

seniorBtnInc.onclick = function(event) {
	incSeniorValue();
}

buyNowBtn.onclick = function(event) {
	showSelectedTickets();
}

function decBasicValue() {
	if (basicInput.value < 1) return;
	basicInput.value--;
}

function incBasicValue() {
	basicInput.value++;
}

function decSeniorValue() {
	if (seniorInput.value < 1) return;
	seniorInput.value--;
}

function incSeniorValue() {
	seniorInput.value++;
}

function showSelectedTickets() {
	let result = '';

	result = `Selected tickets type: ${tickets.value}, number of basic tickets: ${basicInput.value}, number of senior tickets: ${seniorInput.value}`;

	console.log(result);
}
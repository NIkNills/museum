const typeForm = document.forms.type,
	  tickets = typeForm.elements.tickets,
	  basicBtnDec = document.querySelector('#basic-btn-dec'),
	  basicBtnInc = document.querySelector('#basic-btn-inc'),
	  seniorBtnDec = document.querySelector('#senior-btn-dec'),
	  seniorBtnInc = document.querySelector('#senior-btn-inc'),
	  basicInput = document.querySelector('#basic-input'),
	  seniorInput = document.querySelector('#senior-input'),
	  buyNowBtn = document.querySelector('#buy-now-btn');

basicBtnDec.addEventListener('click', function(){
	if (basicInput.value < 1) return;
	basicInput.value--;
});

basicBtnInc.addEventListener('click', () => basicInput.value++);

seniorBtnDec.addEventListener('click', function(){
	if (seniorInput.value < 1) return;
	seniorInput.value--;
});

seniorBtnInc.addEventListener('click', () => seniorInput.value++);

buyNowBtn.addEventListener('click', () => console.log(`Selected tickets type: ${tickets.value}; number of basic tickets: ${basicInput.value}; number of senior tickets: ${seniorInput.value}`));
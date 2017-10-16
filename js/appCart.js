window.addEventListener('DOMContentLoaded', function(events)
{
	let quantity = document.getElementsByClassName("quantity-btn");
	let btnSub = [];
	let btnPlus = [];
	let inputNum = [];
	for(let i =0; i < quantity.length; i++){
		btnSub[i] = quantity[i].querySelector('.btn-sub');
		btnPlus[i] = quantity[i].querySelector('.btn-plus');
		inputNum[i] = quantity[i].querySelector('.input-num');
		btnSub[i].addEventListener('click', function(events)
		{
			
			let valueInput = parseInt(inputNum[i].value);
			valueInput = valueInput - 1;
			if(valueInput < 0){
				valueInput = 0;
			}
			inputNum[i].value = valueInput;
		});
		btnPlus[i].addEventListener('click', function(events)
		{

			let valueInput = parseInt(inputNum[i].value);
			valueInput = valueInput + 1;

			inputNum[i].value = valueInput;
		});
		
	}

	
	
});
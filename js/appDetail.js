window.addEventListener("DOMContentLoaded", function (events) 
{
	let quantity = document.getElementById('quantity');
	let btnSub = quantity.querySelector(".btn-sub");
	let btnPlus = quantity.querySelector(".btn-plus");
	let intNum = quantity.querySelector(".input-num");
	
	btnSub.addEventListener('click', function(events){
		let valueNum = parseInt(intNum.value);
		valueNum = valueNum - 1;
		if(valueNum < 0){
			valueNum =0;
		}
		intNum.value = valueNum;
		
	});
	btnPlus.addEventListener('click', function(events){
		let valueNum = parseInt(intNum.value) ;
		valueNum = valueNum + 1;
		intNum.value = valueNum; 
	});
});
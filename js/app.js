
window.addEventListener("DOMContentLoaded", function (event) 
{

	let loginBox = document.getElementById("login-register");
	// show login and register box
	let account = document.getElementById("account");
	account.addEventListener("click", function(event)
	{
		var display = loginBox.style.display;
		console.log(display);
		
		loginBox.style.display = 'block';
		
	});
	// close login and register box
	let closeLogin = document.getElementById('close-login-box');
	closeLogin.addEventListener("click", function(event)
	{
		loginBox.style.display = 'none';
	});
	// slide images head
	//let slideHead = document.getElementById("head-slide");
	let listImagesHead = document.getElementById("list-images-head");
	let indImageHead = -1;
	function handleIndexHead (n)
	{
		indImageHead = indImageHead + n;
		if (indImageHead < 0) {
			indImageHead = 1;
		} else{
			if (indImageHead > 1){
				indImageHead = 0;
			}
		};
	}
	function slideHead(n)
	{
		handleIndexHead(n);

		listImagesHead.style.transition = 'transform 1s ease';
		listImagesHead.style.transform = 'translateX(' + indImageHead * -1280 + 'px)';
	}
	function controlSlideHead()
	{
		slideHead(1);
		setTimeout(controlSlideHead, 4000);
	}
	controlSlideHead();
	// slid hot products
	let listImagesHot = document.getElementById("list-hot-products");
	let indImageHot = -1;
	function handleIndexHot (n)
	{
		indImageHot = indImageHot + n;
		if (indImageHot < 0) {
			indImageHot = 5;
		} else{
			if (indImageHot > 5){
				indImageHot = 0;
			}
		};
	}
	function slideHotProducts(n)
	{
		handleIndexHot(n);

		listImagesHot.style.transition = 'transform 1s ease';
		listImagesHot.style.transform = 'translateX(' + indImageHot * -270 + 'px)';
	}
	function controlSlideHot()
	{
		slideHotProducts(1);
		setTimeout(controlSlideHot, 3000);
	}
	controlSlideHot();
});
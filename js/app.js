
window.addEventListener("DOMContentLoaded", function (event) 
{
	var body = document.getElementsByTagName("body")[0];

	var slideBoxHead = document.getElementById("slide-box-head");
	var liTags = slideBoxHead.querySelectorAll("li");
	var widthWindow;
	for (let i = 0; i < liTags.length; i++) {
		widthWindow = window.innerWidth;
		liTags[i].style.width = widthWindow + "px";
		
		console.log(liTags[i].style.width);
	}
	window.addEventListener("resize", function(){
		for (let i = 0; i < liTags.length; i++) {
			widthWindow = window.innerWidth;
			liTags[i].style.width = widthWindow + "px";
			
			console.log(liTags[i].style.width);
		}

	});
	
	var loginBox = document.getElementById("login-register");
	// show login and register box
	var account = document.getElementById("account");
	account.addEventListener("click", function(event)
	{
		let display = loginBox.style.display;
		loginBox.style.display = 'block';
	});
	// close login and register box
	var closeLogin = document.getElementById('close-login-box');
	closeLogin.addEventListener("click", function(event)
	{
		loginBox.style.display = 'none';
	});
	// toggle mobile menu
	var btnMenu = document.getElementById("btn-menu");
	var mobileMenu = document.getElementById("mobile-menu");
	btnMenu.addEventListener("click", function(event)
	{
		let isShow = mobileMenu.style.display;
		if (isShow == "none") {
			mobileMenu.style.display = "block";
		} else{
			mobileMenu.style.display = "none";
		};
		
	});
	// slide hot products
	var listImagesHot = document.getElementById("list-hot-products");
	var prev = document.getElementById("btn-prev");
	var next = document.getElementById("btn-next");
	var indImageHot = -1;

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
	function plusImageHot(n)
	{

		handleIndexHot(n);
		let width = indImageHot * (-220);

		listImagesHot.style.transition = 'transform 0.1s ease';
		listImagesHot.style.transform = `translateX( ${width}px)`;
		

	}

	function slideHotProducts(n)
	{
		
		handleIndexHot(n);
		let width = indImageHot * (-220);
		listImagesHot.style.transition = 'transform 1s ease';
		listImagesHot.style.transform = `translateX( ${width}px)`;
	}
	
	function controlSlideHot()
	{
		slideHotProducts(1);
		setTimeout(controlSlideHot, 3000);

	}
	controlSlideHot();
	prev.addEventListener("click", function()
	{
		plusImageHot(-1);
	});
	next.addEventListener("click", function()
	{
		plusImageHot(1);
	});
	
	// slide images head
	
	var listImagesHead = document.getElementById("list-images-head");
	var indImageHead = -1;
	function handleIndexHead (n)
	{
		indImageHead = indImageHead + n;
		if (indImageHead < 0) {
			indImageHead = 7;
		} else{
			if (indImageHead > 7){
				indImageHead = 0;
			}
		};
	}
	function slideHead(n)
	{
		handleIndexHead(n);
		let widthSlide = indImageHead * (-widthWindow);
		listImagesHead.style.transition = 'transform 1s ease';
		listImagesHead.style.transform = `translateX( ${widthSlide}px)`;
	}
	function controlSlideHead()
	{
		slideHead(1);
		setTimeout(controlSlideHead, 4000);
	}
	controlSlideHead();
	
	
});
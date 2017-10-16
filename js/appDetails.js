window.addEventListener("DOMContentLoaded", function(events)
{
	// slide hot products
	let listImagesHot = document.getElementById("list-hot-products");
	let prev = document.getElementById("btn-prev");
	let next = document.getElementById("btn-next");
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
	function plusImageHot(n)
	{
		handleIndexHot(n);
		listImagesHot.style.transition = 'transform 0.1s ease';
		listImagesHot.style.transform = 'translateX(' + indImageHot * -270 + 'px)';
		

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
	prev.addEventListener("click", function()
	{
		plusImageHot(-1);
	});
	next.addEventListener("click", function()
	{
		plusImageHot(1);
	});
});
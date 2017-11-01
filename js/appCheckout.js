window.addEventListener("DOMContentLoaded", function(events)
{
	// show and hidelogin and register box
	let loginBox = document.getElementById("login-register");
	
	let account = document.getElementById("account");
	account.addEventListener("click", function(event)
	{
		var display = loginBox.style.display;
		loginBox.style.display = 'block';
	});

	let closeLogin = document.getElementById('close-login-box');
	closeLogin.addEventListener("click", function(event)
	{
		loginBox.style.display = 'none';
	});
});
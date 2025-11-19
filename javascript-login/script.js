let attempts = 0 




function login() {
	let username = document.getElementById("username").value
	let password = document.getElementById("password").value
	//console.log(username);
	//console.log(password);

	let correct_username = "helen-akl"
	let correct_password = "lioneliscool"

	attempts = attempts+1;

	if(username == correct_username && password == correct_password) {
		window.location.href="https://media.newyorker.com/photos/590965162179605b11ad602e/master/pass/130722_r23742_g2048.jpg"
	}
	else if (attempts>=3) {
		alert("You ran out of attempts")
		document.getElementById("login").disabled = true;
	}
	else {
		alert("Either your username or your password is incorrect")
	}
}
function agerator() {

	let age = document.getElementById("age").value;

/*	if (age == 10) {
		alert("You're the best age!!")

	} 
	else { // we know we are not 10
		if (age > 10) {
			alert("You were the best age" + (age-10) + " years ago.")
		}

		else {
			alert("You will be the best age in " + (10-age) + " years. young chump.")
		}
		}
}*/

	let message = document.getElementById("message");

	if (age == 10) {
		message.innerText= "You are the best age!" ;
	}
		else if (age > 10) {
			message.innerText = "You were the best age " + (age-10) + " years ago" ;
		}

		else if (age < 0) {
			message.innerText = "Age invalid. Be serious." ;
		}


		else {
			message.innerText = "You will be the best age in " + (10-age) + " years" ;
		}

}

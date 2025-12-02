function converter() {

	const dog= new Audio("free-dog-bark-419014.mp3");
	dog.play();

	document.body.style.backgroundColor="#b2c4aa" ;

	let money = document.getElementById("money").value ;

	const eur = money*0.86
	const gbp = money*0.76
	const cad = money*1.40
	const chf = money*0.8
	const jpy = money*155.94

	const outputeur = "Your input is equal to " + eur + " Euros."
	const outputgbp = "Your input is equal to " + gbp + " Pound Sterlings."
	const outputcad = "Your input is equal to " + cad + " Canadian Dollars."
	const outputchf = "Your input is equal to " + chf + " Swiss Francs."
	const outputjpy = "Your input is equal to " + jpy + " Yen."

	document.getElementById("eur").innerText = outputeur;
	document.getElementById("gbp").innerText = outputgbp;
	document.getElementById("cad").innerText = outputcad;
	document.getElementById("chf").innerText = outputchf;
	document.getElementById("jpy").innerText = outputjpy;



}
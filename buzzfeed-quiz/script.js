let resultsCounter = 0

function getResults() {
	let deadrats = document.getElementById('deadrats');
	if(deadrats.checked) { // if filled in
		console.log("The user chose dead rats");
		resultsCounter = resultsCounter + 0;
	}

	let bears = document.getElementById('bears');
	if(bears.checked) {
		console.log("The user chose bears");
		resultsCounter = resultsCounter + 1;
	}

	let humans = document.getElementById('humans');
	if(humans.checked) {
		console.log("The user chose humans");
		resultsCounter = resultsCounter + 2;
	}

	let twofaces = document.getElementById('twofaces');
		if(twofaces.checked) {
			console.log("The user chose twofaces");
			resultsCounter = resultsCounter + 0;
		}

	let hat = document.getElementById('hat');
		if(hat.checked) {
			console.log("The user chose hat");
			resultsCounter = resultsCounter + 1;
		}

	let animalskin = document.getElementById('animalskin');
		if(animalskin.checked) {
			console.log("The user chose animalskin");
			resultsCounter = resultsCounter + 2;
		}

	let thumbsup = document.getElementById('thumbsup');
		if(thumbsup.checked) {
			console.log("The user chose thumbsup");
			resultsCounter = resultsCounter + 0;
		}

	let beetle = document.getElementById('beetle');
		if(beetle.checked) {
			console.log("The user chose beetle");
			resultsCounter = resultsCounter + 1;
		}

	let humanface = document.getElementById('humanface');
		if(humanface.checked) {
			console.log("The user chose humanface");
			resultsCounter = resultsCounter + 2;
		}

	let twofigures = document.getElementById('twofigures');
			if(twofigures.checked) {
				console.log("The user chose twofigures");
				resultsCounter = resultsCounter + 0;
			}

	let racoon = document.getElementById('racoon');
			if(racoon.checked) {
				console.log("The user chose racoon");
				resultsCounter = resultsCounter + 1;
			}

	let butterfly = document.getElementById('butterfly');
			if(butterfly.checked) {
				console.log("The user chose butterfly");
				resultsCounter = resultsCounter + 2;
			}

	if(resultsCounter == 0) {
		document.getElementById("body").style.backgroundColor="#fbf8cc";
		const soundOne= new Audio("taco-bell-bong-sfx-120135.mp3");
		soundOne.play();
		document.getElementById("bigresult").innerText="You are ... TACO BELL!"
		document.getElementById("imageresult").src = "tacobell.png"
		document.getElementById("littleresult").innerText="Your answers suggest you are very go-with-the-flow, but you also have a bit of spice!"
	}

	if(resultsCounter == 1) {
		document.getElementById("body").style.backgroundColor="#fde4cf";
		const soundTwo= new Audio("cow-moo-390282.mp3");
		soundTwo.play();
		document.getElementById("bigresult").innerText="You are ... CHICK-FILA!"
		document.getElementById("imageresult").src = "chickfila.png"
		document.getElementById("littleresult").innerText="Your answers suggest you are a cow who loves chicken! Huh"
	}

	if(resultsCounter == 2) {
		document.getElementById("body").style.backgroundColor="#ffcfd2";
		const soundThree= new Audio("tada-fanfare-a-6313.mp3");
		soundThree.play();
		document.getElementById("bigresult").innerText="You are ... McDONALDS!"
		document.getElementById("imageresult").src = "mcdonalds.png"
		document.getElementById("littleresult").innerText="Your answers suggest you love the classics, and might be a little boring. Sorry!"
	}

	if(resultsCounter == 3) {
		document.getElementById("body").style.backgroundColor="#f1c0e8";
		const soundThree= new Audio("tada-fanfare-a-6313.mp3");
		soundThree.play();
		document.getElementById("bigresult").innerText="You are ... CULVERS !"
		document.getElementById("imageresult").src = "culvers.jpeg"
		document.getElementById("littleresult").innerText="Your answers suggest you LOVEE the midwest and have fantastic taste."
	}

	if(resultsCounter == 4) {
		document.getElementById("body").style.backgroundColor="#cfbaf0";
		const soundSix= new Audio("cricket-chirp-101026.mp3");
		soundSix.play();
		document.getElementById("bigresult").innerText="You are ... ARBY'S !"
		document.getElementById("imageresult").src = "arbys.png"
		document.getElementById("littleresult").innerText="Your answers suggest you are a little strange and clearly compensating for something. Look into self-help."
	}

	if(resultsCounter == 5) {
		document.getElementById("body").style.backgroundColor="#a3c4f3";
		const soundFive= new Audio("yay-6326.mp3");
		soundFive.play();
		document.getElementById("bigresult").innerText="You are ... WENDY'S !"
		document.getElementById("imageresult").src = "wendys.png"
		document.getElementById("littleresult").innerText="Your answers suggest you are a sassy little ginger girl at heart."
	}

	if(resultsCounter == 6) {
		document.getElementById("body").style.backgroundColor="#90dbf4";
		const soundSix= new Audio("cricket-chirp-101026.mp3");
		soundSix.play();
		document.getElementById("bigresult").innerText="You are ... RAISING CANES!"
		document.getElementById("imageresult").src = "raisingcanes.png"
		document.getElementById("littleresult").innerText="Your answers suggest you are a huge trend follower who loves bland food."
	}

	if(resultsCounter == 7) {
		document.getElementById("body").style.backgroundColor="#8eecf5";
		const soundSeven= new Audio("sad-trumpet-46384.mp3");
		soundSeven.play();
		document.getElementById("bigresult").innerText="You are ... CHIPOTLE!"
		document.getElementById("imageresult").src = "chipotle.png"
		document.getElementById("littleresult").innerText="Your answers suggest you are an incredibly nostalgic person who needs to let go of the past. Burritos will never be below $14 again, and deep down, you know that." 
	}

	if(resultsCounter == 8) {
		document.getElementById("body").style.backgroundColor="#b9fbc0";
		const soundSeven= new Audio("sad-trumpet-46384.mp3");
		soundSeven.play();
		document.getElementById("bigresult").innerText="You are ... BURGER KING!"
		document.getElementById("imageresult").src = "burgerking.png"
		document.getElementById("littleresult").innerText="Your answers suggest you are have a massive ego and no substance. Make sure to think before you claim yourself the King of anything"
	}


}
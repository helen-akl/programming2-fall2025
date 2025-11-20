function makeName() {
	let month = document.getElementById("month").value;
	let age = document.getElementById("age").value.toLowerCase();
	let day = document.getElementById("day").value;

	console.log(month)
	console.log(age)
	console.log(day)

	let namefirst=""
	let namesecond =""
	let namethird=""



	if (age < 10) {
		namefirst ="bubba"
		document.getElementById("result").style.fontSize = "10px" ;
	}

		else if (age < 20) {
			namefirst="beepdeepy"
			document.getElementById("result").style.fontSize = "25px" ;
		}

		else if (age < 30) {
			namefirst="bling"
			document.getElementById("result").style.fontSize = "40px" ;
		}

		else if (age < 40) {
			namefirst = "bip"
			document.getElementById("result").style.fontSize = "55px" ;
		}

		else {
			namefirst = "bap"
			document.getElementById("result").style.fontSize = "65px" ;
		}

	if (month == "january") {
		namesecond = "jo"
		document.getElementById("result").style.color="blue"
	}

		else if (month == "february") {
			namesecond = "jim"
			document.getElementById("result").style.color="blue"
		}

		else if (month == "march") {
			namesecond ="john"
			document.getElementById("result").style.color="green"
		}

		else if (month == "april") {
			namesecond ="jorge"
			document.getElementById("result").style.color="green"
		}

		else if (month =="may") {
			namesecond = "jar"
			document.getElementById("result").style.color="green"
		}

		else if (month == "june") {
			namesecond ="nan"
			document.getElementById("result").style.color="purple"
			document.getElementById("result").style.fontSize = "50px" ;
		}

		else if (month == "july") {
			namesecond= "zan"
			document.getElementById("result").style.color="purple"
		}

		else if (month == "august") {
			namesecond="fetty" 
			document.getElementById("result").style.color="purple"
		}

		else if (month == "september") {
			namesecond ="oppo"
			document.getElementById("result").style.color="orange"
		}

		else if (month == "october") {
			namesecond ="beep"
			document.getElementById("result").style.color="orange"
		}

		else if (month == "november") {
			namesecond ="loop"
			document.getElementById("result").style.color="orange"
		}

		else if (month == "december") {
			namesecond ="coppa"
			document.getElementById("result").style.color="blue"
		}


	if (day == "monday") {
		namethird ="boom"
		document.getElementById("result").style.backgroundColor = "LightPink" ;
	}
		else if (day=="tuesday") {
			namethird ="baddabing"
			document.getElementById("result").style.backgroundColor = "LightPurple" ;
		}
		else if (day=="wednesday") {
			namethird ="loopy"
			document.getElementById("result").style.backgroundColor = "CadetBlue" ;
		}
		else if (day=="thursday") {
			namethird ="splat"
			document.getElementById("result").style.backgroundColor = "DarkSeaGreen" ;
		}
		else if (day=="friday") {
			namethird ="ploop"
			document.getElementById("result").style.backgroundColor = "LightSlateBlue" ;
		}
		else if (day=="saturday") {
			namethird ="GeorgeWashington"
			document.getElementById("result").style.backgroundColor = "LightBlue" ;
		}
		else if (day=="sunday") {
			namethird ="crap"
			document.getElementById("result").style.backgroundColor = "LightGreen" ;
		}

	const result = namefirst + " " + namesecond + " " + namethird ;
	document.getElementById("result").innerText = result;


}

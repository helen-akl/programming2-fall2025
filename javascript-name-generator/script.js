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
	}

		else if (age < 20) {
			namefirst="beepdeepy"
		}

		else if (age < 30) {
			namefirst="bling"
		}

		else if (age < 40) {
			namefirst = "bip"
		}

		else {
			namefirst = "bap"
		}

	if (month == "january") {
		namesecond = "jo"
	}
		else if (month == "february") {
			namesecond = "jim"
		}

		else if (month == "march") {
			namesecond ="john"
		}

		else if (month == "april") {
			namesecond ="jorge"
		}

		else if (month =="may") {
			namesecond = "jar"
		}

		else if (month == "june") {
			namesecond ="nan"
		}

		else if (month == "july") {
			namesecond= "zan"
		}

		else if (month == "august") {
			namesecond="fetty" 
		}

		else if (month == "september") {
			namesecond ="oppo"
		}

		else if (month == "october") {
			namesecond ="beep"
		}

		else if (month == "november") {
			namesecond ="loop"
		}

		else if (month == "december") {
			namesecond ="coppa"
		}


	if (day == "monday") {
		namethird ="boom"
	}
		else if (day=="tuesday") {
			namethird ="baddabing"
		}
		else if (day=="wednesday") {
			namethird ="loopy"
		}
		else if (day=="thursday") {
			namethird ="splat"
		}
		else if (day=="friday") {
			namethird ="ploop"
		}
		else if (day=="saturday") {
			namethird ="GeorgeWashington"
		}
		else if (day=="sunday") {
			namethird ="crap"
		}

	const result = namefirst + " " + namesecond + " " + namethird ;

	document.getElementById("result").innerText = result;


}

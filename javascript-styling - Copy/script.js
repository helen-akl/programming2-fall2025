let counter =0;
function mode() {
	document.body.classList.toggle("dark");
	if (counter %2 ==0) { //dark mode
		const darkSound= new Audio("metal-pipe-230698.mp3");
		darkSound.play();
		document.getElementById("mode").innerText="Light 🌞"
		counter= counter +1;
	}

	else { //lightmode
		const lightSound= new Audio("prayer-for-souls-2-120-bpm-a-minor-365604.mp3");
		lightSound.play();
		document.getElementById("mode").innerText= "Dark 🌕"
		counter = counter +1;
	}
}
let counter =0;
function mode() {
	if (counter %2 ==0) { //dark mode
		const darkSound= new Audio("metal-pipe-230698.mp3");
		darkSound.play();

		document.body.style.color = "white" ;
		document.body.style.backgroundColor="darkSlateGrey" ;
		document.getElementById("navbar").style.color ="white"
		document.getElementById("navbar").style.backgroundColor ="darkSlateGrey"
		document.getElementById("welcome").style.backgroundColor="cadetBlue"
		document.getElementById("welcome").style.color="white"
		document.getElementById("about").style.backgroundColor="darkSlateGrey"
		document.getElementById("welcome").style.color="white"
		document.getElementById("features").style.backgroundColor="darkGrey"
		document.getElementById("testimonials").style.backgroundColor="darkSlateGrey"
		document.getElementById("footer").style.backgroundColor="dimGrey"
		document.getElementById("footer").style.color="white"



		const link =document.getElementsByClassName("link");
		console.log(link);
		for (const item of link) {
			item.style.color ="white";
		}

		const card =document.getElementsByClassName("card");
		for (const item of card) {
			item.style.color="darkSlateGrey";
		}

		const testimonial=document.getElementsByClassName("testimonial-card");
		for (const item of testimonial) {
			item.style.color="darkSlateGrey"
		}

		const h4s = document.getElementsByTagName('h4');
		for (const item of h4s) {
			item.style.color="darkSlateGrey"
		}

		document.getElementById("mode").innerText="Light 🌞"
		counter= counter +1;
	}

	else { //lightmode
		const lightSound= new Audio("prayer-for-souls-2-120-bpm-a-minor-365604.mp3");
		lightSound.play();
		document.getElementById("mode").innerText= "Dark 🌕"
		counter = counter +1;

		document.body.style.color = "black" ;
		document.body.style.backgroundColor="white" ;
		document.getElementById("navbar").style.color ="black"
		document.getElementById("navbar").style.backgroundColor ="white"
		document.getElementById("welcome").style.backgroundColor="#e5edff"
		document.getElementById("welcome").style.color="black"
		document.getElementById("about").style.backgroundColor="whiteSmoke"
		document.getElementById("welcome").style.color="black"
		document.getElementById("features").style.backgroundColor="#f0f0f0"
		document.getElementById("testimonials").style.backgroundColor="white"
		document.getElementById("footer").style.backgroundColor="#ddd"
		document.getElementById("footer").style.color="black"



		const link =document.getElementsByClassName("link");
		console.log(link);
		for (const item of link) {
			item.style.color ="black";
		}

		const card =document.getElementsByClassName("card");
		for (const item of card) {
			item.style.color="black";
		}

		const testimonial=document.getElementsByClassName("testimonial-card");
		for (const item of testimonial) {
			item.style.color="black"
		}

		const h4s = document.getElementsByTagName('h4');
		for (const item of h4s) {
			item.style.color="black"
		}
	}
}
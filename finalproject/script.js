let stats= {
   "Ayla Pressman": {
      "#": 12,
      "Grade": "Junior",
      "mpg": 25.2,
      "ppg": 1.5,
      "apg": 1.8,
      "rpg": 4.2,
      "photo": "ayla.png"
   },
   "Cassie Rank": {
      "#": 21,
      "Grade": "Freshman",
      "mpg": 6.1,
      "ppg": 0.3,
      "apg": 0,
      "rpg": 0.6,
      "photo": "cassie.jpg"
   },
   "Helen Aklilu": {
      "#": 24,
      "Grade": "Senior",
      "mpg": 12.5,
      "ppg": 1.2,
      "apg": 0.5,
      "rpg": 3.7,
      "photo":"helen.jpg"
   },
   "Jojo Husbeck": {
      "#": 3,
      "Grade": "Senior",
      "mpg": 19.5,
      "ppg": 9.8,
      "apg": 0.2,
      "rpg": 6.8,
      "photo": "jojo.jpg"
   },
   "Jade Labkon": {
      "#": 0,
      "Grade": "Junior",
      "mpg": 9.3,
      "ppg": 0.3,
      "apg": 0,
      "rpg": 1.5,
      "photo": "jade.jpg"
   },
   "Khalia King": {
      "#": 22,
      "Grade": "Freshman",
      "mpg": 3,
      "ppg": 0,
      "apg": 0,
      "rpg": 0,
      "photo": "khalia.jpg"
   },
   "Kiley Moss": {
      "#": 4,
      "Grade": "Senior",
      "mpg": 16.8,
      "ppg": 1.8,
      "apg": 0.8,
      "rpg": 2.3,
      "photo": "kiley.jpg"
   },
   "Kate Stauber": {
      "#": 23,
      "Grade": "Sophmore",
      "mpg": 18.7,
      "ppg": 3.4,
      "apg": 0.5,
      "rpg": 1.8,
      "photo": "kate.jpg"
   },
   "Miriam Johnson": {
      "#": 1,
      "Grade": "Junior",
      "mpg": 24.5,
      "ppg": 5.9,
      "apg": 0.5,
      "rpg": 3.5,
      "photo": "miriam.jpg"
   },
   "Mia Vitacek": {
      "#": 33,
      "Grade": "Senior",
      "mpg": 13.9,
      "ppg": 1.3,
      "apg": 0.1,
      "rpg": 4.3,
      "photo": "mia.jpg"
   },
   "Sloane Kins": {
      "#": 10,
      "Grade": "Junior",
      "mpg": 26,
      "ppg": 8,
      "apg": 1.1,
      "rpg": 14.2,
      "photo": "sloane.jpg"
   },
   "Samantha Kovler": {
      "#": 20,
      "Grade": "Sophmore",
      "mpg": 8,
      "ppg": 0.6,
      "apg": 0,
      "rpg": 1.7,
      "photo": "samantha.jpg"
   },
   "Tyler Jones": {
      "#": 11,
      "Grade": "Sophmore",
      "mpg": 5.6,
      "ppg": 1.3,
      "apg": 0,
      "rpg": 0.6,
      "photo": "tyler.jpg"
   }
}

var items = Object.keys(stats)
var selectElem = document.getElementById("players");

for (var i = 0; i < items.length; i++){
  var item = items[i];
  var element = document.createElement("option");
  element.innerText = item;
  selectElem.append(element);
}

var mySelect = document.getElementById('playerselect');
 mySelect.onchange = (event) => {
     var playerName = event.target.value;
     var playerData = stats[playerName]
     console.log(playerData)
    document.getElementById("mpg").innerHTML=playerData["mpg"]
    document.getElementById("ppg").innerHTML=playerData["ppg"]
    document.getElementById("image").src="images/" + playerData["photo"]
    document.getElementById("gradennumber").innerHTML= playerData["Grade"] + ", #" + playerData["#"]
    document.getElementById("name").innerHTML= playerName
    document.getElementById("apg").innerHTML=playerData["apg"]
    document.getElementById("rpg").innerHTML=playerData["rpg"]

   

    
 }
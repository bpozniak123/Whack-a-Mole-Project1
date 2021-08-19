console.log("Whack-a-Mole")

//Game Selectors
const holesArr = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('#Score');

let lastHole;
let roundOver = false;
let score = 0;
let timer = 10;
let round = 1;

//Create a function setting up mole to pop up randomly
function randomTime(min, max){
	return Math.random() * (max - min) + min;
}

//function for array of holes. Need to eventually incorporate more logic to avoid mole pop up to same hole.
function setHoles(holesArr){ 
	const index = Math.floor(Math.random() * holesArr.length);
	const hole = holesArr[index];
	if (hole === lastHole) {
		return setHoles(holesArr)
	}
	lastHole = hole;
	return hole;
}
setHoles(holesArr)

//Create a function for the mole to come up
function moleMoves() {
	const timeSetup = randomTime(500, 1000); //how long the mole is up
	const hole = setHoles(holesArr); //random hole from the setHoles funct above
	hole.children[1].classList.add('up');
	setTimeout(() =>{
		hole.children[1].classList.remove('up');
		
	}, timeSetup);
}

let gameTime = setInterval(() => {
	const timerElement = document.querySelector('#Timer');
	timerElement.innerText = `Time: ${timer}`;
	timer--;

	if(!roundOver) {
			moleMoves();
		}

	if(timer === -1){
		clearInterval(gameTime)
		document.querySelector('start').disabled = false
		document.getElementById('endOfRound').style.display='block'
		console.log(timer)
	}
},1000)



function startGame(){
	document.getElementById('Score').textContent = "Score: 0";
	document.getElementById('Round').textContent = "Round: 1";

	moleMoves(moles,setHoles);
}

function whack(event){
	score++;
	document.getElementById('Score').textContent = `Score: ${score}` 
	console.log("Take that mole!")
}

moles.forEach(mole => mole.addEventListener('click', ()=>{
	whack()
}))

// let niceScoreImg = document.querySelector("img")


function niceScore(){
	if (score >= 5){
		return document.getElementById('endOfRound')
	}else{
		return document.getElementById()
	}
}

niceScore()
//End game
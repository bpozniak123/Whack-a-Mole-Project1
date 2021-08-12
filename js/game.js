console.log("Whack-a-Mole")

//Game Selectors
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('#Score');

let lastHole;
let gameOver = false;
let score = 0;

//Build blue print using a class - Construction of the "board"
// class Whack{
// 	constructor(name){
// 		this.name = name;
// 		this.timer = 30;
// 		this.gameOver = false;
// 		this.score = 0;
// 		this.round = 0;
// 		// this.highScore = [];
// 		this.moles = [];
// 		this.holes = [];
// 	}

// 	end() {
// 		let timeInterval = setInterval(()=>{
// 			this.gameGoing()
// 			if (this.gameOver === true) {
// 				clearInterval(timeInterval)
// 			} 

// 		})
// 	}
// }


//Use methods to create variables

//Create a function setting up mole to pop up randomly
function randomTime(min, max){
	return Math.random() * (max - min) + min;

}

//function for array of holes. Need to eventually incorporate more logic to avoid mole pop up to same hole.
function setHoles(holes){ 
	const index = Math.floor(Math.random() * hole.length);
	const hole = holes[index];
	if (hole === lastHole) {
		return setHoles(holes)
	}
	lastHole = hole;
	return hole;
}
	console.log(holes.length)


//Create a function for mole up
function moleMoves(){
	const timeSetup = randomTime(500, 1000);
	const hole = setHoles(holes);
	hole.classList.add('up');
	setTimeout(() =>{
		hole.classList.remove('up');
		if(!gameOver) moleMoves();
	}, timeSetup);
}
	
// Create the game 

const gameSetup = {
	//scoreboard
	//score
	//gameOver

}

function whack(){
	//click
	//score++
}


//End game
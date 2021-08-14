console.log("Whack-a-Mole")

//Problem- only running game logic once
//Problem- not displaying correct div for holeUp but is randomizing which hole is being called
//Problem mole not moving up

//Game Selectors
const holesArr = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('#Score');

let lastHole;
let gameOver = false;
let score = 0;

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
	console.log(holesArr)
	return hole;
}

//Create a function for the mole to come up
function moleMoves() {
	const timeSetup = randomTime(500, 1000); //how long the mole is up
	const hole = setHoles(holesArr); //random hole from the setHoles funct above
	// hole.classList.add('up'); 
	hole.children[1].classList.add('up');
}

setHoles(holesArr)
moleMoves(moles, setHoles)
//End game
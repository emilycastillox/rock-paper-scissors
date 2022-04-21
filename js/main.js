// the buttons do not work , need to be functional 
// determine if its let or const
//no event listner
// functions are empty
// human score is not called 



document.querySelector('#rock').addEventListener('click', playerThrowsRock)
document.querySelector('#scissors').addEventListener('click', playerThrowsScissors)
document.querySelector('#paper').addEventListener('click', playerThrowsPaper)

let botScore = 0
let	playerScore = 0


function playerThrowsRock(){
	let botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}

function playerThrowsScissors(){
	let botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsPaper(){
	let botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}

function getRandomWeapon(){
	let randomNumber = Math.random();
	let botsWeapon = randomNumber
	if(randomNumber < .33){
		botsWeapon='scissors';
	} else if (randomNumber > .33){
		botsWeapon = 'rock'
	} else if(randomNumber<.6666){
		botsWeapon='paper';
	}
	return botsWeapon;
}


function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon == playersWeapon){
		displayCompleteMessage("It's a tie.");
	} else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore()
	} else if (
		(playersWeapon=="scissors" && botsWeapon=="paper") ||
		(playersWeapon=="paper" && botsWeapon=="rock") ||
		(playersWeapon=="rock" && botsWeapon=="scissors") 
		){
		increasePlayerScore();
	}
}

function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you lost.");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("You won!");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
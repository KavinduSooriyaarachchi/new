// Generate a random number from 1-6

const firstRandomNumber =
  Math.floor(Math.random()*6)+1

// Random dice image
const firstDiceImage = 'assets/dice' + firstRandomNumber + '.svg';


function btn1click(){
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

}

// Generate a random number from 1-6

const secondRandomNumber =
  Math.floor(Math.random()*6)+1

// Random dice image
const secondDiceImage = 'assets/dice' + secondRandomNumber + '.svg';

function btn2click(){
document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);


// logic for winner
if(firstRandomNumber>secondRandomNumber){
  document.querySelector('h1').innerHTML = 'The Winner is User 1';
}else if(firstRandomNumber<secondRandomNumber){
  document.querySelector('h1').innerHTML = 'The Winner is User 2';
}else{
  document.querySelector('h1').innerHTML = 'It is a Draw!';
}
}

// let player1 = window.prompt("Enter Player 01 Name");
// let player2 = window.prompt("Enter Player 02 Name");


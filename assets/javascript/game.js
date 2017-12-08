// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// an array of categories and topics from the 90s
const words = [
	'Friends',
	'The Rugrats',
	'Bill Clinton',
	'Hey Arnold',
	'Tamagotchi',
	'Tupac',
	'Biggie',
	'Nirvana',
	'TLC',
	'Pulp Fiction',
	'Forrest Gump',
	'Beanie Babies',
	'Milky Pens',
	'Dunkaroos',
	'Will Smith'
];

// guesses remanining 

let guesses = 10;

// win counter

let wins = 0

// function is run whenever player presses a key
window.addEventListener('keyup', function(event){
	// determines if a key has been pressed
	const userGuess = event.key;

	// generate a random word from words array
	const randomWord = words[Math.floor(Math.random() * words.length)];
	console.log(randomWord);

	// set a variable for letter blanks
	let blanks = '';
	// split string into individual letters
	for (let i = 0; i < randomWord.length; i++) {
		console.log(randomWord.charAt(i));
		blanks = ' _ ' + ' '+ blanks;
		console.log(blanks);
		document.querySelector('#currentWord').innerHTML = blanks;
	}

	document.querySelector('#guesses').innerHTML = 'Number of guesses remaining... ' + guesses;
});

// function letterBlanks(blanks){
// 	let result = '';
// 	for (let i = 0; i < blanks.length; i++) {
// 		result = "_" + result;
// 	}



// const messages = {
// 	win: 'You Win!',
// 	lost: 'You Lost!',
// 	guessed: 'You already guessed that letter, please try again.',
// 	validLetter: 'Please enter a valid letter'
// };

// show how many guesses

// input information onto html document

// we want to get a random word from the array.
// function play(){
// 	return words[Math.floor(Math.random() * words.length)];
// }



// 	return result;
// }
// play();
// letterBlanks();
// Used to record how many times a letter can be pressed
let alphabet = [
		'a','b','c',
		'd','e','f',
		'g','h','i',
		'j','k','l',
		'm','n','o',
		'p','q','r',
		's','t','u',
		'v','w','x',
		'y','z'
	];
//Holds the all the words
let words =[
		'hulk',
		'thor',
		'iron man',
		'captain america',
		'nick fury',
		'jarvis',
		'black widow',
		'loki'
	];
//Holds randomWord
let randomWord = "";
//Holds letters in the word
let letters = [];
//Holds number of blanks in the word
let numberOfBlanks = 0;
//Holds Blanks and correct letter guesses
let blanks =[];
//Holds incorrect letter guesses
let incorrect = [];
//Counters
let win = 0;
let guesses = 9;
let correct = 0;


function resetGame()
{
	//Chooses word randombly from the words
	randomWord = words[Math.floor(Math.random() * words.length)];
	//Splits the randomWord into individual letters
	letters = randomWord.split('');
	//Get the number of blanks
	numberOfBlanks = letters.length;
	
	// set variables back to default
	letterGuessed = 0;
	correct = 0;
	guesses = 9;
	incorrect =[];
	blanks =[];
	alphabet = [
		'a','b','c',
		'd','e','f',
		'g','h','i',
		'j','k','l',
		'm','n','o',
		'p','q','r',
		's','t','u',
		'v','w','x',
		'y','z'
	];
	// test = false;
	startGame();
}
function startGame()
{
	//Chooses word randombly from the words
	randomWord = words[Math.floor(Math.random() * words.length)];
	//Splits the randomWord into individual letters
	letters = randomWord.split('');
	//Get the number of blanks
	numberOfBlanks = letters.length;
	
	// set variables back to default
	correct = 0;
	guesses = 9;
	incorrect =[];
	blanks =[];
	alphabet = [
		'a','b','c',
		'd','e','f',
		'g','h','i',
		'j','k','l',
		'm','n','o',
		'p','q','r',
		's','t','u',
		'v','w','x',
		'y','z'
	];

	//Populate the blanks
	for(var i = 0; i< numberOfBlanks; i++)
	{
		blanks.push('_');
		document.getElementById('underscores').innerHTML = blanks;
	}

	// dom manipulation 
	document.getElementById('underscores').innerHTML = blanks.join(' ');
	document.getElementById('guesses').innerHTML = guesses;
	document.getElementById('wins').innerHTML = win;
	document.getElementById('incorrect').innerHTML = incorrect;
	// Testing / Debugging
	// console.log(randomWord);
	// console.log(letters);
	// console.log(numberOfBlanks);
	// console.log(blanks);
}

function compareLetters(userKey)
{
				console.log('WORKING!');
				//If guess was correct 
				if(randomWord.indexOf(userKey) > -1)
				{
					//Loops depending on the amount of blanks 
					for(var i = 0; i < numberOfBlanks; i++)
					{
						//Fills in right index with user key
						if(letters[i] === userKey)
						{
							correct++;
							blanks[i] = userKey;
							document.getElementById('underscores').innerHTML = blanks.join(' ');
						}	
					}
					//Test / Debug
					// console.log(blanks);
				}
				// if the guess was incorrect
				else
				{
					incorrect.push(userKey);
					guesses--;
					// dom manipulation
					document.getElementById('guesses').innerHTML = guesses;
					document.getElementById('incorrect').innerHTML = incorrect;
					//Test / Debug
					// console.log('Wrong Letters = ' + incorrect);
					// console.log('Guesses left are ' + guesses);
				}
			
			
		
}
function counter()
{
	// When number blanks if filled with right letters then you win
	if(correct === numberOfBlanks)
	{
		//Counts Wins 
		win++;
		// dom manipulation
		document.getElementById('wins').innerHTML = win;
		alert('You Win');
		resetGame();
	}
	
}

startGame();

document.onkeyup = function(event)
{
	// test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < alphabet.length; i++)
	{	
		if(letterGuessed === alphabet[i] && test === true)
		{
			var spliceDword = alphabet.splice(i,1);
			//Test / Debug
			// console.log('Double word is = ' + alphabet[i])
			// console.log('Spliced Word is = ' + spliceDword);

			compareLetters(letterGuessed);
			counter();
		}
	}		
		
}

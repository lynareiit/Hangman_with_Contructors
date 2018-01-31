//create word constructor representing current word to guess. 
//will contain word specific logic and data. 

var randomWordArray = ["kids", "boss", "monsters", "fun", "silly", "adorable", "goofy", "innocent", "games", "play"];

currentWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
module.exports = currentWord;
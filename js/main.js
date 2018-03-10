var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [0, 1, 2, 3];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!")
}   else {
console.log("Sorry, try again.")
}

var flipCard = function() { 
	cardId.getAttribute('data-id');
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	result = alert("You found a match!")
}	else if (cardsInPlay[2] === cardsInPlay[3]) {
	result = alert("You found a match!")
}	else {
		result = alert("Sorry, try again")
	}
var createBoard = function() {
	for (var i = 0; i < queen-of-diamonds.length; i++) {
var newListItem = document.createElement('img');
ardElement.addEventListener('click', flipCard); 
document.getElementById('cardElement').appendChild(game-board);
}
	for (var i = 0; i < queen-of-hearts.length; i++) {
var newListItem = document.createElement('img');
ardElement.addEventListener('click', flipCard); 
document.getElementById('cardElement').appendChild(game-board);
}
	for (var i = 0; i < king-of-diamonds.length; i++) {
var newListItem = document.createElement('img');
ardElement.addEventListener('click', flipCard); 
document.getElementById('cardElement').appendChild(game-board);
}

	for (var i = 0; i < king-of-hearts.length; i++) {
var newListItem = document.createElement('img');
ardElement.addEventListener('click', flipCard); 
document.getElementById('cardElement').appendChild(game-board);
}


}

	console.log("User flipped" + cards[cardId].rank);
	console.log("User flipped" + cards[cardId].cardImage);
	console.log("User flipped" + cards[cardId].suite);
	checkForMatch();
flipCard(0);
flipCard(2);
cardsInPlay.push('cards[cardId].rank'); 

cardElement.setAttribute('src', "images/back.png");
cardElement.setAttribute('data-id, 'i);




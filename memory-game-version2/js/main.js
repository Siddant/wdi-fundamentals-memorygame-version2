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



var cardsInPlay = [];
var picked = [];
var totalGame = 0, playerWon = 0; 
var totalScore = document.getElementById("score");
var previousID;

var gameScore = function(){
	totalScore.innerHTML = "Your Score: " + playerWon +" Out Of: "+ totalGame;
}


var createBoard = function(){	
	var btn = document.getElementById("reset");
	btn.addEventListener("click", gameReset);
	gameScore();
	for (var i = 0; i < cards.length; i++) {
    	var cardElement = document.createElement('img');
    	cardElement.setAttribute("src", "images/back.png");
    	cardElement.setAttribute("flipped", "false");
    	//cardElement.setAttribute("data-id", i);
     	cardElement.setAttribute("data-id", " ");
     	cardElement.addEventListener("click",flipCard);
		document.getElementById("game-board").appendChild(cardElement); 

	}
}


var randomCard = function(cardId){
	while(true){
		cardId = Math.floor(Math.random()*4);
		//console.log(cardId+" prev: "+ previousID);
		if(previousID !== cardId){
			break;
		}
	}
	return cardId;
}

var flipCard = function(){
	if(cardsInPlay.length < 2){

		var cardId = randomCard(this.getAttribute("data-id"));
		// var cardId = this.getAttribute("data-id");
		if( this.getAttribute('flipped') === "false"){
			previousID = cardId;
			cardsInPlay.push(cards[cardId].rank);
			//console.log("User flipped " + cards[cardId].rank);
			//console.log(cards[cardId].cardImage);
			//console.log(cards[cardId].suit);
			this.setAttribute("src", cards[cardId].cardImage);
			this.setAttribute("flipped", "true");
			this.setAttribute("data-id", cardId);
			if(cardsInPlay.length === 2){
				checkForMatch();
			}
		}
	}else{
		alert("Please restart the game");
	}

}

var checkForMatch = function(){
	totalGame++;
	if (cardsInPlay[0] === cardsInPlay[1]) {
		playerWon++;
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	gameScore();
}


var gameReset = function(){
	cardsInPlay = [];
	previousID = "";
	imageReset();
	gameScore();

}

//setting the image attribute back to the card background
var imageReset =function(){
	var gameImage = document.getElementsByTagName("img");
	for (var i = 0; i < gameImage.length; i++) {
		gameImage[i].setAttribute("src", "images/back.png");
		gameImage[i].setAttribute("flipped", "false");
     	gameImage[i].setAttribute("data-id", " ");

	}
}


createBoard();
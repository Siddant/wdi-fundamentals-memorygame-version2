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

var gameReset =function(){
	cardsInPlay.pop();
	cardsInPlay.pop();
	imageReseart();

}

var imageReseart =function(){
	var gameImage = document.getElementsByTagName("img");
	for (var i = 0; i < cards.length; i++) {
		gameImage[i].setAttribute("src", "images/back.png");
	}

}

var createBoard = function(){	
	var btn = document.getElementById("reset");
	btn.addEventListener("click", gameReset);

	for (var i = 0; i < cards.length; i++) {
   	 // var newListItem = document.createElement('img');
    	var cardElement = document.createElement('img');
    	cardElement.setAttribute("src", "images/back.png");
     	cardElement.setAttribute("data-id", i);
     	cardElement.addEventListener("click",flipCard);
                             // Append the text to <li>
		document.getElementById("game-board").appendChild(cardElement); 

	}
}

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function(){
	if(cardsInPlay.length < 2){
		var cardId = this.getAttribute('data-id');

		cardsInPlay.push(cards[cardId].rank);
		console.log("User flipped " + cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);

		this.setAttribute("src", cards[cardId].cardImage);

		if(cardsInPlay.length === 2){
			checkForMatch();
		}
	}else{
		alert("Please restart the game");
	}

}

createBoard();
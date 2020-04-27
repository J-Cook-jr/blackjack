//creates function "jackDiamond" that will manipulate "index.HTML" file
$(function jackDiamond() {
    //creates "play-again" object which uses the ".hide" method to hide the "Play Again" button/element when the game starts
    $('#play-again').hide();
    //creates objects that will be used to manipulate elements in the html file
    var deck, dealerHand, playerHand;
    //calls a function to start a new game
    setupNewGame();
    //calls a function to update the score
    updateScoreDisplay();
     
    //creates a function that will deal two cards to the player and dealer when the "deal" button is clicked
    $('#deal-button').click(function () {
        //when "Deal" button is clicked, "dealACard" function will run four times and deal two cards each to the player and dealer.
        dealACard(playerHand, '#player-hand');
        dealACard(dealerHand, '#dealer-hand');
        dealACard(playerHand, '#player-hand');
        dealACard(dealerHand, '#dealer-hand');

        console.log('playerHand', playerHand);
        console.log('dealerHand', dealerHand);
        //deal button will be hidden after it's first click
        $('#deal-button').hide();
    });
    
    //creates a function that will deal one card to the player when the "Hit" button is clicked
    $('#hit-button').click(function () {
        dealACard(playerHand, '#player-hand');
        // "if" statement that checks if the player's hand is over 21 points (This is called a bust in black jack)
        if (calculatePoints(playerHand) > 21) {
            //displays the message "You bust!" if the players hand is over 21 points
            $('#messages').text('You bust!');
            //calls the "gameOver" function when max amount of points are reached
            gameOver();
        }
    });
    
    //creates "stand-button" click function that runs when player clicks "stand"
    $('#stand-button').click(function () {
        //creates a "while" loop that deals cards to the dealer hand while dealers points are less than 17
        //the "calculatePoints" function is run to check the dealers current point amount
        while (calculatePoints(dealerHand) < 17) {
            dealACard(dealerHand, '#dealer-hand');
        }
        // creates an "if" statement to check for bust
        if (calculatePoints(dealerHand) > 21) {
            // if dealer busts the HTML "messages" element will be changed to "Dealer busts! You win!"
            //the message will also display on the screen
            $('#messages').text('Dealer busts! You win!');
        } else if (calculatePoints(playerHand) > 21) {
            // message displays when the player busts
            $('#messages').text('You bust!');
        } else {
            // using "calculatePoints" function, the "else" statement determines the winner after calculating the dealer and players points
            var dealerPoints = calculatePoints(dealerHand);
            var playerPoints = calculatePoints(playerHand);
            var message;
            if (dealerPoints > playerPoints) {
                message = 'You lose!';
            } else if (dealerPoints < playerPoints) {
                message = 'You win!';
            } else {
                message = 'Push.'
            }
            $('#messages').text(message);
        }
        // "gameover" function will be called after the calculations and message display
        gameOver();
    });
    
    //creates "play-again" function to determine what happens when "Play Again" button is clicked
    $('#play-again').click(function () {
        // the "deal", "hit", and "stand" buttons will appear
        $('#deal-button').show();
        $('#hit-button').show();
        $('#stand-button').show();
        //the "Play Again" button will disappear
        $('#play-again').hide();
        //the "player-hand" and "dealer-hand" elements will be empty (no cards on the table)
        $('#player-hand').html('');
        $('#dealer-hand').html('');
        // the message on the screen will disappear
        $('#messages').text('');
        //the player and dealer points will display 0
        $('#player-points').text('');
        $('#dealer-points').text('');
        //calls "setupNewGame" function to restart a new black jack game
        setupNewGame();
    });
    
    //creates "gameOver" function 
    function gameOver() {
        //when the game is over the "hit", "stand" and "deal" buttons will disappear
        $('#hit-button').hide();
        $('#stand-button').hide();
        $('#deal-button').hide();
        //the "Play Again" button will appear
        $('#play-again').show();
    }

    //creates function "updateScoreDisplay"
    function updateScoreDisplay() {
        //creates an object called "dealerPoints" which holds the current value of the calculated points of the dealers hand
        var dealerPoints = calculatePoints(dealerHand);
        //changes the HTML element "dealer-points" to a number representaion of the dealers points
        $('#dealer-points').text(dealerPoints);
        //creates a variable called "playerPoints" which holds the current value of the calculated points of the players hand
        var playerPoints = calculatePoints(playerHand);
         //changes the HTML element "player-points" to a number representaion of the players points
        $('#player-points').text(playerPoints);
    }

    //creates a function called "dealACard" that takes two parameters: "handArray" and "elementSelector"
    function dealACard(handArray, elementSelector) {
        //assigns an array  "deck" (which uses the "pop()" method) to the variable "card"
        //the pop method will remove the last "img" element of the playing card from the "deck" array.
        card = deck.pop();
        //the "handArray" object uses the "push()" method to add one or more "img" elements of the playing cards to the end of the "playerHand" and or "dealerHand" array.
        handArray.push(card);
        //creates object "cardURL" which stores "getCardImageUrl(cards)" function as it's property
        //"getCardImageUrl" is a function that takes a parmaeter named "card"
        cardUrl = getCardImageUrl(card);
        //creates an object named "elementSelector" that uses the ".append" method to add the "img src" of the playing cards to the "cardUrl" object
        $(elementSelector).append(
            '<img src="' + cardUrl + '">'
        );
        //calls "updateScoreDisplay" function
        updateScoreDisplay();
    }
    
    //creates a function called "setupNewGame" which runs anytime the game starts or restarts
    function setupNewGame() {
        // "deck" calls the "newDeck" function
        deck = newDeck();
        //shuffle the deck
        deck = _.shuffle(deck);
        //creates "dealerHand" and "playerHand" arrays
        dealerHand = [];
        playerHand = [];
    }
}); 

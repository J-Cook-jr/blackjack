//creates function "jackDiamond" that will manipulate "index.HTML" file
$(function jackDiamond() {
    //creates "play-again" element that is hidden when the game starts
    $('#play-again').hide();
    //creates variables that will be used to define elements in the html file
    var deck, dealerHand, playerHand;
    //calls a function to start a new game
    setupNewGame();
    //calls a function to update the score
    updateScoreDisplay();
     
    //creates a function that will deal two cards to the player and dealer when the "deal" button is clicked
    $('#deal-button').click(function () {
        //when "Deal" button is clicked, "dealACard" function will run four times 
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

    

   
    

}); 

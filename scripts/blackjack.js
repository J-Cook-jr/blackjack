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
    

}); 

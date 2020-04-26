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

        dealACard(playerHand, '#player-hand');
        dealACard(dealerHand, '#dealer-hand');
        dealACard(playerHand, '#player-hand');
        dealACard(dealerHand, '#dealer-hand');

        console.log('playerHand', playerHand);
        console.log('dealerHand', dealerHand);
        //deal button will be hidden after it is clicked
        $('#deal-button').hide();
    });
    

}); 

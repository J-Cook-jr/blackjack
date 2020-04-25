//create a function "getCardImageUrl" that accepts card as a parameter
function getCardImageUrl(card) {
   //create a variable "cardName" 
    var cardName;
    //create an "if" statement that defines the points given for an ace card 
    if (card.point === 1) {
      cardName = 'ace';
    //create "elif" statements that will define the points for face cards "jack", "queen", and "king"
    } else if (card.point === 11) {
      cardName = 'jack';
    } else if (card.point === 12) {
      cardName = 'queen';
    } else if (card.point === 13) {
      cardName = 'king';
    //set the variable "cardName" to equal to the value of card.point
    } else {
      cardName = card.point;
    }
    //returns the downloaded images of cards and specifies the card name and card suit based upon the variables
    return 'images/' + cardName + '_of_' + card.suit + '.png';
  }
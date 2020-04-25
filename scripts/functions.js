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

  //create a function "calculatePoints" that accepts "cards" as a parameter
  function calculatePoints(cards) {
    //make "cards" a variable and equate it to "cards.slice(0)" 
    cards = cards.slice(0);
    //creates a function to sort the "cards" parameter
    cards.sort(function(a, b) {
    //returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array 
    //The original array will not be modified 
      return b.point - a.point;
    });


    //Creates a "reduce()"" method that executes a reducer function on each element of the array, resulting in a single output value.
    return cards.reduce(function(sum, card) {
    //assigns the variable "point" to the preceding argument "card.point"
      var point = card.point;
      //creates an "if" statement (with "point" as an argument) that gives the player or dealer ten points
      if (point > 10) {
        point = 10;
      }
      //"if" statement defines - if player or dealer hand is less than eleven points and the ace card is drawn, then the ace is equal to eleven points
      if (point === 1 && sum < 11) {
        point = 11;
      }
      //returns the sum of points minus the "0" index (makes sure the right amount of points are displayed)
      return sum + point;
    }, 0);
  }
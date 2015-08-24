var road1 = 0;
var road2 = 0;
var aKey = 97;
var lKey = 108;
var divs = 12;
//var colorPicker = $('input');

function Game() {
  //Create a new instance of player 1
  this.player1 = new Player("Player 1");

  //Do the same for a player 2
  this.player2 = new Player("Player 2");
}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
//
};

// A starter Player constructor.
function Player(player, key) {
  this.player = player;
  this.key = key;

  this.getName = function(){
    var name1 = prompt('Player 1, what is your name?').toUpperCase();
    $('#name1').text(name1);
    var name2 = prompt('Player 2, what is your name?').toUpperCase();
    $('#name2').text(name2);
  };
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  $(document).on('keypress', function(event){
    //if the key pressed is 'a'
    if(event.which === aKey){
      //remove the class active1 from the div, then add it to the next div with class of road in the player1 div
      $('div').removeClass('active1');
      $('.road1 .road').eq(road1 + 1).addClass('active1');
      road1++;
    }

    //if the key pressed is 'l'
    if(event.which === lKey){
      //remove the class active2 from the div, then add it to the next div with class of road in the player2 div
      $('div').removeClass('active2');
      $('.road2 .road').eq(road2 + 1).addClass('active2');
      road2++;
    } 
  });  
};

// Start the game!
var game = new Game();
game.init();

var road1 = 0;
var aKey = 97;
var lKey = 108;
var divs = 12;
//var colorPicker = $('input');


// OOP Racing Game example boilerplate code

function Game() {
  //Create a new instance of player 1
  //this.player1 = new Player("Player 1");

  //Do the same for a player 2
  //this.player2 = new Player("Player 2");
}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  //
};

// A starter Player constructor.
function Player(player) {
  this.player = player;
  // this.color = colorPicker.on('change', function(){
  //   color = colorPicker.val();
  // });
  this.position = 0;
  this.makeRoad = function(player){
    $('.road-placeholder').addClass(player);
    for (var i = 0; i < divs; i++){
      $('.road-placeholder').append('<div class="road"></div>');
      if (i === 0){
        $('div.road').addClass('active1');
      };
    }
  };

  this.getName = function(){
    var name = prompt('What is your name?').toUpperCase();
    $('#name1').text(name);
  };

  this.move = $(document).on('keypress', function(event){
    //if the key pressed is 'a'
    if(event.which === aKey){
      //remove the class active1 from the div, then add it to the next div with class of road in the player1 div
      $('div.road').removeClass('active1');
      $('.player1 .road').eq(road1 + 1).addClass('active1');
      road1++;
    }  
  });
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  //update player's position
  //player++;
};

// Start the game!
var game = new Game();
game.init();

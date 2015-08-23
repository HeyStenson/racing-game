var aKey = 97;
var lKey = 108;
var divs = 12;

$(document).ready(function(){

  //Player constructor.
  function Player(player, color, key) {
    this.player = player;
    this.color = color;
    this.key = key;
    this.position = 0;
    this.name = getName();
    this.road = makeRoad(this.player);
    this.move = move();
  };

  Player.prototype.getName = function(){
    return prompt('What is your name?').toUpperCase();
    //$('#name1').text(this.name);
  };

  Player.prototype.makeRoad = function(playerNum){
    //create playerIdDiv
    var playerIdDiv = $('div').addClass(playerNum);

    for (var i = 0; i < divs; i++){
      if (i === 0){
        $('div').addClass('active1');
        $(playerIdDiv).append('<div class="road"></div>');
      } else {
        $(playerIdDiv).append('<div class="road"></div>');
      }
    }
    //append playerIdDiv to body
    $('body').append(playerIdDiv);
  }

  // Remember: prototypes are shared functions between all game instances
  //update player's position
  Player.prototype.move = function() {
    $(document).on('keypress', function(event){
      //if the key pressed is the player's key
      if(event.which === this.key){
        //remove the class active1 from the div, then add it to the next div with class of road in the player's div
        $('div').removeClass('active1');
        $(playerIdDiv + '.road').eq(this.position + 1).addClass('active1');
        player1++;
      }
    });  
  };

  function Game() {
    //Create a new instance of player 1
  var player1 = new Player("Player 1", "red");

    //Do the same for a player 2
  var player2 = new Player("Player 2", "blue");

  }

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
    //
  };

  // Start the game!
  var game = new Game();
  game.init();

})
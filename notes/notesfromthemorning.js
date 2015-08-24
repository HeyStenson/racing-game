* Users should be able to pick a color
* Users should be able to pick a name
* Users hit one button to progress in the game
* Once one user reaches the end they are alerted that user wins

var getName = function(){
    return prompt("What is your name?").toUpperCase();
}

var getColor = ````

function Player(player,color){
    this.player = player;
    this.name = getName();
    this.color = getColor();
    this.position = 0;
    this.road = makeRoad(this.player);
}

make div class with player id (have more than two players)
append road divs to player id div class (choose how long you want their road)
apped playerid div class to body

every time function is called create playeridDiv. then run a for loop that creates roadDivs and append them to playeridDiv. 
(addClass to first-child of playeridDiv)
append playeridDiv to the body. 

var makeRoad = function (playerNum){
    $('div').addClass(playerNum);
    
    for (i=0 ; i<=12; i++){
        if (i===0){
            $('div').addClass('active1');
            //append line
        } else {
            //normal shit
        }
    }
    //append the player div to the body
}

document.ready
    player constructor
    get name
    get color
    makeRoad function
    initialize game (call players here?)
    
    playfunction
        increment player position
        remove and add classes from divs (you can use playeridDiv as reference point) 
        if player.position === 12 then win 
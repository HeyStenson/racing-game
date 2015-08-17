# racing-game
WDI Week 1 Racing Game

In this game, Player A presses the "a" key and Player B presses the "l" key. As they press the keys, their piece moves along the track. Who's going to win???

Specs:
HTML, CSS, and JQuery

When the page loads, two prompts show up asking the players to imput their names. These names are assigned to variables, which are then passed in to the "Player 1" and "Player 2" paragraphs; these variables are also used to display the message about which player has won. Ideally I would have liked to have allowed for the option of a player not imputting a name, in which case the program would have left it as "Red" or "Blue", but I ran out of time.

The two "tracks" are just sets of divs. The first divs in the sets have the classes of "active1" and "active2", respectively. When the player hits the "a" or "l" keys, the classes are removed from the current div and added to the next. 

When a player reaches the end of the track, they have won! The logic I used for this is that if there is no "active" class on a track but there is an "active" class on the other track, the track with no "active" class belongs to the winner and a message to that effect is displayed.

The reset button removes the winner message and puts the "active" class for each track back on the first div.

 

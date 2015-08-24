# racing-game
WDI Week 1 Racing Game

In this game, Player A presses the "a" key and Player B presses the "l" key. As they press the keys, their piece moves along the track. Who's going to win???

Specs:
HTML, CSS, and JQuery

--------- OOP Update ---------------

This did not go well. And saying that is an understatement. I spent virtually the whole weekend trying to shoehorn my code from last week into the boilerplate code given to us on Friday, and I was never successful with that, in both the sense that conceptually I never got how it was supposed to work and in the sense that it never worked. 

The big lesson: I should have just started over. I would have learned a lot more starting from scratch than I would have trying to make my existing code fit into a conceptual framework that I understand very incompletely.

Pain points: My big hangup was: how do I make this code that I have, which has logic for two players, work with a Player prototype? Theoretically I understood that I should be able to take the two players, which had pretty much the exact same code, take the commonalities, and build a Player. But in practice, I couldn't wrap my head around how to make that happen.

The one working thing that I was pretty proud of was Player.prototype.road, which built a track of divs for a player when called and attached an active class to the first div. However, I got feedback from the weekend TA Ryan that this would be too complicated, so I scrapped it and hard-coded the divs into the HTML. You can see this a few commits back.

As a palate cleanser, I added a pretty background to my original game: http://heystenson.com/big-sky-race/ This is also what I showed in class.

------------------------------------


When the page loads, two prompts show up asking the players to imput their names. These names are assigned to variables, which are then passed in to the "Player 1" and "Player 2" paragraphs; these variables are also used to display the message about which player has won. Ideally I would have liked to have allowed for the option of a player not imputting a name, in which case the program would have left it as "Red" or "Blue", but I ran out of time.

The two "tracks" are just sets of divs. The first divs in the sets have the classes of "active1" and "active2", respectively. When the player hits the "a" or "l" keys, the classes are removed from the current div and added to the next. 

When a player reaches the end of the track, they have won! The logic I used for this is that if there is no "active" class on a track but there is an "active" class on the other track, the track with no "active" class belongs to the winner and a message to that effect is displayed.

The reset button removes the winner message and puts the "active" class for each track back on the first div.

 

//Set counters for players 
var player1 = 0;
var player2 = 0;

$(document).ready(function(){
	$(document).on('keypress', function onKeypress(event){
		//if the key pressed is 'a'
		if(event.which === 97){
			//remove the class active1 from the div, then add it to the next div with class of road in the player1 div
			$('div').removeClass('active1');
			$('.player1 .road').eq(player1 + 1).addClass('active1');
			player1++;
		}

		//if the key pressed is 'l'
		if(event.which === 108){
			//remove the class active2 from the div, then add it to the next div with class of road in the player2 div
			$('div').removeClass('active2');
			$('.player2 .road').eq(player2 + 1).addClass('active2');
			player2++;
		}	

		//post the winner -- runs too many times!
		if (!$('div').hasClass('active1') && $('div').hasClass('active2')){
			$('.player1').append('<p>Player 1 is the winner!</p>');
			//how do I stop it after it's appended once?
		} else if ($('div').hasClass('active1') && !$('div').hasClass('active2')){
			$('.player2').append('<p>Player 2 is the winner!</p>');
		}
	});

	$('.reset').on('click', function handleClick(event){
		$('div').removeClass('active1 active2');
		$('.player1 div:nth-child(2)').addClass('active1');
		$('.player2 div:nth-child(2)').addClass('active2');
	})
})


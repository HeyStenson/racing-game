//Set counters for players 
var player1 = 0;
var player2 = 0;

$(document).ready(function(){

	var name1 = prompt('Player 1, what is your name?').toUpperCase();
	$('#name1').text(name1);
	var name2 = prompt('Player 2, what is your name?').toUpperCase();
	$('#name2').text(name2);

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

		//post the winner 
		if (!$('div').hasClass('active1') && $('div').hasClass('active2')){
			$('.player1').append('<p class="message">' + name1 + ' is the winner!</p>');
			//stop keypress function if player1 wins
			$(document).off('keypress');
		} else if ($('div').hasClass('active1') && !$('div').hasClass('active2')){
			$('.player2').append('<p class="message">' + name2 + ' is the winner!</p>');
			//stop keypress function if player2 wins
			$(document).off('keypress');
		}
	})
		
		$('.reset').click(function(){
			location.reload();
		});


})


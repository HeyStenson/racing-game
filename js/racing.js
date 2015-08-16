//Set counters for players 
var player1 = 0;
var player2 = 0;

$(document).ready(function(){
	$(document).on('keypress', function onKeypress(event){
		
		if(event.which === 97){

			$('div').removeClass('active1');
			$('.player1 .road').eq(player1 + 1).addClass('active1');
			player1++;
		}

		if(event.which === 108){

			$('div').removeClass('active2');
			$('.player2 .road').eq(player2 + 1).addClass('active2');
			player2++;
		}	
	});
})


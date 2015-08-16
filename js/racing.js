// $(document).ready(function(){
// 	$(document).on('keypress', function onKeypress(event){
// 		var notActive = $('div.road').hasClass('inactive') === true;
// 		if (notActive){
// 			$('div.road').next('.road').addClass('active');
// 		} else {
// 			$('div.road').addClass('inactive');
// 			$('div.road').removeClass('active');
			
// 		}
// 	});
// })
var count = 0;
//since eq takes index as an argument, I probably need to set count equal to an index position?

$(document).ready(function(){
	$(document).on('keypress', function onKeypress(event){
		
		if(event.which === 97){
			console.log("okay");
			$('div').removeClass('active');
			$('.road').eq(count + 1).addClass('active');
			count++;
			console.log(count);
		}
	});
})


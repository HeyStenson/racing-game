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

$(document).ready(function(){
	$(document).on('keypress', function onKeypress(event){
		
		if(event.which === 97){
			console.log("okay");
		}
	});
})


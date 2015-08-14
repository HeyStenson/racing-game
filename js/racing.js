$(document).ready(function(){
	$(document).on('keypress', function onKeypress(event){
		var notActive = $('div.road').hasClass('active') === false;
		if (notActive){
			$('div.road').next('.road').addClass('active');
		} else {
			$('div.road').removeClass('active');
		}
	});
})




(function ( $) {
	var counter = 0;
	function showProgress(progress, id ) {
		setTimeout( function () {
			if ( counter <= progress ) {
				renderProgress( counter++ , id );
				showProgress( progress, id );
			}
		}, 5);
	}
	function renderProgress(progress, id)
	{
		var angle;
		if(progress<25){
			angle = -90 + (progress/100)*360;
			$("#" + id + " .animate-0-25-b").css("transform","rotate("+angle+"deg)");
		}
		else if(progress>=25 && progress<50){
			angle = -90 + ((progress-25)/100)*360;
			$("#" + id + " .animate-0-25-b").css("transform","rotate(0deg)");
			$("#" + id + " .animate-25-50-b").css("transform","rotate("+angle+"deg)");
		}
		else if(progress>=50 && progress<75){
			angle = -90 + ((progress-50)/100)*360;
			$("#" + id + " .animate-25-50-b, #" + id + " .animate-0-25-b").css("transform","rotate(0deg)");
			$("#" + id + " .animate-50-75-b").css("transform","rotate("+angle+"deg)");
		}
		else if(progress>=75 && progress<=100){
			angle = -90 + ((progress-75)/100)*360;
			$("#" + id + " .animate-50-75-b, #" + id + " .animate-25-50-b, #" + id + " .animate-0-25-b").css("transform","rotate(0deg)");
			$("#" + id + " .animate-75-100-b").css("transform","rotate("+angle+"deg)");
		}
		if(progress==100){

		}
		$("#" + id + " .text").html(progress+"%");
	}

	showProgress(85, 'one');
})( jQuery );
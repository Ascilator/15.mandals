jQuery(function () {


	$('.burger').click(function(){
		$('.menu').slideToggle(300);
		$('.burger').toggleClass('active');	
	});

	if($('html').width() <= 900){
			$('#com_1').prepend($('#pic_1'));
			$('#com_2').prepend($('#pic_2'));
			$('#com_3').prepend($('#pic_3'));
			$('#com_4').prepend($('#pic_4'));
		} else {
			$('#com_1').append($('#pic_1'));
			$('#com_2').append($('#pic_2'));
			$('#com_3').append($('#pic_3'));
			$('#com_4').append($('#pic_4'));
		}



	$(window).resize(function(){
		if($('html').width() <= 900){
			$('#com_1').prepend($('#pic_1'));
			$('#com_2').prepend($('#pic_2'));
			$('#com_3').prepend($('#pic_3'));
			$('#com_4').prepend($('#pic_4'));
		} else {
			$('#com_1').append($('#pic_1'));
			$('#com_2').append($('#pic_2'));
			$('#com_3').append($('#pic_3'));
			$('#com_4').append($('#pic_4'));
		}
	});
	$(window).scroll(function(){
		if($('html').width() > 900){
			if(window.scrollY > 50){
				$('.header').addClass('fixed');
			} else {
				$('.header').removeClass('fixed');
			}
		} else {
			if(window.scrollY > 50){
				$('.header').addClass('fixed_2');
			} else {
				$('.header').removeClass('fixed_2');
			}	
		}
	});
	
	$('.arrow').click(function(){
		 $('html, body').animate({
	        scrollTop: $("html").offset().top
	    }, 1000);
	});
});



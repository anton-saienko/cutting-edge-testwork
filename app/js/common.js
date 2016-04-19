//звездочка
$(function(){
	var canvas = document.getElementById("star");
	var context = canvas.getContext("2d");

	function star(ctx, x, y, r, p, m){
		ctx.save();
		ctx.beginPath();
		ctx.translate(x, y);
		ctx.moveTo(0,0-r);
		for (var i = 0; i < p; i++){
			ctx.rotate(Math.PI / p);
			ctx.lineTo(0, 0 - (r*m));
			ctx.rotate(Math.PI / p);
			ctx.lineTo(0, 0 - r);
		}

		var gradient = ctx.createLinearGradient(0,-25,0,40);
		gradient.addColorStop(0, 'brown');   
		gradient.addColorStop(1, 'green');
		ctx.fillStyle = gradient;
		ctx.fill();
	}

	star(context, 70, 70, 70, 5, 0.5);
});

//функции вызова формы, появления кружочка "loading" и закрытия формы
$(function(){
	
	$("#getForm").click(function(){
		$('.form-bg').css('display', 'table');
		window.scrollTo(0, 0);
	});
	
	$("#next").click(function(){
		$(this).parent().fadeOut();
		$('.circle').show();
		$('.circle__inner').css('display', 'table');
		setTimeout(function(){
			$('.circle').hide();
			$('.circle__inner').css('display', 'none');
			$('.thank-you, .thank-you__text, .close').show();
		}, 1000);
	});
		
	$(".close").click(function(){
		$(this).parent().hide();
		$('.form-bg').fadeOut('fast');
		$('.myForm').fadeIn('slow');
	});

});
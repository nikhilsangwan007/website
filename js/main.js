$(document).ready(function() {
	$('.welcomeText').animate({
		width: '100%'
	}, 2000, function() {

	})
	.delay(100)
	.animate({
		width: 'toggle'
	}, 800, function() {
		$('.name').addClass('show')
		.animate({
			width: '100%'
		}, 1000, function() {
			$('.tagLine').addClass('show')
			.animate({
				width: '100%',
				opacity: '1.5'
			}, 1000, function() {
				$('.aboutContainer').addClass('show');
				$('about').fadeIn('slow');
			})
		})
	})
});
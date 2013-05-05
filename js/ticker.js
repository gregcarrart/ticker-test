$(document).ready(function() {

	var $ticker = $('#ticker');

	function playAnim() {

		$ticker.animate({left: '-12000'},{easing: 'linear', duration: 120000, complete: function () {
			$ticker.css('left', '400px');
			playAnim();
			}
		});
		
	}

	playAnim();

	newsInterval = setInterval(timerLoop, 5000);

	$('#container').hover(function() {
		clearTimer();
	}, function() {
		startTimer();
	});

	$('.news-content').click(function() {

	})

});

var timerLoop = function() {
	if ($('.news-content').position().top > -730) {
		clickMore();
	} else {
		animateTop();
	}
};

function clearTimer() {
	clearInterval(newsInterval);
};

function startTimer() {
	newsInterval = setInterval(timerLoop, 5000);
}

function clickMore() {

	if($('.news-content').position().top > -540) {
		$('.news-content').animate({
			top: '-=270',
			easing: 'easeInOutExpo'
		}, 500, function() {
			$('.news-content').stop(true, true);
		})
	}

	if($('.news-content').position().top < -540) {
		var test = true;
		$('.news-content').animate({
			top: '-=90',
			easing: 'easeInOutExpo'
		}, 500, function() {
			$('.news-content').stop(true, true);
			$('#click-more').removeAttr('href');
			$('#click-more').attr('href', 'javascript:animateTop();');
		})
	}

};

function animateTop() {
	$('.news-content').animate({
			top: '0',
			easing: 'easeInOutExpo'
		}, 500)
	$('#click-more').removeAttr('href');
	$('#click-more').attr('href', 'javascript:clickMore();');
};
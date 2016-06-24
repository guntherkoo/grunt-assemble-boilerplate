global.jQuery = require('jquery');
var $ = global.jQuery,
	slick = require('slick-carousel'),
	easing = require('jquery-easing');

export default function (el, speed, infinite){

	// Slick Carousel
	$(el).slick({
		dots: true,
		speed: speed,
		infinite: infinite,
		easing: 'easeInOutCubic'
	});

}
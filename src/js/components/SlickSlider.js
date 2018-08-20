global.jQuery = require('jquery');
const $ = global.jQuery,
	slick = require('slick-carousel'),
	easing = require('jquery-easing');

export default (el, speed, infinite) => {
	// Slick Carousel
	$(el).slick({
		dots: true,
		speed: speed,
		infinite: infinite,
		easing: 'easeInOutCubic'
	});
}
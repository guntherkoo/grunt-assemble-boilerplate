global.jQuery = require('jquery');
var $ = global.jQuery;

export default function (){
	$(function (){

		///////////////// User Agent Detect /////////////////
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('html').addClass('touch');
		} else {
			$('html').addClass('no-touch');
		}

		if (navigator.userAgent.match(/(iPad)/)) {
			$('html').addClass('ios no-android ios-tablet');
		}

		if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
			$('html').addClass('ios no-android');
		}

		if (navigator.userAgent.match(/(Android)/)) {
			$('html').addClass('no-ios android');
		}

	});
	
}
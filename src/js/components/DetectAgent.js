const ua = window.navigator.userAgent;
const html = document.querySelector('html');

export default () => {
	// User Agent Detect 
	if ( !!ua.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
		html.classList.add('touch');
	} else {
		html.classList.add('no-touch');
	}

	if (!!ua.match(/(iPad)/i)) {
		html.classList.add('ios','no-android','ios-tablet');
	}

	if (!!ua.match(/(iPod|iPhone|iPad)/i)) {
		html.classList.add('ios','no-android');
	}

	if (!!ua.match(/(Android)/i)) {
		html.classList.add('no-ios','android');
	}
}
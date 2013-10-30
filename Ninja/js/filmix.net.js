(function() {
	'use strict';

	var els = document.getElementsByClassName('block'), i;

	function hasClass(el, cls) {
		return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	}

	for (i = els.length - 1; i >= 0; i--) {
		if (hasClass(els[i], "adv") || hasClass(els[i], "news")) {
			els[i].parentNode.removeChild(els[i]);	
		}
	}
	
})();
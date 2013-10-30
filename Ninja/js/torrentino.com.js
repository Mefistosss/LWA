(function() {
	'use strict';

	var el;

	el = document.getElementsByClassName('sidebar');
	el[0] && el[0].parentNode.removeChild(el[0]);

	el = document.getElementsByClassName('a-panel');
	el[0] && el[0].parentNode.removeChild(el[0]);

	el = document.getElementsByClassName('bg-banner');
	el[0] && el[0].parentNode.removeChild(el[0]);

	el = document.getElementById('MarketGidScriptRootC29830');
	el && el.parentNode.removeChild(el);
	
})();
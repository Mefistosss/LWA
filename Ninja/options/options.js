var container, nws, l, sites = [];

function hasClass(el, cls) {
	return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass( el, klass ) {
	if ( klass && !hasClass(el, klass) ) {
		el.className += (el.className ? ' ' : '') + klass;
	}
	return this;
}

function addElements(par, name) {
	var lp = document.createElement('div'),
		rp = document.createElement('div'),
		span = document.createElement('span'),
		div = document.createElement('div');
	addClass(lp, 'leftPosition');
	addClass(rp, 'rightPosition');

	span.appendChild(document.createTextNode(name));
	lp.appendChild(span);

	span = document.createElement('span');
	addClass(div, 'button');
	addClass(div, 'site-button');
	span.appendChild(document.createTextNode('name'));
	div.appendChild(span);
	rp.appendChild(div);

	par.appendChild(lp);
	par.appendChild(rp);
}
function loadOptions() {
	var i;
	l = nws.length;
	for (i = 0; i < l; i++) {
		!localStorage[nws[i]] && (localStorage[nws[i]] = true);
	}
	for (var r in localStorage) {
		console.log(r, localStorage[r]);
		console.log('---', localStorage[r] == 'true');
	}

	
}

function init() {
	var i;
	l = nws.length;
	container = document.getElementById('sites');
	for (i = 0; i < l; i++) {
		sites.push({node: document.createElement('div')});
		addClass(sites[i].node, 'site');
		container.appendChild(sites[i].node);
		addElements(sites[i].node, nws[i]);
	}
}

document.addEventListener('DOMContentLoaded', function () {
	nws = localStorage["n_w_s"].split(',');
	loadOptions();
	init();
});
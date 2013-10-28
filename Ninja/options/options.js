var container, nws, l, sites = [];

function hasClass(el, cls) {
	return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
// function removeClass(el, klass) {
// 	if (el && klass && hasClass(el, klass)) {
// 		el.className.replace(new RegExp( '/(?:^|\s)'+klass+'(?!\S)/' ), '' );
// 	}
// }

function addClass( el, klass ) {
	if ( klass && !hasClass(el, klass) ) {
		el.className += (el.className ? ' ' : '') + klass;
	}
	return this;
}
function create(node) {
	var _node = document.createElement(node);
	return _node;
}
function setButtonStatus() {
	if (hasClass(this, 'Enable')) {
		this.classList.remove('Enable');
		addClass(this, 'Disable');
		this.childNodes[0].remove();
		this.appendChild(document.createTextNode('Disable'));
	} else {
		this.classList.remove('Disable');
		addClass(this, 'Enable');
		this.childNodes[0].remove();
		this.appendChild(document.createTextNode('Enable'));
	}
}
function addElements(par, name) {
	var lp = create('div'),
		rp = create('div'),
		span = create('span'),
		button = create('button'),
		buttonStatus = (localStorage[name] == "true") ? 'Enable' : 'Disable';

	addClass(lp, 'leftPosition');
	span.appendChild(document.createTextNode(name));
	lp.appendChild(span);
	par.appendChild(lp);

	addClass(rp, 'rightPosition');
	button.addEventListener('click', setButtonStatus);
	button.appendChild(document.createTextNode(buttonStatus));
	button.name = name;
	button.id = 'sitesButton';
	addClass(button, 'button');
	addClass(button, 'site-button');
	addClass(button, buttonStatus);
	rp.appendChild(button);
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
function setOptions(button) {
	localStorage[nws[i]]
}
function saveOptions() {
	console.log('saveOptions');
}
function canselOptions() {
	console.log('canselOptions');
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
	document.getElementById("buttonSave").addEventListener("click", saveOptions);
	document.getElementById("buttonCansel").addEventListener("click", canselOptions);



	loadOptions();
	init();
});
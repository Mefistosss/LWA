'use strict';

// chrome.windows.getCurrent(function(w){
//   chrome.tabs.getSelected(w.id, function(t){
//   	console.log(t);
//     // port = chrome.tabs.connect(t.id);
//   })
// });
// chrome.windows.getAll(function(w){
// 	console.log(w);
// });

var NINJA_WEB_SITES = [
		"filmix.net",
		"filmdegix.net2",
		"filmsdfdegix.net2"
	],
	ninjaTab = [];

localStorage["n_w_s"] = NINJA_WEB_SITES;

function checkUrl (url, id) {
	var i, reg, value = false;
	for (var i = 0; i < NINJA_WEB_SITES.length; i++) {
		reg = new RegExp(NINJA_WEB_SITES[i], 'ig');
		if (reg.test(url)) {
			value = NINJA_WEB_SITES[i];
			// ninjaWorks(NINJA_WEB_SITES[i], id);
			break;
		}
	}
	return value;
}

function addTab(id, tab, loadOptions) {
	var i, j;
	if (loadOptions && checkUrl(loadOptions.url) || tab && checkUrl(tab.url)) {
		(!ninjaTab[id]) && (ninjaTab[id] = {});
		
		if (tab) {
			for (i in tab) {
				ninjaTab[id][i] = tab[i];
			}
		}
		if (loadOptions) {
			(!ninjaTab[id].loadOptions) && (ninjaTab[id].loadOptions = {});
			for (j in loadOptions) {
				ninjaTab[id].loadOptions[j] = loadOptions[j];
			}
		}
		ninjaWorks(checkUrl(ninjaTab[id].url), id);
	}
}
function removeTab (id) {
	var temp = [], i;
	if (ninjaTab[id]) {
		for(i in ninjaTab) {
			if (i != id) {
				temp[i] = ninjaTab[i];
			}
		}
		ninjaTab = temp;
	}
}
function ninjaWorks (ninjaWebSite, id) {
	chrome.tabs.executeScript(id, {file : 'js/' + ninjaWebSite + '.js'});
}

chrome.tabs.onUpdated.addListener(function(id, loadOptions, tab) {
	// console.log('onUpdated', id, loadOptions ,tab);
	addTab(id, tab, loadOptions);
});
chrome.tabs.onRemoved.addListener(function(id, tab) {
	// console.log('onRemoved', id, tab);
	removeTab(id);
});
chrome.tabs.onCreated.addListener(function(tab) {
	// console.log('onCreated', tab);
	addTab(tab.id, tab);
});


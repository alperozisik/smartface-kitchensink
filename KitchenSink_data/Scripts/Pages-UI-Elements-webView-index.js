/* globals App, SMF*/
App.helpers.definePage('UI-Elements.webView.index', function(page, pageName){
	var root = 'UI-Elements.webView.', navgen = App.helpers.pageShow, links = [
		['Example 1', navgen(root + 'ex01')]
	];
	App.helpers.createLinks(page, pageName, links);
});
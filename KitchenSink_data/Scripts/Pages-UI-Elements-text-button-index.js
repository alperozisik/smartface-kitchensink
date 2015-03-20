/* globals App, SMF*/
App.helpers.definePage('UI-Elements.text-button.index', function(page, pageName){
	var root = 'UI-Elements.text-button.', navgen = App.helpers.pageShow, links = [
		['Example 1', navgen(root + 'ex01')]
		//['Events', navgen(root + 'events')]
	];
	App.helpers.createLinks(page, pageName, links);
});
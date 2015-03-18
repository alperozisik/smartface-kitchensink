/* globals App, SMF*/
App.helpers.definePage('UI-Elements.searchbar.index', function(page, pageName){
	var root = 'UI-Elements.searchbar.', navgen = App.helpers.pageShow, links = [
		['Example 1', navgen(root + 'ex01')],
		//['Methods', navgen(root + 'methods')],
		['Events', navgen(root + 'events')]
	];
	App.helpers.createLinks(page, pageName, links);
});
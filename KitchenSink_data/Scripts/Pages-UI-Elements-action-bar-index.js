App.helpers.definePage('UI-Elements.action-bar.index', function(page, pageName){
	var root = 'UI-Elements.action-bar.', navgen = App.helpers.pageShow, links = [
		['Example 1', navgen(root + 'ex01')]
	];
	App.helpers.createLinks(page, pageName, links);
});
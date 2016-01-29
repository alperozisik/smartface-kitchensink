App.helpers.definePage('UI-Elements.image-button.index', function(page, pageName){
	var root = 'UI-Elements.image-button.', navgen = App.helpers.pageShow, links = [
		['Example 1', navgen(root + 'ex01')],
		['Events', navgen(root + 'events')]
	];
	App.helpers.createLinks(page, pageName, links);
});
App.helpers.definePage('UI-Elements.repeatbox.index', function(page, pageName){
	var root = 'UI-Elements.repeatbox.', navgen = App.helpers.pageShow, links = [
		['Example 1', navgen(root + 'ex01')],
		['Example 2', navgen(root + 'ex02')],
		['Events', navgen(root + 'events')]
	];
	App.helpers.createLinks(page, pageName, links);
});
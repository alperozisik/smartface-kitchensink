App.helpers.definePage('UI-Elements.hello-world.index', function(page, pageName){
	var pages_url = 'UI-Elements.hello-world.', navgen = App.helpers.pageShow, links = [
		['Label', navgen(pages_url + 'label')],
		['Text Button', navgen(pages_url + 'textbutton')]
	];
	App.helpers.createLinks(page, pageName, links);
});
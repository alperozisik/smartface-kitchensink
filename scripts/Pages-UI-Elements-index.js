/*globals SMF, App*/
App.helpers.definePage('UI-Elements.index', function(page, pageName){
    var root = 'UI-Elements.', navgen = App.helpers.pageShow, links = [
        ['Hello World', navgen(root + 'hello-world.index')],
        ['Text Button', navgen(root + 'text-button.index')],
        ['Image Button', navgen(root + 'image-button.index')],
        ['Action Bar', navgen(root + 'action-bar.index')],
        ['RepeatBox', navgen(root + 'repeatbox.index')],
        ['Search Bar', navgen(root + 'searchbar.index')],
        ['Slider Drawer', navgen(root + 'slider-drawer.index')]
    ];
    App.helpers.createLinks(page, pageName, links);
});
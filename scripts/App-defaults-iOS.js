App.defaults.iOS = {
    BarButton: {
        back: {
            title: 'BACK',
            tintColor: App.defaults.colors.headerWhite || 'orange',
            onSelected : Pages.back
        }
    },
    NavigationBar: {
        visible: true,
        backgroundColor: App.defaults.colors.headerBlue || 'black',
        tintColor: App.defaults.colors.headerWhite || 'orange'
    },
    navigationItem: {
        titleView: {
            type: SMF.UI.TitleViewType.text,
            alignment: SMF.UI.TextAlignment.center
        }
    }
};

App.defaults.header = function(page, titleHeader, rightItems) {
    var iOS = SMF.UI.iOS, navBar = iOS.NavigationBar, navItem = page.navigationItem, defs = App.defaults;

    _.each(defs.iOS.NavigationBar, function(val, key){ navBar[key] = val; });

    /*navItem.titleView = _.extend({}, defs.iOS.navigationItem.titleView, {
        text: titleHeader,
        textColor: 'wheat'
    });*/

    var backItem = new iOS.BarButtonItem(_.extend({}, defs.iOS.BarButton.back, {
        //tintColor: 'pink'
    }));
    
    var leftItems = [backItem];
    navItem.leftBarButtonItems = leftItems;
    
    if(rightItems && rightItems.length > 0){
        navItem.rightBarButtonItems = _.map(rightItems, function(item){
            return (new iOS.BarButtonItem(item));
        });
    }
    
    navBar.backgroundImage = App.images.headerBack;
};
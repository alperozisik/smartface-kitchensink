App.defaults.android = {
	actionBar: {
		bar: {
			backgroundImage: App.images.headerBack,
			visible: true,
			//backgroundColor: App.defaults.colors.headerBlue || 'black',
			//displayShowTitleEnabled: true,
			itemTextColor: App.defaults.colors.headerWhite || 'orange'
		},
		home: {
			displayShowHomeEnabled: true,
			//icon: "icon_home.png",
			displayHomeAsUpEnabled: true,
			onHomeIconItemSelected: Pages.back
		},
		menuItemDefaults: {
			showAsAction: SMF.UI.Android.ShowAsAction.ifRoom
		},
		titleViewText: {
			type: SMF.UI.TitleViewType.text,
			alignment: SMF.UI.Alignment.center
		}
	}
};

App.defaults.header = function actionBar(page, titleHeader, rightItems) {
	var bar = page.actionBar,
		defs = App.defaults,
		andr_defs = defs.android,
		bar_defs = andr_defs.actionBar;

	var titleView, dontShowTitleText = true;
	if (dontShowTitleText || !titleHeader) {
		titleView = {
			type: SMF.UI.TitleViewType.image,
			image: App.images.logo
		}
	} else {
		titleView = _.extend({}, bar_defs.titleViewText, {
			text: titleHeader,
			width: '30%',
			textSize: 18,
			left: 0,
			top: 10
		});
	}

	var actionbarItems = [];
	rightItems = rightItems || [];

	if (rightItems && rightItems.length > 0) {
		_.each(rightItems, function(item) {
			var rightItem = new SMF.UI.Android.MenuItem(_.extend({}, bar_defs.menuItemDefaults, item));
			actionbarItems.push(rightItem);
		});
	}

	_.each(_.extend({}, bar_defs.bar, bar_defs.home, {
		//titleView: titleView,
	}), function(val, key) {
		bar[key] = val;
	});
	if (actionbarItems.length > 0) {
		bar.menuItems = actionbarItems;
	}
};
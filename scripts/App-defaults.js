App.defaults = {
	colors: {
		headerBlue: '#07B0BE',
		headerWhite: '#FFFFFF',
		repeatBoxBlue: '#07B0BE',
		repeatBoxGrey: '#333333',
		repeatBoxOrange: '#D65900',
		repeatBoxWhite: '#F2F2F2'
	},
	page: {
		backgroundColor: '#D65900',
		showNavigationBar: true,
		showStatusBar: true,
		touchEnabled: true,
		onKeyPress: function(e) {
			if (Device.deviceOS !== 'Android') {
				return;
			}
			if (e.keyCode === 4) {
				if (this.name === 'UI-Elements.index') {
					Application.exit();
				} else {
					Pages.back();
				}
			}
		}
	},
	editbox: {
		left: '20%',
		width: '60%',
		height: '10%',
		fontColor: '#FFFFFF',
		fillColor: '#C0C0C0',
		text: '',
		textAlignment: SMF.UI.Alignment.center,
	},
	label: {
		minimumFontSize: 10,
		textAlignment: SMF.UI.Alignment.center,
		multipleLine: false
	},
	textbutton: {
		left: '20%',
		width: '60%',
		height: '10%',
		fontColor: '#FFFFFF'
	},
	image: {
		imageFillType: 'aspectFit'
	},
	header: {
		//fillColor: '#FFFFFF',
		//backgroundColor: '#07B0BE'
	},
	repeatbox: {
		fillColor: '#333333',
		fontColor: '#07B0BE'
	},
	'repeatbox.onHover': {
		fillColor: '#F2F2F2',
		backgroundColor: '#D65900'
	}
};
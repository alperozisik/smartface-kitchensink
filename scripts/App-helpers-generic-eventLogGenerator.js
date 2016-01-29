App.helpers.generic.eventLogGenerator = (function() {
	function logEvent(target, txt) {
		var old = target.text;
		target.text = old + '\n' + txt;
	}

	function createButtonHideToggle(target, opts) {
		var txt_btn = new SMF.UI.TextButton(_.extend({
			top: "10%",
			left: "60%",
			width: "40%",
			text: "Hide",
			onPressed: function() {
				var visible = target.visible;
				var txt = (visible) ? 'Show' : 'Hide';
				target.visible = !visible;
				this.text = txt;
			}
		}, opts));
		return txt_btn;
	}

	function createLabelForEvents(opts) {
		opts = opts || {};
		var label = new SMF.UI.Label(_.extend({
			text: '',
			multipleLine: true,
			showScrollBar: true,
			textAlignment: 'topLeft',
			autoSize: false,
			top: '20%',
			height: '60%',
			width: '80%',
			left: '10%'
		}, opts));
		return label;
	}

	function clearGenerator(target) {
		return function() {
			target.text = '';
		}
	}

	function create(page, target, opts) {
		opts = opts || {};
		var label_for_events = createLabelForEvents(opts.label_for_events);
		page.add(label_for_events);
		var clearFn = clearGenerator(label_for_events);
		/*if(opts.createClearButton !== false){
      var btn_clear = createButtonClearText(label_for_events, opts.btn_clear);
      page.add(btn_clear);
    }*/
		if (!(!target && !opts.createToggleButton)) {
			var btn_toggle_hide = createButtonHideToggle(target, opts.btn_toggle_hide);
			page.add(btn_toggle_hide);
		}

		return {
			clear: clearFn,
			generic_clear_button: {
				title: 'Clear',
				onSelected: clearFn
			},
			label_for_events: label_for_events,
			log: function(txt) {
				logEvent(label_for_events, txt);
			}
		};
	}
	return create;
})();
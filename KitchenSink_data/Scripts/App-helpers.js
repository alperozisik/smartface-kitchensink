App.helpers = (function(){
    var defaults = App.defaults || {}, colors = defaults.colors || {};
    function includeIfStringElseExecute(item){
        if(!item){
            return;
        }
        if(item instanceof Array){
            for(var i = 0; i < item.length; i++){
                includeIfStringElseExecute(item[i]);
            }
        }
        else if(typeof item === 'function'){
            var items = item();
            if(items){
                includeIfStringElseExecute(items);
            }
        }
        else if(typeof item === 'string'){
            try{
                include(item);
            }
            catch(e){
                alert('failed to include ' + item.toString());
            }
        }
    }
    function createLinks(page, pageName, links){
        var lbl = new SMF.UI.Label({
            height : "100%",
            left: '10%',
            top: 0,
            width: '100%',
            fillColor: colors.repeatBoxGrey || 'black',
            fontColor: colors.repeatBoxBlue || 'orange',
            touchEnabled: false
        });

        var arrow = new SMF.UI.Label({
            height : "100%",
            left: "90%",
            width: '10%',
            top: 0,
            text: '>',
            fillColor: colors.repeatBoxGrey || 'black',
            fontColor: colors.repeatBoxBlue || 'orange',
            touchEnabled: false
        });

        var line = new SMF.UI.Line({
            top: '93%',
            left: 0,
            width: '100%',
            borderColor: colors.repeatBoxBlue || 'orange',
            borderWidth: '1%',
        });

        var rBox = new SMF.UI.RepeatBox({
            width : "100%",
            height : "100%",
            left : 0,
            top : 0,
            dataSource : links,
            showScrollbar : true,
            enablePullDownToRefresh: true,
            enablePullUpToRefresh: true,
            onRowRender: function(e){
                var label = this.controls[0];
                label.text = e.rowData[0];
            },
            onSelectedItem: function(e){
                var lambdas = links[e.rowIndex].slice(1);
                includeIfStringElseExecute(lambdas);
            },
            itemTemplate: {
                height: defaults.repeatbox.height || '8%',
                fillColor: defaults.repeatbox.fillColor || 'yellow'
            }
        });

        rBox.itemTemplate.add(lbl);
        rBox.itemTemplate.add(arrow);
        rBox.itemTemplate.add(line);

        page.add(rBox);
        page.backgroundColor = defaults.page.backgroundColor;
        page.onShow = function(){
            defaults.header(page, pageName);
        };
    }
    function definePage(pageName, callback){
        if (typeof Pages[pageName] !== 'undefined') {
            Pages[pageName].clear();
        } else {
            Pages[pageName] = new SMF.UI.Page({
                fillColor: defaults.colors.repeatBoxGrey,
                onKeyPress: defaults.page.onKeyPress,
                onShow: function(){
                    defaults.header(Pages[pageName]);
                }
            });
        }
        callback(Pages[pageName], pageName);
    }
    function pageShow(name){
        return function(){
            Pages[name].show();
        };
    }
    return {
        generic: {},
        createLinks: createLinks,
        definePage: definePage,
        pageShow: pageShow
    };
})();
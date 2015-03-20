/**
* Creates action(s) that are run when the user press the key of the devices.
* @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
* @this SMF.UI.Page
*/
function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
/**
* Creates action(s) that are run when the page is appeared
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.Page
*/
function Page1_Self_OnShow() {
    //Comment following block for removing navigationbar/actionbar sample
    //Copy this code block to every page onShow
    /*header.init(this);
    header.setTitle("Page1");
    header.setRightItem("RItem");
    header.setLeftItem();*/
    /**/
    //Because we are not entering from Page1
    //Could have changed this from defaults.xml
    setTimeout(function(){ Pages['UI-Elements.index'].show(); }, 250);
    setTimeout(function(){ Page1_Self_OnShow = function(){ Application.exit(); } }, 750);
}
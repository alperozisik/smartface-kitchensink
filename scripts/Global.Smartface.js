include("DatasetBC.js");
/**
* Triggered when application is started.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this Application
*/
load('App-main.js');

function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
    include("BC.js"); //included for future BC support. Removing is not advised.

    //      Comment following block for navigationbar/actionbar sample. Read the JS code file for usage.
    //      Also there is a part of code block in Page1, which should be copied to every page for HeaderBar usage
    load("HeaderBar.js");
    include("Page1.Smartface.js");
    Pages.Page1.show();
}
function Global_Events_OnError(e) {
    switch (e.type) {
    case "Server Error":
    case "Size Overflow":
        alert(lang.networkError);
        break;
    default:
        // SES.Analytics.eventLog("error", JSON.stringify(e));
        // change the following code for desired generic error messsage
        alert({
            title : lang.applicationError,
            message : e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
        });
        break;
    }
}
Application.onStart = Global_Events_OnStart;
Application.onError = Global_Events_OnError;

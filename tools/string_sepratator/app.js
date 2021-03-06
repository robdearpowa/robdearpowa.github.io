import CookieManager from '../../utils/CookieManager.js';
var txtVarName = document.querySelector("#txtVarName");
var txtCharsCount = document.querySelector("#txtCharsCount");
var txtContent = document.querySelector("#txtContent");
var btnElaborate = document.querySelector("#btnElaborate");
var btnSave = document.querySelector("#btnSave");
var btnCopy = document.querySelector("#btnDialogCopy");
var txtResult = document.querySelector("#txtResult");
var checkKeepEscape = document.querySelector("#checkKeepEscape");
checkNotificationAccess();

checkKeepEscape.checked = true;
btnElaborate.addEventListener("click", function (e) {
    elaborateClick(e.target);
});
btnSave.addEventListener("click", function (e) {
    dialogEvent(e.target);
});
btnCopy.addEventListener("click", function (e) {
    dialogEvent(e.target);
});
loadSetup();
function elaborateClick(eventTrigger) {
    console.log(eventTrigger);
    var varName = txtVarName.value;
    var charsCount = eval(txtCharsCount.value);
    var content = txtContent.value;
    try {
        var obj = JSON.parse(content);
        content = JSON.stringify(obj);
    }
    catch (e) {
    }
    var result = "";
    txtResult.value = "";
    txtResult.value += varName + '="' + result + '";\n';
    while (content.length > 0 && charsCount > 0) {
        result = content.substring(0, charsCount);
        content = content.substring(charsCount);
        if (checkKeepEscape.checked) {
            result = result.replace(/\\/g, '\\\\');
            result = result.replace(/\n/g, '\\\\n');
        }
        result = result.replace(/"/g, '\\"');
        txtResult.value += varName + "+=\"" + result + "\";\n";
    }
}
function dialogEvent(eventTrigger) {
    console.log(eventTrigger);
    if (eventTrigger.id === "btnDialogCopy") {
        //@ts-ignore
        clipboard.writeText(txtResult.value);
        eventTrigger.setAttribute("copied", "");
        setTimeout(function () {
            eventTrigger.removeAttribute("copied");
        }, 1500);
        executeNotification("Copied!", "Text Successfully copied!");
    }
    if (eventTrigger.id === "btnSave") {
        var settings = { varName: "", charsCount: "" };
        settings.varName = txtVarName.value;
        settings.charsCount = eval(txtCharsCount.value);
        CookieManager.saveCookieAsObject('string_separator_settings', settings);
        executeNotification("Setup Saved!", "Setup saved successfully!");
    }
}
function loadSetup() {
    var settings = CookieManager.loadCookieAsObject('string_separator_settings');
    if (settings != null) {
        txtVarName.value = settings.varName;
        txtCharsCount.value = settings.charsCount;
    }
}
function checkNotificationAccess() {
    if ("Notification" in window) {
        if (Notification.permission === "granted") {
            return true;
        }
        else {
            Notification.requestPermission();
        }
    }
    return false;
}
function executeNotification(title, body) {
    if (checkNotificationAccess()) {
        var options = {
            body: body
        };
        var notification = new Notification(title, options);
        notification.addEventListener("click", function () {
            console.log("notification clicked");
        });
    }
    else {
        alert(body);
    }
}
//# sourceMappingURL=app.js.map
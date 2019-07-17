import CookieManager from '../../utils/CookieManager.js';

let txtVarName: HTMLInputElement = document.querySelector("#txtVarName");
let txtCharsCount: HTMLInputElement = document.querySelector("#txtCharsCount");
let txtContent: HTMLTextAreaElement = document.querySelector("#txtContent");
let btnElaborate: HTMLButtonElement = document.querySelector("#btnElaborate");
let btnSave: HTMLButtonElement = document.querySelector("#btnSave");
let btnCopy: HTMLButtonElement = document.querySelector("#btnDialogCopy");
let txtResult: HTMLTextAreaElement = document.querySelector("#txtResult");
let comboKeepEscape: HTMLSelectElement = document.querySelector("#comboKeepEscape")

checkNotificationAccess();

document.addEventListener("DOMContentLoaded", (e) => {
    let btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.mdc-button')
    let textInputs: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.mdc-text-field')

    for (let i = 0; i < btns.length; i++) {
        //@ts-ignore
        mdc.ripple.MDCRipple.attachTo(btns[i])
    }

    for (let i = 0; i < textInputs.length; i++) {
        //@ts-ignore
        mdc.textField.MDCTextField.attachTo(textInputs[i])
    }
})

comboKeepEscape.selectedIndex = 1

btnElaborate.addEventListener("click", (e) => {
    elaborateClick(e.target);
})

btnSave.addEventListener("click", (e) => {
    dialogEvent(e.target)
})

btnCopy.addEventListener("click", (e) => {
    dialogEvent(e.target)
})

loadSetup()

function elaborateClick(eventTrigger) {
    console.log(eventTrigger);

    let varName = txtVarName.value;
    let charsCount = eval(txtCharsCount.value);
    let content = txtContent.value;

    try {
        let obj = JSON.parse(content)
        content = JSON.stringify(obj)
    } catch (e) {

    }

    let result = "";
    txtResult.value = "";

    txtResult.value += varName + '="' + result + '";\n'

    txtResult.focus()
    while (content.length > 0 && charsCount > 0) {
        result = content.substring(0, charsCount);
        content = content.substring(charsCount);

        if (comboKeepEscape.value == "1") {
            result = result.replace(/\\/g, '\\\\')
            result = result.replace(/\n/g, '\\\\n')
        }

        result = result.replace(/"/g, '\\"');

        txtResult.value += `${varName}+="${result}";\n`
    }
}

function dialogEvent(eventTrigger) {
    console.log(eventTrigger);

    if (eventTrigger.id === "btnDialogCopy") {
        //@ts-ignore
        clipboard.writeText(txtResult.value);
        eventTrigger.setAttribute("copied", "");
        setTimeout(() => {
            eventTrigger.removeAttribute("copied")
        }, 1500)
        executeNotification("Copied!", "Text Successfully copied!");
    }

    if (eventTrigger.id === "btnSave") {
        let settings = { varName: "", charsCount: "" };
        settings.varName = txtVarName.value;
        settings.charsCount = eval(txtCharsCount.value);

        CookieManager.saveCookieAsObject('string_separator_settings', settings);
        executeNotification("Setup Saved!", "Setup saved successfully!")
    }
}

function loadSetup() {
    let settings = CookieManager.loadCookieAsObject('string_separator_settings');

    if (settings != null) {
        txtVarName.value = settings.varName;
        txtCharsCount.value = settings.charsCount;
    }
}

function checkNotificationAccess(): boolean {
    if ("Notification" in window) {
        if (Notification.permission === "granted") {
            return true;
        } else {
            Notification.requestPermission();
        }
    }
    return false;
}

function executeNotification(title: string, body: string) {
    if (checkNotificationAccess()) {
        let options = {
            body: body
        }

        let notification = new Notification(title, options)
        notification.addEventListener("click", () => {
            console.log("notification clicked")
        })
    } else {
        alert(body);
    }
}
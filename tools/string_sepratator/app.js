import { CookieHandler } from '../../utils/CookieHandler.js'

let txtVarName = document.querySelector("#txtVarName");
let txtCharsCount = document.querySelector("#txtCharsCount");
let txtContent = document.querySelector("#txtContent");
let btnElaborate = document.querySelector("#btnElaborate");
let btnSave = document.querySelector("#btnSave");
let btnCopy = document.querySelector("#btnDialogCopy");
let txtResult = document.querySelector("#txtResult");
let comboKeepEscape = document.querySelector("#comboKeepEscape")



document.addEventListener("DOMContentLoaded", (e) => {
    let btns = document.querySelectorAll('.mdc-button')
    let textInputs = document.querySelectorAll('.mdc-text-field')

    for (let i = 0; i < btns.length; i++) {
        mdc.ripple.MDCRipple.attachTo(btns[i])
    }

    for (let i = 0; i < textInputs.length; i++) {
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

    while (content.length > 0 && charsCount > 0) {
        result = content.substring(0, charsCount);
        content = content.substring(charsCount);

        if (comboKeepEscape.value == 1) {
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
        clipboard.writeText(txtResult.value);
        eventTrigger.setAttribute("copied", "");
        setTimeout(() => {
            eventTrigger.removeAttribute("copied")
        }, 1500)
    }

    if (eventTrigger.id === "btnSave") {
        let settings = { varName: "", charsCount: "" };
        settings.varName = txtVarName.value;
        settings.charsCount = eval(txtCharsCount.value);

        CookieHandler.saveCookieAsObject('string_separator_settings', settings);
    }
}

function loadSetup() {
    let settings = CookieHandler.loadCookieAsObject('string_separator_settings');

    if (settings != null) {
        txtVarName.value = settings.varName;
        txtCharsCount.value = settings.charsCount;
    }
}
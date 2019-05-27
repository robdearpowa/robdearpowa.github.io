import { CookieHandler } from '../../utils/CookieHandler.js'

let txtVarName = document.querySelector("#txtVarName");
let txtCharsCount = document.querySelector("#txtCharsCount");
let txtContent = document.querySelector("#txtContent");
let btnElaborate = document.querySelector("#btnElaborate");
let btnSave = document.querySelector("#btnSave");
let btnCopy = document.querySelector("#btnDialogCopy");
let txtResult = document.querySelector("#txtResult");


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



    let result = "";
    txtResult.value = "";

    txtResult.value += varName + '="' + result + '";\n'

    while (content.length > 0 && charsCount > 0) {
        result = content.substring(0, charsCount);
        content = content.substring(charsCount);

        result = result.replace(/"/g, '\\"');
        result = result.replace(/\n/g, '\\\\n')

        txtResult.value += varName + `+="${result}";\n`
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
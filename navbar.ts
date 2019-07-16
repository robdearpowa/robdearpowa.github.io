//import { CookieHandler } from "./utils/CookieHandler.js"
import CookieManager from "./utils/CookieManager.js"

var themeButton = document.querySelector(".theme");
var body = document.querySelector("body");
var theme = CookieManager.loadCookie("theme");

updateTheme();

themeButton.addEventListener("click", (e) => {
    if (theme == "white") {
        theme = "dark";
    }
    else {
        theme = "white";
    }
    updateTheme();
});


function updateTheme() {
    if (theme == null) {
        theme = "white"
    }

    body.setAttribute("theme", theme);
    CookieManager.saveCookie("theme", theme);
}
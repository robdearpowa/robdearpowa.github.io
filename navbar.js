import { CookieHandler } from "./utils/CookieHandler.js"

var themeButton = document.querySelector(".theme");
var body = document.querySelector("body");
var theme = CookieHandler.loadCookie("theme");

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
    CookieHandler.saveCookie("theme", theme);
}
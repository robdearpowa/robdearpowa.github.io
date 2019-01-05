var themeButton = document.querySelector(".theme");
var body = document.querySelector("body");
var theme = document.cookie;

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
    if (theme == "") {
        document.cookie = "white"
        theme = document.cookie;
    }

    body.setAttribute("theme", theme);
    document.cookie = theme;
}
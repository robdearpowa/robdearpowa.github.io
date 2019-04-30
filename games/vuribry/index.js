
let buttons = document.querySelectorAll(".button")

buttons[0].addEventListener("click", vuribryClick)
buttons[1].addEventListener("click", vuribryStop)

function vuribryClick() {
    let durationInSeconds = document.querySelector(".txtDuration").value

    durationInSeconds = eval(durationInSeconds)

    console.log(durationInSeconds)

    if (typeof durationInSeconds == "number") {
        let durationInMilliSeconds = durationInSeconds * 1000
        navigator.vibrate(durationInMilliSeconds)
    } else {
        alert("You didn't insert a valid number")
    }
}

function vuribryStop() {
    navigator.vibrate(0)
}
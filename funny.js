var elm = document.getElementById("stopButton")

if(elm != null) {
    let timeoutVar = createTimer()
    randomLocation()
    elm.addEventListener("click", newWindowCancel(timeoutVar))
}

function createNewWindow() {
    window.open("SoNotFunny.html")
}
function createTimer() {
    return setTimeout(createNewWindow, 800)
}
function newWindowCancel(timeOut) {
    clearTimeout(timeOut)
}
function randomLocation() {
    var x = Math.floor(Math.random() * 1000) + 1
    var y =  Math.floor(Math.random() * 1000) + 1
    elm.style.left = x + "px"
    elm.style.top = y + "px"
}

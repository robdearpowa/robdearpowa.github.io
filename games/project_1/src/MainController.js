import Player from "./classes/player/Player.js";
import Tree from "./classes/tree/Tree.js";
import CollisionMask from "./classes/collision_mask/CollisionMask.js";
var canvas;
var context;
var gameObjectList = new Array();
var lastPerformance = 0;
var lastFps = 0;
var lastFpsCheck = 0;
var showFps = false;
//init
window.addEventListener("load", function (e) {
    canvas = document.querySelector(".main_canvas");
    context = canvas.getContext("2d");
    start();
    gameLoop();
});
function gameLoop() {
    requestAnimationFrame(gameLoop);
    update();
    lateUpdate();
    draw();
}
function start() {
    var cbShowFps = document.querySelector("#cb_show_fps");
    cbShowFps.addEventListener("click", function (e) {
        showFps = cbShowFps.checked;
    });
    gameObjectList.push(new Player());
    gameObjectList.push(new Tree());
    for (var i in gameObjectList) {
        gameObjectList[i].start(context);
    }
}
function update() {
    for (var i in gameObjectList) {
        gameObjectList[i].update(context);
    }
    updateGlobalCollisionMask();
}
function lateUpdate() {
    for (var i in gameObjectList) {
        gameObjectList[i].lateUpdate();
    }
}
function draw() {
    clearScreen();
    drawBackground();
    drawMiddleground();
    drawForground();
}
function clearScreen() {
    context.fillStyle = "#bbbbbb";
    context.fillRect(0, 0, canvas.width, canvas.height);
}
function executeFps() {
    var now = performance.now();
    var difference = now - lastPerformance;
    var fpm = 1 / difference;
    var fps = fpm * 1000;
    lastPerformance = now;
    if (now - lastFpsCheck > 200) {
        lastFps = fps;
        lastFpsCheck = now;
    }
    context.fillStyle = "white";
    context.font = "normal 16pt Arial";
    context.fillText(lastFps.toFixed() + " fps", 10, 26);
}
function drawForground() {
    if (showFps)
        executeFps();
}
function drawMiddleground() {
    gameObjectList.sort(function (a, b) {
        return a.transform.layer > b.transform.layer ? 1 : a.transform.layer < b.transform.layer ? -1 : 0;
    });
    for (var i in gameObjectList) {
        gameObjectList[i].draw(context);
    }
}
function drawBackground() {
}
function updateGlobalCollisionMask() {
    var collisionMasksList = new Array();
    for (var i in gameObjectList) {
        collisionMasksList.push(gameObjectList[i].collisionMask);
    }
    CollisionMask.globalCollisionMasksList = collisionMasksList;
}
//# sourceMappingURL=MainController.js.map
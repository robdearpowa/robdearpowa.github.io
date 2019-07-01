import GameObject from "./classes/gameobject/GameObject.js";
import Player from "./classes/player/Player.js";
import Tree from "./classes/tree/Tree.js";
import CollisionMask from "./classes/collision_mask/CollisionMask.js";

let canvas: HTMLCanvasElement
let context: CanvasRenderingContext2D

let gameObjectList: Array<GameObject> = new Array<GameObject>()

let lastPerformance: number = 0
let lastFps: number = 0
let lastFpsCheck: number = 0
let showFps: boolean = false

//init
window.addEventListener("load", (e) => {
    canvas = document.querySelector(".main_canvas")
    context = canvas.getContext("2d");
    start()
    gameLoop()
})

function gameLoop() {
    requestAnimationFrame(gameLoop)
    update()
    lateUpdate()
    draw()
}

function start() {
    let cbShowFps: HTMLInputElement = document.querySelector("#cb_show_fps")

    cbShowFps.addEventListener("click", (e) => {
        showFps = cbShowFps.checked
    })

    gameObjectList.push(new Player())
    gameObjectList.push(new Tree())

    for (let i in gameObjectList) {
        gameObjectList[i].start(context)
    }
}

function update() {
    for (let i in gameObjectList) {
        gameObjectList[i].update(context)
    }
    updateGlobalCollisionMask()
}

function lateUpdate() {
    for (let i in gameObjectList) {
        gameObjectList[i].lateUpdate()
    }
}

function draw() {
    clearScreen()
    drawBackground()
    drawMiddleground()
    drawForground()
}

function clearScreen() {
    context.fillStyle = "#bbbbbb"
    context.fillRect(0, 0, canvas.width, canvas.height)
}

function executeFps() {
    const now = performance.now()

    let difference: number = now - lastPerformance


    let fpm: number = 1 / difference

    let fps: number = fpm * 1000;

    lastPerformance = now

    if (now - lastFpsCheck > 200) {
        lastFps = fps
        lastFpsCheck = now
    }
    context.fillStyle = "white";
    context.font = "normal 16pt Arial";

    context.fillText(lastFps.toFixed() + " fps", 10, 26);
}

function drawForground() {
    if (showFps) executeFps()
}

function drawMiddleground() {
    gameObjectList.sort((a, b): number => {
        return a.transform.layer > b.transform.layer ? 1 : a.transform.layer < b.transform.layer ? -1 : 0
    })

    for (let i in gameObjectList) {
        gameObjectList[i].draw(context)
    }
}

function drawBackground() {

}

function updateGlobalCollisionMask() {
    let collisionMasksList: Array<CollisionMask> = new Array()

    for (let i in gameObjectList) {
        collisionMasksList.push(gameObjectList[i].collisionMask)
    }
    CollisionMask.globalCollisionMasksList = collisionMasksList
}
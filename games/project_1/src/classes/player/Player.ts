import GameObject from "../gameobject/GameObject.js"
import Vector2 from "../vector2/Vector2.js";
import InputManager from "../inputmanager/InputManager.js";

export default class Player extends GameObject {

    private speed: number = 5
    private inputManager: InputManager
    private spirte: HTMLImageElement

    public start(ctx: CanvasRenderingContext2D) {

        this.postion = Vector2.zero();
        this.inputManager = new InputManager()
    }

    public update(ctx: CanvasRenderingContext2D) {
        //console.log(this.postion)
        if (this.inputManager.isKeyPressed(37) || this.inputManager.isKeyPressed(65)) {
            this.postion.x -= this.speed
        }
        if (this.inputManager.isKeyPressed(38) || this.inputManager.isKeyPressed(87)) {
            this.postion.y -= this.speed
        }
        if (this.inputManager.isKeyPressed(39) || this.inputManager.isKeyPressed(68)) {
            this.postion.x += this.speed
        }
        if (this.inputManager.isKeyPressed(40) || this.inputManager.isKeyPressed(83)) {
            this.postion.y += this.speed
        }
    }

    public draw(ctx: CanvasRenderingContext2D) {
        this.spirte = new Image()
        this.spirte.src = "./src/classes/player/spcm.png"
        this.spirte.onload = (e) => {
            ctx.drawImage(this.spirte, this.postion.x, this.postion.y)
        }

    }

}
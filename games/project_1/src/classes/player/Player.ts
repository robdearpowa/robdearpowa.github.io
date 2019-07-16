import GameObject from "../gameobject/GameObject.js"
import Vector2 from "../vector2/Vector2.js";
import InputManager from "../inputmanager/InputManager.js";
import CollisionMask from "../collision_mask/CollisionMask.js";

export default class Player extends GameObject {

    private speed: number = 5
    private inputManager: InputManager
    private isSpriteReady: boolean = false

    public start(ctx: CanvasRenderingContext2D) {
        this.transform.size = new Vector2(30, 80)
        this.transform.scale = new Vector2(1, 1)
        this.transform.layer = 2
        this.sprite = new Image()
        this.sprite.src = "./spcm.png"
        this.sprite.onload = (e) => {
            this.isSpriteReady = true
        }
        this.transform.position = Vector2.zero()
        this.inputManager = new InputManager()

        this.transform.pivotOffset = new Vector2(this.transform.size.x / 2, this.transform.size.y)
    }

    public update(ctx: CanvasRenderingContext2D) {
        //console.log(this.postion)
        if (this.inputManager.isKeyPressed(37) || this.inputManager.isKeyPressed(65)) {
            this.transform.position.x -= this.speed
        }
        if (this.inputManager.isKeyPressed(38) || this.inputManager.isKeyPressed(87)) {
            this.transform.position.y -= this.speed
        }
        if (this.inputManager.isKeyPressed(39) || this.inputManager.isKeyPressed(68)) {
            this.transform.position.x += this.speed
        }
        if (this.inputManager.isKeyPressed(40) || this.inputManager.isKeyPressed(83)) {
            this.transform.position.y += this.speed
        }

        if (this.inputManager.isKeyPressed(90)) {
            this.transform.scale = Vector2.sum(this.transform.scale, new Vector2(-0.1, 0))
        }
        if (this.inputManager.isKeyPressed(88)) {
            this.transform.scale = Vector2.sum(this.transform.scale, new Vector2(0.1, 0))
        }
        this.transform.pivotOffset = new Vector2(this.transform.size.x / 2, this.transform.size.y)
    }

    public lateUpdate(): void {
        super.lateUpdate()
        this.transform.layer = this.transform.pivot.y
    }

    public draw(ctx: CanvasRenderingContext2D) {
        if (this.isSpriteReady && false) {
            ctx.drawImage(this.sprite, this.transform.position.x, this.transform.position.y)
        } else {
            ctx.fillStyle = "red"
            ctx.fillRect(this.transform.position.x, this.transform.position.y, this.transform.size.x, this.transform.size.y)
            this.drawHitbox(ctx)
            this.drawPivot(ctx)
        }
    }

    private drawPivot(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "blue"
        ctx.fillRect(this.transform.pivot.x - 8, this.transform.pivot.y - 8, 16, 16)
    }

    private drawHitbox(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#c4ffda"
        ctx.fillRect(this.collisionMask.position.x, this.collisionMask.position.y, this.collisionMask.size.x, this.collisionMask.size.y)
    }

}
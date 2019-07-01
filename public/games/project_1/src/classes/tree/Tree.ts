import GameObject from "../gameobject/GameObject.js";
import Vector2 from "../vector2/Vector2.js";

export default class Tree extends GameObject {

    public start(ctx: CanvasRenderingContext2D) {
        this.transform.size = new Vector2(35, 100)
        this.transform.pivotOffset = new Vector2(this.transform.size.x / 2, this.transform.size.y)
        this.transform.layer = 1
        this.transform.position = new Vector2(300, 300)
    }

    public update(ctx: CanvasRenderingContext2D) {

    }

    public lateUpdate(): void {
        super.lateUpdate()
        this.transform.layer = this.transform.pivot.y
        this.collisionMask.updateGameObject(this)
        this.collisionMask.position = new Vector2(this.transform.position.x, this.transform.position.y + this.transform.size.y * 2 / 3)
        this.collisionMask.size = new Vector2(this.transform.size.x, this.transform.size.y / 3)
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "green"
        ctx.fillRect(this.transform.position.x, this.transform.position.y, this.transform.size.x, this.transform.size.y)
    }


}
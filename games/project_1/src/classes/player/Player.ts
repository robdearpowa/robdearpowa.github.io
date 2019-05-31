import GameObject from "../gameobject/GameObject.js"
import Vector2 from "../vector2/Vector2.js";

export default class Player extends GameObject {

    public start(ctx: CanvasRenderingContext2D) {
        this.postion = new Vector2(500, 500);
    }

    public update(ctx: CanvasRenderingContext2D) {
        this.postion.x++;
        this.postion.y++;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(this.postion.x, this.postion.y, 100, 50);
    }

}
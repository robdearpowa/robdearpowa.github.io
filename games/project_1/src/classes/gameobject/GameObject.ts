import Vector2 from "../vector2/Vector2.js"

export default abstract class GameObject {
    public postion: Vector2 = new Vector2(0, 0);

    public abstract start(ctx: CanvasRenderingContext2D);
    public abstract update(ctx: CanvasRenderingContext2D);
    public abstract draw(ctx: CanvasRenderingContext2D);
}
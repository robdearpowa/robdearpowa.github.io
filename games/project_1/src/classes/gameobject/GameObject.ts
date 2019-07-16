import Vector2 from "../vector2/Vector2.js"
import CollisionMask from "../collision_mask/CollisionMask.js";
import Transform from "../transform/Transform.js";
import Utils from "../utils/Utils.js";

export default abstract class GameObject {

    public id: string
    public transform: Transform = new Transform()
    public collisionMask: CollisionMask = new CollisionMask()
    public sprite: HTMLImageElement

    constructor() {
        this.id = Utils.makeid(10)
    }

    public abstract start(ctx: CanvasRenderingContext2D)
    public abstract update(ctx: CanvasRenderingContext2D)
    public lateUpdate() {
        this.transform.updatePivot()
        this.collisionMask.scale = this.transform.scale.copy()
        this.collisionMask.position = this.transform.position.copy()
        this.collisionMask.size = this.transform.size.copy();
    }
    public abstract draw(ctx: CanvasRenderingContext2D)
}
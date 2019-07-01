import Vector2 from "../vector2/Vector2.js";
import Transform from "../transform/Transform.js";
import Utils from "../utils/Utils.js";
import GameObject from "../gameobject/GameObject.js";


export default class CollisionMask {

    private static _globalCollisionMasksList: Array<CollisionMask>

    public static get globalCollisionMasksList(): Array<CollisionMask> {
        return this._globalCollisionMasksList
    }

    public static set globalCollisionMasksList(value: Array<CollisionMask>) {
        this._globalCollisionMasksList = value
    }


    public position: Vector2 = Vector2.zero()
    private _size: Vector2 = Vector2.zero()
    private _scale: Vector2 = Vector2.one()
    public gameObject: GameObject

    public set size(value: Vector2) {
        this._size = value
    }

    public get size(): Vector2 {
        return Vector2.mult(this._size, this.scale)
    }

    public set scale(value: Vector2) {
        this._scale = value
    }

    public get scale(): Vector2 {
        return this._scale
    }

    public getRealSize(): Vector2 {
        return this._size.copy()
    }

    public updateGameObject(value: GameObject) {
        this.gameObject = value
    }

    public static isColliding(other1: CollisionMask, other2: CollisionMask): boolean {
        if (other1.gameObject.id === other2.gameObject.id) { false }
        if (other1.position.x > other2.position.x + other2.size.x || other2.position.x > other1.position.x + other1.size.x) { return false }
        if (other1.position.y > other2.position.y + other2.size.y || other2.position.y > other1.position.y + other1.size.y) { return false }
        return true
    }
}
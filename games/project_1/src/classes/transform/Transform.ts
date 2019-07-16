import Vector2 from "../vector2/Vector2.js";


export default class Transform {
    private _size: Vector2 = Vector2.zero()
    private _scale: Vector2 = Vector2.one()
    public position: Vector2 = Vector2.zero()
    public pivot: Vector2 = Vector2.zero()
    private _pivotOffset: Vector2 = Vector2.zero()
    public layer: number = 0

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

    public set pivotOffset(value: Vector2) {
        this._pivotOffset = value
    }

    public get pivotOffset(): Vector2 {
        return this._pivotOffset
    }

    public updatePivot() {
        this.pivot = this.position.copy()
        this.pivot = Vector2.sum(this.pivot, this.pivotOffset)
    }
}
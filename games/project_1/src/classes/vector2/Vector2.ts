export default class Vector2 {
    private _x: number = 0;
    private _y: number = 0;

    public constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public set x(value: number) {
        this._x = value
    }

    public set y(value: number) {
        this._y = value
    }

    public get x(): number {
        return this._x
    }

    public get y(): number {
        return this._y
    }

    public clamp(min: number, max: number) {
        this.x = this.x < min ? min : this.x > max ? max : this.x
        this.y = this.y < min ? min : this.y > max ? max : this.y
    }

    //Return an array of the vector
    public toArray(): Array<number> {
        let result = new Array<number>();
        result[0] = this.x;
        result[1] = this.y

        return result;
    }

    public toNegative(): Vector2 {
        return new Vector2(-this.x, -this.y)
    }

    public copy(): Vector2 {
        return new Vector2(this.x, this.y)
    }

    public static sum(vctr1: Vector2, vctr2: Vector2): Vector2 {
        let vctrFinal = vctr1.copy()
        vctrFinal.x += vctr2.x
        vctrFinal.y += vctr2.y

        return vctrFinal
    }

    public static mult(vctr1: Vector2, vctr2: Vector2) {
        let vctrFinal = vctr1.copy()
        vctrFinal.x *= vctr2.x
        vctrFinal.y *= vctr2.y

        return vctrFinal
    }

    public static zero(): Vector2 {
        return new Vector2(0, 0)
    }

    public static one(): Vector2 {
        return new Vector2(1, 1)
    }
}
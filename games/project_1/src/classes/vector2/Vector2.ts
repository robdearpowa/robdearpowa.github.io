export default class Vector2 {
    public x: number = 0;
    public y: number = 0;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
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

    public static zero(): Vector2 {
        return new Vector2(0, 0)
    }
}
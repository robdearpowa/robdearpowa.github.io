export default class Vector2 {
    public x: number = 0;
    public y: number = 0;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    //Return an array of the vector
    public toArray(): Array<number> {
        let result = new Array<number>();
        result[0] = this.x;
        result[1] = this.y

        return result;
    }
}
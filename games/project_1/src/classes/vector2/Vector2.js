var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.clamp = function (min, max) {
        this.x = this.x < min ? min : this.x > max ? max : this.x;
        this.y = this.y < min ? min : this.y > max ? max : this.y;
    };
    //Return an array of the vector
    Vector2.prototype.toArray = function () {
        var result = new Array();
        result[0] = this.x;
        result[1] = this.y;
        return result;
    };
    Vector2.zero = function () {
        return new Vector2(0, 0);
    };
    return Vector2;
}());
export default Vector2;
//# sourceMappingURL=Vector2.js.map
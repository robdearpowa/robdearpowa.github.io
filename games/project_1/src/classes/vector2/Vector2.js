var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this._x = 0;
        this._y = 0;
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Vector2.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
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
    Vector2.prototype.toNegative = function () {
        return new Vector2(-this.x, -this.y);
    };
    Vector2.prototype.copy = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.sum = function (vctr1, vctr2) {
        var vctrFinal = vctr1.copy();
        vctrFinal.x += vctr2.x;
        vctrFinal.y += vctr2.y;
        return vctrFinal;
    };
    Vector2.mult = function (vctr1, vctr2) {
        var vctrFinal = vctr1.copy();
        vctrFinal.x *= vctr2.x;
        vctrFinal.y *= vctr2.y;
        return vctrFinal;
    };
    Vector2.zero = function () {
        return new Vector2(0, 0);
    };
    Vector2.one = function () {
        return new Vector2(1, 1);
    };
    return Vector2;
}());
export default Vector2;
//# sourceMappingURL=Vector2.js.map
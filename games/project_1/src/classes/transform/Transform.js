import Vector2 from "../vector2/Vector2.js";
var Transform = /** @class */ (function () {
    function Transform() {
        this._size = Vector2.zero();
        this._scale = Vector2.one();
        this.position = Vector2.zero();
        this.pivot = Vector2.zero();
        this._pivotOffset = Vector2.zero();
        this.layer = 0;
    }
    Object.defineProperty(Transform.prototype, "size", {
        get: function () {
            return Vector2.mult(this._size, this.scale);
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (value) {
            this._scale = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "pivotOffset", {
        get: function () {
            return this._pivotOffset;
        },
        set: function (value) {
            this._pivotOffset = value;
        },
        enumerable: true,
        configurable: true
    });
    Transform.prototype.updatePivot = function () {
        this.pivot = this.position.copy();
        this.pivot = Vector2.sum(this.pivot, this.pivotOffset);
    };
    return Transform;
}());
export default Transform;
//# sourceMappingURL=Transform.js.map
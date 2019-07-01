import Vector2 from "../vector2/Vector2.js";
var CollisionMask = /** @class */ (function () {
    function CollisionMask() {
        this.position = Vector2.zero();
        this._size = Vector2.zero();
        this._scale = Vector2.one();
    }
    Object.defineProperty(CollisionMask, "globalCollisionMasksList", {
        get: function () {
            return this._globalCollisionMasksList;
        },
        set: function (value) {
            this._globalCollisionMasksList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollisionMask.prototype, "size", {
        get: function () {
            return Vector2.mult(this._size, this.scale);
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollisionMask.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (value) {
            this._scale = value;
        },
        enumerable: true,
        configurable: true
    });
    CollisionMask.prototype.getRealSize = function () {
        return this._size.copy();
    };
    CollisionMask.prototype.updateGameObject = function (value) {
        this.gameObject = value;
    };
    CollisionMask.isColliding = function (other1, other2) {
        if (other1.gameObject.id === other2.gameObject.id) {
            false;
        }
        if (other1.position.x > other2.position.x + other2.size.x || other2.position.x > other1.position.x + other1.size.x) {
            return false;
        }
        if (other1.position.y > other2.position.y + other2.size.y || other2.position.y > other1.position.y + other1.size.y) {
            return false;
        }
        return true;
    };
    return CollisionMask;
}());
export default CollisionMask;
//# sourceMappingURL=CollisionMask.js.map
import CollisionMask from "../collision_mask/CollisionMask.js";
import Transform from "../transform/Transform.js";
import Utils from "../utils/Utils.js";
var GameObject = /** @class */ (function () {
    function GameObject() {
        this.transform = new Transform();
        this.collisionMask = new CollisionMask();
        this.id = Utils.makeid(10);
    }
    GameObject.prototype.lateUpdate = function () {
        this.transform.updatePivot();
        this.collisionMask.scale = this.transform.scale.copy();
    };
    return GameObject;
}());
export default GameObject;
//# sourceMappingURL=GameObject.js.map
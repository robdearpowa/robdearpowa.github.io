var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import GameObject from "../gameobject/GameObject.js";
import Vector2 from "../vector2/Vector2.js";
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tree.prototype.start = function (ctx) {
        this.transform.size = new Vector2(35, 100);
        this.transform.pivotOffset = new Vector2(this.transform.size.x / 2, this.transform.size.y);
        this.transform.layer = 1;
        this.transform.position = new Vector2(300, 300);
    };
    Tree.prototype.update = function (ctx) {
    };
    Tree.prototype.lateUpdate = function () {
        _super.prototype.lateUpdate.call(this);
        this.transform.layer = this.transform.pivot.y;
        this.collisionMask.updateGameObject(this);
        this.collisionMask.position = new Vector2(this.transform.position.x, this.transform.position.y + this.transform.size.y * 2 / 3);
        this.collisionMask.size = new Vector2(this.transform.size.x, this.transform.size.y / 3);
    };
    Tree.prototype.draw = function (ctx) {
        ctx.fillStyle = "green";
        ctx.fillRect(this.transform.position.x, this.transform.position.y, this.transform.size.x, this.transform.size.y);
    };
    return Tree;
}(GameObject));
export default Tree;
//# sourceMappingURL=Tree.js.map
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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player.prototype.start = function (ctx) {
        this.postion = new Vector2(500, 500);
    };
    Player.prototype.update = function (ctx) {
        this.postion.x++;
        this.postion.y++;
    };
    Player.prototype.draw = function (ctx) {
        ctx.fillRect(this.postion.x, this.postion.y, 100, 50);
    };
    return Player;
}(GameObject));
export default Player;
//# sourceMappingURL=Player.js.map
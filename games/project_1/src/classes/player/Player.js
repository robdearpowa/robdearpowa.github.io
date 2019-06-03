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
import InputManager from "../inputmanager/InputManager.js";
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        return _this;
    }
    Player.prototype.start = function (ctx) {
        this.postion = Vector2.zero();
        this.inputManager = new InputManager();
    };
    Player.prototype.update = function (ctx) {
        //console.log(this.postion)
        if (this.inputManager.isKeyPressed(37) || this.inputManager.isKeyPressed(65)) {
            this.postion.x -= this.speed;
        }
        if (this.inputManager.isKeyPressed(38) || this.inputManager.isKeyPressed(87)) {
            this.postion.y -= this.speed;
        }
        if (this.inputManager.isKeyPressed(39) || this.inputManager.isKeyPressed(68)) {
            this.postion.x += this.speed;
        }
        if (this.inputManager.isKeyPressed(40) || this.inputManager.isKeyPressed(83)) {
            this.postion.y += this.speed;
        }
    };
    Player.prototype.draw = function (ctx) {
        var _this = this;
        this.spirte = new Image();
        this.spirte.src = "./src/classes/player/spcm.png";
        this.spirte.onload = function (e) {
            ctx.drawImage(_this.spirte, _this.postion.x, _this.postion.y);
        };
    };
    return Player;
}(GameObject));
export default Player;
//# sourceMappingURL=Player.js.map
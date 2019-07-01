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
import CollisionMask from "../collision_mask/CollisionMask.js";
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.isSpriteReady = false;
        return _this;
    }
    Player.prototype.start = function (ctx) {
        var _this = this;
        this.transform.size = new Vector2(30, 80);
        this.transform.scale = new Vector2(1, 1);
        this.transform.layer = 2;
        this.sprite = new Image();
        this.sprite.src = "./spcm.png";
        this.sprite.onload = function (e) {
            _this.isSpriteReady = true;
        };
        this.transform.position = Vector2.zero();
        this.inputManager = new InputManager();
    };
    Player.prototype.update = function (ctx) {
        //console.log(this.postion)
        if (this.inputManager.isKeyPressed(37) || this.inputManager.isKeyPressed(65)) {
            if (!this.collisionCheck(-this.speed, 0))
                this.transform.position.x -= this.speed;
        }
        if (this.inputManager.isKeyPressed(38) || this.inputManager.isKeyPressed(87)) {
            if (!this.collisionCheck(0, -this.speed))
                this.transform.position.y -= this.speed;
        }
        if (this.inputManager.isKeyPressed(39) || this.inputManager.isKeyPressed(68)) {
            if (!this.collisionCheck(this.speed, 0))
                this.transform.position.x += this.speed;
        }
        if (this.inputManager.isKeyPressed(40) || this.inputManager.isKeyPressed(83)) {
            if (!this.collisionCheck(0, this.speed))
                this.transform.position.y += this.speed;
        }
        if (this.inputManager.isKeyPressed(90)) {
            this.transform.scale = Vector2.sum(this.transform.scale, new Vector2(-0.1, 0));
        }
        if (this.inputManager.isKeyPressed(88)) {
            this.transform.scale = Vector2.sum(this.transform.scale, new Vector2(0.1, 0));
        }
        this.transform.pivotOffset = new Vector2(this.transform.size.x / 2, this.transform.size.y);
    };
    Player.prototype.lateUpdate = function () {
        _super.prototype.lateUpdate.call(this);
        this.transform.layer = this.transform.pivot.y;
        this.collisionMask.position = new Vector2(this.transform.position.x, this.transform.position.y + this.transform.size.y * 2 / 3);
        this.collisionMask.size = new Vector2(this.transform.size.x, this.transform.size.y / 3);
    };
    Player.prototype.draw = function (ctx) {
        if (this.isSpriteReady && false) {
            ctx.drawImage(this.sprite, this.transform.position.x, this.transform.position.y);
        }
        else {
            ctx.fillStyle = "red";
            ctx.fillRect(this.transform.position.x, this.transform.position.y, this.transform.size.x, this.transform.size.y);
            this.drawHitbox(ctx);
            this.drawPivot(ctx);
        }
    };
    Player.prototype.drawPivot = function (ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.transform.pivot.x - 8, this.transform.pivot.y - 8, 16, 16);
    };
    Player.prototype.drawHitbox = function (ctx) {
        ctx.fillStyle = "#c4ffda";
        ctx.fillRect(this.collisionMask.position.x, this.collisionMask.position.y, this.collisionMask.size.x, this.collisionMask.size.y);
    };
    Player.prototype.collisionCheck = function (x, y) {
        var shadowCollision = new CollisionMask();
        shadowCollision.position = this.collisionMask.position.copy();
        shadowCollision.scale = this.collisionMask.scale.copy();
        shadowCollision.size = this.collisionMask.getRealSize();
        shadowCollision.position.x += x;
        shadowCollision.position.y += y;
        shadowCollision.updateGameObject(this);
        var collisionMasksList = CollisionMask.globalCollisionMasksList;
        for (var i in collisionMasksList) {
            if (CollisionMask.isColliding(shadowCollision, collisionMasksList[i])) {
                return true;
            }
        }
    };
    return Player;
}(GameObject));
export default Player;
//# sourceMappingURL=Player.js.map
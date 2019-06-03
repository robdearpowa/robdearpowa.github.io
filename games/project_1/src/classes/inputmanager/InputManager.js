var InputManager = /** @class */ (function () {
    function InputManager() {
        var _this = this;
        this.keyCodesPressed = new Array();
        window.addEventListener("keydown", function (e) {
            for (var i in _this.keyCodesPressed) {
                if (_this.keyCodesPressed[i] === e.keyCode) {
                    return;
                }
            }
            _this.keyCodesPressed.push(e.keyCode);
        });
        window.addEventListener("keyup", function (e) {
            _this.keyCodesPressed = _this.keyCodesPressed.filter(function (v, i, a) {
                return v != e.keyCode;
            });
        });
    }
    InputManager.prototype.isKeyPressed = function (key) {
        for (var i in this.keyCodesPressed) {
            if (this.keyCodesPressed[i] === key) {
                return true;
            }
        }
        return false;
    };
    return InputManager;
}());
export default InputManager;
//# sourceMappingURL=InputManager.js.map
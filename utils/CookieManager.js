var CookieManager = /** @class */ (function () {
    function CookieManager() {
    }
    CookieManager.saveCookie = function (name, cookie) {
        try {
            document.cookie = name + "=" + cookie;
            return true;
        }
        catch (e) {
            alert("Error:" + e);
            return false;
        }
    };
    CookieManager.saveCookieAsObject = function (name, cookie) {
        try {
            var _cookie = JSON.stringify(cookie);
            this.saveCookie(name, _cookie);
        }
        catch (e) {
            alert("Error:" + e);
            return false;
        }
    };
    CookieManager.loadCookie = function (name) {
        var query = name + "=";
        var cookie = document.cookie;
        var cookiesArray = cookie.split(";");
        for (var i in cookiesArray) {
            try {
                var result = cookiesArray[i].replace(query, "");
                return result.length > 0 ? result : null;
            }
            catch (error) {
                alert("Error: " + error);
                return null;
            }
        }
    };
    CookieManager.loadCookieAsObject = function (name) {
        return JSON.parse(this.loadCookie(name));
    };
    return CookieManager;
}());
export default CookieManager;
//# sourceMappingURL=CookieManager.js.map
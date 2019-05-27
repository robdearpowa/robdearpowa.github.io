export class CookieHandler {
    static saveCookie(cookieName, string) {
        document.cookie = `${cookieName}=${string}`
    }

    static saveCookieAsObject(cookieName, obj) {
        let json = JSON.stringify(obj)
        CookieHandler.saveCookie(cookieName, json)
    }

    static loadCookie(cookieName) {
        let name = cookieName + "="
        let decodedCookie = decodeURIComponent(document.cookie)
        let cookieArray = decodedCookie.split(';')

        for (let index in cookieArray) {
            if (cookieArray[index].includes(name)) {
                return cookieArray[index].replace(name, "");
            }
        }

        return null
    }

    static loadCookieAsObject(cookieName) {
        return JSON.parse(CookieHandler.loadCookie(cookieName))
    }
}
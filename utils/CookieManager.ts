export default class CookieManager {
    static saveCookie(name: string, cookie: string): boolean {
        try {
            document.cookie = `${name}=${cookie}`
            return true
        } catch (e) {
            alert(`Error:${e}`)
            return false
        }
    }

    static saveCookieAsObject(name: string, cookie: object): boolean {
        try {
            let _cookie: string = JSON.stringify(cookie)
            this.saveCookie(name, _cookie)
        } catch (e) {
            alert(`Error:${e}`)
            return false;
        }
    }

    static loadCookie(name: string): string {
        let query = name + "="
        let cookie = document.cookie;
        let cookiesArray = cookie.split(";")

        for (let i in cookiesArray) {
            try {
                let result = cookiesArray[i].replace(query, "")
                return result.length > 0 ? result : null
            } catch (error) {
                alert(`Error: ${error}`)
                return null
            }
        }
    }

    static loadCookieAsObject(name: string) {
        return JSON.parse(this.loadCookie(name))
    }
}
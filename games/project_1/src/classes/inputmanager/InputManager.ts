export default class InputManager {
    private keyCodesPressed: Array<number>

    public constructor() {
        this.keyCodesPressed = new Array<number>()
        window.addEventListener("keydown", (e) => {
            for (let i in this.keyCodesPressed) {
                if (this.keyCodesPressed[i] === e.keyCode) {
                    return
                }
            }
            this.keyCodesPressed.push(e.keyCode)
        })
        window.addEventListener("keyup", (e) => {
            this.keyCodesPressed = this.keyCodesPressed.filter((v, i, a) => {
                return v != e.keyCode
            })
        })
    }

    public isKeyPressed(key: number): boolean {
        for (let i in this.keyCodesPressed) {
            if (this.keyCodesPressed[i] === key) {
                return true
            }
        }
        return false
    }
}
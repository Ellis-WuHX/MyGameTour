//创建类
//古老的办法
//var GuaScene = function() {
// }
//GuaScene.property.draw = function() {
// }
//语法糖 Class
//class GuaScene {
//      constructor() {
//      }
// }
class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            var a = this.elements[i]
            this.game.drawImage(a)
        }
    }

    addElement(guaImage) {
        this.elements.push(guaImage)
    }

    update() {

    }
}


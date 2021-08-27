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
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    draw() {

    }

    update() {

    }
}


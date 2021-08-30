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
        this.debugModaEnable = true
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    draw() {
        //for(var e of elements) {
        //e.draw()
        // }
        //遍历
        // for in\ for of\ forEach\ for i\ var i to n
        for (let i = 0; i < this.elements.length; i++) {
            var a = this.elements[i]
            // this.game.drawImage(a)
            //让元素自己draw
            a.draw()
        }
    }

    addElement(guaImage) {
        //得到父类
        guaImage.scene = this
        this.elements.push(guaImage)
    }

    update() {
        if(this.debugModaEnable) {
            for (let i = 0; i < this.elements.length; i++) {
                var e = this.elements[i]
                e.update() && e.debug()
            }
        } else {
            for (let i = 0; i < this.elements.length; i++) {
                var e = this.elements[i]
                e.update()
            }
        }
    }
}


class GuaLabel {
    constructor(game, text) {
        this.game = game
        this.text = text
    }

    static new(game, text) {
        return new this(game, text)
    }

    draw() {
        // draw labels
        this.game.context.fillText(this.text, 100, 190)
    }

    update() {

    }
}
class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        //使用抽象的方法draw
        var label = GuaLabel.new(game, "hello")
        this.addElement(label)
    }

    draw() {
        // draw labels
        // this.game.context.fillText('按 k 开始游戏', 100, 190)
        //子类覆盖父类
        // super.draw()
    }
}

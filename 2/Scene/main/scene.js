class Scene extends GuaScene {
    constructor(game) {
        super(game)

        this.setup()
    }

    setup() {
        var game = this.game
        this.bg = GuaImage.new(game, "sky")
        this.player = GuaImage.new(game, "player")
        this.player.width = 100
        this.player.height = 150
        //实现左右前后移动
        // game.registerAction('a', function () {
        //     paddle.moveLeft()
        // })
        // game.registerAction('d', function () {
        //     paddle.moveRight()
        // })
        // game.registerAction('f', function () {
        //     ball.fire()
        // })


        this.addElement(this.bg)
        this.addElement(this.player)
    }

    //可以把draw函数作为scene的属性，加载scene就会自动把全部东西(把这些东西做成数组)画出来
    // draw() {
    //     // draw labels
    //     // this.game.drawImage(this.bg)
    //     // this.game.drawImage(this.player)
    // }
}

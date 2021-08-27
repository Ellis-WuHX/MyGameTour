class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        var game = this.game
        this.numberOfEnemies = 10
        this.bg = GuaImage.new(game, "sky")
        this.cloud = Cloud.new(game, "cloud")
        this.player = GuaImage.new(game, "player")
        this.player = Player.new(game)
        this.player.x = 200
        this.player.y = 500
        this.player.width = 100
        this.player.height = 150
        this.cloud.width = 100
        this.cloud.height = 150


        this.addElement(this.bg)
        this.addElement(this.player)
        this.addElement(this.cloud)
        this.addEnemies()

        this.setupInput(this.player)
    }

    //可以把draw函数作为scene的属性，加载scene就会自动把全部东西(把这些东西做成数组)画出来
    // draw() {
    //     // draw labels
    //     // this.game.drawImage(this.bg)
    //     // this.game.drawImage(this.player)
    // }

    addEnemies() {
        var es = []
        for (let i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }

    setupInput(player) {
        var game = this.game
        //实现左右前后移动
        game.registerAction('a', function () {
            player.moveLeft()
        })
        game.registerAction('d', function () {
            player.moveRight()
        })
        game.registerAction('w', function () {
            player.moveUp()
        })
        game.registerAction('s', function () {
            player.moveDown()
        })
        game.registerAction('j', function () {
            player.fire()
        })
    }

    update() {
        if(window.paused) {
            return
        }
        super.update()
        this.cloud.y += 1
    }
}

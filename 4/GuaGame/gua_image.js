//单例:全局变量
const config ={
    player_speed: 10,
    cloud_speed: 1,
    bullet_speed: 5,
}
class GuaImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
    }

    static new(game, name) {
        var i = new this(game, name)
        return i
    }

    draw() {

    }

    update() {

    }
}

class Player extends GuaImage {
    constructor(game, name) {
        super (game, "player")
        this.setup()
    }

    setup() {
        this.speed = 10
        this.cooldown = 0
    }

    update() {
        this.speed = config.player_speed
        // console.log("Player speed", this.speed)
        if(this.cooldown > 0) {
            this.cooldown --
        }

    }

    fire() {
        if(this.cooldown === 0) {
            this.cooldown = 5
            var x = this.x + this.w /2
            var y = this.y
            var b = Bullet.new(this.game)
            b.x = x
            b.y = y
            this.scene.addElement(b)
        }

    }
    moveLeft() {
       this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
    }

    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }
}

const randomBetween = function (start, end) {
    let s = Math.random() * (end - start + 1)
    // ~~s = Math.floor(s)
    return Math.floor(s + start)

}

class Enemy extends GuaImage {
    constructor(game) {
        var type = randomBetween(0, 4)
        var name = "enemy" + type
        super (game, name)
        this.setup()
    }

    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 400)
        this.y = randomBetween(0, 300)
    }

    update() {
        this.y += this.speed
        // console.log("Enemy speed", this.speed)
        if (this.y > 600) {
            this.setup()
        }
    }
}

class Cloud extends GuaImage {
    constructor(game, name) {
        // var type = randomBetween(0, 4)
        // var name = "enemy" + type
        super (game, name)
        this.setup()
    }

    setup() {
        // console.log("cloud speed", this.speed)
        this.x = randomBetween(0, 400)
        this.y = randomBetween(0, 200)
        
    }

    debug() {
        this.speed = config.cloud_speed
    }


    update() {
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }
    }
}

class Bullet extends GuaImage {
    constructor(game, name) {
        // var type = randomBetween(0, 4)
        // var name = "enemy" + type
        super (game, "bullet")
        this.setup()
    }

    setup() {
        this.speed = config.bullet_speed
        console.log("Bullet speed", this.speed)
    }

    update() {
        this.y -= this.speed
    }
}

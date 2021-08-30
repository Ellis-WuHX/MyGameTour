// var loadLevel = function (game, n) {
//     n = n - 1
//     var level = levels[n]
//     var blocks = []
//     for (var i = 0; i < level.length; i++) {
//         var p = level[i]
//         var b = Block(game, p)
//         blocks.push(b)
//     }
//     return blocks
// }

var enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (k === " ") {
            // 暂停功能
            window.paused = !window.paused
        }
        // else if ('1234567'.includes(k)) {
        //     // 为了 debug 临时加的载入关卡功能
        //     blocks = loadLevel(game, Number(k))
        // }
    })
    // 控制速度
    document.querySelector('#speed-control-slider').addEventListener('input', function (event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function () {
    var images = {
        bullet: '../img/ball.png',
        sky: '../img/sky.png',
        player: '../img/player.png',
        cloud: '../img/cloud.png',
        enemy0: '../img/enemy.png',
        enemy1: '../img/enemy.png',
        enemy2: '../img/enemy.png',
        enemy3: '../img/enemy.png',
        enemy4: '../img/enemy.png',
    }
    var game = GuaGame.instance(30, images, function (g) {
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()

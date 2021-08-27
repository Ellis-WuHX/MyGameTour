// var SceneEnd = function (game) {
//     var s = {
//         game: game,
//     }
//
//     game.register("a",function () {
//         var s = SceneStart.new(g)
//         game.replaceScene(s)
//     })
//
//
//     game.update = function () {
//     }
//     game.draw = function () {
//         //text
//         game.context.fillStyle = "black"
//         game.context.fillText("GAME OVER, PRESS A TO CONTINUE", 100, 200)
//     }
//     return s
// }
//用类不能直接调用函数，要new
class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function () {
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        // draw labels
        this.game.context.fillText('游戏结束, 按 r 返回标题界面', 100, 290)
    }
}

/*
var Gua_game = function (fps, images, callback) {
   var g = {
       scene: null,
       actions:{},
       keydowns: {},
       images:{},
   }

   //utils of guaGame
   var canvas = document.querySelector('#id-canvas')
   var context = canvas.getContext('2d')
   g.canvas = canvas
   g.context = context

   //event
   window.addEventListener("keydown", function (event) {
       g.keydowns[event.key] = true
   })
   window.addEventListener("keyup", function (event) {
       g.keydowns[event.key] = false
   })

   g.register = function (key, callback) {
       g.actions[key] = callback
   }

   g.drawImag = function (guaImg) {
       g.context.drawImage(guaImg.image, guaImg.x, guaImg.y)
   }

   g.imagesByName = function (name) {
       var img = g.images[name]
       var image = {
           w: img.width,
           h: img.height,
           image: img,
       }
       return image
   }
   g.replaceScene = function (s) {
       g.scene = s

   }
   //---- end of utils-------


   //timer
   window.fps = 30
   var runloop = function() {
       // events
       var actions = Object.keys(g.actions)
       for (var i = 0; i < actions.length; i++) {
           var key = actions[i]
           if(g.keydowns[key]) {
               // 如果按键被按下, 调用注册的 action
               g.actions[key]()
           }
       }

       // update
       g.update()

       // clear
       context.clearRect(0, 0, canvas.width, canvas.height)

       // draw
       g.draw()

       // next run loop
       setTimeout(function(){
           runloop()
       }, 1000/window.fps)
   }

   //loading
   var loads = []

   var names = Object.keys(images)
   for (var i = 0; i < names.length; i++) {
       let name = names[i]
       var path = images[name]
       let img = new Image();
       img.src = path
       img.onload = function () {
           g.images[name] = img
           loads.push(1)
           if(loads.length === names.length) {
               //roading 完了 调用 run
               g.run()
           }
       }
   }

   g.run = function () {
       //初始化Scene & 调用 runWithScene
       callback(g)
   }

   g.runWithScene = function (scene) {
       g.scene = scene
       setTimeout(function(){
           //赋予g.Scene, 调用 runloop
           runloop()
       }, 1000/fps)
   }

   return g
}
*/
class GuaGame {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        //
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        // events
        var self = this
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function (event) {
            self.keydowns[event.key] = false
        })
        this.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    drawImage(img) {
        this.context.drawImage(img.texture, img.x, img.y)
    }

    // update
    update() {
        this.scene.update()
    }

    // draw
    draw() {
        this.scene.draw()
    }

    //
    registerAction(key, callback) {
        this.actions[key] = callback
    }

    runloop() {
        // events
        var g = this
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                // 如果按键被按下, 调用注册的 action
                g.actions[key]()
            }
        }
        // update
        g.update()
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.draw()
        // next run loop
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }

    textureByName(name) {
        var g = this
        var img = g.images[name]
        // var image = {
        //     // w: img.width,
        //     // h: img.height,
        //     image: img,
        // }
        return img
    }

    runWithScene(scene) {
        var g = this
        g.scene = scene
        // 开始运行程序
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }

    replaceScene(scene) {
        this.scene = scene
    }

    __start(scene) {
        this.runCallback(this)
    }

    init() {
        var g = this
        var loads = []
        // 预先载入所有图片
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function () {
                // 存入 g.images 中
                g.images[name] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                log('load images', loads.length, names.length)
                if (loads.length === names.length) {
                    log('load images', g.images)
                    g.__start()
                }
            }
        }
    }
}

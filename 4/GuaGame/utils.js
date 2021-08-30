var log = console.log.bind(console)
//关闭log
// var log = function () {}
//输出 log
// var e = sel => document.querySelector(sel)
// var log = function () {
//        e(#id-text-log).value += "\n" + s
// }

var imageFromPath = function (path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function (a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}
//面向对象： 把所有的数据和关联的函数打包到一起，变成一个叫对象的东西，实现局部的全局变量

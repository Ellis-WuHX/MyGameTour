// 1. templateCell 函数, 参数为数组 line 和变量 x, x 表示第几行
let templateCell = function (line, x) {
// 返回 line.length 个 cell 拼接的字符串

}

// 2. templateRow 的参数 square 是二维数组, 用来表示雷相关的数据
const templateRow = function(square) {
// 返回 square.length 个 row 拼接的字符串
// row 的内容由 templateCell 函数生成

}


// 3. square 是二维数组, 用来表示雷相关的数据
const renderSquare = function(square) {
// 用 square 生成 9 * 9 的格子, 然后插入到页面中
// div container 是 <div id="id-div-mime"></div>
}


// 4. 实现 bindEventDelegate 函数, 只处理格子, 也就是 .cell 元素
const bindEventDelegate = function(square) {

}

// 5. vjkl 是点击格子的函数
const vjkl = function(cell, square) {
// 要注意的是我们在初始情况下就把数字写到了 html 中 <div class="cell" data-number="1" data-x="0" data-y="1">1</div>
// 而初始情况下数字不应该显示出来的, 可以直接用 font-size: 0; 来隐藏文字
// 点击的时候根据情况用 font-size: 14px; (当然这一步应该用 class 来完成, 比如添加 opened class) 的方式显示文字
// 如果已经显示过, 则不做任何处理
// 如果没有显示过, 判断下列情况
// 1. 如果点击的是 9, 展开, 游戏结束
// 2. 如果点击的是 0, 展开并且调用 vjklAround 函数
// 3. 如果点击的是其他数字, 展开
}

// 6. vjklAround 展开周围 cell 周围 8 个元素, x 和 y 分别是下标
const vjklAround = function(square, x, y) {
// 展开周围的元素通过调用 vjkl1 来解决
}

// 7. vjkl1 是重点函数
const vjkl1 = function(square, x, y) {
// 如果满足边界调节, 则继续
// 因为 vjkl1 这个函数是展开格子, 所以如果已经展开过, 那么就不展开元素, 这个是递归终止条件
// 根据 x 和 y 还有属性选择器选择出格子, 具体可以参考 https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors
// 选择出格子之后拿到格子上面放的元素
// 如果没有展开过, 判断下列情况
// 如果碰到的是 9, 什么都不做. 注意, 这里 9 的处理方式和直接点击格子 9 的处理方式不一样
// 如果碰到的是 0, 展开, 递归调用 vjklAround 函数
// 如果碰到的是其他元素, 展开
}

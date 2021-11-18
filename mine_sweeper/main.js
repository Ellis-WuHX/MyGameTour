const e = function (selector) {
    let element = document.querySelector(selector)
    if (element === null) {
        let s = `元素没找到, 选择器 ${selector} 不对`
        alert(s)
        // return null 方便后续处理 e 函数的返回值
        return null
    } else {
        return element
    }
}
const eAll = function (selector) {
    let element = document.querySelectorAll(selector)
    if (element === null) {
        let s = `元素没找到, 选择器 ${selector} 不对`
        alert(s)
        // return null 方便后续处理 e 函数的返回值
        return null
    } else {
        return element
    }
}

// 1. templateCell 函数, 参数为数组 line 和变量 x, x 表示第几行
let templateCell = function (line, x) {
// 返回 line.length 个 cell 拼接的字符串
    let s = ''
    for (let i = 0; i < line.length; i++) {
        let cell = line[i]
        s += `
                <div class="cell" data-number="${cell}" data-x="${x}" data-y="${i}">
                <img src="../img/blank.gif" />
                ${cell}
                </div>
            `
    }
    return s
}

// 2. templateRow 的参数 square 是二维数组, 用来表示雷相关的数据
const templateRow = function (square) {
// 返回 square.length 个 row 拼接的字符串
// row 的内容由 templateCell 函数生成
    let s = ''
    for (let i = 0; i < square.length; i++) {
        let a = square[i]
        let row = templateCell(a, i)
        s += `
            <div class="row clearfix">
            ${row}
            </div>
            `
    }
    return s
}


// 3. square 是二维数组, 用来表示雷相关的数据
const renderSquare = function (square) {
// 用 square 生成 9 * 9 的格子, 然后插入到页面中
// div container 是 <div id="id-div-mime"></div>
    let container = e('body')
    let a = templateRow(square)
    container.innerHTML += `
            <div class="square">
            <div id="id-div-mime"> ${a}</div>
            </div>
            `
    console.log("container", container)
    console.log("square", square)
}

const getImgSrc = function (number) {
    var images = {
        0: '../img/0.gif',
        1: '../img/1.gif',
        2: '../img/2.gif',
        3: '../img/3.gif',
        4: '../img/4.gif',
        5: '../img/5.gif',
        6: '../img/6.gif',
        7: '../img/7.gif',
        8: '../img/8.gif',
        9: '../img/bomb.gif',
    }
    const src = images[number]
    return src
}

// 4. 实现 bindEventDelegate 函数, 只处理格子, 也就是 .cell 元素
const bindEventDelegate = function (square) {
    renderSquare(square)
    const cells = eAll(".cell")
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i]
        cell.addEventListener('click', function (event) {
            const input = event.target
            console.log("cell", cell)
            vjkl(cell, square)

        })
    }


}

// 5. vjkl 是点击格子的函数
const vjkl = function (cell, square) {
// 要注意的是我们在初始情况下就把数字写到了 html 中 <div class="cell" data-number="1" data-x="0" data-y="1">1</div>
// 而初始情况下数字不应该显示出来的, 可以直接用 font-size: 0; 来隐藏文字
// 点击的时候根据情况用 font-size: 14px; (当然这一步应该用 class 来完成, 比如添加 opened class) 的方式显示文字
// 如果已经显示过, 则不做任何处理
// 如果没有显示过, 判断下列情况
// 1. 如果点击的是 9, 展开, 游戏结束
// 2. 如果点击的是 0, 展开并且调用 vjklAround 函数
// 3. 如果点击的是其他数字, 展开
    console.log("vjkl cell", cell)
    const dataNumber = cell.getAttribute("data-number")
    const dataX = cell.getAttribute("data-x")
    const dataY = cell.getAttribute("data-y")
    const isOpened = cell.classList.contains("opened")
    console.log("dataNumber", dataNumber)
    console.log("isOpened", isOpened)
    if (!isOpened) {
        if (dataNumber === "9") {
            const cells = eAll(".cell")
            for (let i = 0; i < cells.length; i++) {
                const cell = cells[i]
                const cellDataNumber = cell.getAttribute("data-number")
                cell.classList.add("opened")
                const src = getImgSrc(cellDataNumber)
                cell.getElementsByTagName("img")[0].src = src
            }
        } else if (dataNumber === "0") {
            cell.classList.add("opened")
            const src = getImgSrc(dataNumber)
            cell.getElementsByTagName("img")[0].src = src
            vjklAround(square, dataX, dataY)
        } else {
            cell.classList.add("opened")
            const src = getImgSrc(dataNumber)
            cell.getElementsByTagName("img")[0].src = src
        }

    }


}


// 6. vjklAround 展开周围 cell 周围 8 个元素, x 和 y 分别是下标
const vjklAround = function (square, x, y) {
// 展开周围的元素通过调用 vjkl1 来解决
    console.log("loop in vjklAround", square, x, y)
    const indexArr = [];
    x = parseInt(x)
    y = parseInt(y)
    if (x === 0) {
        if (y === 0) {
            let y1 = y
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    const index = [];
                    index.push(x)
                    index.push(y1)
                    indexArr.push(index)
                    vjkl1(square, x, y1)
                    y1 += 1
                }
                x += 1
                y1 = y
            }
        } else if (y === 8) {
            y = y - 1
            let y1 = y
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    const index = [];
                    index.push(x)
                    index.push(y1)
                    indexArr.push(index)
                    vjkl1(square, x, y1)
                    y1 += 1
                }
                x += 1
                y1 = y
            }
        } else {
            y = y - 1
            let y1 = y
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 3; j++) {
                    const index = [];
                    index.push(x)
                    index.push(y1)
                    indexArr.push(index)
                    vjkl1(square, x, y1)
                    y1 += 1
                }
                x += 1
                y1 = y
            }
        }
    } else if (x === 8) {
        if (y === 0) {
            x = x - 1
            let y1 = y
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    const index = [];
                    index.push(x)
                    index.push(y1)
                    indexArr.push(index)
                    vjkl1(square, x, y1)
                    y1 += 1
                }
                x += 1
                y1 = y
            }
        } else if (y === 8) {
            x = x - 1
            y = y - 1
            let y1 = y
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    const index = [];
                    index.push(x)
                    index.push(y1)
                    indexArr.push(index)
                    vjkl1(square, x, y1)
                    y1 += 1
                }
                x += 1
                y1 = y
            }
        } else {
            x = x - 1
            y = y - 1
            let y1 = y
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 3; j++) {
                    const index = [];
                    index.push(x)
                    index.push(y1)
                    indexArr.push(index)
                    vjkl1(square, x, y1)
                    y1 += 1
                }
                x += 1
                y1 = y
            }
        }
    } else if (y === 0) {
        x = x - 1
        let y1 = y
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 2; j++) {
                const index = [];
                index.push(x)
                index.push(y1)
                indexArr.push(index)
                vjkl1(square, x, y1)
                y1 += 1
            }
            x += 1
            y1 = y
        }
    } else if(y === 8) {
        x = x - 1
        y = y - 1
        let y1 = y
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 2; j++) {
                const index = [];
                index.push(x)
                index.push(y1)
                indexArr.push(index)
                vjkl1(square, x, y1)
                y1 += 1
            }
            x += 1
            y1 = y
        }
    } else {
        x = x - 1
        y = y - 1
        let y1 = y
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const index = [];
                index.push(x)
                index.push(y1)
                indexArr.push(index)
                vjkl1(square, x, y1)
                y1 += 1
            }
            x += 1
            y1 = y
        }
    }
    console.log("index", indexArr)
}

// 7. vjkl1 是重点函数
const vjkl1 = function (square, x, y) {
// 如果满足边界调节, 则继续
// 因为 vjkl1 这个函数是展开格子, 所以如果已经展开过, 那么就不展开元素, 这个是递归终止条件
// 根据 x 和 y 还有属性选择器选择出格子, 具体可以参考 https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors
// 选择出格子之后拿到格子上面放的元素
// 如果没有展开过, 判断下列情况
// 如果碰到的是 9, 什么都不做. 注意, 这里 9 的处理方式和直接点击格子 9 的处理方式不一样
// 如果碰到的是 0, 展开, 递归调用 vjklAround 函数
// 如果碰到的是其他元素, 展开

    let t = $('[data-x= ' + x + ' ][data-y = ' + y + ' ]')[0]
    // let t = $('[data-x= "1" ][data-y = "2"]')[0]
    let c = t.classList.contains("opened")
    console.log("text", t)
    console.log("classList", c)
    if (!c) {
        if (square[x][y] === 0) {
            console.log("it's 0")
            t.classList.add("opened")
            const src = getImgSrc(square[x][y])
            t.getElementsByTagName("img")[0].src = src
            vjklAround(square, x, y)
        } else if (square[x][y] === 9) {

        } else {
            t.classList.add("opened")
            const src = getImgSrc(square[x][y])
            t.getElementsByTagName("img")[0].src = src
        }
    }


}

const __main = () => {
    bindEventDelegate(square)
}
__main()

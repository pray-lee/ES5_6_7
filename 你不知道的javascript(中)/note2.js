// 第二章
var a = []
a[0] = 1
a[2] = 2
console.log(a.length, a) // 长度为3，但是我们并没有设置a[1],数组会自动把索引补全

//如果字符串键值能够被强制类型转换为十进制数字的话，它 就会被当作数字索引来处理。
var a = [ ];
a["13"] = 42;
a.length; // 14


//字符串借用数组方法

var str = 'fuck you'
var strJoin = Array.prototype.join.call(str, '-')
console.log(strJoin) //f-u-c-k- -y-o-u

var strMap = Array.prototype.map.call(str, function(value){
  return value.toUpperCase() + '.'
}).join('')
console.log(strMap)

let arr = [1, 2, 3]
let result = arr.reverse()
console.log(result)
let arrStr = '123'
let strresult = Array.prototype.reverse.call(arrStr)
cosnole.log(strresult) //报错，因为字符串是不可变的

// 简单标量基本类型值(字符串和数字等)通过值复制来赋值 / 传递，而复合值(对象等) 通过引用复制来赋值 / 传递。JavaScript 中的引用和其他语言中的引用 / 指针不同，它们不 能指向别的变量 / 引用，只能指向值。

//简单值(即标量基本类型值，scalar primitive)总是通过值复制的方式来赋值 / 传递，包括 null、undefined、字符串、数字、布尔和 ES6 中的 symbol。
//复合值(compound value)——对象(包括数组和封装对象)和函数，则总 是通过引用复制的方式来赋值 / 传递。


// 原生函数
var a = new String()
console.log(typeof a) //object but not string
console.log(a instanceof String) // true

// 内部属性[[class]]
console.log(Object.prototype.toString.call([])) //一般这样获取比较数据类型准确
// 对象和非对象比较
// 如果type(x)是字符串或数字，type(y)是对象，则返回 x == ToPromitive(x) 的结果
// 如果type(x)是对象，type(y)是字符串或数字，则返回 ToPromitive(x) == y 的结果

//数字和字符串比较
//(1) 如果 Type(x) 是数字，Type(y) 是字符串，则返回 x == ToNumber(y) 的结果。
//(2) 如果 Type(x) 是字符串，Type(y) 是数字，则返回 ToNumber(x) == y 的结果。
//
//
//
//特殊示例
let i = 1
Number.prototype.valueOf = function () {
  return i++
}
let aa = new Number(1)
if(aa==1 && aa == 2){
  console.log('this happend')
}



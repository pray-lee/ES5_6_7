// 方法调用

//如果构造函数没有返回值，默认返回this,如果显式的return 一个简单类型，则会忽略，如果显式返回一个引用类型，则会使用引用类型作为返回值

// function A() {
//   //new的过程：
//   //第一步，创建一个新对象
//   // 第二步，把函数上下文指向创建的新对象
//   // 第三步，把__proto__指向函数对象的原型
//   // 第四步，返回这个对象
//   this.name = 'haha',
//     this.fn = function(instance) {
//       console.log(this === instance); // true
//     }
// }
// let a = new A()
// a.fn(a)


// 函数调用
// function a () {
//   console.log(this) // this 指向全局对象
// }
// a()

//call apply调用
// 如果传入的是null, undefined, this返回的是window
// 如果传入的是基本数据类型，this返回包装类型
// 如果传入的是引用类型，this返回传入的引用
function sum(a, b) {
  console.log(this)
  return a + b
}
var t = {}
sum.call(null, 1, 3) // this => window
sum.call(undefined, 1, 3) // this => window
sum.call(3, 1, 3) // this => Number
sum.call(t, 1, 3) // this => t

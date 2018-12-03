// 生成器generator
// let x = 1
// function *foo(){
//   x++
//   yield
//   console.log('x:', x)
// }
// let ge = foo() // create a generator
// ge.next() // go one step
// console.log(x); // 2
// ge.next() //print console.log('x': 2)
// console.log(ge.next())

// another e.g
function *foo (x) {
  var y = x*(yield 'hello')
  return y
}
var ge = foo(6) 
console.log(ge.next()) // 这一步执行到了 var y = x*(yield 'hello'),碰到yiled停止了,此时生成器value的值就是hello。等待下次next调用
console.log(ge.next(7)) //这一步把7传递给了yield做为yield的返回值,此时yield指代7
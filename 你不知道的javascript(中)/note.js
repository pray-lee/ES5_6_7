// 读书笔记

// 第一章
var a = null
console.log(Boolean(a))
// (!a && typeof a === 'object') // true 用复合类型判断当前要判断的对象是不是一个object,因为有可能是Null

// javascript中的变量是没有类型的，值才有。变量可以随时持有任何类型的值



// b is undeclared, b没有声明，但是用typeof检查会返回undefined,而不是报错
console.log(typeof b) // undefined

//查看全局变量判断当前要判断的变量是否存在，应该是用typeof,如果直接使用变量判断，会报错
//eg .
  //这样会抛出错误
  // if(DEBUG){
  // console.log('debugging is starting')
  // }
  // //这样是安全的
  // if(typeof DEBUG !== "undefined"){
  // console.log('debugging is starting')
  // }
  //
  // 还有一种不会抛出错误的方案,就是检查所有全局变量是否是全局对象的属性
  // if(global.DEBUG){
  //  cosnole.log('debugging is starting`')
  // }

  

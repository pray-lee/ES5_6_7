// 读书笔记

var a = null
console.log(Boolean(a))
// (!a && typeof a === 'object') // true 用复合类型判断当前要判断的对象是不是一个object,因为有可能是Null

// javascript中的变量是没有类型的，值才有。变量可以随时持有任何类型的值





// b is undeclared, b没有声明，但是用typeof检查会返回undefined,而不是报错
console.log(typeof b) // undefined

let arr = [48, 2, 33, 4, 55, 9, 8]
console.log(arr.sort()) //默认排序是按比较字符串大小进行排序的，这样排序有问题

//要按照数字的大小排序
console.log(arr.sort((a, b) => {
  return a > b
}));

// 函数式编程 ： 把一个函数作为参数传入另外一个函数中

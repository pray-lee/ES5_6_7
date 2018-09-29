// 案例
// test 1 借用math的最小值方法求数组的最小值
// let arr = [2, 3, 5, 5, 100, 5, 30]
// let min = Math.min.apply(null, arr)
// console.log(min); // 2

//test 2 把类数组转成真正的数组
// var t = {}
// t[0] = 1
// t[1] = 2
// t[2] = 3
// t.length = 3
// let arr = Array.prototype.slice.call(t)
// console.log(Object.prototype.toString.call(arr)) // [object Array]

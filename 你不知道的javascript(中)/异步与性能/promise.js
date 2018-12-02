// 为了解决顺序性和可信任性的问题，引入了promise

// var p3 = new Promise((resolve, reject) => {
//   resolve('B')
// })
// var p1 = new Promise( function(resolve,reject){
//   resolve( p3 );
// } );
// p2 = new Promise( function(resolve,reject){
//   resolve( "A" );
// } );
// p1.then( function(v){
//   console.log( v );
// } );
// p2.then( function(v){
//   console.log( v );
// } );
//输出b,a

//如果promise既没有resolve,也没有reject,处理方式就是把一个新的promise的状态设置为rejected,用race方法比对
// function timeoutPromise (delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       reject('timeout...')
//     }, delay)
//   })
// }

// Promise.race([foo(), timeoutPromise(3000)])
//   .then(res => {
//     console.log('success')
//   }, err => {
//     //这里有两种情况，一种是foo函数的reject,一种是timeoutPromise的超时
//   })

// ************************************************************************************
// let p4 = new Promise((resolve, reject) => {
//   resolve(1)
// })
// p4.then(res => {
//   console.log(res)
// })
// p4.then(res => {
//   console.log(res)
// })
// p4.then(res => {
//   console.log(res)
// })
// p4.then(res => {
//   console.log(res)
// })
// p4.then(res => {
//   console.log(res)
// })
// promise只会接受第一次决议，但是如果同一个回调函数（then）注册了不止一次，那他被调用的次数就和注册次数一样。


// ************************************************************************************
// let p5 = new Promise((resolve, reject) => {
//   resolve(1)
// })
// p5.then(res => {
//   foo.bar()
//   console.log(msg)
// }, err => {
//   console.log(err)
// })
// p.then调用本身返回了另外一个promise,正是因为promise将会因TypeError异常而被拒绝(因为foo没有定义)

// ************************************************************************************

// let p6 = new Promise((resolve, reject) => {
//   resolve(1)
// })
// let p7 = p6.then(res => {
//   console.log(res)
//   return Promise.resolve(22) //then return任意类型的值，都会被包一层promise.resolve(),例如调用下面的return 22就会变成 return Promise.resolve(22)
//   // return 22
// })
// console.log(Object.prototype.toString.call(p7), '...') // promise, 调用then方法之后也是返回Promise
// p7.then(res => {
//   console.log(res) //22
// })

// *******************************************************************************************
// try catch捕获错误只能用于同步代码，不能用于异步代码
// function foo() {
//   setTimeout( () => {
//     baz.bar()
//   }, 100 )
// }
// try{
//   foo()
//   //从这里抛出全局错误
// }
// catch(err){
//   //代码不会走到这里
//   console.log(`${err}hahahah`)
// }

//promise实现demo
 // let p = new Promise(function (resolve, reject) {
//    resolve();
//    reject()
//  })

function MyPromise (excutor) {
  this.state = 'pending'
  this.value = null
  this.err = null
  // define task arr
  this.resolveCallbacks = []
  this.rejectCallbacks = []
  // define resolve
  function resolve (value) {
    this.state = 'fullfilled'
    this.value = value
    this.resolveCallbacks.forEach(item => {
      item(this.value)
    })
  }
  // define reject
  function reject (err) {
    this.state = 'rejected'
    this.err = err
    this.rejectCallbacks.forEach(item => {
      item(this.err)
    })
  }
  // promise is working when created
  excutor(resolve, reject)
}
// then func
MyPromise.prototype.then = function (success, error) {
  if(this.state === 'pending') {
    // do nothing
    this.resolveCallbacks.push(success)
    this.rejectCallbacks.push(error)
  }
  if (this.state === 'fullfilled')  {
    success(this.value)
  }
  if (this.state === 'rejected')  {
    error(this.err)
  }
}
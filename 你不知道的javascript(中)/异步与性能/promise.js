// 为了解决顺序性和可信任性的问题，引入了promise

var p3 = new Promise((resolve, reject) => {
  resolve('B')
})
var p1 = new Promise( function(resolve,reject){
  resolve( p3 );
} );
p2 = new Promise( function(resolve,reject){
  resolve( "A" );
} );
p1.then( function(v){
  console.log( v );
} );
p2.then( function(v){
  console.log( v );
} );
//输出b,a

//如果promise既没有resolve,也没有reject,处理方式就是把一个新的promise的状态设置为rejected,用race方法比对
function timeoutPromise (delay) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject('timeout...')
    }, delay)
  })
}

Promise.race([foo(), timeoutPromise(3000)])
  .then(res => {
    console.log('success')
  }, err => {
    //这里有两种情况，一种是foo函数的reject,一种是timeoutPromise的超时
  })
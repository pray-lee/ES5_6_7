//了解事件循环的概念
//eventLoop是一个用作队列的数组
// 先进先出
var eventLoop = []
var event
//永远执行
while (true){
  if(eventLoop.length > 0){
    //拿到队列中下一个事件
    event = eventLoop.shift()
    //现在执行下一个事件
    try {
      event()
    }
    catch (err) {
      reportError(err)
    }
  }
}
//理解javascript事件队列运行机制
// 1. javascript引擎不是独立运行，他运行在宿主环境中。
// 2. 宿主环境提供了一种机制来处理程序中多个代码块的执行，并且在执行时调用javascript引擎。
// 3. 换句话说，javascript引擎本身没有时间概念，只是一个按需执行代码片段的一个环境而已，事件调度总是由包含他的宿主环境进行。
// 4. 也就是说是宿主环境调用javascript引擎执行代码

//settimeout的理解
// setTimeout并没有把回调函数放在事件循环的队列中，他所做的是设定一个定时器，当定时器到时后，宿主环境才会把回调函数放在事件循环队列，如果此时队列中有其他的事件，则setTimeout的回调函数就得排在其他事件的后边，这也解释了为什么setTimeout定时器精度可能不高。

// setTimeout(hack)： 使用setTimeour进行异步调度，基本上他的意思就是把这个函数插入到当前事件循环队列的结尾处。


function sayInfo(age) {
    console.log("name:" + this.name)
    console.log("age:" + age)
    console.log(this); // （以前）这里的 this 是 Object [global]
    // （现在）{ name: 'zzx', fn: { [Function: sayInfo] call2: [Function] } } 
}
var user = {
    name: "zzx"
}


// sayInfo.call2 = function (user, age) {
//     name = user.name;  // 用于赋予全局 name 的值
//     sayInfo(age);
// }

sayInfo.call2 = function(context) { // 定义所有函数 call2 方法
    // console.log(arguments); // [Arguments] { '0': { name: 'zzx' }, '1': 100 }
    // Arguments 是一个类数组对象，并没有数组的方法
    var args = Array.prototype.slice.call(arguments, 1); // 使 Arguments 变成数组，因此拥有了数组的 silce 方法
    // 在这里定义一个全局方法 ??? 为什么 var 定义的就不行
    context.fn = this; // this 与 sayInfo 等价，指的是 sayInfo。这样来调用 sayInfo()
    context.fn(args); // 传递进 age 的值
    // console.log(context); // { name: 'zzx', fn: { [Function: sayInfo] call2: [Function] } }
    delete context.fn; // 前面定义的是一个全局方法要删除
}

sayInfo.call2(user, 100);
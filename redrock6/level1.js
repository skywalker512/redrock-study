function sayInfo(age) {
    console.log("name:" + this.name)
    console.log("age:" + age)
    // console.log(this); 这里的 this 是 Object [global]
}
var user = {
    name: "zzx"
}


sayInfo.call2 = function (user, age) {
    name = user.name;  // 用于赋予全局 name 的值
    sayInfo(age);
}

sayInfo.call2(user, 100);
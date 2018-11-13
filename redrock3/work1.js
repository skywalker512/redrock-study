function dig(obj, target) {
    var levelNum = target.replace(/[^0-9]/ig, ""); // 去掉非数字
    // var levelNum = target.slice(-2, -1); 不能截取大于9的数
    // var levelNum = target.slice(5); 从第6个数开始截取
    
    // 使用 obj[] 来取数组
    // let 设置块变量
    for (let index = 1; index <= levelNum; index++) {
        obj = obj['level'+index];
    }
    console.log(obj);
}

var data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
}
dig(data, 'level1') // { level2: {level3: 'some data'} }
dig(data, 'level2') // { level3: 'some data' }
dig(data, 'level3') // 'some data'
dig(data, 'level4') // undefined
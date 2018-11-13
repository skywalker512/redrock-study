var obj1 = {
    a: [{ x: 2 }, { y: 4 }],
    b: 1,
    c: 'bar'
}

var obj2 = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo',
    d: 6
}

merge(obj1, obj2);

function merge(obj1, obj2) {

    // 两个数组取并集
    // concat 合并两个数组
    // filter 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素

    // v 的值应为 a, b, c， d;
    // 第一次：v = a 
    // !(obj1Keys.indexOf(v) > -1) //false 不满足，不会添加到新数组中
    // 第二次：v = b
    // !(obj1Keys.indexOf(v) > -1) //false 不满足，不会添加到新数组中
    // 第三次：v = c
    // !(obj1Keys.indexOf(v) > -1) //false 不满足，不会添加到新数组中
    // 第四次：v = d
    // !(obj1Keys.indexOf(v) > -1) //ture 满足，d 会添加到新数组中
    // 最终 新数组为 ["d"]
    var commonKeys = Object.keys(obj1).concat( // 原数组
        Object.keys(obj2).filter( // 加入数组
            function(v){ 
                return !(Object.keys(obj1).indexOf(v) > -1) // 原数组中没有的返回 真
            }
        )
    );

    // 用数组来创建对象的Keys
    var tempObject = new Object();
    // in 取key; of取 值
    for (let value of commonKeys) {
        if ( !isArray(obj1[value]) && obj1[value] != undefined) {
            var arr = [];
            arr.push(obj1[value]);
            obj1[value] = arr;
        }
        if ( !isArray(obj2[value]) && obj2[value] != undefined) {
            var arr = [];
            arr.push(obj2[value]);
            obj2[value] = arr;
        }
        var tempArry = [];
        var temp1Arry = [];
        var temp2Arry = [];
        if (obj1[value] != undefined) {
            temp1Arry = tempArry.concat(obj1[value]);
        }
        if (obj2[value] != undefined) {
            temp2Arry = tempArry.concat(obj2[value]);
        }
        tempObject[value] = tempArry.concat(temp1Arry, temp2Arry);
        // console.log(value);
    }
    console.log(tempObject);


    // 判断对象里的类型是否是数组
    // https://wangdoc.com/javascript/stdlib/object.html#tostring-%E7%9A%84%E5%BA%94%E7%94%A8%EF%BC%9A%E5%88%A4%E6%96%AD%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
    function typeString(object) {
        return Object.prototype.toString.call(object).slice(8,-1).toLowerCase();
    }

    function isArray(object) {
        return typeString(object) === 'array';
    }
}
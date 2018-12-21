// https://github.com/mqyqingfeng/Blog/issues/42
// https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch4.html
// https://www.zhangxinxu.com/wordpress/2013/02/js-currying/

var x = addSum(1, 2); 
console.log(x(3).toString());

//x 3
//x(3) 6
//x(8) 14

function addSum() {
    var args1 = Array.prototype.slice.call(arguments, 0); // 转为数组
    // console.log(args1); [ 1, 2 ]
    
    var argsArr = [].concat(args1); // 连接一个新数组
    // console.log(argsArr); [ 1, 2 ]
    var _addSum = function () {
        var args2 = Array.prototype.slice.call(arguments, 0); // 将 x(3) 中的 3 转为数组
        // console.log(args2); [ 3 ]

        argsArr = argsArr.concat(args2) // 将新输入的加到 argsArr
        return _addSum // 再次返回函数 以下次使用
    }
    _addSum.toString = function () {
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        // return argsArr.reduce((a, b) => a + b);
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

        return argsArr.reduce(function(a, b){
            return a + b;
        });
        // 并不是函数的问题，toString 需要 return

    }
    return _addSum // 实例化了以后再返回一个函数，柯西化？
}
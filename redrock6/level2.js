// https://github.com/mqyqingfeng/Blog/issues/42
// https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch4.html
// https://www.zhangxinxu.com/wordpress/2013/02/js-currying/

var add = function (x,z) {
    a = x + z;
    return function (y) {
        return a = a + y;
    };
};

var x = add(1,2);

console.log(x(3));
console.log(x(8));
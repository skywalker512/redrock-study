# JavaScript 基础入门

**变量声明：```var```**

**输出消息：```console.log```**

```javascript
var words = 'Hello World !'

console.log(words)
```

**注释：**

```javascript
// 单行注释

/* 另外一种单行注释 */

/**
 * 多行注释
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent users who are extending `Action.
 */


// 函数的注释
/**
* 上面边内容控制
* @param photoSrc {String} 图片地址
* @param textContent {String} 图片描述
* @return void
*/
```

## 基本语句

### 判断和循环

```javascript
if (condition1) {
} else if (condition2) {
} else {
}

for (var i = 0; i < 10; i++) {
}

while (condition) {
}

switch(n) {
    case 1:
        // do job1
        break
    case 2:
        // do job2
        break
    default:
        // do other job
}
```



### 运算符

```javascript
// 算术运算符
+ - * / % ++ --

// 赋值运算符
= += -= *= /= %=

// 比较运算符
== === != !== > < >= <=

// 逻辑运算符
|| && !

// 条件运算符
? : 
// 如果 “？”前 是真者执行 “：”前 ，反之执行“：”后
```

##### **==** 与 **===** 的区别

```javascript
/* ==  抽象相等，比较时，会先进行类型转换，然后再比较值。*/

'123' == 123

/* === 严格相等，会比较两个值的类型和值。*/

'123' === 123
```

### **||** 与 **&&** 的用法

```javascript
/* || 左边为 false 时，执行右边代码。 */
var str = ''

str.length || console.log('str empty')

/* && 左边为 true 时，执行右边代码。 */
var str = 'abc'

str.length && console.log(str)
```



### **? :** 的用法

```javascript
true ? false ? console.log(1) : true ? console.log(2) : console.log(3) : console.log(4)

// 第一次判断后：选择 false ? console.log(1)

false ? console.log(1) : true ? console.log(2) : console.log(3) : console.log(4)

// 第二次判断：选择 true ? console.log(2) : console.log(3) : console.log(4)

true ? console.log(2) : console.log(3) : console.log(4)

// 第三次判断：console.log(2)

console.log(2) // 2
```

## **基本类型**

（基本数值、基本数据类型）是指非对象并且无方法的数据。

在 JavaScript 中，共有 6 种基本数据类型：

- **string**
- **number**
- **boolean**
- **null**
- **undefined**
- **symbol** ( ES6 新增 )

### string

```javascript
var str1 = 'abc'
var str2 = "def"

console.log(str2.length)

// 模板字符串
// “`”既是markdown的格式化代码用的符号
var str3 = `${str1}123${str2}`

console.log(str3)
```



#### 字符串操作

##### **concat()** 

```
arrayObject.concat(arrayX,arrayX,......,arrayX)
```

| 参数   | 描述                                                         |
| ------ | ------------------------------------------------------------ |
| arrayX | 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。 |

方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。

```javascript
var hello = "Hello, "

console.log(hello.concat("Kevin", " have a nice day."))

/* Hello, Kevin have a nice day. */
```



##### indexOf()

```
stringObject.indexOf(searchvalue[,fromindex])
```

| 参数        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| searchvalue | 必需。规定需检索的字符串值。                                 |
| fromindex   | 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。 |

方法返回调用对象中第一次出现的指定值的索引，开始在 fromIndex 进行搜索。

```javascript
// 第一字母为 0

"Blue Whale".indexOf("") // ?? returns 0
"Blue Whale".indexOf(" ") // returns  4
"Blue Whale".indexOf("h", 5) // returns  6
"Blue Whale".indexOf("h", 7) // returns  -1
"Blue Whale".indexOf("Whale") // returns  5 会跟踪第一个字母所在地址
"Blue Whale".indexOf("blue") // returns -1 如果没有则返回-1
```



##### includes() 

方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。

```
'Blue Whale'.includes('blue') // returns false
'Blue Whale'.includes(' ') // returns true
'Blue Whale'.includes('W') // returns true
```



##### replace()

```
stringObject.replace(regexp/substr,replacement)
```

| 参数          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| regexp/substr | 必需。规定子字符串或要替换的模式的 RegExp 对象。请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。 |
| replacement   | 必需。一个字符串值。规定了替换文本或生成替换文本的函数。     |

方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。

**[正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)**

**执行 replace 并不会操作其自己**

| `g`  | 全局搜索。                                                   |
| ---- | ------------------------------------------------------------ |
| i    | 不区分大小写搜索。                                           |
| m    | 多行搜索。                                                   |
| y    | 执行“粘性”搜索,匹配从目标字符串的当前位置开始，可以使用y标志。 |

```javascript
var re = /apples/gi
var str = "Apples are round, and apples are juicy."
var newstr = str.replace(re, "oranges")

console.log(newstr)
// oranges are round, and oranges are juicy.



// "/somethings/" 检查大小写且只匹配一个
var str="Visit microsoft!"
console.log(str.replace(/Microsoft/, "W3School")) // Visit microsoft!

// "/somethings/g" 检查大小写且只匹配多个
var str="Welcome to Microsoft! "
str=str + "We are proud to announce that Microsoft has "
str=str + "one of the largest Web Developers sites in the world."
console.log(str.replace(/Microsoft/g, "W3School")) // Welcome to W3School! We are proud to announce that W3School has one of the largest Web Developers sites in the world.

// "/somethings/i" 不检查大小写且只匹配一个
// "/somethings/ig" 不检查大小写且只匹配多个

name = "Doe, John";
// “/sometings/” 
// "()" 捕获括号, 用于后面的 $1 $2
// “w” 等价于[A-Za-z0-9_] 
// “+” 贪婪的匹配1次或多次
// "\s" 匹配一个空白字符，包括空格、制表符、换页符和换行符。
// "*" 贪婪的匹配0个或者一个
name.replace(/(\w+)\s*, \s*(\w+)/, "$2 $1");

// "^反向不匹配"
name = '"a", "b"';
name.replace(/"([^"]*)"/g, "'$1'");
```



##### slice()

```
stringObject.slice(start,end)
```

| 参数  | 描述                                                         |
| ----- | ------------------------------------------------------------ |
| start | 要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。 |
| end   | 紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。 |

方法提取一个字符串的一部分，并返回一新的字符串。

```javascript
var str1 = 'The morning is upon us.'
var str2 = str1.slice(4, -2)

console.log(str2) // OUTPUT: morning is upon u
```



##### split()

[JS字符串截取函数slice(),substring(),substr()的区别](https://juejin.im/post/59e2af3151882578cf573319)

```javascript
stringObject.split(separator[,howmany])
```

| 参数      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| separator | 必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。 |
| howmany   | 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。 |

方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。

```
"Webkit Moz O ms Khtml".split( " " )  // ["Webkit", "Moz", "O", "ms", "Khtml"]
```



##### trim()

 方法会从一个字符串的两端删除空白字符。

```
var orig = '   foo  '

console.log(orig.trim()) // 'foo'
```



##### substring()

[JS字符串截取函数slice(),substring(),substr()的区别](https://juejin.im/post/59e2af3151882578cf573319)

方法返回一个字符串在开始索引到结束索引 ( 不包括 ) 之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

```
var anyString = "Mozilla"

console.log(anyString.substring(0,3)) // Moz
```



### number

JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。

这就是说，JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。

由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。

```javascript
1 === 1.0 // true

0.1 + 0.2 === 0.3 // false

console.log(0.1 + 0.2) // 3.0000000000004
```



### boolean 

即布尔值，它有两种取值 true 或者 false 。

### undefined 

没有被定义、没有被赋值。

### null

表示空值。

如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。

```javascript
// 都会转换成 false
if ('' || "" || undefined || null || false || 0) {
    console.log('block 1')
} else {
    console.log('block 2')
}
```

**[null, undefined 和布尔值](https://wangdoc.com/javascript/types/null-undefined-boolean.html)**

## 引用类型

( 对象类型 )

- **Object** ( 对象 )
- **Array** ( 数组 )
- **Function** ( 函数 )

### Object

对象（object）是 JavaScript 语言的核心概念，也是最重要的数据类型。

可以说所有的引用类型都的对象，详见[]()

什么是对象？简单说，对象就是一组键名与键值（key-value）的集合，是一种无序的复合数据集合。

**key 到底打不打引号？**

[键名](https://wangdoc.com/javascript/types/object.html#%E9%94%AE%E5%90%8D)

对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名），所以加不加引号都可以。上面的代码也可以写成下面这样

```javascript
// 定义对象
var obj = {
    foo: 'Hello',
    bar: 'World'
}
// 引用对象：两种方式
obj.foo
obj['bar']

// 不会被覆盖？？
var bar = 'foo'
obj[bar] // Hello

// 追加对象类容
obj.baz = 'RetroAstro'
obj.baz

// 删除对象类容
delete obj.foo
obj.foo

'bar' in obj // true

// for 来取出
for (var key in obj) {
    console.log(key, obj[key])
}
```

### Array

数组对象是一个有序的数据（ 数据可以是原始类型或对象类型 ）集合。相对于变量，数组可用于在一个变量中存储多个变量值。

```javascript
var arr = ['a', 6, true]
// 可以存放各种类型
arr[0] // a
arr[1] // 6
arr[2] // true

console.log(arr.length) // 3

var entries = ['a', 'b', 'c']

for(var i = 0; i < entries.length; i++) {
  console.log(entries[i])
}
// a b c

for (var key in entries) {
    console.log(key, entries[key])
}
// 0 a
// 1 b
// 2 c

for (var value of entries) {
    console.log(value)
}
// a b c

var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}

obj[0] // 'a'
obj[1] // 'b'
obj[2] // 'c'
obj.length // 3
```



**数组操作**

**some()** 方法测试数组中的某些元素是否通过由提供的函数实现的测试。



```

```









```
function isBiggerThan10(element, index, array) {
  return element > 10
}

[2, 5, 8, 1, 4].some(isBiggerThan10)  // false
[12, 5, 8, 1, 4].some(isBiggerThan10) // true
```



**every()** 方法测试数组的所有元素是否都通过了指定函数的测试。



```

```









```
function isBigEnough(element, index, array) {
  return (element >= 10)
}

var passed = [12, 5, 8, 130, 44].every(isBigEnough)
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough)
// passed is true
```



**filter()** 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。



```

```









```
function isBigEnough(element) {
  return element >= 10
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// filtered is [12, 130, 44]
```



**find()** 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined` 。



```

```









```
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
]

function findCherries(fruit) { 
    return fruit.name === 'cherries'
}

console.log(inventory.find(findCherries)) // { name: 'cherries', quantity: 5 }
```



**map()** 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。



```

```









```
var numbers = [1, 4, 9]
var roots = numbers.map(Math.sqrt)
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]
```



**forEach()** 方法对数组的每个元素执行一次提供的函数。



```

```









```
const items = ['item1', 'item2', 'item3']
const copy = []

items.forEach(function(item){
  copy.push(item)
})
```



**join()** 方法将一个数组 ( 或一个类数组对象 ) 的所有元素连接成一个字符串并返回这个字符串。



```

```









```
var a = ['Wind', 'Rain', 'Fire']
var myVar1 = a.join()      // myVar1的值变为"Wind,Rain,Fire"
var myVar2 = a.join(', ')  // myVar2的值变为"Wind, Rain, Fire"
var myVar3 = a.join(' + ') // myVar3的值变为"Wind + Rain + Fire"
var myVar4 = a.join('')    // myVar4的值变为"WindRainFire"
```



**push()** 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。



```

```









```
var sports = ["soccer", "baseball"]
var total = sports.push("football", "swimming")

console.log(sports)
// ["soccer", "baseball", "football", "swimming"]
```



**pop()** 方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。



```

```









```
let myFish = ["angel", "clown", "mandarin", "surgeon"]

let popped = myFish.pop()

console.log(myFish)
// ["angel", "clown", "mandarin"]
```



**shift()** 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。



```

```









```
let myFish = ['angel', 'clown', 'mandarin', 'surgeon']

myFish.shift()

console.log(myFish) // ['clown', 'mandarin', 'surgeon']
```



**unshift()** 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。



```

```









```
var arr = [1, 2]

arr.unshift(0)

// arr is [0, 1, 2]
```



**reduce()** 方法对累计器和数组中的每个元素（从左到右）应用一个函数，将其简化为单个值。

`reduce` 为数组中的每一个元素依次执行 `callback` 函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：

- accumulator 累计器
- currentValue 当前值
- currentIndex 当前索引值
- array 数组

回调函数第一次执行时，`accumulator` 和 `currentValue` 的取值有两种情况：如果调用 `reduce()` 时提供了 `initialValue` ，`accumulator` 取值为 `initialValue` ，`currentValue` 取数组中的第一个值；如果没有提供 `initialValue`，那么 `accumulator` 取数组中的第一个值，`currentValue` 取数组中的第二个值。



```

```









```
var initialValue = 0

[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
  return accumulator + currentValue
}, initialValue)
```



**reverse()** 方法将数组中元素的位置颠倒。



```

```









```
var myArray = ['one', 'two', 'three']
myArray.reverse()

console.log(myArray) // ['three', 'two', 'one']
```



**Function**

函数是一个可以被其他代码或其自身调用的代码片段，或者是一个指该函数的变量。



```

```









```
// 函数声明
function foo() {
    
}

// 函数表达式
var foo = function() {
    
}

// 函数返回值
function bar(x, y) {
    var a = x + y
    return a
}

bar(6, 8)

// 函数递归
function baz(n) {
    return n > 10 ? n : baz(n + 1)
}

baz(0)
```



**基本类型与引用类型的区别**

基本类型的检测：`typeof`



```

```









```
typeof 'abc'      // string
typeof 123        // number
typeof true       // boolean
typeof undefined  // undefined

typeof null 
typeof {}   
typeof []  
```



引用类型的检测：`instanceof`



```

```









```
var obj = {}
var arr = []
var func = function foo() {}

obj instanceof Object
arr instanceof Array
func instanceof Function

arr instanceof Object
func instanceof Object
```



栈内存与堆内存：

栈中存储的是基础变量以及一些对象的引用变量，基础变量的值是存储在栈中，而引用变量存储在栈中的是指向堆中的数组或者对象的地址。

对象被保存在堆内存中，我们平时操作对象其实是操作的对象的引用或者说是指向对象的指针。

![img](https://user-gold-cdn.xitu.io/2017/2/9/cff638f965972dfdf53273e7976dcdd9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



```

```









```
var a = 123
var b = a
a = 456
console.log(b)

var obj1 = { age: 18 }
var obj2 = obj1
obj2.age = 22
console.log(obj1.age)
```



**作用域**

LHS 查询 与 RHS 查询：

- LHS 查询指的是找到变量容器本身，并对其进行 **赋值** 。
- RHS 查询指的是获取变量得源值，可以理解为 **取值** 。



```

```









```
var a

// LHS 查询
a = 2

// RHS 查询
console.log(a)
```



什么是作用域 ？

广义的作用域是一套 **规则** ，这套规则用来管理 JS 引擎如何在当前作用域及其上层的父作用域中根据标识符名称进行 **变量查找** 。

狭义的作用域包括：

- 全局作用域
- 函数作用域
- 块级作用域 ( let、with、try / catch )



```

```









```
// 全局作用域
var a = 'Barry'

function foo() {
    // 函数作用域
    var a = 'Allen'
    console.log(a)
}

foo()
```



词法作用域与动态作用域：

作用域共有两种工作模型，词法作用域与动态作用域，而在 JavaScript 中采用的是词法作用域模型。

词法作用域是由 **写代码时将变量和块作用域写在哪里** 来决定的。



```

```









```
var a = 'Barry'

function bar() {
    console.log(a)
}

function foo() {
    var a = 'Allen'
    bar()
}

foo()
```



**变量提升与函数提升**

简单的来讲，在执行 JavaScript 代码的时候会经过两个阶段，第一个阶段为编译阶段，这个时候包括变量和函数在内的所有 **声明** 会被首先处理，第二个阶段即为执行阶段，像 **赋值、运算、函数执行** 这些操作就是在这个阶段进行的。因此，我们才有了变量提升和函数提升这一概念。



```

```









```
// 变量提升
console.log(a)
var a = 2

var a
console.log(a)
a = 2

// 函数提升
foo(2, 8)

function foo(x, y) {
    return x + y
}

// 函数内部的变量提升
var a = 2

function foo() {
    console.log(a)
    var a = 4
}

foo()
```



**函数调用栈 ( Call Stack )**

函数调用栈是一种数据结构，它记录了我们在程序中的位置。如果我们运行到一个函数，它就会将其放置到栈顶。当从这个函数返回的时候，就会将这个函数从栈顶弹出，这就是调用栈做的事情。



```

```









```
function multiply(x, y) {
    return x * y
}

function printSquare(x) {
    var s = multiply(x, x)
    console.log(s)
}

printSquare(5)
```



![img](https://user-gold-cdn.xitu.io/2017/11/11/bc37a6231fca3b0aa3cd36369e866837?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



```

```









```
function foo() {
    throw new Error('SessionStack will help you resolve crashes :)')
}

function bar() {
    foo()
}

function start() {
    bar()
}

start()
```



堆栈溢出：( 慎用递归函数，使用时需设置阀值条件以便退出递归 )



```

```









```
function recusive(n) {
    return recusive(n * 2)
}

recusive(2) // Maximum call stack size exceeded
```



**函数参数**

arguments 对象：



```

```









```
function foo(a, b, c) {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(arguments.length)
    
    // 类数组对象
    console.log(typeof arguments)
    
    var args = []
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    return args
}

foo(1, 2, 3)
```



参数传递：

函数内部参数的传递包含 **值传递** 和 **引用传递** 。

值传递是完全独立的拷贝，互不干涉。

对象是通过引用传递，变量赋值只会将地址传递过去。

如果我们将一个已经赋值的变量重新赋值，那么它将包含新的数据或则引用地址。



```

```









```
var a = 2

function change(person, a) {
    a = 4
    
    person.age = 18
    
    person = {
        name: 'John',
        age: 25
    }
    
    return person
}

var person1 = {
    name: 'Alex',
    age: 30
}

var person2 = change(person1, a)

console.log(a)
console.log(person1)
console.log(person2)
```



**闭包**

什么是闭包？

当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。



```

```









```
// 全局作用域
function foo() {
    // 函数作用域
    var a = 123
    function bar() {
        console.log(a)
    }
    return bar
}

var fn = foo()
fn() // 123
```



**模块化机制**



```

```









```
function createMyHero() {
    var name = 'Flash'
    var intro = 'I am the fastest man alive'
    var skill = ['Speed Force', 'time travel', 'Lightning Strike']
    
    function selfIntro() {
        console.log(
        `The ${name} says that ${intro}.`
        )
    }
    
    function skillAttack() {
        console.log(
        `The ${name} use the ${skill[0]} and ${skill[1]} to the flash point and ended the Reverse Flash with ${skill[2]}.`
        )
    }
    
    return {
        name: name,
        selfIntro: selfIntro,
        skillAttack: skillAttack
    }
}

var hero = createMyHero()

hero.selfIntro()
hero.skillAttack()
```



> ### 作业

请先仔细复习课件尤其是字符串操作、数组操作的方法，然后自己实现 **dig 、merge、stringPermutations** 三个功能不同的函数，将你写的函数和给出的测试代码一起放在浏览器控制台中应该输出正确的结果，具体介绍如下：

**dig** 函数，给定任意一个对象作为函数的第一个参数，函数的第二个参数为该对象中的某个键名，通过这个键名可以直接输出对应的键值，不管对象里面的层级有多深。



```

```









```
function dig(obj, target) {
    // ...
}

var data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
}

dig(data, 'level2') // { level3: 'some data' }
dig(data, 'level3') // 'some data'
dig(data, 'level4') // undefined
```



**merge** 函数，合并任意两个对象为一个新对象，若两个对象有相同键名，则将其键值合并，放在一个数组中作为新对象相应键名下的键值。若两个对象中有其中一个对象没有的属性，该属性也应该出现在合并后的新对象中。



```

```









```
function merge(obj1, obj2) {
    // ...
}

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

merge(obj1, obj2)

// { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: ['bar', 'foo'], d: 6 }
```



**stringPermutations** 函数，任意给出一个全英文字母的字符串，以每个英文字母为单位将这个字符串进行排列组合，并将所有的可能放在一个数组中打印输出。



```

```





```
function stringPermutations(str) {
    // ...
}
```





```

stringPermutations('abc') // ['abc','acb','bac','bca','cab','cba']
```



> **本次作业的等级：** ( 请至少完成 Level 1 的任务后再交作业 )
>
> **Level 1：** 实现上面三个函数中的任意一个函数
>
> **Level 2：** 实现上面三个函数中的任意两个函数
>
> **Level 3：** 实现上面三个函数中的任意三个函数

 
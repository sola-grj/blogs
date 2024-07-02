---
title: ECMA相关
icon: gears
order: 4
category:
  - web
tag:
  - js

navbar: true
sidebar: true

breadcrumb: true
pageInfo: false
contributors: true
editLink: true
lastUpdated: true
prev: true
next: true
comment: true
footer: true

backtotop: false
---
# ES6-ES11



## **ECMASript** **相关介绍**

### **1.1.** **什么是** **ECMA**

ECMA（European Computer Manufacturers Association）中文名称为欧洲计算机制

造商协会，这个组织的目标是评估、开发和认可电信和计算机标准。1994 年后该

组织改名为 Ecma 国际。

### **1.2.** **什么是** **ECMAScript**

ECMAScript 是由 Ecma 国际通过 ECMA-262 标准化的脚本程序设计语言。

### **1.3.** **什么是** **ECMA-262**

Ecma 国际制定了许多标准，而 ECMA-262 只是其中的一个，所有标准列表查看

http://www.ecma-international.org/publications/standards/Standard.htm

### **1.4.ECMA-262** **历史**

ECMA-262（ECMAScript）历史版本查看网址

http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm

第 1 版 

1997 年 制定了语言的基本语法

第 2 版 

1998 年 较小改动

第 3 版 

1999 年 引入正则、异常处理、格式化输出等。IE 开始支持

第 4 版 

2007 年 过于激进，未发布

第 5 版 

2009 年 引入严格模式、JSON，扩展对象、数组、原型、字符串、日期方法

第 6 版 

2015 年 模块化、面向对象语法、Promise、箭头函数、let、const、数组解构赋值等等

第 7 版 

2016 年 幂运算符、数组扩展、Async/await 关键字

第 8 版 

2017 年 Async/await、字符串扩展

第 9 版 

2018 年 对象解构赋值、正则扩展

第 10 版 

2019 年 扩展对象、数组方法 ES.next 动态指向下一个版本

**注：从** **ES6** **开始，每年发布一个版本，版本号比年份最后一位大** **1**

## ES6

### 1.let关键字

let 关键字用来声明变量，使用 let 声明的变量有几个特点：

1) 不允许重复声明

2) 块儿级作用域

3) 不存在变量提升

4) 不影响作用域链

### 2.const关键字

const 关键字用来声明常量，const 声明有以下特点

1) 声明必须赋初始值

2) 标识符一般为大写

3) 不允许重复声明

4) 值不允许修改

5) 块儿级作用域

### 3.变量的解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。

```js
//数组的解构赋值
const arr = ['张学友', '刘德华', '黎明', '郭富城'];
let [zhang, liu, li, guo] = arr;
//对象的解构赋值
const lin = {
 name: '林志颖',
 tags: ['车手', '歌手', '小旋风', '演员']
};
let {name, tags} = lin;
//复杂解构
let wangfei = {
 name: '王菲',
 age: 18,
 songs: ['红豆', '流年', '暧昧', '传奇'],
 history: [
 {name: '窦唯'},
 {name: '李亚鹏'},
 {name: '谢霆锋'}
 ]
};
let {songs: [one, two, three], history: [first, second, third]} = 
wangfei;
```

### 4.模板字符串

模板字符串（template string）是增强版的字符串，用反引号（`）标识，特点：

1) 字符串中可以出现换行符

2) 可以使用 ${xxx} 形式输出变量

```js
// 定义字符串
let str = `<ul>
<li>沈腾</li>
 <li>玛丽</li>
 <li>魏翔</li>
 <li>艾伦</li>
 </ul>`;
// 变量拼接
let star = '王宁';
let result = `${star}在前几年离开了开心麻花`;
```

### 5.简化对象写法

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

```js
let name = 'sola';
let slogon = '永远18';
let improve = function () {
 console.log('可以提高你的技能');
}
//属性和方法简写
let atguigu = {
 name,
 slogon,
 improve,
 change() {
 console.log('可以改变你')
 }
};
```

### 6.箭头函数

ES6 允许使用「箭头」（=>）定义函数。

箭头函数的注意点:

1) 如果形参只有一个，则小括号可以省略

2) 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果

3) 箭头函数 this 指向声明时所在作用域下 this 的值

4) 箭头函数不能作为构造函数实例化

5) 不能使用 arguments

```js
/**
* 1. 通用写法
*/
let fn = (arg1, arg2, arg3) => {
 return arg1 + arg2 + arg3;
}
/**
* 2. 省略小括号的情况
*/
let fn2 = num => {
 return num * 10;
};
/**
* 3. 省略花括号的情况
*/
let fn3 = score => score * 20;
/**
* 4. this 指向声明时所在作用域中 this 的值
*/
let fn4 = () => {
 console.log(this);
}
let school = {
 name: '尚硅谷',
 getName(){
 let fn5 = () => {
 console.log(this);
 }
 fn5();
 }
};
```

### 7.函数参数的默认值

```js
//ES6 允许给函数参数赋值初始值
//1. 形参初始值 具有默认值的参数, 一般位置要靠后(潜规则)
function add(a, b, c = 10) {
  return a + b + c;
}

let result = add(1, 2);
console.log(result); // 13
//2. 与解构赋值结合
// 注意这里参数是一个对象
function connect({host = "127.0.0.1", username, password, port}) {
  console.log(host)
  console.log(username)
  console.log(password)
  console.log(port)
}

connect({
  host: 'atguigu.com',
  username: 'root',
  password: 'root',
  port: 3306
})
```

### 8.rest参数

ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments

```js
/**
* 作用与 arguments 类似
*/
function add(...args){
 console.log(args);
}
add(1,2,3,4,5);
/**
* rest 参数必须是最后一个形参
*/
function minus(a,b,...args){
 console.log(a,b,args);
}
minus(100,1,2,3,4,5,19);
```

**注意：****rest** **参数非常适合不定个数参数函数的场景**

### 9.spread扩展运算符

扩展运算符（spread）也是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包。

```js
/**
* 展开数组
*/ 
let tfboys = ['德玛西亚之力','德玛西亚之翼','德玛西亚皇子'];
function fn(){
 console.log(arguments);
}
fn(...tfboys)
/**
* 展开对象
*/
let skillOne = {
 q: '致命打击',
};
let skillTwo = {
 w: '勇气'
};
let skillThree = {
 e: '审判'
};
let skillFour = {
 r: '德玛西亚正义'
};
let gailun = {...skillOne, ...skillTwo,...skillThree,...skillFour};
```

### 10.Symbol

#### 10.1基本使用

ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是

JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型。

Symbol 特点

1) Symbol 的值是唯一的，用来解决命名冲突的问题

2) Symbol 值不能与其他数据进行运算

3) Symbol 定义 的 对象属 性 不能 使 用 for…in 循 环遍 历 ，但 是可 以 使 用

Reflect.ownKeys 来获取对象的所有键名

```js
//创建 Symbol
let s1 = Symbol();
console.log(s1, typeof s1);
//添加标识的 Symbol
let s2 = Symbol('尚硅谷');
let s2_2 = Symbol('尚硅谷');
console.log(s2 === s2_2);
//使用 Symbol for 定义
let s3 = Symbol.for('尚硅谷');
let s3_2 = Symbol.for('尚硅谷');
console.log(s3 === s3_2);
```

#### 10.2使用Symbol的几种方式

方式一

```js
// 向对象中添加方法 up down
let game = {
  name: '俄罗斯方块',
  up: function () {
  },
  down: function () {
  }
};
// 我们要往game对象里面添加方法，但是怕game对象已经存在
// 同名方法，所以我们这时使用到了Symbol
// 方式一
// 声明一个对象
let methods = {
  up: Symbol(),
  down: Symbol()
};
game[methods.up] = function () {
  console.log("我可以快速上升");
}
game[methods.down] = function () {
  console.log("我可以快速下降!!");
}
game[methods.up]();
game[methods.down]();
```

方式二

```js
let youxi = {
  name: "狼人杀",
  [Symbol.for('say')]: function () {
    console.log("我可以发言")
  },
  [Symbol.for('zibao')]: function () {
    console.log('我可以自爆');
  }
}
youxi[Symbol.for('say')]();
youxi[Symbol.for('zibao')]();
```

方式三

```js
let youxi2 = {
  name:"狼人杀",
  [Symbol('say')]:function () {
    console.log("我可以发言")
  },
  [Symbol('zibao')]:function () {
    console.log("我可以自爆")
  }
}
youxi2[Reflect.ownKeys(youxi2)[1]]();
youxi2[Reflect.ownKeys(youxi2)[2]]();
```

#### 10.3Symbol内置值

除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。可以称这些方法为魔术方法，因为它们会在特定的场景下自动执行。

| 内置值                    | 描述                                                         |
| ------------------------- | ------------------------------------------------------------ |
| Symbol.hasInstance        | 当其他对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法 |
| Symbol.isConcatSpreadable | 对象的 Symbol.isConcatSpreadable 属性等于的是一个布尔值，表示该对象用于 Array.prototype.concat()时，是否可以展开 |
| Symbol.species            | 创建衍生对象时，会使用该属性                                 |
| Symbol.match              | 当执行 str.match(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值。 |
| Symbol.replace            | 当该对象被 str.replace(myObject)方法调用时，会返回该方法的返回值。 |
| Symbol.search             | 当该对象被 str.search (myObject)方法调用时，会返回该方法的返回值。 |
| Symbol.split              | 当该对象被 str.split(myObject)方法调用时，会返回该方法的返回值 |
| Symbol.iterator           | 对象进行 for...of 循环时，会调用 Symbol.iterator 方法，返回该对象的默认遍历器 |
| Symbol.toPrimitive        | 该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。 |
| Symbol. toStringTag       | 在该对象上面调用 toString 方法时，返回该方法的返回值         |
| Symbol. unscopables       | 该对象指定了使用 with 关键字时，哪些属性会被 with环境排除    |

### 11.迭代器

遍历器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作。

1) ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费

2) 原生具备 iterator 接口的数据(可用 for of 遍历)

a) Array

b) Arguments

c) Set

d) Map

e) String

f) TypedArray

g) NodeList

3) 工作原理

a) 创建一个指针对象，指向当前数据结构的起始位置

b) 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员

c) 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员

d) 每调用 next 方法返回一个包含 value 和 done 属性的对象

```js
// 声明一个数组
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙僧'];
// 使用 for...of 遍历数组
for (let v of xiyou) {
  console.log(v);
}
let iterator = xiyou[Symbol.iterator]();
// 调用对象的next方法
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// 重新初始化对象，指针也会重新回到最前面
let iterator1 = xiyou[Symbol.iterator]();
console.log(iterator1.next());
```

自定义遍历对象

```js
const banji = {
  name: '终极一班',
  stus: [
    'a',
    'b',
    'c',
    'd',
  ],
  [Symbol.iterator]() {
    let index = 0
    let _this = this
    return {
      next: function () {
        console.log(this)
        if (index < _this.stus.length) {
          const result = {value: _this.stus[index], done: false}
          index++;
          return result
        } else {
          return {value: undefined, done: true}
        }

      }
    }
  }
}

// 遍历对象
for (let v of banji) {
  console.log(v);
}
```

### 12.生成器

生成器函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同

代码说明：

1) * 的位置没有限制

2) 生成器函数返回的结果是迭代器对象，调用迭代器对象的 next 方法可以得到

yield 语句后的值

3) yield 相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next

方法，执行一段代码

4) next 方法可以传递实参，作为 yield 语句的返回值

```js
function * gen(){
 yield '一只没有耳朵';
 yield '一只没有尾巴';
 return '真奇怪'; }
let iterator = gen();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

生成器函数参数的传递

```js
function * gen(arg){
console.log(arg);
let one = yield 111;
console.log(one);
let two = yield 222;
console.log(two);
let three = yield 333;
console.log(three);
}
let iterator = gen("AAA");
console.log(iterator.next()); // 会执行yield 111;
// next()方法是可以传入参数的，传入的参数作为第一条(上一条)语句yield 111的返回
结果
console.log(iterator.next("BBB")); // 会执行yield 222;
console.log(iterator.next("CCC")); // 会执行yield 333;
console.log(iterator.next("DDD")); // 继续往后走，未定义;
```

生成器函数实例一

```js
// 异步编程 文件操作 网络操作（ajax，request） 数据库操作
// 需求：1s后控制台输出111 再过2s后控制台输出222 再过3s后控制台输出333
// 一种做法：回调地狱
// setTimeout(()=>{
// console.log(111);
// setTimeout(()=>{
// console.log(222);
// setTimeout(()=>{
// console.log(333);
// },3000)
// },2000)
// },1000)
// 另一种做法
function one(){
setTimeout(()=>{
console.log(111);
iterator.next();
},1000)
}
function two(){
setTimeout(()=>{
console.log(222);
iterator.next();
},1000)
}
function three(){
setTimeout(()=>{
console.log(333);
iterator.next();
},1000)
}
function * gen(){
yield one();
yield two();
yield three();
}
// 调用生成器函数
let iterator = gen();
iterator.next();
```

生成器函数实例二

```js
// 模拟获取: 用户数据 订单数据 商品数据
function getUsers(){
setTimeout(()=>{
let data = "用户数据";
// 第二次调用next，传入参数，作为第一个的返回值
iterator.next(data); // 这里将data传入
},1000);
}
function getOrders(){
setTimeout(()=>{
let data = "订单数据";
iterator.next(data); // 这里将data传入
},1000);
}
function getGoods(){
setTimeout(()=>{
let data = "商品数据";
iterator.next(data); // 这里将data传入
},1000);
}
function * gen(){
let users = yield getUsers();
console.log(users);
let orders = yield getOrders();
console.log(orders);
let goods = yield getGoods();
console.log(goods); // 这种操作有点秀啊！
}
let iterator = gen();
iterator.next();
```

### 13.Promise

Promise 是 ES6 引入的异步编程的新解决方案。语法上 Promise 是一个构造函数，用来封装异步操作 并可以获取其成功或失败的结果； 

1. Promise 构造函数: Promise (excutor) {}； 
2. Promise.prototype.then 方法； 
3. Promise.prototype.catch 方法；

基本使用

```js
// 实例化 Promise 对象
// Promise 对象三种状态：初始化、成功、失败
const p = new Promise(function(resolve,reject){
setTimeout(function(){
// 成功
// let data = "数据";
// 调用resolve，这个Promise 对象的状态就会变成成功
// resolve(data);
// 失败
let err = "失败了！";
reject(err);
},1000);
});
Promise封装读取文件：
一般写法：
运行结果：
// 成功
// 调用 Promise 对象的then方法，两个参数为函数
p.then(function(value){ // 成功
console.log(value);
}, function(season){ // 失败
console.log(season);
});

```

Promise封装读取文件

```js
// 1、引入 fs 模块
const fs = require("fs");
// 2、调用方法，读取文件
// fs.readFile("resources/text.txt",(err,data)=>{
// // 如果失败则抛出错误
// if(err) throw err;
// // 如果没有出错，则输出内容
// console.log(data.toString());
// });
// 3、使用Promise封装
const p = new Promise(function(resolve,data){
fs.readFile("resources/text.txt",(err,data)=>{
// 判断如果失败
if(err) reject(err);
// 如果成功
resolve(data);
});
});
p.then(function(value){
console.log(value.toString());
},function(reason){
console.log(reason); // 读取失败
})
```

Promise封装ajax请求

```js
// 请求地址：https://api.apiopen.top/getJoke
  // 原生请求
  // 1、创建对象
  const xhr = new XMLHttpRequest();
  // 2、初始化
  xhr.open("GET", "https://api.apiopen.top/getJoke");
  // 3、发送
  xhr.send();
  // 4、绑定事件，处理响应结果
  xhr.onreadystatechange = function () {
// 判断状态
    if (xhr.readyState == 4) {
// 判断响应状态码 200-299
      if (xhr.status >= 200 && xhr.status <= 299) {
// 成功
        console.log(xhr.response);
      } else {
// 失败
        console.error(xhr.status);
      }
    }
  }
//  Promise
const p = new Promise(function (resolve, reason) {
    // 原生请求
    // 1、创建对象
    const xhr = new XMLHttpRequest();
    // 2、初始化
    xhr.open("GET", "https://api.apiopen.top/getJoke");
    // 3、发送
    xhr.send();
    // 4、绑定事件，处理响应结果
    xhr.onreadystatechange = function () {
      // 判断状态
      if (xhr.readyState == 4) {
        // 判断响应状态码 200-299
        if (xhr.status >= 200 && xhr.status <= 299) {
          // 成功
          resolve(xhr.response);
        } else {
          // 失败
          reason(xhr.status);
        }
      }
    }
  });

  p.then(function (value) {
    console.log(value.toString());
  }, function (reason) {
    console.log(reason); // 读取失败
  })
```

Promise解决回调地狱

```js
// 3、使用Promise实现
const p = new Promise((resolve, reject) => {
  fs.readFile("resources/text.txt", (err, data) => {
    resolve(data);
    
  });
});
p.then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile("resources/test1.txt", (err, data) => {
      resolve([value, data]);
    });
  })
}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile("resources/test2.txt", (err, data) => {
      // 存入数组
      value.push(data);
      resolve(value);
    });
  })
}).then(value => {
  console.log(value.join("\r\n"));
})
```

Promise对象的catch方法

```js
// Promise对象catch方法
const p = new Promise((resolve,reject)=>{
setTimeout(()=>{
// 设置p对象的状态为失败，并设置失败的值
reject("失败啦~！");
},1000);
})
// p.then(value=>{
// console.log(value);
// },reason=>{
// console.warn(reason);
// });
p.catch(reason=>{
console.warn(reason);
});
```

### 14.Set集合

ES6 提供了新的数据结构 Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历，集合的属性和方法： 

1. size 返回集合的元素个数； 
2.  add 增加一个新元素，返回当前集合； 
3.  delete 删除元素，返回 boolean 值； 
4.  has 检测集合中是否包含某个元素，返回 boolean 值； 
5.  clear 清空集合，返回 undefined；

基本使用

```js
// Set集合
let s = new Set();
console.log(s,typeof s);
let s1 = new Set(["大哥","二哥","三哥","四哥","三哥"]);
console.log(s1); // 自动去重
// 1. size 返回集合的元素个数；
console.log(s1.size);
// 2. add 增加一个新元素，返回当前集合；
s1.add("大姐");
console.log(s1);
// 3. delete 删除元素，返回 boolean 值；
let result = s1.delete("三哥");
console.log(result);
console.log(s1);
// 4. has 检测集合中是否包含某个元素，返回 boolean 值；
let r1 = s1.has("二姐");
console.log(r1);
// 5. clear 清空集合，返回 undefined；
s1.clear();
console.log(s1);

```

Set实例

```js
  // Set集合实践
  let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  // 数组去重
  let s1 = new Set(arr);
  console.log(s1);
  // 交集
  let arr2 = [3, 4, 5, 6, 5, 4, 3];
  // 看来我需要学学数组的一些方法
  let result = [...new Set(arr)].filter(item => new
  Set(arr2).has(item));
  console.log(result);
  // 并集
  // ... 为扩展运算符，将数组转化为逗号分隔的序列
  let union = [...new Set([...arr, ...arr2])];
  console.log(union);
  // 差集：比如集合1和集合2求差集，就是1里面有的，2里面没的
  let result1 = [...new Set(arr)].filter(item => !(new
  Set(arr2).has(item)));
  console.log(result1);
```

### 15.Map集合

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类 型的值（包括对象）都可以当作键。Map 也实现了iterator 接口，所以可以使用『扩展运算符』和 『for…of…』进行遍历；

Map 的属性和方法：

1. size 返回 Map 的元素个数； 
2.  set 增加一个新元素，返回当前 Map； 
3.  get 返回键名对象的键值； 
4. has 检测 Map 中是否包含某个元素，返回 boolean 值； 
5. clear 清空集合，返回 undefined；

代码实现

```js
// Map集合
// 创建一个空 map
let m = new Map();
// 创建一个非空 map
let m2 = new Map([
  ['name', '尚硅谷'],
  ['slogon', '不断提高行业标准']
]);
// 1. size 返回 Map 的元素个数；
console.log(m2.size);
// 2. set 增加一个新元素，返回当前 Map；
m.set("皇帝", "大哥");
m.set("丞相", "二哥");
console.log(m);
// 3. get 返回键名对象的键值；
console.log(m.get("皇帝"));
// 4. has 检测 Map 中是否包含某个元素，返回 boolean 值；
console.log(m.has("皇帝"));
// 5. clear 清空集合，返回 undefined；
m.clear();
console.log(m);
```

### 16.class类

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键 字，可以定义类。基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做 到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已；

1. class 声明类； 
2. constructor 定义构造函数初始化； 
3.  extends 继承父类； 
4.  super 调用父级构造方法； 
5.  static 定义静态方法和属性； 
6.  父类方法可以重写；

```js
// 手机 ES5写法
  // function Phone(brand,price){
  // this.brand = brand;
  // this.price = price;
  // }
  // // 添加方法
  // Phone.prototype.call = function(){
  // console.log("我可以打电话！");
  // }
  // // 实例化对象

  // let HuaWei = new Phone("华为",5999);
  // HuaWei.call();
  // console.log(HuaWei);
  // ES6写法
  class Phone {
    // 构造方法，名字是固定的
    constructor(brand, price) {
      this.brand = brand;
      this.price = price;
    }

// 打电话，方法必须使用该方式写
    call() {
      console.log("我可以打电话！");
    }
  }

  let HuaWei = new Phone("华为", 5999);
  HuaWei.call();
  console.log(HuaWei);
```

class静态成员

```js
// class静态成员
  // ES5写法
  // function Phone(){}
  // Phone.name = "手机";
  // Phone.change = function(){
  // console.log("我可以改变世界！");
  // }
  // let nokia = new Phone();
  // console.log(nokia.name); // undefined
  // // nokia.change();
  // // 报错：Uncaught TypeError: nokia.change is not a function
  // Phone.prototype.color = "黑色";
  // console.log(nokia.color); // 黑色
  // console.log(Phone.name);
  // Phone.change();
  // 注意：实例对象和函数对象的属性是不相通的
  // ES6写法
  class Phone {
// 静态属性
    static name = "手机";

    static change() {
      console.log("我可以改变世界！");
    }
  }

  let nokia = new Phone();
  console.log(nokia.name);
  console.log(Phone.name);
  Phone.change();
```

ES5构造函数实现继承

```js
// ES5构造函数继承
// 手机
function Phone(brand, price) {
  this.brand = brand;
  this.price = price;
}

Phone.prototype.call = function () {
  console.log("我可以打电话！");
}

// 智能手机
function SmartPhone(brand, price, color, size) {
  Phone.call(this, brand, price);
  this.color = color;
  this.size = size;
}

// 设置子级构造函数的原型
SmartPhone.prototype = new Phone;
SmartPhone.prototype.constructor = SmartPhone;
// 声明子类的方法
SmartPhone.prototype.photo = function () {
  console.log("我可以拍照！");
}
SmartPhone.prototype.game = function () {
  console.log("我可以玩游戏！");
}
const chuizi = new SmartPhone("锤子", 2499, "黑色", "5.5inch");
console.log(chuizi);
chuizi.call();
chuizi.photo();
chuizi.game();
```

ES6 class 类继承

```js
// ES6class类继承
  class Phone {
    constructor(brand, price) {
      this.brand = brand;
      this.price = price;
    }

    call() {
      console.log("我可以打电话！");
    }
  }

  class SmartPhone extends Phone {
// 构造函数
    constructor(brand, price, color, size) {
      super(brand, price); // 调用父类构造函数
      this.color = color;
      this.size = size;
    }

    photo() {
      console.log("我可以拍照！");
    }

    game() {
      console.log("我可以玩游戏！");
    }
  }

  const chuizi = new SmartPhone("小米", 1999, "黑色", "5.15inch");
  console.log(chuizi);
  chuizi.call();
  chuizi.photo();
  chuizi.game();
```

子类 对父类方法的重写

```js
// ES6class类继承
  class Phone {
    constructor(brand, price) {
      this.brand = brand;
      this.price = price;
    }

    call() {
      console.log("我可以打电话！");
    }
  }

  class SmartPhone extends Phone {
// 构造函数
    constructor(brand, price, color, size) {
      super(brand, price); // 调用父类构造函数
      this.color = color;
      this.size = size;
    }

// 子类对父类方法重写
// 直接写，直接覆盖
// 注意：子类无法调用父类同名方法
    call() {
      console.log("我可以进行视频通话！");
    }

    photo() {
      console.log("我可以拍照！");
    }

    game() {
      console.log("我可以玩游戏！");
    }
  }

  const chuizi = new SmartPhone("小米", 1999, "黑色", "5.15inch");
  console.log(chuizi);

  chuizi.call();
  chuizi.photo();
  chuizi.game();
```

class中的getter和setter

```js
// class中的getter和setter设置
  class Phone {
    get price() {
      console.log("价格属性被读取了！");
// 返回值
      return 123;
    }

    set price(value) {
      console.log("价格属性被修改了！");
    }
  }

  // 实例化对象
  let s = new Phone();
  console.log(s.price); // 返回值
  s.price = 2999;
```

### 17.数值扩展

#### Number.EPSILON

Number.EPSILON 是 JavaScript 表示的最小精度； EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16；

#### 二进制和八进制

ES6 提供了二进制和八进制数值的新的写法，分别用前缀 0b 和 0o 表示； 

#### Number.isFinite() 与 Number.isNaN() 

- Number.isFinite() 用来检查一个数值是否为有限的； 
- Number.isNaN() 用来检查一个值是否为 NaN；

#### Number.parseInt() 与 Number.parseFloat() 

ES6 将全局方法 parseInt 和 parseFloat，移植到 Number 对象上面，使用不变； 

#### Math.trunc

用于去除一个数的小数部分，返回整数部分； 

#### Number.isInteger 

Number.isInteger() 用来判断一个数值是否为整数；

例子

```js
// 数值扩展
// 0. Number.EPSILON 是 JavaScript 表示的最小精度
// EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16
// function equal(a, b){
// return Math.abs(a-b) < Number.EPSILON;
// }
console.log("0、Number.EPSILON 是 JavaScript 表示的最小精度");
// 箭头函数简化写法
equal = (a, b) => Math.abs(a - b) < Number.EPSILON;
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // false
console.log(equal(0.1 + 0.2, 0.3)); // true
// 1. 二进制和八进制
console.log("1、二进制和八进制");
let b = 0b1010;
let o = 0o777;
let d = 100;
let x = 0xff;
console.log(x);
// 2. Number.isFinite 检测一个数值是否为有限数
console.log("2、Number.isFinite 检测一个数值是否为有限数");
console.log(Number.isFinite(100));
console.log(Number.isFinite(100 / 0));
console.log(Number.isFinite(Infinity));
// 3. Number.isNaN 检测一个数值是否为 NaN
console.log("3. Number.isNaN 检测一个数值是否为 NaN");
console.log(Number.isNaN(123));
// 4. Number.parseInt Number.parseFloat字符串转整数
console.log("4. Number.parseInt Number.parseFloat字符串转整数");
console.log(Number.parseInt('5211314love'));
console.log(Number.parseFloat('3.1415926神奇'));
// 5. Number.isInteger 判断一个数是否为整数
console.log("5. Number.isInteger 判断一个数是否为整数");
console.log(Number.isInteger(5));
console.log(Number.isInteger(2.5));
// 6. Math.trunc 将数字的小数部分抹掉
console.log("6. Math.trunc 将数字的小数部分抹掉 ");
console.log(Math.trunc(3.5));

// 7. Math.sign 判断一个数到底为正数 负数 还是零
console.log("7. Math.sign 判断一个数到底为正数 负数 还是零");
console.log(Math.sign(100));
console.log(Math.sign(0));
console.log(Math.sign(-20000));
```

### 18.对象扩展

ES6 新增了一些 Object 对象的方法： 

1. Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）； 
2.  Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象； 
3.  proto、setPrototypeOf、 setPrototypeOf 可以直接设置对象的原型；

例子

```js
// 对象扩展
// 1. Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）；
console.log(Object.is(120, 120)); // ===
// 注意下面的区别
console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);
// NaN与任何数值做===比较都是false，跟他自己也如此！
// 2. Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象；
const config1 = {
  host: "localhost",
  port: 3306,
  name: "root",
  pass: "root",
  test: "test" // 唯一存在
}
const config2 = {
  host: "http://zibo.com",
  port: 300300600,
  name: "root4444",
  pass: "root4444",
  test2: "test2"
}
// 如果前边有后边没有会添加，如果前后都有，后面的会覆盖前面的
console.log(Object.assign(config1, config2));
// 3. __proto__、setPrototypeOf、 getPrototypeOf 可以直接设置对象的原型；
const school = {
  name: "尚硅谷"
}
const cities = {
  xiaoqu: ['北京', '上海', '深圳']
}
// 并不建议这么做
Object.setPrototypeOf(school, cities);
console.log(Object.getPrototypeOf(school));
console.log(school);
```

### 19.模块化

模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来；

模块化的优势有以下几点： 

1. 防止命名冲突； 
2.  代码复用； 
3.  高维护性；

ES6 之前的模块化规范有： 

1. CommonJS => NodeJS、Browserify； 
2.  AMD => requireJS； 
3.  CMD => seaJS；

模块功能主要由两个命令构成：export 和 import； 

- export 命令用于规定模块的对外接口（导出模块）； 
- import 命令用于输入其他模块提供的功能（导入模块）；

基本使用 

```js
export let school = "尚硅谷";
export function teach(){
console.log("我们可以教你开发技术！");
}

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>模块化</title>
</head>
<body>
<script type="module">
// 引入m.js模块内容
import * as m from "./js/m.js";
console.log(m);
console.log(m.school);
m.teach();
</script>
</body>
</html>
```

ES6暴露数据语法汇总

- 逐个导出 模块

  ```js
  // 分别暴露（导出）
  export let school = "尚硅谷";
  export function teach(){
  console.log("我们可以教你开发技术！");
  }
  ```

- 统一导出模块

  ```js
  // 统一暴露（导出）
  let school = "尚硅谷";
  function findJob(){
  console.log("我们可以帮你找到好工作！");
  }
  export {school,findJob}
  ```

- 默认导出模块

  ```js
  // 默认暴露（导出）
  export default{
  school : "尚硅谷",
  change : function(){
  console.log("我们可以帮你改变人生！");
  }
  }
  ```

- 引入和使用模块

  ```html
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>模块化</title>
  </head>
  <body>
  <script type="module">
  // 引入m.js模块内容
  import * as m from "./js/m.js";
  console.log(m);
  console.log(m.school);
  m.teach();
  // 引入n.js模块内容
  import * as n from "./js/n.js";
  console.log(n);
  console.log(n.school);
  n.findJob();
  // 引入o.js模块内容
  import * as o from "./js/o.js";
  console.log(o);
  // 注意这里调用方法的时候需要加上default
  console.log(o.default.school);
  o.default.change();
  </script>
  </body>
  </html>
  ```

  

### 20.Babel对ES6模块化代码转换

Babel 是一个 JavaScript 编译器； 

Babel 能够将新的ES规范语法转换成ES5的语法； 

因为不是所有的浏览器都支持最新的ES规范，所以，一般项目中都需要使用Babel进行转换； 

步骤：使用Babel转换JS代码——打包成一个文件——使用时引入即可；

步骤：

第一步：安装工具babel-cli（命令行工具） babel-preset-env（ES转换工具） browserify（打包工具， 项目中使用的是webpack）；

第二步：初始化项目

- npm init -

第三步：安装

- npm i babel-cli babel-preset-env browserify

第四步：使用babel转换

- npx babel js（js目录） -d dist/js（转化后的js目录） --presets=babel-preset-env

第五步：打包

- npx browserify dist/js/app.js -o dist/bundle.js

第六步：使用的时候 引入bundle.js

```js
 <script src="./js/bundle.js" type="module"></script>
```
### 21.ES6模块化引入NPM包

第一步：安装jQuery

- npm i jquery

第二步：在app.js中使用jQuery

- import $ from 'jquery'

## ES7

### 1.Array.prototype.includes

Includes 方法用来检测数组中是否包含某个元素，返回布尔类型值； 判断数组中是否包含某元素，语法：arr.includes(元素值)；

```js
// includes
let arr = [1,2,3,4,5];
console.log(arr.includes(1));
```

### 2.指数操作符 

在 ES7 中引入指数运算符``**``

```js
// 指数操作符
console.log(Math.pow(2,10))
console.log(2**10);
```

## ES8

### 1.async和await

async 和 await 两种语法结合可以让异步代码看起来像同步代码一样； 简化异步函数的写法；

1.async函数的返回值为 promise对象

2.promise对象的结果有async函数执行的返回值决定

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>async函数</title>
</head>
<body>
<script>
// async函数：异步函数
async function fn(){
// return 123; // 返回普通数据
// 若报错，则返回的Promise对象也是错误的
// throw new Error("出错啦！");
// 若返回的是Promise对象，那么返回的结果就是Promise对象的结果
return new Promise((resolve,reject)=>{
// resolve("成功啦！");
reject("失败啦！");
})
}
const result = fn();
// console.log(result); // 返回的结果是一个Promise对象
// 调用then方法
result.then(value => {
console.log(value);
},reason => {
console.warn(reason);
});
</script>
</body>
</html>
```

await表达式

1. await 必须写在 async 函数中； 
2.  await 右侧的表达式一般为 promise 对象； 
3.  await 返回的是 promise 成功的值； 
4.  await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理；

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>await表达式</title>
</head>
<body>
<script>
// async函数 + await表达式：异步函数
// 创建Prmise对象
const p = new Promise((resolve,reject)=>{
resolve("成功啦！");
})
async function fn(){
// await 返回的是 promise 成功的值
let result = await p;
console.log(result); // 成功啦！
}
fn();
</script>
</body>
</html>

```

async与await结合读取文件

```js
// 导入模块
const fs = require("fs");

// 读取
function readText() {
  return new Promise((resolve, reject) => {
    fs.readFile("../resources/text.txt", (err, data) => {
      //如果失败
      if (err) reject(err);
      //如果成功
      resolve(data);
    })
  })
}

//声明一个 async 函数
async function main() {
  //获取为学内容
  let t0 = await readText();
  console.log(t0.toString());
}

main();
```

async和await结合发送ajax请求

```js
// async 和 await 结合发送ajax请求
function sendAjax(url) {
  return new Promise((resolve, reject) => {
    // 1、创建对象
    const x = new XMLHttpRequest();
    // 2、初始化
    x.open("GET", url);
    // 3、发送
    x.send();
    // 4、事件绑定
    x.onreadystatechange = function () {
      if (x.readyState == 4) {
        if (x.status >= 200 && x.status <= 299) {
          // 成功
          resolve(x.response);
        } else {
          // 失败
          reject(x.status);
        }
      }
    }
  });
}

// 测试
// const result = sendAjax("https://api.apiopen.top/getJoke");
// result.then(value=>{
// console.log(value);
// },reason=>{
// console.warn(reason);
// })
// 使用async和await
async function main() {
  let result = await sendAjax("https://api.apiopen.top/getJoke");
  console.log(result);
}

main();
```

### 2.对象方法扩展

1. Object.values()方法：返回一个给定对象的所有可枚举属性值的数组； 
2.  Object.entries()方法：返回一个给定对象自身可遍历属性 [key,value] 的数组； 
3.  Object.getOwnPropertyDescriptors()该方法：返回指定对象所有自身属性的描述对象；

```js
// 对象方法扩展
let school = {
  name: "訾博",
  age: 24,
  sex: "男"
}
// 获取对象所有的键
console.log(Object.keys(school));
// 获取对象所有的值
console.log(Object.values(school));
// 获取对象的entries
console.log(Object.entries(school));
// 创建map
const map = new Map(Object.entries(school));

console.log(map);
console.log(map.get("name"));
// 返回指定对象所有自身属性的描述对象
console.log(Object.getOwnPropertyDescriptors(school));
// 参考内容：
const obj = Object.create(null, {
  name: {
    // 设置值
    value: "訾博",
    // 属性特性
    writable: true,
    configuration: true,
    enumerable: true
  }
});
```

## ES9

### 1.Rest 参数与 spread 扩展运算符

Rest 参数与 spread 扩展运算符在 ES6 中已经引入，不过 ES6 中只针对于数组，在 ES9 中为对象提供了 像数组一样的 rest 参数和扩展运算符；

```js
// Rest参数与spread扩展运算符
  // Rest 参数与 spread 扩展运算符在 ES6 中已经引入，
  // 不过 ES6 中只针对于数组，在 ES9 中为对象提供了像
  // 数组一样的 rest 参数和扩展运算符；
  //rest 参数
  function connect({
                     host,
                     port,
                     ...user
                   }) {
    console.log(host);
    console.log(port);
    console.log(user);
  }

  connect({
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    type: 'master'
  });
  //对象合并
  const skillOne = {
    q: '天音波'
  }
  const skillTwo = {
    w: '金钟罩'
  }

  const skillThree = {
    e: '天雷破'
  }
  const skillFour = {
    r: '猛龙摆尾',
// 自己测试，可用
    z: '胡说八道'
  }
  const mangseng = {
    ...skillOne,
    ...skillTwo,
    ...skillThree,
    ...skillFour
  };
  console.log(mangseng)
  // ...skillOne => q: '天音波', w: '金钟罩'
```

### 2.正则扩展：命名捕获分组

```js
// 正则扩展：命名捕获分组
// 声明一个字符串
let str = '<a href="http://www.baidu.com">訾博</a>';
// 需求：提取url和标签内文本
// 之前的写法
const reg = /<a href="(.*)">(.*)<\/a>/;
// 执行
const result = reg.exec(str);
console.log(result);
// 结果是一个数组，第一个元素是所匹配的所有字符串
// 第二个元素是第一个(.*)匹配到的字符串
// 第三个元素是第二个(.*)匹配到的字符串
// 我们将此称之为捕获
console.log(result[1]);
console.log(result[2]);
// 命名捕获分组
const reg1 = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;
const result1 = reg1.exec(str);
console.log(result1);
// 这里的结果多了一个groups
// groups:
// text:"訾博"
// url:"http://www.baidu.com"
console.log(result1.groups.url);
console.log(result1.groups.text);
```

### 3.正则扩展：反向断言

ES9 支持反向断言，通过对匹配结果前面的内容进行判断，对匹配进行筛选；

```js
// 正则扩展：反向断言
// 字符串
let str = "JS5201314你知道么555啦啦啦";
// 需求：我们只想匹配到555
// 正向断言
const reg = /\d+(?=啦)/; // 前面是数字后面是啦
const result = reg.exec(str);
console.log(result);
// 反向断言
const reg1 = /(?<=么)\d+/; // 后面是数字前面是么
const result1 = reg.exec(str);
console.log(result1);
```

### 4.正则扩展：dotAll模式

正则表达式中点.匹配除回车外的任何单字符，标记『s』改变这种行为，允许行终止符出现；

```js
// 正则扩展：dotAll 模式
// dot就是. 元字符，表示除换行符之外的任意单个字符
let str = `
<ul>
<li>
<a>肖生克的救赎</a>
<p>上映日期: 1994-09-10</p>
</li>
<li>
<a>阿甘正传</a>
<p>上映日期: 1994-07-06</p>
</li>
</ul>
`;
// 需求：我们想要将其中的电影名称和对应上映时间提取出来，存到对象
// 之前的写法
// const reg = /<li>\s+<a>(.*?)<\/a>\s+<p>(.*?)<\/p>/;
// dotAll 模式
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;
// const result = reg.exec(str);
// console.log(result);
let result;
let data = [];
while(result = reg.exec(str)){
console.log(result);
data.push({title:result[1],time:result[2]});
}
console.log(data);

```

## ES10

### 1.Object.fromEntries

将二维数组或者map转换成对象； 之前学的Object.entries是将对象转换成二维数组；

```js
// Object.fromEntries：将二维数组或者map转换成对象
// 之前学的Object.entries是将对象转换成二维数组
// 此方法接收的是一个二维数组，或者是一个map集合
// 二维数组
const result = Object.fromEntries([
["name","訾博"],
["age",24],
]);
console.log(result);
const m = new Map();
m.set("name","訾博");
m.set("age",24);
const result1 = Object.fromEntries(m);
console.log(result1);
```

### 2.trimStart和 trimEnd

去掉字符串前后的空白字符；

```js
// trimStart 和 trimEnd
let str = " zibo ";
console.log(str.trimLeft());
console.log(str.trimRight());
console.log(str.trimStart());
console.log(str.trimEnd());
```

### 3.Array.prototype.flat与flatMap

将多维数组转换成低维数组；

```js
// Array.prototype.flat 与 flatMap
// flat
// 将多维数组转换成低维数组
// 将二维数组转换成一维数组
const arr = [1,2,3,[4,5],6,7];
console.log(arr.flat());
// 将三维数组转换成二维数组
const arr2 = [1,2,3,[4,5,[6,7]],8,9];
console.log(arr2.flat());
// 将三维数组转换成一维数组
console.log(arr2.flat(2));
// flatMap
const arr3 = [1,2,3,4,5];
const result0 = arr3.map(item => item * 10);
console.log(result0);
const result = arr3.map(item => [item * 10]);
console.log(result);
const result1 = arr3.flatMap(item => [item * 10]);
console.log(result1);
```

### 4.Symbol.prototype.description

获取Symbol的描述字符串；

```js
// Symbol.prototype.description
// 获取Symbol的描述字符串
// 创建Symbol
let s = Symbol("訾博");
console.log(s.description)
```

## ES11

### 1.String.prototype.matchAll

用来得到正则批量匹配的结果；

```js
// String.prototype.matchAll
// 用来得到正则批量匹配的结果
let str = `
<ul>
<li>
<a>肖生克的救赎</a>
<p>上映日期: 1994-09-10</p>
</li>
<li>
<a>阿甘正传</a>
<p>上映日期: 1994-07-06</p>
</li>
</ul>
`;
// 正则
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/sg;
const result = str.matchAll(reg);
// 返回的是可迭代对象，可用扩展运算符展开
// console.log(...result);
// 使用for...of...遍历
for(let v of result){
console.log(v);
}

```

### 2.类的私有属性

私有属性外部不可访问直接；

```js
// 类的私有属性
class Person {
  // 公有属性
  name;
  // 私有属性
  #age;
  #weight;

  // 构造方法
  constructor(name, age, weight) {
    this.name = name;
    this.#age = age;
    this.#weight = weight;
  }

  intro() {
    console.log(this.name);
    console.log(this.#age);
    console.log(this.#weight);
  }
}

// 实例化
const girl = new Person("小兰", 18, "90kg");
console.log(girl);
// 公有属性的访问
console.log(girl.name);

// 私有属性的访问
console.log(girl.age); // undefined
// 报错Private field '#age' must be declared in an enclosing class
// console.log(girl.#age);
girl.intro();
```

### 3.Promise.allSettled

获取多个promise执行的结果集；

```js
// Promise.allSettled
// 获取多个promise执行的结果集
// 声明两个promise对象
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("商品数据——1");
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("失败啦");

  }, 1000);
});
// 调用Promise.allSettled方法
const result = Promise.allSettled([p1, p2]);
console.log(result);
const result1 = Promise.all([p1, p2]); // 注意区别
console.log(result1);
```

### 4.可选链操作符

如果存在则往下走，省略对对象是否传入的层层判断；

```js
// 可选链操作符
// ?.
function main(config) {
  // 传统写法
  // const dbHost = config && config.db && config.db.host;
  // 可选链操作符写法
  const dbHost = config?.db?.host;
  console.log(dbHost);

}

main({
  db: {
    host: "192.168.1.100",
    username: "root"
  },
  cache: {
    host: "192.168.1.200",
    username: "admin"
  }
});
```

### 5.动态import导入

动态导入模块，什么时候使用时候导入；

```js
// hello.js
export function hello(){
	alert('Hello');
}	
// app.js
  // import * as m1 from "./hello.js"; // 传统静态导入
  //获取元素
  const btn = document.getElementById('btn');
  btn.onclick = function () {
    import('./hello.js').then(module => {
      module.hello();
    });
  }
```

### 6.BigInt

更大的整数；

```js
// BigInt
// 大整型
let n = 100n;
console.log(n,typeof(n));
// 函数：普通整型转大整型
let m = 123;
console.log(BigInt(m));
// 用于更大数值的运算
let max = Number.MAX_SAFE_INTEGER;
console.log(max);
console.log(max+1);
console.log(max+2); // 出错了
console.log(BigInt(max));
console.log(BigInt(max)+BigInt(1));
console.log(BigInt(max)+BigInt(2));
```

### 7.globalThis对象

globalThis 对象 : 始终指向全局对象window 
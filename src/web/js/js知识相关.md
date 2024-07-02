---
title: JS知识相关
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
# JS知识相关

## 1.基础总结 

### 1.数据类型 

#### 分类 ：

- 基本数据类型
  1. string：任意字符串
  2. number：任意数值
  3. Boolean：true、false
  4. null：null
  5. undefined：undefined
  6. symbol 
  7. bigInt
- 引用类型 
  1. object：任意对象
  2. function：特别对象（可以执行）
  3. array：特别对象（内部数据有序/数据下标）

#### 判断：

- typeof：数值、字符串、布尔值、undefined、function。
  - 不能区别的：null、object，object和array
- instanceof：判断对象的具体类型
- ===：null/undefined
- object.prototype.toString.call()

#### 相关问题：

1.undefined与null的区别？

- undefined定义了未赋值，null定义且赋值了，且值为null

2.什么时候给对象赋值为null？

- 初始赋值，表明将要赋值为对象
- 结束前赋值，让对象成为垃圾对象（被垃圾回收器回收）

3.严格区分变量类型与数据类型？

- 数据类型：
  - 基本类型
  - 对象类型
- 变量类型 
  - 基本类型 ：保存的都是基本类型的数据
  - 引用数据类型：保存的都是地址值

### 2.数据、变量与内存

#### 1.什么是数据？

*   存储在内存中代表特定信息的东东，本质上是0101二进制
*   数据的特点：可传递、可运算
*   一切皆数据，函数也是数据
*   内存中所有操作的目标是：数据
    *   算术运算
    *   逻辑运算
    *   赋值运算
    *   运行函数

#### 2.什么是内存？

*   内存条通电以后产生的可存储数据的空间（临时的）
*   产生和死亡：内存条（集成电路板）——通电——产生一定容量的存储空间——存储各种数据——断电——内存全部消失
*   分配内存：声明变量和函数或创建对象时，JS引擎 会自动分配一定大小的内存来存放对应的数据
*   释放内存：清空内存中的数据，标识内存可以再分配使用（内存不释放就不能复用）
    *   自动释放：栈空间的局部变量
    *   垃圾回调器回调：堆空间的垃圾对象
*   一块内存包含两个数据：
    1. 内部存储的数据（一般数据/地址数据）
    2. 内存地址值数据

- 内存分类
  - 栈：全局变量、局部变量
  - 堆：对象

#### 3.什么是变量？

*   可变化的量，由变量名和变量值组成 ，每个变量对应一块内存
*   变量名用来查找对应的内存，变量值就是内存中保存的数值数据

#### 4.内存，数据，变量三者之间的关系

*   内存是用来存储数据的空间
*   变量是内存的标识，我们通过变量查找到内存

#### 相关问题

5.在js调用函数的时候传递变量参数时，传递的时引用还是传递？ ——值

*     理解一：都是值（基本/地址值）传递
*     理解二：可能是值传递，也可能是引用传递（地址值）

6.JS引擎如何内存管理

*     1.内存生命周期
      *     分配小内存空间，得到使用权
      *     存储数据，可以反复进行操作
      *     释放小内存空间
*     2.释放内存
      *     局部对象：函数执行完自动释放
      *     对象：成为垃圾对象==》垃圾回收器回收

### 3.对象

####  什么是对象？

*   可以存储多个数据，多个数据的封装体
*   用来保存多个数据的容器

#### 为什么要用对象？

*   统一管理多个数据

#### 对象的组成

*   属性：属性名 + 属性值 组成
*   方法：一种特别的属性（属性值是函数）

#### 如何访问内部数据

*   .属性名
*   ['属性名']

#### 什么时候必须使用['属性名']的方式？

*   1.属性名包含特殊字符串：- 空格等
*   2.变量名不确定

### 4.函数

什么是函数？

*   实现特定功能的n条语句的封装体
*   只有函数是可以执行的，其他类型 的数据不能执行

为什么用函数？

*   提高代码复用
*   便于阅读交流

如何定义函数？

*   函数声明 function test(){}
*   表达式 var a = function test(){}
*   二者区别 ：变量提升

如何调用？

*   test() 直接调用
*   obj.test()
*   new test()
*   test.call/apply(obj) 临时让test成为obj的方法进行调用

什么函数才是回调函数？

*   1.你定义的
*   2.你没有调用
*   3.但是他最终执行了(在某个时刻，某个条件下)

常见的回调函数

*   dom事件回调——发生事件的dom元素
*   定时器回调函数——window
*   ajax请求回调
*   生命周期回调

### 5.IIFE

理解

*   全称：Immediately-Invoked Function Expression

作用

*   隐藏实现
*   不会污染外部命名空间
*   用它来编写jS模块

### 6.函数中的this

this是什么？

* 任何函数本质上都是通过某个对象来调用的，如果没有直接指定就是window
* 所有函数内部都有一个变量this
* 它的值是调用当前函数的当前对象

如何确定 this 的值

* test() window
* p.test() p
* new test() 新创建的对象
* p.call(obj) obj

## 2.函数高级

### 1.原型与原型链

#### 1.原型

函数的prototype属性

*   每个函数都有一个prototype属性，它默认指向一个Object空对象（即成为：原型对象）
*   原型对象中有一个属性：constructor，它指向函数对象

给原型对象添加属性（一般都是方法）

*   作用：函数的所有实例对象自动拥有原型中的属性 （方法）

```js
console.log(Date.prototype);
console.log(Date.prototype.constructor === Date);
function Test() {

}
Test.prototype.func = function () {
  console.log(123);
}

console.log(test.prototype.constructor === Test);
```



#### 2.显示原型与隐式原型

1.每个函数function都有一个prototype 即显式原型

2.每个实例对象都有一个`__protp__`,可称为隐式原型

3.对象的隐式原型的值为其对应构造函数的显式原型的值

4.总结

* 函数的prototype属性：在定义函数时自动添加的，默认值是一个 空Object对象
* 对象的``__proto__``属性：在创建对象时自动添加的，默认值为构造函数的prototype属性值
* 程序员可以直接操作显式原型，但不能直接从操作隐式原型（ES6之前）

```js
function Fn() {}
console.log(Fn.prototype)
var fn = new Fn()
console.log(fn.__proto__);
console.log(Fn.prototype === fn.__proto__)
```

#### 3.原型链

1.原型链

*   访问一个对象的属性时
    *   先在自身的属性中查找，找到返回
    *   如果没有，再沿着``__proto__``这条链向上查找，找到返回
    *   如果最终没找到，返回undefined
    *   别名 ：隐式原型链
    *   作用：查找对象的属性（方法）
*   函数的显式原型指向的对象默认是空Object实例对象 （但Object不满足）

```js
function Fn() {
  this.test1 = function () {
    console.log('test1');
  }
}
Fn.prototype.test2 = function () {
  console.log('test2');
}
var fn = new Fn()
fn.test1()
fn.test2()
console.log(fn.toString());
// fn.test3()

// 函数的显式原型指向的对象默认是空Object实例对象 （但Object不满足）
console.log(Fn.prototype instanceof Object); // true
console.log(Object.prototype instanceof Object); // false
console.log(Function.prototype instanceof Object); // true

// 所有函数都是Function实例（包含Function）
console.log(Function.__proto__ === Function.prototype) // true

// Object的原型对象是原型链的尽头
console.log(Object.prototype.__proto__) // null
console.log(Object.prototype.toString.call(Object.prototype)) // [object object]
```



#### 4.原型链属性问题

1.读取对象的属性值时：会自动到原型链中查找

2.设置对象的属性值时：不会查找原型链，如果当前对象中没有此属性，直接添加此属性并设置其值

3.方法一般定义在原型中，属性一般通过构造函数定义在对象本身上


#### 5.原型链面试题

```js
// test1
/*
* 首先，实例对象b默认的隐式原型指向源构造函数的显式原型，因此 b.n === 1
* 此时，构造函数的原型链上并没有m属性，因此是undefined
* 这时，又将构造函数的原型链给了一个新的指向，此时有了新的n、m属性
* 因此 c.m c.n均可以获取到对应的值
* */
function A() {

}

A.prototype.n = 1
var b = new A()
A.prototype = {
  n: 2,
  m: 3
}
var c = new A()
console.log(b.n, b.m, c.n, c.m) // 1 undefined 2 3

// test2
/*
* f的实例对象的隐式原型指向其构造函数F的显式原型，而构造函数F的显式原型又指向了空Object对象
* 空Object对象的隐式原型指向了Obejct 的显式原型，因此 f.a()可以获取到
* 但此时 Object的显式原型对象上并没有 b 方法，因此f.b 为undefined，undefined加括号执行会报错
* 而F作为Function的实例对象，它的隐式原型指向构造函数Function的显式原型
* Function的显式原型，沿着隐式原型找到了重点Object ，因此 F.a() F.b()都可以获取到
*
* */
var F = function () {

}
Object.prototype.a = function () {
  console.log('aaa');
}
Function.prototype.b = function () {
  console.log('bbb');
}
var f = new F()
f.a();
f.b();
F.a();
F.b();
```

### 2.执行上下文与执行上下文栈

#### 1.变量提升与函数提升

1.变量声明提升

*   通过var定义（声明）的变量，在定义语句之前就可以访问到
*   值：undefined

2.函数声明提升

*   通过function声明的函数，在之前 就可以调用
*   值：函数定义对象

3.问题：变量提升和函数提升是如何产生的？

```js
// 面试题
var a = 3
function fn() {
  console.log(a); // undefined
  var a = 4
}
fn2() // 函数提升
function fn2() {
  console.log('fn2');
}
```

#### 2.执行上下文

1.代码分类

*   全局代码
*   局部代码（函数）

2.全局执行上下文

*   在执行全局代码前window确定为全局执行上下文
*   对全局数据进行预处理
    *   var定义的全局变量==》undefined，添加window的属性
    *   function声明的全局函数==》赋值（fun），添加window的方法
    *   this==》赋值（window）
*   开始执行全局代码

3.函数执行上下文

*   在调用函数，准备执行函数体之前 ，创建对应的函数执行上下文对象
*   对局部数据进行预处理
    *   形参变量==》赋值（实参）==》添加执行上下文的属性
    *   arguments==》赋值（实参列表），添加为执行上下文的属性
    *   var定义的局部变量==》undefined，添加为执行上下文的属性
    *   function声明的属性 ==》赋值（fun），添加执行上下文的方法
    *   this===》赋值（调用函数的对象）
*   开始执行 函数体代码

#### 3.执行上下文栈

1.在全局代码执行前，JS引擎 就会创建一个栈来存储管理所有的执行上下文

2.在全局执行上下文（window）确定后，将其添加到栈中（压栈）

3.在 函数执行上下文创建后，将其添加到栈中（压栈）

4.在当前函数执行完后，将栈顶对象移除（出栈）

5.当所有的代码执行完后，栈中只剩下window

#### 4.执行上下文面试题

```js
/*
* 依次输出：
* gb undefined
* fb 1
* fb 2
* fb 3
* fb 3
* fb 2
* fb 1
* ge 1
* 共有五个执行上下文
*
* */
console.log('global  begin' + i)
var i = 1
foo(1)
function foo(i) {
  if (i == 4) {
    return
  }
  console.log('foo() begin:'+  i)
  foo(i + 1)
  console.log('foo() end' + i)
}
console.log('global end:' + i)

// test 1 先执行变量提升、在执行函数提升
function a() {}
var a
console.log(typeof a); // 'function'
// test 2
if (!(b in window)){
  var b=1
}
console.log(b); // undefined
// test 3
var c = 1
function c(c) {
  console.log(c);
}
c(2) // 报错 c is not a function
```

### 3.作用域与作用域链

理解：就是一块地盘，一个代码段所在的区域，他是静态的（相对于上下文对象）在编写代码时 ，就确定了
分类：全局作用域、函数作用域 
作用：隔离变量，不同作用域下同名变量不会有冲突 

#### 作用域与执行上下文区别

* 区别一 ：
  * 全局作用域外，每个函数都会创建自己的作用域，作用域在函数定义时就已经确定了，而不是在函数调用时
  * 全局执行上下文环境是在全局作用域确定之后，JS代码马上执行之前创建
  * 函数执行上下文是在调用函数时，函数体 代码执行之前创建
* 区别二：
  * 作用域 是静态的，只要函数定义好了就一直存在，且不再变化
  * 执行上下文是动态的，调用函数时创建。函数调用结束 时就会自动释放
* 联系：
  * 执行上下文从属于所在的作用域
  * 全局上下文环境 ==》全局作用域
  * 函数上下文环境 ==》对应 的函数作用域

#### 作用域链

* 多个上下级关系的作用域形成的链，它的方向是从下向上的（从内到外）

* 查找变量时就是沿着作用域链来查找的

* 查找一个变量的查找规则

  1.在当前作用域下的执行上下文中查找对应的属性，如果有直接返回，否则进入 2

  2.在上一级作用域下的执行上下文中查找对应的属性，如果有直接返回，否则进入 3

  3.再次执行 2的相同操作，直到全局作用域，如果还找不到就抛出异常

#### 面试题

```js
// test 1
var x = 10
function fn() {
  console.log(x);
}
function show(f) {
  var x = 20
  f()
}
show(fn) // 10

// test 2
var fn = function () {
  console.log(fn);
}
fn() // fn
var obj = {
  fn2:function () {
    console.log(fn2);
  }
}
obj.fn2() // fn2 is not defined
```

### 4.闭包

#### 1.引入

需求：分别输出对应按钮的索引，并绑定点击事件（循环绑定）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<button>测试一</button>
<button>测试二</button>
<button>测试三</button>
<script>
  var btns = document.getElementsByTagName(`button`)
  // 遍历加监听 这种方式 i 为全局变量，导致无法实现
  // for (var i = 0,length = btns.length; i < length; i++) {
  //   var btn = btns[i]
  //   btn.onclick = function () {
  //     alert(`第 ${i + 1} 个按钮被点击了`)
  //   }
  // }

  // 解决方式一：将每个btn的索引存储到btn对象上
  // for (var i = 0,length = btns.length; i < length; i++) {
  //   var btn = btns[i]
  //   btn.index = i
  //   btn.onclick = function () {
  //     alert(`第 ${this.index + 1} 个按钮被点击了`)
  //   }
  // }

  // 闭包
  for (var i = 0, length = btns.length; i < length; i++) {
    (function (i) {
      var btn = btns[i]
      btn.onclick = function () {
        alert(`第 ${i + 1} 个按钮被点击了`)
      }
    })(i)

  }
</script>
</body>
</html>
```

#### 2.理解闭包

1.如何产生闭包？

*   当一个嵌套的内部（子）函数引用了 嵌套外部（父）函数的变量（函数）时，就产生了闭包

2.闭包到底是什么？

*   使用chrome调试查看
*   注意：闭包存在于嵌套的内部函数中

3.产生闭包的条件

*   函数嵌套
*   内部函数引用了外部函数的数据（变量/函数 ）
*   外部函数调用

#### 3.常见的闭包

1.将函数作为另外一个函数的返回值

2.将函数作为实参传递给另一个函数调用

#### 4.闭包的作用

1.使函数内部的变量，在函数执行完之后，仍然存活在能存中（延长了局部变量的生命周期）

2.让函数外部可以操作（读写）到函数内部的数据 （变量/函数）

问题：

1.函数执行完 后，函数内部声明的局部变量是否还存在 一般不存在，存在于闭包中的变量才存在

2.在函数外部能直接访问函数内部的局部变量吗？ 不能，通过闭包可以让外部操作

#### 5.闭包的生命周期

产生：在嵌套内部函数定义执行完成时就产生了（不是在调用）
死亡：在嵌套内部函数成为垃圾对象时

#### 6.闭包的缺点及解决

1.缺点

*   函数执行完后，函数内的局部变量没有释放，占用内存时间会变长
*   容易造成内存泄漏
*   解决：
    *   能不用闭包就不用
    *   及时释放
        *

2.内存溢出

*   一种程序运行出现的错误
*   当程序运行需要的内存超过了剩余的内存时，就会抛出内存溢出的而错误

3.内存泄漏

*   占用的内存没有及时释放
*   内存泄露积累多了就容易导致内存溢出

4.常见的内存泄漏：

*   意外的全局变量
*   没有及时清理的定时器或回调函数
*   闭包

#### 7.闭包面试题

```js
// test 1
var name = "this Window"
var object = {
  name:'My object',
  getNameFunction:function () {
    return function () {
      return this.name
    }
  }
}
alert(object.getNameFunction()()) // this window

// test 2
var name2 = "this Window"
var object2 = {
  name2:'My object',
  getNameFunction:function () {
    var that = this;
    return function () {
      return that.name2
    }
  }
}
alert(object2.getNameFunction()()) // My object

//  test 3
function fun(n, o) {
  console.log(o);
  return {
    fun:function (m) {
      return fun(m,n)
    }
  }
}
var a = fun(0);a.fun(1);a.fun(2);a.fun(3); // undefined 0 0 0
var b = fun(0).fun(1).fun(2).fun(3) // undefined 0 1 2
var c = fun(0).fun(1); c.fun(2); c.fun(3);// undefined 0 1 1
```

## 3.对象高级

### 1.对象创建模式

方法一：object构造函数模式

*   套路：先创建 空 Object对象，在动态添加属性/方法
*   使用场景：起始时不确定对象内部数据
*   问题：语句太多

```js
var p = new Object()
p.name = 'sola'
p.age = 12
p.setName = function (name) {
  this.name = name
}
```

方法二：对象字面量模式

```js
var obj = {
    name:'sola',
    age:18,
    setName:function(name){
        this.name = name
    }
}
```



方法三：工厂模式

*   套路：通过工厂函数动态创建对象并返回
*   适用场景：需要创建多个对象
*   问题：对象没有一个具体的类型，都是object类型

```js
function createPerson(name, age) {
  var  obj = {
    name:name,
    age:age,
    setName:function (name) {
      this.name = name
    }
  }

  return obj
}

// 创建两个人
var p1 = createPerson('sola',12)
var p2 = createPerson('piggy',12)
```

方式四：自定义构造函数模式

*   套路：自定义构造函数，通过new创建对象
*   适用场景：需要创建多个类型确定的对象
*   问题：每个对象都有相同的数据

```js
function Person(name,age){
    this.name = name
    this.age = age
}
var p = new Person('sola',16)
```



### 2.继承模式

1.原型链继承

1. 定义父类型构造函数
2. 给父类型的原型添加方法
3. 定义子类型的构造函数
4. 创建父类型的对象赋值给子类型的原型
5. 将子类型原型的构造属性设置为子类型
6. 给子类型原型添加方法
7. 创建子类型对象：可以调用父类型的方法

关键：子类型的原型指向父类型的一个实例对象

```js
// 父类型
function Supper() {
  this.supProp = 'Supper property'
}
Supper.prototype.showSupperProp = function () {
  console.log(this.supProp);
}
// 子类型
function Sub() {
  this.subProp  = 'Sub property'
}

// 子类型的原型为父类型的一个实例对象
Sub.prototype = new Supper()
//  让子类型的原型constructor指向子类型
Sub.prototype.constructor = Sub

Sub.prototype.showSubProp = function () {
  console.log(this.subProp);
}
var sub = new Sub()
```

2.构造函数继承

1. 定义父类型构造函数
2. 定义子类型构造函数
3. 在子类型的构造函数中调用父类型构造函数 

关键：在子类型构造函数中通过call()调用父类型构造函数

```js
function Person(name, age) {
  this.name = name
  this.age = age
}
function Student(name,age,price) {
  Person.call(this,name,age)
  this.price = price
}
```

3.组合式继承

```js
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.setName = function (name) {
  this.name = name
}
function Student(name,age,price) {
  Person.call(this,name,age) // 得到属性
  this.price = price
}
Student.prototype = new Person() //  为了能看到夫类型的方法
Student.prototype.constructor = Student // 修正constructor
Student.prototype.setPrice = function (price) {
  this.price = price
}
```

## 4.线程机制与事件机制

### 进程与线程

进程

- 程序的一次执行，它占有一片独有的内存空间
- 可以通过Windows任务管理器来查看进程

线程

- 是进程内的一个独立单元
- 是程序执行的一个完整流程
- 是CPU最小的调度单元

相关知识

- 应用程序必须运行在某个进程的某个线程上
- 一个进程中至少有一个运行的线程：主线程，进程启动后自动创建
- 一个进程中也可以同时运行多个线程，我们会说程序是多线程运行的
- 一个进程内的数据可以供其中的多个线程共享
- 多个进程间 的数据是不能直接共享的
- 线程池 ：保存多个线程对象的容器，实现线程对象的反复利用

相关问题

- 何为多进程？多线程？
  - 多进程运行：一个应用程序可以同时启动多个实例运行
  - 多线程：在一个进程内，同时有多个线程运行
- 比较单线程与多线程 
  - 多线程：
    - 优点
      - 能有效提升CPU的使用率
      - 创建多线程开销 
    - 缺点
      - 线程间切换开销
      - 死锁与状态同步问题
  - 单线程
    - 优点：顺序编程、简单易懂
    - 缺点：效率低
- JS是单线程 还是多线程
  - 单线程
  - 但是使用H5中的Web Workers可以实现多线程运行
- 浏览器运行是单线程还是多线程
  - 多线程运行的
- 浏览器运行是单进程还是多进程
  - 多进程
    - chrome
    - 新版IE
  - 单进程
    - firefox
    - 老板IE

### 浏览器内核

支持浏览器运行的最核心的程序

不同的浏览器可能不一样

- Chrome，Safari：webkit
- Firefox：Gecko
- IE：Trident
- 360，搜狗等国内浏览器：Trident+ webkit

内核由很多模块组成

- js引擎模块：负责js程序的编译与运行
- html，css文档解析模块：负责页面文本的解析
- DOM/CSS模块 ：负责 dom/css在内存中的相关处理
- 布局和 渲染模块：负责页面的布局和 效果的绘制（内存中 的对象）
- ...
- 定时器模块 ：负责定时器的管理
- 事件相应模块：负责事件的管理
- 网络请求模块 ：负责ajax 的请求 

### 定时器引发的思考

1.定时器真的是定时执行吗？

- 定时器并不能保证真正定时执行
- 一般会延迟一丁点（可以接受），也有可能延迟很久（不能接受）

2.定时器的回调函数是在分线程执行的吗？

- 在主线程执行的，js是单线程的

3.定时器是如何实现的？

- 事件循环模型

### JS是单线程执行的

1.如何证明JS是单线程执行的？

- settimeout的回调函数是在主线程执行的
- 定时器的回调函数只有在运行栈中的全部执行完后才有可能执行

2.为什么js要用单线程模式，而不采用多线程模式

- Javascript的单线程与他的用途有关
- 作为浏览器脚本语言，Javascript的主要用途是与用户交互，以及操作dom
- 这决定了它只能是单线程，否则会带来复杂的同步问题

3.代码的分类

- 初始化代码
- 回调代码

4.JS引擎执行代码的基本流程

- 先执行初始化代码：包含一些特别的代码
  - 设置定时器
  - 绑定监听
  - 发送ajax请求
- 后面在某个时刻才会执行回调代码

### 浏览器的事件循环模型


1.所有代码分类

- 初始化执行代码（同步代码）：包含绑定DOM事件监听，设置定时器，发送ajax请求的代码
- 回调执行代码（异步代码）：处理回调逻辑

2.JS引擎执行代码的基本流程

- 初始化代码 ==> 回调代码

3.模型的两个重要组成部分

- 事件管理模块（定时器/DOM事件/Ajax）
- 回调队列

4.模型的运转流程

- 执行初始化代码，将事件回调函数交给对应模块管理
- 当事件发生时，管理模块会将回调函数及其数据添加到回调队列中
- 只有当初始化代码执行完成后（可能需要一定时间），才会遍历读取回调队列中的回调函数执行

5.相关重要概念

1.执行栈

- execution stack 所有代码都是在此空间中执行的

2.浏览器内核

- browser core
  - JS引擎模块
  - 其他模块

3.任务队列 同一个callback队列

4.消息队列 同一个callback队列

5.事件队列 同一个callback队列

6.事件轮询 event loop

- 从任务队列中循环取出回调函数放入执行栈中处理（一个一个）

7.事件驱动模型

8.请求响应模型

### H5 Web Workers

1.H5规范提供了js分线程的实现，取名为 Web Workers。我们可以将一些 大计算量的代码交由web worker运行而不冻结用户界面。但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变 javascript单线程的本质

2.相关API

- Worker：构造函数，加载分线程执行的js文件
- Worker.prototype.onmessage 用于接收另一个线程的回调函数
- Worker.prototype.postMessage 向另一个线程发消息

3.不足

- worker内代码不能操作DOM（更新UI）
- 不能跨域加载JS
- 不是每个浏览器都支持这个新特性

JS主线程

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<input type="text" placeholder="数值" id="number">
<button id="btn">计算</button>
<script>

  var input = document.getElementById('number')
  document.getElementById('btn').onclick = function () {
    var number = input.value
    // 创建一个worker对象
    var worker = new Worker('worker.js')
    // 接收worker传过来的数据
    worker.onmessage = function (event) {
      console.log(event.data);
      alert(event.data)
    }
    // 向worker发送消息
    worker.postMessage(number)
  }
</script>
</body>
</html>
```

分线程worker.js

```js
function fibonacci(n) {
  return n < 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(this)
var onmessage = function (event) {
  var number = event.data
  console.log(`分线程接收到主线程发送的数据：${number}`)
  // 计算
  var result = fibonacci(number)
  postMessage(result)
  console.log(`分线程向主线程返回的数据：${result}`)
}
```




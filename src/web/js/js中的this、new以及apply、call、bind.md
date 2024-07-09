---
title: 'js中的this、new以及apply、call、bind'
icon: gears
order: 4
category:
- 'js'
tag:
- 'js'
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
函数的`this`关键字在`JavaScript`中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别。在绝大多数的情况下，函数的调用方式决定了`this`的值（运行时绑定）。`this`关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象

```js
function baz() {
 // 当前调用栈是baz
 // 因此当前调用位置是全局作用域
 
 console.log( "baz" );
 bar(); // <-- bar的调用位置
}
function bar() {
 // 当前调用栈是：baz --> bar
 // 因此，当前调用位置在baz中
 
 console.log( "bar" );
 foo(); // <-- foo的调用位置
}
function foo() {
 // 当前调用栈是：baz --> bar --> foo
 // 因此，当前调用位置在bar中
 
 console.log( "foo" );
}
baz(); // <-- baz的调用位置
```

同时，this在函数执行过程中，`this`一旦被确定了，就不可以在更改了

```js
var a = 10;
var obj = {
 a: 20
}
function fn() {
 this = obj; // 修改this，运行后会报错
 console.log(this.a);
}
fn();
```

## this绑定规则

### 默认绑定

```js
var name = 'Jenny';
function person() {
 return this.name;
}
console.log(person()); //Jenny
```

注意：严格模式下，不能 将全局对象用于默认绑定，this会绑定到`undefined`，只有函数运行在非严格模式下，默认绑定才能绑定到全局对象

### 隐式绑定

函数还可以作为某个对象的方法调用，这时`this`就指这个上级对象

```js
function test() {
 console.log(this.x);
}
var obj = {};
obj.x = 1;
obj.m = test;
obj.m(); // 1
```

下面这个函数中包含多个对象，尽管这个函数是被最外层的对象调用，`this`指向的也只是它上一级的对象

```js
var o = {
 a:10,
 b:{
 fn:function(){
 console.log(this.a); //undefined
 }
 }
}
o.b.fn();
```

上述代码中，`this`的上一级对象为`b`，`b`内部并没有`a`变量的定义，所以输出`undefined`

```js
var o = {
 a:10,
 b:{
 a:12,
 fn:function(){
 console.log(this.a); //undefined
 console.log(this); //window
 }
 }
}
var j = o.b.fn;
j();
```

上述代码中，`this`指向的是`window`，这里需要记住，`this`永远指向的是最后调用它的对象，虽然`fn`是对象`b`的方法，但是`fn`赋值给`j`的时候并没有执行，所以最终指向的是window

### new绑定

通过构造函数`new`关键字生成一个实例对象，此时`this`指向这个实例对象

```js
function test() {
this.x = 1;
}
var obj = new test();
obj.x // 1
```

下面是一些特殊情况：

`new`过程遇到`return`一个对象，此时`this`指向为返回的对象

```js
function fn() 
{ 
 this.user = 'xxx'; 
 return {}; 
}
var a = new fn(); 
console.log(a.user); //undefined
```

如果返回一个简单类型的时候，则`this`指向实例对象

```js
function fn() 
{ 
 this.user = 'xxx'; 
 return 1;
}
var a = new fn; 
console.log(a.user); //xxx
```

注意，`null`虽然也是对象，但是此时`new`仍然指向实例对象

```js
function fn() 
{ 
 this.user = 'xxx'; 
 return null;
}
var a = new fn; 
console.log(a.user); //xxx
```



### 显示绑定

`apply()、call()、bind()`是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时`this`指的就是这第一个参数

```js
var x = 0;
function test() {
console.log(this.x);
}
var obj = {};
obj.x = 1;
obj.m = test;
obj.m.apply(obj) // 1
```

### 箭头函数

在ES6的语法中还提供了箭头函数语法，让我们在代码书写时就能确定`this`的指向（编译时绑定）

```js
const obj = {
 sayThis: () => {
 console.log(this);
 }
};
obj.sayThis(); // window JavaScript sayThis 
 this window 
const globalSay = obj.sayThis;
globalSay(); // window global
```

绑定事件监听

```js
const button = document.getElementById('mngb');
button.addEventListener('click', ()=> {
 console.log(this === window) // true
 this.innerHTML = 'clicked button'
})
```

上述可以看到，我们其实是想要`this`为点击的`button`，但此时`this`指向了`window`，包括在原型上添加方法的时候，此时`this`也是指向`window`

```js
Cat.prototype.sayName = () => {
 console.log(this === window) //true
 return this.name
}
const cat = new Cat('mm');
cat.sayName()
```

## 绑定优先级比较

### 隐式绑定vs显示绑定

```js
function foo() {
 console.log( this.a );
}
var obj1 = {
 a: 2,
 foo: foo
};
var obj2 = {
 a: 3,
 foo: foo
};
obj1.foo(); // 2
obj2.foo(); // 3
obj1.foo.call( obj2 ); // 3
obj2.foo.call( obj1 ); // 2
```

显然，显示绑定的优先级更高

### new绑定vs隐式绑定

```js
function foo(something) {
 this.a = something;
}
var obj1 = {
 foo: foo
};
var obj2 = {};
obj1.foo( 2 );
console.log( obj1.a ); // 2
obj1.foo.call( obj2, 3 );
console.log( obj2.a ); // 3
var bar = new obj1.foo( 4 );
console.log( obj1.a ); // 2
console.log( bar.a ); // 4
```

可以看到，new绑定的优先级 > 隐式绑定

### new绑定vs显示绑定

```js
function foo(something) {
 this.a = something;
}
var obj1 = {};
var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a ); // 2
var baz = new bar( 3 );
console.log( obj1.a ); // 2
console.log( baz.a ); // 3
```

`bar`被绑定到了`obj1`上，但是`new bar(3)`并没有向我们预计的那样把`obj1.a`修改为3。但是，`new`修改了绑定调用`bar`中的`this`

## new操作符具体做了些什么

在JavaScript中，`new`操作符用于创建一个给定构造函数的实例对象

```js
function Person(name, age){
 this.name = name;
 this.age = age;
}
Person.prototype.sayName = function () {
 console.log(this.name)
}
const person1 = new Person('Tom', 20)
console.log(person1) // Person {name: "Tom", age: 20}
t.sayName() // 'Tom'
```

从上面可以看到，`new`通过构造函数`Person`创建出来的实例可以访问到构造函数中的属性，也可以访问到构造函数原型链中的属性（即实例与构造函数通过原型链连接了起来）

现在在构造函数中显式加上返回值，返回值是一个基本类型

```js
function Test(name) {
 this.name = name
 return 1
}
const t = new Test('xxx')
console.log(t.name) // 'xxx'
```

可以发现，构造函数中返回一个原始值，然而这个返回值并没有作用

下面再构造函数中返回一个对象

```js
function Test(name) {
 this.name = name
 console.log(this) // Test { name: 'xxx' }
 return { age: 26 }
}
const t = new Test('xxx')
console.log(t) // { age: 26 }
console.log(t.name) // 'undefined'
```

从上面可以发现，构造函数如果返回一个对象，那么这个返回值会被正常使用

### 具体流程

- 创建一个新的对象
- 将对象与构造函数通过原型链连接起来
- 将构造函数中的`this`绑定到新建的对象`obj`上
- 根据构造函数的返回类型判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

```js
function myNew(Func,...args){
    // 1.创建一个新对象
    const obj = {}
    // 2.新对象原型指向构造函数的原型对象
    obj.__proto__ = Func.prototype
    // 3.将构造函数的this指向新对象
    let result = Func.apply(obj,args)
    // 4.根据返回值判断
    return result instanceof Object ? result : obj
}
```

## bind、call、apply

`bind、call、apply`作用是改变函数执行时的上下文，简而言之就是改变函数运行时的`this`指向

什么情况下需要改变`this`的指向？

```js
var name = "lucy";
var obj = {
 name: "martin",
 say: function () {
 console.log(this.name);
 }
};
obj.say(); // martin this指向obj 
setTimeout(obj.say,0); // lucy this指向window
```

从上面可以看到，我们实际需要的是`this`指向`obj`对象，这时候需要改变`this`指向了

```js
setTimeout(obj.say.bind(obj),0); //martin this指向obj
```

### apply

`apply`接收两个参数，第一个参数是`this`的指向，第二个参数是函数接收的参数，以数组的形式传入。改变`this`的指向后，会立即执行，且此方法只是临时改变`this`指向一次

```js
function fn(...args){
 console.log(this,args);
}
let obj = {
 myname:" "
}
fn.apply(obj,[1,2]); // this指向obj
fn(1,2) // this指向window
```

当第一个参数为`null`、`undefined`的时候，默认指向`window`（在浏览器中）

```js
fn.apply(null,[1,2]); // this指向window
fn.apply(undefined,[1,2]); // this指向window
```

### call

`call`方法的第一个参数也是`this`指向，后面传入的是一个参数列表，跟`apply`一样，改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次

```js
function fn(...args){
 console.log(this,args);
}
let obj = {
 myname:"sola"
}
fn.call(obj,1,2); // this指向obj，参数依次用逗号隔开
fn(1,2) // this指向window
```

同样的，当第一个参数为`null`、`undefined`的时候，默认指向`window`（在浏览器中）

```js
fn.call(null,[1,2]); // this指向window
fn.call(undefined,[1,2]); // this指向window
```

### bind

`bind`方法与`call`方法很相似，第一个参数也是`this`的指向，后面传入的也是一个参数的列表（但是这个参数列表可以分多次传入）。改变`this`指向后不会立即执行，而是返回一个永久改变`this`指向的函数

```js
function fn(...args){
 console.log(this,args);
}
let obj = {
 myname:"sola"
}
const bindFn = fn.bind(obj); // this指向obj bind不是立即执行需要执行一次
bindFn(1,2) // this指向obj
fn(1,2) // this指向window
```

#### 实现bind

1. 修改`this`指向

2. 动态传递参数

   ```js
   // 方式一：只在bind中传递函数参数
   fn.bind(obj,1,2)()
   // 方式二：在bind中传递函数参数，也在返回的函数中传递参数
   fn.bind(obj,1,2)(3)
   ```

3. 兼容`new`关键字

```js
Function.prototype.myBind = function(context){
    // 判断调用对象是否为函数
    if(typeof this !== "function"){
        throw new TypeError("Error")
    }
    
    // 获取参数
    const args = [...arguments].slice(1),fn = this
    return function Fn(){
        // 根据调用方式，传入不同的绑定值
        return fn.apply(this instanceof Fn ? new fn(...arguments) : context,args.concat(...arguments))
    }
}
```


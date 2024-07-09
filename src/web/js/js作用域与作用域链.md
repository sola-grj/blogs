---
title: 'js作用域与作用域链'
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
## 作用域

即变量（变量作用域又称上下文）和函数生效（能被访问）的区域或集合

### 全局作用域

任何不在函数中或者是打括号中声明的变量，都是在全局作用域下，全局作用域下声明的变量可以在程序的任意位置访问

```js
var greeting = 'Hello World!';
function greet() {
 console.log(greeting);
}
// 'Hello World!'
greet();
```

### 函数作用域

函数作用域也叫局部作用域，如果一个变量是在函数内部声明的它就在一个函数作用域下面。这些变量只能在函数内部访问，不能在函数以外访问

```js
function greet() {
 var greeting = 'Hello World!';
 console.log(greeting);
}
// 'Hello World!'
greet();
// Uncaught ReferenceError: greeting is not defined
console.log(greeting);
```

### 块级作用域

ES6引入了`let`和`const`关键字，和`var`关键字不同，在大括号中使用`let`和`const`声明的变量存在于块级作用域中。在大括号外不能访问这些变量

```js
{
 // 
 let greeting = 'Hello World!';
 var lang = 'English';
 console.log(greeting); // Prints 'Hello World!'
}
// 'English'
console.log(lang);
// Uncaught ReferenceError: greeting is not defined
console.log(greeting);
```

### 词法作用域

词法作用域又叫做静态作用域 ，变量被创建时就确定好了，而非执行阶段确定的。也就是说我们写好代码时，它的作用域就确定了，JavaScript遵循的就是词法作用域

```js
var a = 2;
function foo(){
 console.log(a)
}
function bar(){
 var a = 3;
 foo();
}
bar()
```

![__proto__关系](/assets/images/web/js/3.png)

由于JavaScript遵循词法作用域，相同层级的`foo`和`bar`就没有办法访问到彼此块作用域

## 作用域链

当在JavaScript中使用一个变量的时候，首先JavaScript引擎会尝试在当前作用域下去寻找该变量，如果没有找到，再到它的上层作用域寻找，以此类推直到找到该变量或是已经找到了全局作用域

![__proto__关系](/assets/images/web/js/4.png)

```js
var sex = ' ';
function person() {
 var name = ' ';
 function student() {
 var age = 18;
 console.log(name); // 
 console.log(sex); // 
 }
 student();
 console.log(age); // Uncaught ReferenceError: age is not defined
}
person();
```


---
title: 'typeof与instanceof'
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
## typeof

`typeof`操作符返回一个字符串，表示未经计算的操作数的类型

```js
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'
```



## instanceof

`instanceof`运算符用于检测构造函数的`prototype`属性是否出现在某个实例对象的原型链上

```js
object instanceof constructor
// 构造函数通过 new 可以实例对象，instanceof能判断这个对象是否是之前那个构造函数生成的对象
let Car = function() {}
let benz = new Car()
benz instanceof Car // true
let car = new String('xxx')
car instanceof String // true
let str = 'xxx'
str instanceof String // false
```

`instanceof`实现原理

```js
function myInstanceof(left,right){
    // 这里先用typeof判断基础数据类型，如果是，直接返回false
    if(typeof left !== 'object' || left === null) return false
    // getProTypeof是Object对象自带的API，能够拿到原型对象
    let proto = Object.getPrototypeOf(left);
    while(true){
        if(proto === null) retuen false
        if(proto === right.prototype) return true
        proto = Object.getPrototypeof(proto)
    }
}
```

## 区别

- `typeof`会返回一个变量的基本类型，`instanceof`返回的是一个布尔值

- `instanceof`可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型

- `typeof`也存在弊端，它虽然可以判断基础数据类型（`null`除外），但是引用类型中 ，除了`function`类型以外，其他的也无法判断

- 如果需要检测数据类型，可以采用`Object.prototype.toString`，调用该方法，同意返回格式`"[object Xxx]"`的字符串

  ```js
  Object.prototype.toString({}) // "[object Object]"
  Object.prototype.toString.call({}) // call ok
  Object.prototype.toString.call(1) // "[object Number]"
  Object.prototype.toString.call('1') // "[object String]"
  Object.prototype.toString.call(true) // "[object Boolean]"
  Object.prototype.toString.call(function(){}) // "[object Function]"
  Object.prototype.toString.call(null) //"[object Null]"
  Object.prototype.toString.call(undefined) //"[object Undefined]"
  Object.prototype.toString.call(/123/g) //"[object RegExp]"
  Object.prototype.toString.call(new Date()) //"[object Date]"
  Object.prototype.toString.call([]) //"[object Array]"
  Object.prototype.toString.call(document) //"[object HTMLDocument]"
  Object.prototype.toString.call(window) //"[object Window]"
  ```

  

- 实现一个全局通用的数据类型判断方法

  ```js
  function getType(obj){
      let type = typeof obj;
      if(type !== "object"){
          return type
      }
      return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/,'$1')
  }
  
  getType([]) // "Array"
  getType('123') // "string"  
  getType(window) // "Window" 
  getType(null) // "Null"
  getType(undefined) // "undefined" 
  getType() // "undefined" 
  getType(function(){}) //"function"
  getType(/123/g) //"RegExp"
  ```

  
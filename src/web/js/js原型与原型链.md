---
title: 'js原型与原型链'
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
## 原型

JavaScript常被描述为一种基于原型的语言，每个对象拥有一个原型对象。当试图访问一个对象的属性时，不仅仅在对象上寻找，还会寻找该对象的原型，以及该对象原型的原型，依次层层向上搜索，知道找到一个名字匹配的属性或者到达原型链的末尾。

准确的说，这些属性和方法定义在Object的构造函数（constructor functions）之上的`prototype`属性上，而非实例对象本身

```js
function doSomething(){}
console.log( doSomething.prototype );

// 控制台输出
{
 constructor: ƒ doSomething(),
 __proto__: {
 constructor: ƒ Object(),
 hasOwnProperty: ƒ hasOwnProperty(),
 isPrototypeOf: ƒ isPrototypeOf(),
 propertyIsEnumerable: ƒ propertyIsEnumerable(),
 toLocaleString: ƒ toLocaleString(),
 toString: ƒ toString(),
 valueOf: ƒ valueOf()
 }
}
```

上面这个对象就是原型对象。可以看到，原型对象有一个自有属性`constructor`，这个属性指向该函数，如下图所示

![constructor关系](/assets/images/web/js/1.png)

## 原型链

原型对象也可能有原型，并从中继承方法和属性，一层一层、以此类推。这种关系被称为原型链（prototype chain）它解释了为何任何一个对象会拥有定义在其他对象中的属性和方法

在对象实例和它的构造器之间建立一个链接（它是`__proto__`属性，是从构造函数的`prototype`属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法

```js
function Person(name) {
 this.name = name;
 this.age = 18;
 this.sayName = function() {
 console.log(this.name);
 }
}
// 
var person = new Person('person')
```

分析

- 构造函数`Person`存在原型对象`Person.prototype`
- 构造函数生成的实例对象`person`，`person`的`__proto__`指向构造函数`Person`的原型对象
- `Person.prototype.__proto__`指向内置对象，因为`Person.prototype`是个对象，默认是由`Object`函数作为类创建的，而`Object.prototype`为内置对象
- `Person.__proto__`指向内置匿名函数`anonymous`，因为Person是个函数对象。默认由Function类创建
- `Function.prototype`和`Function.__proto__`同时指向内置匿名函数`anonymous`，这样原型链的终点就是`null`

## 总结

`__proto__`作为不同对象之间的桥梁，用来指向创建它的构造函数的原型对象，如下图

![__proto__关系](/assets/images/web/js/2.png)

每个对象的`__proto__`都是指向它的构造函数的原型对象`prototype`的

```js
person1.__proto__ === Person.prototype
```

构造函数(Person)是一个函数对象，是通过`Function`构造器产生的

```js
Person.__proto__ === Function.prototype
```

原型对象本身就是一个普通对象，而普通对象的构造函数都是`Object`

```js
Person.prototype.__proto__ === Object.prototype
```

所有的构造器都是函数对象，函数对象都是`Function`构造产生的，`Object`同样也是构造器，也是`Function`构造器产生的

```js
Object.__proto__ === Function.prototype
```

`Object`的原型对象也有`__proto__`属性指向`null`，`null`是原型链的顶端

```js
Object.prototype.__proto__ === null
```

- 一切对象都是继承自`Object`对象，`Object`对象直接继承根源对象`null`
- 一切的函数对象（包括`Object`对象），都是继承自`Function`对象

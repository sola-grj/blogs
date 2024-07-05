---
title: JS基本数据类型
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

## **基本数据类型**

1. ### string：任意字符串

   字符串是不可变的，意思是一旦被创建，他们的值就不能变了

   ```js
   let name = 'sola'
   name = name + '-grl' // 先销毁在重建
   ```

2. ### number：任意数值

   ```js
   let intNum = 55 // 10进制的55
   let num1 = 070 // 8进制的56
   let hexNum1 = 0xA //16进制的10
   
   // 浮点类型
   let floatNum1 = 1.1
   let floatNum2 = 0.1;
   let floatNum3 = .1; // 有效，但不推荐
   let floatNum = 3.125e7; // 科学计数法 等于31250000
   ```

   在数值类型中，存在一个特殊数值**NaN**,意为“不是数值”，用于表示本来要返回数值的操作失败了（而不是抛出错误）

   ```js
   console.log(0/0); //NaN
   console.log(-0/+0); //NaN
   ```

3. ### Boolean：true、false

   **Boolean**类型有两个值：**true**和**false**

   通过Boolean可以将其他类型的数据转化为布尔值

   | 数据类型  | 转换为true             | 转换为false |
   | --------- | ---------------------- | ----------- |
   | String    | 非空字符串             | ""          |
   | Number    | 非零数值（包括无穷值） | 0、NaN      |
   | Object    | 任意对象               | null        |
   | Undefined | N/A（不存在）          | undefined   |

4. ### null：null

   **Null**类型同样也只有一个值，即**Null**，逻辑上来说，null值表示一个空对象，这也是给**typeof**传一个**null**会返回**object**的原因

5. ### undefined：undefined

   undefined类型只有一个值，即特殊的**undefined**，当使用**var**或者**let**声明了变量，但没有初始化的时候，就相当于给变量赋予了undefined

6. ### symbol 

   Symbol是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突

   ```js
   let genericSymbol = Symbol();
   let otherGenericSymbol = Symbol();
   console.log(genericSymbol == otherGenericSymbol); // false
   let fooSymbol = Symbol('foo');
   let otherFooSymbol = Symbol('foo');
   console.log(fooSymbol == otherFooSymbol); // false
   ```

7. ### bigInt

   `BigInt`是一种新的数据类型，用于当整数值大于`Number`数据类型支持的范围时。这种数据类型允许我们安全地对大整数执行算术操作，表示高分辨率的时间戳，使用大整数id，等等，而不需要使用库。

   重要的是要记住，不能使用`Number`和`BigInt`操作数的混合执行算术运算，需要通过显式转换其中的一种类型。 此外，出于兼容性原因，不允许在`BigInt`上使用一元加号（`+`）运算符。

   JS 中的`Number`类型只能安全地表示`-9007199254740991 (-(2^53-1))` 和`9007199254740991(2^53-1)`之间的整数，任何超出此范围的整数值都可能失去精度。

   ```js
   console.log(9999999999999999);    // → 10000000000000000
   ```

   使用BigInt，应用程序不再需要变通方法或库来安全地表示`Number.MAX_SAFE_INTEGER`和`Number.Min_SAFE_INTEGER`之外的整数。 现在可以在标准JS中执行对大整数的算术运算，而不会有精度损失的风险。

   要创建`BigInt`，只需在整数的末尾追加n即可。比较:

   ```js
   console.log(9007199254740995n);    // → 9007199254740995n
   console.log(9007199254740995);     // → 9007199254740996
   ```

   或者，可以调用`BigInt()`构造函数

   ```js
   BigInt("9007199254740995");    // → 9007199254740995n
   ```

## **引用类型** 

1. ### object：任意对象

   创建object常用方式为对象字面量表示法，属性名可以是字符串或者数值

   ```js
   let person = {
       name:"sola",
       "age":20,
       5:true
   }
   ```

2. ### function：特别对象（可以执行）

   函数实际上是对象，每个函数都是`Function`类型的实例，而`Function`也有属性和方法，跟其他引用类型一样

   函数存在三种常见的表达式

   - 函数声明

     ```js
     function sum (num1, num2) {
      return num1 + num2;
     }
     ```

   - 函数表达式

     ```js
     let sum = function(num1, num2) {
      return num1 + num2;
     };
     ```

   - 箭头函数

     ```js
     let sum = (num1, num2) => {
      return num1 + num2;
     };
     ```

3. ### array：特别对象（内部数据有序/数据下标）

   数组是一组有序的数据，但跟其它语言不同的是，数组中的每个槽位可以存储任意类型的数据，并且，数组也是动态大小的，会随着数据添加而自动增长

   ```js
   let colors = ["red", 2, {age: 20 }]
   colors.push(2)
   ```

4. ### 其他引用类型

   除了上述说的三种之外，还包括`Date`、`RegExp`、`Map`、`Set`等

## **判断**

- typeof：数值、字符串、布尔值、undefined、function。
  - 不能区别的：null、object，object和array
- instanceof：判断对象的具体类型
- ===：null/undefined
- object.prototype.toString.call()

## **存储区别**

- 基本类型存储在栈中

  ```js
  let a = 10;
  let b = a; // 赋值操作
  b = 20;
  console.log(a); // 10
  ```

  ![基本类型](/assets/images/web/1.png)

- 引用类型存储在堆中

  ```js
  var obj1 = {}
  var obj2 = obj1;
  obj2.name = "Xxx";
  console.log(obj1.name); // xxx
  ```

  ![基本类型](/assets/images/web/2.png)

## **相关问题**

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

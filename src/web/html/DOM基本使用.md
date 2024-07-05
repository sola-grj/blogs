---
title: 'DOM基本使用'
icon: HTML
order: 4
category:
- 'HTML'
tag:
- 'HTML'
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

## DOM

- 文档对象模型
- DOM就是把`文档`当作一个`对象`来看待
- DOM的顶级对象是`document`
- DOM主要学习的是操作页面元素
- DOM是 W3C标准规范

## Dom基本操作

### 创建节点

- createElement 创建新元素，接收一个参数，即要创建元素的标签名

  ```js
  const divEl = document.createElement("div");
  ```

- createTextNode 创建一个文本节点

  ```js
  const textEl = document.createTextNode("content");
  ```

- createDocumentFragment 创建一个文档碎片，它表示一种轻量级文档，主要用来存储临时节点，然后把文档内容一次性添加到DOM中

  ```js
  const fragment = document.createDocumentFragment();
  ```

  当把一个`DocumentFragment`节点插入到文档树中，插入的不是`DocumentFragment`本身，而是它的所有子孙节点

### 查询节点

- querySelector 传入任何有效的`css`选择器，即可选中单个`DOM`元素（首个）

  ```js
  document.querySelector('.element')
  document.querySelector('#element')
  document.querySelector('div')
  document.querySelector('[name="username"]')
  document.querySelector('div + p > span')
  ```

  如果页面上没有指定的元素，返回`null`

- querySelectorAll 返回一个包含节点子树内所有与之相配的`Element`节点列表，如果没有匹配的没则返回一个空节点列表

  ```js
  const notLive = document.querySelectorAll("p");
  ```

  该方法返回的是一个`NodeList`的静态实例，它是一个静态的“快照”，而非“实时”的查询

- 其他获取DOM的方法

  ```js
  document.getElementById('id属性值'); 
  document.getElementsByClassName('class属性值');
  document.getElementsByTagName('标签名');
  document.getElementsByName('name属性值');
  document/element.querySelector('CSS选择器'); 
  document/element.querySelectorAll('CSS选择器'); 
  document.documentElement; // 获取页面中的HTML标签
  document.body;// 获取页面中的BODY标签
  document.all['']; // 获取页面中所有 元素节点的对象集合
  ```

除此之外，每个`DOM`元素还有`parentNode`、`childNodes`、`firstChild`、`lastChild`、`nextSibling`、`previousSibling`属性，关系如下图所示

![DOM节点关系](/assets/images/web/html/1.png)

### 更新节点

- innerHTML 不但可以修改`DOM`节点的文本内容，还可以直接通过`HTML`片段修改`DOM`节点内部的子树

  ```js
  // <p id="p">...</p >
  var p = document.getElementById('p');
  // 设置文本为abc:
  p.innerHTML = 'ABC'; // <p id="p">ABC</p >
  // 设置HTML:
  p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
  // <p>...</p >
  ```

- innerText、textContent 自动对字符串进行`HTML`编码，保证无法设置任何`HTML`标签

  ```js
  // <p id="p-id">...</p >
  var p = document.getElementById('p-id');
  // 设置文本
  p.innerText = '<script>alert("Hi")</script>';
  // HTML 被自动编译，无法设置一个<script>节点 :
  // <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p >
  ```

  两者区别在于读取属性时，`innerText`不返回隐藏元素的文本，而`textContent`返回所有文本

- style DOM节点的style属性对应所有的CSS，可以直接获取或设置。遇到`-`需要转化为驼峰命名

  ```js
  // <p id="p-id">...</p >
  const p = document.getElementById('p-id');
  // CSS:
  p.style.color = '#ff0000';
  p.style.fontSize = '20px'; // 
  p.style.paddingTop = '2em';
  ```

### 添加节点

- innerHTML 如果这个DOM节点是空的，那么就可以直接使用innerHTML添加节点

- appendChild  把一个子节点添加到父节点的最后一个节点

  ```html
  <!-- HTML -->
  <p id="js">JavaScript</p >
  <div id="list">
   <p id="java">Java</p >
   <p id="python">Python</p >
   <p id="scheme">Scheme</p >
  </div>
  <script>
      const js = document.getElementById('js')
  	js.innerHTML = "JavaScript"
  	const list = document.getElementById('list');
  	list.appendChild(js);
  </script>
  <div id="list">
   <p id="java">Java</p >
   <p id="python">Python</p >
   <p id="scheme">Scheme</p >
   <p id="js">JavaScript</p > <!--添加元素 -->
  </div>
  ```

  动态添加新的节点

  ```js
  const list = document.getElementById('list'),
  const haskell = document.createElement('p');
  haskell.id = 'haskell';
  haskell.innerText = 'Haskell';
  list.appendChild(haskell);
  ```

- insertBefore 把子节点插入到指定的位置

  ```js
  // 子节点会插入到referenceElment之前
  parentElement.insertBefore(newElement, referenceElement)
  ```

- setAttribute 在指定元素中添加一个属性节点，如果元素中已有该属性改变属性值

  ```js
  const div = document.getElementById('id')
  div.setAttribute('class', 'white');// 第一个参数是属性名，第二个是属性值
  ```

### 删除节点

- 删除一个节点，首先要获得该节点本身以及它的父节点，然后调用父节点的`removeChild`把自己删除掉

  ```js
  // 拿到待删除的节点
  const self = document.getElementById('to-be-removed');
  // 拿到父节点:
  const parent = self.parentElement;
  // 删除:
  const removed = parent.removeChild(self);
  removed === self; // true
  ```

  
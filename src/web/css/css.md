---
title: CSS相关
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
# css总结

## 1.div上下布局

```css
.zj  {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
}
```

## 2.div虚线边框

```css
border-top: 3px dashed #ffffff;
```

## 3.flex布局

### 1、flex-direction属性

flex-direction属性决定主轴的方向（即项目的排列方向）。

```css
.box { flex-direction: row | row-reverse | column | column-reverse; }
```

### 2、flex-wrap属性

默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

```css
.box{ flex-wrap: nowrap | wrap | wrap-reverse; }
```

- nowrap（默认）：不换行。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。

### 3、flex-flow

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```css
.box { flex-flow: <flex-direction> || <flex-wrap>; }
```

### 4、justify-content属性

justify-content属性定义了项目在主轴上的对齐方式。

```css
.box { justify-content: flex-start | flex-end | center | space-between | space-around; }
```

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### 5、align-items属性

align-items属性定义项目在交叉轴上如何对齐。

```css
.box { align-items: flex-start | flex-end | center | baseline | stretch; }
```

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

### 6、align-content属性

align-content属性定义了多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box { align-content: flex-start | flex-end | center | space-between | space-around | stretch; }
```



- flex-start：交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。

## 4.项目的属性

### 1、order属性

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
```css
.item { order: <integer>; }
```


### 2、flex-grow属性

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

```css
.item { flex-grow: <number>; /* default 0 */ }
```

### 3、flex-shrink

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
负值对该属性无效。

```css
.item { flex-shrink: <number>; /* default 1 */ }
```

### 4、flex-basis属性

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```css
.item { flex-basis: <length>; | auto; /* default auto */ }
```

### 5、flex属性

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

```css
.item { flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] }
```

### 6、align-self属性

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```css
.item { align-self: auto | flex-start | flex-end | center | baseline | stretch; }
```

## 5.svg

前段时间研究 SVG 压缩优化，发现SVG预定义的 `rect`、`circle`、`ellipse`、`line`、`polyline`、`polygon` [六种基本形状](https://www.w3cplus.com/svg/svg-basic-shapes.html)可通过[`path`路径](https://www.w3cplus.com/svg/svg-path.html)转换实现，这样可以在一定程度上减少代码量。不仅如此，我们常用的 SVG Path 动画(路径动画)，是以操作`path`中两个属性值`stroke-dasharray`和`stroke-dashoffset`来实现，基本形状转换为`path`路径，有利于实现路径动画。

## SVG基本形状

SVG 提供了`rect`、`circle`、`ellipse`、`line`、`polyline`、`polygon`六种[基本形状](https://www.w3cplus.com/svg/svg-basic-shapes.html)用于图形绘制，这些形状可以直接用来绘制一些基本的形状，如矩形、椭圆等，而复杂图形的绘制则需要使用 `path` 路径来实现。

### `rect` 矩形

```
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

SVG中`rect`元素用于绘制矩形、圆角矩形，含有`6`个基本属性用于控制矩形的形状以及坐标，具体如下：

- `x`：矩形左上角`x`位置, 默认值为 `0`
- `y`：矩形左上角`y`位置, 默认值为 `0`
- `width`：矩形的宽度, 不能为负值否则报错, `0` 值不绘制
- `height`：矩形的高度, 不能为负值否则报错, `0` 值不绘制
- `rx`：圆角`x`方向半径, 不能为负值否则报错
- `ry`：圆角`y`方向半径, 不能为负值否则报错

这里需要注意，`rx` 和 `ry` 的还有如下规则：

- `rx` 和 `ry` 都没有设置, 则 `rx = 0 ry = 0`
- `rx` 和 `ry` 有一个值为0, 则相当于 `rx = 0 ry = 0`，圆角无效
- `rx` 和 `ry` 有一个被设置, 则全部取这个被设置的值
- `rx` 的最大值为 `width` 的一半, `ry` 的最大值为 `height` 的一半

### `circle` 圆形

```
<circle cx="100" cy="100" r="50" fill="#fff"></circle>
```

SVG中`circle`元素用于绘制圆形，含有3个基本属性用于控制圆形的坐标以及半径，具体如下：

- `r`：半径
- `cx`：圆心`x`位置, 默认为 `0`
- `cy`：圆心`y`位置, 默认为 `0`

### `ellipse` 椭圆

```
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

SVG中`ellipse`元素用于绘制椭圆，是`circle`元素更通用的形式，含有`4`个基本属性用于控制椭圆的形状以及坐标，具体如下：

- `rx`：椭圆`x`半径
- `ry`：椭圆`y`半径
- `cx`：圆心`x`位置, 默认为 `0`
- `cy`：圆心`y`位置, 默认为 `0`

### `line` 直线

```
<line x1="10" x2="50" y1="110" y2="150"/>
```

`line`绘制直线。它取两个点的位置作为属性，指定这条线的起点和终点位置。

- `x1`：起点的`x`位置
- `y1`：起点的`y`位置
- `x2`：终点的`x`位置
- `y2`：终点的`y`位置

### `polyline` 折线

```
<polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>
```

`polyline`是一组连接在一起的直线。因为它可以有很多的点，折线的的所有点位置都放在一个`points`属性中：

```
points` 点集数列，每个数字用空白、逗号、终止命令符或者换行符分隔开，每个点必须包含`2`个数字，一个是`x`坐标，一个是`y`坐标 如`0 0, 1 1, 2 2
```

### `polygon` 多边形

```
<polygon points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"/>
```

`polygon`和折线很像，它们都是由连接一组点集的直线构成。不同的是，`polygon`的路径在最后一个点处自动回到第一个点。需要注意的是，矩形也是一种多边形，如果需要更多灵活性的话，你也可以用多边形创建一个矩形。

`points` 点集数列，每个数字用空白、逗号、终止命令符或者换行符分隔开，每个点必须包含`2`个数字，一个是`x`坐标，一个是`y`坐标 如`0 0, 1 1, 2 2`， 路径绘制完闭合图形”

## SVG path 路径

SVG 的[路径``](https://www.w3cplus.com/svg/svg-path.html)功能非常强大，它不仅能创建基本形状，还能创建更多复杂的形状。`<path>`路径是由一些命令来控制的，每一个命令对应一个字母，并且区分大小写，大写主要表示绝对定位，小写表示相对定位。`<path>` 通过属性 `d` 来定义路径， `d` 是一系列命令的集合，主要有以下几个命令：

![img](https://www.w3cplus.com/sites/default/files/blogs/2018/1801/svgpath2.png)

通常大部分形状，都可以通过指令`M(m)`、`L(l)`、`H(h)`、`V(v)`、`A(a)`来实现，注意特别要区分大小写，相对与绝对坐标情况，转换时推荐使用相对路径可减少代码量，例如：

```
// 以下两个等价
d='M 10 10 20 20'     // (10, 10) (20 20) 都是绝对坐标
d='M 10 10 L 20 20'

// 以下两个等价
d='m 10 10 20 20'     // (10, 10) 绝对坐标, (20 20) 相对坐标
d='M 10 10 l 20 20'
```

## SVG 基本形状路径转换原理

### rect to path

如下图所示，一个 `rect` 是由 `4` 个弧和 `4` 个线段构成；如果 `rect` 没有设置 `rx` 和 `ry` 则 `rect` 只是由 `4` 个线段构成。`rect` 转换为 `path` 只需要将 `A ~ H` 之间的弧和线段依次实现即可。

![img](https://www.w3cplus.com/sites/default/files/blogs/2018/1801/rect2path.png)

```
function rect2path(x, y, width, height, rx, ry) {
    /*
    * rx 和 ry 的规则是：
    * 1. 如果其中一个设置为 0 则圆角不生效
    * 2. 如果有一个没有设置则取值为另一个
    */
    rx = rx || ry || 0;
    ry = ry || rx || 0;

    //非数值单位计算，如当宽度像100%则移除
    if (isNaN(x - y + width - height + rx - ry)) return;
    rx = rx > width / 2 ? width / 2 : rx;
    ry = ry > height / 2 ? height / 2 : ry;

    //如果其中一个设置为 0 则圆角不生效
    if(0 == rx || 0 == ry){
        // var path =
        //     'M' + x + ' ' + y +
        //     'H' + (x + width) +     不推荐用绝对路径，相对路径节省代码量
        //     'V' + (y + height) +
        //     'H' + x +
        //     'z';
        var path =
            'M' + x + ' ' + y +
            'h' + width +
            'v' + height +
            'h' + -width +
            'z';                
    }else{
        var path =
            'M' + x + ' ' + (y+ry) +
            'a' + rx + ' ' + ry + ' 0 0 1 ' + rx + ' ' + (-ry) + 
            'h' + (width - rx - rx) +
            'a' + rx + ' ' + ry + ' 0 0 1 ' + rx + ' ' + ry + 
            'v' + (height - ry -ry) +
            'a' + rx + ' ' + ry + ' 0 0 1 ' + (-rx) + ' ' + ry + 
            'h' + (rx + rx -width) +
            'a' + rx + ' ' + ry + ' 0 0 1 ' + (-rx) + ' ' + (-ry) + 
            'z';        
    }
    return path;
}
```

### circle/ellipse to path

圆可视为是一种特殊的椭圆，即 `rx` 与 `ry` 相等的椭圆，所以可以放在一起讨论。 椭圆可以看成`A`点到`C`做`180`度顺时针画弧、`C`点到`A`做`180`度顺时针画弧即可：

![img](https://www.w3cplus.com/sites/default/files/blogs/2018/1801/ellipse2path.png)

```
function ellipse2path(cx, cy, rx, ry) {
    //非数值单位计算，如当宽度像100%则移除
    if (isNaN(cx - cy + rx - ry)) return;
    var path =
        'M' + (cx-rx) + ' ' + cy +
        'a' + rx + ' ' + ry + ' 0 1 0 ' + 2*rx + ' 0' +
        'a' + rx + ' ' + ry + ' 0 1 0 ' + (-2*rx) + ' 0' +
        'z'; 
    return path;
}
```

### line to path

相对来说比较简单，如下：

```
function line2path(x1, y1, x2, y2) {
    //非数值单位计算，如当宽度像100%则移除
    if (isNaN(x1 - y1 + x2 - y2)) return; 

    x1 = x1 || 0;
    y1 = y1 || 0;
    x2 = x2 || 0;
    y2 = y2 || 0;
    var path = 'M' + x1 + ' '+ y1 + 'L' + x2 + ' ' + y2;

    return path;
}
```

### polyline/polygon to path

`polyline`折线、`polygon`多边形的转换为`path`比较类似，差别就是`polygon`多边形会闭合。

```
// polygon折线转换
points = [x1, y1, x2, y2, x3, y3 ...];
function polyline2path (points) {
    var path = 'M' + points.slice(0,2).join(' ') +
                    'L' + points.slice(2).join(' '); 
    return path;
}
// polygon多边形转换
points = [x1, y1, x2, y2, x3, y3 ...];
function polygon2path (points) {
    var path = 'M' + points.slice(0,2).join(' ') +
                    'L' + points.slice(2).join(' ') + 'z'; 
    return path;
}
```

### SVG流动虚线

```html
<style>
    .water {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: run 10s linear infinite;
    }

    @keyframes run {
        from {
            stroke-dasharray: 10, 5;
        }
        to {
            stroke-dasharray: 20, 5;;
        }
    }
</style>

<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="100px">
  <rect x="0" y="0" width="300" height="100" fill="yellow" stroke-width="1" stroke="red" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animateMotion path="M 1306 637.125 L 1306 581.75 " dur="3s" repeatCount="indefinite" />
  </circle>
  <g fill="none" stroke="black" stroke-width="4">
    <path stroke-dasharray="5,5" d="M5 20 l215 0" class="water"/>
    <path stroke-dasharray="10,10" d="M5 40 l215 0" />
    <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" class="water" />
  </g>

</svg>
```

### SVG沿路径移动特效

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="lightgrey"
    d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

  <circle r="5" fill="red">
    <animateMotion dur="10s" repeatCount="indefinite"
      path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
  </circle>
</svg>
```


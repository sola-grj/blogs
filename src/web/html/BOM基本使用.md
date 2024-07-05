---
title: 'BOM基本使用'
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

## BOM

- 浏览器对象模型
- 把`浏览器`当作一个`对象`来看待
- BOM的顶级对象是window
- BOM学习的是浏览器窗口交互的一些对象
- BOM是浏览器厂商在各自浏览器上定义的，兼容性较差

### window

#### 窗口控制方法

- `moveBy(x,y)`：从当前位置水平移动窗体X个像素，垂直移动窗体y个像素，x为负数，将向左移动窗体 ，y为负数，将向上移动窗体
- `moveTo(x,y)`：移动窗体左上角到相对于屏幕左上角的(x,y)点
- `resizeBy(w,h)`：相对窗体当前的大小，宽度调整w个像素，高度调整h个像素。如果参数为负值，将缩小窗体，反之扩大窗体
- `resizeTo(w,h)`：将窗体调整为w个像素，高度调整为h个像素
- `scrollTo(x,y)`：如果有滚动条，将横向滚动条移动到相对于窗体宽度为X个像素的位置，将纵向滚动条移动到相对于窗体高度为y个像素的位置
- `scrollBy(x,y)`：如果有滚动条，将横向滚动条向左移动x个像素，将纵向滚动条向下移动y个像素

#### 打开新窗口

- `window.open()`：即可以导航到一个特定的URL，也可以打开一个新的浏览器窗口
- 如果`window.open()`传递了第二个参数，且该参数是已有窗口或者框架的名称，那么就会在目标窗口加载第一个参数指定的URL
- `window.open()`会返回新窗口的引用，也就是新窗口的`window`对象
- `window.close()`仅用于通过 `window.open()`打开的窗口。新建的`window`对象有一个`openr`属性，该属性指向打开他的原始窗口对象

### location

| 属性名   | 例子                                   | 说明                                 |
| -------- | -------------------------------------- | ------------------------------------ |
| hash     | "#contents"                            | url中#后面的字符，没有则返回空字符串 |
| host     | www.baidu.com:80                       | 服务器名称和端口号                   |
| hostname | www.baidu.com                          | 域名，不带端口号                     |
| href     | http://www.baidu,com:80/api/?name=sola | 完整URL                              |
| pathname | "/api"                                 | 服务器下面的文件路径                 |
| port     | 80                                     | url端口号 ，没有则为空               |
| protocol | http:                                  | 使用的协议                           |
| search   | ?name=sola                             | url的查询字符串，通常为?后面的内容   |

**注意**：除了hash之外，只要修改`location`的一个属性，就会导致页面重新加载URL。`location.reload()`，此方法可以重新刷新当前页面。这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载。如果要强制从服务器重新加载，传递一个参数`true`即可

### navigator

| 属性                                                         | 描述                                           |
| ------------------------------------------------------------ | ---------------------------------------------- |
| [appCodeName](https://www.w3school.com.cn/jsref/prop_nav_appcodename.asp) | 返回浏览器的代码名。                           |
| [appMinorVersion](https://www.w3school.com.cn/jsref/prop_nav_appminorversion.asp) | 返回浏览器的次级版本。                         |
| [appName](https://www.w3school.com.cn/jsref/prop_nav_appname.asp) | 返回浏览器的名称。                             |
| [appVersion](https://www.w3school.com.cn/jsref/prop_nav_appversion.asp) | 返回浏览器的平台和版本信息。                   |
| [browserLanguage](https://www.w3school.com.cn/jsref/prop_nav_browserlanguage.asp) | 返回当前浏览器的语言。                         |
| [cookieEnabled](https://www.w3school.com.cn/jsref/prop_nav_cookieenabled.asp) | 返回指明浏览器中是否启用 cookie 的布尔值。     |
| [cpuClass](https://www.w3school.com.cn/jsref/prop_nav_cpuclass.asp) | 返回浏览器系统的 CPU 等级。                    |
| [onLine](https://www.w3school.com.cn/jsref/prop_nav_online.asp) | 返回指明系统是否处于脱机模式的布尔值。         |
| [platform](https://www.w3school.com.cn/jsref/prop_nav_platform.asp) | 返回运行浏览器的操作系统平台。                 |
| [systemLanguage](https://www.w3school.com.cn/jsref/prop_nav_systemlanguage.asp) | 返回 OS 使用的默认语言。                       |
| [userAgent](https://www.w3school.com.cn/jsref/prop_nav_useragent.asp) | 返回由客户机发送服务器的 user-agent 头部的值。 |
| [userLanguage](https://www.w3school.com.cn/jsref/prop_nav_userlanguage.asp) | 返回 OS 的自然语言设置。                       |
| [javaEnabled()](https://www.w3school.com.cn/jsref/met_nav_javaenabled.asp) | 规定浏览器是否启用 Java。                      |
| [taintEnabled()](https://www.w3school.com.cn/jsref/met_nav_taintenabled.asp) | 规定浏览器是否启用数据污点 (data tainting)。   |

### screen

保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息，比如像素宽度和像素高度等

| 书写格式           | 功能说明                                         |
| ------------------ | ------------------------------------------------ |
| screen.width       | 屏幕分辨率的宽度，例如1024*768分辨率下宽度为1024 |
| screen.height      | 返回屏幕的高度                                   |
| screen.availWidth  | 屏幕中可用的宽                                   |
| screen.availHeight | 屏幕中可用的高                                   |
| screen.colorDepth  | 屏幕的色彩数                                     |
| screen.avaliLeft   | 没有被系统组件占用的屏幕最左侧像素（只读）       |
| screen.avaliTop    | 没有被系统组件占用的屏幕最顶端像素（只读）       |
| screen.height      | 屏幕像素高度                                     |
| screen.pixelDepth  | 屏幕的位深                                       |
| scree.top          | 当前屏幕顶端的像素距离                           |
| screen.orientation | 返回 Screen  Orientation API 中屏幕的朝向        |

### history

history对象主要用来操作浏览器URL的历史记录，可以通过参数向前，向后，或者向指定URL跳转

- history.go 接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转

  ```js
  history.go('baidu.com')
  // 当参数为整数数字时，正数表示向前跳转指定的页面，负数为向后跳转指定的页面
  history.go(3) // 向前跳转三个记录
  history.go(-1)// 向后跳转一个记录
  ```

- history.forward() 向前跳转一个页面
- history.back() 向后跳转一个 页面
- history.length 获取历史记录数
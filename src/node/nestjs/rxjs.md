---
title: rxjs
icon: gears
order: 4
category:
  - node
tag:
  - nestjs

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

**为什么要介绍 RxJs 应为 在 Nestjs 已经内置了 RxJs 无需安装 并且 Nestjs 也会有一些基于 Rxjs 提供的 API**

![](https://i-blog.csdnimg.cn/blog_migrate/bad96c04b0ce037e41833288d41356b5.png)

Rxjs 中文文档[Observable | RxJS 中文文档](https://cn.rx.js.org/class/es6/Observable.js~Observable.html "Observable | RxJS 中文文档")

####   概念

RxJs 使用的是[观察者模式](https://so.csdn.net/so/search?q=%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F&spm=1001.2101.3001.7020)，用来编写异步队列和事件处理。

[Observable](https://so.csdn.net/so/search?q=Observable&spm=1001.2101.3001.7020) 可观察的物件

Subscription 监听 Observable

Operators 纯函数可以处理管道的数据 如 map filter concat reduce 等

#### 案例

类似于迭代器 next 发出通知  complete 通知完成

subscribe 订阅   observable  发出的通知 也就是一个观察者

```ts
import { Observable } from "rxjs";

//类似于迭代器 next 发出通知 complete通知完成

const observable = new Observable((subscriber) => {
  subscriber.next(1);

  subscriber.next(2);

  subscriber.next(3);

  setTimeout(() => {
    subscriber.next(4);

    subscriber.complete();
  }, 1000);
});

observable.subscribe({
  next: (value) => {
    console.log(value);
  },
});
```

案例 2

interval 五百毫秒执行一次 pipe 就是管道的意思 管道里面也是可以去掉接口的支持处理异步数据 去处理数据 这儿展示 了 map  和 filter 跟数组的方法是一样的   最后 通过观察者   subscribe 接受回调

```ts
import { Observable, interval, take } from "rxjs";

import { map, filter, reduce, find, findIndex } from "rxjs/operators";

const subs = interval(500)
  .pipe(
    map((v) => ({ num: v })),
    filter((v) => v.num % 2 == 0)
  )
  .subscribe((e) => {
    console.log(e);

    if (e.num == 10) {
      subs.unsubscribe();
    }
  });
```

![](https://i-blog.csdnimg.cn/blog_migrate/76a1cf62176d19ba1e8f08f8a5310dde.png)

案例 3

Rxjs 也可以处理事件 不过我们在[Nestjs](https://so.csdn.net/so/search?q=Nestjs&spm=1001.2101.3001.7020) 里面就不用操作 DOM 了 你如果 Angular 或则 Vue 框架看可以使用   fromEvent

```typescript
import { Observable, interval, take, of, retry, fromEvent } from "rxjs";

import { map, filter, reduce, find, findIndex } from "rxjs/operators";

const dom = fromEvent(document, "click").pipe(map((e) => e.target));

dom.subscribe((e) => {});
```

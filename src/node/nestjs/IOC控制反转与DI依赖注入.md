---
title: IOC控制反转与DI依赖注入
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

在学习 nestjs 之前需要先了解其设计模式

### IOC

- Inversion of Control 字面意思是控制反转，具体定义是高层模块不应该依赖低层模块，二者都应该依赖其抽象；抽象不应该依赖细节；细节应该依赖抽象。

### DI

- 依赖注入（Dependency Injection）其实和 IoC 是同根生，这两个原本就是一个东西，只不过由于控制反转概念比较含糊（可能只是理解为容器控制对象这一个层面，很难让人想到谁来维护对象关系），所以 2004 年大师级人物 Martin Fowler 又给出了一个新的名字：“依赖注入”。 类 A 依赖类 B 的常规表现是在 A 中使用 B 的 instance。

案例未使用控制反转和依赖注入之前的代码

```ts
class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class B {
  age: number;
  entity: A;
  constructor(age: number) {
    this.age = age;
    this.entity = new A("sola");
  }
}

const c = new B(18);

c.entity.name;
```

我们可以看到，B 中代码的实现是需要依赖 A 的，两者的代码耦合度非常高。当两者之间的业务逻辑复杂程度增加的情况下，维护成本与代码可读性都会随着增加，并且很难再多引入额外的模块进行功能拓展。

为了解决这个问题可以使用 IOC 容器

```ts
class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class C {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
//中间件用于解耦
class Container {
  modeuls: any;
  constructor() {
    this.modeuls = {};
  }
  provide(key: string, modeuls: any) {
    this.modeuls[key] = modeuls;
  }
  get(key) {
    return this.modeuls[key];
  }
}

const mo = new Container();
mo.provide("a", new A("sola 1"));
mo.provide("c", new C("sola 2"));

class B {
  a: any;
  c: any;
  constructor(container: Container) {
    this.a = container.get("a");
    this.c = container.get("c");
  }
}

new B(mo);
```

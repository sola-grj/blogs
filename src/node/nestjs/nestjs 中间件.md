---
title: nestjs 中间件
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

#### 中间件

中间件是在路由处理程序  **之前**  调用的函数。 中间件函数可以访问请求和响应对象

中间件函数可以执行以下任务:

- 执行任何代码。
- 对请求和响应对象进行更改。
- 结束请求-响应周期。
- 调用堆栈中的下一个中间件函数。
- 如果当前的中间件函数没有结束请求-响应周期, 它必须调用  `next()`  将控制传递给下一个中间件函数。否则, 请求将被挂起。

#### 1.创建一个依赖注入中间件

要求我们实现 use 函数 返回 req res next 参数 如果不调用 next 程序将被[挂起](https://so.csdn.net/so/search?q=%E6%8C%82%E8%B5%B7&spm=1001.2101.3001.7020)

```ts
import { Injectable, NestMiddleware } from "@nestjs/common";

import { Request, Response, NextFunction } from "express";

@Injectable()
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req);

    next();
  }
}
```

使用方法 在模块里面 实现  configure 返回一个消费者   consumer 通过 apply 注册中间件 通过 forRoutes 指定   Controller 路由

```ts
import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";

import { UserService } from "./user.service";

import { UserController } from "./user.controller";

import { Logger } from "src/middleware";

@Module({
  controllers: [UserController],

  providers: [UserService],

  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).forRoutes("user");
  }
}
```

也可以指定 拦截的方法 比如拦截 GET  POST 等  forRoutes 使用对象配置

```ts
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from "@nestjs/common";

import { UserService } from "./user.service";

import { UserController } from "./user.controller";

import { Logger } from "src/middleware";

@Module({
  controllers: [UserController],

  providers: [UserService],

  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Logger)
      .forRoutes({ path: "user", method: RequestMethod.GET });
  }
}
```

你甚至可以直接吧  UserController 塞进去

```ts
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from "@nestjs/common";

import { UserService } from "./user.service";

import { UserController } from "./user.controller";

import { Logger } from "src/middleware";

@Module({
  controllers: [UserController],

  providers: [UserService],

  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).forRoutes(UserController);
  }
}
```

#### 2.全局中间件

注意全局中间件只能使用函数模式 案例可以做白名单拦截之类的

```ts
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

const whiteList = ["/list"];

function middleWareAll(req, res, next) {
  console.log(req.originalUrl, "我收全局的");

  if (whiteList.includes(req.originalUrl)) {
    next();
  } else {
    res.send("小黑子露出鸡脚了吧");
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(middleWareAll);

  await app.listen(3000);
}

bootstrap();
```

#### 3.接入第三方中间件 例如 cors 处理跨域

npm install cors

npm install @types/cors -D

```ts
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

import * as cors from "cors";

const whiteList = ["/user"];
function MiddleWareAll(req: Request, res: Response, next: NextFunction) {
  console.log(req.originalUrl);
  if (whiteList.includes(req.originalUrl)) {
    console.log("白名单");
    next();
  } else {
    res.send({ code: 500, msg: "请登录" });
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors());

  app.use(middleWareAll);

  await app.listen(3000);
}

bootstrap();
```

![全局中间件](/assets/images/node/nestjs/30.png)

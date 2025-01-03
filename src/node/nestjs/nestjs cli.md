---
title: nestjs cli
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

### 通过 cli 创建 nestjs 项目

```css
npm i -g @nestjs/cli
```

```csharp
nest new [项目名称]
```

启动项目 我们需要[热更新](https://so.csdn.net/so/search?q=%E7%83%AD%E6%9B%B4%E6%96%B0&spm=1001.2101.3001.7020) 就启动 npm run start:dev 就可以了

```csharp
"start": "nest start",

"start:dev": "nest start --watch",

"start:debug": "nest start --debug --watch",

"start:prod": "node dist/main",
```

### 目录介绍

1.main.ts 入口文件主文件 类似于 vue 的 main.ts

通过  NestFactory.create(AppModule) 创建一个 app  就是类似于绑定一个根组件 App.vue

app.listen(3000); 监听一个端口

```javascript
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();
```

2.Controller.ts 控制器

你可以理解成 vue 的路由

private readonly appService: AppService 这一行代码就是[依赖注入](https://so.csdn.net/so/search?q=%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5&spm=1001.2101.3001.7020)不需要实例化   appService 它内部会自己实例化的我们主需要放上去就可以了

```ts
import { Controller, Get } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

import { Controller, Get } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller("/get")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }
}
```

![hello world](/assets/images/node/nestjs/3.png)

3.app.service.ts

这个文件主要实现业务逻辑的 当然 Controller 可以实现逻辑，但是就是单一的无法复用，放到 app.service 有别的模块也需要就可以实现复用

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
```

### cli 常用命令

#### nest --help 可以查看 nestjs 所有的命令

他的命令和[angular](https://so.csdn.net/so/search?q=angular&spm=1001.2101.3001.7020)很像
![hello world](/assets/images/node/nestjs/4.png)

案例生成一个用户模块

#### 1.生成 controller.ts

```shell
nest g co user
```

#### 2.生成   module.ts

```shell
nest g mo user
```

#### 3.生成 service.ts

```shell
nest g s user
```

#### 以上步骤一个一个生成的太慢了我们可以直接使用一个命令生成[CURD](https://so.csdn.net/so/search?q=CURD&spm=1001.2101.3001.7020)

```shell
 nest g resource user
```

第一次使用这个命令的时候，除了生成文件之外还会自动使用  `npm`  帮我们更新资源，安装一些额外的插件，后续再次使用就不会更新了。

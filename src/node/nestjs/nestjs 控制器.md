---
title: nestjs 控制器
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

### Controller Request （获取前端传过来的参数）

[nestjs](https://so.csdn.net/so/search?q=nestjs&spm=1001.2101.3001.7020) 提供了方法参数装饰器 用来帮助我们快速获取参数 如下

<table><tbody><tr><td>@Request()</td><td>req&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</td></tr><tr><td>@Response()</td><td>res&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td></tr><tr><td>@Next()</td><td>next</td></tr><tr><td>@Session()</td><td>req.session</td></tr><tr><td>@Param(key?: string)&nbsp; &nbsp; &nbsp; &nbsp;</td><td><code>req.params</code>/<code>req.params[key]</code></td></tr><tr><td>@Body(key?: string)</td><td><code>req.body</code>/<code>req.body[key]</code></td></tr><tr><td>@Query(key?: string)</td><td><code>req.query</code>/<code>req.query[key]</code></td></tr><tr><td>@Headers(name?: string)&nbsp; &nbsp;</td><td><code>req.headers</code>/<code>req.headers[name]</code></td></tr><tr><td>@HttpCode</td><td></td></tr></tbody></table>

调试工具可以使用 postMan  ApiFox 等

下载地址  [Apifox - API 文档、调试、Mock、测试一体化协作平台 - 接口文档工具，接口自动化测试工具，接口 Mock 工具，API 文档工具，API Mock 工具，API 自动化测试工具](https://www.apifox.cn/?utm_source=baidu_sem1 "Apifox - API 文档、调试、Mock、测试一体化协作平台 -      接口文档工具，接口自动化测试工具，接口Mock工具，API文档工具，API      Mock工具，API自动化测试工具")

#### 1.获取 get 请求传参

可以使用 Request[装饰器](https://so.csdn.net/so/search?q=%E8%A3%85%E9%A5%B0%E5%99%A8&spm=1001.2101.3001.7020) 或者 Query 装饰器 跟 express 完全一样

![Request](/assets/images/node/nestjs/6.png)

也可以使用 Query 直接获取 不需要在通过 req.query 了

![Request](/assets/images/node/nestjs/7.png)

```typescript
// http://localhost:3000/user?name=sola
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  Request,
  Query,
} from "@nestjs/common";

import { UserService } from "./user.service";

import { CreateUserDto } from "./dto/create-user.dto";

import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Request() req) {
    console.log(req.query);

    return {
      code: 200,
      message: req.query.name,
    };
  }
  @Get()
  find(@Query() query) {
    console.log(query);

    return { code: 200 };
  }
}
```

#### 2.post 获取参数

可以使用 Request 装饰器 或者 Body 装饰器 跟 express 完全一样

![Request](/assets/images/node/nestjs/8.png)

或者直接使用 Body 装饰器

![Request](/assets/images/node/nestjs/10.png)

也可以直接读取 key

![Request](/assets/images/node/nestjs/9.png)

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  Request,
  Query,
} from "@nestjs/common";

import { UserService } from "./user.service";

import { CreateUserDto } from "./dto/create-user.dto";

import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Request() req) {
    console.log(req.body);

    return {
      code: 200,
      message: req.body.name,
    };
  }
  @Post()
  create(@Body() body) {
    console.log(body);

    return {
      code: 200,
      message: body.name,
    };
  }
  @Post()
  create(@Body("name") body) {
    console.log(body);

    return {
      code: 200,
      message: body,
    };
  }
}
```

#### 3.动态路由

可以使用 Request 装饰器 或者 Param 装饰器 跟 express 完全一样

![Request](/assets/images/node/nestjs/11.png)

![Request](/assets/images/node/nestjs/12.png)

```typescript
// http://localhost:3000/user/123
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  Request,
  Query,
} from "@nestjs/common";

import { UserService } from "./user.service";

import { CreateUserDto } from "./dto/create-user.dto";

import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  findId(@Request() req) {
    console.log(req.params);

    return {
      code: 200,
    };
  }

  @Get(":id")
  findId(@Param() params) {
    console.log(params);

    return {
      code: 200,
    };
  }
}
```

#### 4.读取 header 信息

![Request](/assets/images/node/nestjs/13.png)

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  Request,
  Query,
  Ip,
  Header,
  Headers,
} from "@nestjs/common";

import { UserService } from "./user.service";

import { CreateUserDto } from "./dto/create-user.dto";

import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  findId(@Param() params, @Headers() headers) {
    console.log(headers);

    return {
      code: 200,
      message: params.id,
    };
  }
}
```

#### 5.状态码

使用 HttpCode 装饰器 控制接口返回的状态码

![Request](/assets/images/node/nestjs/14.png)

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  Request,
  Query,
  Ip,
  Header,
  Headers,
  HttpCode,
} from "@nestjs/common";

import { UserService } from "./user.service";

import { CreateUserDto } from "./dto/create-user.dto";

import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  @HttpCode(500)
  findId(@Headers() header) {
    return {
      code: 500,
    };
  }
}
```

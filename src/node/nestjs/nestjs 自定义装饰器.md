---
title: nestjs 自定义装饰器
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

在[Nestjs](https://so.csdn.net/so/search?q=Nestjs&spm=1001.2101.3001.7020) 中我们使用了大量装饰器 decorator ，所以 Nestjs 也允许我们去自定义装饰器。

- nest g d [name]

####   案例 1 自定义权限[装饰器](https://so.csdn.net/so/search?q=%E8%A3%85%E9%A5%B0%E5%99%A8&spm=1001.2101.3001.7020)

生成装饰器

```shell
nest g d [name]
```

```ts
import { SetMetadata } from "@nestjs/common";

export const Role = (role: string[]) => {
  console.log(role, 1);

  return SetMetadata("role", role);
};
```

![管道](/assets/images/node/nestjs/44.png)

####   案例 2 自定义参数装饰器返回一个 url

```ts
import {
  SetMetadata,
  createParamDecorator,
  ExecutionContext,
  applyDecorators,
} from "@nestjs/common";

import type { Request } from "express";

export const ReqUrl = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request>();

    return req.url;
  }
);
```

---
title: nestjs 拦截器
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

## [响应拦截器](https://so.csdn.net/so/search?q=%E6%8B%A6%E6%88%AA%E5%99%A8&spm=1001.2101.3001.7020)

拦截器具有一系列有用的功能，这些功能受[面向切面编程](https://so.csdn.net/so/search?q=%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B&spm=1001.2101.3001.7020)（AOP）技术的启发。它们可以：

- 在函数执行之前/之后绑定**额外的逻辑**
- 转换从函数返回的结果
- **转换**从函数抛出的异常
- 扩展基本函数行为
- 根据所选条件完全重写函数 (例如, 缓存目的)

我们现在没有给我们的[Nestjs](https://so.csdn.net/so/search?q=Nestjs&spm=1001.2101.3001.7020) 规范返回给前端的格式现在比较乱

![](https://i-blog.csdnimg.cn/blog_migrate/5713a5d0ef28c5b0ca9d9425ad818346.png)

我们想给他返回一个标准的 json 格式 就要给我们的数据做一个全局 format

```ts
{

  data, //数据

  status:0,

  message:"成功",

  success:true

}
```

新建 common 文件夹 创建 response.ts

![](https://i-blog.csdnimg.cn/blog_migrate/505b75c7fee9eba2ef03ab35b402bcbc.png)

Nest Js 配合 Rxjs 格式化数据

```ts
import { Injectable, NestInterceptor, CallHandler } from "@nestjs/common";

import { map } from "rxjs/operators";

import { Observable } from "rxjs";

interface data<T> {
  data: T;
}

@Injectable()
export class Response<T = any> implements NestInterceptor {
  intercept(context, next: CallHandler): Observable<data<T>> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,

          status: 0,

          success: true,

          message: "牛逼",
        };
      })
    );
  }
}
```

在 main.ts 注册

```ts
app.useGlobalInterceptors(new Response());
```

## 全局异常[拦截器](https://so.csdn.net/so/search?q=%E6%8B%A6%E6%88%AA%E5%99%A8&spm=1001.2101.3001.7020)

common 下面新建 filter.ts

![](https://i-blog.csdnimg.cn/blog_migrate/76d8545d0c3e82fa5ef7bdf32c0f120c.png)

让我们创建一个异常过滤器，它负责捕获作为`HttpException`类实例的异常，并为它们设置自定义响应逻辑。为此，我们需要访问底层平台  `Request`和  `Response`。我们将访问`Request`对象，以便提取原始  `url`并将其包含在日志信息中。我们将使用  `Response.json()`方法，使用  `Response`对象直接控制发送的响应。

```ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";

import { Request, Response } from "express";

@Catch(HttpException)
export class HttpFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const request = ctx.getRequest<Request>();

    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();

    response.status(status).json({
      data: exception.message,

      time: new Date().getTime(),

      success: false,

      path: request.url,

      status,
    });
  }
}
```

注册全局异常过滤器

```ts
app.useGlobalFilters(new HttpFilter());
```

![](https://i-blog.csdnimg.cn/blog_migrate/7ec1b12f9cde09af409350dcaa7683f2.png)

![](https://i-blog.csdnimg.cn/blog_migrate/b362312e89238893a6523a64f023cfa0.png)

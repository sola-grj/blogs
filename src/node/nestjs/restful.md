---
title: restful风格设计
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

RESTful 是一种风格，在 RESTful 中，一切都被认为是资源，每个资源有对应的 URL 标识.

不是标准也不是协议，只是一种风格。当然你也可以不按照他的风格去写。

### 1.接口 url

**传统接口**

http://localhost:8080/api/get_list?id=1

http://localhost:8080/api/delete_list?id=1

http://localhost:8080/api/update_list?id=1

**RESTful 接口**

http://localhost:8080/api/get_list/1 查询 删除 更新

RESTful 风格一个接口就会完成 增删改差 他是通过不同的请求方式来区分的

查询 GET

提交 POST

更新 PUT PATCH

删除 DELETE

![crud](/assets/images/node/nestjs/5.png)

#### 2.RESTful 版本控制  

一共有三种我们一般用第一种 更加语义化

<table><tbody><tr><td><code>URI Versioning</code></td><td>版本将在请求的 URI 中传递（默认）</td></tr><tr><td><code>Header Versioning</code></td><td>自定义请求标头将指定版本</td></tr><tr><td><code>Media Type Versioning</code></td><td>请求的<code>Accept</code>标头将指定版本</td></tr></tbody></table>

```javascript
import { NestFactory } from "@nestjs/core";

import { VersioningType } from "@nestjs/common";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(3000);
}

bootstrap();
```

然后在 user.controller 配置版本

Controller 变成一个对象 通过 version 配置版本

```ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller({
  version: "1",
  path: "user",
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  // @Version('1')
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
```

![](https://i-blog.csdnimg.cn/blog_migrate/cf53bfde3574a5ddc8ccd9f0dc9acb7e.png)

####  3.Code 码规范

200 OK

[304](https://so.csdn.net/so/search?q=304&spm=1001.2101.3001.7020) Not Modified 协商缓存了

400 Bad Request 参数错误

401 [Unauthorized](https://so.csdn.net/so/search?q=Unauthorized&spm=1001.2101.3001.7020) token 错误

[403](https://so.csdn.net/so/search?q=403&spm=1001.2101.3001.7020) Forbidden referer origin 验证失败

404 Not Found 接口不存在

500 Internal Server Error 服务端错误

502 Bad Gateway 上游接口有问题或者服务器问题

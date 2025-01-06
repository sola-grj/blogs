---
title: session
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

#### 引言  

session 是服务器 为每个用户的浏览器创建的一个会话对象 这个 session 会记录到 浏览器的 cookie 用来区分用户

我们使用的是[nestjs](https://so.csdn.net/so/search?q=nestjs&spm=1001.2101.3001.7020) 默认框架 express 他也支持 express 的插件 所以我们就可以安装 express 的 session

```bash
npm i express-session --save
```

需要智能提示可以装一个声明依赖

```css
npm i @types/express-session -D
```

然后在 main.ts 引入 通过 app.use 注册 session

```cobol
import * as session from 'express-session'

app.use(session())
```

#### 参数配置详解

<table><tbody><tr><td>secret&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</td><td>生成服务端session 签名 可以理解为加盐</td></tr><tr><td>name&nbsp; &nbsp; &nbsp;</td><td>生成客户端cookie 的名字 默认&nbsp;connect.sid</td></tr><tr><td>cookie&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td><td>设置返回到前端 key 的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }。</td></tr><tr><td>rolling</td><td>在每次请求时强行设置 cookie，这将重置 cookie 过期时间(默认:false)</td></tr></tbody></table>

nestjs 配置

```ts
import { NestFactory } from "@nestjs/core";

import { VersioningType } from "@nestjs/common";

import { AppModule } from "./app.module";

import * as session from "express-session";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.use(
    session({
      secret: "XiaoMan",
      name: "xm.session",
      rolling: true,
      cookie: { maxAge: null },
    })
  );

  await app.listen(3000);
}

bootstrap();
```

#### 验证码案例  

前端 [vue3](https://so.csdn.net/so/search?q=vue3&spm=1001.2101.3001.7020) ts element\-plus fetch

安装 element

```coffeescript
npm install element-plus -S
```

然后简单的绘制页面

```vue
<template>
  <div class="wraps">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>

      <el-form-item label="密码">
        <el-input type="password" v-model="formLabelAlign.password" />
      </el-form-item>

      <el-form-item label="验证码">
        <div style="display:flex">
          <el-input v-model="formLabelAlign.code" />

          <img @click="resetCode" :src="codeUrl" alt="" />
        </div>
      </el-form-item>

      <el-form-item>
        <el-button @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

const codeUrl = ref<string>("/api/user/code");

const resetCode = () => (codeUrl.value = codeUrl.value + "?" + Math.random());

const labelPosition = ref<string>("right");

const formLabelAlign = reactive({
  name: "",

  password: "",

  code: "",
});

const submit = async () => {
  await fetch("/api/user/create", {
    method: "POST",

    body: JSON.stringify(formLabelAlign),

    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());
};
</script>

<style>
* {
  padding: 0;

  margin: 0;
}

.wraps {
  display: flex;

  justify-content: center;

  align-items: center;

  height: inherit;
}

html,
body,
#app {
  height: 100%;
}
</style>
```

![](https://i-blog.csdnimg.cn/blog_migrate/28d45e9c54e162075bf9622ff2424381.png)

我们可以看到   session 已经存到了浏览器

![](https://i-blog.csdnimg.cn/blog_migrate/5833ceddec88e950e6023e65b6487211.png)

跨域我用了本地 dev 解决的

```cobol
proxy:{

'/api':{

target:'http://localhost:3000/',

changeOrigin:true,

rewrite: path => path.replace(/^\/api/, ''),

}

}
```

后端 nestjs  验证码插件  svgCaptcha

```coffeescript
npm install svg-captcha -S
```

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Request,
  Query,
  Headers,
  HttpCode,
  Res,
  Req,
} from "@nestjs/common";

import { UserService } from "./user.service";

import { CreateUserDto } from "./dto/create-user.dto";

import { UpdateUserDto } from "./dto/update-user.dto";

import * as svgCaptcha from "svg-captcha";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("code")
  createCaptcha(@Req() req, @Res() res) {
    const captcha = svgCaptcha.create({
      size: 4,

      fontSize: 50,

      width: 100,

      height: 34,

      background: "#cc9966",
    });

    req.session.code = captcha.text;

    res.type("image/svg+xml");

    res.send(captcha.data);
  }

  @Post("create")
  createUser(@Req() req, @Body() body) {
    console.log(req.session.code, body);

    if (
      req.session.code.toLocaleLowerCase() === body?.code?.toLocaleLowerCase()
    ) {
      return {
        message: "验证码正确",
      };
    } else {
      return {
        message: "验证码错误",
      };
    }
  }
}
```

![](https://i-blog.csdnimg.cn/blog_migrate/2331c78925dccc5d1a490f98f296a9a4.png)

---
title: nestjs 文件上传
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

#### 1.主要会用到两个包

[multer](https://so.csdn.net/so/search?q=multer&spm=1001.2101.3001.7020)   @nestjs/platform-express **nestJs 自带了**

multer   @types/multer 这两个需要安装

在 upload  Module 使用 MulterModule register 注册存放图片的目录

需要用到   multer 的   diskStorage 设置存放目录  extname 用来读取文件后缀 filename 给文件重新命名

![全局中间件](/assets/images/node/nestjs/31.png)

```ts
import { Module } from "@nestjs/common";

import { UploadService } from "./upload.service";

import { UploadController } from "./upload.controller";

import { MulterModule } from "@nestjs/platform-express";

import { diskStorage } from "multer";

import { extname, join } from "path";

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: join(__dirname, "../images"),

        filename: (_, file, callback) => {
          const fileName = `${
            new Date().getTime() + extname(file.originalname)
          }`;

          return callback(null, fileName);
        },
      }),
    }),
  ],

  controllers: [UploadController],

  providers: [UploadService],
})
export class UploadModule {}
```

#### 2.controller 使用

使用  UseInterceptors [装饰器](https://so.csdn.net/so/search?q=%E8%A3%85%E9%A5%B0%E5%99%A8&spm=1001.2101.3001.7020)  FileInterceptor 是单个 读取字段名称   FilesInterceptor 是多个

参数 使用  UploadedFile 装饰器接受 file 文件

![全局中间件](/assets/images/node/nestjs/32.png)

```ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";

import { UploadService } from "./upload.service";

import { FileInterceptor } from "@nestjs/platform-express";

@Controller("upload")
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post("album")
  @UseInterceptors(FileInterceptor("file"))
  upload(@UploadedFile() file) {
    console.log(file);

    return true;
  }
}
```

#### 3.生成静态目录访问上传之后的图片

useStaticAssets prefix 是虚拟前缀

```ts
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

import { NestExpressApplication } from "@nestjs/platform-express";

import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, "images"), {
    prefix: "/sola",
  });

  await app.listen(3000);
}

bootstrap();
```

![全局中间件](/assets/images/node/nestjs/33.png)

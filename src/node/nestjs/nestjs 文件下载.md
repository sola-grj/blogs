---
title: nestjs 文件下载
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

下载文件的方式有好多种

#### 1.download 直接下载

这个文件信息应该存数据库 演示就写死 了

```ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Res,
} from "@nestjs/common";

import { UploadService } from "./upload.service";

import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";

import type { Response } from "express";

import { join } from "path";

@Controller("upload")
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post("album")
  @UseInterceptors(FileInterceptor("file"))
  upload(@UploadedFile() file) {
    console.log(file, "file");

    return "峰峰35岁憋不住了";
  }

  @Get("export")
  downLoad(@Res() res: Response) {
    const url = join(__dirname, "../images/1662894316133.png");

    res.download(url);
  }
}
```

![全局中间件](/assets/images/node/nestjs/34.png)

####  2.使用文件流的方式下载

可以使用 compressing 把他压缩成一个 zip 包

import {zip} from 'compressing'

```ts
@Get('stream')

async down (@Res() res:Response) {

  const url = join(__dirname,'../images/1662894316133.png')

  const tarStream = new zip.Stream()

  await tarStream.addEntry(url)

  res.setHeader('Content-Type', 'application/octet-stream');

  res.setHeader(

  'Content-Disposition',

  `attachment; filename=xiaoman`,

  );

  tarStream.pipe(res)

}
```

前端接受流

- 前端也可以使用 file-saver 第三方插件进行文件下载

```ts
const useFetch = async (url: string) => {
  const res = await fetch(url).then((res) => res.arrayBuffer());

  console.log(res);

  const a = document.createElement("a");

  a.href = URL.createObjectURL(
    new Blob([res], {
      // type:"image/png"
    })
  );

  a.download = "xiaman.zip";

  a.click();
};

const download = () => {
  useFetch("http://localhost:3000/upload/stream");
};
```

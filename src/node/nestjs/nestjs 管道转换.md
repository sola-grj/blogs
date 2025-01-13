---
title: nestjs 管道转换
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

![管道](/assets/images/node/nestjs/35.png)
管道 可以做两件事

1.转换，可以将前端传入的数据转成成我们需要的数据

2.验证 类似于前端的 rules 配置验证规则

我们先来讲一下转换 [Nestjs](https://so.csdn.net/so/search?q=Nestjs&spm=1001.2101.3001.7020) 提供了八个内置转换 API

- `ValidationPipe`
- `ParseIntPipe`
- `ParseFloatPipe`
- `ParseBoolPipe`
- `ParseArrayPipe`
- `ParseUUIDPipe`
- `ParseEnumPipe`
- `DefaultValuePipe`

#### 案例 1 我们接受的动态参数希望是一个 number 类型 现在是 string 

这时候就可以通过内置的管道 去做转换

![管道](/assets/images/node/nestjs/36.png)

####   案例 2 验证 UUID

安装 uuid

npm install uuid -S

npm install @types/uuid -D

生成一个 uuid

![管道](/assets/images/node/nestjs/37.png)

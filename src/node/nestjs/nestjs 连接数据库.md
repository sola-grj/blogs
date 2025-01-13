---
title: nestjs 连接数据库
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

####  1.ORM 框架（typeOrm）

typeOrm  是  `TypeScript`  中最成熟的对象关系映射器( `ORM` )。因为它是用  `TypeScript`  编写的，所以可以很好地与  `Nest`  框架集成

安装依赖

```scss
npm install --save @nestjs/typeorm typeorm mysql2
```

如果使用的是 vsCode 安装数据库可视化工具

![数据库](/assets/images/node/nestjs/58.png)

在 app.module.ts 注册

![数据库](/assets/images/node/nestjs/59.png)

```ts
TypeOrmModule.forRoot({

type: "mysql", //数据库类型

username: "root", //账号

password: "123456", //密码

host: "localhost", //host

port: 3306, //

database: "portal", //库名

entities: [__dirname + '/**/*.entity{.ts,.js}'], //实体文件

synchronize:true, //synchronize字段代表是否自动将实体类同步到数据库

retryDelay:500, //重试连接数据库间隔

retryAttempts:10,//重试连接数据库的次数

autoLoadEntities:true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中

}),
```

定义实体

```ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Guard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
```

![数据库](/assets/images/node/nestjs/60.png)

关联实体

```scss
 TypeOrmModule.forFeature([Guard])
```

![数据库](/assets/images/node/nestjs/61.png)

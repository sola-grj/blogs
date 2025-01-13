---
title: nestjs 管道验证DTO
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

### 1.先创建一个验证管道

- nest g pi 文件名字
  ![验证管道](/assets/images/node/nestjs/38.png)

### 2.安装验证器

```shell
npm i --save class-validator class-transformer
```

```ts
import { IsNotEmpty, IsString, Length, IsNumber } from "class-validator";

export class CreateLoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(5, 10, {
    message: "Name must be between 5 and 10 characters long",
  })
  name: string;
  @IsNumber()
  age: number;
}
```

### 3.使用管道和定义类型

![使用管道](/assets/images/node/nestjs/39.png)

### 4.实现验证 transform

- value 就是 前端传过来的数据 metaData 就是元数据 通过 metatype 可以去实例化这个类
- 实例化 DTO
- 通过 validate 验证 DTO 返回一个 promise 的错误信息 如果有错误抛出

```ts
import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
@Injectable()
export class LoginPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const dto = plainToInstance(metadata.metatype, value);
    const errors = await validate(dto);
    if (errors.length) {
      const messages = errors.map((err) => {
        return `${err.property} - ${Object.values(err.constraints).join(", ")}`;
      });
      throw new HttpException(errors, HttpStatus.BAD_REQUEST);
    }
    console.log("=======", value, errors, dto);

    return value;
  }
}
```

### 5.注册全局 DTO 验证管道

![注册全局管道](/assets/images/node/nestjs/40.png)

![验证管道](/assets/images/node/nestjs/41.png)

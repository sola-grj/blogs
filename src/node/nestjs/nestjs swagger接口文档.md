---
title: nestjs swagger接口文档
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

[swagger](https://so.csdn.net/so/search?q=swagger&spm=1001.2101.3001.7020) 用于提供给前端接口文档

安装命令如下

```shell
npm install @nestjs/swagger swagger-ui-express
```

#### 在 main.ts 注册 swagger

```ts
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle("sola api")
    .setDescription("nice~")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup("/api-docs", app, document);

  await app.listen(3000);
}

bootstrap();
```

![swagger](/assets/images/node/nestjs/45.png)

打开对应的路径即可

![swagger](/assets/images/node/nestjs/46.png)

现在发现并没有分组很乱

#### 可以使用 ApiTags 添加分组

![swagger](/assets/images/node/nestjs/47.png)

####  ApiOperation 接口描述

```ts
@Get()

@Role('admin')

@ApiOperation({summary:"测试admin",description:"请求该接口需要amdin权限"})

findAll(@ReqUrl('123') url:string) {

console.log(url,'url')

return this.guardService.findAll();

}
```

![swagger](/assets/images/node/nestjs/48.png)

####  ApiParam 动态参数描述

```ts
@ApiParam({name:"id",description:"用户id",required:true})
```

![swagger](/assets/images/node/nestjs/49.png)

####  ApiQuery 修饰 get

```ts
 @ApiQuery({name:"xxxx",description:"bbb"})
```

![swagger](/assets/images/node/nestjs/50.png)

####  ApiProperty 定义 Post

```ts
import { ApiProperty } from "@nestjs/swagger";

export class CreateGuardDto {
  @ApiProperty({ description: "姓名", example: "小满" })
  name: string;

  @ApiProperty({ description: "年龄" })
  age: number;
}
```

![swagger](/assets/images/node/nestjs/51.png)

####  ApiResponse 自定义返回信息

```ts
@ApiResponse({status:403,description:"自定义返回信息"})
```

![swagger](/assets/images/node/nestjs/52.png)

#### ApiBearerAuth  **jwt token**

main.ts 增加  addBearerAuth()

![swagger](/assets/images/node/nestjs/53.png)
![swagger](/assets/images/node/nestjs/54.png)

添加 token!
![swagger](/assets/images/node/nestjs/55.png)
![swagger](/assets/images/node/nestjs/56.png)

请求头携带了

#### 其他装饰器  

![swagger](/assets/images/node/nestjs/57.png)

---
title: webpack相关
icon: gears
order: 4
category:
  - web
tag:
  - js

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
# webpack

# 一、Webpack 简介

## 1.1 webpack 是什么

webpack 是一种**前端资源构建工具**，一个静态模块打包器(module bundler)。

在webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。
它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)。

## 1.2 webpack 五个核心概念

#### 1.2.1 Entry

入口(Entry)：指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。

#### 1.2.2 Output

输出(Output)：指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。

#### 1.2.3 Loader

Loader：让 webpack 能够去处理那些非 JS 的文件，比如样式文件、图片文件(webpack 自身只理解
JS)

#### 1.2.4 Plugins

插件(Plugins)：可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，
一直到重新定义环境中的变量等。

#### 1.2.5 Mode

模式(Mode)：指示 webpack 使用相应模式的配置。

| 选项        | 描述                                                         | 特点                       |
| ----------- | ------------------------------------------------------------ | -------------------------- |
| development | 会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。 | 能让代码本地调试运行的环境 |
| production  | 会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。 | 能让代码优化上线运行的环境 |

# 二、Webpack 初体验

## 2.1 初始化配置

1. 初始化 package.json：npm init

2. 下载安装webpack：(webpack4以上的版本需要全局/本地都安装webpack-cli)

   全局安装：cnpm i webpack webpack-cli -g

   本地安装：cnpm i webpack webpack-cli -D

当前版本：

- webpack: 5.62.1
- webpack-cli: 4.9.1

## 2.2 编译打包应用

创建 src 下的 js 等文件后，不需要配置 webpack.config.js 文件，在命令行就可以编译打包。

指令：

- 开发环境：webpack ./src/index.js -o ./build/built.js --mode=development

  webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js 整体打包环境，是开发环境

- 生产环境：webpack ./src/index.js -o ./build/built.js --mode=production

  webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js 整体打包环境，是生产环境

结论：

1. webpack 本身能处理 js/json 资源，不能处理 css/img 等其他资源
2. 生产环境和开发环境将 ES6 模块化编译成浏览器能识别的模块化，但是不能处理 ES6 的基本语法转化为 ES5（需要借助 loader）
3. 生产环境比开发环境多一个压缩 js 代码

# 三、Webpack 开发环境的基本配置

webpack.config.js 是 webpack 的配置文件。

作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

所有构建工具都是基于 nodejs 平台运行的，模块化默认采用 commonjs。

开发环境配置主要是为了能让代码运行。主要考虑以下几个方面：

在 webpack 5 之前，通常使用：

- [`raw-loader`](https://v4.webpack.js.org/loaders/raw-loader/) 将文件导入为字符串
- [`url-loader`](https://v4.webpack.js.org/loaders/url-loader/) 将文件作为 data URI 内联到 bundle 中
- [`file-loader`](https://v4.webpack.js.org/loaders/file-loader/) 将文件发送到输出目录

资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：

- `asset/resource` 发送一个单独的文件并导出 URL。之前通过使用 `file-loader` 实现。
- `asset/inline` 导出一个资源的 data URI。之前通过使用 `url-loader` 实现。
- `asset/source` 导出资源的源代码。之前通过使用 `raw-loader` 实现。
- `asset` 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 `url-loader`，并且配置资源体积限制实现。

### 打包样式资源

- npm i css-loader style-loader less-loader -D

```js
/*
webpack.config.js  webpack的配置文件
  作用：指示webpack干哪些活

  所有的构建工具都是基于nodejs平台运行的模块化 默认采用commonjs
* */
// 用来拼接绝对路径的方法
const {resolve} = require('path')

module.exports = {
  // webpack配置
  // 入口文件
  entry: './src/index.js',
  output: {
    //  输出文件名
    filename: 'built.js',
    // 输出路径
    // __dirname nodejs的变量  代表当前文件所在目录的绝对路径
    path: resolve(__dirname, 'build')
  },
  // loader的配置
  module: {
    rules: [
      // 详细loader配置
      // 不同文件必须配置不同loader配置
      {
        //  匹配那些文件
        test:/\.css$/,
        // 使用哪些loader
        use:[
            // use数组中loader执行顺序：从右到左，从下到上
            // 创建style标签，将js中的样式资源插入到head中生效
            'style-loader',
            //  将css文件变成commonjs模块加载js中，里面内容是 样式字符串
            'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader',
            // 将less文件编译成css文件
            'less-loader'
        ]
      }
    ]
  },
  // plugins的二配置
  plugins: [],
  // 模式
  mode: 'development',
  // mode:'production',
}
```

### 打包 html 资源

- npm i html-webpack-plugin -D

```js
/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "built.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader的配置
    ]
  },
  plugins: [
    //plugins的配置
    //html-webpack-plugin
      // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
      // 需要有结构的HTML文件
    new HtmlWebpackPlugin({
      // 复制 './src/index.html' 文件,自动引入打包输出的所有资源（JS/CSS）
      template: "./src/index.html"
    })
  ],
  mode: 'development'
}
```

### 打包图片资源

webpack5以下

- npm i url-laoder file-loader -D

```js
/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bulit.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        // 要使用多个 loader处理使用use
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      //webpack5以下 处理图片资源
      {
        test: /\.(jpg|png|gif)$/,
        // 使用一个loader
        // 下载 url-laoder file-loader
        loader: "url-loader",
        options: {
          // 图片大小小于8kb，就会被base64处理
          // 优点：减少请求数量（减轻服务器压力）
          //  缺点：图片体积变大（文件请求速度变慢）
          limit:8*1024,
          // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是common.js
          //  解析时会出现问题：[object Moudule]
          // 解决：关闭url-loader的 es6模块化，使用commonjs解析
          esModule:false
        }
      },
      // 处理html中的img标签
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  mode: "development"
}
```

webpack5

```js
/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bulit.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        // 要使用多个 loader处理使用use
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // webpack5 处理图片资源
      {
        test: /\.(jpg|png|gif)$/,
        type: "asset",
        //解析
        parser: {
          //转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          }
        },
                    // [hash:6] 取图片哈希值的前十位
          // [ext] 取文件原来扩展名
        generator: {
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          filename: 'img/[name].[hash:6][ext]',
          //打包后对资源的引入，文件命名已经有/img了
          publicPath: './'
        },
      },
      // 处理html中的img标签
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  mode: "development"
}
```

### 打包其他资源

```js
/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bulit.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
        // 打包其他资源(除了 html、js\css资源以外的资源)
      {
        // 排除 css/js/html资源
        exclude: /\.(css|js|html)$/,
          // webpack5以下使用方式
        // loader: "file-loader"
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  mode: "development"
}
```

### devServer

- npm i webpack-dev-server -D

```js
/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bulit.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
        // 打包其他资源(除了 html、js\css资源以外的资源)
      {
        // 排除 css/js/html资源
        exclude: /\.(css|js|html)$/,
        // loader: "file-loader"
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  mode: "development",

  // 开发服务器 devServer 用来自动化（自动化编译，自动打开浏览器，自动刷新浏览器）
  // 特点：只会在内存中编译打包，不会有任何输出
  // 启动devServer指令为：npx webpack serve
  devServer: {
    static: {
      directory: resolve(__dirname, 'build'),
    },
    // 启动 gzip压缩
    compress:true,
    // 端口号
    port:3000,
    // 自动打开浏览器
    open:true
  }
}
```

下面是一个简单的开发环境webpack.confg.js配置文件

```js
/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    // 指定打包好的入口文件输出位置
    filename: "js/bulit.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        // 配置css
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 配置less
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        type: "asset",
        //解析
        parser: {
          //转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          }
        },
        // [hash:6] 取图片哈希值的前十位
        // [ext] 取文件原来扩展名
        generator: {
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          filename: 'img/[name].[hash:6][ext]',
          //打包后对资源的引入，文件命名已经有/img了
          publicPath: './'
        },
      },
      {
        // 处理html中的img标签
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        // 打包其他资源(除了 html、js\css资源以外的资源)
        // 排除 css/js/html资源
        exclude: /\.(css|js|html|less|jpg|png|gif)$/,
        // loader: "file-loader"
        type: "asset/resource",
        generator: {
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          filename: 'media/[name].[hash:6][ext]',
          //打包后对资源的引入，文件命名已经有/img了
          publicPath: './'
        },
      }
    ]
  },
  plugins: [
    // 打包 html资源
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  // 配置开发环境
  mode: "development",

  // 开发服务器 devServer 用来自动化（自动化编译，自动打开浏览器，自动刷新浏览器）
  // 特点：只会在内存中编译打包，不会有任何输出
  // 启动devServer指令为：npx webpack serve
  devServer: {
    static: {
      directory: resolve(__dirname, 'build'),
    },
    // 启动 gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true
  }
}
```

其中，大部分配置都在注释中给出解释。

- 运行项目的两个指令：
  webpack 会将打包结果输出出去（build文件夹）
  npx webpack-dev-server 只会在内存中编译打包，没有输出

- loader 和 plugin 的不同：（plugin 一定要先引入才能使用）

  loader：1. 下载 2. 使用（配置 loader）

  plugins：1.下载 2. 引入 3. 使用

# 四、Webpack 生产环境的基本配置

而生产环境的配置需要考虑以下几个方面：

### 提取 css 成单独文件

- npm i mini-css-extract-plugin -D

```js
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// npm i mini-css-extract-plugin -D
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 创建style标签，将样式放入
          // 'style-loader',
          // 这个loader取代style-loader 作用：提取 js中的css成单独文件
          MiniCssExtractPlugin.loader,
          // 将css文件整合到js文件中
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    })
  ],
  mode: "development",
}
```

### css 兼容性处理（webpack5）

- npm i postcss postcss-loader postcss-preset-env -D

```js
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// npm i mini-css-extract-plugin -D
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 设置nodejs 的环境变量
// process.env.NODE_ENV = 'development'
// npm i postcss postcss-loader postcss-preset-env -D
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 创建style标签，将样式放入
          // 'style-loader',
          // 这个loader取代style-loader 作用：提取 js中的css成单独文件
          MiniCssExtractPlugin.loader,
          // 将css文件整合到js文件中
          'css-loader',
          /*
          *   css兼容性处理： postcss ——> postcss-loader postcss-preset-env
          *
          *   帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式 package.json中配置browserslist
          *
          *   "browserslist": {
                "development": [
                  "last 1 chrome version",
                  "last 1 firefox version",
                  "last 1 safari version"
                ],
                "production": [
                  ">0.2%",
                  "not dead",
                  "not op_mini all"
                ]
              }
          *
          *
          *             * */
          // 使用loader的默认配置
          // 'postcss-loader',
          // 修改loader配置
          {
            loader: "postcss-loader",
            options: {
              postcssOptions:{
                plugins: [
                    'postcss-preset-env'
                ]
              },
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    })
  ],
  mode: "development",
}
```

### 压缩 css

- npm i optimize-css-assets-webpack-plugin -D

```js
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// npm i mini-css-extract-plugin -D
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
// 设置nodejs 的环境变量
// process.env.NODE_ENV = 'development'
// css兼容性loader   npm i postcss postcss-loader postcss-preset-env -D
// css压缩  npm i optimize-css-assets-webpack-plugin -D
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 创建style标签，将样式放入
          // 'style-loader',
          // 这个loader取代style-loader 作用：提取 js中的css成单独文件
          MiniCssExtractPlugin.loader,
          // 将css文件整合到js文件中
          'css-loader',
          /*
          *   css兼容性处理： postcss ——> postcss-loader postcss-preset-env
          *
          *   帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式
          *
          *   "browserslist": {
                "development": [
                  "last 1 chrome version",
                  "last 1 firefox version",
                  "last 1 safari version"
                ],
                "production": [
                  ">0.2%",
                  "not dead",
                  "not op_mini all"
                ]
              }
          *
          *
          *             * */
          // 使用loader的默认配置
          // 'postcss-loader',
          // 修改loader配置
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                ]
              },
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin()
  ],
  mode: "development",
}
```

### js 语法检查

- npm i eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import -D

```js
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "js/build.js",
    path: resolve(__dirname,'build')
  },
  module: {
    rules: [
        /*
        webpack5 以下版本
        * 语法检查：eslint eslint-loader
        * 注意：只检查 自己写的代码，第三方库不用检查
        * 设置检查规则：
        *   package.json中 配置eslintConfig
        *   "eslintConfig": {
              "extends": "airbnb-base"
            }
        *   aribnb eslint eslint-config-airbnb-base eslint-plugin-import
        *
        * */
      // {
      //   test: /\.js$/,
      //   loader: "eslint-loader",
      //   exclude: /node_modules/,
      //   options: {
      //     // 自动修复eslint 的错误
      //     fix:true
      //   }
      // }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      /*
      * webpack5
      * npm i eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import -D
      package.json中配置
      *"eslintConfig": {
            "extends": "airbnb-base",
            #！！！！如果没使用alias下面的不用配置！！！！！
            "settings": {
              "import/resolver": {
                "webpack": {
                  "config": "webpack.config.js"
                }
              }
            }
          }
      * */
      new ESLintPlugin({
        fix: true,
        extensions: ['js', 'json', 'coffee'],
        exclude: '/node_modules/'
      })
  ],
  mode: "development"
}
```

### js 兼容性处理

1. 基本js兼容性处理

   - npm i babel-loader @babel/core @babel/preset-env -D

   ```js
   const {resolve} = require('path')
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   const ESLintPlugin = require('eslint-webpack-plugin');
   module.exports = {
     // 全部js兼容性处理——> @babel/polyfill
     entry: './src/index.js',
     output: {
       filename: "js/build.js",
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         /*
         * js兼容性处理：babel-loader @babel/core @babel/preset-env
         * 1. 基本js兼容性处理——> @babel/preset-env  问题：只能转换基本语法 ，例如promise不能转换
         * 2. 全部js兼容性处理——> @babel/polyfill  问题：只要解决部分 兼容性问题 ，但是将所有兼容性代码全部引入，体积太大了
         * 3. 需要做兼容性处理的就做按需加载 ——> corejs
         * */
         {
           test: /\.js$/,
           exclude: /node_modules/,
           loader: "babel-loader",
           options: {
             // 预设：指示babel做怎么样的兼容性处理
             presets: [
               [
                 '@babel/preset-env',
               ]
             ]
           }
         }
       ]
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: "./src/index.html"
       }),
       /*
       * webpack5
       * npm i eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import -D
       *"eslintConfig": {
             "extends": "airbnb-base",
             #！！！！如果没使用alias下面的不用配置！！！！！
             "settings": {
               "import/resolver": {
                 "webpack": {
                   "config": "webpack.config.js"
                 }
               }
             }
           }
       * */
       new ESLintPlugin({
         fix: true,
         extensions: ['js', 'json', 'coffee'],
         exclude: '/node_modules/'
       })
     ],
     mode: "development"
   }
   ```

2. 全部js兼容性处理

   - npm i @babel/polyfill -D

   ```js
   const {resolve} = require('path')
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   const ESLintPlugin = require('eslint-webpack-plugin');
   module.exports = {
     // 全部js兼容性处理——> @babel/polyfill
      entry: ['@babel/polyfill','./src/index.js'],
     output: {
       filename: "js/build.js",
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         /*
         * js兼容性处理：babel-loader @babel/core @babel/preset-env
         * 1. 基本js兼容性处理——> @babel/preset-env  问题：只能转换基本语法 ，例如promise不能转换
         * 2. 全部js兼容性处理——> @babel/polyfill  问题：只要解决部分 兼容性问题 ，但是将所有兼容性代码全部引入，体积太大了
         * 3. 需要做兼容性处理的就做按需加载 ——> corejs
         * */
         {
           test: /\.js$/,
           exclude: /node_modules/,
           loader: "babel-loader",
           options: {
             // 预设：指示babel做怎么样的兼容性处理
             presets: [
               [
                 '@babel/preset-env',
               ]
             ]
           }
         }
       ]
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: "./src/index.html"
       }),
       /*
       * webpack5
       * npm i eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import -D
       *"eslintConfig": {
             "extends": "airbnb-base",
             #！！！！如果没使用alias下面的不用配置！！！！！
             "settings": {
               "import/resolver": {
                 "webpack": {
                   "config": "webpack.config.js"
                 }
               }
             }
           }
       * */
       new ESLintPlugin({
         fix: true,
         extensions: ['js', 'json', 'coffee'],
         exclude: '/node_modules/'
       })
     ],
     mode: "development"
   }
   ```

3. 按需加载兼容性处理

   - npm i core-js -D

   ```js
   const {resolve} = require('path')
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   const ESLintPlugin = require('eslint-webpack-plugin');
   module.exports = {
     // 全部js兼容性处理——> @babel/polyfill
     // entry: ['@babel/polyfill','./src/index.js'],
     entry: './src/index.js',
     output: {
       filename: "js/build.js",
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         /*
         * js兼容性处理：babel-loader @babel/core @babel/preset-env
         * 1. 基本js兼容性处理——> @babel/preset-env  问题：只能转换基本语法 ，例如promise不能转换
         * 2. 全部js兼容性处理——> @babel/polyfill  问题：只要解决部分 兼容性问题 ，但是将所有兼容性代码全部引入，体积太大了
         * 3. 需要做兼容性处理的就做按需加载 ——> corejs
         * */
         {
           test: /\.js$/,
           exclude: /node_modules/,
           loader: "babel-loader",
           options: {
             // 预设：指示babel做怎么样的兼容性处理
             presets: [
               [
                 '@babel/preset-env',
                 {
                   // 按需加载
                   useBuiltIns: 'usage',
                   // 指定corejs版本
                   corejs: {
                     version: 3
                   },
                   // 指定兼容性做到哪个版本的浏览器
                   targets: {
                     chrome: '60',
                     firefox: '60',
                     ie: '9',
                     safari: '10',
                     edge: '17'
                   }
                 }
               ]
             ]
           }
         }
       ]
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: "./src/index.html"
       }),
       /*
       * webpack5
       * npm i eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import -D
       *"eslintConfig": {
             "extends": "airbnb-base",
             #！！！！如果没使用alias下面的不用配置！！！！！
             "settings": {
               "import/resolver": {
                 "webpack": {
                   "config": "webpack.config.js"
                 }
               }
             }
           }
       * */
       new ESLintPlugin({
         fix: true,
         extensions: ['js', 'json', 'coffee'],
         exclude: '/node_modules/'
       })
     ],
     mode: "development"
   }
   ```

### js 压缩

- 将mode设置为production即可自动压缩js文件

### html 压缩

```js
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  // 全部js兼容性处理——> @babel/polyfill
  // entry: ['@babel/polyfill','./src/index.js'],
  entry: './src/index.js',
  output: {
    filename: "js/build.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      /*
      * js兼容性处理：babel-loader @babel/core @babel/preset-env
      * 1. 基本js兼容性处理——> @babel/preset-env  问题：只能转换基本语法 ，例如promise不能转换
      * 2. 全部js兼容性处理——> @babel/polyfill  问题：只要解决部分 兼容性问题 ，但是将所有兼容性代码全部引入，体积太大了
      * 3. 需要做兼容性处理的就做按需加载 ——> corejs
      * */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          // 预设：指示babel做怎么样的兼容性处理
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                // 指定corejs版本
                corejs: {
                  version: 3
                },
                // 指定兼容性做到哪个版本的浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        // 移除空格
        collapseWhitespace:true,
        // 移除注释
        removeComments:true
      }
    }),
    /*
    * webpack5
    * npm i eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import -D
    *"eslintConfig": {
          "extends": "airbnb-base",
          #！！！！如果没使用alias下面的不用配置！！！！！
          "settings": {
            "import/resolver": {
              "webpack": {
                "config": "webpack.config.js"
              }
            }
          }
        }
    * */
    new ESLintPlugin({
      fix: true,
      extensions: ['js', 'json', 'coffee'],
      exclude: '/node_modules/'
    })
  ],
  // 生产环境下会自动压缩js代码
  mode: "production"
}
```

一个基本的生产环境配置

```js
const {resolve} = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//压缩css文件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
// js语法检查
const ESLintPlugin = require('eslint-webpack-plugin');
// 打包html资源
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 定义nodejs环境变量 决定browserslist使用哪个环境
process.env.NODE_ENV = 'production'
// 复用loader
const commonCssLoader = [
  //  MiniCssExtractPlugin.loader 取代style-loader
  // 为了提取成单独的css文件
  MiniCssExtractPlugin.loader,
  'css-loader',
  // 对样式做兼容性处理,还需要在package.json中配置browserslist
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          'postcss-preset-env'
        ]
      },
    }
  }
]
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...commonCssLoader]
      },
      {
        test: /\.less$/,
        use: [...commonCssLoader, 'less-loader']
      },
      /*
      * 正常来讲，一个文件只能被一个loader处理，当一个文件被多个loader处理时，那么一定要指定loader执行的顺序
      * 先 执行eslint，在执行babel
      *  enforce:'pre'  表示优先执行
      * */
      // js做兼容性配置
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          // 预设：指示babel做怎么样的兼容性处理
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                // 指定corejs版本
                corejs: {
                  version: 3
                },
                // 指定兼容性做到哪个版本的浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      },
      // 图片
      {
        test: /\.(jpg|png|gif)$/,
        type: "asset/resource",
        //解析
        parser: {
          //转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          }
        },
        // [hash:6] 取图片哈希值的前十位
        // [ext] 取文件原来扩展名
        generator: {
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          filename: 'image/[name].[hash:6][ext]',
          //打包后对资源的引入，文件命名已经有/img了
          // publicPath: './'
        },
      },
      // 处理html中的img标签
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        // 排除 css/js/html资源
        exclude: /\.(css|js|html|less|jpg|png|gif)$/,
        // webpack5以下使用方式
        // loader: "file-loader"
        type: "asset/resource",
        generator: {
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          filename: 'media/[name].[hash:6][ext]',
          //打包后对资源的引入，文件命名已经有/img了
          publicPath: './'
        },
      }
    ]
  },
  plugins: [
    // 将打包生成的css文件放在一个统一的目录下
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    //压缩css文件
    new OptimizeCssAssetsWebpackPlugin(),
    //  js语法检查
    new ESLintPlugin({
      fix: true,
      extensions: ['js', 'json', 'coffee'],
      exclude: '/node_modules/'
    }),
    // 打包HTML
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: "production"
}
```

# 五、Webpack 优化配置

## 5.1 开发环境性能优化配置

### 5.1.1优化打包构建速度

#### 5.1.1.1HMR（模块热替换）

HMR: hot module replacement 热模块替换 / 模块热替换

作用：一个模块发生变化，只会重新打包构建这一个模块（而不是打包所有模块） ，极大提升构建速度

代码：只需要在 devServer 中设置 hot 为 true，就会自动开启HMR功能（只能在开发模式下使用）

```js
devServer: {
  contentBase: resolve(__dirname, 'build'),
  compress: true,
  port: 3000,
  open: true,
  // 开启HMR功能
  // 当修改了webpack配置，新配置要想生效，必须重启webpack服务
  hot: true
}
```

每种文件实现热模块替换的情况：

- 样式文件：可以使用HMR功能，因为开发环境下使用的 style-loader 内部默认实现了热模块替换功能

- js 文件：默认不能使用HMR功能（修改一个 js 模块所有 js 模块都会刷新）

  --> 实现 HMR 需要修改 js 代码（添加支持 HMR 功能的代码）

  ```js
  // 绑定
  if (module.hot) {
    // 一旦 module.hot 为true，说明开启了HMR功能。 --> 让HMR功能代码生效
    module.hot.accept('./print.js', function() {
      // 方法会监听 print.js 文件的变化，一旦发生变化，只有这个模块会重新打包构建，其他模块不会。
      // 会执行后面的回调函数
      print();
    });
  }
  ```

  注意：HMR 功能对 js 的处理，只能处理非入口 js 文件的其他文件。

- html 文件: 默认不能使用 HMR 功能（html 不用做 HMR 功能，因为只有一个 html 文件，不需要再优化）

  使用 HMR 会导致问题：html 文件不能热更新了（不会自动打包构建）

  解决：修改 entry 入口，将 html 文件引入（这样 html 修改整体刷新）

  ```js
  entry: ['./src/js/index.js', './src/index.html']
  ```

### 5.1.2优化代码调试

#### 5.1.2.1 source-map

source-map：一种提供**源代码到构建后代码的映射**的技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）

参数：`[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map`

代码：

```
devtool: 'eval-source-map'
```

可选方案：[生成source-map的位置|给出的错误代码信息]

- source-map：外部，错误代码准确信息 和 源代码的错误位置
- inline-source-map：内联，只生成一个内联 source-map，错误代码准确信息 和 源代码的错误位置
- hidden-source-map：外部，错误代码错误原因，但是没有错误位置（为了隐藏源代码），不能追踪源代码错误，只能提示到构建后代码的错误位置
- eval-source-map：内联，每一个文件都生成对应的 source-map，都在 eval 中，错误代码准确信息 和 源代码的错误位
- nosources-source-map：外部，错误代码准确信息，但是没有任何源代码信息（为了隐藏源代码）
- cheap-source-map：外部，错误代码准确信息 和 源代码的错误位置，只能把错误精确到整行，忽略列
- cheap-module-source-map：外部，错误代码准确信息 和 源代码的错误位置，module 会加入 loader 的 source-map

内联 和 外部的区别：1. 外部生成了文件，内联没有 2. 内联构建速度更快

开发/生产环境可做的选择：

**开发环境**：需要考虑速度快，调试更友好

- 速度快( eval > inline > cheap >... )
  1. eval-cheap-souce-map
  2. eval-source-map
- 调试更友好
  1. souce-map
  2. cheap-module-souce-map
  3. cheap-souce-map

**最终得出最好的两种方案 --> eval-source-map（完整度高，内联速度快） / eval-cheap-module-souce-map（错误提示忽略列但是包含其他信息，内联速度快）**

**生产环境**：需要考虑源代码要不要隐藏，调试要不要更友好

- 内联会让代码体积变大，所以在生产环境不用内联
- 隐藏源代码
  1. nosources-source-map 全部隐藏
  2. hidden-source-map 只隐藏源代码，会提示构建后代码错误信息

**最终得出最好的两种方案 --> source-map（最完整） / cheap-module-souce-map（错误提示一整行忽略列）**

## 5.2 生产环境性能优化配置

### 5.2.1 优化打包构建速度

#### 5.2.1.1 oneof

```js
module: {
  rules: [
    {
      // 以下loader只会匹配一个
      oneOf: [
        {
          test: /\.css$/,
          use: [...commonCssLoader]
        },
        {
          test: /\.less$/,
          use: [...commonCssLoader, 'less-loader']
        },
        /*
        * 正常来讲，一个文件只能被一个loader处理，当一个文件被多个loader处理时，那么一定要指定loader执行的顺序
        * 先 执行eslint，在执行babel
        *  enforce:'pre'  表示优先执行
        * */
        // js做兼容性配置
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            // 预设：指示babel做怎么样的兼容性处理
            presets: [
              [
                '@babel/preset-env',
                {
                  // 按需加载
                  useBuiltIns: 'usage',
                  // 指定corejs版本
                  corejs: {
                    version: 3
                  },
                  // 指定兼容性做到哪个版本的浏览器
                  targets: {
                    chrome: '60',
                    firefox: '60',
                    ie: '9',
                    safari: '10',
                    edge: '17'
                  }
                }
              ]
            ]
          }
        },
        // 图片
        {
          test: /\.(jpg|png|gif)$/,
          type: "asset/resource",
          //解析
          parser: {
            //转base64的条件
            dataUrlCondition: {
              maxSize: 25 * 1024, // 25kb
            }
          },
          // [hash:6] 取图片哈希值的前十位
          // [ext] 取文件原来扩展名
          generator: {
            //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
            filename: 'image/[name].[hash:6][ext]',
            //打包后对资源的引入，文件命名已经有/img了
            // publicPath: './'
          },
        },
        // 处理html中的img标签
        {
          test: /\.html$/,
          loader: "html-loader"
        },
        {
          // 排除 css/js/html资源
          exclude: /\.(css|js|html|less|jpg|png|gif)$/,
          // webpack5以下使用方式
          // loader: "file-loader"
          type: "asset/resource",
          generator: {
            //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
            filename: 'media/[name].[hash:6][ext]',
            //打包后对资源的引入，文件命名已经有/img了
            publicPath: './'
          },
        }
      ]
    }
  ]
},
```

#### 5.2.1.2 babel缓存

1.babel缓存 cacheDirectory:true  让第二次打包构建速度变快

```js
{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader",
  options: {
    // 预设：指示babel做怎么样的兼容性处理
    presets: [
      [
        '@babel/preset-env',
        {
          // 按需加载
          useBuiltIns: 'usage',
          // 指定corejs版本
          corejs: {
            version: 3
          },
          // 指定兼容性做到哪个版本的浏览器
          targets: {
            chrome: '60',
            firefox: '60',
            ie: '9',
            safari: '10',
            edge: '17'
          }
        }
      ]
    ],
    // 开启babel缓存
    cacheDirectory:true
  }
},
```

#### 5.2.1.3 多进程打包

当项目中js文件较多，打包较满时，推荐配置使用

使用步骤：

1. npm i thread-loader -D

2. 配置loader

   ```js
   {
     test: /\.js$/,
     exclude: /node_modules/,
     use: [
       // 开启多进程打包
       // 进程启动大概为600ms，进程通信也有开销，只有工作消耗比较长，才需要多进程打包
       {
         loader: 'thread-loader',
         options: {
           workers:2 // 进程2个
         }
       },
       {
         loader: "babel-loader",
         options: {
           // 预设：指示babel做怎么样的兼容性处理
           presets: [
             [
               '@babel/preset-env',
               {
                 // 按需加载
                 useBuiltIns: 'usage',
                 // 指定corejs版本
                 corejs: {
                   version: 3
                 },
                 // 指定兼容性做到哪个版本的浏览器
                 targets: {
                   chrome: '60',
                   firefox: '60',
                   ie: '9',
                   safari: '10',
                   edge: '17'
                 }
               }
             ]
           ],
           // 开启babel缓存
           cacheDirectory: true
         }
       }
     ],
   
   },
   ```

#### 5.2.1.4 externals

externals主要作用是拒绝将某些包打包到文件中

```js
/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader的配置
    ]
  },
  plugins: [
    //plugins的配置
    //html-webpack-plugin
      // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
      // 需要有结构的HTML文件
    new HtmlWebpackPlugin({
      // 复制 './src/index.html' 文件,自动引入打包输出的所有资源（JS/CSS）
      template: "./src/index.html"
    })
  ],
  mode: 'production',
  externals: {
    // 拒绝jQuery这个包被打包进去
    jquery:'jQuery'
  }
}
```

#### 5.2.1.5 dll

dll是可以将某些库分离出来单独打包一次后，以后再打包项目时，不需要再多次打包，提高了打包的效率

使用流程：

1. 创建 webpack.dll.js

   ```js
   /*
   * 使用dll技术对某些库进行打包（jquery、react、vue）
   * 当你运行webpack时，默认查找 webpack.config.js 配置文件
   * --》 webpack --config webpack.dll.js
   *
   *
   * */
   const {resolve} = require('path')
   const webpack = require('webpack')
   module.exports = {
     entry: {
       // 最终打包生成的[name] --> jquery
       // ['jquery'] --> 要打包的库是jquery
       jquery:['jquery']
     },
     output: {
       filename: "[name].js",
       path: resolve(__dirname,'dll'),
       library: '[name]_[hash]'
     },
     plugins: [
         // 打包 生成一个 manifest.json --> 提供和jQuery的映射关系
         new webpack.DllPlugin({
           name:'[name]_[hash]', // 映射库的暴露内容名称
           path: resolve(__dirname,'dll/manifest.json')
         })
     ],
     mode:'production'
   }
   ```

2. 运行  webpack --config webpack.dll.js，打包后会在目录下生成 相应的dll目录，以及manifest.json文件

3. npm i add-asset-html-webpack-plugin -D

4. 配置对应的插件

   ```js
   const webpack = require('webpack')
   const {resolve} = require('path')
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   //
   const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
   module.exports = {
     entry: './src/index.js',
     output: {
       filename: "js/built.js",
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         // loader的配置
       ]
     },
     plugins: [
       //plugins的配置
       //html-webpack-plugin
       // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
       // 需要有结构的HTML文件
       new HtmlWebpackPlugin({
         // 复制 './src/index.html' 文件,自动引入打包输出的所有资源（JS/CSS）
         template: "./src/index.html"
       }),
       // 告诉webpack哪些库不参与打包，同时使用的名称也需要改变
       new webpack.DllReferencePlugin({
         manifest: resolve(__dirname, 'dll/manifest.json')
       }),
         // 配置到后引入对应的jquery
       new AddAssetHtmlWebpackPlugin({
         filepath: resolve(__dirname, 'dll/jquery.js'),
         publicPath:'./'
       })
     ],
     mode: 'production',
   
   }
   ```



### 5.2.2 优化代码运行的性能

#### 5.2.2.1 缓存(hash-chunkhash-contenthash)

文件资源缓存 让代码上线 运行缓存更好使用

1. 修改文件名[hash:10]
   - 问题：由于js和css同时使用一个hash值，如果重新打包，会导致所有缓存失效（只改动一个文件
2. chunkhash
   - 根据chunk生成的hash值，如果 打包来源于同一个chunk，那么hash值就一样
   - 问题：因为css是在js中被引入的，所以同属于一个chunk
3. contenthash
   - 根据文件内容生成 hash值，不同文件hash值一定不一样

```js
//output中的入口js文件
output: {
  filename: "js/built.[contenthash:10].js",
  path: resolve(__dirname, 'build')
}

//plugins中的css文件
new MiniCssExtractPlugin({
      filename: 'css/built.[contenthash:10].css'
    }),
```

#### 

#### 5.2.2.2 tree shaking

tree shaking 去除无用代码，减少代码体积

前提：

1. 必须使用ES6模块化代码
2. 开启production模式

注意：

* 在package.json中配置 "sideEffects":false 所有代码没有副作用（都可以进行tree shaking）
* 问题：可能会把css / @babel/lolyfill (副作用)文件干掉
* "sideEffects":["*.css"]  保留css

#### 5.2.2.3 code split

将打包后的js代码按照不同的方式进行分割。

方式一：更改入口文件配置

```js
entry: {
  // 多入口：有一个入口，就输出一个bundle
  main:'./src/index.js',
  test:'./src/js/test.js'
},
output: {
  // [name]: 取文件名
  filename: "js/[name].[contenthash:10].js",
  path: resolve(__dirname, 'build')
},
```

方式二：optimization配置

```js
// 可以将node_modules中的代码单独打包成一个chunk最终输出
// 自动分析多入口chunk中，有没有公共的文件，如果有会打包成单独一个chunk
optimization: {
  splitChunks: {
    chunks: 'all',
    minSize: 20000,
    minRemainingSize: 0,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    enforceSizeThreshold: 50000,
    cacheGroups: {
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        reuseExistingChunk: true,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
},
```

方式三：通过import()方式

```js
// 通过js代码，让某个文件单独打包成一个chunk
// eslint-disable-next-line
import(/* webpackChunkName:'test' */'./js/test').then(function (res) {
  console.log(res);
}).catch(function () {
  console.log('error')
})
```

#### 5.2.2.4 懒加载和预加载

- 懒加载：当文件需要时才加载
- 预加载prefetch：会在使用之前，提前加载js文件
- 正常加载可以认为是并行加载（同一时间加载多个文件）
- 预加载 prefetch：等其他资源加载完毕，浏览器空闲了，在偷偷加载资源

```js
document.getElementById('btn').onclick = function () {
  import(/* webpackChunkName:'test',webpackPrefetch:true */'./js/test').then(({mul}) => {
    console.log(mul(2, 3));

  })
}
```

#### 5.2.2.5 PWA

PWA:渐进式网络开发应用程序（离线可访问）

使用步骤：

1. 下载 workbox-webpack-plugin：npm i workbox-webpack-plugin -D

2. 使用插件

   ```js
   new WorkboxWebpackPlugin.GenerateSW({
     /*
     * 1.帮助serviceWorker快速启动
     * 2. 删除旧的serviceworker
     *
     * 生成一个serviceworker配置文件
     * */
     clientsClaim:true,
     skipWaiting:true
   })
   ```

3. 注册serviceWorker（入口js文件中）

   ```js
   // 注册serviceworker
   // 处理兼容性问题
   if ('serviceWorker' in navigator){
     window.addEventListener('load',() => {
       navigator.serviceWorker.register('/service-worker.js')
           .then(() => {
             console.log('serviceworker注册成功了')
           }).catch(() => {
         console.log('serviceworker注册失败了')
       })
     })
   }
   ```

注意：

```
 1.eslint不认识 window、navigator全局变量
   解决：修改package.json中eslintConfig配置
   "eslintConfig": {
    "extends": "airbnb-base",
    "env": {
      "browser": true
    }
  },
 2.service worker代码必须运行在服务器上
 npm i serve -g
 serve -s build
```

# 六、Webpack配置详解

## 6.1 entry

1.string： './src/index.js' 单入口 打包形成一个chunk，输出一个bundle文件，此时chunk的名称默认是main

```js
entry:'./src/index.js'
```

2.array ：['./src/index.js','./src/add.js'] 多入口 所有入口文件最终会形成一个chunk，输出出去只有 一个bundle文件。一般只有在HMR功能中让HTML热更新生效

```js
entry: ['./src/index.js','./src/add.js']
```

3.object：多入口，有几个文件就形成几个chunk，输出几个bundle文件，此时chunk的名称是key

```js
entry: {
  index:'./src/index.js',
  add:'./src/add.js'
  },
```

4.特殊用法

```js
entry: {
 // 所有入口文件最终只会形成一个chunk，输出出去只有一个bundle
  index:['./src/index.js','./src/count.js'],
 //形成一个chunk
  add:'./src/add.js'
  },
```

## 6.2 output

```js
output: {
  // 文件名称 指定名称+目录
  filename: "js/[name].js",
  // 输出文件目录（将来所有资源输出的公共目录）
  path: resolve(__dirname,'build'),
  // 所有资源引入公共路径前缀--> 'imgs/a.jpg' --> '/imgs/a.jpg'
  publicPath: "/",
  chunkFilename: "js/[name]_chunk.js",
  library: '[name]', // 整个库向外暴露的变量名
  libraryTarget: "window"  // 变量名添加到哪个上 window global browser node
},
```

## 6.3 module

```js
module: {
  rules: [
      // loader配置
    {
      test:/\.css$/,
      use:['style-loader','css-loader']
    },
    {
      test:/\.js$/,
      // 排除node_modules下的文件
      exclude: /node_moudles/,
      // 只检查src下的js文件
      include: resolve(__dirname,'src'),
      //  优先执行
      enforce: "pre",
      // 延后执行
      // enforce:"post"
      // 单个loader用loader
      loader: "eslint-loader",
      options: {}
    },
    {
      // 以下配置只会生效一个
      oneOf: []
    }

  ],
},
```

## 6.4 resolve

```js
// 解析模块的规则
resolve: {
  // 配置路径别名:优点：简写路径 缺点：路径没有提示
  alias: {
    $css:resolve(__dirname,'src/css')
  },
  // 配置省略文件路径的后缀名
  extensions: ['.js','.json','.css','.jsx'],
  // 告诉webpack解析模块时是去哪个目录找
  modules: [resolve(__dirname,'../../node_modules'),'node_modules']
}
```

## 6.5 devServer

```js
devServer: {
  // 运行代码的目录
  // contentBase:resolve(__dirname,'build'),
  static: {
    directory: resolve(__dirname, 'build'),
    watch:{
      // 忽略文件
      ignored:/node_modules/
    }
  },
  // 启动 gzip压缩
  compress:true,
  // 端口号
  port:3000,
  // 开启HMR功能
  hot:true,
  // 域名
  host:'localhost',
  // 自动打开浏览器
  open:true,

  // 不要显示启动服务器日志信息
  client:{
    logging:'none',
    // 如果出错了，不要全屏提示
    overlay:false
  },
  // 除了一些 基本启动信息外，其他内容也不要显示
  quiet:true,
  proxy:{
    '/api':{
      target:'http://localhost:3000',
      pathRewrite:{
        '^api':''
      }
    }
  }
}
```

## 6.6 optimization

```js
optimization: {
  splitChunks: {
    chunks: "all",
    // 默认值可以不用写
    /*
    *      minSize: 30*1024, // 分割的chunk最小为30kb
    maxSize: 0, // 最大没有限制
    minChunks: 1, // 要提取的chunk最少被引用一次
    maxAsyncRequests: 5,// 按需加载时并行加载的文件最大数量
    maxInitialRequests: 3, // 入口js文件最大并行请求量
    automaticNameDelimiter: "~", // 名称连接符
    name:true, // 可以使用命名规则
    cacheGroups: { // 分割的chunk组
      // node_modules文件会被打包 到vendors组的chunk中 -- vendors~xxx.js
      // 满足上面的公共规则
      vendor : {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      },
      default:{
        // 要提取的chunk最少被使用两次
        minChunks: 2,
        // 优先级
        priority: -20,
        // 如果当前要打包的模块，和之前已经被提取的模块时 同一个，就会复用，而不是重新打包模块
        reuseExistingChunk: true
      }
    }
    * */

  },
  // 将当前模块记录其他模块的hash单独打包成为一个文件 runtime
  // 解决：修改a文件导致b文件的contenthash变化
  runtimeChunk: {
    name: entrypoint =>`runtime-${entrypoint.name}`
  },
  minimizer: [
    // 配置生产环境的压缩方案
      new TerserWebpackPlugin({
        // 开启缓存
        cache:true,
        // 开启多进程打包
        parallel:true,
        // 启动source-map
        sourceMap:true
      })
  ]
}
```


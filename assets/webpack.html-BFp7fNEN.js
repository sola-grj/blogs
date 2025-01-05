import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as t,a as s,b as e,e as p,o as i,r as c}from"./app-Ba2CBXJF.js";const r={},u={href:"https://v4.webpack.js.org/loaders/raw-loader/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://v4.webpack.js.org/loaders/url-loader/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://v4.webpack.js.org/loaders/file-loader/",target:"_blank",rel:"noopener noreferrer"};function v(m,n){const a=c("ExternalLinkIcon");return i(),o("div",null,[n[6]||(n[6]=t('<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>webpack</span></a></h1><h1 id="一、webpack-简介" tabindex="-1"><a class="header-anchor" href="#一、webpack-简介"><span>一、Webpack 简介</span></a></h1><h2 id="_1-1-webpack-是什么" tabindex="-1"><a class="header-anchor" href="#_1-1-webpack-是什么"><span>1.1 webpack 是什么</span></a></h2><p>webpack 是一种<strong>前端资源构建工具</strong>，一个静态模块打包器(module bundler)。</p><p>在webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。 它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)。</p><h2 id="_1-2-webpack-五个核心概念" tabindex="-1"><a class="header-anchor" href="#_1-2-webpack-五个核心概念"><span>1.2 webpack 五个核心概念</span></a></h2><h4 id="_1-2-1-entry" tabindex="-1"><a class="header-anchor" href="#_1-2-1-entry"><span>1.2.1 Entry</span></a></h4><p>入口(Entry)：指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。</p><h4 id="_1-2-2-output" tabindex="-1"><a class="header-anchor" href="#_1-2-2-output"><span>1.2.2 Output</span></a></h4><p>输出(Output)：指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。</p><h4 id="_1-2-3-loader" tabindex="-1"><a class="header-anchor" href="#_1-2-3-loader"><span>1.2.3 Loader</span></a></h4><p>Loader：让 webpack 能够去处理那些非 JS 的文件，比如样式文件、图片文件(webpack 自身只理解 JS)</p><h4 id="_1-2-4-plugins" tabindex="-1"><a class="header-anchor" href="#_1-2-4-plugins"><span>1.2.4 Plugins</span></a></h4><p>插件(Plugins)：可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩， 一直到重新定义环境中的变量等。</p><h4 id="_1-2-5-mode" tabindex="-1"><a class="header-anchor" href="#_1-2-5-mode"><span>1.2.5 Mode</span></a></h4><p>模式(Mode)：指示 webpack 使用相应模式的配置。</p><table><thead><tr><th>选项</th><th>描述</th><th>特点</th></tr></thead><tbody><tr><td>development</td><td>会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。</td><td>能让代码本地调试运行的环境</td></tr><tr><td>production</td><td>会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。</td><td>能让代码优化上线运行的环境</td></tr></tbody></table><h1 id="二、webpack-初体验" tabindex="-1"><a class="header-anchor" href="#二、webpack-初体验"><span>二、Webpack 初体验</span></a></h1><h2 id="_2-1-初始化配置" tabindex="-1"><a class="header-anchor" href="#_2-1-初始化配置"><span>2.1 初始化配置</span></a></h2><ol><li><p>初始化 package.json：npm init</p></li><li><p>下载安装webpack：(webpack4以上的版本需要全局/本地都安装webpack-cli)</p><p>全局安装：cnpm i webpack webpack-cli -g</p><p>本地安装：cnpm i webpack webpack-cli -D</p></li></ol><p>当前版本：</p><ul><li>webpack: 5.62.1</li><li>webpack-cli: 4.9.1</li></ul><h2 id="_2-2-编译打包应用" tabindex="-1"><a class="header-anchor" href="#_2-2-编译打包应用"><span>2.2 编译打包应用</span></a></h2><p>创建 src 下的 js 等文件后，不需要配置 webpack.config.js 文件，在命令行就可以编译打包。</p><p>指令：</p><ul><li><p>开发环境：webpack ./src/index.js -o ./build/built.js --mode=development</p><p>webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js 整体打包环境，是开发环境</p></li><li><p>生产环境：webpack ./src/index.js -o ./build/built.js --mode=production</p><p>webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js 整体打包环境，是生产环境</p></li></ul><p>结论：</p><ol><li>webpack 本身能处理 js/json 资源，不能处理 css/img 等其他资源</li><li>生产环境和开发环境将 ES6 模块化编译成浏览器能识别的模块化，但是不能处理 ES6 的基本语法转化为 ES5（需要借助 loader）</li><li>生产环境比开发环境多一个压缩 js 代码</li></ol><h1 id="三、webpack-开发环境的基本配置" tabindex="-1"><a class="header-anchor" href="#三、webpack-开发环境的基本配置"><span>三、Webpack 开发环境的基本配置</span></a></h1><p>webpack.config.js 是 webpack 的配置文件。</p><p>作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）</p><p>所有构建工具都是基于 nodejs 平台运行的，模块化默认采用 commonjs。</p><p>开发环境配置主要是为了能让代码运行。主要考虑以下几个方面：</p><p>在 webpack 5 之前，通常使用：</p>',34)),s("ul",null,[s("li",null,[s("a",u,[n[0]||(n[0]=s("code",null,"raw-loader",-1)),e(a)]),n[1]||(n[1]=p(" 将文件导入为字符串"))]),s("li",null,[s("a",d,[n[2]||(n[2]=s("code",null,"url-loader",-1)),e(a)]),n[3]||(n[3]=p(" 将文件作为 data URI 内联到 bundle 中"))]),s("li",null,[s("a",k,[n[4]||(n[4]=s("code",null,"file-loader",-1)),e(a)]),n[5]||(n[5]=p(" 将文件发送到输出目录"))])]),n[7]||(n[7]=t(`<p>资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：</p><ul><li><code>asset/resource</code> 发送一个单独的文件并导出 URL。之前通过使用 <code>file-loader</code> 实现。</li><li><code>asset/inline</code> 导出一个资源的 data URI。之前通过使用 <code>url-loader</code> 实现。</li><li><code>asset/source</code> 导出资源的源代码。之前通过使用 <code>raw-loader</code> 实现。</li><li><code>asset</code> 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 <code>url-loader</code>，并且配置资源体积限制实现。</li></ul><h3 id="打包样式资源" tabindex="-1"><a class="header-anchor" href="#打包样式资源"><span>打包样式资源</span></a></h3><ul><li>npm i css-loader style-loader less-loader -D</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*
webpack.config.js  webpack的配置文件
  作用：指示webpack干哪些活

  所有的构建工具都是基于nodejs平台运行的模块化 默认采用commonjs
* */</span>
<span class="token comment">// 用来拼接绝对路径的方法</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// webpack配置</span>
  <span class="token comment">// 入口文件</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//  输出文件名</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;built.js&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 输出路径</span>
    <span class="token comment">// __dirname nodejs的变量  代表当前文件所在目录的绝对路径</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// loader的配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 详细loader配置</span>
      <span class="token comment">// 不同文件必须配置不同loader配置</span>
      <span class="token punctuation">{</span>
        <span class="token comment">//  匹配那些文件</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 使用哪些loader</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token comment">// use数组中loader执行顺序：从右到左，从下到上</span>
            <span class="token comment">// 创建style标签，将js中的样式资源插入到head中生效</span>
            <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">//  将css文件变成commonjs模块加载js中，里面内容是 样式字符串</span>
            <span class="token string">&#39;css-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 将less文件编译成css文件</span>
            <span class="token string">&#39;less-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// plugins的二配置</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 模式</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// mode:&#39;production&#39;,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包-html-资源" tabindex="-1"><a class="header-anchor" href="#打包-html-资源"><span>打包 html 资源</span></a></h3><ul><li>npm i html-webpack-plugin -D</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;built.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// loader的配置</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//plugins的配置</span>
    <span class="token comment">//html-webpack-plugin</span>
      <span class="token comment">// 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）</span>
      <span class="token comment">// 需要有结构的HTML文件</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 复制 &#39;./src/index.html&#39; 文件,自动引入打包输出的所有资源（JS/CSS）</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包图片资源" tabindex="-1"><a class="header-anchor" href="#打包图片资源"><span>打包图片资源</span></a></h3><p>webpack5以下</p><ul><li>npm i url-laoder file-loader -D</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bulit.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 要使用多个 loader处理使用use</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;less-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//webpack5以下 处理图片资源</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 使用一个loader</span>
        <span class="token comment">// 下载 url-laoder file-loader</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;url-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 图片大小小于8kb，就会被base64处理</span>
          <span class="token comment">// 优点：减少请求数量（减轻服务器压力）</span>
          <span class="token comment">//  缺点：图片体积变大（文件请求速度变慢）</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span><span class="token number">8</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">,</span>
          <span class="token comment">// 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是common.js</span>
          <span class="token comment">//  解析时会出现问题：[object Moudule]</span>
          <span class="token comment">// 解决：关闭url-loader的 es6模块化，使用commonjs解析</span>
          <span class="token literal-property property">esModule</span><span class="token operator">:</span><span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 处理html中的img标签</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;html-loader&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>webpack5</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bulit.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 要使用多个 loader处理使用use</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;less-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// webpack5 处理图片资源</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//解析</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//转base64的条件</span>
          <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 25kb</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token comment">// [hash:6] 取图片哈希值的前十位</span>
          <span class="token comment">// [ext] 取文件原来扩展名</span>
        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;img/[name].[hash:6][ext]&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">//打包后对资源的引入，文件命名已经有/img了</span>
          <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 处理html中的img标签</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;html-loader&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包其他资源" tabindex="-1"><a class="header-anchor" href="#打包其他资源"><span>打包其他资源</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bulit.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 打包其他资源(除了 html、js\\css资源以外的资源)</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 排除 css/js/html资源</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(css|js|html)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token comment">// webpack5以下使用方式</span>
        <span class="token comment">// loader: &quot;file-loader&quot;</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset/resource&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="devserver" tabindex="-1"><a class="header-anchor" href="#devserver"><span>devServer</span></a></h3><ul><li>npm i webpack-dev-server -D</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bulit.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 打包其他资源(除了 html、js\\css资源以外的资源)</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 排除 css/js/html资源</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(css|js|html)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// loader: &quot;file-loader&quot;</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset/resource&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// 开发服务器 devServer 用来自动化（自动化编译，自动打开浏览器，自动刷新浏览器）</span>
  <span class="token comment">// 特点：只会在内存中编译打包，不会有任何输出</span>
  <span class="token comment">// 启动devServer指令为：npx webpack serve</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">directory</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 启动 gzip压缩</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 端口号</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token comment">// 自动打开浏览器</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span><span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个简单的开发环境webpack.confg.js配置文件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指定打包好的入口文件输出位置</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/bulit.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 配置css</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 配置less</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 处理图片资源</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//解析</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//转base64的条件</span>
          <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 25kb</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// [hash:6] 取图片哈希值的前十位</span>
        <span class="token comment">// [ext] 取文件原来扩展名</span>
        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;img/[name].[hash:6][ext]&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">//打包后对资源的引入，文件命名已经有/img了</span>
          <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 处理html中的img标签</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;html-loader&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 打包其他资源(除了 html、js\\css资源以外的资源)</span>
        <span class="token comment">// 排除 css/js/html资源</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(css|js|html|less|jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// loader: &quot;file-loader&quot;</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset/resource&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;media/[name].[hash:6][ext]&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">//打包后对资源的引入，文件命名已经有/img了</span>
          <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 打包 html资源</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置开发环境</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// 开发服务器 devServer 用来自动化（自动化编译，自动打开浏览器，自动刷新浏览器）</span>
  <span class="token comment">// 特点：只会在内存中编译打包，不会有任何输出</span>
  <span class="token comment">// 启动devServer指令为：npx webpack serve</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">directory</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 启动 gzip压缩</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 端口号</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token comment">// 自动打开浏览器</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，大部分配置都在注释中给出解释。</p><ul><li><p>运行项目的两个指令： webpack 会将打包结果输出出去（build文件夹） npx webpack-dev-server 只会在内存中编译打包，没有输出</p></li><li><p>loader 和 plugin 的不同：（plugin 一定要先引入才能使用）</p><p>loader：1. 下载 2. 使用（配置 loader）</p><p>plugins：1.下载 2. 引入 3. 使用</p></li></ul><h1 id="四、webpack-生产环境的基本配置" tabindex="-1"><a class="header-anchor" href="#四、webpack-生产环境的基本配置"><span>四、Webpack 生产环境的基本配置</span></a></h1><p>而生产环境的配置需要考虑以下几个方面：</p><h3 id="提取-css-成单独文件" tabindex="-1"><a class="header-anchor" href="#提取-css-成单独文件"><span>提取 css 成单独文件</span></a></h3><ul><li>npm i mini-css-extract-plugin -D</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// npm i mini-css-extract-plugin -D</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/js/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/built.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 创建style标签，将样式放入</span>
          <span class="token comment">// &#39;style-loader&#39;,</span>
          <span class="token comment">// 这个loader取代style-loader 作用：提取 js中的css成单独文件</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token comment">// 将css文件整合到js文件中</span>
          <span class="token string">&#39;css-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/built.css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-兼容性处理-webpack5" tabindex="-1"><a class="header-anchor" href="#css-兼容性处理-webpack5"><span>css 兼容性处理（webpack5）</span></a></h3><ul><li>npm i postcss postcss-loader postcss-preset-env -D</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// npm i mini-css-extract-plugin -D</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 设置nodejs 的环境变量</span>
<span class="token comment">// process.env.NODE_ENV = &#39;development&#39;</span>
<span class="token comment">// npm i postcss postcss-loader postcss-preset-env -D</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/js/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/built.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 创建style标签，将样式放入</span>
          <span class="token comment">// &#39;style-loader&#39;,</span>
          <span class="token comment">// 这个loader取代style-loader 作用：提取 js中的css成单独文件</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token comment">// 将css文件整合到js文件中</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">/*
          *   css兼容性处理： postcss ——&gt; postcss-loader postcss-preset-env
          *
          *   帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式 package.json中配置browserslist
          *
          *   &quot;browserslist&quot;: {
                &quot;development&quot;: [
                  &quot;last 1 chrome version&quot;,
                  &quot;last 1 firefox version&quot;,
                  &quot;last 1 safari version&quot;
                ],
                &quot;production&quot;: [
                  &quot;&gt;0.2%&quot;,
                  &quot;not dead&quot;,
                  &quot;not op_mini all&quot;
                ]
              }
          *
          *
          *             * */</span>
          <span class="token comment">// 使用loader的默认配置</span>
          <span class="token comment">// &#39;postcss-loader&#39;,</span>
          <span class="token comment">// 修改loader配置</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&#39;postcss-preset-env&#39;</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/built.css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="压缩-css" tabindex="-1"><a class="header-anchor" href="#压缩-css"><span>压缩 css</span></a></h3><ul><li>npm i optimize-css-assets-webpack-plugin -D</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// npm i mini-css-extract-plugin -D</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> OptimizeCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 设置nodejs 的环境变量</span>
<span class="token comment">// process.env.NODE_ENV = &#39;development&#39;</span>
<span class="token comment">// css兼容性loader   npm i postcss postcss-loader postcss-preset-env -D</span>
<span class="token comment">// css压缩  npm i optimize-css-assets-webpack-plugin -D</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/js/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/built.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 创建style标签，将样式放入</span>
          <span class="token comment">// &#39;style-loader&#39;,</span>
          <span class="token comment">// 这个loader取代style-loader 作用：提取 js中的css成单独文件</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token comment">// 将css文件整合到js文件中</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">/*
          *   css兼容性处理： postcss ——&gt; postcss-loader postcss-preset-env
          *
          *   帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式
          *
          *   &quot;browserslist&quot;: {
                &quot;development&quot;: [
                  &quot;last 1 chrome version&quot;,
                  &quot;last 1 firefox version&quot;,
                  &quot;last 1 safari version&quot;
                ],
                &quot;production&quot;: [
                  &quot;&gt;0.2%&quot;,
                  &quot;not dead&quot;,
                  &quot;not op_mini all&quot;
                ]
              }
          *
          *
          *             * */</span>
          <span class="token comment">// 使用loader的默认配置</span>
          <span class="token comment">// &#39;postcss-loader&#39;,</span>
          <span class="token comment">// 修改loader配置</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">&#39;postcss-preset-env&#39;</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/built.css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 压缩css</span>
    <span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js-语法检查" tabindex="-1"><a class="header-anchor" href="#js-语法检查"><span>js 语法检查</span></a></h3><ul><li>npm i eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import -D</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;eslint-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/build.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">/*
        webpack5 以下版本
        * 语法检查：eslint eslint-loader
        * 注意：只检查 自己写的代码，第三方库不用检查
        * 设置检查规则：
        *   package.json中 配置eslintConfig
        *   &quot;eslintConfig&quot;: {
              &quot;extends&quot;: &quot;airbnb-base&quot;
            }
        *   aribnb eslint eslint-config-airbnb-base eslint-plugin-import
        *
        * */</span>
      <span class="token comment">// {</span>
      <span class="token comment">//   test: /\\.js$/,</span>
      <span class="token comment">//   loader: &quot;eslint-loader&quot;,</span>
      <span class="token comment">//   exclude: /node_modules/,</span>
      <span class="token comment">//   options: {</span>
      <span class="token comment">//     // 自动修复eslint 的错误</span>
      <span class="token comment">//     fix:true</span>
      <span class="token comment">//   }</span>
      <span class="token comment">// }</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">/*
      * webpack5
      * npm i eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import -D
      package.json中配置
      *&quot;eslintConfig&quot;: {
            &quot;extends&quot;: &quot;airbnb-base&quot;,
            #！！！！如果没使用alias下面的不用配置！！！！！
            &quot;settings&quot;: {
              &quot;import/resolver&quot;: {
                &quot;webpack&quot;: {
                  &quot;config&quot;: &quot;webpack.config.js&quot;
                }
              }
            }
          }
      * */</span>
      <span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;coffee&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">&#39;/node_modules/&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js-兼容性处理" tabindex="-1"><a class="header-anchor" href="#js-兼容性处理"><span>js 兼容性处理</span></a></h3><ol><li><p>基本js兼容性处理</p><ul><li>npm i babel-loader @babel/core @babel/preset-env -D</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;eslint-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 全部js兼容性处理——&gt; @babel/polyfill</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/build.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">/*
      * js兼容性处理：babel-loader @babel/core @babel/preset-env
      * 1. 基本js兼容性处理——&gt; @babel/preset-env  问题：只能转换基本语法 ，例如promise不能转换
      * 2. 全部js兼容性处理——&gt; @babel/polyfill  问题：只要解决部分 兼容性问题 ，但是将所有兼容性代码全部引入，体积太大了
      * 3. 需要做兼容性处理的就做按需加载 ——&gt; corejs
      * */</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 预设：指示babel做怎么样的兼容性处理</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
              <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    * webpack5
    * npm i eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import -D
    *&quot;eslintConfig&quot;: {
          &quot;extends&quot;: &quot;airbnb-base&quot;,
          #！！！！如果没使用alias下面的不用配置！！！！！
          &quot;settings&quot;: {
            &quot;import/resolver&quot;: {
              &quot;webpack&quot;: {
                &quot;config&quot;: &quot;webpack.config.js&quot;
              }
            }
          }
        }
    * */</span>
    <span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;coffee&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">&#39;/node_modules/&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>全部js兼容性处理</p><ul><li>npm i @babel/polyfill -D</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;eslint-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 全部js兼容性处理——&gt; @babel/polyfill</span>
   <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/polyfill&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/build.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">/*
      * js兼容性处理：babel-loader @babel/core @babel/preset-env
      * 1. 基本js兼容性处理——&gt; @babel/preset-env  问题：只能转换基本语法 ，例如promise不能转换
      * 2. 全部js兼容性处理——&gt; @babel/polyfill  问题：只要解决部分 兼容性问题 ，但是将所有兼容性代码全部引入，体积太大了
      * 3. 需要做兼容性处理的就做按需加载 ——&gt; corejs
      * */</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 预设：指示babel做怎么样的兼容性处理</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
              <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    * webpack5
    * npm i eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import -D
    *&quot;eslintConfig&quot;: {
          &quot;extends&quot;: &quot;airbnb-base&quot;,
          #！！！！如果没使用alias下面的不用配置！！！！！
          &quot;settings&quot;: {
            &quot;import/resolver&quot;: {
              &quot;webpack&quot;: {
                &quot;config&quot;: &quot;webpack.config.js&quot;
              }
            }
          }
        }
    * */</span>
    <span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;coffee&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">&#39;/node_modules/&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>按需加载兼容性处理</p><ul><li>npm i core-js -D</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;eslint-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 全部js兼容性处理——&gt; @babel/polyfill</span>
  <span class="token comment">// entry: [&#39;@babel/polyfill&#39;,&#39;./src/index.js&#39;],</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/build.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">/*
      * js兼容性处理：babel-loader @babel/core @babel/preset-env
      * 1. 基本js兼容性处理——&gt; @babel/preset-env  问题：只能转换基本语法 ，例如promise不能转换
      * 2. 全部js兼容性处理——&gt; @babel/polyfill  问题：只要解决部分 兼容性问题 ，但是将所有兼容性代码全部引入，体积太大了
      * 3. 需要做兼容性处理的就做按需加载 ——&gt; corejs
      * */</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 预设：指示babel做怎么样的兼容性处理</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
              <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token comment">// 按需加载</span>
                <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
                <span class="token comment">// 指定corejs版本</span>
                <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// 指定兼容性做到哪个版本的浏览器</span>
                <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&#39;17&#39;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    * webpack5
    * npm i eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import -D
    *&quot;eslintConfig&quot;: {
          &quot;extends&quot;: &quot;airbnb-base&quot;,
          #！！！！如果没使用alias下面的不用配置！！！！！
          &quot;settings&quot;: {
            &quot;import/resolver&quot;: {
              &quot;webpack&quot;: {
                &quot;config&quot;: &quot;webpack.config.js&quot;
              }
            }
          }
        }
    * */</span>
    <span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;coffee&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">&#39;/node_modules/&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="js-压缩" tabindex="-1"><a class="header-anchor" href="#js-压缩"><span>js 压缩</span></a></h3><ul><li>将mode设置为production即可自动压缩js文件</li></ul><h3 id="html-压缩" tabindex="-1"><a class="header-anchor" href="#html-压缩"><span>html 压缩</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;eslint-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 全部js兼容性处理——&gt; @babel/polyfill</span>
  <span class="token comment">// entry: [&#39;@babel/polyfill&#39;,&#39;./src/index.js&#39;],</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/build.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">/*
      * js兼容性处理：babel-loader @babel/core @babel/preset-env
      * 1. 基本js兼容性处理——&gt; @babel/preset-env  问题：只能转换基本语法 ，例如promise不能转换
      * 2. 全部js兼容性处理——&gt; @babel/polyfill  问题：只要解决部分 兼容性问题 ，但是将所有兼容性代码全部引入，体积太大了
      * 3. 需要做兼容性处理的就做按需加载 ——&gt; corejs
      * */</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 预设：指示babel做怎么样的兼容性处理</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
              <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token comment">// 按需加载</span>
                <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
                <span class="token comment">// 指定corejs版本</span>
                <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// 指定兼容性做到哪个版本的浏览器</span>
                <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&#39;17&#39;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 移除空格</span>
        <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 移除注释</span>
        <span class="token literal-property property">removeComments</span><span class="token operator">:</span><span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    * webpack5
    * npm i eslint eslint-webpack-plugin eslint-config-airbnb-base eslint-plugin-import -D
    *&quot;eslintConfig&quot;: {
          &quot;extends&quot;: &quot;airbnb-base&quot;,
          #！！！！如果没使用alias下面的不用配置！！！！！
          &quot;settings&quot;: {
            &quot;import/resolver&quot;: {
              &quot;webpack&quot;: {
                &quot;config&quot;: &quot;webpack.config.js&quot;
              }
            }
          }
        }
    * */</span>
    <span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;coffee&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">&#39;/node_modules/&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 生产环境下会自动压缩js代码</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个基本的生产环境配置</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//压缩css文件</span>
<span class="token keyword">const</span> OptimizeCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// js语法检查</span>
<span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;eslint-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 打包html资源</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 定义nodejs环境变量 决定browserslist使用哪个环境</span>
process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">&#39;production&#39;</span>
<span class="token comment">// 复用loader</span>
<span class="token keyword">const</span> commonCssLoader <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">//  MiniCssExtractPlugin.loader 取代style-loader</span>
  <span class="token comment">// 为了提取成单独的css文件</span>
  MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
  <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 对样式做兼容性处理,还需要在package.json中配置browserslist</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;postcss-preset-env&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/built.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>commonCssLoader<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>commonCssLoader<span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">/*
      * 正常来讲，一个文件只能被一个loader处理，当一个文件被多个loader处理时，那么一定要指定loader执行的顺序
      * 先 执行eslint，在执行babel
      *  enforce:&#39;pre&#39;  表示优先执行
      * */</span>
      <span class="token comment">// js做兼容性配置</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 预设：指示babel做怎么样的兼容性处理</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
              <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token comment">// 按需加载</span>
                <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
                <span class="token comment">// 指定corejs版本</span>
                <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// 指定兼容性做到哪个版本的浏览器</span>
                <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&#39;17&#39;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 图片</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset/resource&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//解析</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//转base64的条件</span>
          <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 25kb</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// [hash:6] 取图片哈希值的前十位</span>
        <span class="token comment">// [ext] 取文件原来扩展名</span>
        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;image/[name].[hash:6][ext]&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">//打包后对资源的引入，文件命名已经有/img了</span>
          <span class="token comment">// publicPath: &#39;./&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 处理html中的img标签</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;html-loader&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 排除 css/js/html资源</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(css|js|html|less|jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// webpack5以下使用方式</span>
        <span class="token comment">// loader: &quot;file-loader&quot;</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset/resource&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;media/[name].[hash:6][ext]&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">//打包后对资源的引入，文件命名已经有/img了</span>
          <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 将打包生成的css文件放在一个统一的目录下</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/built.css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//压缩css文件</span>
    <span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//  js语法检查</span>
    <span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;coffee&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">&#39;/node_modules/&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 打包HTML</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="五、webpack-优化配置" tabindex="-1"><a class="header-anchor" href="#五、webpack-优化配置"><span>五、Webpack 优化配置</span></a></h1><h2 id="_5-1-开发环境性能优化配置" tabindex="-1"><a class="header-anchor" href="#_5-1-开发环境性能优化配置"><span>5.1 开发环境性能优化配置</span></a></h2><h3 id="_5-1-1优化打包构建速度" tabindex="-1"><a class="header-anchor" href="#_5-1-1优化打包构建速度"><span>5.1.1优化打包构建速度</span></a></h3><h4 id="_5-1-1-1hmr-模块热替换" tabindex="-1"><a class="header-anchor" href="#_5-1-1-1hmr-模块热替换"><span>5.1.1.1HMR（模块热替换）</span></a></h4><p>HMR: hot module replacement 热模块替换 / 模块热替换</p><p>作用：一个模块发生变化，只会重新打包构建这一个模块（而不是打包所有模块） ，极大提升构建速度</p><p>代码：只需要在 devServer 中设置 hot 为 true，就会自动开启HMR功能（只能在开发模式下使用）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 开启HMR功能</span>
  <span class="token comment">// 当修改了webpack配置，新配置要想生效，必须重启webpack服务</span>
  <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每种文件实现热模块替换的情况：</p><ul><li><p>样式文件：可以使用HMR功能，因为开发环境下使用的 style-loader 内部默认实现了热模块替换功能</p></li><li><p>js 文件：默认不能使用HMR功能（修改一个 js 模块所有 js 模块都会刷新）</p><p>--&gt; 实现 HMR 需要修改 js 代码（添加支持 HMR 功能的代码）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 绑定</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一旦 module.hot 为true，说明开启了HMR功能。 --&gt; 让HMR功能代码生效</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&#39;./print.js&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 方法会监听 print.js 文件的变化，一旦发生变化，只有这个模块会重新打包构建，其他模块不会。</span>
    <span class="token comment">// 会执行后面的回调函数</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：HMR 功能对 js 的处理，只能处理非入口 js 文件的其他文件。</p></li><li><p>html 文件: 默认不能使用 HMR 功能（html 不用做 HMR 功能，因为只有一个 html 文件，不需要再优化）</p><p>使用 HMR 会导致问题：html 文件不能热更新了（不会自动打包构建）</p><p>解决：修改 entry 入口，将 html 文件引入（这样 html 修改整体刷新）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./src/js/index.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_5-1-2优化代码调试" tabindex="-1"><a class="header-anchor" href="#_5-1-2优化代码调试"><span>5.1.2优化代码调试</span></a></h3><h4 id="_5-1-2-1-source-map" tabindex="-1"><a class="header-anchor" href="#_5-1-2-1-source-map"><span>5.1.2.1 source-map</span></a></h4><p>source-map：一种提供<strong>源代码到构建后代码的映射</strong>的技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）</p><p>参数：<code>[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map</code></p><p>代码：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>devtool: &#39;eval-source-map&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可选方案：[生成source-map的位置|给出的错误代码信息]</p><ul><li>source-map：外部，错误代码准确信息 和 源代码的错误位置</li><li>inline-source-map：内联，只生成一个内联 source-map，错误代码准确信息 和 源代码的错误位置</li><li>hidden-source-map：外部，错误代码错误原因，但是没有错误位置（为了隐藏源代码），不能追踪源代码错误，只能提示到构建后代码的错误位置</li><li>eval-source-map：内联，每一个文件都生成对应的 source-map，都在 eval 中，错误代码准确信息 和 源代码的错误位</li><li>nosources-source-map：外部，错误代码准确信息，但是没有任何源代码信息（为了隐藏源代码）</li><li>cheap-source-map：外部，错误代码准确信息 和 源代码的错误位置，只能把错误精确到整行，忽略列</li><li>cheap-module-source-map：外部，错误代码准确信息 和 源代码的错误位置，module 会加入 loader 的 source-map</li></ul><p>内联 和 外部的区别：1. 外部生成了文件，内联没有 2. 内联构建速度更快</p><p>开发/生产环境可做的选择：</p><p><strong>开发环境</strong>：需要考虑速度快，调试更友好</p><ul><li>速度快( eval &gt; inline &gt; cheap &gt;... ) <ol><li>eval-cheap-souce-map</li><li>eval-source-map</li></ol></li><li>调试更友好 <ol><li>souce-map</li><li>cheap-module-souce-map</li><li>cheap-souce-map</li></ol></li></ul><p><strong>最终得出最好的两种方案 --&gt; eval-source-map（完整度高，内联速度快） / eval-cheap-module-souce-map（错误提示忽略列但是包含其他信息，内联速度快）</strong></p><p><strong>生产环境</strong>：需要考虑源代码要不要隐藏，调试要不要更友好</p><ul><li>内联会让代码体积变大，所以在生产环境不用内联</li><li>隐藏源代码 <ol><li>nosources-source-map 全部隐藏</li><li>hidden-source-map 只隐藏源代码，会提示构建后代码错误信息</li></ol></li></ul><p><strong>最终得出最好的两种方案 --&gt; source-map（最完整） / cheap-module-souce-map（错误提示一整行忽略列）</strong></p><h2 id="_5-2-生产环境性能优化配置" tabindex="-1"><a class="header-anchor" href="#_5-2-生产环境性能优化配置"><span>5.2 生产环境性能优化配置</span></a></h2><h3 id="_5-2-1-优化打包构建速度" tabindex="-1"><a class="header-anchor" href="#_5-2-1-优化打包构建速度"><span>5.2.1 优化打包构建速度</span></a></h3><h4 id="_5-2-1-1-oneof" tabindex="-1"><a class="header-anchor" href="#_5-2-1-1-oneof"><span>5.2.1.1 oneof</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 以下loader只会匹配一个</span>
      <span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>commonCssLoader<span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>commonCssLoader<span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">/*
        * 正常来讲，一个文件只能被一个loader处理，当一个文件被多个loader处理时，那么一定要指定loader执行的顺序
        * 先 执行eslint，在执行babel
        *  enforce:&#39;pre&#39;  表示优先执行
        * */</span>
        <span class="token comment">// js做兼容性配置</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 预设：指示babel做怎么样的兼容性处理</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">[</span>
                <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token comment">// 按需加载</span>
                  <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
                  <span class="token comment">// 指定corejs版本</span>
                  <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token comment">// 指定兼容性做到哪个版本的浏览器</span>
                  <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&#39;17&#39;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 图片</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset/resource&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">//解析</span>
          <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//转base64的条件</span>
            <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 25kb</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// [hash:6] 取图片哈希值的前十位</span>
          <span class="token comment">// [ext] 取文件原来扩展名</span>
          <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;image/[name].[hash:6][ext]&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">//打包后对资源的引入，文件命名已经有/img了</span>
            <span class="token comment">// publicPath: &#39;./&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 处理html中的img标签</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;html-loader&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token comment">// 排除 css/js/html资源</span>
          <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(css|js|html|less|jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token comment">// webpack5以下使用方式</span>
          <span class="token comment">// loader: &quot;file-loader&quot;</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset/resource&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;media/[name].[hash:6][ext]&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">//打包后对资源的引入，文件命名已经有/img了</span>
            <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-1-2-babel缓存" tabindex="-1"><a class="header-anchor" href="#_5-2-1-2-babel缓存"><span>5.2.1.2 babel缓存</span></a></h4><p>1.babel缓存 cacheDirectory:true 让第二次打包构建速度变快</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 预设：指示babel做怎么样的兼容性处理</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token comment">// 按需加载</span>
          <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// 指定corejs版本</span>
          <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// 指定兼容性做到哪个版本的浏览器</span>
          <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&#39;17&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 开启babel缓存</span>
    <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span><span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-1-3-多进程打包" tabindex="-1"><a class="header-anchor" href="#_5-2-1-3-多进程打包"><span>5.2.1.3 多进程打包</span></a></h4><p>当项目中js文件较多，打包较满时，推荐配置使用</p><p>使用步骤：</p><ol><li><p>npm i thread-loader -D</p></li><li><p>配置loader</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 开启多进程打包</span>
    <span class="token comment">// 进程启动大概为600ms，进程通信也有开销，只有工作消耗比较长，才需要多进程打包</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;thread-loader&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">workers</span><span class="token operator">:</span><span class="token number">2</span> <span class="token comment">// 进程2个</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 预设：指示babel做怎么样的兼容性处理</span>
        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">[</span>
            <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token comment">// 按需加载</span>
              <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
              <span class="token comment">// 指定corejs版本</span>
              <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token comment">// 指定兼容性做到哪个版本的浏览器</span>
              <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&#39;17&#39;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 开启babel缓存</span>
        <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="_5-2-1-4-externals" tabindex="-1"><a class="header-anchor" href="#_5-2-1-4-externals"><span>5.2.1.4 externals</span></a></h4><p>externals主要作用是拒绝将某些包打包到文件中</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*
* loader：1.下载 2.使用（配置loader）
* plugins：1.下载 2.引入 3.使用
*
* */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/built.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// loader的配置</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//plugins的配置</span>
    <span class="token comment">//html-webpack-plugin</span>
      <span class="token comment">// 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）</span>
      <span class="token comment">// 需要有结构的HTML文件</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 复制 &#39;./src/index.html&#39; 文件,自动引入打包输出的所有资源（JS/CSS）</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 拒绝jQuery这个包被打包进去</span>
    <span class="token literal-property property">jquery</span><span class="token operator">:</span><span class="token string">&#39;jQuery&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-1-5-dll" tabindex="-1"><a class="header-anchor" href="#_5-2-1-5-dll"><span>5.2.1.5 dll</span></a></h4><p>dll是可以将某些库分离出来单独打包一次后，以后再打包项目时，不需要再多次打包，提高了打包的效率</p><p>使用流程：</p><ol><li><p>创建 webpack.dll.js</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*
* 使用dll技术对某些库进行打包（jquery、react、vue）
* 当你运行webpack时，默认查找 webpack.config.js 配置文件
* --》 webpack --config webpack.dll.js
*
*
* */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 最终打包生成的[name] --&gt; jquery</span>
    <span class="token comment">// [&#39;jquery&#39;] --&gt; 要打包的库是jquery</span>
    <span class="token literal-property property">jquery</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;dll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;[name]_[hash]&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 打包 生成一个 manifest.json --&gt; 提供和jQuery的映射关系</span>
      <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;[name]_[hash]&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 映射库的暴露内容名称</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;dll/manifest.json&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&#39;production&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行 webpack --config webpack.dll.js，打包后会在目录下生成 相应的dll目录，以及manifest.json文件</p></li><li><p>npm i add-asset-html-webpack-plugin -D</p></li><li><p>配置对应的插件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>resolve<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//</span>
<span class="token keyword">const</span> AddAssetHtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;add-asset-html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/built.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// loader的配置</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//plugins的配置</span>
    <span class="token comment">//html-webpack-plugin</span>
    <span class="token comment">// 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）</span>
    <span class="token comment">// 需要有结构的HTML文件</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 复制 &#39;./src/index.html&#39; 文件,自动引入打包输出的所有资源（JS/CSS）</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 告诉webpack哪些库不参与打包，同时使用的名称也需要改变</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllReferencePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">manifest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dll/manifest.json&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 配置到后引入对应的jquery</span>
    <span class="token keyword">new</span> <span class="token class-name">AddAssetHtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filepath</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dll/jquery.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">publicPath</span><span class="token operator">:</span><span class="token string">&#39;./&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_5-2-2-优化代码运行的性能" tabindex="-1"><a class="header-anchor" href="#_5-2-2-优化代码运行的性能"><span>5.2.2 优化代码运行的性能</span></a></h3><h4 id="_5-2-2-1-缓存-hash-chunkhash-contenthash" tabindex="-1"><a class="header-anchor" href="#_5-2-2-1-缓存-hash-chunkhash-contenthash"><span>5.2.2.1 缓存(hash-chunkhash-contenthash)</span></a></h4><p>文件资源缓存 让代码上线 运行缓存更好使用</p><ol><li>修改文件名[hash:10] <ul><li>问题：由于js和css同时使用一个hash值，如果重新打包，会导致所有缓存失效（只改动一个文件</li></ul></li><li>chunkhash <ul><li>根据chunk生成的hash值，如果 打包来源于同一个chunk，那么hash值就一样</li><li>问题：因为css是在js中被引入的，所以同属于一个chunk</li></ul></li><li>contenthash <ul><li>根据文件内容生成 hash值，不同文件hash值一定不一样</li></ul></li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//output中的入口js文件</span>
<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/built.[contenthash:10].js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//plugins中的css文件</span>
<span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/built.[contenthash:10].css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h4><h4 id="_5-2-2-2-tree-shaking" tabindex="-1"><a class="header-anchor" href="#_5-2-2-2-tree-shaking"><span>5.2.2.2 tree shaking</span></a></h4><p>tree shaking 去除无用代码，减少代码体积</p><p>前提：</p><ol><li>必须使用ES6模块化代码</li><li>开启production模式</li></ol><p>注意：</p><ul><li>在package.json中配置 &quot;sideEffects&quot;:false 所有代码没有副作用（都可以进行tree shaking）</li><li>问题：可能会把css / @babel/lolyfill (副作用)文件干掉</li><li>&quot;sideEffects&quot;:[&quot;*.css&quot;] 保留css</li></ul><h4 id="_5-2-2-3-code-split" tabindex="-1"><a class="header-anchor" href="#_5-2-2-3-code-split"><span>5.2.2.3 code split</span></a></h4><p>将打包后的js代码按照不同的方式进行分割。</p><p>方式一：更改入口文件配置</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 多入口：有一个入口，就输出一个bundle</span>
  <span class="token literal-property property">main</span><span class="token operator">:</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token string">&#39;./src/js/test.js&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// [name]: 取文件名</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/[name].[contenthash:10].js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二：optimization配置</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 可以将node_modules中的代码单独打包成一个chunk最终输出</span>
<span class="token comment">// 自动分析多入口chunk中，有没有公共的文件，如果有会打包成单独一个chunk</span>
<span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minRemainingSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxAsyncRequests</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxInitialRequests</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enforceSizeThreshold</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">defaultVendors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">reuseExistingChunk</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">reuseExistingChunk</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式三：通过import()方式</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 通过js代码，让某个文件单独打包成一个chunk</span>
<span class="token comment">// eslint-disable-next-line</span>
<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName:&#39;test&#39; */</span><span class="token string">&#39;./js/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-2-4-懒加载和预加载" tabindex="-1"><a class="header-anchor" href="#_5-2-2-4-懒加载和预加载"><span>5.2.2.4 懒加载和预加载</span></a></h4><ul><li>懒加载：当文件需要时才加载</li><li>预加载prefetch：会在使用之前，提前加载js文件</li><li>正常加载可以认为是并行加载（同一时间加载多个文件）</li><li>预加载 prefetch：等其他资源加载完毕，浏览器空闲了，在偷偷加载资源</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName:&#39;test&#39;,webpackPrefetch:true */</span><span class="token string">&#39;./js/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>mul<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mul</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-2-5-pwa" tabindex="-1"><a class="header-anchor" href="#_5-2-2-5-pwa"><span>5.2.2.5 PWA</span></a></h4><p>PWA:渐进式网络开发应用程序（离线可访问）</p><p>使用步骤：</p><ol><li><p>下载 workbox-webpack-plugin：npm i workbox-webpack-plugin -D</p></li><li><p>使用插件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">WorkboxWebpackPlugin<span class="token punctuation">.</span>GenerateSW</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">/*
  * 1.帮助serviceWorker快速启动
  * 2. 删除旧的serviceworker
  *
  * 生成一个serviceworker配置文件
  * */</span>
  <span class="token literal-property property">clientsClaim</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skipWaiting</span><span class="token operator">:</span><span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>注册serviceWorker（入口js文件中）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 注册serviceworker</span>
<span class="token comment">// 处理兼容性问题</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;serviceWorker&#39;</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span><span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;/service-worker.js&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;serviceworker注册成功了&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;serviceworker注册失败了&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>注意：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> 1.eslint不认识 window、navigator全局变量
   解决：修改package.json中eslintConfig配置
   &quot;eslintConfig&quot;: {
    &quot;extends&quot;: &quot;airbnb-base&quot;,
    &quot;env&quot;: {
      &quot;browser&quot;: true
    }
  },
 2.service worker代码必须运行在服务器上
 npm i serve -g
 serve -s build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="六、webpack配置详解" tabindex="-1"><a class="header-anchor" href="#六、webpack配置详解"><span>六、Webpack配置详解</span></a></h1><h2 id="_6-1-entry" tabindex="-1"><a class="header-anchor" href="#_6-1-entry"><span>6.1 entry</span></a></h2><p>1.string： &#39;./src/index.js&#39; 单入口 打包形成一个chunk，输出一个bundle文件，此时chunk的名称默认是main</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">&#39;./src/index.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.array ：[&#39;./src/index.js&#39;,&#39;./src/add.js&#39;] 多入口 所有入口文件最终会形成一个chunk，输出出去只有 一个bundle文件。一般只有在HMR功能中让HTML热更新生效</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;./src/add.js&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.object：多入口，有几个文件就形成几个chunk，输出几个bundle文件，此时chunk的名称是key</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">index</span><span class="token operator">:</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">add</span><span class="token operator">:</span><span class="token string">&#39;./src/add.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.特殊用法</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token comment">// 所有入口文件最终只会形成一个chunk，输出出去只有一个bundle</span>
  <span class="token literal-property property">index</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;./src/count.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token comment">//形成一个chunk</span>
  <span class="token literal-property property">add</span><span class="token operator">:</span><span class="token string">&#39;./src/add.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2-output" tabindex="-1"><a class="header-anchor" href="#_6-2-output"><span>6.2 output</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 文件名称 指定名称+目录</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/[name].js&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 输出文件目录（将来所有资源输出的公共目录）</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 所有资源引入公共路径前缀--&gt; &#39;imgs/a.jpg&#39; --&gt; &#39;/imgs/a.jpg&#39;</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&quot;js/[name]_chunk.js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;[name]&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 整个库向外暴露的变量名</span>
  <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">&quot;window&quot;</span>  <span class="token comment">// 变量名添加到哪个上 window global browser node</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-3-module" tabindex="-1"><a class="header-anchor" href="#_6-3-module"><span>6.3 module</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// loader配置</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token comment">// 排除node_modules下的文件</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_moudles</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token comment">// 只检查src下的js文件</span>
      <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">//  优先执行</span>
      <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&quot;pre&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 延后执行</span>
      <span class="token comment">// enforce:&quot;post&quot;</span>
      <span class="token comment">// 单个loader用loader</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;eslint-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 以下配置只会生效一个</span>
      <span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-4-resolve" tabindex="-1"><a class="header-anchor" href="#_6-4-resolve"><span>6.4 resolve</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 解析模块的规则</span>
<span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 配置路径别名:优点：简写路径 缺点：路径没有提示</span>
  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">$css</span><span class="token operator">:</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;src/css&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置省略文件路径的后缀名</span>
  <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;.css&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;.jsx&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 告诉webpack解析模块时是去哪个目录找</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;../../node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-5-devserver" tabindex="-1"><a class="header-anchor" href="#_6-5-devserver"><span>6.5 devServer</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 运行代码的目录</span>
  <span class="token comment">// contentBase:resolve(__dirname,&#39;build&#39;),</span>
  <span class="token keyword">static</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">directory</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token comment">// 忽略文件</span>
      <span class="token literal-property property">ignored</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 启动 gzip压缩</span>
  <span class="token literal-property property">compress</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 端口号</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token comment">// 开启HMR功能</span>
  <span class="token literal-property property">hot</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 域名</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 自动打开浏览器</span>
  <span class="token literal-property property">open</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 不要显示启动服务器日志信息</span>
  <span class="token literal-property property">client</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logging</span><span class="token operator">:</span><span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 如果出错了，不要全屏提示</span>
    <span class="token literal-property property">overlay</span><span class="token operator">:</span><span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 除了一些 基本启动信息外，其他内容也不要显示</span>
  <span class="token literal-property property">quiet</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span><span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&#39;^api&#39;</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-6-optimization" tabindex="-1"><a class="header-anchor" href="#_6-6-optimization"><span>6.6 optimization</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认值可以不用写</span>
    <span class="token comment">/*
    *      minSize: 30*1024, // 分割的chunk最小为30kb
    maxSize: 0, // 最大没有限制
    minChunks: 1, // 要提取的chunk最少被引用一次
    maxAsyncRequests: 5,// 按需加载时并行加载的文件最大数量
    maxInitialRequests: 3, // 入口js文件最大并行请求量
    automaticNameDelimiter: &quot;~&quot;, // 名称连接符
    name:true, // 可以使用命名规则
    cacheGroups: { // 分割的chunk组
      // node_modules文件会被打包 到vendors组的chunk中 -- vendors~xxx.js
      // 满足上面的公共规则
      vendor : {
        test: /[\\\\/]node_modules[\\\\/]/,
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
    * */</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 将当前模块记录其他模块的hash单独打包成为一个文件 runtime</span>
  <span class="token comment">// 解决：修改a文件导致b文件的contenthash变化</span>
  <span class="token literal-property property">runtimeChunk</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">name</span><span class="token operator">:</span> <span class="token parameter">entrypoint</span> <span class="token operator">=&gt;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">runtime-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entrypoint<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 配置生产环境的压缩方案</span>
      <span class="token keyword">new</span> <span class="token class-name">TerserWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 开启缓存</span>
        <span class="token literal-property property">cache</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 开启多进程打包</span>
        <span class="token literal-property property">parallel</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 启动source-map</span>
        <span class="token literal-property property">sourceMap</span><span class="token operator">:</span><span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,138))])}const y=l(r,[["render",v],["__file","webpack.html.vue"]]),h=JSON.parse('{"path":"/web/webpack/webpack.html","title":"webpack相关","lang":"zh-CN","frontmatter":{"title":"webpack相关","icon":"gears","order":4,"category":["web"],"tag":["js"],"navbar":true,"sidebar":true,"breadcrumb":true,"pageInfo":false,"contributors":true,"editLink":true,"lastUpdated":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":false,"description":"webpack 一、Webpack 简介 1.1 webpack 是什么 webpack 是一种前端资源构建工具，一个静态模块打包器(module bundler)。 在webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。 它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundl...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/web/webpack/webpack.html"}],["meta",{"property":"og:site_name","content":"孜然地球"}],["meta",{"property":"og:title","content":"webpack相关"}],["meta",{"property":"og:description","content":"webpack 一、Webpack 简介 1.1 webpack 是什么 webpack 是一种前端资源构建工具，一个静态模块打包器(module bundler)。 在webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。 它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-02T10:18:56.000Z"}],["meta",{"property":"article:author","content":"孜然地球"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:modified_time","content":"2024-07-02T10:18:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"webpack相关\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-02T10:18:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"孜然地球\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1.1 webpack 是什么","slug":"_1-1-webpack-是什么","link":"#_1-1-webpack-是什么","children":[]},{"level":2,"title":"1.2 webpack 五个核心概念","slug":"_1-2-webpack-五个核心概念","link":"#_1-2-webpack-五个核心概念","children":[]},{"level":2,"title":"2.1 初始化配置","slug":"_2-1-初始化配置","link":"#_2-1-初始化配置","children":[]},{"level":2,"title":"2.2 编译打包应用","slug":"_2-2-编译打包应用","link":"#_2-2-编译打包应用","children":[{"level":3,"title":"打包样式资源","slug":"打包样式资源","link":"#打包样式资源","children":[]},{"level":3,"title":"打包 html 资源","slug":"打包-html-资源","link":"#打包-html-资源","children":[]},{"level":3,"title":"打包图片资源","slug":"打包图片资源","link":"#打包图片资源","children":[]},{"level":3,"title":"打包其他资源","slug":"打包其他资源","link":"#打包其他资源","children":[]},{"level":3,"title":"devServer","slug":"devserver","link":"#devserver","children":[]},{"level":3,"title":"提取 css 成单独文件","slug":"提取-css-成单独文件","link":"#提取-css-成单独文件","children":[]},{"level":3,"title":"css 兼容性处理（webpack5）","slug":"css-兼容性处理-webpack5","link":"#css-兼容性处理-webpack5","children":[]},{"level":3,"title":"压缩 css","slug":"压缩-css","link":"#压缩-css","children":[]},{"level":3,"title":"js 语法检查","slug":"js-语法检查","link":"#js-语法检查","children":[]},{"level":3,"title":"js 兼容性处理","slug":"js-兼容性处理","link":"#js-兼容性处理","children":[]},{"level":3,"title":"js 压缩","slug":"js-压缩","link":"#js-压缩","children":[]},{"level":3,"title":"html 压缩","slug":"html-压缩","link":"#html-压缩","children":[]}]},{"level":2,"title":"5.1 开发环境性能优化配置","slug":"_5-1-开发环境性能优化配置","link":"#_5-1-开发环境性能优化配置","children":[{"level":3,"title":"5.1.1优化打包构建速度","slug":"_5-1-1优化打包构建速度","link":"#_5-1-1优化打包构建速度","children":[]},{"level":3,"title":"5.1.2优化代码调试","slug":"_5-1-2优化代码调试","link":"#_5-1-2优化代码调试","children":[]}]},{"level":2,"title":"5.2 生产环境性能优化配置","slug":"_5-2-生产环境性能优化配置","link":"#_5-2-生产环境性能优化配置","children":[{"level":3,"title":"5.2.1 优化打包构建速度","slug":"_5-2-1-优化打包构建速度","link":"#_5-2-1-优化打包构建速度","children":[]},{"level":3,"title":"5.2.2 优化代码运行的性能","slug":"_5-2-2-优化代码运行的性能","link":"#_5-2-2-优化代码运行的性能","children":[]}]},{"level":2,"title":"6.1 entry","slug":"_6-1-entry","link":"#_6-1-entry","children":[]},{"level":2,"title":"6.2 output","slug":"_6-2-output","link":"#_6-2-output","children":[]},{"level":2,"title":"6.3 module","slug":"_6-3-module","link":"#_6-3-module","children":[]},{"level":2,"title":"6.4 resolve","slug":"_6-4-resolve","link":"#_6-4-resolve","children":[]},{"level":2,"title":"6.5 devServer","slug":"_6-5-devserver","link":"#_6-5-devserver","children":[]},{"level":2,"title":"6.6 optimization","slug":"_6-6-optimization","link":"#_6-6-optimization","children":[]}],"git":{"createdTime":1719915536000,"updatedTime":1719915536000,"contributors":[{"name":"sola-grj","email":"1131631886@qq.com","commits":1}]},"readingTime":{"minutes":29.85,"words":8956},"filePathRelative":"web/webpack/webpack.md","localizedDate":"2024年7月2日","excerpt":"\\n<h1>一、Webpack 简介</h1>\\n<h2>1.1 webpack 是什么</h2>\\n<p>webpack 是一种<strong>前端资源构建工具</strong>，一个静态模块打包器(module bundler)。</p>\\n<p>在webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。\\n它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)。</p>\\n<h2>1.2 webpack 五个核心概念</h2>\\n<h4>1.2.1 Entry</h4>\\n<p>入口(Entry)：指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。</p>","autoDesc":true}');export{y as comp,h as data};

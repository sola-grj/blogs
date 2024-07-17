import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as i,a as n,e as s,d as a}from"./app-B4aR5uwP.js";const t={},d=n("h1",{id:"typescript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#typescript"},[n("span",null,"TypeScript")])],-1),u=n("h2",{id:"typescript中的基本类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#typescript中的基本类型"},[n("span",null,[n("strong",null,"TypeScript中的基本类型")])])],-1),r=n("p",null,"TypeScript中的基本类型：",-1),c=n("ul",null,[n("li",null,[n("p",null,"类型声明"),n("ul",null,[n("li",null,[n("p",null,"类型声明是TS非常重要的一个特点；")]),n("li",null,[n("p",null,"通过类型声明可以指定TS中变量（参数、形参）的类型；")]),n("li",null,[n("p",null,"指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错；")]),n("li",null,[n("p",null,"简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值；")]),n("li",null,[n("p",null,"语法："),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let 变量: 类型;

let 变量: 类型 = 值;

function fn(参数: 类型, 参数: 类型): 类型{
    ...
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])])])]),n("li",null,[n("p",null,"自动类型判断"),n("ul",null,[n("li",null,"TS拥有自动的类型判断机制"),n("li",null,"当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型"),n("li",null,"所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明")])]),n("li",null,[n("p",null,"类型："),n("table",null,[n("thead",null,[n("tr",null,[n("th",null,[n("strong",null,"类型")]),n("th",null,[n("strong",null,"例子")]),n("th",null,[n("strong",null,"描述")])])]),n("tbody",null,[n("tr",null,[n("td",null,"number"),n("td",null,"1, -33, 2.5"),n("td",null,"任意数字")]),n("tr",null,[n("td",null,"string"),n("td",null,[s(`'hi', "hi", `),n("code",null,"hi")]),n("td",null,"任意字符串")]),n("tr",null,[n("td",null,"boolean"),n("td",null,"true、false"),n("td",null,"布尔值true或false")]),n("tr",null,[n("td",null,"字面量"),n("td",null,"其本身"),n("td",null,"限制变量的值就是该字面量的值")]),n("tr",null,[n("td",null,"any"),n("td",null,"*"),n("td",null,"任意类型")]),n("tr",null,[n("td",null,"unknown"),n("td",null,"*"),n("td",null,"类型安全的any")]),n("tr",null,[n("td",null,"void"),n("td",null,"空值（undefined）"),n("td",null,"没有值（或undefined）")]),n("tr",null,[n("td",null,"never"),n("td",null,"没有值"),n("td",null,"不能是任何值")]),n("tr",null,[n("td",null,"object"),n("td",{"name:孙悟空":""}),n("td",null,"任意的JS对象")]),n("tr",null,[n("td",null,"array"),n("td",null,"[1,2,3]"),n("td",null,"任意JS数组")]),n("tr",null,[n("td",null,"tuple"),n("td",null,"[4,5]"),n("td",null,"元素，TS新增类型，固定长度数组")]),n("tr",null,[n("td",null,"enum"),n("td",{"A,":"",B:""},"enum"),n("td",null,"枚举，TS中新增类型")])])])]),n("li",null,[n("p",null,"number"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"boolean"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let isDone: boolean = false;
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"string"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let color: string = "blue";
color = 'red';

let fullName: string = \`Bob Bobbington\`;
let age: number = 37;
let sentence: string = \`Hello, my name is \${fullName}.

I'll be \${age + 1} years old next month.\`;
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"字面量"),n("ul",null,[n("li",null,[n("p",null,"也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围")]),n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let color: 'red' | 'blue' | 'black';
let num: 1 | 2 | 3 | 4 | 5;
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"any"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let d: any = 4;
d = 'hello';
d = true;
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"unknown"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let notSure: unknown = 4;
notSure = 'hello';
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"void"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let unusable: void = undefined;
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"never"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`function error(message: string): never {
  throw new Error(message);
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"object（没啥用）"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let obj: object = {};
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"array"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"tuple"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let x: [string, number];
x = ["hello", 10]; 
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"enum"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"类型断言"),n("ul",null,[n("li",null,[n("p",null,"有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式："),n("ul",null,[n("li",null,[n("p",null,"第一种"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])]),n("li",null,[n("p",null,"第二种"),n("ul",null,[n("li",null,[n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])])])])])])])],-1),o=a(`<h2 id="编译选项" tabindex="-1"><a class="header-anchor" href="#编译选项"><span>编译选项</span></a></h2><h3 id="自动编译文件" tabindex="-1"><a class="header-anchor" href="#自动编译文件"><span>自动编译文件</span></a></h3><p>编译文件时，使用 -w 指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  tsc xxx.ts -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自动编译整个项目" tabindex="-1"><a class="header-anchor" href="#自动编译整个项目"><span>自动编译整个项目</span></a></h3><p>如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。</p><p><strong>但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 tsconfig.json</strong></p><p>tsconfig.json是一个JSON文件，添加配置文件后，只需只需 tsc 命令即可完成对整个项目的编译</p><p>配置选项：</p><h4 id="include" tabindex="-1"><a class="header-anchor" href="#include"><span><strong>include</strong></span></a></h4><ul><li>定义希望被编译文件所在的目录</li><li>默认值：[&quot;**/*&quot;]</li></ul><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  &quot;include&quot;:[&quot;src/**/*&quot;, &quot;tests/**/*&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述示例中，所有src目录和tests目录下的文件都会被编译,<code>**</code>表示任意目录，<code>*</code>表示任意文件</p><h4 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude"><span><strong>exclude</strong></span></a></h4><ul><li>定义需要排除在外的目录</li><li>默认值：[&quot;node_modules&quot;, &quot;bower_components&quot;, &quot;jspm_packages&quot;]</li></ul><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  &quot;exclude&quot;: [&quot;./src/hello/**/*&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述示例中，src下hello目录下的文件都不会被编译</p><h4 id="extends" tabindex="-1"><a class="header-anchor" href="#extends"><span><strong>extends</strong></span></a></h4><ul><li>定义被继承的配置文件</li></ul><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;extends&quot;: &quot;./configs/base&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述示例中，当前配置文件中会自动包含config目录下base.json中的所有配置信息</p><h4 id="files" tabindex="-1"><a class="header-anchor" href="#files"><span><strong>files</strong></span></a></h4><ul><li>指定被编译文件的列表，<strong>只有需要编译的文件少时才会用到</strong></li></ul><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;files&quot;: [
    &quot;core.ts&quot;,
    &quot;sys.ts&quot;,
    &quot;types.ts&quot;,
    &quot;scanner.ts&quot;,
    &quot;parser.ts&quot;,
    &quot;utilities.ts&quot;,
    &quot;binder.ts&quot;,
    &quot;checker.ts&quot;,
    &quot;tsc.ts&quot;
  ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列表中的文件都会被TS编译器所编译</li></ul><h4 id="compileroptions" tabindex="-1"><a class="header-anchor" href="#compileroptions"><span>compilerOptions</span></a></h4><ul><li>编译选项是配置文件中非常重要也比较复杂的配置选项</li><li>在compilerOptions中包含多个子选项，用来完成对编译的配置</li></ul><p>项目选项：</p><ul><li><p>target</p><ul><li><p>设置ts代码编译的目标版本</p></li><li><p>可选值：</p><ul><li>ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext</li></ul></li><li><p>示例：</p><ul><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;compilerOptions&quot;: {
    &quot;target&quot;: &quot;ES6&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>如上设置，我们所编写的ts代码将会被编译为ES6版本的js代码</p></li></ul></li><li><p>lib</p><ul><li><p>指定代码运行时所包含的库（宿主环境）</p></li><li><p>可选值：</p><ul><li>ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......</li></ul></li><li><p>示例：</p><ul><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;compilerOptions&quot;: {
    &quot;target&quot;: &quot;ES6&quot;,
    &quot;lib&quot;: [&quot;ES6&quot;, &quot;DOM&quot;],
    &quot;outDir&quot;: &quot;dist&quot;,
    &quot;outFile&quot;: &quot;dist/aa.js&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>module</p><ul><li><p>设置编译后代码使用的模块化系统</p></li><li><p>可选值：</p><ul><li>CommonJS、UMD、AMD、System、ES2020、ESNext、None</li></ul></li><li><p>示例：</p><ul><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;compilerOptions&quot;: {
    &quot;module&quot;: &quot;CommonJS&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>outDir</p><ul><li><p>编译后文件的所在目录</p></li><li><p>默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置</p></li><li><p>示例：</p><ul><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;compilerOptions&quot;: {
    &quot;outDir&quot;: &quot;dist&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置后编译后的js文件将会生成到dist目录</p></li></ul></li></ul></li><li><p>outFile</p><ul><li><p>将所有的文件编译为一个js文件</p></li><li><p>默认会将所有的编写在全局作用域中的代码合并为一个js文件，如果module制定了None、System或AMD则会将模块一起合并到文件之中</p></li><li><p>示例：</p><ul><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;compilerOptions&quot;: {
    &quot;outFile&quot;: &quot;dist/app.js&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>rootDir</p><ul><li><p>指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录</p></li><li><p>示例：</p><ul><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;compilerOptions&quot;: {
    &quot;rootDir&quot;: &quot;./src&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>allowJs</p><ul><li>是否对js文件编译</li></ul></li><li><p>checkJs</p><ul><li><p>是否对js文件进行检查</p></li><li><p>示例：</p><ul><li><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;compilerOptions&quot;: {
    &quot;allowJs&quot;: true,
    &quot;checkJs&quot;: true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>removeComments</p><ul><li>是否删除注释</li><li>默认值：false</li></ul></li><li><p>noEmit</p><ul><li>不对代码进行编译</li><li>默认值：false</li></ul></li><li><p>sourceMap</p><ul><li>是否生成sourceMap</li><li>默认值：false</li></ul></li><li><p>严格检查</p><ul><li>strict <ul><li>启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查</li></ul></li><li>alwaysStrict <ul><li>总是以严格模式对代码进行编译</li></ul></li><li>noImplicitAny <ul><li>禁止隐式的any类型</li></ul></li><li>noImplicitThis <ul><li>禁止类型不明确的this</li></ul></li><li>strictBindCallApply <ul><li>严格检查bind、call和apply的参数列表</li></ul></li><li>strictFunctionTypes <ul><li>严格检查函数的类型</li></ul></li><li>strictNullChecks <ul><li>严格的空值检查</li></ul></li><li>strictPropertyInitialization <ul><li>严格检查属性是否初始化</li></ul></li></ul></li><li><p>额外检查</p><ul><li>noFallthroughCasesInSwitch <ul><li>检查switch语句包含正确的break</li></ul></li><li>noImplicitReturns <ul><li>检查函数没有隐式的返回值</li></ul></li><li>noUnusedLocals <ul><li>检查未使用的局部变量</li></ul></li><li>noUnusedParameters <ul><li>检查未使用的参数</li></ul></li></ul></li><li><p>高级</p><ul><li>allowUnreachableCode <ul><li>检查不可达代码</li><li>可选值： <ul><li>true，忽略不可达代码</li><li>false，不可达代码将引起错误</li></ul></li></ul></li><li>noEmitOnError <ul><li>有错误的情况下不进行编译</li><li>默认值：false</li></ul></li></ul></li></ul><h2 id="typescript打包" tabindex="-1"><a class="header-anchor" href="#typescript打包"><span>TypeScript打包</span></a></h2><h3 id="webpack整合" tabindex="-1"><a class="header-anchor" href="#webpack整合"><span>webpack整合</span></a></h3><p>通常情况下，实际开发中我们都需要使用构建工具对代码进行打包；</p><p>TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS；</p><p>步骤如下：</p><h4 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目"><span>初始化项目</span></a></h4><p>进入项目根目录，执行命令 <code>npm init -y</code>，创建package.json文件</p><h4 id="下载构建工具" tabindex="-1"><a class="header-anchor" href="#下载构建工具"><span>下载构建工具</span></a></h4><p>命令如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>共安装了7个包:</p><ul><li>webpack：构建工具webpack</li><li>webpack-cli：webpack的命令行工具</li><li>webpack-dev-server：webpack的开发服务器</li><li>typescript：ts编译器</li><li>ts-loader：ts加载器，用于在webpack中编译ts文件</li><li>html-webpack-plugin：webpack中html插件，用来自动创建html文件</li><li>clean-webpack-plugin：webpack中的清除插件，每次构建都会先清除目录</li></ul><h4 id="配置webpack" tabindex="-1"><a class="header-anchor" href="#配置webpack"><span>配置webpack</span></a></h4><p>根目录下创建webpack的配置文件<code>webpack.config.js</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const path = require(&quot;path&quot;);
const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);
const { CleanWebpackPlugin } = require(&quot;clean-webpack-plugin&quot;);

module.exports = {
   optimization:{
       minimize: false // 关闭代码压缩，可选
   },

   entry: &quot;./src/index.ts&quot;,

   devtool: &quot;inline-source-map&quot;,

   devServer: {
       contentBase: &#39;./dist&#39;
   },

   output: {
       path: path.resolve(__dirname, &quot;dist&quot;),
       filename: &quot;bundle.js&quot;,
       environment: {
           arrowFunction: false // 关闭webpack的箭头函数，可选
       }
   },

   resolve: {
       extensions: [&quot;.ts&quot;, &quot;.js&quot;]
   },

   module: {
       rules: [
           {
               test: /\\.ts$/,
               use: {
                   loader: &quot;ts-loader&quot;     
               },
               exclude: /node_modules/
           }
       ]
   },

   plugins: [
       new CleanWebpackPlugin(),
       new HtmlWebpackPlugin({
           title:&#39;TS测试&#39;
       }),
   ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置ts编译选项" tabindex="-1"><a class="header-anchor" href="#配置ts编译选项"><span>配置TS编译选项</span></a></h4><p>根目录下创建tsconfig.json，配置可以根据自己需要</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
   &quot;compilerOptions&quot;: {
       &quot;target&quot;: &quot;ES2015&quot;,
       &quot;module&quot;: &quot;ES2015&quot;,
       &quot;strict&quot;: true
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改package-json配置" tabindex="-1"><a class="header-anchor" href="#修改package-json配置"><span>修改package.json配置</span></a></h4><p>修改package.json添加如下配置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
   ...
   &quot;scripts&quot;: {
       &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,
       &quot;build&quot;: &quot;webpack&quot;,
       &quot;start&quot;: &quot;webpack serve --open chrome.exe&quot;
   },
   ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="项目使用" tabindex="-1"><a class="header-anchor" href="#项目使用"><span>项目使用</span></a></h4><p>在src下创建ts文件，并在并命令行执行<code>npm run build</code>对代码进行编译；</p><p>或者执行<code>npm start</code>来启动开发服务器；</p><h3 id="babel" tabindex="-1"><a class="header-anchor" href="#babel"><span>Babel</span></a></h3><p>除了webpack，开发中还经常需要结合babel来对代码进行转换；</p><p>以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中；</p><blockquote><p>虽然TS在编译时也支持代码转换，但是只支持简单的代码转换；</p><p>对于例如：Promise等ES6特性，TS无法直接转换，这时还要用到babel来做转换；</p></blockquote><p>安装依赖包：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npm i -D @babel/core @babel/preset-env babel-loader core-js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>共安装了4个包，分别是：</p><ul><li>@babel/core：babel的核心工具</li><li>@babel/preset-env：babel的预定义环境</li><li>@babel-loader：babel在webpack中的加载器</li><li>core-js：core-js用来使老版本的浏览器支持新版ES语法</li></ul><p>修改webpack.config.js配置文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>...
module: {
    rules: [
        {
            test: /\\.ts$/,
            use: [
                {
                    loader: &quot;babel-loader&quot;,
                    options:{
                        presets: [
                            [
                                &quot;@babel/preset-env&quot;,
                                {
                                    &quot;targets&quot;:{
                                        &quot;chrome&quot;: &quot;58&quot;,
                                        &quot;ie&quot;: &quot;11&quot;
                                    },
                                    &quot;corejs&quot;:&quot;3&quot;,
                                    &quot;useBuiltIns&quot;: &quot;usage&quot;
                                }
                            ]
                        ]
                    }
                },
                {
                    loader: &quot;ts-loader&quot;,

                }
            ],
            exclude: /node_modules/
        }
    ]
}
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此一来，使用ts编译后的文件将会再次被babel处理；</p><p>使得代码可以在大部分浏览器中直接使用；</p><p>同时可以在配置选项的targets中指定要兼容的浏览器版本；</p><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象"><span>面向对象</span></a></h2><p>要想面向对象，操作对象，首先便要拥有对象；</p><p>要创建对象，必须要先定义类，所谓的类可以理解为对象的模型；</p><p>程序中可以根据类创建指定类型的对象；</p><p>举例来说：</p><p>可以通过Person类来创建人的对象，通过Dog类创建狗的对象，不同的类可以用来创建不同的对象；</p><h3 id="定义类" tabindex="-1"><a class="header-anchor" href="#定义类"><span>定义类</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">类名</span> <span class="token punctuation">{</span>
    属性名<span class="token operator">:</span> 类型<span class="token punctuation">;</span>
    静态属性，不能通过实例调用，需要使用类直接调用
    <span class="token keyword">static</span> age：<span class="token number">19</span>
    
    <span class="token function">constructor</span><span class="token punctuation">(</span>参数<span class="token operator">:</span> 类型<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>属性名 <span class="token operator">=</span> 参数<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">方法名</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    class Person{
        name: string;
        age: number;
    
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }
    
        sayHello(){
            console.log(\`大家好，我是\${this.name}\`);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用类：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const p = new Person(&#39;孙悟空&#39;, 18);
p.sayHello();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数"><span>构造函数</span></a></h3><p>可以使用<code>constructor</code>定义一个构造器方法；</p><blockquote><p><strong>注1：在TS中只能有一个构造器方法！</strong></p></blockquote><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class C{
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时也可以直接将属性定义在构造函数中：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class C {
    constructor(public name: string, public age: number) {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两种定义方法是完全相同的！</p><p><strong>注2：子类继承父类时，必须调用父类的构造方法（如果子类中也定义了构造方法）！</strong></p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class A {
    protected num: number;
    constructor(num: number) {
        this.num = num;
    }
}

class X extends A {
    protected name: string;
    constructor(num: number, name: string) {
        super(num);
        this.name = name;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在X类中不调用<code>super</code>将会报错！</p><h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装"><span>封装</span></a></h3><p>对象实质上就是属性和方法的容器，它的主要作用就是存储属性和方法，这就是所谓的封装</p><p>默认情况下，对象的属性是可以任意的修改的，为了确保数据的安全性，在TS中可以对属性的权限进行设置</p><ul><li>静态属性（static）： <ul><li>声明为static的属性或方法不再属于实例，而是属于类的属性；</li></ul></li><li>只读属性（readonly）： <ul><li>如果在声明属性时添加一个readonly，则属性便成了只读属性无法修改</li></ul></li><li>TS中属性具有三种修饰符： <ul><li>public（默认值），可以在类、子类和对象中修改</li><li>protected ，可以在类、子类中修改</li><li>private ，可以在类中修改</li></ul></li></ul><p>示例：</p><p>public：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Person{
    public name: string; // 写或什么都不写都是public
    public age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以在类中修改
        this.age = age;
    }

    sayHello(){
        console.log(\`大家好，我是\${this.name}\`);
    }
}

class Employee extends Person{
    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person(&#39;孙悟空&#39;, 18);
p.name = &#39;猪八戒&#39;;// 可以通过对象修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>protected：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Person{
    protected name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(\`大家好，我是\${this.name}\`);
    }
}

class Employee extends Person{

    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person(&#39;孙悟空&#39;, 18);
p.name = &#39;猪八戒&#39;;// 不能修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>private：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Person{
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(\`大家好，我是\${this.name}\`);
    }
}

class Employee extends Person{

    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中不能修改
    }
}

const p = new Person(&#39;孙悟空&#39;, 18);
p.name = &#39;猪八戒&#39;;// 不能修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性存取器" tabindex="-1"><a class="header-anchor" href="#属性存取器"><span>属性存取器</span></a></h3><p>对于一些不希望被任意修改的属性，可以将其设置为private</p><p>直接将其设置为private将导致无法再通过对象修改其中的属性</p><p>我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器</p><p>读取属性的方法叫做setter方法，设置属性的方法叫做getter方法</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Person{
    private _name: string;

    constructor(name: string){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

}

const p1 = new Person(&#39;孙悟空&#39;);
// 实际通过调用getter方法读取name属性
console.log(p1.name);
// 实际通过调用setter方法修改name属性 
p1.name = &#39;猪八戒&#39;; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性"><span>静态属性</span></a></h3><p>静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用</p><p>静态属性（方法）使用static开头</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Tools{
    static PI = 3.1415926;
    
    static sum(num1: number, num2: number){
        return num1 + num2
    }
}

console.log(Tools.PI);
console.log(Tools.sum(123, 456));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="this" tabindex="-1"><a class="header-anchor" href="#this"><span>this</span></a></h3><p>在类中，使用this表示当前对象</p><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h3><p>继承时面向对象中的又一个特性</p><p>通过继承可以将其他类中的属性和方法引入到当前类中</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal{

    bark(){
        console.log(\`\${this.name}在汪汪叫！\`);
    }
}

const dog = new Dog(&#39;旺财&#39;, 4);
dog.bark();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过继承可以在不修改类的情况下完成对类的扩展</p><h3 id="重写" tabindex="-1"><a class="header-anchor" href="#重写"><span>重写</span></a></h3><p>发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    run(){
        console.log(\`父类中的run方法！\`);
    }
}

class Dog extends Animal{

    bark(){
        console.log(\`\${this.name}在汪汪叫！\`);
    }

    run(){
        console.log(\`子类中的run方法，会重写父类中的run方法！\`);
    }
}

const dog = new Dog(&#39;旺财&#39;, 4);
dog.bark();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在子类中可以使用super来完成对父类的引用</strong></p><h3 id="抽象类-abstract-class" tabindex="-1"><a class="header-anchor" href="#抽象类-abstract-class"><span>抽象类（abstract class）</span></a></h3><p>抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>abstract class Animal{
  abstract run(): void;
  bark(){
      console.log(&#39;动物在叫~&#39;);
  }
}

class Dog extends Animals{
  run(){
      console.log(&#39;狗在跑~&#39;);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现;</p><h2 id="接口-interface" tabindex="-1"><a class="header-anchor" href="#接口-interface"><span>接口（Interface）</span></a></h2><p>接口的作用类似于抽象类，不同点在于：接口中的所有方法和属性都是没有实值的，换句话说接口中的所有方法都是抽象方法；</p><p>接口主要负责定义一个类的结构，接口可以去限制一个对象的接口：对象只有包含接口中定义的所有属性和方法时才能匹配接口；</p><p>同时，可以让一个类去实现接口，实现接口时类中要保护接口中的所有属性；</p><p>示例（检查对象类型）：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>interface Person{
    name: string;
    sayHello():void;
}

function fn(per: Person){
    per.sayHello();
}

fn({name:&#39;孙悟空&#39;, sayHello() {console.log(\`Hello, 我是 \${this.name}\`)}});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例（实现）：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>interface Person{
   name: string;
   sayHello():void;
}

class Student implements Person{
   constructor(public name: string) {
   }

   sayHello() {
       console.log(&#39;大家好，我是&#39;+this.name);
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性的封装" tabindex="-1"><a class="header-anchor" href="#属性的封装"><span>属性的封装</span></a></h2><p>TS添加属性修饰符</p><ol><li>public：修饰的属性可以在 任意位置访问（修改）默认值</li><li>private：私有属性，只能在类的内部修改,通过在类中添加方法使私有属性可以访问</li><li>protected：受包含的属性，只能在 当前类和当前类的子类中使用</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// TS添加属性修饰符</span>
    <span class="token comment">// public 修饰的属性可以在 任意位置访问（修改）默认值</span>
    <span class="token comment">// private 私有属性，只能在类的内部修改,通过在类中添加方法使私有属性可以访问</span>
    <span class="token comment">// protexted 受包含的属性，只能在 当前类和当前类的子类中使用</span>
    <span class="token keyword">protected</span> _num<span class="token operator">:</span><span class="token builtin">number</span>
    <span class="token keyword">private</span> _name<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token keyword">private</span> _age<span class="token operator">:</span><span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>num<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name
      <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> age
      <span class="token keyword">this</span><span class="token punctuation">.</span>_num <span class="token operator">=</span> num
    <span class="token punctuation">}</span>

    <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name
    <span class="token punctuation">}</span>
    
    <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> value
    <span class="token punctuation">}</span>

    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name
    <span class="token punctuation">}</span>

    <span class="token function">setName</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> per <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;sola&#39;</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span>
  per<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  per<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;pig&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">/*


  * */</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型-generic" tabindex="-1"><a class="header-anchor" href="#泛型-generic"><span>泛型（Generic）</span></a></h2><p>定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定）；</p><p>此时泛型便能够发挥作用；</p><p>举个例子：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function test(arg: any): any{
    return arg;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，test函数有一个参数类型不确定，但是能确定的时其返回值的类型和参数的类型是相同的；</p><p>由于类型不确定所以参数和返回值均使用了any，但是很明显这样做是不合适的：</p><p>首先使用any会关闭TS的类型检查，其次这样设置也不能体现出参数和返回值是相同的类型；</p><h3 id="泛型函数" tabindex="-1"><a class="header-anchor" href="#泛型函数"><span>泛型函数</span></a></h3><h4 id="创建泛型函数" tabindex="-1"><a class="header-anchor" href="#创建泛型函数"><span>创建泛型函数</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function test&lt;T&gt;(arg: T): T{
    return arg;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的<code>&lt;T&gt;</code>就是泛型；</p><p>T是我们给这个类型起的名字（不一定非叫T），设置泛型后即可在函数中使用T来表示该类型；</p><p>所以泛型其实很好理解，就表示某个类型；</p><p>那么如何使用上边的函数呢？</p><h4 id="使用泛型函数" tabindex="-1"><a class="header-anchor" href="#使用泛型函数"><span>使用泛型函数</span></a></h4><h5 id="方式一-直接使用" tabindex="-1"><a class="header-anchor" href="#方式一-直接使用"><span>方式一（直接使用）：</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>test(10)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用时可以直接传递参数使用，类型会由TS自动推断出来，但有时编译器无法自动推断时还需要使用下面的方式</p><h5 id="方式二-指定类型" tabindex="-1"><a class="header-anchor" href="#方式二-指定类型"><span>方式二（指定类型）：</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>test&lt;number&gt;(10)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以在函数后手动指定泛型；</p><h4 id="函数中声明多个泛型" tabindex="-1"><a class="header-anchor" href="#函数中声明多个泛型"><span>函数中声明多个泛型</span></a></h4><p>可以同时指定多个泛型，泛型间使用逗号隔开：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function test&lt;T, K&gt;(a: T, b: K): K{
  return b;
}

test&lt;number, string&gt;(10, &quot;hello&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用泛型时，完全可以将泛型当成是一个普通的类去使用；</p><h3 id="泛型类" tabindex="-1"><a class="header-anchor" href="#泛型类"><span>泛型类</span></a></h3><p>类中同样可以使用泛型：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class MyClass&lt;T&gt;{
  prop: T;

  constructor(prop: T){
      this.prop = prop;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型继承" tabindex="-1"><a class="header-anchor" href="#泛型继承"><span>泛型继承</span></a></h3><p>除此之外，也可以对泛型的范围进行约束</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>interface MyInter{
  length: number;
}

function test&lt;T extends MyInter&gt;(arg: T): number{
  return arg.length;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用T extends MyInter表示泛型T必须是MyInter的子类，不一定非要使用接口类和抽象类同样适用；</p>`,180),v=[d,u,r,c,o];function p(m,b){return l(),i("div",null,v)}const h=e(t,[["render",p],["__file","typescript.html.vue"]]),k=JSON.parse(`{"path":"/web/typescript/typescript.html","title":"typescript相关","lang":"zh-CN","frontmatter":{"title":"typescript相关","icon":"gears","order":4,"category":["web"],"tag":["js"],"navbar":true,"sidebar":true,"breadcrumb":true,"pageInfo":false,"contributors":true,"editLink":true,"lastUpdated":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":false,"description":"TypeScript TypeScript中的基本类型 TypeScript中的基本类型： 类型声明 类型声明是TS非常重要的一个特点； 通过类型声明可以指定TS中变量（参数、形参）的类型； 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错； 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值； 语...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/web/typescript/typescript.html"}],["meta",{"property":"og:site_name","content":"孜然地球"}],["meta",{"property":"og:title","content":"typescript相关"}],["meta",{"property":"og:description","content":"TypeScript TypeScript中的基本类型 TypeScript中的基本类型： 类型声明 类型声明是TS非常重要的一个特点； 通过类型声明可以指定TS中变量（参数、形参）的类型； 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错； 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值； 语..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-02T10:18:56.000Z"}],["meta",{"property":"article:author","content":"孜然地球"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:modified_time","content":"2024-07-02T10:18:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"typescript相关\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-02T10:18:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"孜然地球\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"TypeScript中的基本类型","slug":"typescript中的基本类型","link":"#typescript中的基本类型","children":[]},{"level":2,"title":"编译选项","slug":"编译选项","link":"#编译选项","children":[{"level":3,"title":"自动编译文件","slug":"自动编译文件","link":"#自动编译文件","children":[]},{"level":3,"title":"自动编译整个项目","slug":"自动编译整个项目","link":"#自动编译整个项目","children":[]}]},{"level":2,"title":"TypeScript打包","slug":"typescript打包","link":"#typescript打包","children":[{"level":3,"title":"webpack整合","slug":"webpack整合","link":"#webpack整合","children":[]},{"level":3,"title":"Babel","slug":"babel","link":"#babel","children":[]}]},{"level":2,"title":"面向对象","slug":"面向对象","link":"#面向对象","children":[{"level":3,"title":"定义类","slug":"定义类","link":"#定义类","children":[]},{"level":3,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[]},{"level":3,"title":"封装","slug":"封装","link":"#封装","children":[]},{"level":3,"title":"属性存取器","slug":"属性存取器","link":"#属性存取器","children":[]},{"level":3,"title":"静态属性","slug":"静态属性","link":"#静态属性","children":[]},{"level":3,"title":"this","slug":"this","link":"#this","children":[]},{"level":3,"title":"继承","slug":"继承","link":"#继承","children":[]},{"level":3,"title":"重写","slug":"重写","link":"#重写","children":[]},{"level":3,"title":"抽象类（abstract class）","slug":"抽象类-abstract-class","link":"#抽象类-abstract-class","children":[]}]},{"level":2,"title":"接口（Interface）","slug":"接口-interface","link":"#接口-interface","children":[]},{"level":2,"title":"属性的封装","slug":"属性的封装","link":"#属性的封装","children":[]},{"level":2,"title":"泛型（Generic）","slug":"泛型-generic","link":"#泛型-generic","children":[{"level":3,"title":"泛型函数","slug":"泛型函数","link":"#泛型函数","children":[]},{"level":3,"title":"泛型类","slug":"泛型类","link":"#泛型类","children":[]},{"level":3,"title":"泛型继承","slug":"泛型继承","link":"#泛型继承","children":[]}]}],"git":{"createdTime":1719915536000,"updatedTime":1719915536000,"contributors":[{"name":"sola-grj","email":"1131631886@qq.com","commits":1}]},"readingTime":{"minutes":15.83,"words":4749},"filePathRelative":"web/typescript/typescript.md","localizedDate":"2024年7月2日","excerpt":"\\n<h2><strong>TypeScript中的基本类型</strong></h2>\\n<p>TypeScript中的基本类型：</p>\\n<ul>\\n<li>\\n<p>类型声明</p>\\n<ul>\\n<li>\\n<p>类型声明是TS非常重要的一个特点；</p>\\n</li>\\n<li>\\n<p>通过类型声明可以指定TS中变量（参数、形参）的类型；</p>\\n</li>\\n<li>\\n<p>指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错；</p>\\n</li>\\n<li>\\n<p>简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值；</p>\\n</li>\\n<li>\\n<p>语法：</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let 变量: 类型;\\n\\nlet 变量: 类型 = 值;\\n\\nfunction fn(参数: 类型, 参数: 类型): 类型{\\n    ...\\n}\\n</code></pre></div></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>自动类型判断</p>\\n<ul>\\n<li>TS拥有自动的类型判断机制</li>\\n<li>当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型</li>\\n<li>所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明</li>\\n</ul>\\n</li>\\n<li>\\n<p>类型：</p>\\n<table>\\n<thead>\\n<tr>\\n<th><strong>类型</strong></th>\\n<th><strong>例子</strong></th>\\n<th><strong>描述</strong></th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>number</td>\\n<td>1, -33, 2.5</td>\\n<td>任意数字</td>\\n</tr>\\n<tr>\\n<td>string</td>\\n<td>'hi', \\"hi\\", <code>hi</code></td>\\n<td>任意字符串</td>\\n</tr>\\n<tr>\\n<td>boolean</td>\\n<td>true、false</td>\\n<td>布尔值true或false</td>\\n</tr>\\n<tr>\\n<td>字面量</td>\\n<td>其本身</td>\\n<td>限制变量的值就是该字面量的值</td>\\n</tr>\\n<tr>\\n<td>any</td>\\n<td>*</td>\\n<td>任意类型</td>\\n</tr>\\n<tr>\\n<td>unknown</td>\\n<td>*</td>\\n<td>类型安全的any</td>\\n</tr>\\n<tr>\\n<td>void</td>\\n<td>空值（undefined）</td>\\n<td>没有值（或undefined）</td>\\n</tr>\\n<tr>\\n<td>never</td>\\n<td>没有值</td>\\n<td>不能是任何值</td>\\n</tr>\\n<tr>\\n<td>object</td>\\n<td name:孙悟空=\\"\\"></td>\\n<td>任意的JS对象</td>\\n</tr>\\n<tr>\\n<td>array</td>\\n<td>[1,2,3]</td>\\n<td>任意JS数组</td>\\n</tr>\\n<tr>\\n<td>tuple</td>\\n<td>[4,5]</td>\\n<td>元素，TS新增类型，固定长度数组</td>\\n</tr>\\n<tr>\\n<td>enum</td>\\n<td a,=\\"\\" b=\\"\\">enum</td>\\n<td>枚举，TS中新增类型</td>\\n</tr>\\n</tbody>\\n</table>\\n</li>\\n<li>\\n<p>number</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let decimal: number = 6;\\nlet hex: number = 0xf00d;\\nlet binary: number = 0b1010;\\nlet octal: number = 0o744;\\nlet big: bigint = 100n;\\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>boolean</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let isDone: boolean = false;\\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>string</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let color: string = \\"blue\\";\\ncolor = 'red';\\n\\nlet fullName: string = \`Bob Bobbington\`;\\nlet age: number = 37;\\nlet sentence: string = \`Hello, my name is \${fullName}.\\n\\nI'll be \${age + 1} years old next month.\`;\\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>字面量</p>\\n<ul>\\n<li>\\n<p>也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围</p>\\n</li>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let color: 'red' | 'blue' | 'black';\\nlet num: 1 | 2 | 3 | 4 | 5;\\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>any</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let d: any = 4;\\nd = 'hello';\\nd = true;\\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>unknown</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let notSure: unknown = 4;\\nnotSure = 'hello';\\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>void</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let unusable: void = undefined;\\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>never</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>function error(message: string): never {\\n  throw new Error(message);\\n}\\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>object（没啥用）</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let obj: object = {};\\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>array</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let list: number[] = [1, 2, 3];\\nlet list: Array&lt;number&gt; = [1, 2, 3];\\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>tuple</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let x: [string, number];\\nx = [\\"hello\\", 10]; \\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>enum</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>enum Color {\\n  Red,\\n  Green,\\n  Blue,\\n}\\nlet c: Color = Color.Green;\\n\\nenum Color {\\n  Red = 1,\\n  Green,\\n  Blue,\\n}\\nlet c: Color = Color.Green;\\n\\nenum Color {\\n  Red = 1,\\n  Green = 2,\\n  Blue = 4,\\n}\\nlet c: Color = Color.Green;\\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>类型断言</p>\\n<ul>\\n<li>\\n<p>有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：</p>\\n<ul>\\n<li>\\n<p>第一种</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let someValue: unknown = \\"this is a string\\";\\nlet strLength: number = (someValue as string).length;\\n</code></pre></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>第二种</p>\\n<ul>\\n<li>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>let someValue: unknown = \\"this is a string\\";\\nlet strLength: number = (&lt;string&gt;someValue).length;\\n</code></pre></div></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{h as comp,k as data};

import{_ as n,a as s}from"./2-8oaqdsJi.js";import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as e,d as o}from"./app-Pm01oTn3.js";const p={},l=o(`<h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型"><span><strong>基本数据类型</strong></span></a></h2><ol><li><h3 id="string-任意字符串" tabindex="-1"><a class="header-anchor" href="#string-任意字符串"><span>string：任意字符串</span></a></h3><p>字符串是不可变的，意思是一旦被创建，他们的值就不能变了</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;sola&#39;</span>
name <span class="token operator">=</span> name <span class="token operator">+</span> <span class="token string">&#39;-grl&#39;</span> <span class="token comment">// 先销毁在重建</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><h3 id="number-任意数值" tabindex="-1"><a class="header-anchor" href="#number-任意数值"><span>number：任意数值</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> intNum <span class="token operator">=</span> <span class="token number">55</span> <span class="token comment">// 10进制的55</span>
<span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token number">070</span> <span class="token comment">// 8进制的56</span>
<span class="token keyword">let</span> hexNum1 <span class="token operator">=</span> <span class="token number">0xA</span> <span class="token comment">//16进制的10</span>

<span class="token comment">// 浮点类型</span>
<span class="token keyword">let</span> floatNum1 <span class="token operator">=</span> <span class="token number">1.1</span>
<span class="token keyword">let</span> floatNum2 <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> floatNum3 <span class="token operator">=</span> <span class="token number">.1</span><span class="token punctuation">;</span> <span class="token comment">// 有效，但不推荐</span>
<span class="token keyword">let</span> floatNum <span class="token operator">=</span> <span class="token number">3.125e7</span><span class="token punctuation">;</span> <span class="token comment">// 科学计数法 等于31250000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在数值类型中，存在一个特殊数值<strong>NaN</strong>,意为“不是数值”，用于表示本来要返回数值的操作失败了（而不是抛出错误）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0</span><span class="token operator">/</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><h3 id="boolean-true、false" tabindex="-1"><a class="header-anchor" href="#boolean-true、false"><span>Boolean：true、false</span></a></h3><p><strong>Boolean</strong>类型有两个值：<strong>true</strong>和<strong>false</strong></p><p>通过Boolean可以将其他类型的数据转化为布尔值</p><table><thead><tr><th>数据类型</th><th>转换为true</th><th>转换为false</th></tr></thead><tbody><tr><td>String</td><td>非空字符串</td><td>&quot;&quot;</td></tr><tr><td>Number</td><td>非零数值（包括无穷值）</td><td>0、NaN</td></tr><tr><td>Object</td><td>任意对象</td><td>null</td></tr><tr><td>Undefined</td><td>N/A（不存在）</td><td>undefined</td></tr></tbody></table></li><li><h3 id="null-null" tabindex="-1"><a class="header-anchor" href="#null-null"><span>null：null</span></a></h3><p><strong>Null</strong>类型同样也只有一个值，即<strong>Null</strong>，逻辑上来说，null值表示一个空对象，这也是给<strong>typeof</strong>传一个<strong>null</strong>会返回<strong>object</strong>的原因</p></li><li><h3 id="undefined-undefined" tabindex="-1"><a class="header-anchor" href="#undefined-undefined"><span>undefined：undefined</span></a></h3><p>undefined类型只有一个值，即特殊的<strong>undefined</strong>，当使用<strong>var</strong>或者<strong>let</strong>声明了变量，但没有初始化的时候，就相当于给变量赋予了undefined</p></li><li><h3 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol"><span>symbol</span></a></h3><p>Symbol是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> genericSymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> otherGenericSymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>genericSymbol <span class="token operator">==</span> otherGenericSymbol<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">let</span> fooSymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> otherFooSymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fooSymbol <span class="token operator">==</span> otherFooSymbol<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><h3 id="bigint" tabindex="-1"><a class="header-anchor" href="#bigint"><span>bigInt</span></a></h3><p><code>BigInt</code>是一种新的数据类型，用于当整数值大于<code>Number</code>数据类型支持的范围时。这种数据类型允许我们安全地对大整数执行算术操作，表示高分辨率的时间戳，使用大整数id，等等，而不需要使用库。</p><p>重要的是要记住，不能使用<code>Number</code>和<code>BigInt</code>操作数的混合执行算术运算，需要通过显式转换其中的一种类型。 此外，出于兼容性原因，不允许在<code>BigInt</code>上使用一元加号（<code>+</code>）运算符。</p><p>JS 中的<code>Number</code>类型只能安全地表示<code>-9007199254740991 (-(2^53-1))</code> 和<code>9007199254740991(2^53-1)</code>之间的整数，任何超出此范围的整数值都可能失去精度。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">9999999999999999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// → 10000000000000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用BigInt，应用程序不再需要变通方法或库来安全地表示<code>Number.MAX_SAFE_INTEGER</code>和<code>Number.Min_SAFE_INTEGER</code>之外的整数。 现在可以在标准JS中执行对大整数的算术运算，而不会有精度损失的风险。</p><p>要创建<code>BigInt</code>，只需在整数的末尾追加n即可。比较:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">9007199254740995n</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// → 9007199254740995n</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">9007199254740995</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// → 9007199254740996</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，可以调用<code>BigInt()</code>构造函数</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token string">&quot;9007199254740995&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// → 9007199254740995n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型"><span><strong>引用类型</strong></span></a></h2><ol><li><h3 id="object-任意对象" tabindex="-1"><a class="header-anchor" href="#object-任意对象"><span>object：任意对象</span></a></h3><p>创建object常用方式为对象字面量表示法，属性名可以是字符串或者数值</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;sola&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token number">5</span><span class="token operator">:</span><span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><h3 id="function-特别对象-可以执行" tabindex="-1"><a class="header-anchor" href="#function-特别对象-可以执行"><span>function：特别对象（可以执行）</span></a></h3><p>函数实际上是对象，每个函数都是<code>Function</code>类型的实例，而<code>Function</code>也有属性和方法，跟其他引用类型一样</p><p>函数存在三种常见的表达式</p><ul><li><p>函数声明</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>函数表达式</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>箭头函数</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><h3 id="array-特别对象-内部数据有序-数据下标" tabindex="-1"><a class="header-anchor" href="#array-特别对象-内部数据有序-数据下标"><span>array：特别对象（内部数据有序/数据下标）</span></a></h3><p>数组是一组有序的数据，但跟其它语言不同的是，数组中的每个槽位可以存储任意类型的数据，并且，数组也是动态大小的，会随着数据添加而自动增长</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><h3 id="其他引用类型" tabindex="-1"><a class="header-anchor" href="#其他引用类型"><span>其他引用类型</span></a></h3><p>除了上述说的三种之外，还包括<code>Date</code>、<code>RegExp</code>、<code>Map</code>、<code>Set</code>等</p></li></ol><h2 id="判断" tabindex="-1"><a class="header-anchor" href="#判断"><span><strong>判断</strong></span></a></h2><ul><li>typeof：数值、字符串、布尔值、undefined、function。 <ul><li>不能区别的：null、object，object和array</li></ul></li><li>instanceof：判断对象的具体类型</li><li>===：null/undefined</li><li>object.prototype.toString.call()</li></ul><h2 id="存储区别" tabindex="-1"><a class="header-anchor" href="#存储区别"><span><strong>存储区别</strong></span></a></h2><ul><li><p>基本类型存储在栈中</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// 赋值操作</span>
b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+n+`" alt="基本类型" tabindex="0" loading="lazy"><figcaption>基本类型</figcaption></figure></li><li><p>引用类型存储在堆中</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> obj1<span class="token punctuation">;</span>
obj2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Xxx&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// xxx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+s+'" alt="基本类型" tabindex="0" loading="lazy"><figcaption>基本类型</figcaption></figure></li></ul><h2 id="相关问题" tabindex="-1"><a class="header-anchor" href="#相关问题"><span><strong>相关问题</strong></span></a></h2><p>1.undefined与null的区别？</p><ul><li>undefined定义了未赋值，null定义且赋值了，且值为null</li></ul><p>2.什么时候给对象赋值为null？</p><ul><li>初始赋值，表明将要赋值为对象</li><li>结束前赋值，让对象成为垃圾对象（被垃圾回收器回收）</li></ul><p>3.严格区分变量类型与数据类型？</p><ul><li>数据类型： <ul><li>基本类型</li><li>对象类型</li></ul></li><li>变量类型 <ul><li>基本类型 ：保存的都是基本类型的数据</li><li>引用数据类型：保存的都是地址值</li></ul></li></ul>',15),c=[l];function i(r,u){return t(),e("div",null,c)}const g=a(p,[["render",i],["__file","js基本数据类型.html.vue"]]),b=JSON.parse(`{"path":"/web/js/js%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","title":"JS基本数据类型","lang":"zh-CN","frontmatter":{"title":"JS基本数据类型","icon":"gears","order":4,"category":["web"],"tag":["js"],"navbar":true,"sidebar":true,"breadcrumb":true,"pageInfo":false,"contributors":true,"editLink":true,"lastUpdated":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":false,"description":"基本数据类型 string：任意字符串 字符串是不可变的，意思是一旦被创建，他们的值就不能变了 number：任意数值 在数值类型中，存在一个特殊数值NaN,意为“不是数值”，用于表示本来要返回数值的操作失败了（而不是抛出错误） Boolean：true、false Boolean类型有两个值：true和false 通过Boolean可以将其他类型的数...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/web/js/js%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"孜然地球"}],["meta",{"property":"og:title","content":"JS基本数据类型"}],["meta",{"property":"og:description","content":"基本数据类型 string：任意字符串 字符串是不可变的，意思是一旦被创建，他们的值就不能变了 number：任意数值 在数值类型中，存在一个特殊数值NaN,意为“不是数值”，用于表示本来要返回数值的操作失败了（而不是抛出错误） Boolean：true、false Boolean类型有两个值：true和false 通过Boolean可以将其他类型的数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blogs/assets/images/web/1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-05T10:07:55.000Z"}],["meta",{"property":"article:author","content":"孜然地球"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:modified_time","content":"2024-07-05T10:07:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JS基本数据类型\\",\\"image\\":[\\"https://mister-hope.github.io/blogs/assets/images/web/1.png\\",\\"https://mister-hope.github.io/blogs/assets/images/web/2.png\\"],\\"dateModified\\":\\"2024-07-05T10:07:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"孜然地球\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"基本数据类型","slug":"基本数据类型","link":"#基本数据类型","children":[]},{"level":2,"title":"引用类型","slug":"引用类型","link":"#引用类型","children":[]},{"level":2,"title":"判断","slug":"判断","link":"#判断","children":[]},{"level":2,"title":"存储区别","slug":"存储区别","link":"#存储区别","children":[]},{"level":2,"title":"相关问题","slug":"相关问题","link":"#相关问题","children":[]}],"git":{"createdTime":1720174075000,"updatedTime":1720174075000,"contributors":[{"name":"sola-grj","email":"1131631886@qq.com","commits":1}]},"readingTime":{"minutes":4.14,"words":1242},"filePathRelative":"web/js/js基本数据类型.md","localizedDate":"2024年7月5日","excerpt":"<h2><strong>基本数据类型</strong></h2>\\n<ol>\\n<li>\\n<h3>string：任意字符串</h3>\\n<p>字符串是不可变的，意思是一旦被创建，他们的值就不能变了</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">let</span> name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'sola'</span>\\nname <span class=\\"token operator\\">=</span> name <span class=\\"token operator\\">+</span> <span class=\\"token string\\">'-grl'</span> <span class=\\"token comment\\">// 先销毁在重建</span>\\n</code></pre></div></li>\\n<li>\\n<h3>number：任意数值</h3>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">let</span> intNum <span class=\\"token operator\\">=</span> <span class=\\"token number\\">55</span> <span class=\\"token comment\\">// 10进制的55</span>\\n<span class=\\"token keyword\\">let</span> num1 <span class=\\"token operator\\">=</span> <span class=\\"token number\\">070</span> <span class=\\"token comment\\">// 8进制的56</span>\\n<span class=\\"token keyword\\">let</span> hexNum1 <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0xA</span> <span class=\\"token comment\\">//16进制的10</span>\\n\\n<span class=\\"token comment\\">// 浮点类型</span>\\n<span class=\\"token keyword\\">let</span> floatNum1 <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1.1</span>\\n<span class=\\"token keyword\\">let</span> floatNum2 <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0.1</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">let</span> floatNum3 <span class=\\"token operator\\">=</span> <span class=\\"token number\\">.1</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 有效，但不推荐</span>\\n<span class=\\"token keyword\\">let</span> floatNum <span class=\\"token operator\\">=</span> <span class=\\"token number\\">3.125e7</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 科学计数法 等于31250000</span>\\n</code></pre></div><p>在数值类型中，存在一个特殊数值<strong>NaN</strong>,意为“不是数值”，用于表示本来要返回数值的操作失败了（而不是抛出错误）</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code>console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token operator\\">/</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//NaN</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">0</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">+</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//NaN</span>\\n</code></pre></div></li>\\n<li>\\n<h3>Boolean：true、false</h3>\\n<p><strong>Boolean</strong>类型有两个值：<strong>true</strong>和<strong>false</strong></p>\\n<p>通过Boolean可以将其他类型的数据转化为布尔值</p>\\n<table>\\n<thead>\\n<tr>\\n<th>数据类型</th>\\n<th>转换为true</th>\\n<th>转换为false</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>String</td>\\n<td>非空字符串</td>\\n<td>\\"\\"</td>\\n</tr>\\n<tr>\\n<td>Number</td>\\n<td>非零数值（包括无穷值）</td>\\n<td>0、NaN</td>\\n</tr>\\n<tr>\\n<td>Object</td>\\n<td>任意对象</td>\\n<td>null</td>\\n</tr>\\n<tr>\\n<td>Undefined</td>\\n<td>N/A（不存在）</td>\\n<td>undefined</td>\\n</tr>\\n</tbody>\\n</table>\\n</li>\\n<li>\\n<h3>null：null</h3>\\n<p><strong>Null</strong>类型同样也只有一个值，即<strong>Null</strong>，逻辑上来说，null值表示一个空对象，这也是给<strong>typeof</strong>传一个<strong>null</strong>会返回<strong>object</strong>的原因</p>\\n</li>\\n<li>\\n<h3>undefined：undefined</h3>\\n<p>undefined类型只有一个值，即特殊的<strong>undefined</strong>，当使用<strong>var</strong>或者<strong>let</strong>声明了变量，但没有初始化的时候，就相当于给变量赋予了undefined</p>\\n</li>\\n<li>\\n<h3>symbol</h3>\\n<p>Symbol是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">let</span> genericSymbol <span class=\\"token operator\\">=</span> <span class=\\"token function\\">Symbol</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">let</span> otherGenericSymbol <span class=\\"token operator\\">=</span> <span class=\\"token function\\">Symbol</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>genericSymbol <span class=\\"token operator\\">==</span> otherGenericSymbol<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// false</span>\\n<span class=\\"token keyword\\">let</span> fooSymbol <span class=\\"token operator\\">=</span> <span class=\\"token function\\">Symbol</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'foo'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">let</span> otherFooSymbol <span class=\\"token operator\\">=</span> <span class=\\"token function\\">Symbol</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'foo'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>fooSymbol <span class=\\"token operator\\">==</span> otherFooSymbol<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// false</span>\\n</code></pre></div></li>\\n<li>\\n<h3>bigInt</h3>\\n<p><code>BigInt</code>是一种新的数据类型，用于当整数值大于<code>Number</code>数据类型支持的范围时。这种数据类型允许我们安全地对大整数执行算术操作，表示高分辨率的时间戳，使用大整数id，等等，而不需要使用库。</p>\\n<p>重要的是要记住，不能使用<code>Number</code>和<code>BigInt</code>操作数的混合执行算术运算，需要通过显式转换其中的一种类型。 此外，出于兼容性原因，不允许在<code>BigInt</code>上使用一元加号（<code>+</code>）运算符。</p>\\n<p>JS 中的<code>Number</code>类型只能安全地表示<code>-9007199254740991 (-(2^53-1))</code> 和<code>9007199254740991(2^53-1)</code>之间的整数，任何超出此范围的整数值都可能失去精度。</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code>console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">9999999999999999</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>    <span class=\\"token comment\\">// → 10000000000000000</span>\\n</code></pre></div><p>使用BigInt，应用程序不再需要变通方法或库来安全地表示<code>Number.MAX_SAFE_INTEGER</code>和<code>Number.Min_SAFE_INTEGER</code>之外的整数。 现在可以在标准JS中执行对大整数的算术运算，而不会有精度损失的风险。</p>\\n<p>要创建<code>BigInt</code>，只需在整数的末尾追加n即可。比较:</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code>console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">9007199254740995n</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>    <span class=\\"token comment\\">// → 9007199254740995n</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">9007199254740995</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>     <span class=\\"token comment\\">// → 9007199254740996</span>\\n</code></pre></div><p>或者，可以调用<code>BigInt()</code>构造函数</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token function\\">BigInt</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"9007199254740995\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>    <span class=\\"token comment\\">// → 9007199254740995n</span>\\n</code></pre></div></li>\\n</ol>","autoDesc":true}`);export{g as comp,b as data};

import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as c,a as s,e as a,b as e,o as i,r as l}from"./app-Ba2CBXJF.js";const u="/blogs/assets/images/node/nestjs/5.png",r={},d={href:"https://so.csdn.net/so/search?q=304&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},k={href:"https://so.csdn.net/so/search?q=Unauthorized&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},m={href:"https://so.csdn.net/so/search?q=403&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"};function v(b,n){const t=l("ExternalLinkIcon");return i(),o("div",null,[n[7]||(n[7]=c('<p>RESTful 是一种风格，在 RESTful 中，一切都被认为是资源，每个资源有对应的 URL 标识.</p><p>不是标准也不是协议，只是一种风格。当然你也可以不按照他的风格去写。</p><h3 id="_1-接口-url" tabindex="-1"><a class="header-anchor" href="#_1-接口-url"><span>1.接口 url</span></a></h3><p><strong>传统接口</strong></p><p>http://localhost:8080/api/get_list?id=1</p><p>http://localhost:8080/api/delete_list?id=1</p><p>http://localhost:8080/api/update_list?id=1</p><p><strong>RESTful 接口</strong></p><p>http://localhost:8080/api/get_list/1 查询 删除 更新</p><p>RESTful 风格一个接口就会完成 增删改差 他是通过不同的请求方式来区分的</p><p>查询 GET</p><p>提交 POST</p><p>更新 PUT PATCH</p><p>删除 DELETE</p><figure><img src="'+u+`" alt="crud" tabindex="0" loading="lazy"><figcaption>crud</figcaption></figure><h4 id="_2-restful-版本控制" tabindex="-1"><a class="header-anchor" href="#_2-restful-版本控制"><span>2.RESTful 版本控制</span></a></h4><p>一共有三种我们一般用第一种 更加语义化</p><table><tbody><tr><td><code>URI Versioning</code></td><td>版本将在请求的 URI 中传递（默认）</td></tr><tr><td><code>Header Versioning</code></td><td>自定义请求标头将指定版本</td></tr><tr><td><code>Media Type Versioning</code></td><td>请求的<code>Accept</code>标头将指定版本</td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NestFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/core&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> VersioningType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AppModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./app.module&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>

  app<span class="token punctuation">.</span><span class="token function">enableVersioning</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> VersioningType<span class="token punctuation">.</span><span class="token constant">URI</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 user.controller 配置版本</p><p>Controller 变成一个对象 通过 version 配置版本</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  Controller<span class="token punctuation">,</span>
  Get<span class="token punctuation">,</span>
  Post<span class="token punctuation">,</span>
  Body<span class="token punctuation">,</span>
  Patch<span class="token punctuation">,</span>
  Param<span class="token punctuation">,</span>
  Delete<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./user.service&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./dto/create-user.dto&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UpdateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./dto/update-user.dto&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  version<span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  path<span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> createUserDto<span class="token operator">:</span> CreateUserDto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>createUserDto<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// @Version(&#39;1&#39;)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&quot;:id&quot;</span><span class="token punctuation">)</span>
  <span class="token function">findOne</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Param</span></span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token operator">+</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Patch</span></span><span class="token punctuation">(</span><span class="token string">&quot;:id&quot;</span><span class="token punctuation">)</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Param</span></span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> updateUserDto<span class="token operator">:</span> UpdateUserDto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token operator">+</span>id<span class="token punctuation">,</span> updateUserDto<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Delete</span></span><span class="token punctuation">(</span><span class="token string">&quot;:id&quot;</span><span class="token punctuation">)</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Param</span></span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token operator">+</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i-blog.csdnimg.cn/blog_migrate/cf53bfde3574a5ddc8ccd9f0dc9acb7e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_3-code-码规范" tabindex="-1"><a class="header-anchor" href="#_3-code-码规范"><span>3.Code 码规范</span></a></h4><p>200 OK</p>`,25)),s("p",null,[s("a",d,[n[0]||(n[0]=a("304")),e(t)]),n[1]||(n[1]=a(" Not Modified 协商缓存了"))]),n[8]||(n[8]=s("p",null,"400 Bad Request 参数错误",-1)),s("p",null,[n[3]||(n[3]=a("401 ")),s("a",k,[n[2]||(n[2]=a("Unauthorized")),e(t)]),n[4]||(n[4]=a(" token 错误"))]),s("p",null,[s("a",m,[n[5]||(n[5]=a("403")),e(t)]),n[6]||(n[6]=a(" Forbidden referer origin 验证失败"))]),n[9]||(n[9]=s("p",null,"404 Not Found 接口不存在",-1)),n[10]||(n[10]=s("p",null,"500 Internal Server Error 服务端错误",-1)),n[11]||(n[11]=s("p",null,"502 Bad Gateway 上游接口有问题或者服务器问题",-1))])}const y=p(r,[["render",v],["__file","restful.html.vue"]]),h=JSON.parse('{"path":"/node/nestjs/restful.html","title":"restful风格设计","lang":"zh-CN","frontmatter":{"title":"restful风格设计","icon":"gears","order":4,"category":["node"],"tag":["nestjs"],"navbar":true,"sidebar":true,"breadcrumb":true,"pageInfo":false,"contributors":true,"editLink":true,"lastUpdated":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":false,"description":"RESTful 是一种风格，在 RESTful 中，一切都被认为是资源，每个资源有对应的 URL 标识. 不是标准也不是协议，只是一种风格。当然你也可以不按照他的风格去写。 1.接口 url 传统接口 http://localhost:8080/api/get_list?id=1 http://localhost:8080/api/delete_lis...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/node/nestjs/restful.html"}],["meta",{"property":"og:site_name","content":"孜然地球"}],["meta",{"property":"og:title","content":"restful风格设计"}],["meta",{"property":"og:description","content":"RESTful 是一种风格，在 RESTful 中，一切都被认为是资源，每个资源有对应的 URL 标识. 不是标准也不是协议，只是一种风格。当然你也可以不按照他的风格去写。 1.接口 url 传统接口 http://localhost:8080/api/get_list?id=1 http://localhost:8080/api/delete_lis..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blogs/assets/images/node/nestjs/5.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-03T10:01:26.000Z"}],["meta",{"property":"article:author","content":"孜然地球"}],["meta",{"property":"article:tag","content":"nestjs"}],["meta",{"property":"article:modified_time","content":"2025-01-03T10:01:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"restful风格设计\\",\\"image\\":[\\"https://mister-hope.github.io/blogs/assets/images/node/nestjs/5.png\\",\\"https://i-blog.csdnimg.cn/blog_migrate/cf53bfde3574a5ddc8ccd9f0dc9acb7e.png\\"],\\"dateModified\\":\\"2025-01-03T10:01:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"孜然地球\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"1.接口 url","slug":"_1-接口-url","link":"#_1-接口-url","children":[]}],"git":{"createdTime":1735898486000,"updatedTime":1735898486000,"contributors":[{"name":"garry","email":"Garryg@ecinnovations.com","commits":1}]},"readingTime":{"minutes":1.67,"words":500},"filePathRelative":"node/nestjs/restful.md","localizedDate":"2025年1月3日","excerpt":"<p>RESTful 是一种风格，在 RESTful 中，一切都被认为是资源，每个资源有对应的 URL 标识.</p>\\n<p>不是标准也不是协议，只是一种风格。当然你也可以不按照他的风格去写。</p>\\n<h3>1.接口 url</h3>\\n<p><strong>传统接口</strong></p>\\n<p>http://localhost:8080/api/get_list?id=1</p>\\n<p>http://localhost:8080/api/delete_list?id=1</p>\\n<p>http://localhost:8080/api/update_list?id=1</p>\\n<p><strong>RESTful 接口</strong></p>","autoDesc":true}');export{y as comp,h as data};
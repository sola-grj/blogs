import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,a as s,e as a,b as e,d as p,o as i,r as l}from"./app-Ba2CBXJF.js";const u="/blogs/assets/images/node/nestjs/6.png",r="/blogs/assets/images/node/nestjs/7.png",d="/blogs/assets/images/node/nestjs/8.png",k="/blogs/assets/images/node/nestjs/10.png",v="/blogs/assets/images/node/nestjs/9.png",m="/blogs/assets/images/node/nestjs/11.png",b="/blogs/assets/images/node/nestjs/12.png",g="/blogs/assets/images/node/nestjs/13.png",y="/blogs/assets/images/node/nestjs/14.png",f={},q={href:"https://so.csdn.net/so/search?q=nestjs&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.apifox.cn/?utm_source=baidu_sem1",title:"Apifox - API 文档、调试、Mock、测试一体化协作平台 -      接口文档工具，接口自动化测试工具，接口Mock工具，API文档工具，API      Mock工具，API自动化测试工具",target:"_blank",rel:"noopener noreferrer"},w={href:"https://so.csdn.net/so/search?q=%E8%A3%85%E9%A5%B0%E5%99%A8&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"};function x(j,n){const t=l("ExternalLinkIcon");return i(),c("div",null,[n[7]||(n[7]=s("h3",{id:"controller-request-获取前端传过来的参数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#controller-request-获取前端传过来的参数"},[s("span",null,"Controller Request （获取前端传过来的参数）")])],-1)),s("p",null,[s("a",q,[n[0]||(n[0]=a("nestjs")),e(t)]),n[1]||(n[1]=a(" 提供了方法参数装饰器 用来帮助我们快速获取参数 如下"))]),n[8]||(n[8]=p("<table><tbody><tr><td>@Request()</td><td>req          </td></tr><tr><td>@Response()</td><td>res                   </td></tr><tr><td>@Next()</td><td>next</td></tr><tr><td>@Session()</td><td>req.session</td></tr><tr><td>@Param(key?: string)       </td><td><code>req.params</code>/<code>req.params[key]</code></td></tr><tr><td>@Body(key?: string)</td><td><code>req.body</code>/<code>req.body[key]</code></td></tr><tr><td>@Query(key?: string)</td><td><code>req.query</code>/<code>req.query[key]</code></td></tr><tr><td>@Headers(name?: string)   </td><td><code>req.headers</code>/<code>req.headers[name]</code></td></tr><tr><td>@HttpCode</td><td></td></tr></tbody></table><p>调试工具可以使用 postMan  ApiFox 等</p>",2)),s("p",null,[n[3]||(n[3]=a("下载地址  ")),s("a",h,[n[2]||(n[2]=a("Apifox - API 文档、调试、Mock、测试一体化协作平台 - 接口文档工具，接口自动化测试工具，接口 Mock 工具，API 文档工具，API Mock 工具，API 自动化测试工具")),e(t)])]),n[9]||(n[9]=s("h4",{id:"_1-获取-get-请求传参",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-获取-get-请求传参"},[s("span",null,"1.获取 get 请求传参")])],-1)),s("p",null,[n[5]||(n[5]=a("可以使用 Request")),s("a",w,[n[4]||(n[4]=a("装饰器")),e(t)]),n[6]||(n[6]=a(" 或者 Query 装饰器 跟 express 完全一样"))]),n[10]||(n[10]=p('<figure><img src="'+u+'" alt="Request" tabindex="0" loading="lazy"><figcaption>Request</figcaption></figure><p>也可以使用 Query 直接获取 不需要在通过 req.query 了</p><figure><img src="'+r+`" alt="Request" tabindex="0" loading="lazy"><figcaption>Request</figcaption></figure><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// http://localhost:3000/user?name=sola</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Controller<span class="token punctuation">,</span>
  Get<span class="token punctuation">,</span>
  Post<span class="token punctuation">,</span>
  Body<span class="token punctuation">,</span>
  Patch<span class="token punctuation">,</span>
  Param<span class="token punctuation">,</span>
  Delete<span class="token punctuation">,</span>
  Version<span class="token punctuation">,</span>
  Request<span class="token punctuation">,</span>
  Query<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./user.service&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./dto/create-user.dto&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> UpdateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./dto/update-user.dto&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Request</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Query</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> query<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-post-获取参数" tabindex="-1"><a class="header-anchor" href="#_2-post-获取参数"><span>2.post 获取参数</span></a></h4><p>可以使用 Request 装饰器 或者 Body 装饰器 跟 express 完全一样</p><figure><img src="`+d+'" alt="Request" tabindex="0" loading="lazy"><figcaption>Request</figcaption></figure><p>或者直接使用 Body 装饰器</p><figure><img src="'+k+'" alt="Request" tabindex="0" loading="lazy"><figcaption>Request</figcaption></figure><p>也可以直接读取 key</p><figure><img src="'+v+`" alt="Request" tabindex="0" loading="lazy"><figcaption>Request</figcaption></figure><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  Controller<span class="token punctuation">,</span>
  Get<span class="token punctuation">,</span>
  Post<span class="token punctuation">,</span>
  Body<span class="token punctuation">,</span>
  Patch<span class="token punctuation">,</span>
  Param<span class="token punctuation">,</span>
  Delete<span class="token punctuation">,</span>
  Version<span class="token punctuation">,</span>
  Request<span class="token punctuation">,</span>
  Query<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./user.service&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./dto/create-user.dto&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> UpdateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./dto/update-user.dto&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Request</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> body<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> body<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-动态路由" tabindex="-1"><a class="header-anchor" href="#_3-动态路由"><span>3.动态路由</span></a></h4><p>可以使用 Request 装饰器 或者 Param 装饰器 跟 express 完全一样</p><figure><img src="`+m+'" alt="Request" tabindex="0" loading="lazy"><figcaption>Request</figcaption></figure><figure><img src="'+b+`" alt="Request" tabindex="0" loading="lazy"><figcaption>Request</figcaption></figure><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// http://localhost:3000/user/123</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Controller<span class="token punctuation">,</span>
  Get<span class="token punctuation">,</span>
  Post<span class="token punctuation">,</span>
  Body<span class="token punctuation">,</span>
  Patch<span class="token punctuation">,</span>
  Param<span class="token punctuation">,</span>
  Delete<span class="token punctuation">,</span>
  Version<span class="token punctuation">,</span>
  Request<span class="token punctuation">,</span>
  Query<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./user.service&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./dto/create-user.dto&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> UpdateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./dto/update-user.dto&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&quot;:id&quot;</span><span class="token punctuation">)</span>
  <span class="token function">findId</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Request</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&quot;:id&quot;</span><span class="token punctuation">)</span>
  <span class="token function">findId</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Param</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-读取-header-信息" tabindex="-1"><a class="header-anchor" href="#_4-读取-header-信息"><span>4.读取 header 信息</span></a></h4><figure><img src="`+g+`" alt="Request" tabindex="0" loading="lazy"><figcaption>Request</figcaption></figure><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  Controller<span class="token punctuation">,</span>
  Get<span class="token punctuation">,</span>
  Post<span class="token punctuation">,</span>
  Body<span class="token punctuation">,</span>
  Patch<span class="token punctuation">,</span>
  Param<span class="token punctuation">,</span>
  Delete<span class="token punctuation">,</span>
  Version<span class="token punctuation">,</span>
  Request<span class="token punctuation">,</span>
  Query<span class="token punctuation">,</span>
  Ip<span class="token punctuation">,</span>
  Header<span class="token punctuation">,</span>
  Headers<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./user.service&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./dto/create-user.dto&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> UpdateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./dto/update-user.dto&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&quot;:id&quot;</span><span class="token punctuation">)</span>
  <span class="token function">findId</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Param</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> params<span class="token punctuation">,</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">Headers</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> params<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-状态码" tabindex="-1"><a class="header-anchor" href="#_5-状态码"><span>5.状态码</span></a></h4><p>使用 HttpCode 装饰器 控制接口返回的状态码</p><figure><img src="`+y+`" alt="Request" tabindex="0" loading="lazy"><figcaption>Request</figcaption></figure><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  Controller<span class="token punctuation">,</span>
  Get<span class="token punctuation">,</span>
  Post<span class="token punctuation">,</span>
  Body<span class="token punctuation">,</span>
  Patch<span class="token punctuation">,</span>
  Param<span class="token punctuation">,</span>
  Delete<span class="token punctuation">,</span>
  Version<span class="token punctuation">,</span>
  Request<span class="token punctuation">,</span>
  Query<span class="token punctuation">,</span>
  Ip<span class="token punctuation">,</span>
  Header<span class="token punctuation">,</span>
  Headers<span class="token punctuation">,</span>
  HttpCode<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./user.service&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./dto/create-user.dto&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> UpdateUserDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./dto/update-user.dto&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">&quot;:id&quot;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">HttpCode</span></span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
  <span class="token function">findId</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Headers</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> header<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24))])}const _=o(f,[["render",x],["__file","nestjs 控制器.html.vue"]]),C=JSON.parse('{"path":"/node/nestjs/nestjs%20%E6%8E%A7%E5%88%B6%E5%99%A8.html","title":"nestjs 控制器","lang":"zh-CN","frontmatter":{"title":"nestjs 控制器","icon":"gears","order":4,"category":["node"],"tag":["nestjs"],"navbar":true,"sidebar":true,"breadcrumb":true,"pageInfo":false,"contributors":true,"editLink":true,"lastUpdated":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":false,"description":"Controller Request （获取前端传过来的参数） nestjs 提供了方法参数装饰器 用来帮助我们快速获取参数 如下 调试工具可以使用 postMan ApiFox 等 下载地址 Apifox - API 文档、调试、Mock、测试一体化协作平台 - 接口文档工具，接口自动化测试工具，接口 Mock 工具，API 文档工具，API Moc...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/node/nestjs/nestjs%20%E6%8E%A7%E5%88%B6%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"孜然地球"}],["meta",{"property":"og:title","content":"nestjs 控制器"}],["meta",{"property":"og:description","content":"Controller Request （获取前端传过来的参数） nestjs 提供了方法参数装饰器 用来帮助我们快速获取参数 如下 调试工具可以使用 postMan ApiFox 等 下载地址 Apifox - API 文档、调试、Mock、测试一体化协作平台 - 接口文档工具，接口自动化测试工具，接口 Mock 工具，API 文档工具，API Moc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blogs/assets/images/node/nestjs/6.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-03T10:01:26.000Z"}],["meta",{"property":"article:author","content":"孜然地球"}],["meta",{"property":"article:tag","content":"nestjs"}],["meta",{"property":"article:modified_time","content":"2025-01-03T10:01:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nestjs 控制器\\",\\"image\\":[\\"https://mister-hope.github.io/blogs/assets/images/node/nestjs/6.png\\",\\"https://mister-hope.github.io/blogs/assets/images/node/nestjs/7.png\\",\\"https://mister-hope.github.io/blogs/assets/images/node/nestjs/8.png\\",\\"https://mister-hope.github.io/blogs/assets/images/node/nestjs/10.png\\",\\"https://mister-hope.github.io/blogs/assets/images/node/nestjs/9.png\\",\\"https://mister-hope.github.io/blogs/assets/images/node/nestjs/11.png\\",\\"https://mister-hope.github.io/blogs/assets/images/node/nestjs/12.png\\",\\"https://mister-hope.github.io/blogs/assets/images/node/nestjs/13.png\\",\\"https://mister-hope.github.io/blogs/assets/images/node/nestjs/14.png\\"],\\"dateModified\\":\\"2025-01-03T10:01:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"孜然地球\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"Controller Request （获取前端传过来的参数）","slug":"controller-request-获取前端传过来的参数","link":"#controller-request-获取前端传过来的参数","children":[]}],"git":{"createdTime":1735898486000,"updatedTime":1735898486000,"contributors":[{"name":"garry","email":"Garryg@ecinnovations.com","commits":1}]},"readingTime":{"minutes":2.72,"words":815},"filePathRelative":"node/nestjs/nestjs 控制器.md","localizedDate":"2025年1月3日","excerpt":"<h3>Controller Request （获取前端传过来的参数）</h3>\\n<p><a href=\\"https://so.csdn.net/so/search?q=nestjs&amp;spm=1001.2101.3001.7020\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">nestjs</a> 提供了方法参数装饰器 用来帮助我们快速获取参数 如下</p>\\n<table><tbody><tr><td>@Request()</td><td>req&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</td></tr><tr><td>@Response()</td><td>res&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td></tr><tr><td>@Next()</td><td>next</td></tr><tr><td>@Session()</td><td>req.session</td></tr><tr><td>@Param(key?: string)&nbsp; &nbsp; &nbsp; &nbsp;</td><td><code>req.params</code>/<code>req.params[key]</code></td></tr><tr><td>@Body(key?: string)</td><td><code>req.body</code>/<code>req.body[key]</code></td></tr><tr><td>@Query(key?: string)</td><td><code>req.query</code>/<code>req.query[key]</code></td></tr><tr><td>@Headers(name?: string)&nbsp; &nbsp;</td><td><code>req.headers</code>/<code>req.headers[name]</code></td></tr><tr><td>@HttpCode</td><td></td></tr></tbody></table>","autoDesc":true}');export{_ as comp,C as data};

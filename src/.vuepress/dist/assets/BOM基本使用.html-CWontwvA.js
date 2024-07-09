import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as s,c as d,a as t,e as n,b as o,d as r}from"./app-Pm01oTn3.js";const i={},c=r('<h2 id="bom" tabindex="-1"><a class="header-anchor" href="#bom"><span>BOM</span></a></h2><ul><li>浏览器对象模型</li><li>把<code>浏览器</code>当作一个<code>对象</code>来看待</li><li>BOM的顶级对象是window</li><li>BOM学习的是浏览器窗口交互的一些对象</li><li>BOM是浏览器厂商在各自浏览器上定义的，兼容性较差</li></ul><h3 id="window" tabindex="-1"><a class="header-anchor" href="#window"><span>window</span></a></h3><h4 id="窗口控制方法" tabindex="-1"><a class="header-anchor" href="#窗口控制方法"><span>窗口控制方法</span></a></h4><ul><li><code>moveBy(x,y)</code>：从当前位置水平移动窗体X个像素，垂直移动窗体y个像素，x为负数，将向左移动窗体 ，y为负数，将向上移动窗体</li><li><code>moveTo(x,y)</code>：移动窗体左上角到相对于屏幕左上角的(x,y)点</li><li><code>resizeBy(w,h)</code>：相对窗体当前的大小，宽度调整w个像素，高度调整h个像素。如果参数为负值，将缩小窗体，反之扩大窗体</li><li><code>resizeTo(w,h)</code>：将窗体调整为w个像素，高度调整为h个像素</li><li><code>scrollTo(x,y)</code>：如果有滚动条，将横向滚动条移动到相对于窗体宽度为X个像素的位置，将纵向滚动条移动到相对于窗体高度为y个像素的位置</li><li><code>scrollBy(x,y)</code>：如果有滚动条，将横向滚动条向左移动x个像素，将纵向滚动条向下移动y个像素</li></ul><h4 id="打开新窗口" tabindex="-1"><a class="header-anchor" href="#打开新窗口"><span>打开新窗口</span></a></h4><ul><li><code>window.open()</code>：即可以导航到一个特定的URL，也可以打开一个新的浏览器窗口</li><li>如果<code>window.open()</code>传递了第二个参数，且该参数是已有窗口或者框架的名称，那么就会在目标窗口加载第一个参数指定的URL</li><li><code>window.open()</code>会返回新窗口的引用，也就是新窗口的<code>window</code>对象</li><li><code>window.close()</code>仅用于通过 <code>window.open()</code>打开的窗口。新建的<code>window</code>对象有一个<code>openr</code>属性，该属性指向打开他的原始窗口对象</li></ul><h3 id="location" tabindex="-1"><a class="header-anchor" href="#location"><span>location</span></a></h3><table><thead><tr><th>属性名</th><th>例子</th><th>说明</th></tr></thead><tbody><tr><td>hash</td><td>&quot;#contents&quot;</td><td>url中#后面的字符，没有则返回空字符串</td></tr><tr><td>host</td><td>www.baidu.com:80</td><td>服务器名称和端口号</td></tr><tr><td>hostname</td><td>www.baidu.com</td><td>域名，不带端口号</td></tr><tr><td>href</td><td>http://www.baidu,com:80/api/?name=sola</td><td>完整URL</td></tr><tr><td>pathname</td><td>&quot;/api&quot;</td><td>服务器下面的文件路径</td></tr><tr><td>port</td><td>80</td><td>url端口号 ，没有则为空</td></tr><tr><td>protocol</td><td>http:</td><td>使用的协议</td></tr><tr><td>search</td><td>?name=sola</td><td>url的查询字符串，通常为?后面的内容</td></tr></tbody></table><p><strong>注意</strong>：除了hash之外，只要修改<code>location</code>的一个属性，就会导致页面重新加载URL。<code>location.reload()</code>，此方法可以重新刷新当前页面。这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载。如果要强制从服务器重新加载，传递一个参数<code>true</code>即可</p><h3 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator"><span>navigator</span></a></h3>',11),p=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"描述")])],-1),h={href:"https://www.w3school.com.cn/jsref/prop_nav_appcodename.asp",target:"_blank",rel:"noopener noreferrer"},u=t("td",null,"返回浏览器的代码名。",-1),_={href:"https://www.w3school.com.cn/jsref/prop_nav_appminorversion.asp",target:"_blank",rel:"noopener noreferrer"},w=t("td",null,"返回浏览器的次级版本。",-1),m={href:"https://www.w3school.com.cn/jsref/prop_nav_appname.asp",target:"_blank",rel:"noopener noreferrer"},g=t("td",null,"返回浏览器的名称。",-1),f={href:"https://www.w3school.com.cn/jsref/prop_nav_appversion.asp",target:"_blank",rel:"noopener noreferrer"},b=t("td",null,"返回浏览器的平台和版本信息。",-1),y={href:"https://www.w3school.com.cn/jsref/prop_nav_browserlanguage.asp",target:"_blank",rel:"noopener noreferrer"},v=t("td",null,"返回当前浏览器的语言。",-1),k={href:"https://www.w3school.com.cn/jsref/prop_nav_cookieenabled.asp",target:"_blank",rel:"noopener noreferrer"},B=t("td",null,"返回指明浏览器中是否启用 cookie 的布尔值。",-1),x={href:"https://www.w3school.com.cn/jsref/prop_nav_cpuclass.asp",target:"_blank",rel:"noopener noreferrer"},M=t("td",null,"返回浏览器系统的 CPU 等级。",-1),O={href:"https://www.w3school.com.cn/jsref/prop_nav_online.asp",target:"_blank",rel:"noopener noreferrer"},j=t("td",null,"返回指明系统是否处于脱机模式的布尔值。",-1),T={href:"https://www.w3school.com.cn/jsref/prop_nav_platform.asp",target:"_blank",rel:"noopener noreferrer"},L=t("td",null,"返回运行浏览器的操作系统平台。",-1),E={href:"https://www.w3school.com.cn/jsref/prop_nav_systemlanguage.asp",target:"_blank",rel:"noopener noreferrer"},C=t("td",null,"返回 OS 使用的默认语言。",-1),A={href:"https://www.w3school.com.cn/jsref/prop_nav_useragent.asp",target:"_blank",rel:"noopener noreferrer"},N=t("td",null,"返回由客户机发送服务器的 user-agent 头部的值。",-1),U={href:"https://www.w3school.com.cn/jsref/prop_nav_userlanguage.asp",target:"_blank",rel:"noopener noreferrer"},z=t("td",null,"返回 OS 的自然语言设置。",-1),R={href:"https://www.w3school.com.cn/jsref/met_nav_javaenabled.asp",target:"_blank",rel:"noopener noreferrer"},q=t("td",null,"规定浏览器是否启用 Java。",-1),D={href:"https://www.w3school.com.cn/jsref/met_nav_taintenabled.asp",target:"_blank",rel:"noopener noreferrer"},V=t("td",null,"规定浏览器是否启用数据污点 (data tainting)。",-1),X=r(`<h3 id="screen" tabindex="-1"><a class="header-anchor" href="#screen"><span>screen</span></a></h3><p>保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息，比如像素宽度和像素高度等</p><table><thead><tr><th>书写格式</th><th>功能说明</th></tr></thead><tbody><tr><td>screen.width</td><td>屏幕分辨率的宽度，例如1024*768分辨率下宽度为1024</td></tr><tr><td>screen.height</td><td>返回屏幕的高度</td></tr><tr><td>screen.availWidth</td><td>屏幕中可用的宽</td></tr><tr><td>screen.availHeight</td><td>屏幕中可用的高</td></tr><tr><td>screen.colorDepth</td><td>屏幕的色彩数</td></tr><tr><td>screen.avaliLeft</td><td>没有被系统组件占用的屏幕最左侧像素（只读）</td></tr><tr><td>screen.avaliTop</td><td>没有被系统组件占用的屏幕最顶端像素（只读）</td></tr><tr><td>screen.height</td><td>屏幕像素高度</td></tr><tr><td>screen.pixelDepth</td><td>屏幕的位深</td></tr><tr><td>scree.top</td><td>当前屏幕顶端的像素距离</td></tr><tr><td>screen.orientation</td><td>返回 Screen Orientation API 中屏幕的朝向</td></tr></tbody></table><h3 id="history" tabindex="-1"><a class="header-anchor" href="#history"><span>history</span></a></h3><p>history对象主要用来操作浏览器URL的历史记录，可以通过参数向前，向后，或者向指定URL跳转</p><ul><li><p>history.go 接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token string">&#39;baidu.com&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 当参数为整数数字时，正数表示向前跳转指定的页面，负数为向后跳转指定的页面</span>
history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 向前跳转三个记录</span>
history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment">// 向后跳转一个记录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>history.forward() 向前跳转一个页面</p></li><li><p>history.back() 向后跳转一个 页面</p></li><li><p>history.length 获取历史记录数</p></li></ul>`,6);function H(S,F){const e=l("ExternalLinkIcon");return s(),d("div",null,[c,t("table",null,[p,t("tbody",null,[t("tr",null,[t("td",null,[t("a",h,[n("appCodeName"),o(e)])]),u]),t("tr",null,[t("td",null,[t("a",_,[n("appMinorVersion"),o(e)])]),w]),t("tr",null,[t("td",null,[t("a",m,[n("appName"),o(e)])]),g]),t("tr",null,[t("td",null,[t("a",f,[n("appVersion"),o(e)])]),b]),t("tr",null,[t("td",null,[t("a",y,[n("browserLanguage"),o(e)])]),v]),t("tr",null,[t("td",null,[t("a",k,[n("cookieEnabled"),o(e)])]),B]),t("tr",null,[t("td",null,[t("a",x,[n("cpuClass"),o(e)])]),M]),t("tr",null,[t("td",null,[t("a",O,[n("onLine"),o(e)])]),j]),t("tr",null,[t("td",null,[t("a",T,[n("platform"),o(e)])]),L]),t("tr",null,[t("td",null,[t("a",E,[n("systemLanguage"),o(e)])]),C]),t("tr",null,[t("td",null,[t("a",A,[n("userAgent"),o(e)])]),N]),t("tr",null,[t("td",null,[t("a",U,[n("userLanguage"),o(e)])]),z]),t("tr",null,[t("td",null,[t("a",R,[n("javaEnabled()"),o(e)])]),q]),t("tr",null,[t("td",null,[t("a",D,[n("taintEnabled()"),o(e)])]),V])])]),X])}const Z=a(i,[["render",H],["__file","BOM基本使用.html.vue"]]),J=JSON.parse('{"path":"/web/html/BOM%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html","title":"BOM基本使用","lang":"zh-CN","frontmatter":{"title":"BOM基本使用","icon":"HTML","order":4,"category":["HTML"],"tag":["HTML"],"navbar":true,"sidebar":true,"breadcrumb":true,"pageInfo":false,"contributors":true,"editLink":true,"lastUpdated":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":false,"description":"BOM 浏览器对象模型 把浏览器当作一个对象来看待 BOM的顶级对象是window BOM学习的是浏览器窗口交互的一些对象 BOM是浏览器厂商在各自浏览器上定义的，兼容性较差 window 窗口控制方法 moveBy(x,y)：从当前位置水平移动窗体X个像素，垂直移动窗体y个像素，x为负数，将向左移动窗体 ，y为负数，将向上移动窗体 moveTo(x,...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/web/html/BOM%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"孜然地球"}],["meta",{"property":"og:title","content":"BOM基本使用"}],["meta",{"property":"og:description","content":"BOM 浏览器对象模型 把浏览器当作一个对象来看待 BOM的顶级对象是window BOM学习的是浏览器窗口交互的一些对象 BOM是浏览器厂商在各自浏览器上定义的，兼容性较差 window 窗口控制方法 moveBy(x,y)：从当前位置水平移动窗体X个像素，垂直移动窗体y个像素，x为负数，将向左移动窗体 ，y为负数，将向上移动窗体 moveTo(x,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-05T10:07:55.000Z"}],["meta",{"property":"article:author","content":"孜然地球"}],["meta",{"property":"article:tag","content":"HTML"}],["meta",{"property":"article:modified_time","content":"2024-07-05T10:07:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BOM基本使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-05T10:07:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"孜然地球\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"BOM","slug":"bom","link":"#bom","children":[{"level":3,"title":"window","slug":"window","link":"#window","children":[]},{"level":3,"title":"location","slug":"location","link":"#location","children":[]},{"level":3,"title":"navigator","slug":"navigator","link":"#navigator","children":[]},{"level":3,"title":"screen","slug":"screen","link":"#screen","children":[]},{"level":3,"title":"history","slug":"history","link":"#history","children":[]}]}],"git":{"createdTime":1720174075000,"updatedTime":1720174075000,"contributors":[{"name":"sola-grj","email":"1131631886@qq.com","commits":1}]},"readingTime":{"minutes":4.22,"words":1267},"filePathRelative":"web/html/BOM基本使用.md","localizedDate":"2024年7月5日","excerpt":"<h2>BOM</h2>\\n<ul>\\n<li>浏览器对象模型</li>\\n<li>把<code>浏览器</code>当作一个<code>对象</code>来看待</li>\\n<li>BOM的顶级对象是window</li>\\n<li>BOM学习的是浏览器窗口交互的一些对象</li>\\n<li>BOM是浏览器厂商在各自浏览器上定义的，兼容性较差</li>\\n</ul>\\n<h3>window</h3>\\n<h4>窗口控制方法</h4>\\n<ul>\\n<li><code>moveBy(x,y)</code>：从当前位置水平移动窗体X个像素，垂直移动窗体y个像素，x为负数，将向左移动窗体 ，y为负数，将向上移动窗体</li>\\n<li><code>moveTo(x,y)</code>：移动窗体左上角到相对于屏幕左上角的(x,y)点</li>\\n<li><code>resizeBy(w,h)</code>：相对窗体当前的大小，宽度调整w个像素，高度调整h个像素。如果参数为负值，将缩小窗体，反之扩大窗体</li>\\n<li><code>resizeTo(w,h)</code>：将窗体调整为w个像素，高度调整为h个像素</li>\\n<li><code>scrollTo(x,y)</code>：如果有滚动条，将横向滚动条移动到相对于窗体宽度为X个像素的位置，将纵向滚动条移动到相对于窗体高度为y个像素的位置</li>\\n<li><code>scrollBy(x,y)</code>：如果有滚动条，将横向滚动条向左移动x个像素，将纵向滚动条向下移动y个像素</li>\\n</ul>","autoDesc":true}');export{Z as comp,J as data};

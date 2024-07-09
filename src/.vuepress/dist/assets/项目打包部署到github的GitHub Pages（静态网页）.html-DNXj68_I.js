import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,d as a}from"./app-Pm01oTn3.js";const s="/blogs/assets/images/git/2.png",g="/blogs/assets/images/git/1.png",r="/blogs/assets/images/git/3.png",o={},n=a('<h1 id="项目打包部署到github的github-pages-静态网页" tabindex="-1"><a class="header-anchor" href="#项目打包部署到github的github-pages-静态网页"><span>项目打包部署到github的GitHub Pages（静态网页）</span></a></h1><h2 id="_1-在github上建一个新仓库" tabindex="-1"><a class="header-anchor" href="#_1-在github上建一个新仓库"><span>1.在GitHub上建一个新仓库</span></a></h2><figure><img src="'+s+`" alt="创建仓库" tabindex="0" loading="lazy"><figcaption>创建仓库</figcaption></figure><h2 id="_2-建立好仓库要拉去到本地" tabindex="-1"><a class="header-anchor" href="#_2-建立好仓库要拉去到本地"><span>2.建立好仓库要拉去到本地</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone https://github.com/sola-grj/blogs.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-在本地开发好项目后-进行打包-然后推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#_3-在本地开发好项目后-进行打包-然后推送到远程仓库"><span>3.在本地开发好项目后，进行打包，然后推送到远程仓库</span></a></h2><ul><li>上传代码前要做一件很重要的事，把 .gitignore 文件删掉 或者把 /dist 注释一下 （否者上传时dist文件上传不了）</li></ul><p>4.部署 dist 文件到 GitHub Pages 上</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git subtree push --prefix dist origin gh-pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>这里需要注意，执行这个命令的时候，需要将dist目录放在根目录下</strong></p><figure><img src="`+g+'" alt="gh-pages分支" tabindex="0" loading="lazy"><figcaption>gh-pages分支</figcaption></figure><h2 id="_5-登录远程github仓库-通过setting-github-pages-source-将gh-pages设置为github-pages-的source" tabindex="-1"><a class="header-anchor" href="#_5-登录远程github仓库-通过setting-github-pages-source-将gh-pages设置为github-pages-的source"><span>5.登录远程GitHub仓库，通过setting -&gt; github pages -&gt; source 将gh-pages设置为GitHub pages 的source</span></a></h2><ul><li>在这里部署的时候可能有时候Save按钮会是失效的，不要慌，在重新选gh-pages分支即可</li></ul><figure><img src="'+r+'" alt="配置git-pages" tabindex="0" loading="lazy"><figcaption>配置git-pages</figcaption></figure>',14),u=[n];function p(l,h){return e(),i("div",null,u)}const b=t(o,[["render",p],["__file","项目打包部署到github的GitHub Pages（静态网页）.html.vue"]]),m=JSON.parse('{"path":"/Git/%E9%A1%B9%E7%9B%AE%E6%89%93%E5%8C%85%E9%83%A8%E7%BD%B2%E5%88%B0github%E7%9A%84GitHub%20Pages%EF%BC%88%E9%9D%99%E6%80%81%E7%BD%91%E9%A1%B5%EF%BC%89.html","title":"项目打包部署到github的GitHub Pages（静态网页）","lang":"zh-CN","frontmatter":{"title":"项目打包部署到github的GitHub Pages（静态网页）","icon":"gears","order":4,"category":["Git"],"tag":["Git"],"navbar":true,"sidebar":true,"breadcrumb":true,"pageInfo":false,"contributors":true,"editLink":true,"lastUpdated":true,"prev":true,"next":true,"comment":true,"footer":true,"backtotop":false,"description":"项目打包部署到github的GitHub Pages（静态网页） 1.在GitHub上建一个新仓库 创建仓库创建仓库 2.建立好仓库要拉去到本地 3.在本地开发好项目后，进行打包，然后推送到远程仓库 上传代码前要做一件很重要的事，把 .gitignore 文件删掉 或者把 /dist 注释一下 （否者上传时dist文件上传不了） 4.部署 dist 文...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/Git/%E9%A1%B9%E7%9B%AE%E6%89%93%E5%8C%85%E9%83%A8%E7%BD%B2%E5%88%B0github%E7%9A%84GitHub%20Pages%EF%BC%88%E9%9D%99%E6%80%81%E7%BD%91%E9%A1%B5%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"孜然地球"}],["meta",{"property":"og:title","content":"项目打包部署到github的GitHub Pages（静态网页）"}],["meta",{"property":"og:description","content":"项目打包部署到github的GitHub Pages（静态网页） 1.在GitHub上建一个新仓库 创建仓库创建仓库 2.建立好仓库要拉去到本地 3.在本地开发好项目后，进行打包，然后推送到远程仓库 上传代码前要做一件很重要的事，把 .gitignore 文件删掉 或者把 /dist 注释一下 （否者上传时dist文件上传不了） 4.部署 dist 文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blogs/assets/images/git/2.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-05T10:07:55.000Z"}],["meta",{"property":"article:author","content":"孜然地球"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:modified_time","content":"2024-07-05T10:07:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"项目打包部署到github的GitHub Pages（静态网页）\\",\\"image\\":[\\"https://mister-hope.github.io/blogs/assets/images/git/2.png\\",\\"https://mister-hope.github.io/blogs/assets/images/git/1.png\\",\\"https://mister-hope.github.io/blogs/assets/images/git/3.png\\"],\\"dateModified\\":\\"2024-07-05T10:07:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"孜然地球\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1.在GitHub上建一个新仓库","slug":"_1-在github上建一个新仓库","link":"#_1-在github上建一个新仓库","children":[]},{"level":2,"title":"2.建立好仓库要拉去到本地","slug":"_2-建立好仓库要拉去到本地","link":"#_2-建立好仓库要拉去到本地","children":[]},{"level":2,"title":"3.在本地开发好项目后，进行打包，然后推送到远程仓库","slug":"_3-在本地开发好项目后-进行打包-然后推送到远程仓库","link":"#_3-在本地开发好项目后-进行打包-然后推送到远程仓库","children":[]},{"level":2,"title":"5.登录远程GitHub仓库，通过setting -> github pages -> source 将gh-pages设置为GitHub pages 的source","slug":"_5-登录远程github仓库-通过setting-github-pages-source-将gh-pages设置为github-pages-的source","link":"#_5-登录远程github仓库-通过setting-github-pages-source-将gh-pages设置为github-pages-的source","children":[]}],"git":{"createdTime":1720174075000,"updatedTime":1720174075000,"contributors":[{"name":"sola-grj","email":"1131631886@qq.com","commits":1}]},"readingTime":{"minutes":0.9,"words":271},"filePathRelative":"Git/项目打包部署到github的GitHub Pages（静态网页）.md","localizedDate":"2024年7月5日","excerpt":"\\n<h2>1.在GitHub上建一个新仓库</h2>\\n<figure><img src=\\"/assets/images/git/2.png\\" alt=\\"创建仓库\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>创建仓库</figcaption></figure>\\n<h2>2.建立好仓库要拉去到本地</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>git clone https://github.com/sola-grj/blogs.git\\n</code></pre></div>","autoDesc":true}');export{b as comp,m as data};

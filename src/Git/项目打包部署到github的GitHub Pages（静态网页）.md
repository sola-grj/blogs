---
title: 项目打包部署到github的GitHub Pages（静态网页）
icon: gears
order: 4
category:
  - Git
tag:
  - Git

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
# 项目打包部署到github的GitHub Pages（静态网页）

## 1.在GitHub上建一个新仓库

![创建仓库](/assets/images/git/2.png)

## 2.建立好仓库要拉去到本地

```
git clone https://github.com/sola-grj/blogs.git
```

## 3.在本地开发好项目后，进行打包，然后推送到远程仓库

- 上传代码前要做一件很重要的事，把 .gitignore 文件删掉 或者把 /dist 注释一下 （否者上传时dist文件上传不了）

4.部署 dist 文件到 GitHub Pages 上

```
git subtree push --prefix dist origin gh-pages
```

**这里需要注意，执行这个命令的时候，需要将dist目录放在根目录下**

![gh-pages分支](/assets/images/git/1.png)



## 5.登录远程GitHub仓库，通过setting -> github pages -> source 将gh-pages设置为GitHub pages 的source

- 在这里部署的时候可能有时候Save按钮会是失效的，不要慌，在重新选gh-pages分支即可

![配置git-pages](/assets/images/git/3.png)
---
title: 在Mac上使用Hexo创建站点经验
tags:
  - hexo
  - web
  - 笔记
categories:
  - 技术
  - web
toc_number: false
cover: 'https://i.loli.net/2020/02/18/I3suG6bfcCMJBzw.jpg'
copyright: false
abbrlink: 60986
date: 2019-08-24 22:43:08
top_img: false
---

使用{% link Hexo https://hexo.io %}+{% link Github https://github.com %}创建个人博客相当方便，本文简单介绍下我在创建此站点时的一些经验和遇到的问题。

## 简介

现在市面上可选的建站程序相当多，除了老牌博客程序WordPress，还有FarBox，Octopress，Ghost，Jekyll，Hexo等等，其中一些例如Jekyll和Hexo可以托管到Github上，利用GitHub Pages建站。Jekyll是GitHub官方推荐建站工具，完全免费插件多，教程多，自定义程度高，但是步骤繁琐需要一定的技术基础，而Hexo也是免费，使用{% link Node.js https://nodejs.org/zh-cn/ %}搭建，速度快，操作安装都很简单，命令也少，可选主题也很丰富，好像是产于台湾，在华人世界十分流行。作为小白选手，第一次建站果断选择了Hexo。

## 步骤

平台：Mac
参考：
    {% link hexo官方文档 https://hexo.io/zh-cn/docs/ %} 
    {% link Mac+Hexo+GitHub搭建博客教程-谓之小一的文章-知乎 https://zhuanlan.zhihu.com/p/34654952 %}

### 1.安装Hexo

首先要确保安装Xcode，Node.js和Git。Xcode在APP store下载，Node.js建议官网下载直接安装，也可以nvm安装，Git使用终端和Homebrew安装 `brew install git` 或者直接下载安装。

然后就可以打开终端使用[npm](https://www.npmjs.com/)安装Hexo了，（sudo：权限，-g：全局安装）
`sudo npm install -g hexo`

### 2.初始化

在你喜欢的位置创建一个文件夹，取一个好听的英文名字，比如myweb🙂，然后进入文件夹``cd myweb``
初始化本地博客``hexo init``
在本地博客安装npm``sudo npm install``
建站完成后文件夹内出现的内容可以去[官方文档-建站](https://hexo.io/zh-cn/docs/setup/)了解一下。
执行generate命令``hexo g``生成静态文件，然后执行``hexo s``命令启动本地服务器，地址是``http://localhost:4000/``,此时可以看到博客相当土气的初始页面。
![ ](https://pic3.zhimg.com/v2-dcb8d3dcc5d2b9b39c1b8d1149ccfd6e_b.jpg)

### 3.更换主题

[Hexo-主题](https://hexo.io/themes/)提供了大量可选主题，可根据个人口味选择，另外也可以去知乎豆瓣Github上寻找大神们分享的主题。
一般主题的Github仓库里都有安装和设置文档，建议仔细查看，以便日后自定义修改主题，这里以本博主题[Butterfly](https://github.com/jerryc127/hexo-theme-butterfly)为例简单介绍一下如何安装。

首先在博客根目录里使用下载主题
``git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly``
然后在hexo配置文件_config.yml中将主题改为Butterfly
``theme: Butterfly``
使用`hexo g`和`hexo s`测试一下吧。
如此你的博客就换上新衣服，进入时尚圈了。然后根据主题的安装文档进行自定义设置就可以了，相当简单。

### 4.链接到GitHub

现在就可以把你的小站放到GitHub上托管了，当然首先你要先拥有一个GitHub账户并且掌握如何创建和管理仓库，如果不会Google或者知乎一下。
然后新建一个仓库命名为``user.github.io``,这里的user建议使用你的GitHub用户名，然后在`Setting->Github Pages`里打开Pages，这样可以使用user.github.io直接访问，如：``zkp.github.io``，然后用编辑器打开myweb中的配置文件_config.yml，在文档的最后配置deploy：

```code
deploy:
    type: git #使用git进行配置
    repository: https://github.com/zkp/zkp.github.io.git #可以在GitHub仓库代码页绿色按钮找到这个链接
    branch: master
```

这里要注意一下，写yml格式代码冒号后面必加空格。

再安装一下hexo-deployer-git `npm install hexo-deployer-git`。现在就可以执行`hexo g -d`或者

```code
hexo g
hexo d
```

生成静态文件（g）然后在上传到服务器上了（d），如果以前为配置过git可能需要输入GitHub账户和密码：

```code
username for 'https://github.com':
password for 'https://github.com':
```

执行成功后就可以用zkp.github.io在任何设备上访问网站了，简直太方便了。

而且还可以去阿里云或者腾讯云花几十块钱买个一年的域名，通过GitHub链接到域名上就可以使用自己的域名登陆了。具体如何配置可以看[这里](https://juejin.im/post/5a71a4f9518825733a3105ac)。

另外以后每次修改主题或者发布文章都要执行`hexo g -d`更新服务器，如果出现错误，可以先运行`hexo clean`在运行前面的命令。

### 5.发布新的文章

在本地`hexo new post "站点名称"`可以新建文章，例如这里新建一个Hellow world文章：
首先
`$ hexo new post "Hellow world"`
然后会提示
`INFO  Created: ~/myweb/source/_posts/Hellow word.md`
然后可以去这个位置打开markdown文件，文件由上面的[Front-matter](https://hexo.io/zh-cn/docs/front-matter)和编辑区组成，可以根据官方文档或者主题的配置文档对文章Front-matter进行设置，例如添加tags和categories等，然后就可以在下面使用markdown语法愉快的写作了。
写完保存别忘了生成静态文件，上传到github。

另外还可以使用Hexo配置第三方的插件，例如添加评论，转发，动效等等功能，有兴趣就去探索一下吧。

## 问题

我在建站的时候遇到一些小问题。

### 每次上传之后之前绑定的域名就失效了

这是因为每次上传都会覆盖服务器上绑定域名的文件CNAME，解决方法是在myweb的source文件夹里创建一个CNAME文件，在里面写上域名就可以了。

### 执行 hexo d 后卡住

这个问题困扰了一下午，在求救的过程中发现很多人都遇到过，很多人选择死等，但是我死等后居然报错，心灰意冷，最后终于找到了问题的关键，我在多次上传后准备提交的时候有一次因为一个文件超过Github最大上传限制被卡住，删除那个文件还是不行，因为在目录里有一个隐藏的提交历史文件.deploy_git一直被卡住，所以要打开隐藏文件找到并删除它，然后`hexo clean`再`hexo g -d`,问题解决！

Mac打开隐藏文件的方法是`Command+Shift+.`

## 感想

做这个博客的想法已经在脑中里存放了好久了，但是一直没去动手实现，今次终于做出来了，不用再纠结自己想分享的内容放哪了。利用Hexo和Github真的超级方便，虽然现在还是很简单的页面和功能但是基本满足我的需要了，而且以后还可以慢慢搞一些插件和新的内容。

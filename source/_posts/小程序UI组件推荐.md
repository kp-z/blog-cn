---
title: 小程序UI组件推荐
tags:
  - 小程序
  - 推荐
  - 入门
  - 笔记
  - ui
categories:
  - 技术
  - 小程序
cover: 'https://i.loli.net/2020/02/22/rd9nc2sQhqjaf6V.png'
abbrlink: 1941
date: 2020-02-22 13:59:35
top_img: false
---
{% note primary %}
记录在制作小程序时使用的组件
{% endnote %}
## ColorUI

>ColorUI是一个css库！！！在你引入样式后可以根据class来调用组件，一些含有交互的操作也有，可以为你开发提供一些思路。[下载](https://www.color-ui.com/)|[仓库](https://github.com/weilanwl/ColorUI)｜扫描下面二维码可以预览全部组件👇
![](https://i.loli.net/2020/02/22/uiMEAIZYFpPTGKB.png)

直接下载组件，根据官方Readme介绍，移动```/demo```（我把文件名改为colorui）到小程序目录里即可，我是创建了文件夹```components```用于统一管理外部组件，结构如下。

![](https://i.loli.net/2020/02/22/KAlbTFatwoev3yk.png)

下一步要在全局样式表```app.wxss```中导入样式（注意自己的路径⚠️）
```css
@import './components/colorui/main.wxss'; # 样式
@import './components/colorui/icon.wxss'; # 图标
```

然后就可以在自己的Pages里调用样式了，作者并没有提供详尽的使用说明，所以可以先在手机上看Demo效果，然后去对应```.wxml```文件里找到位置，找到标签，如果需要修改可以去对应```main.wxss```文件中```Ctrl+F```找到修改源码，或者自己写css覆盖。

ColorUI是我一直使用的UI组件，所以详细介绍一下，当然还又很多其他的UI组件也不错。

## 其他

* [iViewUI]()
* [MinUI]()
* [TaroUI]()
* [Vant组件]()
* [WuxUI]()

---
title: 图形学笔记：变换 Transformations
tags:
  - cg
  - 理论
  - python
  - 入门
categories:
  - 技术
  - 图形学
top_img: false
cover: 'https://i.loli.net/2019/08/25/atF3WkgSR2L7y5Q.jpg'
abbrlink: 6129
date: 2020-01-29 21:06:47
---
{% note info %}
未完待续... ...
{% endnote %}

>从这篇文章开始整理我在学校学到的计算机图形学相关知识，原则是如果在网上没有找到清楚的解释，我会尝试自己解释出来，如果找到了就直接贴链接。

## CG和CV的关系

首先想解释一下 Computer Graphics和 Computer Vision的关系和区别.
大致上讲，CG是图像和视频合成的工具和机制，而CV通常用于分析和提取视频和图像的语义内容，这两个领域的技术没有明显的界限，但是目的稍有不同。

![fig1](https://cfyksa.am.files.1drv.com/y4m6_SykGFijoXo44Z1HFAjRmJRTG4mHVgvxDWdTcN2LCqLJjIRkXZYG8eOScepnMgBnflZ4ykpHd04JPcpTBfBYVk0aPIxXuWkT11C-YwVx9bVYgoH_5-sp-6k0oIWZHTapk2w082LywOIWHoI47WIP0Wkl6SExKxdJnKWLOJ5W_MZgH4pWxJEJW9WAJOKZo4bq9DOBh2ck1i3d61IGiYchg?width=3517&height=1469&cropmode=none)

## 基础

### 向量积 Vector Cross product
  
关于[Cross product](https://en.wikipedia.org/wiki/Cross_product)维基百科解释的非常详细。
$$\vec u\times\vec v=|\vec u||\vec v|sin\theta\vec c$$
需要特别注意的是两个向量**u**和**v**在三维空间的叉乘的几何意义

### 数量积 Vector Dot Product
  
关于[Dot Product](https://en.wikipedia.org/wiki/Dot_product) 的相关知识。
$$\vec u\cdot\vec v=|\vec u||\vec v|cos\theta$$

## 变换

### 仿射组合 The affine combination
  
首先通过下文先了解一下什么是仿射变换或者叫仿射映射.

[如何通俗地讲解「仿射变换」这个概念？ - 马同学的回答 - 知乎](https://www.zhihu.com/question/20666664/answer/157400568)

而仿射函数实际上就是表示这一变换过程的函数，一般形式是$f(\vec x)=A\vec x+\vec b$,$A$是一个$m\times k$矩阵，$\vec x$是一个$k$向量, $\vec b$是一个$m$向量。

仿射组合的概念更加抽象，可以通过下面这个例子了解一下两个二维向量的仿射组合：

[仿射组合为什么代表一条线？ - 电猫哥electricat的回答 - 知乎](https://www.zhihu.com/question/294185249/answer/489541869)

这个例子证明了两个二维向量的仿射组合可以代表一条直线，可以发现仿射组合其实是对于给定向量$\vec v_1,\vec v_2$（者点$p_1，p_2$）与一组权重$[\lambda_0,\lambda_1]$的线性变换，而且必须满足$\lambda_1+\lambda_2=1$，即$\vec y=\lambda_1\vec v_1+\lambda_2\vec v_2$。推广到$n$个向量定义如下：
$$ 组合 \\{v\in V|v=\sum_{i=0}^{n}\lambda_iv_i,with\sum_{i=0}^{n}\lambda_i=1\\} 被称为向量v_i的仿射组合$$

未完，这部分以后会补张图...）

### 重心坐标 Barycentric Coordinates

上面介绍的内容其实隐含了一个前提：坐标系类型已确定。在数学中，坐标系的类型很多，例如[齐次坐标系（homogeneous coordinates or projective coordinates）](https://zh.wikipedia.org/wiki/齐次坐标)，和[笛卡尔坐标系（Cartesian coordinate system）](https://zh.wikipedia.org/wiki/笛卡尔坐标系),在不同的坐标系下，对事物的描述方法和变换自然是不同的。各个坐标的关系可以参考下面的文章：

[从带号面积到坐标系的建立 - PeaucellieRay的文章 - 知乎](https://zhuanlan.zhihu.com/p/59889485)

这里主要介绍一下重心坐标系，找到一片讲的比较清楚的文章。

[重心坐标（Barycentric coordinates） - 杨超的文章 - 知乎](https://zhuanlan.zhihu.com/p/58199366)

通过上文其实我们可以发觉重心坐标的表示方法就是点$P_i$的仿射组合，而$w_i$就是组合权重。
值得注意的是，上文的三角形其实是放在一个仿射空间（affine space）里的。维基百科这样描述仿射空间：

> 仿射空间是没有起点只有方向大小的向量所构成的向量空间。

我的理解是仿射空间就是没有原点的线性空间，这里就不展开讨论了。

回到重心坐标的话题上来，通过结合仿射组合，有下面的定义:

$$在一个仿射空间的坐标系内，给出点集B=\\{p_0,...p_n\\}和点p的仿射组合:$$

$$p=\sum_{i=0}^{n}\lambda_ip_i\ with\ \lambda_i\ge0;\ \sum_{i=0}^{n}\lambda_i=1\lambda_i$$

$$就是点p的重心坐标（barycentric\ coordinates).$$

![fig2](https://dvalva.am.files.1drv.com/y4m4dzIxj7tzZeE109HAFsICkaN4pGkH1yDmmbK2ENkfGggRz4G-zHCW1TmIhSvi17qmKMrqC21Y-Ii3WW6J9nRxferDdcalJsV8lpPKSvUuoI416rpcB8XmiFSU7voIxRbfHl9oTlH7Q7EcR2JMuof-AWPnwhGO9fMO-X4MwaUhFx43l3k0R-JNnhI1rsqrqee1C2EzE4mFFSNNaTPWCi9sQ?width=3518&height=1328&cropmode=none)

通过多个点确定一个坐标确实感觉很费劲，但是如上个链接里的文章所说，这个坐标系大有可为，在计算机图形学中需要使用一个非常重要的技术——[线性插值](https://zh.wikipedia.org/wiki/线性插值)，就用到重心坐标，这个以后的文章一定也会提到。

### 凸包 Convex Hulls

凸包的几何意义是给定空间一堆离散的点，计算能够包含这些点的一个凸多边形,如下图可以用凸包将general mesh的点精简成convex mesh，在碰撞检测中省去了大量内存。

![fig3](https://cqbg0a.am.files.1drv.com/y4mSmnEo6uIV4YX4pFPtxoyQfsbeqlGVJOEB-2HiOqpuRIUqaMzWzHZjq1rcR2XDfS0ds51Js15qXHyBw0XdJlIwiu1ml0uohD81eW3nqajqCWclqw2FiYox9lFyv0fnd4PfJ8OaPFY1Y4B4k4_Y7to2duYgZhSzaTRk0dOSNnmkaxBjAVeNQ4guByB4AOrErkd2ksHri98XLAKgboi0kRbIA?width=1064&height=404&cropmode=none)

凸包的表示方法如下，可以发现可以利用仿射组合保证凸性（Convexity），原因暂不讨论。

$$点集 co\\{p_0,...,p_n\\}=\\{p|p=\sum_{i=0}^{n}\lambda_ip_i,\sum_{i=0}^{n}\lambda_i,and\ \lambda_i\ge0,i=0,...,n\\};co\\{p_0,...,p_n\\}就是点集p_1，...,p_n的凸包$$

![cg01_fig_2.jpg](https://i.loli.net/2020/02/03/lniZ6AbcDEwBRPQ.jpg)

### 仿射映射 Affine mappings
  
其实仿射映射跟前面所说的仿射变换的概念基本一致，这里重新详细的介绍一下，简单的说仿射映射就是线性变化加平移，维基百科里关于[仿射映射](https://en.wikipedia.org/wiki/Affine_transformation)给出了两个定义，第一个比较好理解如下：

![cg01_fig_3.jpg](https://i.loli.net/2020/02/03/KezrA7yuv1UMih4.jpg)

另一个定义对我来说比较难理解:

![cg01_fig_4.jpg](https://i.loli.net/2020/02/03/swEYJxeufmo6Kpk.jpg)

我的理解是，在向量集（点集）中，每个向量$\vec a_i$通过变换后，对应的权重$\lambda_i$是不变的，既然权重没变，相对位也没有变，所以保留了这个向量集的重心。

仿射映射具有如下性质:

    1. 一条线映射之后还是一条线。
    2. 有限集映射后任然是有限集。
    3. 平行的物体（线，平面，...）映射后依然是平行的。
    4. 物体面积，体积和长度的所占比例在映射后不变。

### 刚性变换 Rigid Transformation

刚性变换听着名字很奇怪，其实简单的说就是向量（点）只在位置和朝向上发生了改变的变换。下面两篇文从不同角度介绍了不同的坐标变换之间的关系，相互比较更容易理解。

[一文读懂图像中点的坐标变换(刚体变换，相似变换，仿射变换，投影变换)](https://blog.csdn.net/liuweiyuxiang/article/details/86510191)

[【Computer Vision】图像单应性变换/投影/仿射/透视](https://www.cnblogs.com/vincentcheng/p/7191014.html)

在了解完刚性变换的概念之后，给出如下定义：
$$一个坐标变换T如果满足：x,y\in\mathbb{R}^3:|T(x)-T(y)|=|x-y|，则这个变化是刚性的。$$

刚性变化有如下性质：

    1. 刚性变化就是一种仿射。
    2. 刚性变化包括：旋转（线性）；镜像（线性）；平移（非线性，但是可以通过齐次坐标“固定”，下面也会介绍。）

### 齐次坐标 Homogenous Coordinates

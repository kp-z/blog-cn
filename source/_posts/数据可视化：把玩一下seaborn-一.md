---
title: 数据可视化：把玩一下seaborn(一)
tags:
  - 数据可视化
  - 入门
  - seaborn
  - python
  - 笔记
categories:
  - 技术
  - python
cover: >-
  https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/IMG_3410.JPG
top_img: false
abbrlink: 43039
date: 2020-04-23 20:18:46
---


> 最近刚开始学习数据可视化，第一个任务就是了解并完成seaborn（一个python处理数据可视化的库）的官方教程，其他数据可视化的内容会后续更新。seaborn在调用数据的时候会有一些数据库相关的操作,例如`data=data=diamonds.sort_values("color")`这里就不解释了

环境搭建：

* 下载[Anaconda](https://www.anaconda.com/distribution/)搭建Python环境
* 下载类库Numpy， SciPy， matplotlib， pandas 和 seaborn

引入需要的库，设置一下显示网格的样式

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
```


## 数据关系可视化



接下来我们使用seaborn最常用的方法[`relplot()`](https://seaborn.pydata.org/generated/seaborn.relplot.html#seaborn.relplot)实现散点图`scatterplot()`和线图`lineplot()`

### 散点图 Scatter plots

首先可以引入seaborn中自带事例子数据集“tips”,这个数据集的属性有

* 时间数据 week

* 账单: 总消费,小费 total_bill, tips

* 消费者性别 sex

* 消费者是否抽烟 smoker

  ... 

下面很多例子使用了tips数据集,不会再特别指出

```python
sns.set(style="darkgrid") # 设置样式为网格
tips = sns.load_dataset("tips")
```

其实seaborn中有很多画散点图的方法其中一种是[`scatterplot()`](https://seaborn.pydata.org/generated/seaborn.scatterplot.html#seaborn.scatterplot)，使用方法是把数据集中的集合分配给方法中的属性,这样不同集合就会使用散点图中不同属性的样式展示出来如下面实例中的色调属性`hue`获取了数据集中的`smoker`集合,这样集合中的数据差异就可以通过色调的不同展示出来,其他同理.

```python
sns.relplot(x="total_bill", y="tip", size="size",hue="smoker", palette="ch:r=-.5,l=.75",  style="time",sizes=(15, 200), data=tips);
```

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423194837.png)



`scatterplot`是`relplot`的默认方法所以不需要单独设置,具体属性可以去[`scatterplot()`](https://seaborn.pydata.org/generated/seaborn.scatterplot.html#seaborn.scatterplot)的Api查看.



### 折线图强调连续性 Emphasizing continuity with line plots

下面介绍一下`relplot`里的第二个方法`lineplot`,前面说过默认方法是`scatterplot`所以要设置属性`kind=lineplot`启用折线图,这个方法默认`sort=true`将x轴数据与y轴数据按顺序对应起来.

```python
fmri = sns.load_dataset("fmri")
sns.relplot(x="timepoint", 
            y="signal",
            hue="region", 
            style="event",
            dashes=True, # 开启显示虚线
            markers=True, # 显示标记
          	# ci="sd" # 显示标准偏差,默认是显示置信区间,None关闭显示
            kind="line", 
            data=fmri);
```
这里我们引入一个新的fmri数据集

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423194924.png)

 

### 同时显示多了图表

用到`relplot`的属性是`col`和`col_wrap`自动分行,同理也可以用`row`属性设置列.

```python
sns.relplot(x="timepoint", y="signal", hue="event", style="event",
            col="subject", 
            col_wrap=5, # 设置每行显示图表数量
            height=3, # 每个图表的高度 
            kind="line",
            data=fmri.query("region == 'frontal'"));
```



![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423195006.png)



## 数据种类的可视化 Plotting with categorical data

对数据进行分类可视化用到的方法是[`catplot()`](https://seaborn.pydata.org/generated/seaborn.catplot.html#seaborn.catplot),和数据关系可视化类似,`catplot()`也有多种分类(kind),包括散点图(`strip`,`swarm`),分布图(`box`,`violin`,`boxen`)和柱状图(`point`,`bar`,`count`).

```python
sns.set(style="ticks", color_codes=True) #设置一下样式
```



### 散点图 categories scatterplots

除了种类外,散点图能精确的显示数据的分布,散点图默认显示方式是`stript,例如下面的例子,`

```python
tips = sns.load_dataset("tips") #载入数据
sns.catplot(x="day", y="total_bill", data=tips); 
```

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423195034.png)

可以发现上面有些数据重叠在一起了,解决这个问题可以使用`jitter`属性,也可使用另一种散点图`swarm`,它自动使用算法区分出可能重叠的数据.需要注意的是可以使用`order`来控制顺序.下面的例子可以看出

```python
sns.catplot(x="total_bill", y="day", hue="time", kind="swarm",  order=["Sun", "Sat","Fri","Thur"], data=tips);
```

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423195054.png)

### 分布图 Distributions of observations within categories

 数据量太大的时候,散点图显示不同种类的分布情况非常恐怖,所以可以使用分布图来观察不同种类数据的分布情况,具体代码就不贴了,只需要更改一下`kind`属性就可以了,下面分别看一下`box`,`boxen`,`violin`三种情况不同的显示风格:

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423195117.png)

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423195152.png)

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423195213.png)

其中要重点说一下`violin`方法使用了[KDE](https://en.wikipedia.org/wiki/Kernel_density_estimation),因此有一些额外的属性可以设置,具体可以查看一下[api](https://seaborn.pydata.org/generated/seaborn.violinplot.html#seaborn.violinplot)例如:

```python
sns.catplot(x="total_bill", y="day", hue="sex",bw=.4, cut=2, inner="stick",
            kind="violin", split=True, data=tips);
```

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423195310.png)







### 合并图表

另外看一下如何将两个不同类型的图表合为一个,例如下面我们将`violin`和`swarm`类型的图表在一张图里展示:

```python
g = sns.catplot(x="day", y="total_bill", kind="violin", inner=None, data=tips)
sns.swarmplot(x="day", y="total_bill", color="k", size=3, data=tips, ax=g.ax);
```



![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423195326.png)

### 数据估计

很多情况我们是不需要特别精确的数据信息的,只需要了解各个分类的走势和差异性,这个时候柱状图`bar`和点状图`point`可以展示的信息更简洁明了.

例如这里我们引入一个新的数据集titanic来分析一下泰坦尼克号上不同仓位的乘客的生存率

```python
titanic = sns.load_dataset("titanic")
```

首先下面看一下柱状图,这张图是可以直观的比较出各个仓位的生存率,需要指出的是柱状图的矩形边框也可以设置颜色.

```python
sns.catplot(x="class", 
            y="survived", hue="sex",
            palette={"male": "g", "female": "m"}, # 设置hue属性显示的颜色
            edgecolor=".6",
            kind="bar", 
            data=titanic);
```

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423200632.png)

点状图可以设置的属性也有很多,比如线的样式,点的样式等等

```python
sns.catplot(x="class", y="survived", hue="sex",
            palette={"male": "g", "female": "m"},
            markers=["^", "o"], linestyles=["-", "--"],
            kind="point", data=titanic);
```

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423200918.png)

### 图表的大小控制

设置图表的大小可以使用matplotlib里的`plt.subplots(figsize=(width,height))`

想要改变图表各个轴的精度可以使用`set`方法参照下面的实例

```python
g = sns.catplot(x="fare", y="survived", row="class",
                kind="box", orient="h", height=1.5, aspect=4,
                data=titanic.query("fare > 0"))
g.set(xscale="log"); # x轴以对数形式显示
```

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200423201349.png)



参考资料:

[seaborn tutorial](https://seaborn.pydata.org/tutorial.html)
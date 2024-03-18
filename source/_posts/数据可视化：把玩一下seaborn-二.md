---
title: 数据可视化：把玩一下seaborn(二)
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
  https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200522225020.png
top_img: false
abbrlink: 26811
date: 2020-05-22 22:21:35
---

> 著名写博客“有一无二”表演艺术家👨‍🎨,终于要出一次“二”了.
>
> 另附上收集的seaborn速查表:[seaborn cheatsheet](https://zkpeace.com/wiki/seaborn)

接上一篇文章[数据可视化：把玩一下seaborn(二)]([https://zkpeace.com/2020/04/23/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%EF%BC%9A%E6%8A%8A%E7%8E%A9%E4%B8%80%E4%B8%8Bseaborn-%E4%B8%80/#%E6%95%A3%E7%82%B9%E5%9B%BE-Scatter-plots](https://zkpeace.com/2020/04/23/数据可视化：把玩一下seaborn-一/#散点图-Scatter-plots))

重申一下引入类库和环境:

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats
sns.set(color_codes=True)
```



上回书说完了seaborn按照数据类别或者数据统计关系进行可视化的基本方法,这次主要聊一聊想要展现数据分布和线性关系时应该如何操作.

然后介绍一下数据线性关系的可视化方法



## 数据分布的可视化 Visualizing the distribution of a dataset

拿到数据集后,通常第一件事就是确定数据的分布,接下来我们看一下对于单变量(unvariable)和双变量(bivariable)分布如何进行可视化.

### 绘制单变量分布图 Ploting univariate distributions

单变量分布的常见可视化模式是[直方图(histogram)](https://en.wikipedia.org/wiki/Histogram)或者[KDA(kernel debsity estimate)](https://en.wikipedia.org/wiki/Kernel_density_estimation),在seaborn中使用的方法是`displot()`, 其中的`hist`属性控制是否显示直方图(默认开启),`kda`属性控制是否显示KDA分布(默认开启),`rug`属性控制显示刻度(默认关闭)

```python
x = np.random.normal(size=100)
sns.distplot(x,hist=True,kde=True, rug=True);
```

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200509152156.png)

直方图没什么说的,是观察数据分布常见且直观的一个方法,原理也比较简单. 这里重点说一下KDE,它本身在很多领域都是极其重要的工具. 绘制kde图还可以使用`kdeplot()`方法或者`rugplot()`方法,例如下面的例子

```python
x = np.random.normal(0, 1, size=30)
sns.kdeplot(x)
sns.kdeplot(x, shade=True, bw=.2,  label="bw: .2"); # shade属性控制是否显示分布区域阴影
sns.kdeplot(x, bw=2, label="bw: 2") 
plt.legend();
```

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200509155616.png)

从图中可以看出,`bw`属性控制的是kde曲线的拟合程度.



### 绘制双变量分布图 Ploting bivariate distributions

首先我们创建一个数据集作为例子

```python
mean, cov = [0, 1], [(1, .5), (.5, 1)]
data = np.random.multivariate_normal(mean, cov, 200)
df = pd.DataFrame(data, columns=["x", "y"])
```

绘制双变量分布图的方法是`jointplot()`,用多个面板从两个维度绘制数据分布,seaborn提供了`scatterplot(defult)`,`hexbin`,`kde`三种样式

```python
sns.jointplot(x="x", y="y", data=df);
```

![](https://seaborn.pydata.org/_images/distributions_32_0.png)

```python
x, y = np.random.multivariate_normal(mean, cov, 1000).T
with sns.axes_style("white"):
    sns.jointplot(x=x, y=y, kind="hex", color="k");
```

![](https://seaborn.pydata.org/_images/distributions_30_0.png)

```pyhton
sns.jointplot(x="x", y="y", data=df, kind="kde");
```

![](https://seaborn.pydata.org/_images/distributions_32_0.png)

其实`kdeplot()`也可以实现kde双变量分布

```python
f, ax = plt.subplots(figsize=(6, 6)) # 设置显示图形的大小
sns.kdeplot(df.x, df.y, ax=ax)	
sns.rugplot(df.x, color="g", ax=ax)
sns.rugplot(df.y, vertical=True, ax=ax);
```

![](https://seaborn.pydata.org/_images/distributions_34_0.png)

### 可视化数据集中的成对关系 Visualizing pairwise relationships in a dataset

例如调用数据集`iris`(鸢尾属植物)

```
iris = sns.load_dataset("iris")

```

然后使用`pairplot()`方法

```
sns.pairplot(iris, hue="species");
```

![](https://seaborn.pydata.org/_images/distributions_42_0.png)

解读一下这个图,根据坐标轴上的四个属性`sepal_width` `sepa_height`和`petal_length` `petal_width`的对应关系,用一个4*4 的矩阵展示了不同条件下三个物种的分布情况.



# 线性关系的可视化 Visualizing linear relationships

线性回归模型在数据可视化中可以展示数据的分布和趋势,也可以起到预测数据的作用.

我们还是使用小费`tips`数据集

```python
tips = sns.load_dataset("tips")
```

### 画线性回归模型的方法 Functions to draw linear regression models

seaborn提供了两个方法`regplot()`和`lmplot()`

```
sns.regplot(x="total_bill", y="tip", data=tips);
```

![](https://seaborn.pydata.org/_images/regression_7_0.png)

```
sns.lmplot(x="total_bill", y="tip", data=tips);
```

![](https://seaborn.pydata.org/_images/regression_8_0.png)

通过上面两个例子 ,会发现这两个方法绘制的结果区别不大,但是他们传入的数据是有区别的

`regplot()` 的`x`和`y`轴可以是简单的`numpy`数组,pandas`series`对象或者pandas`DataFrame`对象

`lmplot()`的x,y参数必须指定为字符串



### 拟合不同种类的数据 Fitting different kinds of models

```
anscombe = sns.load_dataset("anscombe")
```

以数据集[Anscombe's quartet]([https://zh.wikipedia.org/wiki/%E5%AE%89%E6%96%AF%E5%BA%93%E5%A7%86%E5%9B%9B%E9%87%8D%E5%A5%8F](https://zh.wikipedia.org/wiki/安斯库姆四重奏))(安斯库姆四重奏)为例,先通过下面的表格简单了解一下这个数据集,简单是说就是四组包含<x,y>的数据集:

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200509180836.png)、

然后plot一下四组数据(注意这里使用lmplot,所以x,y轴对应的是字符串),基本工作流程是使用数据集和用于构造网格的变量初始化[FacetGrid](https://seaborn.pydata.org/generated/seaborn.FacetGrid.html#seaborn.FacetGrid)对象。:

```python
sns.lmplot(x="x", y="y", col="dataset", col_wrap=2, data=anscombe,
           ci=None,scatter_kws={"s": 80});
```

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200520132557.png)



现在分析一下这四个数据集,第一个没啥显著特征,观察第二个数据集可以发现它存在高阶关系,可以通过`order`属性控制阶数,进行多项式回归拟合

```pyhton
sns.lmplot(x="x", y="y", data=anscombe.query("dataset == 'II'"),
           order=2, ci=None, scatter_kws={"s": 80});
```

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200520133151.png)

第三个数据集存在一个噪点outlier影响了拟合效果,可以使用`roboust`属性保持健壮性

```python
sns.lmplot(x="x", y="y", data=anscombe.query("dataset == 'III'"),
           robust=True, ci=None, scatter_kws={"s": 80});
```

![](https://img-1253324855.cos.ap-chengdu.myqcloud.com/myweb/articles/vda/20200520134105.png)



未完待续... ...
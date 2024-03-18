---
title: 快速掌握NumPy
tags:
  - python
  - numpy
  - 入门
  - 笔记
categories:
  - 技术
  - python
toc_number: false
top_img: false
cover: 'https://miro.medium.com/max/560/1*56Zr8V9k_5Wr3ctJi3wRyw.png'
copyright: false
abbrlink: 37805
date: 2019-10-24 00:40:50
---
NumPy(Numerical Python) 是 Python 语言的一个扩展程序库，支持大量的维度数组与矩阵运算，此外也针对数组运算提供大量的数学函数库。本文收集了numpy常用手册链接，速查表还有我写的入门实例代码。

## 手册和学习网站

[Numpy tutorial](https://numpy.org/devdocs/user/quickstart.html)

[中文手册](https://www.numpy.org.cn/reference/)

[菜鸟教程](https://www.runoob.com/numpy/numpy-tutorial.html)

## NumPy Cheat Sheet

![](https://i.loli.net/2020/02/05/Wmlo1OpUnfureX3.jpg)

## 实例代码

```python
import numpy as np
import time
import numpy.matlib
# import numpy.linalg
# a. create a comment

# b. create a 1*4 row vector
b = np.zeros(4)
# 	print(b, b.shape)
# c. create a 5*1 column vector
c = np.array([0, 1, 2, 3, 4]).reshape(5, 1)
# 	print(c, c.shape)
# d. create a zero matrix using a function provided by numpy
d = np.zeros((4, 4))
# 	print(d, d.shape)
# e. print the second row of an 4*3 array
e = np.arange(12).reshape(4, 3)
# 	print(e[1, :])
# f. print the third column of an 4*4 array.
f = np.arange(16).reshape(4, 4)
# 	print(f[:, 2])
# g. transpose an array.
g = np.arange(10, 25, 2).reshape(2, 4).T
# 	print(g)
# h. create two array of equal size m*m. multiply them once using conventional matrix
# multiplication and once using elementwise multiplication.
h1 = np.arange(9).reshape(3, 3)
h2 = np.arange(9, 18).reshape(3, 3)
# 	print(h1, h2)
h3 = h1*h2
# 	print(h3)
h4 = np.multiply(h1, h2)
# 	print(h4)
# i. Concate two arrays vertically, as well as horizontally
i1 = np.arange(4)
i2 = np.arange(4, 8)
i3 = np.append(i1, i2)
i4 = np.concatenate((i1, i2), axis=0)
i5 = np.vstack((i1, i2))
i6 = np.hstack((i1, i2))
# 	print(i4, i5, i6)
# j. print the size of an array
j = np.arange(10).reshape(2, 5)
# 	print(j.size)
# k. change the structure of a 8*7 array to 14*4.
k = np.arange(56).reshape(8, 7)
k1 = k.reshape(14, 4)
# 	print(k, k1)
# l. replicate a 3*1 vector to an array of size 3*1000o
l1 = np.arange(3).reshape(3, 1)
# 	print(l1)
l2 = l1.repeat(1000).reshape(3, 1000)
# 	print(l2)
# m. replace all matrix entries less than 0 by 0.
m = np.arange(-5, 5)
# 	print(m)
m1 = np.maximum(m, 0)
# 	print(m1)
# n. create a vector containing numbers from 1 to 100 with a gap of 7 between the numbers.
n = np.arange(1, 100, 7).T
# 	print(n)
# o. create a vector with 100 entries. set every second element to 0.
o = np.arange(1, 100).T
o[1::2] = 0
# 	print(o)
# p. create a vector with 100 entries. delete every second element.
p = np.arange(100).T
p1 = np.delete(p, p[1::2])
# 	print(p1)
# q. create 2 arrays a,b of size 1000*3 containing random numbers.
q1 = np.random.rand(1000, 3)
q2 = np.random.rand(1000, 3)

# r. You can interprete the rows of such a arrays as vectors of size 1 × 3.
# Compute the dot product of those vectors using loops.
# This means you have to iterate over the rows of the 1000 × 3 array and
# compute the dot product between the vectors represented by the current array row.
i = 0
r1 = np.zeros(1000).reshape(1000, 1)
r2 = np.zeros(1000).reshape(1000, 1)

start_time = time.time()
while i <= 999:
	r1[i] = np.dot(q1[i], q2[i])
	i = i+1
# print(r1)
end_time = time.time()
print(end_time-start_time)

# s. Now, try to compute the dot product without using loops.
# Compare the run times of your implementation (Hint: To measure the runtime,
# you can use the code snipped below or in ipython %timeit. Did you recognize something,
# while comparing the times (loops vs. no loops)?
start_time = time.time()
r2 = np.sum(q1*q2, axis=1).reshape(1000, 1)
# print(r2)
end_time = time.time()
print(end_time-start_time)

# t. The following scenario is given. We want to invert 1000 2 × 2 matrices.
# The 2 × 2 matrices are represented by a row (see Figure 1).
# The numbers written as subscripts represent the position of the original matrix entry of the 2 × 2 matrices.
# The superscript denotes the current array n ∈ [1 . . . 1000].
# Now, create an array with a size of 1000×4 using the command rand.
# Every row in that matrix represents a 2 × 2 matrix (compare Figure 1).
# Note, that the memory layout of the 2 × 2 matrices must not be changed.
# That means we don’t want to change the current structure of the 2 × 2 matrices represented as a row.
# Don’t change the 1 × 4 matrices to 2×2 matrices and don’t change the inv command.
# We can now use Cramer’s Rule to compute the inverse of our 1000, as row represented, 2 × 2 matrices.
# Compute the inverses of the created 2 × 2 matrices without using any loops.
T = np.matlib.rand(1000, 4)
T_inv = np.matlib.empty((1000, 4))
T_star = np.matlib.empty((1000, 4))
i = 0
while i <= 999:
	det = T[i, 0]*T[i, 3]-T[i, 1]*T[i, 2]
	T_star[i, :] = [T[i, 3], -T[i, 1], -T[i, 2], T[i, 0]]
	T_inv[i, :] = T_star[i, :] / det
	i = i+1
print('t. invert 1000 2*2 matrices :\n', T_inv)


# u. Write a function, which accepts 2 m × m matrices.
# The function should be able to compute the sum as well as the product of both matrices.
def mat_sum_and_product(a, b):
	if (a.shape[0] == a.shape[1]) and (a.shape == b.shape):
		mat_sum = a+b
		mat_product = np.dot(a, b.T)
		print(' the sum and product of mat a and b is \n {0} \n and \n {1}'.format(mat_sum, mat_product))
	else:
		print('input error')


A = np.arange(4).reshape(2, 2)
B = np.arange(4, 8).reshape(2, 2)
mat_sum_and_product(A, B)




```
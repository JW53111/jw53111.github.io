---
redirect_from: /_posts/2025-09-14-statistics2/
title: Statistics Learning 2
tags:
  - 学习材料
---

::: {#3fc09c2a .cell .markdown}
## PREQUISITES Knowledge for Statistics Learning Part2

JW: AY2025-09-14

This material will include:

    - Estimating parameters

    - Quantify the uncertainty

    - Hypothesis Test & Statistical model(linear regression model)
:::

::: {#3216aa1c .cell .markdown}
## Joint, Marginal and conditional Distribution function

# Joint Distribution

The joint distribution function describes how the probability of two or
more random variables is spread over their combined sample spaces.

For two discrete random variables $X$ and $Y$, the joint probability
mass function (pmf) is: $$
    f_{X,Y}(x, y) = P(X = x \cap Y = y)
    $$

For two continuous random variables $X$ and $Y$, the joint probability
density function (pdf) $f_{X,Y}(x, y)$ is defined such that the
probability that $(X, Y)$ lies in a region $T \subseteq \mathbb{R}^2$
is: $$
    P((X, Y) \in T) = \iint\limits_{(x,y) \in T} f_{X,Y}(x, y)  dx  dy
    $$

These definitions extend naturally to a vector of random variables
$\mathbf{X} = (X_1, \ldots, X_n)$ with joint pmf/pdf
$f_{\mathbf{X}}(\mathbf{x})$ for all
$\mathbf{x} = (x_1, \ldots, x_n) \in \mathbb{R}^n$.

# Marginal Distribution

The marginal pmf/pdf describes the distribution of a single random
variable, ignoring the others.

For random variables $X$ and $Y$ with joint pmf/pdf $f_{X,Y}(x, y)$, the
marginal distribution for $X$ is: $$
f_X(x) =
\begin{cases}
\sum\limits_{y} f_{X,Y}(x, y), & \text{for discrete } Y \\[10pt]
\int_{-\infty}^{\infty} f_{X,Y}(x, y)  dy, & \text{for continuous } Y
\end{cases}
$$

# Conditional Distribution

The conditional pmf/pdf describes the distribution of one random
variable \\textit{given} a specific value of the other.

The conditional distribution for $X$ given $Y = y$ is defined as: $$
f_{X|Y}(x|y) = \frac{f_{X,Y}(x, y)}{f_Y(y)}, \quad \text{where } f_Y(y) > 0
$$

Here we should notice two important properties:

-   independent: RV $X = (X_1,X_2,...,X_n)$ are independent if and only
    if $$
    f_X(\mathbf{x}) = f_{X_1}(x_1) \cdot f_{X_2}(x_2) \cdots f_{X_n}(x_n) = \prod_{i=1}^n f_{X_i}(x_i)
    $$ which also shows $$\text{Cor}(X,Y) = 0$$ (vice not true)
-   identically distributed: if and only if marginal pmf/pdf
    $$ f_X(t) = f_Y(t) for all t \in\mathbb{R}$$

**E.X.**

Throwing a fair coin, everytime you throw is bernoulli distributed, so
it is iid(independent and identically distributed) with $p=0.5$ Let
$Y=-X$, so in the same distribution, they are not independent. If
$Y \sim N(0,1)$, $X\sim \text{exp}(1)$, they are independent but not
identically distributed.

# Central Limited Theorem(CLT)

Let $X_1, \ldots, X_n$ be independent and identically distributed random
variables from any distribution with expectation $\mu$ and finite
variance $\sigma^2 < \infty$. Then:

$$
P\left(\frac{X_1 + \cdots + X_n - n\mu}{\sqrt{n}\sigma} \leq z\right) \to \Phi(z)
\quad \text{as } n \to \infty
$$

where $\Phi(\cdot)$ denotes the standard normal cumulative distribution
function.

For a large sample size $n$, $$
\bar{X} = \frac{1}{n}\sum_{i=1}^n X_i \overset{\text{approx}}{\sim} N\left(\mu, \frac{\sigma^2}{n}\right)
$$

总而言之，相比看到上面这一长串你也看晕了这个中心极限定理到底说明了什么，你只要知道，通过这个定理，不管是什么随机变量，只要抽出大量的样本进行研究，最后样本的平均值总是呈现的是正态分布，一般样本量$n>30$，这个定理也说明了样本的平均值近似于总样本量的平均值

样本和 $\sum X_i$ 的分布会接近一个正态分布，其均值为 $n\mu$，方差为
$n\sigma^2$。

样本均值 $\bar{X}$ 的分布会接近一个正态分布，其均值为 $\mu$，方差为
$\frac{\sigma^2}{n}$

# Law of large number(LLN 大数定律)

对于大数定律，实际上一开始我并未理解，可能在你的学习过程中你也会发现这个定律在接触时会感到困惑，但在我深入学习统计学我发现这个定律算是统计学的基石

**Weak LLN**:
$$\lim_{n \to \infty} P\left(|\bar{X}_n - \mu| > \varepsilon\right) = 0 \quad \text{for any } \varepsilon > 0$$
样本均值依概率收敛近似于期望值（总体均值）,以该类收敛指的是随着样本量n越来越大，r.v.还是有概率落在区间（c-$\epsilon$,
c+$\epsilon$）上，只不过会越来越小

**Strong LLN**:
$$P\left(\lim_{n \to \infty} \bar{X}_n = \mu\right) = 1$$(样本均值几乎必然收敛近似于期望值（总体均值），也就是我们常说的a.s.，r.v.必然落在区间上)

总结：大数定律说的是观测长期实验的规律，表示大量随机现象的结果是必然趋近于一个近似值，而这个值最后就是期望值，通过这个定律也能让我们通过样本量去推总体数据，也就是monte
carlo simulation.
:::

::: {#9726bc3b .cell .markdown}
## Estimation

**Estimator(估计量)**: Some function of the sample random variable
**T=g(X_1,\...,X_n)** used to estimate parameter $\theta$.
函数或者方法，输入输出都为RV,e.g.计算平均值的公式

**Estimate(估计值)**: a value **$\hat{\theta}$ or t=g(x_1,..,x_n)** by
applying the function to the dataset.
具体的数值，输入观测的数据值，通过估计量算出具体值

为什么需要估计量以及怎么选择估计量？

为了对比不同的样本量，我们需要考虑怎么去估计总数据的参数，而这个未知的参数就是用已知的变量代入估计量得出的估计值，这个参数可能是均值，方差，但我们只知道我们样本的数据，所以我们采用估计量
选择估计量（Estimator）我们需要考虑两个因素（Unbiasness & Consistence）

# Unbiasness 偏差

An Unibased Estimator $T_n = g(X_1, X_2, \ldots, X_n)$ of the population
parameter $\theta$ if $$E[T_n] = \theta$$ Otherwise the estimator $T_n$
is biased for $\theta$.

The estimator may be asymptotically unbiased if
$$\lim_{n \to \infty} E[T_n] = \theta$$

## Consistnence 一致性

An estimator is a consistent of $\theta$ if

1.  asmyptotically unbiased,

2.variance approxinate to 0: $\text{Var}(T_n) \to 0$ as $n \to \infty$

一致性意味着当样本量足够大时，estimate期望值趋近于真实参数值，且变化程度很小，也就说明估计量会收敛真实参数值

**Sample Mean**: $$\bar{X} = \frac{1}{n} \sum_{i=1}^{n} X_i$$ **Sample
Variance**: $$S^2 = \frac{1}{n-1} \sum_{i=1}^{n} (X_i - \bar{X})^2$$
而population mean/variance就是之前我们所学的expectation $\mu$ & variance
$\sigma^{2}$

**Properties**:

1.  The sample mean $\bar{X}$ is an unbiased and consistent estimator
    for the population mean $\mu$.
2.  The sample variance $S^{2}$ is an unbiased estimator of the
    population variance $\sigma^{2}$.

**扩展** 1/n-1是因为自由度(freedom of
degree),它指的是在计算一个统计量，其值自由变化的数据个数，也可以理解成在测量完后数据所剩独立信息个数

举个例子，对于三个数4，6，5，他的均值为5，那么添加一个值使均值不变，条件就为这个值为5，所以在样本量为4，如果已知均值情况下我们只需要知道前n-1个数就能算出最后一个值，这里假设已知均值叫做约束条件，而在这个情况下我们相当于消减一个自由度，样本只提供n-1个值

所以对于不同检验，自由度也随机变化 e.g. t-test:df=n-1,
f-test:df=n,这里variance的分母是n-1是因为这样可以给出unbiased
estimate，n则会underestimate variance.
df决定分布形状，df越大，越趋近于正太分布
:::

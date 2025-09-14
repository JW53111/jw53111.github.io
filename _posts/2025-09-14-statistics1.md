---
redirect_from: /_posts/2025-09-14-statistics1/
title: Statistics Learning 1
tags:
  - 学习材料
---

::: {#69f4b83a .cell .markdown}
## PREREQUISITES Knowledge for Statistics Learning 1

JW: AY2025-9-13

This material based on Toby Bailey and Simon Tayler teaching materials,
and this is just summary for theory and formula for Statistics, so there
is no or less examples here.
本材料基于两门我的教授编写的材料，只是汇总知识点，并不会提供或提供少量的例子，对此本人表示抱歉
:::

::: {#3e88c600 .cell .markdown}
## Sample Space

Two events are **mutually exclusive (disjoint)** if
$A \cap B = \emptyset$. e.g. Toss 4 coins, it is impossible to get \"at
least 3 heads\" and \"at least 2 tails\"

Two events $A$, $B \subseteq S$ are independent if
$$P(A \cap B) = P(A)P(B)$$
:::

::: {#2ebec6d2 .cell .markdown}
## Probability

PMF (Probability Mass Function) for a **discrete** RV $X$ is a function
$P$ on $S$ such that: $$
f_X(x) = P(X=x), \quad \text{we have} \quad 0 \leq p_j \leq 1 \quad \text{and} \quad \sum_j p_j = 1.
$$

PDF (Probability Density Function) for a **continuous** RV $X$ on a
interval $I$ is a piecewise cts function $f_X : I \to \mathbb{R}$

$$
P(a \leq X \leq b) = \int_{a}^{b} f_X(x)  dx
$$ with $$
\int_{I} f_X(x)  dx = 1
$$

CDF (Cumulative Distribution Function) is defined by $$
F_X(x) = P(y \leq X \leq x) = \int_{y}^{x} f_X(u)  du
$$

1.  **Differentiability and PDF as Derivative of CDF:**\
    Away from points where $f_X$ is not continuous, $F_X$ is
    differentiable and: $$
    F_X'(x) = f_X(x)
    $$

2.  **Monotonicity of CDF:**\
    The CDF $F_X(x)$ is non-decreasing.

3.  **Bounds for Restricted Support:**\
    If $X$ takes values only in an interval $[a, b]$, so that
    $f_X(x) = 0$ outside that range, then: $$
    F_X(x) = 0 \quad \text{for } x \leq a, \qquad F_X(x) = 1 \quad \text{for } x \geq b
    $$

**ATTENTION**: The value of PMF is just its probability, but for PDF not
because of continuty, that is why we introduce CDF to find the
probability on the interval,that is how we convert probability problem
to function problem and use function to study probability.

**注意**: PMF
因为作用于离散变量，所以概率就是它本身的值，但PDF作用于连续变量，所以我们需要积分去求他的分布函数，这样概率就等于分布函数在特定区间，我们就转换概率问题为函数问题，这样更利于研究
:::

::: {#3854352e .cell .markdown}
## Expectation, Variance, Covariance and Correlation Coefficient

**为什么期望值，方差，标准差，协方差对于统计很重要** **why we need to
learn expectation, variance, standard deviation and covariance**

任何数据库都会遵守一定的分布规律，那么他朝着某个值收敛的特征就是期望，也就是概率均值(数据的中心位置)，反应了在特定情况下平均产生的结果，帮助我们进行预测，比如利润，期望收益
虽然我们用期望确认了收敛的值，但我们会考虑样本的误差范围，对于两种不同的数据库，即使他们期望值相似，但方差反应了数据的离散程度与波动性
标准差同理，只不过单位与原始数据相同，更直观，比如在进行投资，相同收益情况下，方差/标准差更低反应了更稳定性
而对于两个并非相互独立的数据库我们就会用到协方差来推导数据变化的方向与关联性(数值越大，偏离期望值越大，但线性关联性越高)

-   两个都大于自身期望值，协方差为正值

-   两个没有明显的线性关系，协方差约为0

-   一个大于自身期望值，一个小于自身期望值，协方差为负值
    举个例子，对于多个投资组合，他们的协方差为负意味着一支的上涨导致另一只的下跌

-   **For a discrete random variable $X$ with PMF $p_X$:** $$
    \mathbb{E}[g(X)] = \sum_{x} g(x) p_X(x)
    $$

-   **For a continuous random variable $X$ with PDF $f_X$:** $$
    \mathbb{E}[g(X)] = \int_{-\infty}^{\infty} g(x) f_X(x)  dx
    $$

$\mathbb{E}[kX] = k\mathbb{E}[X]$

$\mathbb{E}\left[\sum X_n\right] = \sum \mathbb{E}[X_n] \quad \text{(even if the } X_n \text{ are not independent)}$

If $X$ and $Y$ are independent random variables, then for any functions
$f$ and $g$: $$
\mathbb{E}[f(X)g(Y)] = \mathbb{E}[f(X)] \cdot \mathbb{E}[g(Y)]
$$

### Variance Definition

$$
\text{Var}(X) = \mathbb{E}\left[(X - \mathbb{E}[X])^2\right]
$$

### Linearity of Expectation

$$
\mathbb{E}[aX + b] = a\mathbb{E}[X] + b
$$

### Variance under Linear Transformation

$$
\text{Var}(aX + b) = a^2 \text{Var}(X)
$$

### Variance Formula

$$
\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2
$$ Also commonly denoted as: $$
\text{Var}(X) = \sigma^2
$$

### Variance of Sum of Independent Random Variables

If $X$ and $Y$ are independent and their variances exist, then: $$
\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X,Y)
$$

### Chebyshev's Inequality(Interesting)

Let $X$ be a random variable with expected value $\mathbb{E}[X] = \mu$
and finite variance $\text{Var}(X)$. Then for every $a > 0$: $$
P(|X - \mu| \geq a) \leq \frac{\text{Var}(X)}{a^2}
$$

### Covariance

$$
\text{Cov}(X, Y) = \mathbb{E}(XY) - \mathbb{E}(X)\mathbb{E}(Y)
$$

#### Properties of Covariance:

-   $\text{Cov}(X, Y) = \text{Cov}(Y, X)$ (Symmetry)
-   $\text{Cov}(X, X) = \text{Var}(X)$
-   $\text{Cov}(aX + bY, Z) = a \text{Cov}(X, Z) + b \text{Cov}(Y, Z)$
    (Bilinearity)

### Correlation

$$
\text{Cor}(X, Y) = \frac{\text{Cov}(X, Y)}{\sqrt{\text{Var}(X)\text{Var}(Y)}}
$$

### Covariance Bound

$$
(\text{Cov}(X, Y))^2 \leq \text{Var}(X) \text{Var}(Y)
$$

### Correlation Bound

$$
-1 \leq \text{Cor}(X, Y) \leq 1
$$

If you want to proof all these equations, please try by yourself! It is
easy beginning from the definition.
:::

::: {#9890dd4a .cell .markdown}
# Conditional Probability & Law of Total Probability {#conditional-probability--law-of-total-probability}

The conditional probability of $A$ given $B$ is: $$
P(A \mid B) = \frac{P(A \cap B)}{P(B)} \quad \text{provided } P(B) > 0
$$

The law of total probability states: $$
P(A) = \sum_{i=1}^n P(A \mid B_i) P(B_i)
$$

(条件概率适用于已知两个情况的概率去求第三个未知概率，条件概率可以推出全概率等式)

**Proof.** We will consider just the case $n = 2$; the general case is
similar. Thus we partition the sample space into a disjoint union
$S = A \cup A^c$. Then also $B$ is partitioned as: $$
B = (B \cap A) \cup (B \cap A^c)
$$ So, $$
\begin{align*}
P(B) &= P((B \cap A) \cup (B \cap A^c)) \\
     &= P(B \cap A) + P(B \cap A^c) \quad \text{(since the sets are disjoint)} \\
     &= P(B \mid A) P(A) + P(B \mid A^c) P(A^c)
\end{align*}
$$

Small Trick: With definition of conditional Probability, can you derive
three events A,B,C which shows $$
P(A \cap B \cap C) = P(A) \cdot P(B \mid A) \cdot P(C \mid A \cap B).
$$

# Conditional Expectation & Law of total Probability for Expectations {#conditional-expectation--law-of-total-probability-for-expectations}

The conditional expectation of $X$ given $B$ is: $$
\mathbb{E}[X \mid B] = \sum_x x \cdot P(X=x \mid B)
$$

For discrete random variables $X$ and $Y$: $$
\mathbb{E}[X \mid Y=y] = \sum_x x \cdot P(X=x \mid Y=y)
$$

The law of total expectation (or tower rule) states: $$
\mathbb{E}[X] = \mathbb{E}[\mathbb{E}[X \mid Y]]
$$ or $$
\mathbb{E}[X] = \mathbb{E}[X \mid A_1] P(A_1) + \mathbb{E}[X \mid A_2] P(A_2) + \cdots + \mathbb{E}[X \mid A_n] P(A_n)
$$

The proof is similar to Law of Total Probability
:::

::: {#def24036 .cell .markdown}
## Introduction to Bayes\' Theorem

Bayes\' Theorem is the most important theorem in studying Probability in
this part, we will just introduce general formula and give some basic
examples. 贝叶斯定理是一种已知结果推原因的概率算法

We have $$
P(A | B) = \frac{P(B | A)  P(A)}{P(B)}
$$ from the conditional Probability formula, we have Bayes Theorem $$
P(A_j | B) = \frac{P(B | A_j)  P(A_j)}{\sum_{k=1}^{n} P(B | A_k)  P(A_k)}
$$

**E.X.** There are two liars: Tom and Dick, independently for everything
saying, they say truth with 1/3 and lie with 2/3. If Dick said Tom is
telling truth, what is the probability that Tom is telling the Truth?

**Sol** Let A_1 be \"Tom told Truth\", A_2 be \"Tom lied\", B be the
event that \"Dick says Tom told truth\" so we calculate $$
P(A_1 \mid B) = \frac{P(B \mid A_1) \cdot P(A_1)}{P(B \mid A_1) \cdot P(A_1) + P(B \mid A_2) \cdot P(A_2)} = \frac{\left(\frac{1}{3}\right) \cdot \left(\frac{1}{3}\right)}{\left(\frac{1}{3}\right) \cdot \left(\frac{1}{3}\right) + \left(\frac{2}{3}\right) \cdot \left(\frac{2}{3}\right)} = \frac{\frac{1}{9}}{\frac{5}{9}} = \frac{1}{5}$$
:::

::: {#8a7ecf39 .cell .markdown}
## Random Variables(RV)

# Discrete RV

1.**Bernoulli Distribution** $X \sim \text{Bern}(p)$, $$
    f_X(x) = p^x (1-p)^{1-x} \quad \text{for } x \in \{0, 1\}, \quad \mathbb{E}[X] = p, \quad \text{Var}(X) = p(1-p)
    $$ e.g. The experiment only has two outcomes: Success(1) or Fail(0)

2.**Binomial Distribution** $X \sim \text{Bin}(n, p)$, $$
    P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad \mathbb{E}[X] = n \cdot p, \quad \text{Var}(X) = n \cdot p \cdot (1-p)
    $$ We repeating Bernoulli Experiment with success k times, fail n-k
times.

3.**Geometric Distribution** $X \sim \text{Geom}(p)$, $$
    f_X(x) = p(1-p)^{x-1}, \quad \mathbb{E}[X] = \frac{1}{p}, \quad \text{Var}(X) = \frac{1-p}{p^2}
    $$ e.g. Geometric distribution means during Bernoulli experiment, we
want the probability that after x times it finally success, which means
it fails x-1 times. You roll a pair dice D6 for the total amount of 5.
Here $p$ = 4/36 = 1/9, so this distribution will be Geom(1/9).

# Continuous RV

1.**Uniform Distribution** $X \sim U(\{1, \ldots, n\})$, $$
    P(X = k) = \frac{1}{n}, \quad \mathbb{E}[X] = \frac{n+1}{2}, \quad \text{Var}(X) = \frac{n^2 - 1}{12}
    $$

2.**Exponential Distribution** $X \sim \text{Exp}(\lambda)$ (Rate
$\lambda > 0$) $$
    f_X(x) = \lambda e^{-\lambda x}, \quad \text{for } x \in [0, \infty)
    $$ $$
    \mathbb{E}[X] = \frac{1}{\lambda}, \quad \text{Var}(X) = \frac{1}{\lambda^2}
    $$ predicting probability for every 20mins customers pay in the shop
or waiting for bus every 15mins it is relevant to poission distribution,
which we will talk later

3.**Gamma Distribution** First we introduce Gamma function. The Gamma
function, $\Gamma(\alpha)$, is defined by the integral: $$
    \Gamma(\alpha) = \int_{0}^{\infty} x^{\alpha-1} e^{-x}  dx, \quad \alpha > 0
    $$ with Properties:

-   **Recurrence relation:**
    $\Gamma(\alpha) = (\alpha - 1)\Gamma(\alpha - 1)$

-   For $n \in \mathbb{N}$: $\Gamma(n) = (n - 1)!$

-   $\Gamma(1/2) = \sqrt{\pi}$

-   $\Gamma(\alpha) \to \infty$ as $\alpha \to 0^+$ or
    $\alpha \to \infty$

    so we have $X \sim \Gamma(\alpha, \beta)$ (Shape $\alpha > 0$, Rate
    $\beta > 0$) $$
      f_X(x) = \frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha-1} e^{-\beta x}, \quad \text{for } x \in [0, \infty)
      $$ $$
      \mathbb{E}[X] = \frac{\alpha}{\beta}, \quad \text{Var}(X) = \frac{\alpha}{\beta^2}
      $$

4.**Beta Distribution** First we introduce Beta function. The Beta
function, $B(\alpha, \beta)$, is defined by the integral: $$
    B(\alpha, \beta) = \int_{0}^{1} x^{\alpha-1} (1 - x)^{\beta-1}  dx, \quad \alpha, \beta > 0
    $$ with Properties:

-   **Symmetry:** $B(\alpha, \beta) = B(\beta, \alpha)$

-   **Relation to Gamma function:** $$
    B(\alpha, \beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}
    $$

    so we have $X \sim \text{Beta}(\alpha, \beta)$ (Shapes
    $\alpha, \beta > 0$) $$
      f_X(x) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha, \beta)}, \quad \text{for } x \in [0, 1]
      $$ $$
      \mathbb{E}[X] = \frac{\alpha}{\alpha + \beta}, \quad \text{Var}(X) = \frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}
      $$

# Two Important RV distributions

1.  **Poission Distribution(D)** $X \sim \text{Pois}(\lambda)$, $$
     f_X(x) = \frac{\lambda^x e^{-\lambda}}{x!} \quad \text{for } \lambda > 0,  x \in \{0, 1, 2, \ldots\}, \quad \mathbb{E}[X] = \lambda, \quad \text{Var}(X) = \lambda
     $$ Poission Distribution will be used in many fields in statistics
    e.g.Stochastic Process which will be introduced later, now I just
    list it and later it will be introduced individually.

2.  **Normal Distribution(C)** $X \sim N(\mu, \sigma^2)$ (Mean
    $\mu \in \mathbb{R}$, Variance $\sigma^2 > 0$) $$
     f_X(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right), \quad \text{for } x \in \mathbb{R}
     $$ $$
     \mathbb{E}[X] = \mu, \quad \text{Var}(X) = \sigma^2
     $$
:::

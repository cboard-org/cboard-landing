---
title: 扫描功能已免费提供给社区
date: 2018年9月14日
description: 提供用户和应用程序之间交互的新方式
categories:
  - cboard
  - 可用性
  - 无障碍
  - 应对
  - 反应可扫描
image: /images/scanning.png
author_staff_member: tinchodipalma
---

我们很自豪地说我们已经开发了一种扫描工具，该工具向社区开放并且可以免费使用。 我们将其称为 `react-scannable` ，可以从npm下载它作为软件包。

## 什么是反应可扫描的？

React-scannable提供了一个扫描器，这意味着一个React组件可以浏览其可扫描子级（按钮，div，其他组件），并允许该应用以新方式与其交互。

React-scannable是一个基于React和JavaScript的npm软件包。 开发人员可以使用此软件包将扫描仪包括在他们的React项目中。

## 反应可扫描做什么？

扫描仪激活后，它将遍历那些被标识为可扫描的元素，并让它们在聚焦于屏幕时执行操作。

![反应可扫描](/images/scanning.gif)

目的是扩展用户与应用程序之间的关系，从而允许另一种交互方式。

撰写本文时， `react-scannable` 具有两种交互方法：自动和手动。

自动方法会定期按顺序遍历可扫描元素。 一旦按下任意键（或在屏幕上单击），就会选择聚焦的可扫描元素，并且扫描程序将遍历其中的可扫描元素，或者将事件委托给该元素（如果它没有任何可扫描的子元素）。

手动方法的行为完全不同。 当用户按下空格/ tab键时，它将对可扫描元素进行迭代；如果用户按下Enter / backspace键，则将其选中。

即使您采用自动或手动方式，用户也可以通过四次按Escape来停用扫描仪。

## 纸板和反应可扫描

Cboard使用反应可扫描来实现扫描仪功能，仅用于扫描整个电路板。

使用开关与应用程序进行交互的用户可以像其他任何用户一样进行通信。

![开关](/images/switch.jpg)

这非常重要，因为它允许残障人士照常与董事会互动。

## 为什么要使用npm软件包？

react-scannable背后的想法是向社区开放，开源和免费使用。 您可以从 [Github](https://github.com/cboard-org/react-scannable) 下载源代码，也可以从 [npm Registry](https://www.npmjs.com/package/react-scannable)下载软件包。

我们希望人们参与其中，在他们的应用程序中使用react-scannable，扩展其应用程序与用户交互的方式。

我们还鼓励人们报告他们所遇到的问题（并在可能的情况下推广对它们的修复），当然，还要开发新功能（为什么没有新的策略/方法）。
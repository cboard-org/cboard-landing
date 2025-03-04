---
title: Cboard支持openboard标准
date: 2018年6月30日
description: Cboard上的Openboard简介
categories:
  - cboard
  - openboard
  - 开源
image:
author_staff_member: 吉文
---

我们在Cboard上最近发布了一项新功能，即退出功能：Openboard支持。 为了使Cboard用户拥有一个支持轻松共享和迁移的灵活平台，这将是关键。

## 什么是开放板格式？

开放式电路板格式（简称OBF）是AAC通信板的规范，它描述了代表一块板所需的数据和结构，包括网格行数到按钮，图像等。 创建它是为了使开发板可以在应用程序之间移植，并且可以在人与人之间共享。

## 为什么支持Open Board Format？

当我们了解Open Board Format时，我们不需要考虑太多，好处显而易见，每个人都赢了，用户，Cboard和AAC生态系统（希望如此）。 用户可以将其板迁移到其他应用程序，并与其他人共享板。 Cboard可以合并公开可用的第三方板，用户可以从其他应用迁移到Cboard。 如果更多的OBF兼容板将在线发布，则板将不再是决定AAC应用程序之间的关键因素，它将迫使公司将更多的精力放在提高软件质量上，而不是在内容上获得竞争优势。

## 软件变更

为了在Cboard中实现OBF导入，我们创建了一个适配器函数，该函数接受一个OBF对象并输出Cboard可以理解和呈现的对象。 该规范还定义了一种将板捆绑为.OBZ文件的方法，该文件实际上是一个或多个通过gzip压缩的.OBF文件。 为了支持gzip，我们需要添加两个新的 `npm` 软件包 `jszip` 和 `jszip-utils`。

![Cboard](/images/app/import.png)

## 对Cboard用户意味着什么？

在“ Cboard `设置/导出` 屏幕中导出板时，现在可以选择导出为“ Open Board Format”。 单击 `导出` 按钮，然后选择 `OpenBoard` 菜单项并保存文件。 导入功能未更改。

![Cboard](/images/app/export.png)

## 未来是什么样子的？

我们希望有一天将有一个主要的存储库，该存储库将提供与Open Board Format兼容的板，如果愿意的话，这是一个由专业人员创建，按人员评分类别免费提供的板的市场。
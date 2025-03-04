---
title: 开源通讯板
date: 2017年12月5日
description: Cboard的开始
categories:
  - cboard
  - 开源
? imageauthor_staff_member
: 吉文
---

**Cboard** 是用于无法使用语音进行通信的儿童和成人的通信板。 沟通板本质上是一个网格，上面带有图片或符号，用户可以指向它们来表达他们的需求和思想。 有 [不需要电力的低技术解决方案，而](https://www.youtube.com/watch?v=mnyv8h6J4rc) 可以产生语音的高科技解决方案。

[![Cboard](/images/app/water-ipad-english.png)](https://github.com/cboard-org/cboard)

Cboard是一个免费的开源AAC Web应用程序，支持文本到语音转换。 它适用于多种语言和语言障碍，例如脑瘫，智力障碍和自闭症。 它支持33种语言，并且可以在多种设备上使用。 它带有来自 [桑树符号集](https://mulberrysymbols.org/) 3400多个符号，用于创建个性化面板。

## 谁需要它？

商业解决方案可能很昂贵，或者语言支持有限，这使低收入国家的许多人无法使用它们。

> 根据世界卫生组织的数据，在许多低收入国家中，只有5％至15％的需要辅助技术的人可以获得该技术

我们的目标是使Cboard一个适合所有人的解决方案， *无处不*。 为此，我们使用网络作为平台，它使我们能够在运行现代浏览器的台式机，平板电脑和手机上提供Cboard。 没有安装过程，无需购买，只需跟随 [链接](https://app.cboard.io) ，您就可以开始了。

## 为什么要开源？

Cboard最初是一个没有预算的开源项目，它依赖（并且仍然依赖）来自世界各地的志愿者。 程序员，言语治疗师和语言翻译的贡献和反馈帮助使该项目发展到目前的状态。 它是开放源码项目的主要优点是，每个人都实际参与关心，人们在业余时间贡献并没有赔偿，有的标识与该项目的使命，一些关心的技术堆栈，但 **大家关心** ，它显示了。

## 它是如何开始的

当我意识到有些人可能无法使用这种通讯工具时，我开始研究开发免费的多语言网络替代方案的可行性。 幸运的是，在过去的几年中，Web的发展相当不错，现在提供了所有缺失的片段来完成这种适配，从 [Speech Synthesis API](https://www.smashingmagazine.com/2017/02/experimenting-with-speechsynthesis/) 到Service Workers，剩下的就是将各个片段缝合在一起。

## 在朋友的帮助下

我想找到想要加入冒险之旅的开发人员，但是我应该从哪里开始呢？ 该应用程序是在React JS中开发的，因此我加入了 [Reactiflux](https://www.reactiflux.com/)，这是一个由React JS开发人员组成的大型社区。 我在那里找到了Akshat Gupta，他加入并帮助了最初的繁重工作。 我通过电子邮件发送给开发人员，要求该项目的帮助，回复很好！ 有些人给了一些建议，有些人在推特上发了信息， [Aaron Gustafson](https://www.aaron-gustafson.com/about/) 向我介绍了 [Amberley Romo](https://www.aaron-gustafson.com/notebook/my-2017-mentees/)，他是一个加入团队的狂热开发人员。 Martin Bedouret在网上了解了该项目并提出了帮助之后，便简单地出现在我们的 [Discord服务器](https://discord.gg/TEH8uxh)。 Martin将项目与阿根廷的 [Cireha康复中心](http://www.cireha.com.ar/index.asp) 相连接，这为我们提供了咨询和产品要求。

所有这些人都和 [多](https://github.com/cboard-org/cboard/graphs/contributors) 对项目的成功有直接的影响，对我是永远心存感激。

![Cireha](/images/cireha-group-outside.jpg)

## 联合国儿童基金会FTW！

在这个阶段，我们拥有一个好的项目的所有基本要素，但是要加快开发速度，我们需要资金。 这是 [UNICEF创新基金](https://unicefinnovationfund.org/) 发挥作用的地方，经过几个月的发展，我们了解了UNICEF呼吁为开源AAC应用程序提供资金的要求，我们填写了表格并提交了Cboard。 几个月后，在一次演示中，我们被告知 [我们被选为](http://unicefstories.org/2017/12/08/unicef-announces-addition-of-six-start-up-companies-to-2018-investment-portfolio/) 资金。 这对于项目来说是巨大的！ 并将影响我们产品的开发速度和整体质量。 我们计划聘请自由职业者来帮助进行校对翻译，并聘请程序员来帮助缺乏功能。 该应用程序将继续免费提供，并继续是开源的。
---
title: Flutter 坑
date: 2019-07-21
category: kengsOfFlutter
---
<!-- more -->
# Kengs of Flutter

## 1. FutureBuilder 无限重载，导致页面无限重绘

如果future：callback(),中返回的不是同一个instance，那么futureBuilder中的didUpdataWiget 就会触发；
It’s basically saying: if, when rebuilt, the new widget has a different Future instance than the old one, then repeat everything: unsubscribe, and subscribe again.

key： 要尽量保证build 里面是pure 的。

相关issues：
[https://github.com/flutter/flutter/issues/11426](https://github.com/flutter/flutter/issues/11426)  这里可以找到答案



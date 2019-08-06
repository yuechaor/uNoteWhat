---
title: 宇智波带坑
date: 2019-07-21
category: KingOfKengs
---
<!-- more -->

# **本篇旨在收录巨坑**
所谓巨坑：浪费的时间以天为单位，天数 >=1
坑爹指数 = 天数

## 1. Flutter app崩溃退出，Lost connection to device.

操作： 来回反复切换Tabs

报错：java.lang.NullPointerException: Attempt to invoke interface method 'java.util.Iterator java.util.List.iterator()' on a null object reference

相关Widget：Listview && listview.builder

坑爹指数：3

****

java.lang.NullPointerException: Attempt to invoke interface method 'java.util.Iterator java.util.List.iterator()' on a null object reference

**Solution: ExcludeSemantics 
**

Wrapping the offending widget with ExcludeSemantics widget fixed this issue!

如果有用easy refresh 相关的插件 要放在easy refresh插件外面

github related issue：
[https://github.com/flutter/flutter/issues/30675](https://github.com/flutter/flutter/issues/30675)

具体什么是ExcludeSemantics，
移步→[https://www.jianshu.com/p/8e547f5a12ce](https://www.jianshu.com/p/8e547f5a12ce)
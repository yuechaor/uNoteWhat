---
title: Flutter
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


## 2. Provider 中 Provider.of 和 Consumer 有什么区别

不同点：listen: false
- Consumer 中目前 我还没找到有等同于 listen:false 的method。
- Provider.of(context, **listen:false**), 可以避免不必要的widget重绘，但需要搞清状况才可以用，否则容易出错。
- consumer 可以同时提供多个provider，参考Consumer2，3，4 etc.

相同点：
- 都可以提供Provider的实例， consumer 更适合wrap一些简单的需要直接取值的情形，Provider.of 更加灵活，可以直接用于逻辑判断。

相关资料与视频推荐：

github：[https://github.com/RobertBrunhage/flutter_state_management_livestreams](https://github.com/RobertBrunhage/flutter_state_management_livestreams)

Youtube: 
[https://www.youtube.com/watch?v=lH1IOgrrZ1A](https://www.youtube.com/watch?v=lH1IOgrrZ1A)


## 3. 构建当前界面原则

- pure and clean
- 不能 stateful 套 stateful， class 套 class
- 错误



## 4. VerticalDivider && Divider 怎么理解？

## 5. listView  重绘超出范围 
-   错误提示：Horizontal（vertical） viewport was given unbounded width.
- solution： 
  - wrap 一个expanded widget
  - 因为父widget 没有限制 listview 可滚动范围，长或者宽，提供height 或者 width 就好了



## 6. FutureBuilder 无限rebuild

- 错误提示： 无限rebuild 
- 原因： **这里需要注意的一点是：** StatefulWidget会长时间维护一个 State，当state有变动的时候会调用 didUpdateWidget方法，就要重新build了。

>The future must have been obtained earlier, e.g. during State.initState, State.didUpdateConfig, or State.didChangeDependencies. It must not be created during the State.build or StatelessWidget.buildmethod call when constructing the FutureBuilder. If the future is created at the same time as the FutureBuilder, then every time the FutureBuilder's parent is rebuilt, the asynchronous task will be restarted.
A general guideline is to assume that every build method could get called every frame, and to treat omitted calls as an optimization.

future builder 中的future 必须在build之前获得，例如 在state init， didUpdateConfig 或者State.didChangeDependencies.

[详细介绍文章](https://juejin.im/post/5ce73d33f265da1bc8540261)


## 7.FutureBuilder snapshot.hasData 一直为false

- 错误提示：无
- 原因： call的function 里面没有加 return 语句。
例如： getFuture(){
    return //something
}



## 8. Provider.of<xxxx>(context,listen: false).xxx 的用处

- 原因： 为了防止不必要的context rebuild，默认是true， 如果是true的话，所有涉及到这个context 的 父widget 和 子widget 都会rebuild。

## 9. stack positioned 和 listview 最后一个item 被遮挡
- 解决办法： 
  - 放弃使用stack positioned()
  - 使用bottomNavigationBar(BottomAppBar(child: custumeWideget()))


## 10. 如何引入第三方icons

flutter 引入第三方 Icon 图标（以阿里图标库为例) 百度搜索

https://segmentfault.com/a/1190000017978633?utm_source=tag-newest



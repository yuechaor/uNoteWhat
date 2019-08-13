---
title: Docker笔记
date: 2019-07-21
category: Docker
---
<!-- more -->

docker 命令
## 镜像和容器

容器是镜像的一个实例。 容器是用镜像创建的运行实例。它可以被启用，开始，停止，删除，每个容器都是相互隔离的，保证平台的安全。
我们可以把容器看成一个简易版的linux环境，包括root用户权限，进程空间，用户空间和网络空间，还有运行在其中的应用程序。

## 仓库repository

仓库是集中**存放镜像**文件的场所。

仓库和仓库注册服务器(Registry)是有区别的，仓库注册服务器上往往有多个仓库，每个仓库又还有多个镜像，每个镜像又有不同的tag。

仓库分为公开和私有

公开的 docker hub 阿里云，网易云。

## 镜像，容器，仓库 相互关系

Docker 本身是一个容器运行载体或称之为管理引擎。

我们把打包好的应用程序和环境配置依赖形成一个可交付的运行环境，这个打包好的运行环境就类似一个image镜像文件。

只有通过这个镜像文件才能生成docker容器，image文件可以看做是容器的模板，docker根据image文件生成一个容器实例或者多个实例。

image文件生成的容器实例，本身也是一个文件，称为镜像文件。

仓库可以用来存放镜像，需要的时候直接拉取。

# docker底层原理

## docker是怎么工作的

docker 是一个CS结构的系统，docker守护进程运行在宿主机上（在执行service docker start或者systemctl start docker之后），然后通过socket连接从客户端访问，守护进程从客户端接收命令并管理主机上的容器，比如接收run命令etc 来运行容器等。


## 为什么docker 比 vm 快

1. docker比虚拟机有更少的抽象层，不需要hypervisor来实现硬件资源虚拟化，运行在docker中的容器实例直接使用的是实际物理机的硬件资源。因此在cpu、内存利用率上 docker在效率上更有优势。
2. docker利用的是宿主机的内核，而不需要Guest OS。因此，当新建一个容器时，docker不需要和虚拟机一样重新加载一个操作系统内核。进而避免引寻、加载操作系统内核这个比较费时费资源的过程，当新建一个虚拟机时，虚拟机软件需要加载Guest OS，这个新建过程是分钟级别的，而docker由于直接利用宿主机的操作系统，则省略了这个过程，只需要几秒钟的时间。

## docker 安装以及阿里云镜像加速配置

    - 根据官网，根据不同系统版本来安装
    - 加速配置可参考阿里云或以下视频

    视频12：00处 [https://www.bilibili.com/video/av59639711/?p=9]

# 一般命令

## 帮助命令
    - docker version
    - docker info
    - docker --help 

## 镜像命令
-docker images 列出所有镜像
    - a 列出全部镜像 **含中间镜像层**
    - q 只显示全部镜像的id
    - qa 两者结合 返回ID
    - --digests 显示摘要信息
    - --no-trunc 显示完整的id 没有截取显示
- docker search xxxx
    - -s 30 根据星数超过30来筛选
    - --no-trunc 显示完整的description
    -  --automated 只列出自动构建类型的镜像
    - 三个可以结合使用
- docker pull xxx
    - docker pull xxx : 自定义tag名字
    - 如果不带tag制定特定版本，默认就是latest的版本
- docker rmi xxxx ：TAG
    - 如果没有标识tag版本，默认删除最新的latest
    - -f 镜像名 
    - -f 删除多个 镜像1：TAG 镜像2：TAG 镜像名中间加空格
    - 删除全部 docker rmi -f $(docker images -qa)

## 容器命令
  - 新建一个容器实例并启动该容器
    - docker run [options] **IMAGE**[COMMAND][ARG...]
    - options说明
      - 有些是一个减号，有些是两个减号
    - --name="容器新名字":为容器指定一个名称
    - -d：后台运行容器，并返回容器id，即启动守护式容器；
    -  -i: 以交互模式运行容器，通常与-t一起使用;
    -  -t: 为容器重新分配一个伪输入终端，通常与-i一起使用; 例如： docker run -it IMAGEid
    -  -P： 随机端口映射;
    -  -p：指定端口映射，有以下四种格式
       -  ip:hostPort:containerPort
       -  ip::containerPort
       -  hostPort:containerPort
       -  containerPort

   - 列出当前所有**正在运行**的容器
     - docker ps 
       - options说明
         - -a: 列出当前所有正在运行的容器+历史上运行过的
         - -l:显示最近创建的容器 last
         - -n: 显示最近n个创建的容器 例如 docker ps -n 3 列出上三次运行过的容器
         - -q: 静默模式，只显示容器ID quiet。例如 docker ps -lq 
         - --no-trunc: 不截断输出

   - 退出容器
     - 两种方式
       - exit 容器停止退出
       - ctrl+p+q 容器不停止退出
  
   - 启动容器
     - docker start 容器ID或者容器名

   - 重启容器
     - docker restart 容器ID或者容器名

   - 缓慢停止容器
     - docker stop 容器ID或者容器名 

   - 强制停止容器
     - docker kill 容器ID或者容器名 
  
   - 删除已停止的容器
     - 删除在缓存中已停止的容器
     - docker rm 容器ID或者容器名
       - 可加 -f
     - 一次性删除多个容器
       - docker rm -f $(docker ps -aq)
       - docker ps -aq | xargs docker rm
         - xargs 会提取 | 前面的命令的结果 作为参数


**重点**
1. 启动守护式容器
    - docker run -d 容器名
      - docker ps 并不会显示这个daemon容器，显示容器已经退出了
      - 原因：这是docker的机制，很重要的说明的一点，docker容器后台运行，就必须有一个前台进程来持续调用这个容器，容器运行的命令**如果不是那些一直挂起的命令**，比如运行top，tail，就是会自动退出的。
      - 这个是docker的机制问题，比如你的web容器，我们以nginx为例，正常情况下，我们配置启动服务只需要启动响应的service即可。例如service nginx start，
      - 但是这样做，nginx为后台进程模式运行，就导致docker前台没有运行的应用，这样容器后台启动后，会立即自杀因为它觉得它没事可做了。
      - 所以，最佳的解决方案是，将你要运行的程序以前台进程的形式运行。
      - 使用命令是程序在后台保持运行
      - 
     ```
     docker run -d centos /bin/sh -c "while true; do echo hello world!; sleep 2; done"
     ```
2. 查看容器日志
    - docker logs -f -t -tail 容器ID
      - -t 加入时间戳
      - -f 跟随最新的日志打印
      - -tail 3 加数字 显示最后多少条
3. 查看容器运行的进程
      - docker top 容器ID
4. 查看容器内部的细节
      - docker inspect 容器ID
        - 返回当前容器的结构细节
        - 以json的形式
5. 再次进入正在运行的容器并以命令行交互
   - attach 和 exec 区别：
      - docker exec -it **ID** 再加执行命令
        - 可以不进入容器，但在容器中打开终端并执行命令和启动进程。
        - 例如：docker exec -it xxxx ls -l /tmp 
          - 结果是直接列出tmp文件夹信息，**但是并不进入容器**
          - docker exec -it xxxx /bin/bash
            - 结果跟 docker attach xxx 效果一样
      - docker attach **ID**
        - 直接进去容器并启动命令终端，不涉及执行新的命令和进程。
6. 从容器内拷贝文件到主机上
    - 从集装箱容器内里面拷贝数据到宿主机
    - docker cp ID:要拷贝的路径 目的宿主机路径
    - docker cp ID:/tmp/yum.log /root
---
## docker 镜像
1. 是什么：
   - 镜像是一种轻量级、可执行的独立软件包，用来**打包软件运行环境和基于运行环境开发的软件**，它包含运行某个软件所需的所有内容，包括代码、运行时、库、环境变量和配置文件。
   - UnionFS 联合文件系统
     - 是一种分层的、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下，**它是docker镜像的基础** 镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。
       - 特性：
         - 一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录。
   - Docker 镜像加载原理
     - docker的镜像实际上是由一层层的文件系统组成，这种层级的文件系统就是UnionFS
     - bootfs boot file system 主要包含bootloader和kernel。
       - bootloader的作用是引导加载kernel，linux刚启动时会加载bootfs文件系统，在docker镜像的最底层bootfs。这一层与我们典型的linux\unix系统是一样的，包含boot加载器和内核。 当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs。
       - rootfs root file system， 在bootfs之上，包含的就是典型linux系统中的/dev,/proc,/bin,/etc等标准目录和文件。rootfs就是各种不同的操作系统发行版，比如Ubuntu，centos等。
       - 为什么docker里面的linux镜像很小？
       - 因为对于一个精简的OS,rootfs可以很小，只需要包括最基本的命令、工具和程序库就可以了。因为底层直接用host的kernel，自己只需要提供rootfs就可以了。 而对于bootfs，不同linux发行版可以公用bootfs，只有rootfs会有差别。
   - 分层的镜像
     - 每个镜像都是分层的，在pull的过程中可以看到是一层层的在下载。
   - 为什么docker镜像要采用这种分层结构呢
     - 最大的好处就是--可以共用资源，节省资源
     - 比如，很多镜像都是从相同的base镜像构建而来的，那么host只需要在磁盘上保存一份base镜像，同时内存中也只需要加载一份base镜像，就可以为所有容器服务了，而且镜像的每一层都可以被共享。
2. 特点
  - Docker镜像都是只读的
  - 当容器启动时，一个新的可写层被加载到镜像的顶部
  - 这一层通常被称作为 **容器层**，容器层之下的都叫 **镜像层**
3. docker 镜像commit操作补充
   - docker commit 提交容器副本使之成为一个镜像，我们在自定义配置容器之后，为方便使用可以做成镜像，以备下次使用。
   - docker commit -m="描述信息" -a="author" 容器ID 新建目标镜像名称：[Tags]标签名
   - 

4. docker镜像commit操作补充





## list all downloaded images 

docker image ls

## list all containers you have or had

docker container ls --all

# Recap and Cheat sheet

## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker images
docker image ls

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all
docker container ls -aq


## 启动交互式的容器，进而可以查看容器的文件及环境配置等。

docker run -i -t IMAGE /bin/bash

    -i interactive 默认是false
    - t tty 开启tty的终端 默认是false

## 停用一个交互式容器

$exit
 
## 如何查看容器
docker ps -[a] -[l]

docker ps 查看运行中的容器。

-a 查看所有容器


docker inspect 容器名字

## 更改容器名字

docker run --name=自定义名字 -i -t IMAGE /bin/bash 

## 重新启动停止的容器

docker start [-i] 容器名字

-i 表示可以以交互的方式启动。

## 删除停止的容器

docker rm 容器名字



# 守护式容器 daemon

-能够长期运行
-没有交互式会话
-适合运行应用程序和服务

## 如何以守护形式运行容器
$docker run -i -t IMAGE /bin/bash
然后按Ctrl+P Ctrl+Q
使容器在后台运行

## 如何再次进去后台运行中的容器

$docker attach ID/NAME

## 如何直接启动守护式容器 daemon

$docker run -d 镜像名

## 查看容器日志

$docker logs [-f] [-t] [-tail]
-f followed = true;
-t timestamp = true;
-tail = 'all';

## 查看容器的进程

$docker top 容器名字

## 如何在运行的容器中启动新的进程

$docker exec [-d][-i][-t] 容器名字 [COMMAND][ARG]

例如在容器中重新开启一个bash
docker exec -i -t container1 /bin/bash

## 停止运行中的守护式容器

docker stop

docker kill

区别在于：kill 直接快速停止容器， stop还会发送一个信号，等待容器停止。
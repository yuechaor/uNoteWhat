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
  - 





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
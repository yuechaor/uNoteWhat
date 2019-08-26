---
title: Docker高级笔记
date: 2019-08-15
category: DockerAdvance
---
<!-- more -->

## Docker Compose

1. 是什么
   * 是一个为了定义和管理多容器的工具，一种容器编排工具，正如名字compose的含义一样，编曲的意思。
   * 前身是Pig，使用python语言编写。
   * 我们可以是用Compose配置文件，来描述多个容器应用的架构，比如这些容器使用什么镜像、数据卷、网络、映射端口等，**然后使用一条命令管理所有服务**，比如启动、停止、重启等。 
2. Linux 安装Compose
   * > pip install docker-compose [clickhere]<https://www.ilanni.com/?p=13371>
   * 
   * > 官网 <>
   * > sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   * > sudo chmod +x /usr/local/bin/docker-compose

3. YAML 文件格式注意事项
    YAML 是一种标记语言很直观的数据序列化格式，可读性高。类似于XML数据描述语言。
 * yaml的数据结构通过缩进来表示，连续的项目通过减号来表示，键值对用冒号分隔，数组用中括号括起来，hash用花括号括起来。
   * YAML 文件格式注意事项：
    1. 不支持制表符tab键缩进，需要使用空格缩进
    2. 通常开头缩进2个空格
    3. 字符号缩进1个空格，如冒号、逗号、横杆后面 
    4. 用#注释
    5. **如果包含特殊字符用**用单引号引起来
    6. Boolean值(true,false,yese,no,on,off)必须用引号括起来，这样分析器会将题目解释为字符串。 

### 案例-1 一键部署LNMP网站平台
1. 创建一个project directory
   
    ```shell
    ~# mkdir compose_lnmp
    ```
2.  创建nginx文件夹和与之配套的Dockerfile文件
    ```shell
    # mkdir nginx
    # cd nginx
    # vi Dockerfile
    ```
    ```

    ```
1.  
2.    




   ### 案例-2 一键部署Nginx反向代理Tomcat集群
   ### 案例-3 一键部署多节点爬虫程序 


## 企业级镜像仓库harbor的使用

### harbor的简介

### harbor的使用方法


##docker图形化界面管理相关软件

##构建docker容器监控系统

##prometheus


---
title: Git Notes
date: 2020-02-10
category: Git
---
<!-- more -->

# configuration

## adding accounts

git config [--local | --global | --system] user.name 'Your name'

git config [--local | --global | --system] user.email 'Your email'

## check configuration

git config --list [--local | --global | --system]

## unset 

git config --unset [--local | --global | --system] user.name





## git add -u, git add ., git add -A

1. -U 可以把文件的修改和删除添加到暂存区，而*新建的文件*不会被添加到暂存区
2. . 和 -A 效果一样


## git reset --hard

清除暂存区

## git mv readme readme.md 

rename file name 重命名文件并推入暂存区。


## git log

• git log --all 查看所有分支的历史

• git log --all --graph 查看图形化的 log 地址

• git log --oneline 查看单行的简洁历史。

• git log --oneline -n4 查看最近的四条简洁历史。

• git log --oneline --all -n4 --graph 查看所有分支最近 4 条单行的图形化历史。

• git help --web log 跳转到git log 的帮助文档网页


什么时候用-- 什么时候用-呢，我看到有些参数加了两个-，-n4又是只加了一个,发现似乎是**单字母**的参数是 '-'，**非单字母**的参数是'--'。

# 探秘.git目录

## cat命令主要用来查看文件内容，创建文件，文件合并，追加文件内容等功能。
cat HEAD 查看HEAD文件的内容

git cat-file 命令 显示版本库对象的内容、类型及大小信息。

git cat-file -t b44dd71d62a5a8ed3 显示版本库对象的类型

git cat-file -s b44dd71d62a5a8ed3 显示版本库对象的大小

git cat-file -p b44dd71d62a5a8ed3 显示版本库对象的内容


## Other files

HEAD：指向当前的工作路径

config：存放本地仓库（local）相关的配置信息。

refs/heads:存放分支

refs/tags:存放tag，又叫里程牌 （当这次commit是具有里程碑意义的 比如项目1.0的时候 就可以打tag）

objects：存放对象 .git/objects/ 文件夹中的子文件夹都是以哈希值的前两位字符命名 每个object由40位字符组成，前两位字符用来当文件夹，后38位做文件。



# commit tree blob 

commit: snapshot  当前所有文件的快照

tree： 文件夹，包含一个或多个blob

blob： 文件

# detached HEAD 分离头指针情况

git checkout b44dd71d62a5a8ed3

变更没有基于一个branch，有可能丢失变更。

分离头指针的坏处：当你在这种情况下工作时，如果切换到master，git有可能清除你在分离头指针情况下的所有commit，所有比较危险。必须跟一个branch结合才不会丢失。

好处：提供了比较灵活的测试方法，当你需要做一些测试但不保存时，可以checkout一个分支出来做测试，个人感觉不常用。


# git checkout -b NewBranchName BasedBranchOrCommit

创建新分支可以基于哪个commit或者分支

# git diff 

git diff 52ba362 00b7895

比较两个commits 的不同。

### HEAD的使用，以及PARENT符号^和~。我觉得这里几个地方没讲清楚

1. 一个节点，可以包含多个子节点（checkout 出多个分支）
2. 一个节点可以有多个父节点（多个分支合并）
3. ^是~都是父节点，区别是跟随数字时候，^2 是第二个父节点，而~2是父节点的父节点
4. ^和~可以组合使用,例如 HEAD~2^2


# How to delete branch 


### git checkout -d branchName

如果报错，可以用-D强制删除。


# 对最近一次提交的message进行修改

git commit --amend

# 对老旧的commit修改message进行修改

git rebase -i [需要变更的父节点的哈希值]

reword: 改pick 为reword，然后更改对应的message

note： 这些更改是基于local directory的， 不是远程协作，远程协作用rebase要谨慎。

# 如何将连续多个commit合并成一个？

1. git rebase -i [需要合并的所有commit的父节点的哈希值]
2. squash： 把pick 改成 squash， 但需要保留一个pick
3. 为合并后的commit添加一个新的message，同时保留了其他的message。


# 如何将不连续的多个commit合并成一个？

1. git rebase -i [需要合并的commit的哈希值]
2. 添加pick [需要合并的commit的哈希值]
3. 把需要合并的commit 放在这个pick的后面，并使用squash，表示和前一个commit融合。
4. 为合并后的commit 添加新的message，同时可以选择保留原来的message.

# 如何比较暂存区和HEAD branch所含文件的差别

git diff --cached


# 如何比较工作区和暂存区所含文件的差别

git diff

默认情况下比较的是工作区和暂存区的文件差别

git diff -- fileName

只查看一个文件的变更内容。


# 如何让暂存区恢复成跟HEAD一样？

有时候有更好的方案，需要恢复到HEAD指向的文件快照的样子，所有需要放弃所有暂存区的内容。

> git reset HEAD 

恢复部分文件可以采用

> git reset HEAD -- fileName

# 如何让工作区恢复成跟暂存区一样？

有时候需要把文件快照从暂存区拷贝到工作区，可以用以下命令：

> git checkout -- fileName [或文件路径]

# 怎样取消暂存区部分文件的更改？

多个文件以及add到了暂存区，需要撤销其中一个文件，可以用以下命令：

> git reset HEAD -- fileName1 fileName2 



# 如何消除最近的几次的commit提交

想消除最近的两次commit，彻底不想要了，让暂存区和工作区都恢复到一个以前特定commit点，可以用：

> git reset --hard CommitID


# 如何比较两个提交的指定文件的不同？

如何看两个不同分支或者commit之间的不同，可以用：

比较temp和master**两个分支**的所有差异
>  git diff temp master
> 
比较temp和master两个分支的**指定文件**差异

>  git diff temp master -- FileName

以上命令也可以使用commit的ID，代替分支名


# 如何正确删除文件

> git rm fileName


# 工作中遇到紧急加塞的情况，怎么办？

正在工作区做修改，突然遇到新的情况，如之前的commit中有bug需要修改，手头工作可以先放到stash中：

> git stash 

然后可以做紧急任务的修改工作，完事提交commit之后，可以再把stash中的提取出来，

> git stash apply (保留内容)

> git stash pop  (pop之后stash中内容会删除)



# 如何指定不需要git管理的文件

需要编辑.gitignore文件
github官网上有针对不同编程语言所需要的.gitignore的编写。



# 如何将git仓库备份到本地

新建一个backup的文件夹，然后在文件夹路径下，使用命令：

## 哑协议 

 > git clone --bare /Users/RYC/Desktop/vuepressBlog/my-blog/.git ya.git

--bare: 不带工作区的裸仓库

## 智能协议

> git clone --bare file:///Users/RYC/Desktop/vuepressBlog/my-blog/.git zhineng.git



# github 

## 配置公私钥

首先查看是否有公私钥
> cd ~/.ssh
> ls -al
如果有的话是可以看到的。

如果没有，需要生成新的公私钥,使用下面link：

[Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)


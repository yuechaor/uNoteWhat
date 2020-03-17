(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{206:function(a,e,t){"use strict";t.r(e);var s=t(1),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[a._v("#")]),a._v(" Docker Compose")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("是什么")]),a._v(" "),t("ul",[t("li",[a._v("是一个为了定义和管理多容器的工具，一种容器编排工具，正如名字compose的含义一样，编曲的意思。")]),a._v(" "),t("li",[a._v("前身是Pig，使用python语言编写。")]),a._v(" "),t("li",[a._v("我们可以是用Compose配置文件，来描述多个容器应用的架构，比如这些容器使用什么镜像、数据卷、网络、映射端口等，"),t("strong",[a._v("然后使用一条命令管理所有服务")]),a._v("，比如启动、停止、重启等。")])])]),a._v(" "),t("li",[t("p",[a._v("Linux 安装Compose")]),a._v(" "),t("ul",[t("li",[t("blockquote",[t("p",[a._v("pip install docker-compose [clickhere]"),t("a",{attrs:{href:"https://www.ilanni.com/?p=13371",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.ilanni.com/?p=13371"),t("OutboundLink")],1)])])]),a._v(" "),t("li"),a._v(" "),t("li",[t("blockquote",[t("p",[a._v("官网 <>")])])]),a._v(" "),t("li",[t("blockquote",[t("p",[a._v('sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose')])])]),a._v(" "),t("li",[t("blockquote",[t("p",[a._v("sudo chmod +x /usr/local/bin/docker-compose")])])])])]),a._v(" "),t("li",[t("p",[a._v("YAML 文件格式注意事项\nYAML 是一种标记语言很直观的数据序列化格式，可读性高。类似于XML数据描述语言。")])])]),a._v(" "),t("ul",[t("li",[a._v("yaml的数据结构通过缩进来表示，连续的项目通过减号来表示，键值对用冒号分隔，数组用中括号括起来，hash用花括号括起来。\n"),t("ul",[t("li",[a._v("YAML 文件格式注意事项：")])]),a._v(" "),t("ol",[t("li",[a._v("不支持制表符tab键缩进，需要使用空格缩进")]),a._v(" "),t("li",[a._v("通常开头缩进2个空格")]),a._v(" "),t("li",[a._v("字符号缩进1个空格，如冒号、逗号、横杆后面")]),a._v(" "),t("li",[a._v("用#注释")]),a._v(" "),t("li",[t("strong",[a._v("如果包含特殊字符用")]),a._v("用单引号引起来")]),a._v(" "),t("li",[a._v("Boolean值(true,false,yese,no,on,off)必须用引号括起来，这样分析器会将题目解释为字符串。")])])])]),a._v(" "),t("h3",{attrs:{id:"案例-1-一键部署lnmp网站平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例-1-一键部署lnmp网站平台"}},[a._v("#")]),a._v(" 案例-1 一键部署LNMP网站平台")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("创建一个project directory")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("~"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mkdir compose_lnmp")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("创建nginx文件夹和与之配套的Dockerfile文件")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mkdir nginx")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cd nginx")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vi Dockerfile")]),a._v("\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\n")])])])]),a._v(" "),t("li"),a._v(" "),t("li")]),a._v(" "),t("h3",{attrs:{id:"案例-2-一键部署nginx反向代理tomcat集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例-2-一键部署nginx反向代理tomcat集群"}},[a._v("#")]),a._v(" 案例-2 一键部署Nginx反向代理Tomcat集群")]),a._v(" "),t("h3",{attrs:{id:"案例-3-一键部署多节点爬虫程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例-3-一键部署多节点爬虫程序"}},[a._v("#")]),a._v(" 案例-3 一键部署多节点爬虫程序")]),a._v(" "),t("h2",{attrs:{id:"企业级镜像仓库harbor的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#企业级镜像仓库harbor的使用"}},[a._v("#")]),a._v(" 企业级镜像仓库harbor的使用")]),a._v(" "),t("h3",{attrs:{id:"harbor的简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#harbor的简介"}},[a._v("#")]),a._v(" harbor的简介")]),a._v(" "),t("h3",{attrs:{id:"harbor的使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#harbor的使用方法"}},[a._v("#")]),a._v(" harbor的使用方法")]),a._v(" "),t("p",[a._v("##docker图形化界面管理相关软件")]),a._v(" "),t("p",[a._v("##构建docker容器监控系统")]),a._v(" "),t("p",[a._v("##prometheus")])])}),[],!1,null,null,null);e.default=r.exports}}]);
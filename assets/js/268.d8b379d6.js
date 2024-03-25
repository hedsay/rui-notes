(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{592:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"为什么用分布式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么用分布式"}},[s._v("#")]),s._v(" 为什么用分布式？")]),s._v(" "),t("blockquote",[t("p",[s._v("分布式是将整个系统拆分成不同的服务，然后将这些服务放在不同的服务器上减轻单体服务的压力，提高并发量；")]),s._v(" "),t("p",[s._v("拆分之后的每个服务可以部署再不同的机器上，如果某一个服务的访问量比较大的话可以将这个服务同时部署在多台机器上；")])]),s._v(" "),t("h2",{attrs:{id:"dubbo架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dubbo架构"}},[s._v("#")]),s._v(" Dubbo架构")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://aurora-nr.oss-cn-beijing.aliyuncs.com/20240306202418.png",alt:""}})]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("Provider")]),s._v("：暴露服务的服务提供方，会向注册中心注册自己提供的服务；")]),s._v(" "),t("li",[t("strong",[s._v("Container")]),s._v("：服务运行容器，负责加载、运行服务提供者；")]),s._v(" "),t("li",[t("strong",[s._v("Consumer")]),s._v("：调用远程服务的服务消费方，会向注册中心订阅自己所需的服务；")]),s._v(" "),t("li",[t("strong",[s._v("Registry")]),s._v("：服务注册与发现的注册中心。注册中心会返回服务提供者地址列表给消费者；")]),s._v(" "),t("li",[t("strong",[s._v("Monitor：")]),s._v(" 统计服务的调用次数和调用时间的监控中心。服务消费者和提供者会定时发送统计数据到监控中心；")])]),s._v(" "),t("h2",{attrs:{id:"invoker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invoker"}},[s._v("#")]),s._v(" Invoker")]),s._v(" "),t("blockquote",[t("p",[s._v("对远程调用的抽象；")]),s._v(" "),t("p",[s._v("实现了真正的远程服务调用；")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://aurora-nr.oss-cn-beijing.aliyuncs.com/20240306202728.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("服务提供 "),t("code",[s._v("Invoker")])]),s._v(" "),t("li",[s._v("服务消费 "),t("code",[s._v("Invoker")])])]),s._v(" "),t("h2",{attrs:{id:"dubbo工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dubbo工作原理"}},[s._v("#")]),s._v(" Dubbo工作原理")]),s._v(" "),t("blockquote",[t("p",[s._v("十层架构：")]),s._v(" "),t("p",[s._v("左边淡蓝背景的为服务消费方使用的接口，右边淡绿色背景的为服务提供方使用的接口，位于中轴线上的为双方都用到的接口；")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://aurora-nr.oss-cn-beijing.aliyuncs.com/20240306205939.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("config 配置层")]),s._v("：Dubbo 相关的配置。支持代码配置，同时也支持基于 Spring 来做配置，以 "),t("code",[s._v("ServiceConfig")]),s._v(", "),t("code",[s._v("ReferenceConfig")]),s._v(" 为中心")]),s._v(" "),t("p",[t("strong",[s._v("proxy 服务代理层")]),s._v("：调用远程方法像调用本地的方法一样简单的一个关键，真实调用过程依赖代理类，以 "),t("code",[s._v("ServiceProxy")]),s._v(" 为中心。")]),s._v(" "),t("p",[t("strong",[s._v("registry 注册中心层")]),s._v("：封装服务地址的注册与发现。")]),s._v(" "),t("p",[t("strong",[s._v("cluster 路由层")]),s._v("：封装多个提供者的路由及负载均衡，并桥接注册中心，以 "),t("code",[s._v("Invoker")]),s._v(" 为中心。")]),s._v(" "),t("p",[t("strong",[s._v("monitor 监控层")]),s._v("：RPC 调用次数和调用时间监控，以 "),t("code",[s._v("Statistics")]),s._v(" 为中心。")]),s._v(" "),t("p",[t("strong",[s._v("protocol 远程调用层")]),s._v("：封装 RPC 调用，以 "),t("code",[s._v("Invocation")]),s._v(", "),t("code",[s._v("Result")]),s._v(" 为中心。")]),s._v(" "),t("p",[t("strong",[s._v("exchange 信息交换层")]),s._v("：封装请求响应模式，同步转异步，以 "),t("code",[s._v("Request")]),s._v(", "),t("code",[s._v("Response")]),s._v(" 为中心。")]),s._v(" "),t("p",[t("strong",[s._v("transport 网络传输层")]),s._v("：抽象 mina 和 netty 为统一接口，以 "),t("code",[s._v("Message")]),s._v(" 为中心。")]),s._v(" "),t("p",[t("strong",[s._v("serialize 数据序列化层")]),s._v("：对需要在网络传输的数据进行序列化。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("著作权归JavaGuide(javaguide.cn)所有 基于MIT协议 原文链接：https://javaguide.cn/distributed-system/rpc/dubbo.html")])]),s._v(" "),t("h2",{attrs:{id:"servicebean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#servicebean"}},[s._v("#")]),s._v(" ServiceBean")]),s._v(" "),t("blockquote",[t("p",[s._v("每个暴露出去的服务都会生成一个ServiceBean；")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceBean")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceConfig")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InitializingBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DisposableBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ApplicationContextAware")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ApplicationListener")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ContextRefreshedEvent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeanNameAware")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码省略")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("ServiceConfig：用于服务暴露，SPI机制；")]),s._v(" "),t("li",[s._v("InitializingBean：用到了afterPropertiesSet方法，在对象实例化完毕后，调用该方法，做一些值的初始化；")]),s._v(" "),t("li",[s._v("DisposableBean：主要用到destroy() 方法， 在spring容器showdown的时候调用；")]),s._v(" "),t("li",[s._v("ApplicationContextAware：为了得到applicationContext；")]),s._v(" "),t("li",[s._v("ApplicationListener：添加了上下文刷新监听，用于暴露服务使用；")]),s._v(" "),t("li",[s._v("BeanNameAware：用于设置Bean的名称；")])]),s._v(" "),t("h2",{attrs:{id:"服务暴露"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务暴露"}},[s._v("#")]),s._v(" 服务暴露")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onApplicationEvent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ContextRefreshedEvent")]),s._v(" event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务没有延迟加载 && 服务没有发布 && 服务没有下线过    。 满足这三个条件，则进行服务暴露")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isDelay")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isExported")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isUnexported")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isInfoEnabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                logger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The service ready on spring started. service: "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInterface")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务暴露")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("export")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("blockquote",[t("p",[s._v("在服务没有延迟加载的时候，会调用export方法进行服务暴露， 该方法是其父类的方法，ServiceConfig中的方法；")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6899265734971490312",target:"_blank",rel:"noopener noreferrer"}},[s._v("dubbo系列之服务发布（十） - 掘金 (juejin.cn)"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);
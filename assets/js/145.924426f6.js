(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{469:function(v,_,t){"use strict";t.r(_);var p=t(4),a=Object(p.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"拥塞控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制"}},[v._v("#")]),v._v(" 拥塞控制")]),v._v(" "),_("blockquote",[_("p",[v._v("避免发送数据填满整个网络；")]),v._v(" "),_("p",[v._v("计算机网络都处在一个共享的环境。因此也有可能会因为其他主机之间的通信使得网络拥堵。")])]),v._v(" "),_("p",[v._v("解决方法：")]),v._v(" "),_("blockquote",[_("ol",[_("li",[_("p",[v._v("慢启动")]),v._v(" "),_("p",[v._v("每收到一个ack，拥塞窗口+1")]),v._v(" "),_("p",[v._v("第一次收到ack，窗口+1，可以发送2个；")]),v._v(" "),_("p",[v._v("下一轮收到2个ack，窗口+2，可以发送4个；")]),v._v(" "),_("p",[v._v("....")])]),v._v(" "),_("li",[_("p",[v._v("拥塞避免")]),v._v(" "),_("p",[v._v("当窗口大小超过慢启动门限，指数增长变为线性增长；")])]),v._v(" "),_("li",[_("p",[v._v("拥塞发生")]),v._v(" "),_("p",[v._v("当发生超时重传：将慢启动门限设置为当前窗口的1/2，再将窗口设置为初始值；")]),v._v(" "),_("p",[v._v("发生快速重传：将窗口设置为1/2，慢启动门限设置为当前窗口大小，开始快速恢复算法；")])]),v._v(" "),_("li",[_("p",[v._v("快速恢复")]),v._v(" "),_("p",[v._v("如果收到相同ack，将窗口+1；")]),v._v(" "),_("p",[v._v("如果收到新的ack，窗口设置为慢启动门限+3；")]),v._v(" "),_("p",[v._v("接下来线性增长；")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);
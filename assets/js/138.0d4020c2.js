(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{462:function(e,t,s){"use strict";s.r(t);var a=s(4),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"什么是websocket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是websocket"}},[e._v("#")]),e._v(" 什么是WebSocket?")]),e._v(" "),t("blockquote",[t("p",[e._v("全双工：双方都可以主动向对方发送数据；（TCP）")]),e._v(" "),t("p",[e._v("半双工：客户端和服务端只能有一方主动发数据；（HTTP/1.1）")])]),e._v(" "),t("blockquote",[t("p",[e._v("WebSocket用于客户端和服务端都要互相主动发大量数据的场景，基于TCP的新协议WebSocket就被设计出来；")])]),e._v(" "),t("h2",{attrs:{id:"如何建立websocket连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何建立websocket连接"}},[e._v("#")]),e._v(" 如何建立WebSocket连接？")]),e._v(" "),t("blockquote",[t("p",[e._v("在HTTO请求里带上特殊的header头；")]),e._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[e._v("Connection"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Upgrade\nUpgrade"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" WebSocket\nSec-WebSocket-Key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" T2a6wZlAwhgQNqruZ2YUyg==\\r\\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("header 头的意思是，浏览器想"),t("strong",[e._v("升级协议（Connection: Upgrade）")]),e._v("，并且"),t("strong",[e._v("想升级成 WebSocket 协议（Upgrade: WebSocket）")]),e._v("。同时带上一段"),t("strong",[e._v("随机生成的 base64 码（Sec-WebSocket-Key）")]),e._v("，发给服务器；")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
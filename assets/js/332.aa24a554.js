(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{659:function(t,e,n){"use strict";n.r(e);var v=n(4),o=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"镜像-容器操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像-容器操作"}},[t._v("#")]),t._v(" 镜像/容器操作")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://aurora-nr.oss-cn-beijing.aliyuncs.com/20231130210359.png",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("docker run会创建一个新的容器，常见参数：")]),t._v(" "),e("ul",[e("li",[t._v("--name：指定容器名称")]),t._v(" "),e("li",[t._v("-p：指定端口映射")]),t._v(" "),e("li",[t._v("-d：让容器后台运行")])]),t._v(" "),e("p",[t._v("docker ps -a 查看所有运行，包括停止的；")])]),t._v(" "),e("p",[t._v("拉取Nginx镜像案例：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("搜索镜像：https://hub.docker.com/")])]),t._v(" "),e("li",[e("p",[t._v("查看是否拉取成功：docker images")])]),t._v(" "),e("li",[e("p",[t._v("将镜像保存至本地：docker save -o nginx.tar nginx:latest")]),t._v(" "),e("blockquote",[e("p",[t._v("查看帮助：docker save --help")])])]),t._v(" "),e("li",[e("p",[t._v("运行镜像：docker run -d --name nginx -p 80:80 nginx")]),t._v(" "),e("blockquote",[e("p",[t._v("80:80：服务器80端口映射到本地80端口；")])])]),t._v(" "),e("li",[e("p",[t._v("进入容器交互：docker exec -it nginx bash")]),t._v(" "),e("blockquote",[e("p",[t._v("查看文件：ls -l")])])]),t._v(" "),e("li",[e("p",[t._v("删除镜像：docker rmi nginx:latest")])]),t._v(" "),e("li",[e("p",[t._v("将本地tar加载到镜像：docker load -i nginx.tar")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);
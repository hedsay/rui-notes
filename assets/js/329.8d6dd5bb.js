(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{652:function(v,t,_){"use strict";_.r(t);var r=_(4),a=Object(r.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[v._v("#")]),v._v(" vim")]),v._v(" "),t("blockquote",[t("p",[v._v("vi加强版本，兼容vi所有命令，具有shell编辑功能；")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://aurora-nr.oss-cn-beijing.aliyuncs.com/1701761077185.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"权限相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限相关"}},[v._v("#")]),v._v(" 权限相关")]),v._v(" "),t("p",[v._v("权限信息：")]),v._v(" "),t("p",[v._v("r (read)查看权限;")]),v._v(" "),t("p",[v._v("w (write)修改权限;")]),v._v(" "),t("p",[v._v("x (execute)执行权限;")]),v._v(" "),t("h3",{attrs:{id:"chmod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chmod"}},[v._v("#")]),v._v(" chmod")]),v._v(" "),t("blockquote",[t("p",[v._v("修改文件、文件夹权限信息，只有文件，文件夹 所属用户或者root用户可以修改）；")])]),v._v(" "),t("p",[v._v("语法：chmod ［-R］权限 文件或文件夹")]),v._v(" "),t("p",[v._v("例：chmod u＝rwx，g＝rx，o＝x hello.txt（将文件权限改为：rwxr-x--x）；")]),v._v(" "),t("blockquote",[t("p",[v._v("user group other")]),v._v(" "),t("p",[v._v("ls -l查看文件时没有权限用 - 占位表示；")])]),v._v(" "),t("p",[v._v("例：chmod-R u＝rwx，g＝rx，o＝x test(将文件夹test以及内容全部权限设置为rwxr-x---x)；")]),v._v(" "),t("p",[v._v("权限的数字序号：")]),v._v(" "),t("p",[v._v("r记为4 w记为2 x记为1，可以有：")]),v._v(" "),t("p",[v._v("​       0:无任何权限，即 ---")]),v._v(" "),t("p",[v._v("​       1:仅有x权限，--x")]),v._v(" "),t("p",[v._v("​       2：仅有w权限，-w-")]),v._v(" "),t("p",[v._v("​       3:有w和x权限，-wx")]),v._v(" "),t("p",[v._v("​       4:仅有r权限，r--")]),v._v(" "),t("p",[v._v("​       5:有r和x权限，r-x")]),v._v(" "),t("p",[v._v("​       6:有r和w权限，rw-")]),v._v(" "),t("p",[v._v("​       7:有全部权限：rwx")]),v._v(" "),t("p",[v._v("​       所以751表示rwx（7）r-x(5) --x(1)")]),v._v(" "),t("h2",{attrs:{id:"软链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软链接"}},[v._v("#")]),v._v(" 软链接")]),v._v(" "),t("p",[v._v("ln命令 创建软连接（类似windows系统的快捷方式）；")]),v._v(" "),t("p",[v._v("语法：ln -s 参数1 参数2")]),v._v(" "),t("p",[v._v("-s 创建软连接")]),v._v(" "),t("p",[v._v("参数1：被链接的文件或文件夹")]),v._v(" "),t("p",[v._v("参数2：要链接去的目的地")]),v._v(" "),t("p",[v._v("如：ln -s /etc/yum.conf ～/yum.conf")]),v._v(" "),t("blockquote",[t("p",[v._v("链接到HOME目录中的...")])]),v._v(" "),t("p",[v._v("ln -s /etc/yum ～/yum")]),v._v(" "),t("h2",{attrs:{id:"解压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压缩"}},[v._v("#")]),v._v(" 解压缩")]),v._v(" "),t("p",[v._v("tar [-c -v -x -f -z -C] 参数1 参数2 ... 参数N")]),v._v(" "),t("blockquote",[t("p",[v._v("-c：创建压缩文件；")]),v._v(" "),t("p",[v._v("-v：显示压缩，解压过程，查看进度；")]),v._v(" "),t("p",[v._v("-x：解压模式；")]),v._v(" "),t("p",[v._v("-f：要创建或要解压的文件，必须选项中位置最后一个；")]),v._v(" "),t("p",[v._v("-z：gzip模式，不使用就是tarball格式，要用必须第一个；")]),v._v(" "),t("p",[v._v("-C：解压目的地；")])]),v._v(" "),t("blockquote",[t("p",[v._v("tar -cvf test.tar 1.txt 2.txt 3.txt")]),v._v(" "),t("p",[v._v("将1.txt 2.txt 3.txt 压缩到test.tar文件内；")]),v._v(" "),t("p",[v._v("tar -zcvf test.tar.gz 1.txt 2.txt 3.txt")]),v._v(" "),t("p",[v._v("使用gzip模式压缩；")])]),v._v(" "),t("blockquote",[t("p",[v._v("tar -xvf test.tar -C /home")]),v._v(" "),t("p",[v._v("解压值指定路径；")]),v._v(" "),t("p",[v._v("tar -zxvf test.tar.gz -C /home")]),v._v(" "),t("p",[v._v("以Gzip解压；")])])])}),[],!1,null,null,null);t.default=a.exports}}]);
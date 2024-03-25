(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{661:function(t,v,_){"use strict";_.r(v);var e=_(4),a=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"git推送远程仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git推送远程仓库"}},[t._v("#")]),t._v(" git推送远程仓库")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("连接远程服务器；")]),t._v(" "),v("blockquote",[v("p",[t._v("girt remote add origin <server>")])])]),t._v(" "),v("li",[v("p",[t._v("将改动提交到远端仓库；")]),t._v(" "),v("blockquote",[v("p",[t._v("git push origin master（可以将master换成任何想要推送的分支）")])])])]),t._v(" "),v("h2",{attrs:{id:"查看提交历史"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看提交历史"}},[t._v("#")]),t._v(" 查看提交历史")]),t._v(" "),v("p",[t._v("查看个人提交记录：")]),t._v(" "),v("blockquote",[v("p",[t._v("git log --author=Nreal")])]),t._v(" "),v("h2",{attrs:{id:"撤销操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#撤销操作"}},[t._v("#")]),t._v(" 撤销操作")]),t._v(" "),v("p",[t._v("重新提交：")]),t._v(" "),v("blockquote",[v("p",[t._v("git commit --amend")])]),t._v(" "),v("p",[t._v("取消暂存文件：")]),t._v(" "),v("blockquote",[v("p",[t._v("git reset filename")])]),t._v(" "),v("p",[t._v("取消对文件修改：")]),t._v(" "),v("blockquote",[v("p",[t._v("git checkout -- filename")])]),t._v(" "),v("p",[t._v("丢弃本地的所有改动与提交，可以到服务器获取最新版本历史，将本地主分支指向它：")]),t._v(" "),v("blockquote",[v("p",[t._v("git fetch origin")]),t._v(" "),v("p",[t._v("git reset --hard origin/master")])]),t._v(" "),v("h2",{attrs:{id:"分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),v("p",[t._v("创建仓库时，master是默认的分支，当开发新功能、修复一个紧急bug会创建分支；")]),t._v(" "),v("p",[t._v("创建名叫test的分支：")]),t._v(" "),v("blockquote",[v("p",[t._v("git branch test")])]),t._v(" "),v("p",[t._v("切换分支：")]),t._v(" "),v("blockquote",[v("p",[t._v("git checkout test")])]),t._v(" "),v("p",[t._v("合并分支：")]),t._v(" "),v("blockquote",[v("p",[t._v("git merge test")])]),t._v(" "),v("p",[t._v("删除新建的分支")]),t._v(" "),v("blockquote",[v("p",[t._v("git branch -d feature_x")])]),t._v(" "),v("p",[t._v("将分支推送到远端仓库")]),t._v(" "),v("blockquote",[v("p",[t._v("git push origin")])]),t._v(" "),v("h2",{attrs:{id:"git-stash"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-stash"}},[t._v("#")]),t._v(" git stash")]),t._v(" "),v("blockquote",[v("p",[t._v("场景：开发新功能从master拉取一个分支dev进行开发时，线上版本master出现bug；")])]),t._v(" "),v("p",[t._v("git stash将当前未提交的修改先储存起来，切换到master分支下拉取一个fix分支，完成线上bug修复后，重新切换到dev分支下通过git stash pop命令将之前储藏的修改取出来，继续进行新功能的开发工作；")]),t._v(" "),v("h2",{attrs:{id:"git冲突解决"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git冲突解决"}},[t._v("#")]),t._v(" git冲突解决？")]),t._v(" "),v("p",[t._v("对比本地文件和远程分支的文件：修改本地冲突文件使其与远程仓库的文件保持一致；")]),t._v(" "),v("p",[t._v("或者：")]),t._v(" "),v("ul",[v("li",[t._v("通过git stash命令，把工作区的修改提交到栈区，目的是保存工作区的修改；")]),t._v(" "),v("li",[t._v("通过git pull命令，拉取远程分支上的代码并合并到本地分支，目的是消除冲突；")]),t._v(" "),v("li",[t._v("通过git stash pop命令，把保存在栈区的修改部分合并到最新的工作空间中；")])])])}),[],!1,null,null,null);v.default=a.exports}}]);
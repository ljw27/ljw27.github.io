---
layout: post
title:  "sublime text3 安装package control"
date:   2016-12-07 14:23:54
categories: jekyll
---
首先到sublime text3官网安装package control页面（[https://packagecontrol.io/installation#st3](https://packagecontrol.io/installation#st3)）。

1. **自动安装**
* 通过快捷键 ctrl+` 或者 View > Show Console 菜单打开控制台
* 粘贴对应版本的代码后回车安装

2. **手动安装**
* 点击`Preferences` > `Browse Packages`菜单
* 进入打开上一层目录，然后再进入`Installed Packages`目录
* 下载[Package Control.sublime-package](https://packagecontrol.io/Package%20Control.sublime-package)并复制到`Installed Packages`目录

3. **package control不显示**
* 记得要重新启动sublime text3
* `Preferences`-->`Browse packages`显示的`User`文件夹中有一个`Preferences.sublime-settings`文件，打开此文件，查看`ignored_packages`中是否包含`package control`，包含删除。（有时把`package control`默认忽略掉）

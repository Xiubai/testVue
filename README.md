# 这是 第一个项目

## 涉及到很多相关的 技术和知识

- HTML
- CSS
- Vue
- webpack

用的是 git 管理工具

## 关于开源协议
[开源协议的区别](https://baike.baidu.com/item/%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE)

## 1. git 学习
```
git add ./xxx
git commit -m "这里写些说明"
git status  查看状态
查看日志： git log
直接放到仓库： git commit --all -m "这是说明"
```
### 2. 版本回退
```
reset：重置  
--hard： 把代码拿过来  
Head~0：指向最新的版本   Head~1： 表示更旧的一个版本
```

`git reset --hard Head~0`  

也可以 `git reset --hard xxxxxxxx`      xxxxxxxx： 8位的标识符 

`git reflog` 查看所有版本  

### 3. git 分支 


#### 3.1 创建分支

`git branch dev`  ---  dev : 分支的名字

  #### 3.2 切换分支

    `git checkout dev`

  #### 3.3 合并分支

    `git merge dev`

### 4. 通过 HTTP 提交代码 到 git 服务器 (github) 

`git push [地址] master`

### 5. 获取服务器上的代码

`git pull [地址] master`
*注意: 本地要初始化一个仓库（git init）*

### 通过 ssh 

生成 公钥 和 私钥  `ssh-keygen -t rsa -C "1536847077@qq.com"`
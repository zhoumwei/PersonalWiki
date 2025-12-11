---
title: NVM 使用教程
---

# NVM 使用教程

Node Version Manager（NVM）是一个用于管理多个 Node.js 版本的工具。它允许您在同一台机器上安装和切换不同的 Node.js 版本，非常适合需要在不同项目中使用不同版本 Node.js 的开发者。

## 安装 NVM

### macOS 和 Linux 安装

在终端中运行以下命令之一：

使用 curl：
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

或使用 wget：
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

安装完成后，重新启动终端或运行以下命令加载 nvm：
```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

### Windows 安装

Windows 用户可以使用 nvm-windows：
1. 访问 [nvm-windows releases](https://github.com/coreybutler/nvm-windows/releases)
2. 下载最新版本的 nvm-setup.exe
3. 运行安装程序并按照提示完成安装

## 常用 NVM 命令

### 查看可用的 Node.js 版本
```bash
nvm list-remote
# 或者只查看 LTS 版本
nvm list-remote --lts
```

### 安装 Node.js 版本
```bash
# 安装最新的 Node.js 版本
nvm install node

# 安装特定版本
nvm install 16.14.0

# 安装最新的 LTS 版本
nvm install --lts
```

### 切换 Node.js 版本
```bash
# 切换到指定版本
nvm use 16.14.0

# 设置默认版本
nvm alias default 16.14.0

# 使用最新版本
nvm use node
```

### 查看已安装的版本
```bash
nvm list
# 或
nvm ls
```

### 卸载 Node.js 版本
```bash
nvm uninstall 16.14.0
```

## 实际应用场景

### 项目兼容性管理
当您有多个项目分别依赖不同版本的 Node.js 时，可以通过 nvm 轻松切换：
```bash
# 在项目 A 目录中
nvm use 14.18.0

# 在项目 B 目录中
nvm use 16.14.0
```

### 团队协作
通过 [.nvmrc](file:///Users/mingwzh/IdeaProjects/PersonalWiki/.nvmrc) 文件指定项目所需的 Node.js 版本：
```bash
# 创建 .nvmrc 文件
echo "16.14.0" > .nvmrc

# 使用项目指定的版本
nvm use
```

## 常见问题解决

### 无法找到 npm 命令
如果切换 Node.js 版本后 npm 命令不可用，请尝试重新安装该版本：
```bash
nvm reinstall-packages 16.14.0
```

### 权限问题
如果遇到权限错误，请确保当前用户对 nvm 目录具有读写权限：
```bash
sudo chown -R $(whoami) ~/.nvm
```

## 总结

NVM 是 Node.js 开发者的必备工具，它可以有效管理多个 Node.js 版本，避免版本冲突问题，提高开发效率。掌握 NVM 的基本使用方法对于现代前端和 Node.js 开发非常重要。
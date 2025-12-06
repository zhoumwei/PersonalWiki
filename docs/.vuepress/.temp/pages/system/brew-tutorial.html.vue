<template><div><h1 id="homebrew-使用教程" tabindex="-1"><a class="header-anchor" href="#homebrew-使用教程"><span>Homebrew 使用教程</span></a></h1>
<p>Homebrew 是 macOS 上最流行的包管理器，被称为 macOS 缺失的软件包管理器。它简化了 Unix/Linux 工具和开源软件在 macOS 上的安装过程。</p>
<h2 id="安装-homebrew" tabindex="-1"><a class="header-anchor" href="#安装-homebrew"><span>安装 Homebrew</span></a></h2>
<p>在终端中运行以下命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">/bin/bash <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装过程中可能需要输入密码以获取管理员权限。</p>
<h3 id="系统要求" tabindex="-1"><a class="header-anchor" href="#系统要求"><span>系统要求</span></a></h3>
<ul>
<li>macOS 10.14 或更高版本</li>
<li>Xcode 命令行工具（安装过程中会自动提示安装）</li>
<li>bash 或 zsh 终端</li>
</ul>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h2>
<h3 id="搜索软件包" tabindex="-1"><a class="header-anchor" href="#搜索软件包"><span>搜索软件包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 搜索软件包</span></span>
<span class="line">brew search <span class="token punctuation">[</span>软件包名称<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 示例：搜索 git</span></span>
<span class="line">brew search <span class="token function">git</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装软件包" tabindex="-1"><a class="header-anchor" href="#安装软件包"><span>安装软件包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装软件包</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token punctuation">[</span>软件包名称<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 示例：安装 git</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token function">git</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装多个软件包</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token function">git</span> <span class="token function">node</span> python</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看已安装的软件包" tabindex="-1"><a class="header-anchor" href="#查看已安装的软件包"><span>查看已安装的软件包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 列出所有通过 Homebrew 安装的软件包</span></span>
<span class="line">brew list</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看特定软件包信息</span></span>
<span class="line">brew info <span class="token punctuation">[</span>软件包名称<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新软件包" tabindex="-1"><a class="header-anchor" href="#更新软件包"><span>更新软件包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 更新 Homebrew 本身</span></span>
<span class="line">brew update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新所有过时的软件包</span></span>
<span class="line">brew upgrade</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新特定软件包</span></span>
<span class="line">brew upgrade <span class="token punctuation">[</span>软件包名称<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="卸载软件包" tabindex="-1"><a class="header-anchor" href="#卸载软件包"><span>卸载软件包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 卸载软件包</span></span>
<span class="line">brew uninstall <span class="token punctuation">[</span>软件包名称<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 卸载并删除依赖项</span></span>
<span class="line">brew uninstall <span class="token parameter variable">--zap</span> <span class="token punctuation">[</span>软件包名称<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级功能" tabindex="-1"><a class="header-anchor" href="#高级功能"><span>高级功能</span></a></h2>
<h3 id="cask-扩展" tabindex="-1"><a class="header-anchor" href="#cask-扩展"><span>Cask 扩展</span></a></h3>
<p>Homebrew Cask 允许安装大型二进制应用程序：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装图形界面应用</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> google-chrome</span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> visual-studio-code</span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> <span class="token function">docker</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看过时软件包" tabindex="-1"><a class="header-anchor" href="#查看过时软件包"><span>查看过时软件包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 列出所有可更新的软件包</span></span>
<span class="line">brew outdated</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清理系统" tabindex="-1"><a class="header-anchor" href="#清理系统"><span>清理系统</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 清理旧版本和缓存</span></span>
<span class="line">brew cleanup</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清理特定软件包的旧版本</span></span>
<span class="line">brew cleanup <span class="token punctuation">[</span>软件包名称<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="管理服务" tabindex="-1"><a class="header-anchor" href="#管理服务"><span>管理服务</span></a></h3>
<p>许多软件包包含后台服务，可以通过 Homebrew 管理：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 启动服务并设置开机自启</span></span>
<span class="line">brew services start <span class="token punctuation">[</span>服务名称<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止服务</span></span>
<span class="line">brew services stop <span class="token punctuation">[</span>服务名称<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启服务</span></span>
<span class="line">brew services restart <span class="token punctuation">[</span>服务名称<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用软件包推荐" tabindex="-1"><a class="header-anchor" href="#常用软件包推荐"><span>常用软件包推荐</span></a></h2>
<h3 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具"><span>开发工具</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 版本控制</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token function">git</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 编程语言环境</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token function">node</span></span>
<span class="line">brew <span class="token function">install</span> python</span>
<span class="line">brew <span class="token function">install</span> <span class="token function">java</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 数据库</span></span>
<span class="line">brew <span class="token function">install</span> mysql</span>
<span class="line">brew <span class="token function">install</span> postgresql</span>
<span class="line">brew <span class="token function">install</span> redis</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 命令行工具增强</span></span>
<span class="line">brew <span class="token function">install</span> tree</span>
<span class="line">brew <span class="token function">install</span> <span class="token function">wget</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token function">htop</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用程序-通过-cask" tabindex="-1"><a class="header-anchor" href="#应用程序-通过-cask"><span>应用程序（通过 Cask）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 浏览器</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> google-chrome</span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> firefox</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 开发工具</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> visual-studio-code</span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> intellij-idea</span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> <span class="token function">docker</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 通讯工具</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> slack</span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> discord</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 其他实用工具</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> alfred</span>
<span class="line">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> notion</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h2>
<h3 id="修复权限问题" tabindex="-1"><a class="header-anchor" href="#修复权限问题"><span>修复权限问题</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 修复 Homebrew 相关目录权限</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">whoami</span><span class="token variable">)</span></span> <span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--prefix</span><span class="token variable">)</span></span>/*</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="诊断问题" tabindex="-1"><a class="header-anchor" href="#诊断问题"><span>诊断问题</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 运行诊断检查</span></span>
<span class="line">brew doctor</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重置-homebrew" tabindex="-1"><a class="header-anchor" href="#重置-homebrew"><span>重置 Homebrew</span></a></h3>
<p>如果遇到严重问题，可以尝试重置：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 卸载所有 Homebrew 软件包</span></span>
<span class="line">brew bundle dump</span>
<span class="line">brew uninstall <span class="token parameter variable">--force</span> <span class="token variable"><span class="token variable">$(</span>brew list<span class="token variable">)</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重新安装 Homebrew</span></span>
<span class="line">/bin/bash <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh<span class="token variable">)</span></span>"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="brewfile-管理" tabindex="-1"><a class="header-anchor" href="#brewfile-管理"><span>Brewfile 管理</span></a></h2>
<p>您可以创建一个 Brewfile 来管理开发环境配置：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 导出当前安装的软件包列表</span></span>
<span class="line">brew bundle dump</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装 Brewfile 中列出的所有软件包</span></span>
<span class="line">brew bundle</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 Brewfile 内容：</p>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code><span class="line">tap <span class="token string-literal"><span class="token string">"homebrew/bundle"</span></span></span>
<span class="line">tap <span class="token string-literal"><span class="token string">"homebrew/cask"</span></span></span>
<span class="line">tap <span class="token string-literal"><span class="token string">"homebrew/core"</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 命令行工具</span></span>
<span class="line">brew <span class="token string-literal"><span class="token string">"git"</span></span></span>
<span class="line">brew <span class="token string-literal"><span class="token string">"node"</span></span></span>
<span class="line">brew <span class="token string-literal"><span class="token string">"python"</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 应用程序</span></span>
<span class="line">cask <span class="token string-literal"><span class="token string">"google-chrome"</span></span></span>
<span class="line">cask <span class="token string-literal"><span class="token string">"visual-studio-code"</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>Homebrew 极大地简化了 macOS 上软件的安装和管理过程。通过简单的命令，您可以轻松地安装、更新和卸载各种开源软件和应用程序。对于开发者来说，这是一个不可或缺的工具，能够显著提升工作效率。</p>
</div></template>



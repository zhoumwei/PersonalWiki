<template><div><h1 id="nvm-使用教程" tabindex="-1"><a class="header-anchor" href="#nvm-使用教程"><span>NVM 使用教程</span></a></h1>
<p>Node Version Manager（NVM）是一个用于管理多个 Node.js 版本的工具。它允许您在同一台机器上安装和切换不同的 Node.js 版本，非常适合需要在不同项目中使用不同版本 Node.js 的开发者。</p>
<h2 id="安装-nvm" tabindex="-1"><a class="header-anchor" href="#安装-nvm"><span>安装 NVM</span></a></h2>
<h3 id="macos-和-linux-安装" tabindex="-1"><a class="header-anchor" href="#macos-和-linux-安装"><span>macOS 和 Linux 安装</span></a></h3>
<p>在终端中运行以下命令之一：</p>
<p>使用 curl：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或使用 wget：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">wget</span> -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装完成后，重新启动终端或运行以下命令加载 nvm：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_DIR</span><span class="token operator">=</span><span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">"<span class="token variable">${XDG_CONFIG_HOME-}</span>"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">printf</span> %s <span class="token string">"<span class="token variable">${<span class="token environment constant">HOME</span>}</span>/.nvm"</span> <span class="token operator">||</span> <span class="token builtin class-name">printf</span> %s <span class="token string">"<span class="token variable">${XDG_CONFIG_HOME}</span>/nvm"</span><span class="token variable">)</span></span>"</span></span>
<span class="line"><span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">"<span class="token variable">$NVM_DIR</span>/nvm.sh"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>. <span class="token string">"<span class="token variable">$NVM_DIR</span>/nvm.sh"</span> <span class="token comment"># This loads nvm</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows-安装" tabindex="-1"><a class="header-anchor" href="#windows-安装"><span>Windows 安装</span></a></h3>
<p>Windows 用户可以使用 nvm-windows：</p>
<ol>
<li>访问 <a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noopener noreferrer">nvm-windows releases</a></li>
<li>下载最新版本的 nvm-setup.exe</li>
<li>运行安装程序并按照提示完成安装</li>
</ol>
<h2 id="常用-nvm-命令" tabindex="-1"><a class="header-anchor" href="#常用-nvm-命令"><span>常用 NVM 命令</span></a></h2>
<h3 id="查看可用的-node-js-版本" tabindex="-1"><a class="header-anchor" href="#查看可用的-node-js-版本"><span>查看可用的 Node.js 版本</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">nvm list-remote</span>
<span class="line"><span class="token comment"># 或者只查看 LTS 版本</span></span>
<span class="line">nvm list-remote <span class="token parameter variable">--lts</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-node-js-版本" tabindex="-1"><a class="header-anchor" href="#安装-node-js-版本"><span>安装 Node.js 版本</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装最新的 Node.js 版本</span></span>
<span class="line">nvm <span class="token function">install</span> <span class="token function">node</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装特定版本</span></span>
<span class="line">nvm <span class="token function">install</span> <span class="token number">16.14</span>.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装最新的 LTS 版本</span></span>
<span class="line">nvm <span class="token function">install</span> <span class="token parameter variable">--lts</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换-node-js-版本" tabindex="-1"><a class="header-anchor" href="#切换-node-js-版本"><span>切换 Node.js 版本</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 切换到指定版本</span></span>
<span class="line">nvm use <span class="token number">16.14</span>.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置默认版本</span></span>
<span class="line">nvm <span class="token builtin class-name">alias</span> default <span class="token number">16.14</span>.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用最新版本</span></span>
<span class="line">nvm use <span class="token function">node</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看已安装的版本" tabindex="-1"><a class="header-anchor" href="#查看已安装的版本"><span>查看已安装的版本</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">nvm list</span>
<span class="line"><span class="token comment"># 或</span></span>
<span class="line">nvm <span class="token function">ls</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="卸载-node-js-版本" tabindex="-1"><a class="header-anchor" href="#卸载-node-js-版本"><span>卸载 Node.js 版本</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">nvm uninstall <span class="token number">16.14</span>.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="实际应用场景" tabindex="-1"><a class="header-anchor" href="#实际应用场景"><span>实际应用场景</span></a></h2>
<h3 id="项目兼容性管理" tabindex="-1"><a class="header-anchor" href="#项目兼容性管理"><span>项目兼容性管理</span></a></h3>
<p>当您有多个项目分别依赖不同版本的 Node.js 时，可以通过 nvm 轻松切换：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 在项目 A 目录中</span></span>
<span class="line">nvm use <span class="token number">14.18</span>.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在项目 B 目录中</span></span>
<span class="line">nvm use <span class="token number">16.14</span>.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="团队协作" tabindex="-1"><a class="header-anchor" href="#团队协作"><span>团队协作</span></a></h3>
<p>通过 [.nvmrc](file:///Users/mingwzh/IdeaProjects/PersonalWiki/.nvmrc) 文件指定项目所需的 Node.js 版本：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 创建 .nvmrc 文件</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"16.14.0"</span> <span class="token operator">></span> .nvmrc</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用项目指定的版本</span></span>
<span class="line">nvm use</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题解决" tabindex="-1"><a class="header-anchor" href="#常见问题解决"><span>常见问题解决</span></a></h2>
<h3 id="无法找到-npm-命令" tabindex="-1"><a class="header-anchor" href="#无法找到-npm-命令"><span>无法找到 npm 命令</span></a></h3>
<p>如果切换 Node.js 版本后 npm 命令不可用，请尝试重新安装该版本：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">nvm reinstall-packages <span class="token number">16.14</span>.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="权限问题" tabindex="-1"><a class="header-anchor" href="#权限问题"><span>权限问题</span></a></h3>
<p>如果遇到权限错误，请确保当前用户对 nvm 目录具有读写权限：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">whoami</span><span class="token variable">)</span></span> ~/.nvm</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>NVM 是 Node.js 开发者的必备工具，它可以有效管理多个 Node.js 版本，避免版本冲突问题，提高开发效率。掌握 NVM 的基本使用方法对于现代前端和 Node.js 开发非常重要。</p>
</div></template>



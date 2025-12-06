<template><div><h1 id="linux学习笔记" tabindex="-1"><a class="header-anchor" href="#linux学习笔记"><span>Linux学习笔记</span></a></h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>Linux是一个开源的类Unix操作系统内核，广泛应用于服务器、嵌入式设备和个人计算机等领域。掌握Linux系统的基本操作对于开发者和系统管理员来说至关重要。</p>
<h2 id="核心知识点" tabindex="-1"><a class="header-anchor" href="#核心知识点"><span>核心知识点</span></a></h2>
<h3 id="_1-基本命令" tabindex="-1"><a class="header-anchor" href="#_1-基本命令"><span>1. 基本命令</span></a></h3>
<h4 id="文件和目录操作" tabindex="-1"><a class="header-anchor" href="#文件和目录操作"><span>文件和目录操作</span></a></h4>
<ul>
<li><code v-pre>ls</code> - 列出目录内容</li>
<li><code v-pre>cd</code> - 切换目录</li>
<li><code v-pre>pwd</code> - 显示当前工作目录</li>
<li><code v-pre>mkdir</code> - 创建目录</li>
<li><code v-pre>rm</code> - 删除文件或目录</li>
<li><code v-pre>cp</code> - 复制文件或目录</li>
<li><code v-pre>mv</code> - 移动或重命名文件</li>
</ul>
<h4 id="文件查看和编辑" tabindex="-1"><a class="header-anchor" href="#文件查看和编辑"><span>文件查看和编辑</span></a></h4>
<ul>
<li><code v-pre>cat</code> - 查看文件内容</li>
<li><code v-pre>less</code>/<code v-pre>more</code> - 分页查看文件</li>
<li><code v-pre>head</code>/<code v-pre>tail</code> - 查看文件头部/尾部内容</li>
<li><code v-pre>nano</code>/<code v-pre>vim</code> - 文本编辑器</li>
</ul>
<h4 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息"><span>系统信息</span></a></h4>
<ul>
<li><code v-pre>ps</code> - 查看进程状态</li>
<li><code v-pre>top</code> - 查看系统活动</li>
<li><code v-pre>df</code> - 查看磁盘空间使用情况</li>
<li><code v-pre>free</code> - 查看内存使用情况</li>
</ul>
<h3 id="_2-权限管理" tabindex="-1"><a class="header-anchor" href="#_2-权限管理"><span>2. 权限管理</span></a></h3>
<p>Linux系统通过权限控制保护文件和目录安全：</p>
<ul>
<li>读(r)、写(w)、执行(x)权限</li>
<li>用户(user)、组(group)、其他(others)三级权限模型</li>
<li><code v-pre>chmod</code> - 修改权限</li>
<li><code v-pre>chown</code> - 修改所有者</li>
<li><code v-pre>chgrp</code> - 修改所属组</li>
</ul>
<h3 id="_3-shell脚本" tabindex="-1"><a class="header-anchor" href="#_3-shell脚本"><span>3. Shell脚本</span></a></h3>
<p>Shell脚本是提高工作效率的重要工具：</p>
<ul>
<li>变量定义和使用</li>
<li>条件判断语句(if/else)</li>
<li>循环语句(for/while)</li>
<li>函数定义和调用</li>
</ul>
<h2 id="实践经验" tabindex="-1"><a class="header-anchor" href="#实践经验"><span>实践经验</span></a></h2>
<h3 id="日常运维技巧" tabindex="-1"><a class="header-anchor" href="#日常运维技巧"><span>日常运维技巧</span></a></h3>
<ol>
<li>使用<code v-pre>alias</code>设置命令别名提高效率</li>
<li>掌握正则表达式配合<code v-pre>grep</code>进行文本搜索</li>
<li>使用<code v-pre>cron</code>定时任务进行自动化运维</li>
<li>学会查看日志文件进行故障排查</li>
</ol>
<h3 id="性能优化建议" tabindex="-1"><a class="header-anchor" href="#性能优化建议"><span>性能优化建议</span></a></h3>
<ol>
<li>合理分配系统资源</li>
<li>定期清理无用文件释放磁盘空间</li>
<li>监控系统负载及时发现性能瓶颈</li>
</ol>
<h2 id="常见问题及解决方案" tabindex="-1"><a class="header-anchor" href="#常见问题及解决方案"><span>常见问题及解决方案</span></a></h2>
<h3 id="权限问题" tabindex="-1"><a class="header-anchor" href="#权限问题"><span>权限问题</span></a></h3>
<p>当遇到权限不足的情况时，应首先检查文件权限设置，谨慎使用<code v-pre>sudo</code>命令。</p>
<h3 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理"><span>进程管理</span></a></h3>
<p>学会使用<code v-pre>kill</code>命令终止异常进程，避免系统资源被占用。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>Linux系统的学习是一个循序渐进的过程，需要理论结合实践。通过不断练习和积累经验，能够熟练运用Linux系统进行开发和运维工作。</p>
<p><a href="./pdf/1.Linux%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.pdf">下载完整的PDF笔记</a></p>
</div></template>



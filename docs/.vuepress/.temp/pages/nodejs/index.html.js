import comp from "/Users/mingwzh/IdeaProjects/PersonalWiki/docs/.vuepress/.temp/pages/nodejs/index.html.vue"
const data = JSON.parse("{\"path\":\"/nodejs/\",\"title\":\"Node.js 学习笔记\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"内容列表\",\"slug\":\"内容列表\",\"link\":\"#内容列表\",\"children\":[]},{\"level\":2,\"title\":\"Node.js 应用场景概述\",\"slug\":\"node-js-应用场景概述\",\"link\":\"#node-js-应用场景概述\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"nodejs/README.md\",\"excerpt\":\"\\n<p>本目录包含 Node.js 相关的学习笔记和面试题整理。</p>\\n<h2>内容列表</h2>\\n<ul>\\n<li><a href=\\\"/nodejs/nodejs-interview.html\\\" target=\\\"_blank\\\">Node.js 面试题</a></li>\\n</ul>\\n<h2>Node.js 应用场景概述</h2>\\n<p>Node.js 凭借其高性能、高并发的特性，在多个领域得到了广泛应用:</p>\\n<ol>\\n<li><strong>Web 服务器开发</strong> - 构建高性能的 HTTP 服务器和 RESTful API 服务</li>\\n<li><strong>实时应用</strong> - 聊天应用、在线游戏服务器、实时协作工具</li>\\n<li><strong>I/O 密集型应用</strong> - 文件上传服务、日志处理系统</li>\\n<li><strong>命令行工具</strong> - 构建自动化工具、项目脚手架工具</li>\\n<li><strong>桌面应用</strong> - 使用 Electron 构建跨平台桌面应用</li>\\n<li><strong>物联网（IoT）</strong> - 设备数据收集和处理</li>\\n</ol>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

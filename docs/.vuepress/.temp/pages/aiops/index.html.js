import comp from "/Users/mingwzh/IdeaProjects/PersonalWiki/docs/.vuepress/.temp/pages/aiops/index.html.vue"
const data = JSON.parse("{\"path\":\"/aiops/\",\"title\":\"AIOps学习笔记\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"什么是AIOps\",\"slug\":\"什么是aiops\",\"link\":\"#什么是aiops\",\"children\":[]},{\"level\":2,\"title\":\"学习内容\",\"slug\":\"学习内容\",\"link\":\"#学习内容\",\"children\":[]},{\"level\":2,\"title\":\"学习目标\",\"slug\":\"学习目标\",\"link\":\"#学习目标\",\"children\":[]}],\"git\":{\"updatedTime\":1765091681000,\"contributors\":[{\"name\":\"mingwzh\",\"username\":\"mingwzh\",\"email\":\"1127699551@qq.com\",\"commits\":1,\"url\":\"https://github.com/mingwzh\"}],\"changelog\":[{\"hash\":\"1104d4bbc9167a18c1f07a1784ad90fb4675c91b\",\"time\":1765091681000,\"email\":\"1127699551@qq.com\",\"author\":\"mingwzh\",\"message\":\"docs(aiops): 添加AIOps异常检测技术文档\"}]},\"filePathRelative\":\"aiops/README.md\",\"excerpt\":\"\\n<p>这是我的AIOps（智能运维）学习笔记专区，记录了我在智能运维领域的学习过程和心得。</p>\\n<h2>什么是AIOps</h2>\\n<p>AIOps（Artificial Intelligence for IT Operations）是指使用大数据和机器学习等技术来增强和自动化IT运营决策和行动。Gartner在2016年首次提出了这一概念，将其定义为一种结合了大数据和机器学习功能，以增强和自动化IT运营决策和行动的平台。</p>\\n<h2>学习内容</h2>\\n<ul>\\n<li>AIOps基础概念和原理</li>\\n<li>数据采集与处理</li>\\n<li>异常检测与根因分析</li>\\n<li>智能预警与故障预测</li>\\n<li>自动化运维</li>\\n<li>日志分析与处理</li>\\n<li>性能监控与优化</li>\\n<li>AIOps平台架构设计</li>\\n<li>实际案例研究</li>\\n</ul>\"}")
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

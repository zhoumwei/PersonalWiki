import comp from "/Users/mingwzh/IdeaProjects/PersonalWiki/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"开始浏览\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"查看分类\",\"link\":\"/category/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"技术笔记\",\"details\":\"整理了Java、数据库、缓存、消息队列等核心技术的学习笔记和实践经验\"},{\"title\":\"面试总结\",\"details\":\"汇总了各类技术面试题目及详细解析，助力求职准备\"},{\"title\":\"系统教程\",\"details\":\"包含Linux、Brew、NVM等常用开发工具的使用指南\"},{\"title\":\"持续更新\",\"details\":\"内容持续完善中，不断补充新的技术点和实践经验\"},{\"title\":\"结构清晰\",\"details\":\"按照技术类别组织内容，方便快速查找所需资料\"},{\"title\":\"实用性强\",\"details\":\"所有内容均来自实际项目经验，注重实用性和可操作性\"}],\"footer\":\"MIT Licensed | Copyright © 2025 Personal Wiki\"},\"headers\":[],\"git\":{\"updatedTime\":1765033334000,\"contributors\":[{\"name\":\"mingwzh\",\"username\":\"mingwzh\",\"email\":\"1127699551@qq.com\",\"commits\":2,\"url\":\"https://github.com/mingwzh\"}],\"changelog\":[{\"hash\":\"2bfeadb634552d6d3dd2d4292bdba03eb6e3bc7e\",\"time\":1765033334000,\"email\":\"1127699551@qq.com\",\"author\":\"mingwzh\",\"message\":\"docs(config): 更新VuePress配置和文档内容\"},{\"hash\":\"e2c417c858fe23e9439fa569a7a0f72a0ed08ee9\",\"time\":1765027695000,\"email\":\"1127699551@qq.com\",\"author\":\"mingwzh\",\"message\":\"build(docs): 初始化文档页面和文章内容\"}]},\"filePathRelative\":\"README.md\"}")
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

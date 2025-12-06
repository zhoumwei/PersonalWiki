import comp from "/Users/mingwzh/IdeaProjects/PersonalWiki/docs/.vuepress/.temp/pages/database/index.html.vue"
const data = JSON.parse("{\"path\":\"/database/\",\"title\":\"Database 文档\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"文档列表\",\"slug\":\"文档列表\",\"link\":\"#文档列表\",\"children\":[]}],\"git\":{\"updatedTime\":1765033334000,\"contributors\":[{\"name\":\"mingwzh\",\"username\":\"mingwzh\",\"email\":\"1127699551@qq.com\",\"commits\":1,\"url\":\"https://github.com/mingwzh\"}],\"changelog\":[{\"hash\":\"2bfeadb634552d6d3dd2d4292bdba03eb6e3bc7e\",\"time\":1765033334000,\"email\":\"1127699551@qq.com\",\"author\":\"mingwzh\",\"message\":\"docs(config): 更新VuePress配置和文档内容\"}]},\"filePathRelative\":\"database/README.md\",\"excerpt\":\"\\n<h2>文档列表</h2>\\n<ul>\\n<li><a href=\\\"/database/mysql-notes.html\\\" target=\\\"_blank\\\">Mysql 面试题及答案</a></li>\\n</ul>\\n\"}")
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

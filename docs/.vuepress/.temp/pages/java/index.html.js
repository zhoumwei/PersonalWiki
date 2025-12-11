import comp from "/Users/mingwzh/IdeaProjects/PersonalWiki/docs/.vuepress/.temp/pages/java/index.html.vue"
const data = JSON.parse("{\"path\":\"/java/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1765035122000,\"contributors\":[{\"name\":\"mingwzh\",\"username\":\"mingwzh\",\"email\":\"1127699551@qq.com\",\"commits\":1,\"url\":\"https://github.com/mingwzh\"}],\"changelog\":[{\"hash\":\"9ae728798132358c444f187e178a13270460a339\",\"time\":1765035122000,\"email\":\"1127699551@qq.com\",\"author\":\"mingwzh\",\"message\":\"docs(bigdata): 添加大数据学习笔记文档\"}]},\"filePathRelative\":\"java/README.md\",\"excerpt\":\"\"}")
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

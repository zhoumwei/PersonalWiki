import comp from "/Users/mingwzh/IdeaProjects/PersonalWiki/docs/.vuepress/.temp/pages/frontend/index.html.vue"
const data = JSON.parse("{\"path\":\"/frontend/\",\"title\":\"前端学习笔记\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"frontend/README.md\",\"excerpt\":\"\\n<p>本目录包含前端相关的学习笔记和面试题整理。</p>\\n\"}")
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

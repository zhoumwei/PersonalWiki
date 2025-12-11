import comp from "/Users/mingwzh/IdeaProjects/PersonalWiki/docs/.vuepress/.temp/pages/frontend/index.html.vue"
const data = JSON.parse("{\"path\":\"/frontend/\",\"title\":\"前端学习笔记\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"内容列表\",\"slug\":\"内容列表\",\"link\":\"#内容列表\",\"children\":[]}],\"git\":{\"updatedTime\":1765430798000,\"contributors\":[{\"name\":\"mingwzh\",\"username\":\"mingwzh\",\"email\":\"1127699551@qq.com\",\"commits\":1,\"url\":\"https://github.com/mingwzh\"}],\"changelog\":[{\"hash\":\"f1db962617f7fb61a83bb0397547c08c0fc1bad1\",\"time\":1765430798000,\"email\":\"1127699551@qq.com\",\"author\":\"mingwzh\",\"message\":\"docs(bigdata): 添加大数据学习笔记文档\"}]},\"filePathRelative\":\"frontend/README.md\",\"excerpt\":\"\\n<p>本目录包含前端相关的学习笔记和面试题整理。</p>\\n<h2>内容列表</h2>\\n<ul>\\n<li><a href=\\\"/frontend/html-interview.html\\\" target=\\\"_blank\\\">HTML 面试题</a></li>\\n<li><a href=\\\"/frontend/css-interview.html\\\" target=\\\"_blank\\\">CSS 面试题</a></li>\\n<li><a href=\\\"/frontend/javascript-interview.html\\\" target=\\\"_blank\\\">JavaScript 面试题</a></li>\\n<li><a href=\\\"/frontend/vue-interview.html\\\" target=\\\"_blank\\\">Vue 面试题</a></li>\\n<li><a href=\\\"/frontend/react-interview.html\\\" target=\\\"_blank\\\">React 面试题</a></li>\\n<li><a href=\\\"/frontend/layout-methods.html\\\" target=\\\"_blank\\\">前端布局方式详解</a></li>\\n</ul>\"}")
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

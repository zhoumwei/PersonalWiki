import comp from "/Users/mingwzh/IdeaProjects/PersonalWiki/docs/.vuepress/.temp/pages/bigdata/index.html.vue"
const data = JSON.parse("{\"path\":\"/bigdata/\",\"title\":\"大数据学习笔记\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"学习内容\",\"slug\":\"学习内容\",\"link\":\"#学习内容\",\"children\":[]},{\"level\":2,\"title\":\"学习目标\",\"slug\":\"学习目标\",\"link\":\"#学习目标\",\"children\":[]}],\"git\":{\"updatedTime\":1765035122000,\"contributors\":[{\"name\":\"mingwzh\",\"username\":\"mingwzh\",\"email\":\"1127699551@qq.com\",\"commits\":1,\"url\":\"https://github.com/mingwzh\"}],\"changelog\":[{\"hash\":\"9ae728798132358c444f187e178a13270460a339\",\"time\":1765035122000,\"email\":\"1127699551@qq.com\",\"author\":\"mingwzh\",\"message\":\"docs(bigdata): 添加大数据学习笔记文档\"}]},\"filePathRelative\":\"bigdata/README.md\",\"excerpt\":\"\\n<p>这是我的大数据学习笔记，记录了我在大数据技术领域的学习过程和心得。</p>\\n<h2>学习内容</h2>\\n<ul>\\n<li>Hadoop生态系统</li>\\n<li>Spark计算框架</li>\\n<li>Kafka消息队列</li>\\n<li>Hive数据仓库</li>\\n<li>HBase数据库</li>\\n<li>Zookeeper协调服务</li>\\n<li>Flink流处理框架</li>\\n</ul>\\n<h2>学习目标</h2>\\n<p>通过系统学习大数据相关技术，掌握以下能力：</p>\\n<ol>\\n<li>理解大数据的基本概念和处理方式</li>\\n<li>掌握Hadoop分布式文件系统(HDFS)的原理和使用</li>\\n<li>熟悉MapReduce计算模型和Spark计算框架</li>\\n<li>了解大数据生态系统的各个组件及其作用</li>\\n<li>能够搭建和维护大数据平台</li>\\n<li>具备大数据处理和分析的能力</li>\\n</ol>\"}")
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

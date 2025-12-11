import comp from "/Users/mingwzh/IdeaProjects/PersonalWiki/docs/.vuepress/.temp/pages/bigdata/hadoop-notes.html.vue"
const data = JSON.parse("{\"path\":\"/bigdata/hadoop-notes.html\",\"title\":\"Hadoop学习笔记\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"什么是Hadoop\",\"slug\":\"什么是hadoop\",\"link\":\"#什么是hadoop\",\"children\":[]},{\"level\":2,\"title\":\"Hadoop核心组件\",\"slug\":\"hadoop核心组件\",\"link\":\"#hadoop核心组件\",\"children\":[{\"level\":3,\"title\":\"1. HDFS (Hadoop Distributed File System)\",\"slug\":\"_1-hdfs-hadoop-distributed-file-system\",\"link\":\"#_1-hdfs-hadoop-distributed-file-system\",\"children\":[]},{\"level\":3,\"title\":\"2. MapReduce\",\"slug\":\"_2-mapreduce\",\"link\":\"#_2-mapreduce\",\"children\":[]},{\"level\":3,\"title\":\"3. YARN (Yet Another Resource Negotiator)\",\"slug\":\"_3-yarn-yet-another-resource-negotiator\",\"link\":\"#_3-yarn-yet-another-resource-negotiator\",\"children\":[]}]},{\"level\":2,\"title\":\"Hadoop生态系统\",\"slug\":\"hadoop生态系统\",\"link\":\"#hadoop生态系统\",\"children\":[]},{\"level\":2,\"title\":\"Hadoop应用场景\",\"slug\":\"hadoop应用场景\",\"link\":\"#hadoop应用场景\",\"children\":[]},{\"level\":2,\"title\":\"Hadoop优势\",\"slug\":\"hadoop优势\",\"link\":\"#hadoop优势\",\"children\":[]},{\"level\":2,\"title\":\"Hadoop局限性\",\"slug\":\"hadoop局限性\",\"link\":\"#hadoop局限性\",\"children\":[]}],\"git\":{\"updatedTime\":1765035122000,\"contributors\":[{\"name\":\"mingwzh\",\"username\":\"mingwzh\",\"email\":\"1127699551@qq.com\",\"commits\":1,\"url\":\"https://github.com/mingwzh\"}],\"changelog\":[{\"hash\":\"9ae728798132358c444f187e178a13270460a339\",\"time\":1765035122000,\"email\":\"1127699551@qq.com\",\"author\":\"mingwzh\",\"message\":\"docs(bigdata): 添加大数据学习笔记文档\"}]},\"filePathRelative\":\"bigdata/hadoop-notes.md\",\"excerpt\":\"\\n<h2>什么是Hadoop</h2>\\n<p>Hadoop是一个开源的分布式计算框架，用于存储和处理大规模数据集。它由Apache基金会开发，旨在从单个服务器扩展到数千台机器，每台机器都提供本地计算和存储。</p>\\n<h2>Hadoop核心组件</h2>\\n<h3>1. HDFS (Hadoop Distributed File System)</h3>\\n<p>HDFS是Hadoop的存储单元，具有以下特点：</p>\\n<ul>\\n<li>分布式文件系统</li>\\n<li>高容错性</li>\\n<li>高吞吐量</li>\\n<li>适合大规模数据集的应用</li>\\n</ul>\\n<h4>HDFS架构</h4>\"}")
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

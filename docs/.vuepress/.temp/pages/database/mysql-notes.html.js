import comp from "/Users/mingwzh/IdeaProjects/PersonalWiki/docs/.vuepress/.temp/pages/database/mysql-notes.html.vue"
const data = JSON.parse("{\"path\":\"/database/mysql-notes.html\",\"title\":\"MySQL 面试题及答案\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"索引优化\",\"slug\":\"索引优化\",\"link\":\"#索引优化\",\"children\":[{\"level\":3,\"title\":\"1. 什么是数据库索引？有什么作用？\",\"slug\":\"_1-什么是数据库索引-有什么作用\",\"link\":\"#_1-什么是数据库索引-有什么作用\",\"children\":[]},{\"level\":3,\"title\":\"2. MySQL有哪些常见的索引类型？\",\"slug\":\"_2-mysql有哪些常见的索引类型\",\"link\":\"#_2-mysql有哪些常见的索引类型\",\"children\":[]},{\"level\":3,\"title\":\"3. 什么是覆盖索引？有什么优势？\",\"slug\":\"_3-什么是覆盖索引-有什么优势\",\"link\":\"#_3-什么是覆盖索引-有什么优势\",\"children\":[]},{\"level\":3,\"title\":\"4. 什么是索引下推（Index Condition Pushdown，ICP）？\",\"slug\":\"_4-什么是索引下推-index-condition-pushdown-icp\",\"link\":\"#_4-什么是索引下推-index-condition-pushdown-icp\",\"children\":[]},{\"level\":3,\"title\":\"5. 如何分析SQL执行计划？\",\"slug\":\"_5-如何分析sql执行计划\",\"link\":\"#_5-如何分析sql执行计划\",\"children\":[]}]},{\"level\":2,\"title\":\"事务优化\",\"slug\":\"事务优化\",\"link\":\"#事务优化\",\"children\":[{\"level\":3,\"title\":\"6. 什么是数据库事务？有哪些特性？\",\"slug\":\"_6-什么是数据库事务-有哪些特性\",\"link\":\"#_6-什么是数据库事务-有哪些特性\",\"children\":[]},{\"level\":3,\"title\":\"7. MySQL事务隔离级别有哪些？\",\"slug\":\"_7-mysql事务隔离级别有哪些\",\"link\":\"#_7-mysql事务隔离级别有哪些\",\"children\":[]},{\"level\":3,\"title\":\"8. 什么是MVCC？如何实现？\",\"slug\":\"_8-什么是mvcc-如何实现\",\"link\":\"#_8-什么是mvcc-如何实现\",\"children\":[]},{\"level\":3,\"title\":\"9. 如何优化长事务？\",\"slug\":\"_9-如何优化长事务\",\"link\":\"#_9-如何优化长事务\",\"children\":[]},{\"level\":3,\"title\":\"10. 什么情况下会导致事务回滚？\",\"slug\":\"_10-什么情况下会导致事务回滚\",\"link\":\"#_10-什么情况下会导致事务回滚\",\"children\":[]},{\"level\":3,\"title\":\"11. MySQL事务优化策略有哪些？\",\"slug\":\"_11-mysql事务优化策略有哪些\",\"link\":\"#_11-mysql事务优化策略有哪些\",\"children\":[]},{\"level\":3,\"title\":\"12. 如何监控MySQL事务性能？\",\"slug\":\"_12-如何监控mysql事务性能\",\"link\":\"#_12-如何监控mysql事务性能\",\"children\":[]},{\"level\":3,\"title\":\"13. 死锁的预防和处理？\",\"slug\":\"_13-死锁的预防和处理\",\"link\":\"#_13-死锁的预防和处理\",\"children\":[]}]}],\"git\":{\"updatedTime\":1765027695000,\"contributors\":[{\"name\":\"mingwzh\",\"username\":\"mingwzh\",\"email\":\"1127699551@qq.com\",\"commits\":1,\"url\":\"https://github.com/mingwzh\"}],\"changelog\":[{\"hash\":\"e2c417c858fe23e9439fa569a7a0f72a0ed08ee9\",\"time\":1765027695000,\"email\":\"1127699551@qq.com\",\"author\":\"mingwzh\",\"message\":\"build(docs): 初始化文档页面和文章内容\"}]},\"filePathRelative\":\"database/mysql-notes.md\",\"excerpt\":\"\\n<h2>索引优化</h2>\\n<h3>1. 什么是数据库索引？有什么作用？</h3>\\n<p>数据库索引是对数据库表中一列或多列的值进行排序的一种数据结构。它的主要作用是提高查询速度，类似于书籍的目录。通过使用索引，数据库可以快速定位到符合条件的记录，而无需扫描整个表。</p>\\n<p>优点：</p>\\n<ul>\\n<li>提高查询效率</li>\\n<li>加速表与表之间的连接</li>\\n<li>保证数据的唯一性（如唯一索引）</li>\\n</ul>\\n<p>缺点：</p>\\n<ul>\\n<li>占用额外的存储空间</li>\\n<li>降低写操作的性能（插入、更新、删除）</li>\\n<li>维护索引需要时间成本</li>\\n</ul>\"}")
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

export const themeData = JSON.parse("{\"logo\":\"/logo.svg\",\"navbar\":[\"/\",{\"text\":\"Article\",\"link\":\"/article/\"},{\"text\":\"BigData\",\"link\":\"/bigdata/\"},{\"text\":\"Cache\",\"link\":\"/cache/\"},{\"text\":\"Database\",\"link\":\"/database/\"},{\"text\":\"Java\",\"link\":\"/java/\"},{\"text\":\"MQ\",\"link\":\"/mq/\"},{\"text\":\"System\",\"link\":\"/system/\"},{\"text\":\"Category\",\"link\":\"/category/\"},{\"text\":\"Tag\",\"link\":\"/tag/\"},{\"text\":\"Timeline\",\"link\":\"/timeline/\"}],\"sidebar\":{\"/bigdata/\":[{\"text\":\"大数据\",\"children\":[\"/bigdata/\",\"/bigdata/hadoop-notes.md\",\"/bigdata/hbase-notes.md\",\"/bigdata/hive-notes.md\",\"/bigdata/flink-notes.md\",\"/bigdata/spark-notes.md\",\"/bigdata/time-series-data.md\"]}],\"/cache/\":[{\"text\":\"缓存\",\"children\":[\"/cache/redis-notes.md\"]}],\"/database/\":[{\"text\":\"数据库\",\"children\":[\"/database/mysql-notes.md\"]}],\"/java/\":[{\"text\":\"Java 基础\",\"children\":[\"/java/java-basic-interview.md\",\"/java/jmm-notes.md\",\"/java/jvm-notes.md\",\"/java/multithreading-interview.md\",\"/java/multithreading-notes.md\"]}],\"/mq/\":[{\"text\":\"消息队列\",\"children\":[\"/mq/kafka-notes.md\"]}],\"/system/\":[{\"text\":\"系统相关\",\"children\":[\"/system/brew-tutorial.md\",\"/system/linux-notes.md\",\"/system/nvm-tutorial.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

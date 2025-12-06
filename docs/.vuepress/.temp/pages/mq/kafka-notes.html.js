import comp from "/Users/mingwzh/IdeaProjects/wiki/PersonalWiki/docs/.vuepress/.temp/pages/mq/kafka-notes.html.vue"
const data = JSON.parse("{\"path\":\"/mq/kafka-notes.html\",\"title\":\"Kafka 面试题及答案\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Kafka 基础架构\",\"slug\":\"kafka-基础架构\",\"link\":\"#kafka-基础架构\",\"children\":[{\"level\":3,\"title\":\"1. Kafka的基本架构是什么？\",\"slug\":\"_1-kafka的基本架构是什么\",\"link\":\"#_1-kafka的基本架构是什么\",\"children\":[]},{\"level\":3,\"title\":\"2. Kafka如何保证消息的顺序性？\",\"slug\":\"_2-kafka如何保证消息的顺序性\",\"link\":\"#_2-kafka如何保证消息的顺序性\",\"children\":[]},{\"level\":3,\"title\":\"3. Kafka如何实现高可用性？\",\"slug\":\"_3-kafka如何实现高可用性\",\"link\":\"#_3-kafka如何实现高可用性\",\"children\":[]},{\"level\":3,\"title\":\"4. Kafka的ISR机制是什么？\",\"slug\":\"_4-kafka的isr机制是什么\",\"link\":\"#_4-kafka的isr机制是什么\",\"children\":[]},{\"level\":3,\"title\":\"5. Kafka如何处理消息丢失问题？\",\"slug\":\"_5-kafka如何处理消息丢失问题\",\"link\":\"#_5-kafka如何处理消息丢失问题\",\"children\":[]},{\"level\":3,\"title\":\"6. Kafka如何保证消息不被重复消费？\",\"slug\":\"_6-kafka如何保证消息不被重复消费\",\"link\":\"#_6-kafka如何保证消息不被重复消费\",\"children\":[]},{\"level\":3,\"title\":\"7. Kafka的零拷贝技术是什么？\",\"slug\":\"_7-kafka的零拷贝技术是什么\",\"link\":\"#_7-kafka的零拷贝技术是什么\",\"children\":[]},{\"level\":3,\"title\":\"8. Kafka为什么这么快？\",\"slug\":\"_8-kafka为什么这么快\",\"link\":\"#_8-kafka为什么这么快\",\"children\":[]},{\"level\":3,\"title\":\"9. Kafka如何进行扩容？\",\"slug\":\"_9-kafka如何进行扩容\",\"link\":\"#_9-kafka如何进行扩容\",\"children\":[]},{\"level\":3,\"title\":\"10. Kafka与RabbitMQ的区别是什么？\",\"slug\":\"_10-kafka与rabbitmq的区别是什么\",\"link\":\"#_10-kafka与rabbitmq的区别是什么\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"mq/kafka-notes.md\",\"excerpt\":\"\\n<h2>Kafka 基础架构</h2>\\n<h3>1. Kafka的基本架构是什么？</h3>\\n<p>Kafka是一个分布式流处理平台，基本架构包括以下几个核心组件：</p>\\n<ol>\\n<li><strong>Producer（生产者）</strong>：负责发布消息到Kafka Broker</li>\\n<li><strong>Consumer（消费者）</strong>：从Kafka Broker读取消息</li>\\n<li><strong>Broker（代理）</strong>：Kafka集群中的服务器节点</li>\\n<li><strong>Topic（主题）</strong>：消息类别，每条发布到Kafka集群的消息都有一个类别</li>\\n<li><strong>Partition（分区）</strong>：每个Topic可以分成多个Partition，提高扩展性和并行度</li>\\n<li><strong>Replica（副本）</strong>：每个Partition可以有多个副本，保证容错性</li>\\n<li><strong>Leader &amp; Follower</strong>：每个Partition的多个副本中有一个作为Leader，负责读写操作，其他作为Follower只负责数据同步</li>\\n</ol>\"}")
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

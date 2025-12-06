# Kafka 面试题及答案

## Kafka 基础架构

### 1. Kafka的基本架构是什么？

Kafka是一个分布式流处理平台，基本架构包括以下几个核心组件：

1. **Producer（生产者）**：负责发布消息到Kafka Broker
2. **Consumer（消费者）**：从Kafka Broker读取消息
3. **Broker（代理）**：Kafka集群中的服务器节点
4. **Topic（主题）**：消息类别，每条发布到Kafka集群的消息都有一个类别
5. **Partition（分区）**：每个Topic可以分成多个Partition，提高扩展性和并行度
6. **Replica（副本）**：每个Partition可以有多个副本，保证容错性
7. **Leader & Follower**：每个Partition的多个副本中有一个作为Leader，负责读写操作，其他作为Follower只负责数据同步

### 2. Kafka如何保证消息的顺序性？

1. 在一个Partition内部，消息是有序的
2. 如果要保证全局有序，只能给Topic设置一个Partition
3. 如果需要局部有序，可以按业务规则将相关消息发送到同一个Partition（例如通过key）

### 3. Kafka如何实现高可用性？

1. **副本机制**：每个Partition可以设置多个副本，分布在不同的Broker上
2. **ISR机制**：维护一个与Leader保持同步的副本列表（In-Sync Replicas）
3. **Leader选举**：当Leader失效时，Controller会选择ISR中的一个副本作为新的Leader
4. **Controller机制**：Kafka集群中有一个Broker作为Controller，负责管理分区状态和副本Leader选举

### 4. Kafka的ISR机制是什么？

ISR（In-Sync Replicas）指的是与Leader保持同步的副本集合。

工作机制：
- Leader维护一个与其同步的副本列表（ISR）
- 副本必须满足两个条件才能留在ISR中：
  1. 与Leader保持连接（在replica.lag.time.max.ms时间内有心跳）
  2. 延迟不能超过replica.lag.max.messages条消息
- 当副本不满足条件时会被移出ISR
- 只有ISR中的副本才有资格参与Leader选举

### 5. Kafka如何处理消息丢失问题？

可以从Producer、Broker、Consumer三个层面来看：

**Producer端**：
- 设置acks=all，确保消息被所有副本接收后再返回成功
- 设置retries参数，启用重试机制

**Broker端**：
- 设置min.insync.replicas参数，确保有足够的副本数
- 合理配置replication.factor，建议至少为3

**Consumer端**：
- 合理设置enable.auto.commit=false
- 手动提交offset，确保消息处理完成后才提交

### 6. Kafka如何保证消息不被重复消费？

1. **At most once**：设置enable.auto.commit=true，可能导致消息丢失但不会重复消费
2. **At least once**：设置enable.auto.commit=false，手动控制offset提交时机，可能出现重复消费
3. **Exactly once**：Kafka 0.11版本后支持幂等性生产和事务，可以实现恰好一次语义

具体做法：
- 幂等性生产：设置enable.idempotence=true
- 事务支持：使用Kafka事务API
- Consumer端幂等处理：业务逻辑保证幂等性

### 7. Kafka的零拷贝技术是什么？

Kafka利用操作系统的零拷贝技术（Zero-Copy）来提高性能。

传统方式的数据传输需要经过多次内存拷贝：
1. 从磁盘读取到内核缓冲区
2. 从内核缓冲区拷贝到用户空间缓冲区
3. 从用户空间缓冲区拷贝回内核socket缓冲区
4. 发送到网卡

而零拷贝通过sendfile系统调用直接将数据从磁盘文件描述符传输到socket描述符，避免了用户态和内核态之间的数据拷贝，大大提高了性能。

### 8. Kafka为什么这么快？

Kafka之所以性能优秀，主要有以下几个原因：

1. **顺序读写**：Kafka将消息顺序写入磁盘，充分利用磁盘的顺序读写性能
2. **零拷贝技术**：使用sendfile系统调用减少数据拷贝和上下文切换
3. **页缓存**：大量使用操作系统页缓存而非JVM堆内存
4. **批量发送**：支持批量发送消息，减少网络开销
5. **数据压缩**：支持多种压缩算法减少网络传输和磁盘IO
6. **分区并行处理**：通过分区实现水平扩展和并行处理

### 9. Kafka如何进行扩容？

1. **增加Broker**：直接添加新的Broker节点到集群
2. **重新分配Partition**：使用kafka-reassign-partitions.sh工具重新分配分区
3. **数据迁移**：Kafka会自动在后台进行数据迁移
4. **平衡Leader分布**：确保Leader均匀分布在各个Broker上

注意事项：
- 扩容过程中会有网络和磁盘IO开销
- 需要合理规划分区数量，避免后续频繁扩容
- 建议预留一定的容量空间

### 10. Kafka与RabbitMQ的区别是什么？

| 特性 | Kafka | RabbitMQ |
|------|-------|----------|
| 模型 | 发布订阅模型，基于topic | AMQP协议，多种消息模式 |
| 吞吐量 | 高吞吐，适合大数据场景 | 中等吞吐 |
| 消息持久化 | 默认持久化到磁盘 | 可选持久化 |
| 消费语义 | 支持exactly-once | 支持at-least-once/at-most-once |
| 消息确认 | offset机制 | ACK机制 |
| 适用场景 | 日志收集、流处理 | 传统消息队列、任务队列 |
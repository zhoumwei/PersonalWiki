# Redis 面试题及答案

## 哨兵模式

### 1. Redis哨兵（Sentinel）是什么？有什么作用？

Redis Sentinel是Redis官方提供的高可用解决方案。它是一个分布式系统，用于监控Redis主从节点的运行状态，并在主节点故障时自动进行故障转移。

主要功能：
- 监控：持续检查主从节点是否正常工作
- 通知：当被监控的Redis实例出现问题时，可以通过API通知管理员或其他应用程序
- 自动故障转移：当主节点不能正常工作时，Sentinel会开始自动故障转移操作，将某个从节点提升为主节点
- 配置提供者：客户端连接到Sentinel获取当前Redis主节点地址

### 2. Redis哨兵的工作原理是什么？

1. 多个Sentinel进程协同工作，共同维护主从节点的状态
2. 每个Sentinel定期向主从节点发送PING命令检测其存活状态
3. 当主节点在指定时间内无响应时，Sentinel会将其标记为主观下线
4. 当多数Sentinel都认为主节点主观下线时，则标记为主节点客观下线
5. Sentinel选举出一个领导者负责故障转移
6. 将其中一个从节点提升为新的主节点
7. 让其他从节点复制新的主节点
8. 更新相关的配置信息

### 3. Redis哨兵的配置需要注意哪些要点？

1. 至少需要3个Sentinel实例才能保证健壮性
2. 各Sentinel实例应该分布在不同的物理机器上
3. quorum值设置合理，一般为N/2+1（N为Sentinel总数）
4. down-after-milliseconds参数需根据网络环境调整
5. parallel-syncs参数控制同时进行同步的从节点数量

## 集群模式

### 4. Redis Cluster的原理是什么？

Redis Cluster是Redis提供的分布式解决方案，采用去中心化的架构。

核心概念：
- 数据分片：使用哈希槽（hash slot）机制，共16384个槽位
- 节点间通信：通过Gossip协议交换状态信息
- 主从复制：每个分片可以有多个副本以提高可用性
- 故障检测与恢复：基于多数派原则判断节点状态

### 5. Redis Cluster如何实现数据分布？

Redis Cluster采用哈希槽（hash slot）的方式实现数据分布：
1. Redis Cluster将所有数据划分为16384个槽(slot)
2. 每个键通过CRC16算法计算得到一个哈希值，再对16384取模确定对应的槽位
3. 每个节点负责一部分槽位，通过配置将槽位分配给不同节点
4. 客户端可以直接连接任意节点，节点会指引客户端转向正确的节点

### 6. Redis Cluster如何处理故障转移？

1. 节点通过ping/pong消息交换状态信息
2. 当主节点在指定时间内无响应，从节点会标记其为pfail（可能失效）
3. 当半数以上持有该主节点的从节点也认为其失效时，标记为fail（确认失效）
4. 从节点发起选举，获得大多数投票的从节点成为新的主节点
5. 新主节点接管原主节点的槽位，集群继续对外服务

## 缓存设计

### 7. 缓存穿透、缓存击穿、缓存雪崩分别是什么？如何解决？

**缓存穿透**：
现象：查询一个不存在的数据，由于缓存没有命中，请求落到数据库，数据库也没有该数据，导致每次请求都会查询数据库。
解决方案：
- 布隆过滤器：在缓存之前加布隆过滤器，快速判断一个key是否存在
- 缓存空对象：即使数据不存在，也在缓存中存储一个空值，但要设置较短的过期时间

**缓存击穿**：
现象：热点key在过期的一瞬间，大量请求涌入，直接打到数据库上。
解决方案：
- 设置热点数据永不过期
- 加互斥锁：当缓存失效时，只让一个线程去加载数据，其他线程等待

**缓存雪崩**：
现象：大量缓存在同一时间失效，或者Redis实例宕机，导致大量请求直接打到数据库。
解决方案：
- 设置不同的过期时间：给缓存的过期时间加上随机值
- 限流降级：在应用层做限流措施
- 构建高可用架构：使用Redis集群或主从架构

### 8. Redis的淘汰策略有哪些？

Redis提供了多种内存淘汰策略：
1. **noeviction**：默认策略，不淘汰任何数据，内存不足时返回错误
2. **allkeys-lru**：从所有key中使用LRU算法淘汰最近最少使用的key
3. **volatile-lru**：仅从设置了过期时间的key中使用LRU算法淘汰
4. **allkeys-random**：从所有key中随机淘汰
5. **volatile-random**：仅从设置了过期时间的key中随机淘汰
6. **volatile-ttl**：仅从设置了过期时间的key中淘汰TTL最小的key
7. **allkeys-lfu**：从所有key中使用LFU算法淘汰最不经常使用的key
8. **volatile-lfu**：仅从设置了过期时间的key中使用LFU算法淘汰

### 9. Redis的持久化机制有哪些？各有什么优缺点？

**RDB（Redis Database）**：
优点：
- 文件紧凑，适合备份和灾难恢复
- 恢复大数据集速度快
- 对性能影响较小

缺点：
- 数据安全性较低，容易丢失数据
- fork子进程消耗内存

**AOF（Append Only File）**：
优点：
- 数据安全性更高，最多丢失1秒的数据（在每秒fsync模式下）
- 可读性强，便于分析和修复

缺点：
- 文件体积通常比RDB大
- 恢复速度慢于RDB
- 性能可能受到fsync策略的影响

### 10. 如何设计一个高并发的缓存架构？

1. **选择合适的缓存更新策略**：
   - Cache Aside Pattern（旁路缓存）：应用代码管理缓存和数据库
   - Read/Write Through Pattern：由缓存组件负责管理数据加载
   - Write Behind Pattern：异步批量写入数据库

2. **合理设置缓存粒度**：
   - 粗粒度缓存：减少网络开销，但可能导致数据冗余
   - 细粒度缓存：精确控制，但增加网络开销

3. **使用多级缓存**：
   - 本地缓存（如Caffeine）+ 分布式缓存（Redis）
   - 提高访问速度，减轻网络压力

4. **构建高可用架构**：
   - 使用Redis集群或哨兵模式
   - 合理规划分片策略
   - 设置合适的主从复制机制

5. **监控和运维**：
   - 实时监控缓存命中率
   - 设置告警机制
   - 定期清理无效缓存

## Redis 核心知识点笔记

## 概述

Redis（Remote Dictionary Server）是一个开源的、基于键值对的内存数据结构存储系统，可以用作数据库、缓存和消息中间件。它支持多种数据结构，如字符串(String)、哈希(Hash)、列表(List)、集合(Set)、有序集合(Sorted Set)等。

## 核心特性

### 内存存储
Redis将所有数据存储在内存中，因此具有极高的读写性能，通常每秒可以处理超过10万次读写操作。

### 持久化机制
虽然数据存储在内存中，但Redis提供了两种持久化机制：
1. **RDB（Redis Database Backup）**：在指定时间间隔内生成数据快照
2. **AOF（Append Only File）**：记录每次写操作命令，通过重放命令恢复数据

### 单线程模型
Redis采用单线程处理客户端请求，避免了多线程的上下文切换开销，同时也保证了操作的原子性。

## 数据类型详解

### String（字符串）
最基本的数据类型，可以存储字符串、整数或浮点数。

```redis
# 设置字符串
SET name "John"

# 获取字符串
GET name

# 数值操作
INCR counter
DECR counter
INCRBY counter 10
```

### Hash（哈希）
键值对集合，特别适合存储对象。

```redis
# 设置哈希字段
HSET user:1000 name "John"
HSET user:1000 email "john@example.com"

# 获取哈希字段
HGET user:1000 name
HGETALL user:1000

# 批量设置
HMSET user:1001 name "Jane" email "jane@example.com"
```

### List（列表）
双向链表实现，可以从两端插入或弹出元素。

```redis
# 从左侧插入
LPUSH mylist "item1"
LPUSH mylist "item2"

# 从右侧插入
RPUSH mylist "item3"

# 弹出元素
LPOP mylist
RPOP mylist

# 获取列表范围
LRANGE mylist 0 -1
```

### Set（集合）
无序且不重复的字符串集合。

```redis
# 添加元素
SADD myset "item1"
SADD myset "item2"
SADD myset "item3"

# 检查元素是否存在
SISMEMBER myset "item1"

# 获取所有元素
SMEMBERS myset

# 集合运算
SINTER set1 set2  # 交集
SUNION set1 set2  # 并集
SDIFF set1 set2   # 差集
```

### Sorted Set（有序集合）
每个元素关联一个分数(score)，根据分数自动排序。

```redis
# 添加元素
ZADD leaderboard 100 "player1"
ZADD leaderboard 200 "player2"
ZADD leaderboard 150 "player3"

# 获取排名
ZRANK leaderboard "player2"

# 获取范围内元素
ZRANGE leaderboard 0 -1 WITHSCORES

# 按分数获取元素
ZREVRANGEBYSCORE leaderboard +inf 150
```

## 高级特性

### 发布订阅
Redis实现了发布订阅模式，可用于消息传递。

```redis
# 订阅频道
SUBSCRIBE news

# 发布消息
PUBLISH news "Hello World!"
```

### 事务
Redis支持简单的事务操作，通过MULTI、EXEC、DISCARD和WATCH命令实现。

```redis
MULTI
SET key1 "value1"
SET key2 "value2"
EXEC
```

### Lua脚本
可以使用Lua脚本在服务器端原子性地执行多个命令。

```redis
EVAL "return {KEYS[1],ARGV[1]}" 1 "key" "hello"
```

### Pipeline
客户端可以通过管道一次发送多个命令，减少网络往返时间。

## 部署与配置

### 主从复制
Redis支持主从复制，可以实现读写分离和数据冗余。

```bash
# 从节点配置
slaveof master_ip master_port
```

### 哨兵模式
Sentinel用于监控Redis实例，实现自动故障转移。

### 集群模式
Redis Cluster提供数据分片和高可用性。

## 性能优化

### 内存优化
1. **使用合适的数据结构**：例如用Hash代替多个String键
2. **启用压缩**：对大型值启用LZF压缩
3. **设置过期时间**：使用EXPIRE命令自动删除不需要的数据

### 配置优化
```conf
# 最大内存限制
maxmemory 2gb

# 内存淘汰策略
maxmemory-policy allkeys-lru

# 启用AOF持久化
appendonly yes

# AOF同步策略
appendfsync everysec
```
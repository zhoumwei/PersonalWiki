# HBase学习笔记

## 什么是HBase

HBase是一个分布式的、面向列的开源数据库，是Google Bigtable的开源实现。它是Hadoop生态系统的一部分，提供了类似于Google Bigtable的海量数据存储能力。

## HBase的特点

### 1. 高可靠性
- 基于HDFS存储，天然具备高可靠性
- 数据自动复制和故障恢复

### 2. 高性能
- 基于LSM树结构，写入性能优异
- 支持随机读写

### 3. 可伸缩性
- 支持水平扩展，可以轻松增加节点
- 自动负载均衡

### 4. 面向列存储
- 列式存储结构，适合稀疏数据
- 支持动态增加列族和列

### 5. 强一致性
- 保证数据的一致性
- ACID特性支持

## HBase数据模型

### 1. 表(Table)
- HBase中数据存储的基本单位

### 2. 行(Row)
- 每一行都有一个唯一的RowKey
- RowKey按字典序排序

### 3. 列族(Column Family)
- 列的集合，物理上存储在一起
- 需要在创建表时定义

### 4. 列限定符(Column Qualifier)
- 列族中的具体列
- 可以动态添加

### 5. 时间戳(Timestamp)
- 每个单元格数据的版本标识
- 默认使用系统时间

### 6. 单元格(Cell)
- 数据存储的最小单位
- 由(rowkey, column family, column qualifier, timestamp)唯一确定

## HBase架构

### 1. HMaster
- 负责表和Region的管理
- 负责RegionServer的负载均衡
- 处理表的元数据变更

### 2. RegionServer
- 负责实际的数据读写请求
- 管理多个Region
- 与HDFS交互进行数据存储

### 3. Region
- 表的水平切分单元
- 每个Region包含一段连续的RowKey范围
- 动态分裂和合并

### 4. ZooKeeper
- 协调服务，维护集群状态
- Master选举
- RegionServer状态监控

### 5. HDFS
- 底层分布式文件系统
- 存储实际的数据和WAL日志

## HBase读写流程

### 写入流程
1. 客户端请求发送到ZooKeeper获取Meta表位置
2. 获取目标Region所在RegionServer
3. 数据先写入WAL(Write-Ahead Log)
4. 数据写入MemStore
5. MemStore满后Flush到HFile存储到HDFS

### 读取流程
1. 客户端请求发送到ZooKeeper获取Meta表位置
2. 查询Meta表定位目标Region
3. 访问对应的RegionServer
4. 先从MemStore查找
5. 再从BlockCache查找
6. 最后从HFile查找

## HBase与传统关系型数据库的区别

| 特性 | HBase | 关系型数据库 |
|------|-------|-------------|
| 数据模型 | 键值对、列族 | 关系模型 |
| 存储方式 | 列式存储 | 行式存储 |
| Schema | 灵活，可动态添加列 | 固定Schema |
| 索引 | 主要通过RowKey | 支持多种索引 |
| 事务 | 支持单行事务 | 支持ACID事务 |
| 查询语言 | API调用 | SQL |
| 扩展性 | 水平扩展 | 垂直扩展为主 |

## HBase应用场景

1. **海量数据存储**
   - 日志数据存储
   - 传感器数据
   - 社交媒体数据

2. **实时查询**
   - 用户画像查询
   - 商品信息查询
   - 实时推荐系统

3. **时间序列数据**
   - 监控数据存储
   - 物联网设备数据

4. **内容管理**
   - CMS系统
   - 消息系统

## HBase性能优化

### 1. RowKey设计
- 避免热点问题
- 考虑查询模式
- 保持RowKey简短

### 2. 列族设计
- 合理划分列族
- 相同访问模式的数据放在同一列族

### 3. Region管理
- 预分区避免频繁分裂
- 合理设置Region大小

### 4. 内存优化
- 调整MemStore大小
- 合理配置BlockCache

### 5. 读写优化
- 批量操作提升性能
- 合理使用过滤器
- 启用压缩

## HBase常用操作

### Shell命令
```bash
# 创建表
create 'test_table', 'cf1', 'cf2'

# 插入数据
put 'test_table', 'row1', 'cf1:name', 'John'

# 查询数据
get 'test_table', 'row1'

# 扫描表
scan 'test_table'

# 删除数据
delete 'test_table', 'row1', 'cf1:name'
```

### Java API示例
```java
Configuration config = HBaseConfiguration.create();
Connection connection = ConnectionFactory.createConnection(config);
Table table = connection.getTable(TableName.valueOf("test_table"));

// Put操作
Put put = new Put(Bytes.toBytes("row1"));
put.addColumn(Bytes.toBytes("cf1"), Bytes.toBytes("name"), Bytes.toBytes("John"));
table.put(put);

// Get操作
Get get = new Get(Bytes.toBytes("row1"));
Result result = table.get(get);
byte[] value = result.getValue(Bytes.toBytes("cf1"), Bytes.toBytes("name"));
```

HBase作为一个分布式的NoSQL数据库，在处理海量数据方面具有独特的优势，特别适合需要高并发读写的场景。
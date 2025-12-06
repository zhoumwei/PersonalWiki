# Hadoop学习笔记

## 什么是Hadoop

Hadoop是一个开源的分布式计算框架，用于存储和处理大规模数据集。它由Apache基金会开发，旨在从单个服务器扩展到数千台机器，每台机器都提供本地计算和存储。

## Hadoop核心组件

### 1. HDFS (Hadoop Distributed File System)

HDFS是Hadoop的存储单元，具有以下特点：
- 分布式文件系统
- 高容错性
- 高吞吐量
- 适合大规模数据集的应用

#### HDFS架构
- NameNode: 管理文件系统的命名空间和客户端对文件的访问
- DataNode: 存储实际的数据块
- Secondary NameNode: 定期合并fsimage和edits日志文件

### 2. MapReduce

MapReduce是Hadoop的计算单元，是一种编程模型，用于大规模数据集的并行处理。

#### MapReduce工作流程
1. Map阶段：将输入数据分解成独立的片段并进行处理
2. Shuffle阶段：将Map输出的数据进行排序和分组
3. Reduce阶段：对分组后的数据进行汇总处理

### 3. YARN (Yet Another Resource Negotiator)

YARN是Hadoop的资源管理器，负责管理集群资源并调度应用程序。

#### YARN组件
- ResourceManager: 全局资源管理器
- NodeManager: 每个节点上的资源和任务管理器
- ApplicationMaster: 每个应用程序的主控程序

## Hadoop生态系统

Hadoop生态系统包含多个相关的开源项目：

- Pig: 数据流语言和执行框架
- Hive: 数据仓库工具，提供SQL-like查询功能
- HBase: 分布式、可扩展的NoSQL数据库
- ZooKeeper: 分布式协调服务
- Sqoop: 在Hadoop和关系型数据库之间传输数据
- Flume: 收集、聚合和移动大量日志数据的服务

## Hadoop应用场景

1. 数据存储和备份
2. 日志处理和分析
3. 数据挖掘和机器学习
4. 推荐系统
5. 搜索引擎
6. 商业智能分析

## Hadoop优势

- 高可靠性：数据自动保存多个副本
- 高扩展性：可以扩展到数千个节点
- 高效性：在MapReduce下，数据处理速度很快
- 高容错性：能够自动地将失败的任务重新分配
- 低成本：基于普通商用硬件构建

## Hadoop局限性

- 不适合低延迟数据访问
- 不能高效存储大量小文件
- 不支持随机实时读写
- 增加了系统的复杂性
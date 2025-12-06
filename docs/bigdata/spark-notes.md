# Apache Spark学习笔记

## 什么是Spark

Apache Spark是一个开源的统一分析引擎，用于大规模数据处理。它提供了比MapReduce更高效的内存计算能力，适用于批处理、流处理、机器学习和图计算等多种场景。

## Spark核心特性

### 1. 速度快
- 基于内存计算，比MapReduce快100倍
- 基于磁盘计算，比MapReduce快10倍

### 2. 易用性
- 支持多种编程语言：Scala、Java、Python、R
- 提供丰富的高级API

### 3. 通用性
- 支持批处理、流处理、机器学习、图计算等多种计算模式

### 4. 组件丰富
- Spark SQL：结构化数据处理
- Spark Streaming：实时流处理
- MLlib：机器学习库
- GraphX：图计算框架

## Spark核心概念

### RDD (Resilient Distributed Dataset)
弹性分布式数据集，是Spark中最基本的数据抽象，具有以下特点：
- 弹性：容错性
- 分布式：数据分布在多个节点上
- 数据集：本质是一个集合

### DAG (Directed Acyclic Graph)
有向无环图，描述RDD之间的依赖关系，决定任务的执行计划。

### Stage
作业调度的基本单位，根据宽窄依赖划分Stage。

### Task
任务执行的基本单位，在Executor上运行。

## Spark运行架构

### 核心组件

1. **Driver**
   - 运行main函数并创建SparkContext
   - 将任务分解为Task并调度到Executor执行
   - 协调整个应用程序的运行

2. **Executor**
   - 在Worker Node上运行
   - 执行Task并返回结果
   - 存储RDD的某个partition

3. **Cluster Manager**
   - Standalone：Spark自带的资源管理器
   - YARN：Hadoop的资源管理器
   - Mesos：Apache Mesos

## Spark运行流程

1. Driver程序启动，创建SparkContext
2. SparkContext向Cluster Manager申请资源
3. Cluster Manager分配资源并启动Executor
4. Executor向Driver注册
5. Driver将程序转化为Tasks发送给Executor执行
6. Executor执行Task并将结果返回给Driver

## Spark SQL

Spark SQL是Spark用来处理结构化数据的模块，主要特点包括：
- 支持SQL查询
- 支持DataFrame和DataSet API
- 与Hive集成
- 支持多种数据源（JSON、Parquet、JDBC等）

## Spark Streaming

Spark Streaming是Spark提供的实时流处理框架，采用微批处理模式：
- 将实时输入数据流以时间片为单位进行分割
- 每个时间片的数据转换为RDD进行处理
- 提供高吞吐量和容错能力

## 性能优化

### 1. 数据序列化
- 使用Kryo序列化器替代Java默认序列化器

### 2. 内存管理
- 合理设置Executor内存大小
- 使用缓存机制（cache/persist）

### 3. 并行度调节
- 设置合适的分区数
- 控制并行任务数量

### 4. 数据本地性
- 尽量让计算靠近数据
- 避免大量的网络传输

## 应用场景

1. **数据清洗和ETL**：处理大量原始数据
2. **实时分析**：用户行为分析、点击流分析
3. **机器学习**：推荐系统、预测分析
4. **图计算**：社交网络分析、推荐算法
5. **交互式查询**：即席查询、报表生成

## 与其他大数据框架对比

| 特性 | Spark | MapReduce |
|------|-------|-----------|
| 计算模型 | 内存计算 | 磁盘计算 |
| 速度 | 快(100x) | 慢 |
| 适用场景 | 迭代计算、实时处理 | 批处理 |
| 编程复杂度 | 简单 | 复杂 |

Spark已经成为大数据处理的事实标准之一，特别是在需要迭代计算和实时处理的场景中表现出色。
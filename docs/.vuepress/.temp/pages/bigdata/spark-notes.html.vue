<template><div><h1 id="apache-spark学习笔记" tabindex="-1"><a class="header-anchor" href="#apache-spark学习笔记"><span>Apache Spark学习笔记</span></a></h1>
<h2 id="什么是spark" tabindex="-1"><a class="header-anchor" href="#什么是spark"><span>什么是Spark</span></a></h2>
<p>Apache Spark是一个开源的统一分析引擎，用于大规模数据处理。它提供了比MapReduce更高效的内存计算能力，适用于批处理、流处理、机器学习和图计算等多种场景。</p>
<h2 id="spark核心特性" tabindex="-1"><a class="header-anchor" href="#spark核心特性"><span>Spark核心特性</span></a></h2>
<h3 id="_1-速度快" tabindex="-1"><a class="header-anchor" href="#_1-速度快"><span>1. 速度快</span></a></h3>
<ul>
<li>基于内存计算，比MapReduce快100倍</li>
<li>基于磁盘计算，比MapReduce快10倍</li>
</ul>
<h3 id="_2-易用性" tabindex="-1"><a class="header-anchor" href="#_2-易用性"><span>2. 易用性</span></a></h3>
<ul>
<li>支持多种编程语言：Scala、Java、Python、R</li>
<li>提供丰富的高级API</li>
</ul>
<h3 id="_3-通用性" tabindex="-1"><a class="header-anchor" href="#_3-通用性"><span>3. 通用性</span></a></h3>
<ul>
<li>支持批处理、流处理、机器学习、图计算等多种计算模式</li>
</ul>
<h3 id="_4-组件丰富" tabindex="-1"><a class="header-anchor" href="#_4-组件丰富"><span>4. 组件丰富</span></a></h3>
<ul>
<li>Spark SQL：结构化数据处理</li>
<li>Spark Streaming：实时流处理</li>
<li>MLlib：机器学习库</li>
<li>GraphX：图计算框架</li>
</ul>
<h2 id="spark核心概念" tabindex="-1"><a class="header-anchor" href="#spark核心概念"><span>Spark核心概念</span></a></h2>
<h3 id="rdd-resilient-distributed-dataset" tabindex="-1"><a class="header-anchor" href="#rdd-resilient-distributed-dataset"><span>RDD (Resilient Distributed Dataset)</span></a></h3>
<p>弹性分布式数据集，是Spark中最基本的数据抽象，具有以下特点：</p>
<ul>
<li>弹性：容错性</li>
<li>分布式：数据分布在多个节点上</li>
<li>数据集：本质是一个集合</li>
</ul>
<h3 id="dag-directed-acyclic-graph" tabindex="-1"><a class="header-anchor" href="#dag-directed-acyclic-graph"><span>DAG (Directed Acyclic Graph)</span></a></h3>
<p>有向无环图，描述RDD之间的依赖关系，决定任务的执行计划。</p>
<h3 id="stage" tabindex="-1"><a class="header-anchor" href="#stage"><span>Stage</span></a></h3>
<p>作业调度的基本单位，根据宽窄依赖划分Stage。</p>
<h3 id="task" tabindex="-1"><a class="header-anchor" href="#task"><span>Task</span></a></h3>
<p>任务执行的基本单位，在Executor上运行。</p>
<h2 id="spark运行架构" tabindex="-1"><a class="header-anchor" href="#spark运行架构"><span>Spark运行架构</span></a></h2>
<h3 id="核心组件" tabindex="-1"><a class="header-anchor" href="#核心组件"><span>核心组件</span></a></h3>
<ol>
<li>
<p><strong>Driver</strong></p>
<ul>
<li>运行main函数并创建SparkContext</li>
<li>将任务分解为Task并调度到Executor执行</li>
<li>协调整个应用程序的运行</li>
</ul>
</li>
<li>
<p><strong>Executor</strong></p>
<ul>
<li>在Worker Node上运行</li>
<li>执行Task并返回结果</li>
<li>存储RDD的某个partition</li>
</ul>
</li>
<li>
<p><strong>Cluster Manager</strong></p>
<ul>
<li>Standalone：Spark自带的资源管理器</li>
<li>YARN：Hadoop的资源管理器</li>
<li>Mesos：Apache Mesos</li>
</ul>
</li>
</ol>
<h2 id="spark运行流程" tabindex="-1"><a class="header-anchor" href="#spark运行流程"><span>Spark运行流程</span></a></h2>
<ol>
<li>Driver程序启动，创建SparkContext</li>
<li>SparkContext向Cluster Manager申请资源</li>
<li>Cluster Manager分配资源并启动Executor</li>
<li>Executor向Driver注册</li>
<li>Driver将程序转化为Tasks发送给Executor执行</li>
<li>Executor执行Task并将结果返回给Driver</li>
</ol>
<h2 id="spark-sql" tabindex="-1"><a class="header-anchor" href="#spark-sql"><span>Spark SQL</span></a></h2>
<p>Spark SQL是Spark用来处理结构化数据的模块，主要特点包括：</p>
<ul>
<li>支持SQL查询</li>
<li>支持DataFrame和DataSet API</li>
<li>与Hive集成</li>
<li>支持多种数据源（JSON、Parquet、JDBC等）</li>
</ul>
<h2 id="spark-streaming" tabindex="-1"><a class="header-anchor" href="#spark-streaming"><span>Spark Streaming</span></a></h2>
<p>Spark Streaming是Spark提供的实时流处理框架，采用微批处理模式：</p>
<ul>
<li>将实时输入数据流以时间片为单位进行分割</li>
<li>每个时间片的数据转换为RDD进行处理</li>
<li>提供高吞吐量和容错能力</li>
</ul>
<h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h2>
<h3 id="_1-数据序列化" tabindex="-1"><a class="header-anchor" href="#_1-数据序列化"><span>1. 数据序列化</span></a></h3>
<ul>
<li>使用Kryo序列化器替代Java默认序列化器</li>
</ul>
<h3 id="_2-内存管理" tabindex="-1"><a class="header-anchor" href="#_2-内存管理"><span>2. 内存管理</span></a></h3>
<ul>
<li>合理设置Executor内存大小</li>
<li>使用缓存机制（cache/persist）</li>
</ul>
<h3 id="_3-并行度调节" tabindex="-1"><a class="header-anchor" href="#_3-并行度调节"><span>3. 并行度调节</span></a></h3>
<ul>
<li>设置合适的分区数</li>
<li>控制并行任务数量</li>
</ul>
<h3 id="_4-数据本地性" tabindex="-1"><a class="header-anchor" href="#_4-数据本地性"><span>4. 数据本地性</span></a></h3>
<ul>
<li>尽量让计算靠近数据</li>
<li>避免大量的网络传输</li>
</ul>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2>
<ol>
<li><strong>数据清洗和ETL</strong>：处理大量原始数据</li>
<li><strong>实时分析</strong>：用户行为分析、点击流分析</li>
<li><strong>机器学习</strong>：推荐系统、预测分析</li>
<li><strong>图计算</strong>：社交网络分析、推荐算法</li>
<li><strong>交互式查询</strong>：即席查询、报表生成</li>
</ol>
<h2 id="与其他大数据框架对比" tabindex="-1"><a class="header-anchor" href="#与其他大数据框架对比"><span>与其他大数据框架对比</span></a></h2>
<table>
<thead>
<tr>
<th>特性</th>
<th>Spark</th>
<th>MapReduce</th>
</tr>
</thead>
<tbody>
<tr>
<td>计算模型</td>
<td>内存计算</td>
<td>磁盘计算</td>
</tr>
<tr>
<td>速度</td>
<td>快(100x)</td>
<td>慢</td>
</tr>
<tr>
<td>适用场景</td>
<td>迭代计算、实时处理</td>
<td>批处理</td>
</tr>
<tr>
<td>编程复杂度</td>
<td>简单</td>
<td>复杂</td>
</tr>
</tbody>
</table>
<p>Spark已经成为大数据处理的事实标准之一，特别是在需要迭代计算和实时处理的场景中表现出色。</p>
</div></template>



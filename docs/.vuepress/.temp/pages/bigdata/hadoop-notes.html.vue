<template><div><h1 id="hadoop学习笔记" tabindex="-1"><a class="header-anchor" href="#hadoop学习笔记"><span>Hadoop学习笔记</span></a></h1>
<h2 id="什么是hadoop" tabindex="-1"><a class="header-anchor" href="#什么是hadoop"><span>什么是Hadoop</span></a></h2>
<p>Hadoop是一个开源的分布式计算框架，用于存储和处理大规模数据集。它由Apache基金会开发，旨在从单个服务器扩展到数千台机器，每台机器都提供本地计算和存储。</p>
<h2 id="hadoop核心组件" tabindex="-1"><a class="header-anchor" href="#hadoop核心组件"><span>Hadoop核心组件</span></a></h2>
<h3 id="_1-hdfs-hadoop-distributed-file-system" tabindex="-1"><a class="header-anchor" href="#_1-hdfs-hadoop-distributed-file-system"><span>1. HDFS (Hadoop Distributed File System)</span></a></h3>
<p>HDFS是Hadoop的存储单元，具有以下特点：</p>
<ul>
<li>分布式文件系统</li>
<li>高容错性</li>
<li>高吞吐量</li>
<li>适合大规模数据集的应用</li>
</ul>
<h4 id="hdfs架构" tabindex="-1"><a class="header-anchor" href="#hdfs架构"><span>HDFS架构</span></a></h4>
<ul>
<li>NameNode: 管理文件系统的命名空间和客户端对文件的访问</li>
<li>DataNode: 存储实际的数据块</li>
<li>Secondary NameNode: 定期合并fsimage和edits日志文件</li>
</ul>
<h3 id="_2-mapreduce" tabindex="-1"><a class="header-anchor" href="#_2-mapreduce"><span>2. MapReduce</span></a></h3>
<p>MapReduce是Hadoop的计算单元，是一种编程模型，用于大规模数据集的并行处理。</p>
<h4 id="mapreduce工作流程" tabindex="-1"><a class="header-anchor" href="#mapreduce工作流程"><span>MapReduce工作流程</span></a></h4>
<ol>
<li>Map阶段：将输入数据分解成独立的片段并进行处理</li>
<li>Shuffle阶段：将Map输出的数据进行排序和分组</li>
<li>Reduce阶段：对分组后的数据进行汇总处理</li>
</ol>
<h3 id="_3-yarn-yet-another-resource-negotiator" tabindex="-1"><a class="header-anchor" href="#_3-yarn-yet-another-resource-negotiator"><span>3. YARN (Yet Another Resource Negotiator)</span></a></h3>
<p>YARN是Hadoop的资源管理器，负责管理集群资源并调度应用程序。</p>
<h4 id="yarn组件" tabindex="-1"><a class="header-anchor" href="#yarn组件"><span>YARN组件</span></a></h4>
<ul>
<li>ResourceManager: 全局资源管理器</li>
<li>NodeManager: 每个节点上的资源和任务管理器</li>
<li>ApplicationMaster: 每个应用程序的主控程序</li>
</ul>
<h2 id="hadoop生态系统" tabindex="-1"><a class="header-anchor" href="#hadoop生态系统"><span>Hadoop生态系统</span></a></h2>
<p>Hadoop生态系统包含多个相关的开源项目：</p>
<ul>
<li>Pig: 数据流语言和执行框架</li>
<li>Hive: 数据仓库工具，提供SQL-like查询功能</li>
<li>HBase: 分布式、可扩展的NoSQL数据库</li>
<li>ZooKeeper: 分布式协调服务</li>
<li>Sqoop: 在Hadoop和关系型数据库之间传输数据</li>
<li>Flume: 收集、聚合和移动大量日志数据的服务</li>
</ul>
<h2 id="hadoop应用场景" tabindex="-1"><a class="header-anchor" href="#hadoop应用场景"><span>Hadoop应用场景</span></a></h2>
<ol>
<li>数据存储和备份</li>
<li>日志处理和分析</li>
<li>数据挖掘和机器学习</li>
<li>推荐系统</li>
<li>搜索引擎</li>
<li>商业智能分析</li>
</ol>
<h2 id="hadoop优势" tabindex="-1"><a class="header-anchor" href="#hadoop优势"><span>Hadoop优势</span></a></h2>
<ul>
<li>高可靠性：数据自动保存多个副本</li>
<li>高扩展性：可以扩展到数千个节点</li>
<li>高效性：在MapReduce下，数据处理速度很快</li>
<li>高容错性：能够自动地将失败的任务重新分配</li>
<li>低成本：基于普通商用硬件构建</li>
</ul>
<h2 id="hadoop局限性" tabindex="-1"><a class="header-anchor" href="#hadoop局限性"><span>Hadoop局限性</span></a></h2>
<ul>
<li>不适合低延迟数据访问</li>
<li>不能高效存储大量小文件</li>
<li>不支持随机实时读写</li>
<li>增加了系统的复杂性</li>
</ul>
</div></template>



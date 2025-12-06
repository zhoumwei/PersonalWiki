<template><div><h1 id="hbase学习笔记" tabindex="-1"><a class="header-anchor" href="#hbase学习笔记"><span>HBase学习笔记</span></a></h1>
<h2 id="什么是hbase" tabindex="-1"><a class="header-anchor" href="#什么是hbase"><span>什么是HBase</span></a></h2>
<p>HBase是一个分布式的、面向列的开源数据库，是Google Bigtable的开源实现。它是Hadoop生态系统的一部分，提供了类似于Google Bigtable的海量数据存储能力。</p>
<h2 id="hbase的特点" tabindex="-1"><a class="header-anchor" href="#hbase的特点"><span>HBase的特点</span></a></h2>
<h3 id="_1-高可靠性" tabindex="-1"><a class="header-anchor" href="#_1-高可靠性"><span>1. 高可靠性</span></a></h3>
<ul>
<li>基于HDFS存储，天然具备高可靠性</li>
<li>数据自动复制和故障恢复</li>
</ul>
<h3 id="_2-高性能" tabindex="-1"><a class="header-anchor" href="#_2-高性能"><span>2. 高性能</span></a></h3>
<ul>
<li>基于LSM树结构，写入性能优异</li>
<li>支持随机读写</li>
</ul>
<h3 id="_3-可伸缩性" tabindex="-1"><a class="header-anchor" href="#_3-可伸缩性"><span>3. 可伸缩性</span></a></h3>
<ul>
<li>支持水平扩展，可以轻松增加节点</li>
<li>自动负载均衡</li>
</ul>
<h3 id="_4-面向列存储" tabindex="-1"><a class="header-anchor" href="#_4-面向列存储"><span>4. 面向列存储</span></a></h3>
<ul>
<li>列式存储结构，适合稀疏数据</li>
<li>支持动态增加列族和列</li>
</ul>
<h3 id="_5-强一致性" tabindex="-1"><a class="header-anchor" href="#_5-强一致性"><span>5. 强一致性</span></a></h3>
<ul>
<li>保证数据的一致性</li>
<li>ACID特性支持</li>
</ul>
<h2 id="hbase数据模型" tabindex="-1"><a class="header-anchor" href="#hbase数据模型"><span>HBase数据模型</span></a></h2>
<h3 id="_1-表-table" tabindex="-1"><a class="header-anchor" href="#_1-表-table"><span>1. 表(Table)</span></a></h3>
<ul>
<li>HBase中数据存储的基本单位</li>
</ul>
<h3 id="_2-行-row" tabindex="-1"><a class="header-anchor" href="#_2-行-row"><span>2. 行(Row)</span></a></h3>
<ul>
<li>每一行都有一个唯一的RowKey</li>
<li>RowKey按字典序排序</li>
</ul>
<h3 id="_3-列族-column-family" tabindex="-1"><a class="header-anchor" href="#_3-列族-column-family"><span>3. 列族(Column Family)</span></a></h3>
<ul>
<li>列的集合，物理上存储在一起</li>
<li>需要在创建表时定义</li>
</ul>
<h3 id="_4-列限定符-column-qualifier" tabindex="-1"><a class="header-anchor" href="#_4-列限定符-column-qualifier"><span>4. 列限定符(Column Qualifier)</span></a></h3>
<ul>
<li>列族中的具体列</li>
<li>可以动态添加</li>
</ul>
<h3 id="_5-时间戳-timestamp" tabindex="-1"><a class="header-anchor" href="#_5-时间戳-timestamp"><span>5. 时间戳(Timestamp)</span></a></h3>
<ul>
<li>每个单元格数据的版本标识</li>
<li>默认使用系统时间</li>
</ul>
<h3 id="_6-单元格-cell" tabindex="-1"><a class="header-anchor" href="#_6-单元格-cell"><span>6. 单元格(Cell)</span></a></h3>
<ul>
<li>数据存储的最小单位</li>
<li>由(rowkey, column family, column qualifier, timestamp)唯一确定</li>
</ul>
<h2 id="hbase架构" tabindex="-1"><a class="header-anchor" href="#hbase架构"><span>HBase架构</span></a></h2>
<h3 id="_1-hmaster" tabindex="-1"><a class="header-anchor" href="#_1-hmaster"><span>1. HMaster</span></a></h3>
<ul>
<li>负责表和Region的管理</li>
<li>负责RegionServer的负载均衡</li>
<li>处理表的元数据变更</li>
</ul>
<h3 id="_2-regionserver" tabindex="-1"><a class="header-anchor" href="#_2-regionserver"><span>2. RegionServer</span></a></h3>
<ul>
<li>负责实际的数据读写请求</li>
<li>管理多个Region</li>
<li>与HDFS交互进行数据存储</li>
</ul>
<h3 id="_3-region" tabindex="-1"><a class="header-anchor" href="#_3-region"><span>3. Region</span></a></h3>
<ul>
<li>表的水平切分单元</li>
<li>每个Region包含一段连续的RowKey范围</li>
<li>动态分裂和合并</li>
</ul>
<h3 id="_4-zookeeper" tabindex="-1"><a class="header-anchor" href="#_4-zookeeper"><span>4. ZooKeeper</span></a></h3>
<ul>
<li>协调服务，维护集群状态</li>
<li>Master选举</li>
<li>RegionServer状态监控</li>
</ul>
<h3 id="_5-hdfs" tabindex="-1"><a class="header-anchor" href="#_5-hdfs"><span>5. HDFS</span></a></h3>
<ul>
<li>底层分布式文件系统</li>
<li>存储实际的数据和WAL日志</li>
</ul>
<h2 id="hbase读写流程" tabindex="-1"><a class="header-anchor" href="#hbase读写流程"><span>HBase读写流程</span></a></h2>
<h3 id="写入流程" tabindex="-1"><a class="header-anchor" href="#写入流程"><span>写入流程</span></a></h3>
<ol>
<li>客户端请求发送到ZooKeeper获取Meta表位置</li>
<li>获取目标Region所在RegionServer</li>
<li>数据先写入WAL(Write-Ahead Log)</li>
<li>数据写入MemStore</li>
<li>MemStore满后Flush到HFile存储到HDFS</li>
</ol>
<h3 id="读取流程" tabindex="-1"><a class="header-anchor" href="#读取流程"><span>读取流程</span></a></h3>
<ol>
<li>客户端请求发送到ZooKeeper获取Meta表位置</li>
<li>查询Meta表定位目标Region</li>
<li>访问对应的RegionServer</li>
<li>先从MemStore查找</li>
<li>再从BlockCache查找</li>
<li>最后从HFile查找</li>
</ol>
<h2 id="hbase与传统关系型数据库的区别" tabindex="-1"><a class="header-anchor" href="#hbase与传统关系型数据库的区别"><span>HBase与传统关系型数据库的区别</span></a></h2>
<table>
<thead>
<tr>
<th>特性</th>
<th>HBase</th>
<th>关系型数据库</th>
</tr>
</thead>
<tbody>
<tr>
<td>数据模型</td>
<td>键值对、列族</td>
<td>关系模型</td>
</tr>
<tr>
<td>存储方式</td>
<td>列式存储</td>
<td>行式存储</td>
</tr>
<tr>
<td>Schema</td>
<td>灵活，可动态添加列</td>
<td>固定Schema</td>
</tr>
<tr>
<td>索引</td>
<td>主要通过RowKey</td>
<td>支持多种索引</td>
</tr>
<tr>
<td>事务</td>
<td>支持单行事务</td>
<td>支持ACID事务</td>
</tr>
<tr>
<td>查询语言</td>
<td>API调用</td>
<td>SQL</td>
</tr>
<tr>
<td>扩展性</td>
<td>水平扩展</td>
<td>垂直扩展为主</td>
</tr>
</tbody>
</table>
<h2 id="hbase应用场景" tabindex="-1"><a class="header-anchor" href="#hbase应用场景"><span>HBase应用场景</span></a></h2>
<ol>
<li>
<p><strong>海量数据存储</strong></p>
<ul>
<li>日志数据存储</li>
<li>传感器数据</li>
<li>社交媒体数据</li>
</ul>
</li>
<li>
<p><strong>实时查询</strong></p>
<ul>
<li>用户画像查询</li>
<li>商品信息查询</li>
<li>实时推荐系统</li>
</ul>
</li>
<li>
<p><strong>时间序列数据</strong></p>
<ul>
<li>监控数据存储</li>
<li>物联网设备数据</li>
</ul>
</li>
<li>
<p><strong>内容管理</strong></p>
<ul>
<li>CMS系统</li>
<li>消息系统</li>
</ul>
</li>
</ol>
<h2 id="hbase性能优化" tabindex="-1"><a class="header-anchor" href="#hbase性能优化"><span>HBase性能优化</span></a></h2>
<h3 id="_1-rowkey设计" tabindex="-1"><a class="header-anchor" href="#_1-rowkey设计"><span>1. RowKey设计</span></a></h3>
<ul>
<li>避免热点问题</li>
<li>考虑查询模式</li>
<li>保持RowKey简短</li>
</ul>
<h3 id="_2-列族设计" tabindex="-1"><a class="header-anchor" href="#_2-列族设计"><span>2. 列族设计</span></a></h3>
<ul>
<li>合理划分列族</li>
<li>相同访问模式的数据放在同一列族</li>
</ul>
<h3 id="_3-region管理" tabindex="-1"><a class="header-anchor" href="#_3-region管理"><span>3. Region管理</span></a></h3>
<ul>
<li>预分区避免频繁分裂</li>
<li>合理设置Region大小</li>
</ul>
<h3 id="_4-内存优化" tabindex="-1"><a class="header-anchor" href="#_4-内存优化"><span>4. 内存优化</span></a></h3>
<ul>
<li>调整MemStore大小</li>
<li>合理配置BlockCache</li>
</ul>
<h3 id="_5-读写优化" tabindex="-1"><a class="header-anchor" href="#_5-读写优化"><span>5. 读写优化</span></a></h3>
<ul>
<li>批量操作提升性能</li>
<li>合理使用过滤器</li>
<li>启用压缩</li>
</ul>
<h2 id="hbase常用操作" tabindex="-1"><a class="header-anchor" href="#hbase常用操作"><span>HBase常用操作</span></a></h2>
<h3 id="shell命令" tabindex="-1"><a class="header-anchor" href="#shell命令"><span>Shell命令</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 创建表</span></span>
<span class="line">create <span class="token string">'test_table'</span>, <span class="token string">'cf1'</span>, <span class="token string">'cf2'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 插入数据</span></span>
<span class="line">put <span class="token string">'test_table'</span>, <span class="token string">'row1'</span>, <span class="token string">'cf1:name'</span>, <span class="token string">'John'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查询数据</span></span>
<span class="line">get <span class="token string">'test_table'</span>, <span class="token string">'row1'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 扫描表</span></span>
<span class="line">scan <span class="token string">'test_table'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除数据</span></span>
<span class="line">delete <span class="token string">'test_table'</span>, <span class="token string">'row1'</span>, <span class="token string">'cf1:name'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java-api示例" tabindex="-1"><a class="header-anchor" href="#java-api示例"><span>Java API示例</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token class-name">Configuration</span> config <span class="token operator">=</span> <span class="token class-name">HBaseConfiguration</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Table</span> table <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">getTable</span><span class="token punctuation">(</span><span class="token class-name">TableName</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">"test_table"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Put操作</span></span>
<span class="line"><span class="token class-name">Put</span> put <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Put</span><span class="token punctuation">(</span><span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">"row1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">put<span class="token punctuation">.</span><span class="token function">addColumn</span><span class="token punctuation">(</span><span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">"cf1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">table<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>put<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Get操作</span></span>
<span class="line"><span class="token class-name">Get</span> get <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Get</span><span class="token punctuation">(</span><span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">"row1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Result</span> result <span class="token operator">=</span> table<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>get<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">"cf1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Bytes</span><span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HBase作为一个分布式的NoSQL数据库，在处理海量数据方面具有独特的优势，特别适合需要高并发读写的场景。</p>
</div></template>



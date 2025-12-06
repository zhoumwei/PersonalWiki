<template><div><h1 id="flink学习笔记" tabindex="-1"><a class="header-anchor" href="#flink学习笔记"><span>Flink学习笔记</span></a></h1>
<h2 id="什么是flink" tabindex="-1"><a class="header-anchor" href="#什么是flink"><span>什么是Flink</span></a></h2>
<p>Apache Flink是一个框架和分布式处理引擎，用于在无边界和有边界的数据流上进行状态计算。Flink能在所有常见的集群环境中运行，并能以内存速度执行计算。</p>
<h2 id="flink核心特性" tabindex="-1"><a class="header-anchor" href="#flink核心特性"><span>Flink核心特性</span></a></h2>
<h3 id="_1-流处理优先" tabindex="-1"><a class="header-anchor" href="#_1-流处理优先"><span>1. 流处理优先</span></a></h3>
<ul>
<li>真正的流处理引擎</li>
<li>低延迟、高吞吐量</li>
<li>支持事件时间处理</li>
</ul>
<h3 id="_2-精确一次语义" tabindex="-1"><a class="header-anchor" href="#_2-精确一次语义"><span>2. 精确一次语义</span></a></h3>
<ul>
<li>端到端的状态一致性保证</li>
<li>支持精准一次处理语义</li>
</ul>
<h3 id="_3-高吞吐、低延迟" tabindex="-1"><a class="header-anchor" href="#_3-高吞吐、低延迟"><span>3. 高吞吐、低延迟</span></a></h3>
<ul>
<li>内存计算优化</li>
<li>流水线式数据处理</li>
</ul>
<h3 id="_4-容错机制" tabindex="-1"><a class="header-anchor" href="#_4-容错机制"><span>4. 容错机制</span></a></h3>
<ul>
<li>基于Checkpoint的容错机制</li>
<li>支持Savepoint状态保存和恢复</li>
</ul>
<h3 id="_5-多样化api" tabindex="-1"><a class="header-anchor" href="#_5-多样化api"><span>5. 多样化API</span></a></h3>
<ul>
<li>DataStream API（流处理）</li>
<li>DataSet API（批处理）</li>
<li>Table API &amp; SQL</li>
</ul>
<h2 id="flink架构" tabindex="-1"><a class="header-anchor" href="#flink架构"><span>Flink架构</span></a></h2>
<h3 id="_1-client" tabindex="-1"><a class="header-anchor" href="#_1-client"><span>1. Client</span></a></h3>
<ul>
<li>提交作业到Flink集群</li>
<li>生成JobGraph</li>
<li>不参与实际的数据处理</li>
</ul>
<h3 id="_2-jobmanager" tabindex="-1"><a class="header-anchor" href="#_2-jobmanager"><span>2. JobManager</span></a></h3>
<ul>
<li>作业调度和协调</li>
<li>Checkpoint协调</li>
<li>故障恢复</li>
</ul>
<h3 id="_3-resourcemanager" tabindex="-1"><a class="header-anchor" href="#_3-resourcemanager"><span>3. ResourceManager</span></a></h3>
<ul>
<li>资源分配和管理</li>
<li>TaskManager管理</li>
</ul>
<h3 id="_4-taskmanager" tabindex="-1"><a class="header-anchor" href="#_4-taskmanager"><span>4. TaskManager</span></a></h3>
<ul>
<li>执行具体的任务</li>
<li>管理内存和网络资源</li>
<li>提供任务执行环境</li>
</ul>
<h3 id="_5-slot" tabindex="-1"><a class="header-anchor" href="#_5-slot"><span>5. Slot</span></a></h3>
<ul>
<li>TaskManager中的资源子集</li>
<li>一个Slot可以运行多个算子</li>
</ul>
<h2 id="flink核心概念" tabindex="-1"><a class="header-anchor" href="#flink核心概念"><span>Flink核心概念</span></a></h2>
<h3 id="_1-datastream" tabindex="-1"><a class="header-anchor" href="#_1-datastream"><span>1. DataStream</span></a></h3>
<ul>
<li>无界数据流的抽象</li>
<li>支持流处理操作</li>
</ul>
<h3 id="_2-dataset" tabindex="-1"><a class="header-anchor" href="#_2-dataset"><span>2. DataSet</span></a></h3>
<ul>
<li>有界数据集的抽象</li>
<li>支持批处理操作</li>
</ul>
<h3 id="_3-window" tabindex="-1"><a class="header-anchor" href="#_3-window"><span>3. Window</span></a></h3>
<ul>
<li>将无限流切分为有限块进行处理</li>
<li>类型：时间窗口、计数窗口等</li>
</ul>
<h3 id="_4-state" tabindex="-1"><a class="header-anchor" href="#_4-state"><span>4. State</span></a></h3>
<ul>
<li>算子状态管理</li>
<li>支持RocksDB等状态后端</li>
</ul>
<h3 id="_5-checkpoint" tabindex="-1"><a class="header-anchor" href="#_5-checkpoint"><span>5. Checkpoint</span></a></h3>
<ul>
<li>定期保存应用状态</li>
<li>实现容错机制</li>
</ul>
<h3 id="_6-time" tabindex="-1"><a class="header-anchor" href="#_6-time"><span>6. Time</span></a></h3>
<ul>
<li>Event Time（事件时间）</li>
<li>Ingestion Time（摄入时间）</li>
<li>Processing Time（处理时间）</li>
</ul>
<h2 id="flink流处理模型" tabindex="-1"><a class="header-anchor" href="#flink流处理模型"><span>Flink流处理模型</span></a></h2>
<h3 id="_1-有界流-vs-无界流" tabindex="-1"><a class="header-anchor" href="#_1-有界流-vs-无界流"><span>1. 有界流 vs 无界流</span></a></h3>
<ul>
<li>有界流：有限数据集，可以等待所有数据到达后再处理</li>
<li>无界流：无限数据流，必须持续处理</li>
</ul>
<h3 id="_2-时间语义" tabindex="-1"><a class="header-anchor" href="#_2-时间语义"><span>2. 时间语义</span></a></h3>
<ul>
<li>Event Time：事件实际发生的时间</li>
<li>Processing Time：事件被处理的时间</li>
</ul>
<h3 id="_3-watermark" tabindex="-1"><a class="header-anchor" href="#_3-watermark"><span>3. Watermark</span></a></h3>
<ul>
<li>处理乱序事件的机制</li>
<li>表示事件时间的进展</li>
</ul>
<h3 id="_4-窗口-window" tabindex="-1"><a class="header-anchor" href="#_4-窗口-window"><span>4. 窗口(Window)</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token comment">// 时间窗口示例</span></span>
<span class="line">stream<span class="token punctuation">.</span><span class="token function">keyBy</span><span class="token punctuation">(</span><span class="token generics"><span class="token punctuation">&lt;</span>key selector<span class="token punctuation">></span></span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">window</span><span class="token punctuation">(</span><span class="token class-name">TumblingEventTimeWindows</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">minutes</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyReduceFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flink状态管理" tabindex="-1"><a class="header-anchor" href="#flink状态管理"><span>Flink状态管理</span></a></h2>
<h3 id="_1-keyed-state" tabindex="-1"><a class="header-anchor" href="#_1-keyed-state"><span>1. Keyed State</span></a></h3>
<ul>
<li>与特定key绑定的状态</li>
<li>包括ValueState、ListState、MapState等</li>
</ul>
<h3 id="_2-operator-state" tabindex="-1"><a class="header-anchor" href="#_2-operator-state"><span>2. Operator State</span></a></h3>
<ul>
<li>与算子实例绑定的状态</li>
<li>适用于非keyedStream</li>
</ul>
<h3 id="_3-状态后端" tabindex="-1"><a class="header-anchor" href="#_3-状态后端"><span>3. 状态后端</span></a></h3>
<ul>
<li>MemoryStateBackend：内存状态后端</li>
<li>FsStateBackend：文件系统状态后端</li>
<li>RocksDBStateBackend：RocksDB状态后端</li>
</ul>
<h3 id="_4-checkpoint机制" tabindex="-1"><a class="header-anchor" href="#_4-checkpoint机制"><span>4. Checkpoint机制</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token comment">// 启用Checkpoint</span></span>
<span class="line"><span class="token class-name">StreamExecutionEnvironment</span> env <span class="token operator">=</span> <span class="token class-name">StreamExecutionEnvironment</span><span class="token punctuation">.</span><span class="token function">getExecutionEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">env<span class="token punctuation">.</span><span class="token function">enableCheckpointing</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 每5秒做一次Checkpoint</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flink容错机制" tabindex="-1"><a class="header-anchor" href="#flink容错机制"><span>Flink容错机制</span></a></h2>
<h3 id="_1-checkpoint" tabindex="-1"><a class="header-anchor" href="#_1-checkpoint"><span>1. Checkpoint</span></a></h3>
<ul>
<li>定期触发，保存整个应用的状态</li>
<li>保证精确一次语义</li>
</ul>
<h3 id="_2-savepoint" tabindex="-1"><a class="header-anchor" href="#_2-savepoint"><span>2. Savepoint</span></a></h3>
<ul>
<li>手动触发的状态保存点</li>
<li>用于版本升级、扩容等操作</li>
</ul>
<h3 id="_3-重启策略" tabindex="-1"><a class="header-anchor" href="#_3-重启策略"><span>3. 重启策略</span></a></h3>
<ul>
<li>FixedDelayRestartStrategy：固定延迟重启</li>
<li>FailureRateRestartStrategy：失败率重启</li>
<li>NoRestartStrategy：不重启</li>
</ul>
<h2 id="flink部署模式" tabindex="-1"><a class="header-anchor" href="#flink部署模式"><span>Flink部署模式</span></a></h2>
<h3 id="_1-local模式" tabindex="-1"><a class="header-anchor" href="#_1-local模式"><span>1. Local模式</span></a></h3>
<ul>
<li>本地运行，用于开发测试</li>
</ul>
<h3 id="_2-standalone模式" tabindex="-1"><a class="header-anchor" href="#_2-standalone模式"><span>2. Standalone模式</span></a></h3>
<ul>
<li>独立集群部署</li>
</ul>
<h3 id="_3-yarn模式" tabindex="-1"><a class="header-anchor" href="#_3-yarn模式"><span>3. YARN模式</span></a></h3>
<ul>
<li>在YARN上运行</li>
</ul>
<h3 id="_4-kubernetes模式" tabindex="-1"><a class="header-anchor" href="#_4-kubernetes模式"><span>4. Kubernetes模式</span></a></h3>
<ul>
<li>在Kubernetes上运行</li>
</ul>
<h2 id="flink-sql" tabindex="-1"><a class="header-anchor" href="#flink-sql"><span>Flink SQL</span></a></h2>
<p>Flink提供了强大的SQL支持，可以方便地进行流处理和批处理：</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code><span class="line"><span class="token comment">-- 创建表</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> orders <span class="token punctuation">(</span></span>
<span class="line">  order_id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span></span>
<span class="line">  product STRING<span class="token punctuation">,</span></span>
<span class="line">  amount <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  order_time <span class="token keyword">TIMESTAMP</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token keyword">WITH</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">'connector'</span> <span class="token operator">=</span> <span class="token string">'kafka'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'topic'</span> <span class="token operator">=</span> <span class="token string">'orders'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'properties.bootstrap.servers'</span> <span class="token operator">=</span> <span class="token string">'localhost:9092'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'format'</span> <span class="token operator">=</span> <span class="token string">'json'</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 流式查询</span></span>
<span class="line"><span class="token keyword">SELECT</span> product<span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span> <span class="token keyword">as</span> total_amount</span>
<span class="line"><span class="token keyword">FROM</span> orders</span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> product<span class="token punctuation">,</span> TUMBLE<span class="token punctuation">(</span>order_time<span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token string">'1'</span> <span class="token keyword">HOUR</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flink应用场景" tabindex="-1"><a class="header-anchor" href="#flink应用场景"><span>Flink应用场景</span></a></h2>
<h3 id="_1-实时数据分析" tabindex="-1"><a class="header-anchor" href="#_1-实时数据分析"><span>1. 实时数据分析</span></a></h3>
<ul>
<li>用户行为实时分析</li>
<li>实时推荐系统</li>
<li>实时风控系统</li>
</ul>
<h3 id="_2-数据管道" tabindex="-1"><a class="header-anchor" href="#_2-数据管道"><span>2. 数据管道</span></a></h3>
<ul>
<li>ETL处理</li>
<li>数据同步</li>
<li>数据湖构建</li>
</ul>
<h3 id="_3-事件驱动应用" tabindex="-1"><a class="header-anchor" href="#_3-事件驱动应用"><span>3. 事件驱动应用</span></a></h3>
<ul>
<li>实时告警系统</li>
<li>异常检测</li>
<li>实时监控</li>
</ul>
<h3 id="_4-cep-复杂事件处理" tabindex="-1"><a class="header-anchor" href="#_4-cep-复杂事件处理"><span>4. CEP(复杂事件处理)</span></a></h3>
<ul>
<li>模式匹配</li>
<li>事件关联分析</li>
</ul>
<h2 id="flink性能优化" tabindex="-1"><a class="header-anchor" href="#flink性能优化"><span>Flink性能优化</span></a></h2>
<h3 id="_1-并行度设置" tabindex="-1"><a class="header-anchor" href="#_1-并行度设置"><span>1. 并行度设置</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token comment">// 设置并行度</span></span>
<span class="line">env<span class="token punctuation">.</span><span class="token function">setParallelism</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-内存优化" tabindex="-1"><a class="header-anchor" href="#_2-内存优化"><span>2. 内存优化</span></a></h3>
<ul>
<li>合理分配Network Buffer</li>
<li>调整托管内存比例</li>
</ul>
<h3 id="_3-状态优化" tabindex="-1"><a class="header-anchor" href="#_3-状态优化"><span>3. 状态优化</span></a></h3>
<ul>
<li>选择合适的状态后端</li>
<li>合理设置Checkpoint间隔</li>
</ul>
<h3 id="_4-反压处理" tabindex="-1"><a class="header-anchor" href="#_4-反压处理"><span>4. 反压处理</span></a></h3>
<ul>
<li>监控反压情况</li>
<li>优化算子性能</li>
</ul>
<h2 id="flink与其他流处理框架对比" tabindex="-1"><a class="header-anchor" href="#flink与其他流处理框架对比"><span>Flink与其他流处理框架对比</span></a></h2>
<table>
<thead>
<tr>
<th>特性</th>
<th>Flink</th>
<th>Spark Streaming</th>
<th>Storm</th>
</tr>
</thead>
<tbody>
<tr>
<td>处理模型</td>
<td>真正流处理</td>
<td>微批处理</td>
<td>真正流处理</td>
</tr>
<tr>
<td>延迟</td>
<td>毫秒级</td>
<td>秒级</td>
<td>毫秒级</td>
</tr>
<tr>
<td>吞吐量</td>
<td>高</td>
<td>高</td>
<td>中等</td>
</tr>
<tr>
<td>容错机制</td>
<td>Checkpoint</td>
<td>RDD血统</td>
<td>ACK机制</td>
</tr>
<tr>
<td>状态管理</td>
<td>丰富</td>
<td>有限</td>
<td>有限</td>
</tr>
<tr>
<td>语义保证</td>
<td>精确一次</td>
<td>精确一次</td>
<td>至少一次</td>
</tr>
</tbody>
</table>
<p>Flink作为新一代流处理引擎，在实时计算领域表现突出，特别适合对延迟敏感、需要精确一次语义保证的场景。</p>
</div></template>



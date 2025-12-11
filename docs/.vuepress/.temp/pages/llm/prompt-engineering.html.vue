<template><div><h1 id="提示工程-prompt-engineering-学习笔记" tabindex="-1"><a class="header-anchor" href="#提示工程-prompt-engineering-学习笔记"><span>提示工程(Prompt Engineering)学习笔记</span></a></h1>
<h2 id="什么是提示工程" tabindex="-1"><a class="header-anchor" href="#什么是提示工程"><span>什么是提示工程</span></a></h2>
<p>提示工程(Prompt Engineering)是一门设计和优化提示词(prompt)以有效引导大语言模型(LLM)产生期望输出的技术。它不需要更新模型权重或进行微调，而是通过精心构造的输入指令来控制模型的行为和输出。</p>
<h2 id="提示工程的重要性" tabindex="-1"><a class="header-anchor" href="#提示工程的重要性"><span>提示工程的重要性</span></a></h2>
<h3 id="_1-无需训练即可控制模型" tabindex="-1"><a class="header-anchor" href="#_1-无需训练即可控制模型"><span>1. 无需训练即可控制模型</span></a></h3>
<ul>
<li>相比模型微调，提示工程成本更低</li>
<li>可以快速迭代和调整</li>
</ul>
<h3 id="_2-提高模型输出质量" tabindex="-1"><a class="header-anchor" href="#_2-提高模型输出质量"><span>2. 提高模型输出质量</span></a></h3>
<ul>
<li>通过明确的指令获得更准确的回答</li>
<li>减少无关或错误信息</li>
</ul>
<h3 id="_3-增强模型可控性" tabindex="-1"><a class="header-anchor" href="#_3-增强模型可控性"><span>3. 增强模型可控性</span></a></h3>
<ul>
<li>引导模型按照特定风格或格式输出</li>
<li>控制输出的详细程度和语气</li>
</ul>
<h2 id="提示工程基本原则" tabindex="-1"><a class="header-anchor" href="#提示工程基本原则"><span>提示工程基本原则</span></a></h2>
<h3 id="_1-清晰明确" tabindex="-1"><a class="header-anchor" href="#_1-清晰明确"><span>1. 清晰明确</span></a></h3>
<ul>
<li>使用简洁明了的语言</li>
<li>避免模糊不清的表述</li>
</ul>
<h3 id="_2-具体详细" tabindex="-1"><a class="header-anchor" href="#_2-具体详细"><span>2. 具体详细</span></a></h3>
<ul>
<li>提供足够的上下文信息</li>
<li>明确指出期望的输出格式</li>
</ul>
<h3 id="_3-结构化组织" tabindex="-1"><a class="header-anchor" href="#_3-结构化组织"><span>3. 结构化组织</span></a></h3>
<ul>
<li>合理安排提示词的逻辑顺序</li>
<li>使用分隔符区分不同部分</li>
</ul>
<h3 id="_4-迭代优化" tabindex="-1"><a class="header-anchor" href="#_4-迭代优化"><span>4. 迭代优化</span></a></h3>
<ul>
<li>根据模型输出不断调整提示词</li>
<li>通过实验找到最优方案</li>
</ul>
<h2 id="提示工程技术" tabindex="-1"><a class="header-anchor" href="#提示工程技术"><span>提示工程技术</span></a></h2>
<h3 id="_1-zero-shot-prompting" tabindex="-1"><a class="header-anchor" href="#_1-zero-shot-prompting"><span>1. Zero-Shot Prompting</span></a></h3>
<p>零样本提示是最基本的形式，直接给出任务描述而不提供示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">将以下英文翻译成中文：</span>
<span class="line">"Hello, how are you today?"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-few-shot-prompting" tabindex="-1"><a class="header-anchor" href="#_2-few-shot-prompting"><span>2. Few-Shot Prompting</span></a></h3>
<p>少样本提示通过提供少量示例来引导模型：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">将英文翻译成中文：</span>
<span class="line">示例1：</span>
<span class="line">原文：Good morning!</span>
<span class="line">译文：早上好！</span>
<span class="line"></span>
<span class="line">示例2：</span>
<span class="line">原文：How are you?</span>
<span class="line">译文：你好吗？</span>
<span class="line"></span>
<span class="line">请翻译：</span>
<span class="line">"What is your name?"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-chain-of-thought-prompting" tabindex="-1"><a class="header-anchor" href="#_3-chain-of-thought-prompting"><span>3. Chain-of-Thought Prompting</span></a></h3>
<p>思维链提示鼓励模型逐步推理：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">问题：小明有5个苹果，吃了2个，又买了3个，现在有多少个苹果？</span>
<span class="line">思考过程：让我们一步步解决这个问题。</span>
<span class="line">1. 小明开始有5个苹果</span>
<span class="line">2. 吃了2个，剩下5-2=3个</span>
<span class="line">3. 又买了3个，现在有3+3=6个</span>
<span class="line">答案：小明现在有6个苹果。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-self-consistency" tabindex="-1"><a class="header-anchor" href="#_4-self-consistency"><span>4. Self-Consistency</span></a></h3>
<p>自我一致性通过多次采样并选择最一致的答案来提高准确性。</p>
<h3 id="_5-generated-knowledge-prompting" tabindex="-1"><a class="header-anchor" href="#_5-generated-knowledge-prompting"><span>5. Generated Knowledge Prompting</span></a></h3>
<p>生成知识提示让模型先生成相关知识再解决问题：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">在回答问题之前，请先列出与问题相关的背景知识：</span>
<span class="line">问题：什么是量子计算？</span>
<span class="line">相关知识：</span>
<span class="line">1. 量子力学基础</span>
<span class="line">2. 量子比特(qubit)</span>
<span class="line">3. 量子叠加态</span>
<span class="line">4. 量子纠缠</span>
<span class="line">...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提示设计技巧" tabindex="-1"><a class="header-anchor" href="#提示设计技巧"><span>提示设计技巧</span></a></h2>
<h3 id="_1-使用分隔符" tabindex="-1"><a class="header-anchor" href="#_1-使用分隔符"><span>1. 使用分隔符</span></a></h3>
<p>使用特殊符号分隔不同部分的内容：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">"""</span>
<span class="line">任务：总结以下文本</span>
<span class="line">文本：</span>
<span class="line">{{文本内容}}</span>
<span class="line">要求：</span>
<span class="line">- 字数不超过100字</span>
<span class="line">- 突出关键信息</span>
<span class="line">"""</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-明确输出格式" tabindex="-1"><a class="header-anchor" href="#_2-明确输出格式"><span>2. 明确输出格式</span></a></h3>
<p>指定期望的输出格式：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">请以JSON格式回答以下问题：</span>
<span class="line">{</span>
<span class="line">  "姓名": "张三",</span>
<span class="line">  "年龄": 25,</span>
<span class="line">  "职业": "工程师"</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-提供示例" tabindex="-1"><a class="header-anchor" href="#_3-提供示例"><span>3. 提供示例</span></a></h3>
<p>给出具体的输入输出示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">参考以下示例格式回答问题：</span>
<span class="line">问题：北京的天气怎么样？</span>
<span class="line">回答：北京市今天晴朗，气温15-25°C，空气质量良好。</span>
<span class="line"></span>
<span class="line">问题：上海的天气怎么样？</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-分步骤指示" tabindex="-1"><a class="header-anchor" href="#_4-分步骤指示"><span>4. 分步骤指示</span></a></h3>
<p>将复杂任务分解为简单步骤：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">完成以下任务：</span>
<span class="line">1. 首先分析用户需求</span>
<span class="line">2. 然后搜索相关信息</span>
<span class="line">3. 最后给出解决方案</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-指定角色扮演" tabindex="-1"><a class="header-anchor" href="#_5-指定角色扮演"><span>5. 指定角色扮演</span></a></h3>
<p>让模型扮演特定角色：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">你是一名经验丰富的Java开发工程师，请回答以下问题：</span>
<span class="line">如何优化Java程序的性能？</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提示工程最佳实践" tabindex="-1"><a class="header-anchor" href="#提示工程最佳实践"><span>提示工程最佳实践</span></a></h2>
<h3 id="_1-从简单开始" tabindex="-1"><a class="header-anchor" href="#_1-从简单开始"><span>1. 从简单开始</span></a></h3>
<ul>
<li>先用简单提示测试基本效果</li>
<li>逐步增加复杂度</li>
</ul>
<h3 id="_2-多次迭代" tabindex="-1"><a class="header-anchor" href="#_2-多次迭代"><span>2. 多次迭代</span></a></h3>
<ul>
<li>根据输出结果调整提示词</li>
<li>持续优化直到满意为止</li>
</ul>
<h3 id="_3-控制长度" tabindex="-1"><a class="header-anchor" href="#_3-控制长度"><span>3. 控制长度</span></a></h3>
<ul>
<li>避免过于冗长的提示</li>
<li>保持重点突出</li>
</ul>
<h3 id="_4-测试不同模型" tabindex="-1"><a class="header-anchor" href="#_4-测试不同模型"><span>4. 测试不同模型</span></a></h3>
<ul>
<li>同一提示在不同模型上效果可能不同</li>
<li>根据具体模型调整提示策略</li>
</ul>
<h2 id="常见问题与解决方案" tabindex="-1"><a class="header-anchor" href="#常见问题与解决方案"><span>常见问题与解决方案</span></a></h2>
<h3 id="_1-输出过于冗长" tabindex="-1"><a class="header-anchor" href="#_1-输出过于冗长"><span>1. 输出过于冗长</span></a></h3>
<p>解决方案：明确限制字数或段落数</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">请用一段话总结，不超过100字。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-输出偏离主题" tabindex="-1"><a class="header-anchor" href="#_2-输出偏离主题"><span>2. 输出偏离主题</span></a></h3>
<p>解决方案：加强约束条件</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">请严格按照以下要点回答，不要涉及其他内容：</span>
<span class="line">1. 定义XXX</span>
<span class="line">2. 解释XXX的工作原理</span>
<span class="line">3. 举例说明XXX的应用</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-输出缺乏深度" tabindex="-1"><a class="header-anchor" href="#_3-输出缺乏深度"><span>3. 输出缺乏深度</span></a></h3>
<p>解决方案：要求详细分析</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">请深入分析以下问题，包括原因、影响和解决方案。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4-输出格式不规范" tabindex="-1"><a class="header-anchor" href="#_4-输出格式不规范"><span>4. 输出格式不规范</span></a></h3>
<p>解决方案：提供模板</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">请按照以下格式回答：</span>
<span class="line"># 标题</span>
<span class="line">## 概述</span>
<span class="line">## 详细内容</span>
<span class="line">## 总结</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提示工程工具和框架" tabindex="-1"><a class="header-anchor" href="#提示工程工具和框架"><span>提示工程工具和框架</span></a></h2>
<h3 id="_1-langchain" tabindex="-1"><a class="header-anchor" href="#_1-langchain"><span>1. LangChain</span></a></h3>
<ul>
<li>提供提示模板管理</li>
<li>支持链式调用和复杂工作流</li>
</ul>
<h3 id="_2-llamaindex" tabindex="-1"><a class="header-anchor" href="#_2-llamaindex"><span>2. LlamaIndex</span></a></h3>
<ul>
<li>数据连接和索引管理</li>
<li>提示优化和缓存</li>
</ul>
<h3 id="_3-hugging-face-transformers" tabindex="-1"><a class="header-anchor" href="#_3-hugging-face-transformers"><span>3. Hugging Face Transformers</span></a></h3>
<ul>
<li>多种模型支持</li>
<li>提示处理工具</li>
</ul>
<h3 id="_4-openprompt" tabindex="-1"><a class="header-anchor" href="#_4-openprompt"><span>4. OpenPrompt</span></a></h3>
<ul>
<li>专门的提示工程库</li>
<li>支持多种提示范式</li>
</ul>
<h2 id="评估提示效果" tabindex="-1"><a class="header-anchor" href="#评估提示效果"><span>评估提示效果</span></a></h2>
<h3 id="_1-定量评估" tabindex="-1"><a class="header-anchor" href="#_1-定量评估"><span>1. 定量评估</span></a></h3>
<ul>
<li>准确率、召回率等指标</li>
<li>与标准答案的相似度</li>
</ul>
<h3 id="_2-定性评估" tabindex="-1"><a class="header-anchor" href="#_2-定性评估"><span>2. 定性评估</span></a></h3>
<ul>
<li>输出的相关性</li>
<li>逻辑的一致性</li>
<li>语言的流畅性</li>
</ul>
<h3 id="_3-人工评估" tabindex="-1"><a class="header-anchor" href="#_3-人工评估"><span>3. 人工评估</span></a></h3>
<ul>
<li>专家评审</li>
<li>用户满意度调查</li>
</ul>
<h2 id="提示工程发展趋势" tabindex="-1"><a class="header-anchor" href="#提示工程发展趋势"><span>提示工程发展趋势</span></a></h2>
<h3 id="_1-自动化提示优化" tabindex="-1"><a class="header-anchor" href="#_1-自动化提示优化"><span>1. 自动化提示优化</span></a></h3>
<ul>
<li>使用强化学习自动寻找最优提示</li>
<li>基于反馈的提示调整</li>
</ul>
<h3 id="_2-个性化提示" tabindex="-1"><a class="header-anchor" href="#_2-个性化提示"><span>2. 个性化提示</span></a></h3>
<ul>
<li>根据用户偏好定制提示</li>
<li>上下文感知的提示生成</li>
</ul>
<h3 id="_3-多模态提示" tabindex="-1"><a class="header-anchor" href="#_3-多模态提示"><span>3. 多模态提示</span></a></h3>
<ul>
<li>结合文本、图像、音频等多种模态</li>
<li>跨模态的提示设计</li>
</ul>
<h3 id="_4-提示安全" tabindex="-1"><a class="header-anchor" href="#_4-提示安全"><span>4. 提示安全</span></a></h3>
<ul>
<li>防止恶意提示注入</li>
<li>提示内容审核和过滤</li>
</ul>
<p>提示工程是充分发挥大语言模型潜力的关键技术，随着LLM技术的不断发展，提示工程也将成为AI应用开发中的重要技能。</p>
</div></template>



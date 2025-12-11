<template><div><h1 id="transformer架构学习笔记" tabindex="-1"><a class="header-anchor" href="#transformer架构学习笔记"><span>Transformer架构学习笔记</span></a></h1>
<h2 id="transformer简介" tabindex="-1"><a class="header-anchor" href="#transformer简介"><span>Transformer简介</span></a></h2>
<p>Transformer是由Vaswani等人在2017年论文《Attention Is All You Need》中提出的一种全新的神经网络架构。它完全基于注意力机制，摒弃了传统的循环神经网络（RNN）和卷积神经网络（CNN）结构，在机器翻译等序列到序列任务中取得了显著的效果提升。</p>
<h2 id="transformer核心思想" tabindex="-1"><a class="header-anchor" href="#transformer核心思想"><span>Transformer核心思想</span></a></h2>
<h3 id="_1-注意力机制" tabindex="-1"><a class="header-anchor" href="#_1-注意力机制"><span>1. 注意力机制</span></a></h3>
<ul>
<li>解决长距离依赖问题</li>
<li>并行化计算，提高训练效率</li>
<li>更好地捕捉序列内元素间的关系</li>
</ul>
<h3 id="_2-编码器-解码器结构" tabindex="-1"><a class="header-anchor" href="#_2-编码器-解码器结构"><span>2. 编码器-解码器结构</span></a></h3>
<ul>
<li>编码器：将输入序列转换为连续表示</li>
<li>解码器：基于编码器输出和前面的输出生成目标序列</li>
</ul>
<h2 id="transformer整体架构" tabindex="-1"><a class="header-anchor" href="#transformer整体架构"><span>Transformer整体架构</span></a></h2>
<h3 id="_1-编码器-encoder" tabindex="-1"><a class="header-anchor" href="#_1-编码器-encoder"><span>1. 编码器（Encoder）</span></a></h3>
<ul>
<li>由6个相同的层堆叠而成</li>
<li>每层包含两个子层：
<ul>
<li>多头自注意力机制（Multi-Head Self-Attention）</li>
<li>位置前馈网络（Position-wise Feed-Forward Networks）</li>
</ul>
</li>
</ul>
<h3 id="_2-解码器-decoder" tabindex="-1"><a class="header-anchor" href="#_2-解码器-decoder"><span>2. 解码器（Decoder）</span></a></h3>
<ul>
<li>由6个相同的层堆叠而成</li>
<li>每层包含三个子层：
<ul>
<li>多头自注意力机制（Masked Multi-Head Self-Attention）</li>
<li>编码器-解码器注意力机制（Multi-Head Attention）</li>
<li>位置前馈网络（Position-wise Feed-Forward Networks）</li>
</ul>
</li>
</ul>
<h2 id="核心组件详解" tabindex="-1"><a class="header-anchor" href="#核心组件详解"><span>核心组件详解</span></a></h2>
<h3 id="_1-自注意力机制-self-attention" tabindex="-1"><a class="header-anchor" href="#_1-自注意力机制-self-attention"><span>1. 自注意力机制（Self-Attention）</span></a></h3>
<p>自注意力机制允许模型在处理序列时关注序列的不同位置，从而更好地理解上下文。</p>
<h4 id="计算过程" tabindex="-1"><a class="header-anchor" href="#计算过程"><span>计算过程：</span></a></h4>
<ol>
<li>对输入序列中的每个元素计算Query、Key、Value向量</li>
<li>计算注意力分数：Score = Q × K^T / √d_k</li>
<li>应用Softmax函数得到注意力权重</li>
<li>加权求和Value向量得到输出</li>
</ol>
<h4 id="公式表达" tabindex="-1"><a class="header-anchor" href="#公式表达"><span>公式表达：</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">Attention(Q, K, V) = softmax(QK^T / √d_k)V</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中d_k是Key向量的维度。</p>
<h3 id="_2-多头注意力-multi-head-attention" tabindex="-1"><a class="header-anchor" href="#_2-多头注意力-multi-head-attention"><span>2. 多头注意力（Multi-Head Attention）</span></a></h3>
<p>通过并行计算多个注意力头，可以让模型关注不同子空间的信息。</p>
<h4 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构：</span></a></h4>
<ul>
<li>将Q、K、V分别投影到h个不同的子空间</li>
<li>在每个子空间中并行计算注意力</li>
<li>将所有头的结果拼接并通过线性变换得到最终输出</li>
</ul>
<h4 id="公式表达-1" tabindex="-1"><a class="header-anchor" href="#公式表达-1"><span>公式表达：</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">MultiHead(Q, K, V) = Concat(head_1, ..., head_h)W^O</span>
<span class="line">其中 head_i = Attention(QW_i^Q, KW_i^K, VW_i^V)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-位置编码-positional-encoding" tabindex="-1"><a class="header-anchor" href="#_3-位置编码-positional-encoding"><span>3. 位置编码（Positional Encoding）</span></a></h3>
<p>由于Transformer不包含循环或卷积结构，需要显式添加位置信息。</p>
<h4 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法：</span></a></h4>
<ul>
<li>使用正弦和余弦函数生成位置编码</li>
<li>对于位置pos和维度i：
<ul>
<li>PE_(pos,2i) = sin(pos/10000^(2i/d_model))</li>
<li>PE_(pos,2i+1) = cos(pos/10000^(2i/d_model))</li>
</ul>
</li>
</ul>
<h3 id="_4-位置前馈网络-position-wise-feed-forward-networks" tabindex="-1"><a class="header-anchor" href="#_4-位置前馈网络-position-wise-feed-forward-networks"><span>4. 位置前馈网络（Position-wise Feed-Forward Networks）</span></a></h3>
<p>每个位置的数据通过相同的全连接网络进行处理。</p>
<h4 id="结构-1" tabindex="-1"><a class="header-anchor" href="#结构-1"><span>结构：</span></a></h4>
<ul>
<li>两层线性变换，中间使用ReLU激活函数</li>
<li>FFN(x) = max(0, xW_1 + b_1)W_2 + b_2</li>
</ul>
<h2 id="残差连接与层归一化" tabindex="-1"><a class="header-anchor" href="#残差连接与层归一化"><span>残差连接与层归一化</span></a></h2>
<h3 id="_1-残差连接-residual-connection" tabindex="-1"><a class="header-anchor" href="#_1-残差连接-residual-connection"><span>1. 残差连接（Residual Connection）</span></a></h3>
<ul>
<li>缓解深层网络的梯度消失问题</li>
<li>加快训练收敛速度</li>
</ul>
<h3 id="_2-层归一化-layer-normalization" tabindex="-1"><a class="header-anchor" href="#_2-层归一化-layer-normalization"><span>2. 层归一化（Layer Normalization）</span></a></h3>
<ul>
<li>在每个子层输出后应用</li>
<li>稳定训练过程</li>
</ul>
<h3 id="_3-结构" tabindex="-1"><a class="header-anchor" href="#_3-结构"><span>3. 结构</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">LayerNorm(x + Sublayer(x))</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="解码器特殊设计" tabindex="-1"><a class="header-anchor" href="#解码器特殊设计"><span>解码器特殊设计</span></a></h2>
<h3 id="_1-掩码自注意力-masked-self-attention" tabindex="-1"><a class="header-anchor" href="#_1-掩码自注意力-masked-self-attention"><span>1. 掩码自注意力（Masked Self-Attention）</span></a></h3>
<ul>
<li>防止位置关注后续位置</li>
<li>保证预测时只能使用已知信息</li>
</ul>
<h3 id="_2-编码器-解码器注意力" tabindex="-1"><a class="header-anchor" href="#_2-编码器-解码器注意力"><span>2. 编码器-解码器注意力</span></a></h3>
<ul>
<li>Query来自前一层解码器的输出</li>
<li>Key和Value来自编码器的输出</li>
</ul>
<h2 id="transformer优势" tabindex="-1"><a class="header-anchor" href="#transformer优势"><span>Transformer优势</span></a></h2>
<h3 id="_1-并行化" tabindex="-1"><a class="header-anchor" href="#_1-并行化"><span>1. 并行化</span></a></h3>
<ul>
<li>相比RNN，可以并行处理序列中的所有位置</li>
<li>大幅提高训练效率</li>
</ul>
<h3 id="_2-长距离依赖" tabindex="-1"><a class="header-anchor" href="#_2-长距离依赖"><span>2. 长距离依赖</span></a></h3>
<ul>
<li>注意力机制可以直接连接任意两个位置</li>
<li>更好地处理长序列</li>
</ul>
<h3 id="_3-可解释性" tabindex="-1"><a class="header-anchor" href="#_3-可解释性"><span>3. 可解释性</span></a></h3>
<ul>
<li>注意力权重提供了模型决策的可视化</li>
<li>有助于理解模型行为</li>
</ul>
<h2 id="transformer变体" tabindex="-1"><a class="header-anchor" href="#transformer变体"><span>Transformer变体</span></a></h2>
<h3 id="_1-bert-bidirectional-encoder-representations-from-transformers" tabindex="-1"><a class="header-anchor" href="#_1-bert-bidirectional-encoder-representations-from-transformers"><span>1. BERT（Bidirectional Encoder Representations from Transformers）</span></a></h3>
<ul>
<li>只使用编码器部分</li>
<li>双向上下文理解</li>
<li>预训练+微调范式</li>
</ul>
<h3 id="_2-gpt-generative-pre-trained-transformer" tabindex="-1"><a class="header-anchor" href="#_2-gpt-generative-pre-trained-transformer"><span>2. GPT（Generative Pre-trained Transformer）</span></a></h3>
<ul>
<li>只使用解码器部分</li>
<li>单向语言模型</li>
<li>强大的文本生成能力</li>
</ul>
<h3 id="_3-t5-text-to-text-transfer-transformer" tabindex="-1"><a class="header-anchor" href="#_3-t5-text-to-text-transfer-transformer"><span>3. T5（Text-to-Text Transfer Transformer）</span></a></h3>
<ul>
<li>统一框架，所有NLP任务都视为文本到文本</li>
<li>编码器-解码器结构</li>
</ul>
<h2 id="transformer在计算机视觉中的应用" tabindex="-1"><a class="header-anchor" href="#transformer在计算机视觉中的应用"><span>Transformer在计算机视觉中的应用</span></a></h2>
<h3 id="_1-vision-transformer-vit" tabindex="-1"><a class="header-anchor" href="#_1-vision-transformer-vit"><span>1. Vision Transformer（ViT）</span></a></h3>
<ul>
<li>将图像划分为patches</li>
<li>将patches作为序列输入Transformer</li>
<li>在图像分类任务中取得优异性能</li>
</ul>
<h3 id="_2-swin-transformer" tabindex="-1"><a class="header-anchor" href="#_2-swin-transformer"><span>2. Swin Transformer</span></a></h3>
<ul>
<li>引入滑动窗口机制</li>
<li>适用于密集预测任务（如目标检测、语义分割）</li>
</ul>
<h2 id="优化与改进" tabindex="-1"><a class="header-anchor" href="#优化与改进"><span>优化与改进</span></a></h2>
<h3 id="_1-efficient-attention" tabindex="-1"><a class="header-anchor" href="#_1-efficient-attention"><span>1. Efficient Attention</span></a></h3>
<ul>
<li>Sparse Transformer：稀疏注意力</li>
<li>Linformer：线性复杂度注意力</li>
<li>Performer：基于核的快速注意力</li>
</ul>
<h3 id="_2-训练优化" tabindex="-1"><a class="header-anchor" href="#_2-训练优化"><span>2. 训练优化</span></a></h3>
<ul>
<li>学习率预热（Learning Rate Warmup）</li>
<li>标签平滑（Label Smoothing）</li>
<li>梯度裁剪（Gradient Clipping）</li>
</ul>
<h2 id="实现要点" tabindex="-1"><a class="header-anchor" href="#实现要点"><span>实现要点</span></a></h2>
<h3 id="_1-初始化" tabindex="-1"><a class="header-anchor" href="#_1-初始化"><span>1. 初始化</span></a></h3>
<ul>
<li>权重初始化对训练稳定性很重要</li>
<li>通常使用 Xavier 或 He 初始化</li>
</ul>
<h3 id="_2-正则化" tabindex="-1"><a class="header-anchor" href="#_2-正则化"><span>2. 正则化</span></a></h3>
<ul>
<li>Dropout防止过拟合</li>
<li>在注意力权重和残差连接后应用</li>
</ul>
<h3 id="_3-批处理" tabindex="-1"><a class="header-anchor" href="#_3-批处理"><span>3. 批处理</span></a></h3>
<ul>
<li>使用掩码处理不同长度的序列</li>
<li>提高计算效率</li>
</ul>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2>
<h3 id="_1-自然语言处理" tabindex="-1"><a class="header-anchor" href="#_1-自然语言处理"><span>1. 自然语言处理</span></a></h3>
<ul>
<li>机器翻译</li>
<li>文本摘要</li>
<li>问答系统</li>
<li>命名实体识别</li>
</ul>
<h3 id="_2-语音处理" tabindex="-1"><a class="header-anchor" href="#_2-语音处理"><span>2. 语音处理</span></a></h3>
<ul>
<li>语音识别</li>
<li>语音合成</li>
</ul>
<h3 id="_3-计算机视觉" tabindex="-1"><a class="header-anchor" href="#_3-计算机视觉"><span>3. 计算机视觉</span></a></h3>
<ul>
<li>图像分类</li>
<li>目标检测</li>
<li>图像生成</li>
</ul>
<p>Transformer架构的出现彻底改变了深度学习领域，特别是自然语言处理领域。它不仅解决了传统RNN的诸多问题，还为后续的大模型发展奠定了基础。</p>
</div></template>



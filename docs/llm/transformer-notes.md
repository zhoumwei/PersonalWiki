# Transformer架构学习笔记

## Transformer简介

Transformer是由Vaswani等人在2017年论文《Attention Is All You Need》中提出的一种全新的神经网络架构。它完全基于注意力机制，摒弃了传统的循环神经网络（RNN）和卷积神经网络（CNN）结构，在机器翻译等序列到序列任务中取得了显著的效果提升。

## Transformer核心思想

### 1. 注意力机制
- 解决长距离依赖问题
- 并行化计算，提高训练效率
- 更好地捕捉序列内元素间的关系

### 2. 编码器-解码器结构
- 编码器：将输入序列转换为连续表示
- 解码器：基于编码器输出和前面的输出生成目标序列

## Transformer整体架构

### 1. 编码器（Encoder）
- 由6个相同的层堆叠而成
- 每层包含两个子层：
  - 多头自注意力机制（Multi-Head Self-Attention）
  - 位置前馈网络（Position-wise Feed-Forward Networks）

### 2. 解码器（Decoder）
- 由6个相同的层堆叠而成
- 每层包含三个子层：
  - 多头自注意力机制（Masked Multi-Head Self-Attention）
  - 编码器-解码器注意力机制（Multi-Head Attention）
  - 位置前馈网络（Position-wise Feed-Forward Networks）

## 核心组件详解

### 1. 自注意力机制（Self-Attention）
自注意力机制允许模型在处理序列时关注序列的不同位置，从而更好地理解上下文。

#### 计算过程：
1. 对输入序列中的每个元素计算Query、Key、Value向量
2. 计算注意力分数：Score = Q × K^T / √d_k
3. 应用Softmax函数得到注意力权重
4. 加权求和Value向量得到输出

#### 公式表达：
```
Attention(Q, K, V) = softmax(QK^T / √d_k)V
```

其中d_k是Key向量的维度。

### 2. 多头注意力（Multi-Head Attention）
通过并行计算多个注意力头，可以让模型关注不同子空间的信息。

#### 结构：
- 将Q、K、V分别投影到h个不同的子空间
- 在每个子空间中并行计算注意力
- 将所有头的结果拼接并通过线性变换得到最终输出

#### 公式表达：
```
MultiHead(Q, K, V) = Concat(head_1, ..., head_h)W^O
其中 head_i = Attention(QW_i^Q, KW_i^K, VW_i^V)
```

### 3. 位置编码（Positional Encoding）
由于Transformer不包含循环或卷积结构，需要显式添加位置信息。

#### 方法：
- 使用正弦和余弦函数生成位置编码
- 对于位置pos和维度i：
  - PE_(pos,2i) = sin(pos/10000^(2i/d_model))
  - PE_(pos,2i+1) = cos(pos/10000^(2i/d_model))

### 4. 位置前馈网络（Position-wise Feed-Forward Networks）
每个位置的数据通过相同的全连接网络进行处理。

#### 结构：
- 两层线性变换，中间使用ReLU激活函数
- FFN(x) = max(0, xW_1 + b_1)W_2 + b_2

## 残差连接与层归一化

### 1. 残差连接（Residual Connection）
- 缓解深层网络的梯度消失问题
- 加快训练收敛速度

### 2. 层归一化（Layer Normalization）
- 在每个子层输出后应用
- 稳定训练过程

### 3. 结构
```
LayerNorm(x + Sublayer(x))
```

## 解码器特殊设计

### 1. 掩码自注意力（Masked Self-Attention）
- 防止位置关注后续位置
- 保证预测时只能使用已知信息

### 2. 编码器-解码器注意力
- Query来自前一层解码器的输出
- Key和Value来自编码器的输出

## Transformer优势

### 1. 并行化
- 相比RNN，可以并行处理序列中的所有位置
- 大幅提高训练效率

### 2. 长距离依赖
- 注意力机制可以直接连接任意两个位置
- 更好地处理长序列

### 3. 可解释性
- 注意力权重提供了模型决策的可视化
- 有助于理解模型行为

## Transformer变体

### 1. BERT（Bidirectional Encoder Representations from Transformers）
- 只使用编码器部分
- 双向上下文理解
- 预训练+微调范式

### 2. GPT（Generative Pre-trained Transformer）
- 只使用解码器部分
- 单向语言模型
- 强大的文本生成能力

### 3. T5（Text-to-Text Transfer Transformer）
- 统一框架，所有NLP任务都视为文本到文本
- 编码器-解码器结构

## Transformer在计算机视觉中的应用

### 1. Vision Transformer（ViT）
- 将图像划分为patches
- 将patches作为序列输入Transformer
- 在图像分类任务中取得优异性能

### 2. Swin Transformer
- 引入滑动窗口机制
- 适用于密集预测任务（如目标检测、语义分割）

## 优化与改进

### 1. Efficient Attention
- Sparse Transformer：稀疏注意力
- Linformer：线性复杂度注意力
- Performer：基于核的快速注意力

### 2. 训练优化
- 学习率预热（Learning Rate Warmup）
- 标签平滑（Label Smoothing）
- 梯度裁剪（Gradient Clipping）

## 实现要点

### 1. 初始化
- 权重初始化对训练稳定性很重要
- 通常使用 Xavier 或 He 初始化

### 2. 正则化
- Dropout防止过拟合
- 在注意力权重和残差连接后应用

### 3. 批处理
- 使用掩码处理不同长度的序列
- 提高计算效率

## 应用场景

### 1. 自然语言处理
- 机器翻译
- 文本摘要
- 问答系统
- 命名实体识别

### 2. 语音处理
- 语音识别
- 语音合成

### 3. 计算机视觉
- 图像分类
- 目标检测
- 图像生成

Transformer架构的出现彻底改变了深度学习领域，特别是自然语言处理领域。它不仅解决了传统RNN的诸多问题，还为后续的大模型发展奠定了基础。
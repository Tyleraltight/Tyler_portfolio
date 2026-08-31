# Tyler Portfolio - Project Governance & Design Standards (CLAUDE.md)

## 1. 项目概览 (Overview)
* **技术栈**: React 19 + TypeScript + Vite + Framer Motion + Tailwind CSS / Vanilla CSS
* **运行命令**: 
  - 开发服务: `npm run dev` (运行于 `http://127.0.0.1:8080/Tyler_portfolio/`，base: `/Tyler_portfolio/`)
  - 生产构建: `npm run build` (`tsc -b && vite build`)

---

## 2. Case Study 弹窗高定设计法典 (Modal Design Standards)
以 `Rainbow Byte (rainbow-byte-mascot)` 为全站唯一基准模版。后续所有设计项目（`IRONBITE`, `IANG` 等）必须 100% 严格复用以下黄金法典：

### ① 顶栏同级一体化 (Top-Bar Title & Zero-Scroll First Sight)
* 标题与副标题标签直接置于顶栏左侧，与右侧纯无衬线“×”处于同一水平线。
* 正文顶部严禁放置占屏标题块，展开弹窗第一眼【0 滚动直达全景成果】。

### ② 黄金弹窗视窗与外围退出留白 (Backdrop Hit-Area & Proportional Sheet)
* 弹窗外围必须保留暗色毛玻璃留白（`padding: clamp(1.5rem, 3.5vh, 2.75rem) clamp(1.5rem, 4vw, 3.5rem)`），用户点击外部空白区域可顺手一键关闭。
* 弹窗尺寸固定为 `width: 88vw; max-width: 1280px; height: 88vh; max-height: 880px;`。

### ③ 彻底去套盒化与温润画册底色 (Zero-Boxing & Warm Parchment Canvas)
* 严禁采用“外层灰底 → 内层白卡 → 媒体内边距”的多层嵌套套盒。
* 画册底色统一使用美术馆级温润暖纸白（`#faf8f5`），消除纯白强光与刺眼眩光。
* 设计资产、三图画廊（`pure-gallery-media-grid`）与海报直接纯粹平铺于画册底层，100% 释放画面空间。

### ④ 左右视觉天平与多图平铺配比 (Balanced Composition)
* 全局 Flex 居中对齐，严禁单侧偏左贴边。
* 演进型项目：左侧起始徽标（`340px`）与右侧成果主图（`580px`）形成 `1 : 1.7` 黄金重心天平。
* 多图型项目（`IANG`, `NoAGI BOOKS`）：三图并列并齐平铺（`max-height: 52vh`），比例平衡呼吸自然。

### ⑤ 纯粹主义退出控件 (Pure Sans-serif '×')
* 移除底色、边框与 ESC 胶囊，采用醒目大气（`2.05rem / 250字重 / 34px点击热区`）的无衬线字符 `×`。

### ⑥ 去油去重与单一职责叙事 (Anti-Fluff Copywriting)
* 严格锚定真实原型背景，杜绝空洞形容词（“升华、赋能、深度融合”）。
* 字段单一职责，具体状态词严禁跨字段复读 2 次以上；Workflow 严格精炼为 3 步真实工具链。

### ⑦ 沉浸式高清灯箱放大 (Image Lightbox Zoom)
* 弹窗内所有图片（演进图、主画卷、三图画廊）均支持点击全屏高清放大（Lightbox Zoom）。
* 支持点击空白处、点击右上角“×”或按 `Esc` 退出缩放。

---

## 3. 工作区避坑指引 (Pitfalls)
详见本地 [`PITFALLS.md`](./PITFALLS.md)。

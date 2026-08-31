import handmadeLogoImg from '../assets/HandmadeLogo.jpg'
import parentsHandbookImg from '../assets/Parentshandbook.png'
import easyNoteImg from '../assets/mockup1.png'
import alineHeroImg from '../assets/aline-hero.png'
import rainbowByteImg from '../assets/rainbow-byte.png'
import apocalypticBehemothImg from '../assets/apocalyptic-behemoth.png'
import iammusicImg from '../assets/Screenshots.png'
import sebBypassImg from '../assets/seb-bypass-cmd.png'
import antigravityBotImg from '../assets/antigravity_bot.png'
import alienTransparentImg from '../assets/alien-transparent.png'
import sitecardDefaultImg from '../assets/sitecard-default.png'

export { antigravityBotImg, alienTransparentImg, sitecardDefaultImg }

export type ProjectCategory = 'engineering' | 'design'

export type Project = {
  id: string
  category: ProjectCategory
  kind: 'case-study' | 'experimental' | 'tooling' | 'ai-visual' | 'coming-soon'
  title: string
  subtitle?: string
  description: string
  stack: string[]
  href?: string
  githubUrl?: string
  image?: string
  // Case study fields for design projects
  intent?: string
  workflow?: string
  toolsUsed?: string[]
  videoUrl?: string
  tags?: string[]
  concept?: string
  useCase?: string
  // Multi-image gallery for immersive case study viewer
  galleryImages?: string[]
  // Evolution/origin story for IP projects (e.g. Rainbow Byte)
  evolution?: {
    originImage: string
    originLabel: string
    resultLabel: string
    story: string
    zhStory?: string
  }
  zh?: {
    title?: string
    subtitle?: string
    description?: string
    intent?: string
    workflow?: string
    concept?: string
    useCase?: string
  }
}

// Row 1 — Engineering / Code Projects
export const engineeringProjects: Project[] = [
  {
    id: 'easynote',
    category: 'engineering',
    kind: 'case-study',
    title: 'EasyNote',
    subtitle: 'Minimalist Productivity Hub',
    description:
      'A goal-tracking and note-taking PWA built with Supabase for cloud sync and offline-first use across devices.',
    stack: ['React', 'Supabase', 'TypeScript', 'Tailwind'],
    href: 'https://www.easynote.date/',
    githubUrl: 'https://github.com/Tyleraltight/EasyNote',
    image: easyNoteImg,
    zh: {
      title: 'EasyNote',
      subtitle: '极简生产力枢纽',
      description: '一个结合目标追踪与笔记功能的 PWA 应用，支持 Supabase 云同步，具备离线优先设计并可多端协同。'
    }
  },
  {
    id: 'safe-exam-browser-bypass',
    category: 'engineering',
    kind: 'tooling',
    title: 'SEB Bypass Tool',
    subtitle: 'VMware Environment Patcher',
    description: 'A toolkit for running Safe Exam Browser inside a VMware virtual machine by patching IL code to bypass virtualization and display checks.',
    stack: ['C#', 'PowerShell', '.NET 9', 'IL Patching'],
    href: 'https://github.com/Tyleraltight/SafeExamBrowser_bypass',
    githubUrl: 'https://github.com/Tyleraltight/SafeExamBrowser_bypass',
    image: sebBypassImg,
    zh: {
      title: 'SEB 虚拟机绕过工具',
      subtitle: 'VMware 环境 IL 补丁',
      description: '一个能在 VMware 虚拟机中运行 Safe Exam Browser 的工具包，通过给 IL 代码打补丁绕过虚拟机和显示器检测。'
    }
  },
  {
    id: 'parents-handbook',
    category: 'engineering',
    kind: 'case-study',
    title: 'ParentsHandbook',
    subtitle: 'LLM-powered Movie Audit',
    description:
      'An NSFW movie audit tool built with Gemini that rates content across five categories, including sex, violence, gore, profanity, and substance use, producing structured risk scores.',
    stack: ['FastAPI', 'Gemini', 'Redis', 'Vercel'],
    href: 'https://parentshandbook.vercel.app/',
    githubUrl: 'https://github.com/Tyleraltight/ParentsHandbook',
    image: parentsHandbookImg,
    zh: {
      title: 'ParentsHandbook',
      subtitle: '大语言模型电影内容审计',
      description: '基于 Gemini 的成人电影内容审计工具，从色情、暴力、血腥、脏话与药物滥用等 5 项指标生成结构化风险评分。'
    }
  },
  {
    id: 'aline-designer-recruitment',
    category: 'engineering',
    kind: 'case-study',
    title: 'A-Line',
    subtitle: 'Designer Recruitment Platform',
    description:
      'A landing page for a designer recruitment agency, built with a bento grid layout and strong typographic hierarchy.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://tyleraltight.github.io/DesignerApplyment_company/A-Line-landing/index.html',
    githubUrl: 'https://github.com/Tyleraltight/DesignerApplyment_company',
    image: alineHeroImg,
    zh: {
      title: 'A-Line',
      subtitle: '顶尖设计师选聘平台',
      description: '为设计师招聘机构设计的品牌落地页，采用 Bento 网格布局与清晰的文字排版层级。'
    }
  },
  {
    id: 'iammusic',
    category: 'engineering',
    kind: 'case-study',
    title: 'IAMMUSIC',
    subtitle: '3D Vinyl Player',
    description:
      'An interactive web vinyl record player with a 3D perspective gallery and audio streaming.',
    stack: ['React', 'CSS', 'JavaScript'],
    href: 'https://tyleraltight.github.io/IAMMUSIC/',
    githubUrl: 'https://github.com/Tyleraltight/IAMMUSIC',
    image: iammusicImg,
    zh: {
      title: 'IAMMUSIC',
      subtitle: '3D 拟真黑胶唱机',
      description: '一个带有 3D 视角画廊与在线音乐播放功能的黑胶唱片机网页应用。'
    }
  },
  {
    id: 'coming-soon',
    category: 'engineering',
    kind: 'coming-soon',
    title: 'Coming Soon',
    description: 'Work in Progress',
    stack: [],
    zh: {
      title: '敬请期待',
      description: '正在开发中'
    }
  },
]

// Row 2 — Design & AI Visuals
export const designProjects: Project[] = [
  {
    id: 'ironbite-shanghai-tide',
    category: 'design',
    kind: 'case-study',
    title: 'IRONBITE: Shanghai Tide',
    subtitle: 'Sci-Fi IP Worldbuilding & Mecha Creature Concept',
    description:
      'A near-future sci-fi concept establishing the amphibious assault mech AAM-07C "Gator" and pilot Kai Ito along the submerged Shanghai coastal defense line. Combining predatory crocodilian biomechanics with heavy industrial hydraulics, the project presents complete worldbuilding and mechanical schematics.',
    stack: ['GPT Image-2', 'Worldbuilding', 'Figma', 'Prompt Engineering', 'Concept Art'],
    image: apocalypticBehemothImg,
    tags: ['Sci-Fi', 'Mecha', 'Creature Design', 'Worldbuilding', 'Concept Art'],
    concept:
      'Fusing apex reptilian biomechanics with heavy industrial military engineering for submerged urban warfare.',
    workflow:
      '1. Worldbuild: Establish coastal defense lore and amphibious assault mech (AAM-07C) specifications.\n2. Synthesize: Block out rough sketches, directing GPT Image-2 for cinematic key art, orthographics, and character sheets.\n3. Assemble: Design HUD data overlays and typographic hierarchy in Figma, compositing the master setting sheet.',
    useCase:
      'Video game IP development, film visual dev, setting artbook, and collectible figurine prototyping.',
    zh: {
      title: 'IRONBITE: 上海潮汐',
      subtitle: '近未来科幻机甲生物概念设计与世界观构建',
      description:
        '设定于近未来海平面上升后的东亚沿海防线，围绕两栖重型突击机甲 AAM-07C“巨鳄”及其驾驶员 Kai Ito 展开的原创科幻 IP 概念设计。结合冷血掠食者的生物力学骨骼与重工业液压结构，呈现从世界观叙事到机体拆解的完整概念设计体系。',
      concept: '以两栖顶级掠食者的解剖构造为蓝本，结合重工业机械美学，打造适应淹没都市战场的两栖近战重型载具。',
      workflow: '1. 设定：确立近未来淹没防线世界观与两栖突击机甲（AAM-07C）核心参数。\n2. 生成：绘制初始形态草图，借助 GPT Image-2 渲染关键帧插画、机械三视图与角色设定。\n3. 总装：在 Figma 中完成 HUD 数据标注、工业排版并整合为完整设定集图纸。',
      useCase: '科幻游戏 IP、影视动画概念设计、世界观设定集出版与雕像手办开发。'
    }
  },
  {
    id: 'rainbow-byte-mascot',
    category: 'design',
    kind: 'case-study',
    title: 'Rainbow Byte: Pixel Joy',
    subtitle: 'Logo to Character IP Matrix',
    description:
      'Rooted in my open-source project originally built as a companion tool for Google Antigravity, this project takes that authentic prototype to systematically derive a standalone original character IP matrix.',
    stack: ['Figma', 'Aseprite', 'Photoshop', 'GPT Image-2', 'Pixel Art'],
    image: rainbowByteImg,
    tags: ['Logo to IP', 'Character Design', 'Pixel Art', 'Merchandising'],
    toolsUsed: ['Figma', 'Aseprite', 'Adobe Photoshop', 'GPT Image-2'],
    evolution: {
      originImage: sitecardDefaultImg,
      originLabel: 'Google Antigravity Logo',
      resultLabel: 'Character IP Matrix',
      story:
        'Originating from my open-source tool for Google Antigravity, this project uses an authentic prototype to expand the logo into an original character IP matrix.',
      zhStory:
        '源自为 Google Antigravity 开发的开源工具，以此为真实原型将工具 Logo 拓展为原创角色 IP 矩阵。'
    },
    concept:
      'Transforming a functional software logo from an authentic tool prototype into an original character IP matrix.',
    workflow:
      '1. Prototype: 3-state animated pixel sprites for open-source tool.\n2. Expand: 24 emotive states and 5-view turnarounds in Figma & Aseprite.\n3. Finalize: Staged with GPT Image-2, assembled in Figma.',
    useCase:
      'Character IP guidelines, open-source tool assets, sticker packs, and plush merchandise.',
    zh: {
      title: '彩虹小比特 (Rainbow Byte)',
      subtitle: 'Logo 到角色 IP 矩阵推导',
      description:
        '本项目源自我的开源项目。最初为 Google Antigravity 打造辅助工具，随后以此为原型进行拓展，推导出一套拥有真实原型的原创角色 IP 矩阵。',
      concept: '以真实的开源工具为原型，将功能性 Logo 转化为具备故事性的原创角色 IP。',
      workflow: '1. 原型：为开源工具设计 3 态动态像素。\n2. 拓展：在 Figma / Aseprite 规范 24 态表情与五视角。\n3. 总装：GPT Image-2 协同渲染，在 Figma 完成海报。',
      useCase: '角色 IP 规范、开源工具物料、表情包与毛绒周边。'
    }
  },
  {
    id: 'design-coming-soon',
    category: 'design',
    kind: 'coming-soon',
    title: 'Coming Soon',
    description: 'Design in Progress',
    stack: [],
    zh: {
      title: '概念设计中',
      description: '新作品正在酝酿'
    }
  },
  {
    id: 'iang-brand-identity',
    category: 'design',
    kind: 'case-study',
    title: 'IANG: Brand Identity System',
    subtitle: 'Commercial Brand Design & Visual Identity',
    description:
      'An original brand logo designed for a local tarot and occultism studio in China, officially registered and commercially deployed as their trademark. The identity merges tarot celestial symbolism with elegant serif typography.',
    stack: ['Figma', 'Brand Identity', 'Typography', 'Commercial Delivery'],
    image: handmadeLogoImg,
    tags: ['Logo Design', 'Branding', 'Typography', 'Commercial'],
    concept:
      'Drawing from the Major Arcana "The Sun XIX" and healing hand gestures, paired with bespoke serif typography for an elegant occult studio mark.',
    workflow:
      '1. Concept: Extract esoteric tarot archetypes (The Sun XIX) and celestial hand motifs.\n2. Craft: Vectorize fine linework and refine bespoke serif typography in Figma.\n3. Delivery: Export trademark-ready vector assets and studio branding guidelines.',
    useCase:
      'Trademark registration, studio signage, custom tarot card decks, packaging, and hot-foil stationery.',
    zh: {
      title: 'IANG: 品牌视觉识别系统',
      subtitle: '商业品牌设计与视觉规范交付',
      description:
        '为国内某城市本地神秘学（Tarot）工作室量身定制的原创品牌 Logo，现已作为正式商标落地商用。设计融合了塔罗星象神秘学意象与优雅衬线字体。',
      concept: '提取塔罗大阿卡那“太阳牌 (The Sun XIX)”与双手托举的疗愈意象，结合高定衬线字体打造典雅的神秘学品牌标识。',
      workflow: '1. 意象：确立工作室定位，提取“太阳牌 (The Sun XIX)”与星象神秘学符号。\n2. 绘制：在 Figma 中完成极细线稿绘制与“IANG”高定衬线字标排版。\n3. 交付：输出商标注册标准矢量稿与全套门店商用物料规范。',
      useCase: '商标注册、工作室门头标识、塔罗卡背设计、定制包装与烫金物料。'
    }
  },
]


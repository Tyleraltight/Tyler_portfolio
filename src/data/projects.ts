import handmadeLogoImg from '../assets/HandmadeLogo.jpg'
import iangMockupImg from '../assets/IANG.jpg'
import iangStudioImg from '../assets/IANG2.jpg'
import noagiLogoImg from '../assets/noagi_logo_1x1.png'
import noagiMockupImg from '../assets/noagi_books_mockup_v2.jpg'
import noagiPosterImg from '../assets/noagi_zine_poster.jpg'
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
    midImage?: string
    midLabel?: string
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
      midImage: alienTransparentImg,
      midLabel: 'Pixel Mascot Sprite',
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
    id: 'noagi-books-identity',
    category: 'design',
    kind: 'case-study',
    title: 'NoAGI BOOKS: Offline Archive',
    subtitle: 'Independent Bookstore Rebrand & Visual Identity',
    description:
      'I worked with the bookstore founder from the earliest conversations to build the brand for this independent physical bookstore. When generative AI was picking up steam everywhere, we named the place "NoAGI" partly as a statement, partly because it just felt right: the shop was always going to be about ink, paper, and reading without an algorithm suggesting what comes next. I handled the brand direction, drew the logotype with custom letterforms, and took the work through to physical goods, including drawer boxes and zine packaging.',
    stack: ['LoveArt', 'Figma', 'GPT Image-2', 'Brand Identity', 'Typography'],
    image: noagiLogoImg,
    galleryImages: [noagiLogoImg, noagiMockupImg, noagiPosterImg],
    tags: ['Brand Identity', 'Packaging', 'Typography', 'Merchandising', 'Editorial'],
    concept:
      'Deconstructing the mechanical barcode into a skyline of book spines, where tilted books break symmetry to symbolize independent minds navigating algorithmic conformity.',
    workflow:
      '1. Typeface: Generate carved letterforms and custom logotype in LoveArt.\n2. Vector: Import into Figma for node cleanup, optical kerning, and barcode grid construction.\n3. Assembly: Synthesize drawer box mockups and zine poster visuals with GPT Image-2, finalizing layout in Figma.',
    useCase:
      'Brand identity system, 3-tier archival book boxes, washi tape zine posters, editorial book design, and bookstore spatial signage.',
    zh: {
      title: 'NoAGI BOOKS: 离线纸本档案馆',
      subtitle: '独立实体书店品牌重塑与 IP 视觉系统',
      description:
        '为国内隐于城市街巷中的独立实体书店量身打造的全套品牌重塑与 IP 视觉系统。在算法接管思考的 AGI 浪潮中，以“NoAGI”命名作为清醒的退守与反叛，退回植物纤维与油墨的触觉重量，构筑一座让读者重回思考源点的离线文化空间。',
      concept: '解构商业条形码为高低错落的书架书脊，以打破对称的倾斜书本隐喻独立思考的读者；结合粗粝温润的手工字形与纯蓝封箱胶带，建立反算法的先锋纸本美学。',
      workflow: '1. 字形：在 LoveArt 中生成刻凿感基础字形与“圖書室”定制字标。\n2. 矢量：导入 Figma 进行节点修正、字偶间距微调与条形码网格放样。\n3. 总装：借助 GPT Image-2 渲染三层书盒与海报样机，在 Figma 完成排版。',
      useCase: '品牌 VI 手册、三层抽屉式典藏书盒、实验性和纸胶带海报、书籍装帧与线下书室空间导视。'
    }
  },
  {
    id: 'iang-brand-identity',
    category: 'design',
    kind: 'case-study',
    title: 'IANG: Brand Identity System',
    subtitle: 'Commercial Brand Design & Merchandise System',
    description:
      'A bespoke original brand logo designed for a local tarot and occultism studio in China, officially registered as a commercial trademark and extended into a full physical merchandise line—including custom tote bags, hot-foil appointment cards, engraved wooden hangers, and brass storage boxes.',
    stack: ['Figma', 'Brand Identity', 'Merchandising', 'Typography', 'Commercial Delivery'],
    image: handmadeLogoImg,
    galleryImages: [handmadeLogoImg, iangMockupImg, iangStudioImg],
    tags: ['Logo Design', 'Branding', 'Merchandising', 'Typography', 'Commercial'],
    concept:
      'Drawing from the Major Arcana "The Sun XIX" and healing hand gestures, paired with bespoke serif typography to create an enigmatic brand mark with versatile physical product extensions.',
    workflow:
      '1. Concept: Extract esoteric tarot archetypes (The Sun XIX) and celestial hand motifs.\n2. Craft: Vectorize fine linework and refine bespoke serif typography in Figma.\n3. Extension: Export trademark vector assets and spec physical merchandise (stationery, woodcraft, and brass items).',
    useCase:
      'Trademark registration, studio signage, merchandise collection (totes, cards, hangers, brass boxes), and physical interior display.',
    zh: {
      title: 'IANG: 品牌视觉识别系统',
      subtitle: '商业品牌设计与实体周边规范',
      description:
        '为国内某城市本地神秘学（Tarot）工作室量身定制的原创品牌 Logo，现已作为正式商标落地商用，并围绕该标识延伸定制了手提袋、烫金预约卡、木作衣架与黄铜收纳盒等一系列实体周边产品。',
      concept: '提取塔罗大阿卡那“太阳牌 (The Sun XIX)”与双手托举的疗愈意象，结合高定衬线字体打造兼具神秘学氛围与商业延展性的品牌标识及实体周边。',
      workflow: '1. 意象：确立工作室定位，提取“太阳牌 (The Sun XIX)”与星象神秘学符号。\n2. 绘制：在 Figma 中完成极细线稿绘制与“IANG”高定衬线字标排版。\n3. 延展：输出商标注册标准矢量稿，并完成纸袋、卡片、木作与黄铜周边打样规范。',
      useCase: '商标注册、工作室门头标识、全套塔罗周边物料（手提袋/预约卡/木衣架/黄铜盒）与空间陈列。'
    }
  },
]


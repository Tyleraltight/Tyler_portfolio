import handmadeLogoImg from '../assets/HandmadeLogo.jpg'
import parentsHandbookImg from '../assets/Parentshandbook.png'
import easyNoteImg from '../assets/mockup1.png'
import alineHeroImg from '../assets/aline-hero.png'
import rainbowByteImg from '../assets/rainbow-byte.png'
import englishImg from '../assets/english.png'
import apocalypticBehemothImg from '../assets/apocalyptic-behemoth.png'
import iammusicImg from '../assets/Screenshots.png'

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
  image?: string
  // Case study fields for design projects
  intent?: string
  workflow?: string
  toolsUsed?: string[]
  videoUrl?: string
  tags?: string[]
  concept?: string
  useCase?: string
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
    href: 'https://github.com/Tyleraltight/EasyNote',
    image: easyNoteImg,
    zh: {
      title: 'EasyNote',
      subtitle: '极简生产力枢纽',
      description: '一个结合目标追踪与笔记功能的 PWA 应用，支持 Supabase 云同步，具备离线优先设计并可多端协同。'
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
    href: 'https://github.com/Tyleraltight/ParentsHandbook',
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
    id: 'rainbow-byte-mascot',
    category: 'design',
    kind: 'case-study',
    title: 'Rainbow Byte: Pixel Joy',
    subtitle: 'Mascot Branding',
    description:
      'A mascot branding project expanding the pixel character from my Antigravity Bot into emotes and merchandise.',
    stack: ['Pixel Art', 'Character Design', 'Merchandising'],
    image: rainbowByteImg,
    tags: ['Pixel Art', 'Mascot', 'Branding', 'Plush Design'],
    concept:
      'Turning a desktop software assistant into a standalone character identity with physical merchandise.',
    workflow:
      'Drafted expression sheets, turnaround angles, and sample physical keychains and plush toys.',
    useCase: 'Plush toys, keychains, digital emote packs, and lifestyle merchandising.',
    zh: {
      title: '彩虹小比特 (Rainbow Byte)',
      subtitle: 'IP 形象设计',
      description: '基于 Antigravity Bot 助手衍生的吉祥物 IP 设计，制作了周边衍生品与表情包。',
      concept: '将桌面软件中的像素助手延伸为独立的形象识别体系与实体文创。',
      workflow: '绘制角色表情包、三视图，并打样亚克力挂件与毛绒公仔。',
      useCase: '毛绒公仔、亚克力挂件、数字表情包及生活方式周边产品。'
    }
  },
  {
    id: 'english-learning-cards',
    category: 'design',
    kind: 'case-study',
    title: 'Visual English Flashcards',
    subtitle: 'UI/UX & Education',
    description:
      'Educational flashcards that pair illustrations with word layouts to aid vocabulary study.',
    stack: ['UI Design', 'Illustration', 'Typography'],
    image: englishImg,
    tags: ['Education', 'UI/UX', 'Flashcards', 'Visual Design'],
    concept:
      'Using visual mnemonics to make vocabulary study clearer and easier to recall.',
    workflow:
      'Mapped information architecture, created a unified illustration style, and laid out card grids.',
    useCase: 'Educational apps, language learning platforms, and digital or physical flashcard decks.',
    zh: {
      title: 'IMAGE-2 英语学习卡片',
      subtitle: 'UI/UX 教育产品设计',
      description: '结合插图与文字布局的词汇学习卡片，帮助直观记忆单词。',
      concept: '通过图像与词汇的联想映射，降低记忆负担。',
      workflow: '梳理信息架构、制定一致的插画视觉规范并进行网格排版。',
      useCase: '教育类应用程序、语言学习平台，以及数字或实体学习闪卡。'
    }
  },
  {
    id: 'freelance-logo-design',
    category: 'design',
    kind: 'case-study',
    title: 'Commercial Logo & Brand Identity',
    subtitle: 'Freelance Design',
    description:
      'A commercial logo designed in Canva for a freelance client, delivered with vector SVG and print files.',
    stack: ['Canva', 'Logo Design', 'Brand Identity', 'Vector Graphic'],
    image: handmadeLogoImg,
    tags: ['Logo Design', 'Branding', 'Freelance', 'Commercial Delivery'],
    concept:
      'Designing a clean, memorable visual mark based on the client business goals and target audience.',
    workflow:
      'Client briefing, visual concept drafting, precision composition in Canva, and delivering production-ready commercial assets.',
    useCase: 'Commercial branding, corporate identity, digital media, and offline merchandise.',
    zh: {
      title: '商业 LOGO 定制与品牌视觉设计',
      subtitle: '独立自由设计师项目',
      description: '为自由职业接单客户定制的商用 LOGO，使用 Canva 制作并交付全套矢量及印刷文件。',
      concept: '根据客户的业务属性与受众定位，设计辨识度高且易于应用的品牌标志。',
      workflow: '沟通需求、绘制概念草图、在 Canva 中调整图形细节，并打样交付商用文件包。',
      useCase: '品牌商用落地、企业 VI 视觉识别、线上营销传播与产品周边呈现。'
    }
  },
  {
    id: 'apocalyptic-behemoth-ip',
    category: 'design',
    kind: 'case-study',
    title: 'Apocalyptic Behemoth: IP Concept',
    subtitle: 'Character Design & 2D Animation',
    description:
      'An original apocalyptic behemoth character concept, designed for 2D animation, featuring intricate organic armor and imposing scale.',
    stack: ['Clip Studio Paint', 'Photoshop', '2D Illustration'],
    image: apocalypticBehemothImg,
    tags: ['Animation', 'Character Design', 'Creature Concept', '2D Art'],
    concept:
      'Exploring the terrifying beauty of post-apocalyptic apex predators through sharp silhouettes and bio-mechanical aesthetics.',
    workflow:
      'Initial rough sketching and silhouette blocking, followed by detailed line art and layered digital painting in professional 2D illustration software.',
    useCase: 'Concept art for animated series, video game boss design, and collectible art prints.',
    zh: {
      title: '末日巨兽：动画 IP 设定',
      subtitle: '角色设计与 2D 插画',
      description: '原创的末日巨兽角色设定，专为动画制作设计，具有错综复杂的有机生物装甲和极具压迫感的体型。',
      concept: '通过凌厉的剪影与生物机械美学，探索末日世界顶级掠食者的恐怖之美。',
      workflow: '使用 2D 绘图软件进行初期草图绘制、剪影构建、精细线稿刻画以及分层数字上色。',
      useCase: '动画剧集概念设计、电子游戏 Boss 设定以及艺术收藏版画。'
    }
  },
]

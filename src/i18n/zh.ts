import type { Dictionary } from "./index";

export const zh: Dictionary = {
  meta: {
    title: "能源行业监管局",
    description: "ARSE负责监管布基纳法索的能源行业：保护用户和从业者权益，制定电价，解决争议，并向总理汇报工作。",
  },

  site: {
    fullName: "能源行业监管局",
    hoursLabel: "周一至周五，07:30 – 16:00",
  },

  nav: {
    contact: "联系我们",
    menu: "菜单",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    home: "首页",
    mainNavigation: "主导航",
    languageLabel: "语言",
    items: [
      { key: "home", label: "首页", href: "/", desc: "返回ARSE首页。", children: [] },
      {
        key: "arse",
        label: "ARSE",
        href: "/arse/presentation/",
        desc: "致力于建设受监管、透明和可持续能源行业的独立行政机构。",
        children: [
          { label: "机构介绍", href: "/arse/presentation/" },
          { label: "发展历程", href: "/arse/historique/" },
          { label: "使命", href: "/arse/mission/" },
          { label: "职权", href: "/arse/attributions/" },
          { label: "组织架构", href: "/arse/organisation/" },
          { label: "招聘信息", href: "/arse/recrutement/" },
        ],
      },
      {
        key: "documentation",
        label: "文献资料",
        href: "/documentation/",
        desc: "规范能源行业的报告、公报、决定、法令、法律和政令。",
        children: [
          { label: "年度报告", href: "/documentation/rapports/" },
          { label: "官方公报", href: "/documentation/bulletins/" },
          { label: "决定", href: "/documentation/decisions/" },
          { label: "部级法令", href: "/documentation/arretes/" },
          { label: "法律", href: "/documentation/lois/" },
          { label: "政令", href: "/documentation/decrets/" },
        ],
      },
      {
        key: "actualite",
        label: "新闻动态",
        href: "/actualite/",
        desc: "专题报道、社论、访谈及本机构近期活动。",
        children: [
          { label: "工作动态", href: "/actualite/activite/" },
          { label: "专题报道", href: "/actualite/dossier/" },
          { label: "社论", href: "/actualite/editorial/" },
          { label: "访谈", href: "/actualite/interview/" },
        ],
      },
      {
        key: "consommateur",
        label: "消费者",
        href: "/consommateur/",
        desc: "作为能源行业用户，您的权利、救济途径及实用信息。",
        children: [],
      },
      {
        key: "contact",
        label: "联系方式",
        href: "/contact/",
        desc: "ARSE联系方式、瓦加杜古总部及官方社交媒体。",
        children: [],
      },
    ],
  },

  hero: {
    kicker: "能源行业持续受到监管",
    lines: [
      [{ text: "一个受监管、" }],
      [{ text: "透明", highlight: true }, { text: "、" }],
      [{ text: "可持续的能源行业" }],
    ],
    lede: "了解ARSE 2025年度活动报告，展现本机构为打造高效、可持续能源行业所取得的成就与作出的承诺。",
    cta: "阅读2025年度报告",
    counterLabel: "全国发电量 — 2024年",
    imageAlt: "布基纳法索技术人员在电力线路上作业",
  },

  manifesto:
    "能源行业监管局是一个独立的行政机构，具有法人资格及财务和管理自主权。该机构负责监管能源行业，保护用户和从业者权益，制定电价，解决争议，并向总理汇报工作。",

  missions: {
    kicker: "我们的职权",
    heading: "本机构的职能",
    intro: "法律赋予的四大职能领域，致力于提供可靠、公平的公共能源服务。",
    scrollHint: "滑动查看",
    outroTitle: "ARSE的全部职权",
    outroText: "能源行业总体监管法赋予本机构的详细职权范围。",
    outroCta: "查看详情",
    items: [
      {
        title: "监管行业",
        text: "监督全国范围内的能源生产、输送和分配活动。",
        alt: "工程师分析能源生产数据",
      },
      {
        title: "保护用户",
        text: "为消费者及行业从业者保障公平的准入、合理的电价和优质的服务。",
        alt: "布基纳法索的配电网络",
      },
      {
        title: "制定电价",
        text: "确定并修订适用于能源行业运营商的电价表。",
        alt: "围绕太阳能板举行的技术会议",
      },
      {
        title: "解决争议",
        text: "受理并仲裁运营商之间，或运营商与公共能源服务用户之间的争议。",
        alt: "ARSE工作会议",
      },
    ],
  },

  stats: {
    kicker: "行业数据",
    heading: "2024年能源生产数据",
    labels: ["2024年全国发电量", "并入电网的私营发电量", "火力发电占比", "太阳能发电占比"],
  },

  president: {
    kicker: "主席致辞",
    role: "监管委员会主席",
    imageAlt: "ARSE监管委员会主席",
    quote:
      "谨代表监管委员会及ARSE全体团队，欢迎您访问本机构网站——一个致力于信息公开、透明度提升，以及推动高效、公平、可持续能源行业发展的平台。",
  },

  publications: {
    heading: "报告、期刊与官方公报",
    cta: "查看全部文献资料",
    items: [
      { title: "2024年度活动报告", type: "报告" },
      { title: "2023年度活动报告", type: "报告" },
      { title: "《监管者》第014期", type: "期刊" },
      { title: "第13号官方公报", type: "公报" },
    ],
  },

  news: {
    heading: "ARSE最新动态",
    cta: "查看全部新闻",
    items: [
      {
        title: "电网规范：ARSE加强纳康贝、纳济农和古尔穆地区相关方的推广工作",
        dateLabel: "2026年9月15日",
        category: "工作动态",
      },
      {
        title: "消费者保护：ARSE联合七家监管机构共同推广最佳实践",
        dateLabel: "2026年8月14日",
        category: "专题报道",
      },
      {
        title: "案件办理时限：ARSE制定参考标准以提升办理效率",
        dateLabel: "2026年8月12日",
        category: "社论",
      },
      {
        title: "电网规范：ARSE向吉里科地区相关方推广相关内容",
        dateLabel: "2026年8月24日",
        category: "工作动态",
      },
    ],
  },

  cta: {
    heading: "有疑问或投诉？",
    text: "ARSE随时倾听能源行业用户和从业者的诉求。如需任何信息，请联系我们的团队。",
    primary: "联系我们",
  },

  footer: {
    rights: "版权所有，保留一切权利。",
    columns: [
      {
        title: "资源",
        links: [
          { label: "部级法令", href: "/documentation/arretes/" },
          { label: "决定", href: "/documentation/decisions/" },
          { label: "官方公报", href: "/documentation/bulletins/" },
          { label: "ARSE期刊", href: "/documentation/journal/" },
          { label: "消费者", href: "/consommateur/" },
        ],
      },
      {
        title: "新闻动态",
        links: [
          { label: "专题报道", href: "/actualite/dossier/" },
          { label: "社论", href: "/actualite/editorial/" },
          { label: "访谈", href: "/actualite/interview/" },
          { label: "听证会", href: "/actualite/audience/" },
          { label: "新闻公告", href: "/actualite/communique/" },
        ],
      },
      {
        title: "相关链接",
        links: [
          { label: "ANEREE", href: "https://aneree.bf/", external: true },
          { label: "SONABEL", href: "https://www.sonabel.bf/", external: true },
          { label: "能源部", href: "https://energie.gov.bf/", external: true },
          { label: "ABER", href: "https://aber.bf/", external: true },
        ],
      },
      {
        title: "其他",
        links: [
          { label: "合作伙伴", href: "/partenaires/" },
          { label: "招聘信息", href: "/arse/recrutement/" },
          { label: "Cookie政策", href: "/politique-cookies/" },
          { label: "使用条款", href: "/conditions-utilisation/" },
        ],
      },
    ],
  },

  common: {
    readMore: "阅读更多",
    download: "下载",
    consult: "查看",
    backTo: "返回",
    viewAll: "查看全部",
    source: "官方文件 — 来源：arse.bf",
  },

  pages: {
    presentation: {
      kicker: "ARSE简介",
      title: "机构介绍",
      lede: "一个独立的行政机构，具有法人资格及财务和管理自主权。",
      intro:
        "能源行业监管局（ARSE）是一个独立的行政机构，具有法人资格及财务和管理自主权。该机构负责对能源行业运营商的活动进行监管、控制和跟踪。",
      quote: "ARSE作为独立机构，负责监管和管控布基纳法索的能源行业。",
      contextTitle: "不断强化的法律框架",
      context:
        "布基纳法索政府于2007年11月20日通过第027-2007/AN号法律对电力行业进行了改革，随后又于2017年4月20日通过法律将监管范围扩大至整个能源行业。",
      visionTitle: "2027年愿景",
      vision: "到2027年，ARSE将在国内树立良好的知名度和品牌形象，并成为次区域内具有标杆意义的监管机构。",
      valuesTitle: "我们的价值观",
      values: ["专业精神", "保密原则", "前瞻创新", "团队合作与团结互助", "伙伴关系"],
    },

    historique: {
      kicker: "ARSE简介",
      title: "发展历程",
      lede: "两次重大改革塑造了布基纳法索的能源行业，并催生了ARSE的诞生。",
      milestones: [
        {
          year: "2007年",
          title: "2007年11月20日第027-2007/AN号法律",
          text:
            "布基纳法索政府通过该法律对电力行业进行改革，通过引入竞争机制，改变了电力产业结构，提升了面向用户的服务效率和质量，并根据需求增加了供给。正是这部法律催生了电力子行业监管局（ARSE）的诞生——一个隶属于总理府、拥有财务自主权的独立行政机构。",
        },
        {
          year: "2017年",
          title: "2017年4月20日法律",
          text:
            "布基纳法索颁布新的能源法，旨在解决公民电力需求与主要运营商索纳贝尔公司（Sonabel）供给能力之间的失衡问题。主要创新包括：将监管范围扩展至整个能源行业（碳氢化合物子行业除外）；纳入次区域电力市场相关的共同体条款；取消市场分割和单一购买方制度；允许特定合格用户在国内或境外自由选择供应商；引入促进可再生能源和能效提升的相关条款；扩大监管机构对整个能源行业的职权——ARSE由此更名为能源行业监管局——并明确其资金来源方式。",
        },
      ],
    },

    mission: {
      kicker: "ARSE简介",
      title: "使命",
      lede: "ARSE负责监管能源行业，保护用户和从业者权益，制定电价，解决争议，并每年向总理汇报工作。",
      items: [
        "确保能源行业相关法律法规得到遵守",
        "维护公共能源服务用户的利益",
        "保护能源行业从业者的权益",
        "向国家提出能源行业适用电价方案",
        "解决能源行业不同参与方之间的争议",
        "确保能源行业整体财务平衡",
      ],
      accountabilityTitle: "问责机制",
      accountability: "ARSE主席每年向总理提交一份报告，汇报上一年度的工作情况。该报告副本还将呈送主管能源事务的部长、国家行政监督机构以及审计法院。",
    },

    attributions: {
      kicker: "ARSE简介",
      title: "职权",
      lede: "能源行业总体监管法赋予本机构咨询和决策双重职权。",
      consultativeTitle: "咨询职权",
      consultativeIntro: "在以下情况下，ARSE提供一般性意见：",
      consultative: [
        "涉及能源行业的法律法规草案",
        "能源主管部门提交的投资计划",
        "自主发电设施的征用事宜",
      ],
      decisionTitle: "决策职权",
      decisionIntro: "在以下情况下，ARSE的意见具有约束力：",
      decision: [
        "特许经营权、许可证和授权的授予、续期、审查、变更或撤销",
        "第三方接入电网的条件",
        "能源行业运营商的技术规范",
      ],
    },

    organisation: {
      kicker: "ARSE简介",
      title: "组织架构",
      lede: "ARSE由四个机构组成，共同保障其治理、协调运作以及监管职能的履行。",
      organs: [
        {
          title: "监管委员会",
          text: "ARSE的合议决策机构，负责在履行监管职能过程中通过监管局的意见、决定和建议。",
        },
        {
          title: "总秘书处",
          text: "负责ARSE行政协调工作，并执行监管委员会各项决定的机构。",
        },
        {
          title: "业务部门",
          text: "负责能源行业监管职能技术执行的部门：制定电价、监督运营商以及解决争议。",
        },
        {
          title: "综合保障部门",
          text: "保障监管局运作的支持部门：人力资源、财务、宣传以及信息系统。",
        },
      ],
    },

    recrutement: {
      kicker: "ARSE简介",
      title: "招聘信息",
      lede: "加入ARSE，共同建设一个高效、可持续并服务于全社会的能源行业。",
      jobsTitle: "职位空缺",
      jobsText: "能源行业监管局（ARSE）高度重视吸纳优秀人才。欢迎通过电子邮件提交自荐申请。",
      internshipsTitle: "实习机会",
      internshipsText: "ARSE同样欢迎希望在监管领域进行学术或职业实习的学生和专业人士。",
      proceduresTitle: "申请材料清单",
      procedures: ["申请书", "求职信", "个人简历"],
      contactTitle: "提交申请",
    },

    documentation: {
      kicker: "文献资料",
      title: "文献资料",
      lede: "规范布基纳法索能源行业的报告、公报、期刊、法律、政令、决定和法令。",
      categories: [
        { label: "年度活动报告", href: "/documentation/rapports/", desc: "本机构年度工作成果总结。" },
        { label: "官方公报", href: "/documentation/bulletins/", desc: "监管行为的权威公开出版物。" },
        { label: "ARSE期刊", href: "/documentation/journal/", desc: "《能源监管者》：行业新闻与深度报道。" },
        { label: "法律", href: "/documentation/lois/", desc: "规范能源行业的法律文本。" },
        { label: "政令", href: "/documentation/decrets/", desc: "部长理事会通过的实施政令。" },
        { label: "决定", href: "/documentation/decisions/", desc: "ARSE就其职权范围内事项作出的决定。" },
        { label: "部级法令", href: "/documentation/arretes/", desc: "部级及跨部门法令。" },
      ],
    },
    rapports: { kicker: "文献资料", title: "年度活动报告", lede: "ARSE为建设高效、可持续能源行业所取得成果与作出承诺的年度总结。" },
    bulletins: { kicker: "文献资料", title: "官方公报", lede: "追踪能源监管机构活动与决定的权威出版物。" },
    journal: { kicker: "文献资料", title: "ARSE期刊 — 《监管者》", lede: "阅读我们的文章，及时了解能源行业的最新动态。" },
    lois: { kicker: "文献资料", title: "法律", lede: "有关布基纳法索能源行业总体监管的法律文本。" },
    decrets: { kicker: "文献资料", title: "政令", lede: "部长理事会为落实行业监管而通过的实施政令。" },
    decisions: { kicker: "文献资料", title: "决定", lede: "ARSE就其职权范围内事项作出的各项决定。" },
    arretes: { kicker: "文献资料", title: "部级法令", lede: "适用于能源行业的部级及跨部门法令。" },

    actualiteHub: {
      kicker: "新闻动态",
      title: "新闻动态",
      lede: "能源行业监管局的专题报道、社论、访谈及近期工作动态。",
      categories: [
        { label: "工作动态", href: "/actualite/activite/", desc: "ARSE举办的研讨会、实地考察及各项行动。" },
        { label: "专题报道", href: "/actualite/dossier/", desc: "针对行业重大议题的深度分析。" },
        { label: "社论", href: "/actualite/editorial/", desc: "ARSE对能源行业时事的观点解读。" },
        { label: "访谈", href: "/actualite/interview/", desc: "与能源行业相关方的对话交流。" },
      ],
    },
    activite: { kicker: "新闻动态", title: "工作动态", lede: "ARSE与行业相关方共同举办的研讨会、实地考察及近期活动。" },
    dossier: { kicker: "新闻动态", title: "专题报道", lede: "针对能源行业核心议题的深度分析。" },
    editorial: { kicker: "新闻动态", title: "社论", lede: "ARSE对能源行业时事与挑战的观点解读。" },
    interview: { kicker: "新闻动态", title: "访谈", lede: "与能源行业相关方及合作伙伴的对话交流。", empty: "目前暂无相关文章。" },

    consommateur: {
      kicker: "消费者",
      title: "作为用户，您享有的权利",
      lede: "保护公共能源服务用户权益，是ARSE的核心使命之一。",
      intro:
        "作为能源行业用户，您有权享有公平的服务准入、合理的电价和优质的服务。ARSE负责监督这些权利得到落实，如您与行业运营商发生任何争议，均可向本机构提出申诉。",
      rightsTitle: "监管为您提供的保障",
      rights: [
        "在全国范围内公平获取能源服务",
        "由本机构制定并监管的电价，绝不随意变动",
        "获得持证运营商提供的优质服务",
        "与运营商发生争议时，可向ARSE寻求救济",
      ],
      resourcesTitle: "实用资源",
    },

    contact: {
      kicker: "联系方式",
      title: "联系我们",
      lede: "如您有任何与能源行业相关的信息需求或问题，请直接联系ARSE。",
      formTitle: "给我们留言",
      fields: {
        name: "您的姓名",
        phone: "电话",
        email: "您的电子邮箱",
        locality: "所在地区",
        province: "所在省份",
        subject: "主题",
        message: "留言内容",
      },
      submit: "发送留言",
      formNote: "本表单需在正式上线前连接至邮件发送服务（如Formspree）。",
      success: "留言已确认。（演示模式：实际未发送任何数据。）",
      sending: "发送中…",
      infoTitle: "联系方式",
      hoursTitle: "办公时间",
    },

    partenaires: {
      kicker: "合作伙伴",
      title: "我们的合作伙伴",
      lede: "ARSE与布基纳法索能源行业相关的公共机构携手合作。",
      items: [
        { name: "ANEREE", desc: "国家可再生能源与能效署", href: "https://aneree.bf/" },
        { name: "SONABEL", desc: "布基纳法索国家电力公司", href: "https://www.sonabel.bf/" },
        { name: "能源部", desc: "负责能源、矿产与采石业的主管部门", href: "https://www.energie-mines.gov.bf/accueil" },
        { name: "ABER", desc: "布基纳法索农村电气化署", href: "https://aber.bf/" },
      ],
    },

    cookies: {
      kicker: "法律信息",
      title: "Cookie政策",
      lede: "ARSE网站如何使用Cookie，以及您如何管理相关偏好设置。",
      sections: [
        { title: "严格必要的Cookie", text: "网站正常运行所必需，无法禁用。" },
        { title: "性能类Cookie", text: "用于统计网站访问量，帮助分析使用情况以持续改进网站。" },
        { title: "功能类Cookie", text: "记住您的偏好设置，让您每次访问都更加流畅。" },
        { title: "第三方Cookie", text: "部分嵌入内容（视频、社交媒体）可能会设置其自身的Cookie。" },
        { title: "同意机制", text: "首次访问时会显示提示横幅。您的同意有效期最长为13个月。" },
        { title: "管理方式", text: "您可随时通过浏览器设置调整Cookie偏好。" },
        { title: "数据保护", text: "您的数据处理符合布基纳法索现行法律，且绝不会出售或转让给第三方。" },
      ],
    },

    terms: {
      kicker: "法律信息",
      title: "使用条款",
      lede: "能源行业监管局官方网站的使用规则。",
      sections: [
        { title: "网站宗旨", text: "本网站旨在介绍ARSE的机构情况、使命、官方出版物及最新动态。" },
        { title: "知识产权", text: "除另有说明外，本网站发布的所有内容（文字、图片、文件）均归ARSE所有。" },
        { title: "文件使用说明", text: "官方文件（法律、政令、决定、法令）仅供参考之用。唯有在官方公报上发布的版本具有法律效力。" },
        { title: "责任声明", text: "ARSE致力于确保所发布信息的准确性，但对任何错误或遗漏不承担责任。" },
        { title: "外部链接", text: "本网站可能包含指向第三方网站的链接，ARSE对该等网站不承担任何控制责任。" },
      ],
    },
  },
};

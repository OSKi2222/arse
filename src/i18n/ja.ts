import type { Dictionary } from "./index";

export const ja: Dictionary = {
  meta: {
    title: "エネルギー分野規制庁",
    description:
      "ARSEはブルキナファソのエネルギー分野を規制する機関です。利用者と事業者を保護し、料金を設定し、紛争を解決し、首相に対して報告を行います。",
  },

  site: {
    fullName: "エネルギー分野規制庁",
    hoursLabel: "月曜〜金曜 07:30〜16:00",
  },

  nav: {
    contact: "お問い合わせ",
    menu: "メニュー",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    home: "ホーム",
    mainNavigation: "メインナビゲーション",
    languageLabel: "言語",
    items: [
      { key: "home", label: "ホーム", href: "/", desc: "ARSEのホームページに戻ります。", children: [] },
      {
        key: "arse",
        label: "ARSEについて",
        href: "/arse/presentation/",
        desc: "規制され、透明で持続可能なエネルギー分野の実現を目指す独立行政機関です。",
        children: [
          { label: "機関紹介", href: "/arse/presentation/" },
          { label: "沿革", href: "/arse/historique/" },
          { label: "使命", href: "/arse/mission/" },
          { label: "権限", href: "/arse/attributions/" },
          { label: "組織", href: "/arse/organisation/" },
          { label: "採用情報", href: "/arse/recrutement/" },
        ],
      },
      {
        key: "documentation",
        label: "資料",
        href: "/documentation/",
        desc: "エネルギー分野を規制する報告書、公報、決定、命令、法律、政令。",
        children: [
          { label: "活動報告書", href: "/documentation/rapports/" },
          { label: "公報", href: "/documentation/bulletins/" },
          { label: "決定", href: "/documentation/decisions/" },
          { label: "省令", href: "/documentation/arretes/" },
          { label: "法律", href: "/documentation/lois/" },
          { label: "政令", href: "/documentation/decrets/" },
        ],
      },
      {
        key: "actualite",
        label: "ニュース",
        href: "/actualite/",
        desc: "特集記事、論説、インタビュー、当局の最近の活動をご紹介します。",
        children: [
          { label: "活動", href: "/actualite/activite/" },
          { label: "特集", href: "/actualite/dossier/" },
          { label: "論説", href: "/actualite/editorial/" },
          { label: "インタビュー", href: "/actualite/interview/" },
        ],
      },
      {
        key: "consommateur",
        label: "消費者の皆様へ",
        href: "/consommateur/",
        desc: "エネルギー分野の利用者としての権利、救済手段、実用情報をご案内します。",
        children: [],
      },
      {
        key: "contact",
        label: "お問い合わせ",
        href: "/contact/",
        desc: "ARSEの連絡先、ワガドゥグ本部、公式ソーシャルメディア。",
        children: [],
      },
    ],
  },

  hero: {
    kicker: "継続的に規制されるエネルギー分野",
    lines: [
      [{ text: "規制され、" }],
      [{ text: "透明", highlight: true }, { text: "で" }],
      [{ text: "持続可能なエネルギー分野" }],
    ],
    lede: "ARSEの2025年度活動報告書をご覧ください。効率的で持続可能なエネルギー分野の実現に向けた成果と取り組みをご紹介します。",
    cta: "2025年度報告書を読む",
    counterLabel: "国内発電量 — 2024年",
    imageAlt: "ブルキナファソの送電線で作業する技術者",
  },

  manifesto:
    "エネルギー分野規制庁は、法人格ならびに財政的・運営的自律性を有する独立行政機関です。エネルギー分野を規制し、利用者と事業者を保護し、料金を設定し、紛争を解決し、首相に対して報告を行います。",

  missions: {
    kicker: "当局の権限",
    heading: "当局の役割",
    intro: "法律で定められた4つの活動分野を通じ、信頼性が高く公平な公共エネルギーサービスの実現に貢献します。",
    scrollHint: "スクロールしてください",
    outroTitle: "ARSEのすべての権限",
    outroText: "エネルギー分野の一般規制に関する法律により当局に付与された権限の詳細です。",
    outroCta: "詳細を見る",
    items: [
      {
        title: "分野を規制する",
        text: "国内全域におけるエネルギーの生産、輸送、配給活動を監督します。",
        alt: "エネルギー生産データを分析するエンジニア",
      },
      {
        title: "利用者を保護する",
        text: "消費者と事業者の双方に対し、公平なアクセス、適正な料金、質の高いサービスを保証します。",
        alt: "ブルキナファソの配電網",
      },
      {
        title: "料金を設定する",
        text: "エネルギー分野の事業者に適用される料金表を決定・改定します。",
        alt: "太陽光パネルを囲んで行われる技術会議",
      },
      {
        title: "紛争を解決する",
        text: "事業者間、または事業者と公共エネルギーサービス利用者との間の紛争を審査・仲裁します。",
        alt: "ARSEの作業会議",
      },
    ],
  },

  stats: {
    kicker: "数字で見るエネルギー分野",
    heading: "2024年エネルギー生産データ",
    labels: ["2024年の国内発電量", "系統に供給された民間発電量", "火力発電の割合", "太陽光発電の割合"],
  },

  president: {
    kicker: "会長からのメッセージ",
    role: "規制評議会会長",
    imageAlt: "ARSE規制評議会会長",
    quote:
      "規制評議会およびARSE職員一同を代表し、当ウェブサイトへようこそお越しくださいました。本サイトは、情報提供と透明性の確保、そして効率的で公平かつ持続可能なエネルギー分野の実現を目指す場です。",
  },

  publications: {
    heading: "報告書、機関誌、公報",
    cta: "資料一覧を見る",
    items: [
      { title: "2024年度活動報告書", type: "報告書" },
      { title: "2023年度活動報告書", type: "報告書" },
      { title: "Le Régulateur 第014号", type: "機関誌" },
      { title: "公報 第13号", type: "公報" },
    ],
  },

  news: {
    heading: "ARSEの最新ニュース",
    cta: "ニュース一覧を見る",
    items: [
      {
        title: "電力系統規則：ARSE、ナカンベ、ナジノン、グルムの関係者への浸透を強化",
        dateLabel: "2026年9月15日",
        category: "活動",
      },
      {
        title: "消費者保護：ARSE、7つの規制機関とベストプラクティスを共有",
        dateLabel: "2026年8月14日",
        category: "特集",
      },
      {
        title: "案件処理期間：ARSE、迅速化のための基準を策定",
        dateLabel: "2026年8月12日",
        category: "論説",
      },
      {
        title: "電力系統規則：ARSE、ギリコ地域の関係者へ内容を普及",
        dateLabel: "2026年8月24日",
        category: "活動",
      },
    ],
  },

  cta: {
    heading: "ご質問・苦情はございませんか？",
    text: "ARSEはエネルギー分野の利用者・事業者の皆様のお声に耳を傾けます。情報が必要な際は、担当チームまでお気軽にお問い合わせください。",
    primary: "お問い合わせ",
  },

  footer: {
    rights: "全著作権所有。",
    columns: [
      {
        title: "資料",
        links: [
          { label: "省令", href: "/documentation/arretes/" },
          { label: "決定", href: "/documentation/decisions/" },
          { label: "公報", href: "/documentation/bulletins/" },
          { label: "ARSE機関誌", href: "/documentation/journal/" },
          { label: "消費者の皆様へ", href: "/consommateur/" },
        ],
      },
      {
        title: "ニュース",
        links: [
          { label: "特集", href: "/actualite/dossier/" },
          { label: "論説", href: "/actualite/editorial/" },
          { label: "インタビュー", href: "/actualite/interview/" },
          { label: "公聴会", href: "/actualite/audience/" },
          { label: "プレスリリース", href: "/actualite/communique/" },
        ],
      },
      {
        title: "関連リンク",
        links: [
          { label: "ANEREE", href: "https://aneree.bf/", external: true },
          { label: "SONABEL", href: "https://www.sonabel.bf/", external: true },
          { label: "エネルギー省", href: "https://energie.gov.bf/", external: true },
          { label: "ABER", href: "https://aber.bf/", external: true },
        ],
      },
      {
        title: "その他",
        links: [
          { label: "パートナー", href: "/partenaires/" },
          { label: "採用情報", href: "/arse/recrutement/" },
          { label: "Cookieポリシー", href: "/politique-cookies/" },
          { label: "利用規約", href: "/conditions-utilisation/" },
        ],
      },
    ],
  },

  common: {
    readMore: "続きを読む",
    download: "ダウンロード",
    consult: "閲覧する",
    backTo: "戻る：",
    viewAll: "すべて見る",
    source: "公式文書 — 出典：arse.bf",
  },

  pages: {
    presentation: {
      kicker: "ARSEについて",
      title: "機関紹介",
      lede: "法人格ならびに財政的・運営的自律性を有する独立行政機関です。",
      intro:
        "エネルギー分野規制庁（ARSE）は、法人格ならびに財政的・運営的自律性を有する独立行政機関です。エネルギー分野の事業者の活動に対する規制、監督、モニタリングを行います。",
      quote: "ARSEは独立機関として、ブルキナファソのエネルギー分野を規制・監督しています。",
      contextTitle: "強化された法的枠組み",
      context:
        "ブルキナファソ政府は2007年11月20日の第027-2007/AN号法律により電力分野の改革を行い、その後2017年4月20日の法律によりエネルギー分野全体へと規制範囲を拡大しました。",
      visionTitle: "2027年ビジョン",
      vision: "2027年までに、ARSEは国内での認知度とブランドイメージを確立し、準地域における模範的な規制機関としての地位を築きます。",
      valuesTitle: "私たちの価値観",
      values: ["プロフェッショナリズム", "機密保持", "革新への先見性", "チームワークと連帯", "パートナーシップ"],
    },

    historique: {
      kicker: "ARSEについて",
      title: "沿革",
      lede: "ブルキナファソのエネルギー分野を形作った2つの大きな改革により、ARSEが誕生しました。",
      milestones: [
        {
          year: "2007年",
          title: "2007年11月20日 第027-2007/AN号法律",
          text:
            "ブルキナファソ政府はこの法律により電力分野を改革し、競争原理の導入によって利用者へのサービス効率と質を高め、需要に応じて供給を拡大する形で電力産業の構造を変革しました。この法律により、首相府の下に置かれ財政的自主性を有する独立行政機関である電力小分野規制庁（ARSE）が設立されました。",
        },
        {
          year: "2017年",
          title: "2017年4月20日法律",
          text:
            "ブルキナファソは、市民の電力需要と主要事業者ソナベル（Sonabel）の供給能力との不均衡を解消するため、新たなエネルギー法を制定しました。主な改革内容は次のとおりです：炭化水素小分野を除くエネルギー分野全体の規制、準地域電力市場に関する共同体規定の反映、市場区分および単一買取制度の廃止、一定の適格需要家が国内外を問わず希望する供給者から調達できる制度の導入、再生可能エネルギーおよびエネルギー効率の促進に関する規定の新設、規制機関の権限をエネルギー分野全体に拡大（これによりARSEはエネルギー分野規制庁となりました）、そしてその財源方式の明記です。",
        },
      ],
    },

    mission: {
      kicker: "ARSEについて",
      title: "使命",
      lede: "ARSEはエネルギー分野を規制し、利用者と事業者を保護し、料金を設定し、紛争を解決し、毎年首相に報告を行います。",
      items: [
        "エネルギー分野を規律する法令の遵守を確保する",
        "公共エネルギーサービス利用者の利益を守る",
        "エネルギー分野事業者の権利を保護する",
        "エネルギー分野に適用される料金を国に提案する",
        "エネルギー分野における各事業者間の紛争を解決する",
        "エネルギー分野全体の財務均衡を維持する",
      ],
      accountabilityTitle: "説明責任",
      accountability: "ARSE会長は毎年、前年度の活動報告書を首相に提出します。この報告書の写しは、エネルギー担当大臣、国の行政監督機関、および会計検査院にも送付されます。",
    },

    attributions: {
      kicker: "ARSEについて",
      title: "権限",
      lede: "エネルギー分野の一般規制に関する法律により、当局には諮問権限と決定権限の両方が付与されています。",
      consultativeTitle: "諮問権限",
      consultativeIntro: "以下の事項について、ARSEは一般的な意見を提出します：",
      consultative: [
        "分野に関する法令案",
        "エネルギー担当省庁から提出される投資計画",
        "自家発電設備の徴用",
      ],
      decisionTitle: "決定権限",
      decisionIntro: "以下の事項について、ARSEの意見は拘束力を持ちます：",
      decision: [
        "特許、免許、許可の付与、更新、見直し、変更または取り消し",
        "第三者による系統接続の条件",
        "エネルギー分野事業者の仕様書",
      ],
    },

    organisation: {
      kicker: "ARSEについて",
      title: "組織",
      lede: "ARSEは、ガバナンス、調整、そして規制任務の遂行を担う4つの機関で構成されています。",
      organs: [
        {
          title: "規制評議会",
          text: "ARSEの合議制の意思決定機関であり、規制任務の遂行にあたり、機関としての意見、決定、勧告を採択する役割を担います。",
        },
        {
          title: "事務総局",
          text: "ARSEの行政面での調整を担当し、規制評議会の決定を運用面で実行に移す機関です。",
        },
        {
          title: "業務局",
          text: "エネルギー分野の規制任務（料金設定、事業者の監督、紛争解決）の技術的な実行を担う部局です。",
        },
        {
          title: "横断部局・サービス",
          text: "機関の運営を支える部局・サービスであり、人事、財務、広報、情報システムを担当します。",
        },
      ],
    },

    recrutement: {
      kicker: "ARSEについて",
      title: "採用情報",
      lede: "ARSEに参加し、すべての人々のための効率的で持続可能なエネルギー分野の構築にご貢献ください。",
      jobsTitle: "求人",
      jobsText: "エネルギー分野規制庁（ARSE）は、優秀な人材の確保を重視しています。自主応募は電子メールにて受け付けています。",
      internshipsTitle: "インターンシップ",
      internshipsText: "ARSEでは、規制分野での実務経験を積みたい学生および社会人のインターンシップも受け入れています。",
      proceduresTitle: "必要書類",
      procedures: ["申込書", "志望動機書", "履歴書"],
      contactTitle: "応募する",
    },

    documentation: {
      kicker: "資料",
      title: "資料",
      lede: "ブルキナファソのエネルギー分野を規制する報告書、公報、機関誌、法律、政令、決定、省令。",
      categories: [
        { label: "活動報告書", href: "/documentation/rapports/", desc: "当局の年次成果報告です。" },
        { label: "公報", href: "/documentation/bulletins/", desc: "規制行為に関する基本刊行物です。" },
        { label: "ARSE機関誌", href: "/documentation/journal/", desc: "Le Régulateur de l'énergie：業界のニュースと特集記事です。" },
        { label: "法律", href: "/documentation/lois/", desc: "エネルギー分野を規律する法律です。" },
        { label: "政令", href: "/documentation/decrets/", desc: "閣議で採択された施行政令です。" },
        { label: "決定", href: "/documentation/decisions/", desc: "ARSEの所管事項に関する決定です。" },
        { label: "省令", href: "/documentation/arretes/", desc: "省庁および省庁間の命令です。" },
      ],
    },
    rapports: { kicker: "資料", title: "活動報告書", lede: "効率的で持続可能なエネルギー分野の実現に向けたARSEの成果と取り組みの年次報告です。" },
    bulletins: { kicker: "資料", title: "公報", lede: "エネルギー規制機関の活動と決定を追跡するための基本刊行物です。" },
    journal: { kicker: "資料", title: "ARSE機関誌 — Le Régulateur", lede: "記事をお読みいただき、エネルギー分野の動向を把握してください。" },
    lois: { kicker: "資料", title: "法律", lede: "ブルキナファソのエネルギー分野の一般規制に関する法律です。" },
    decrets: { kicker: "資料", title: "政令", lede: "分野規制の実施に向けて閣議で採択された施行政令です。" },
    decisions: { kicker: "資料", title: "決定", lede: "ARSEの所管事項について下された決定です。" },
    arretes: { kicker: "資料", title: "省令", lede: "エネルギー分野に適用される省庁および省庁間の命令です。" },

    actualiteHub: {
      kicker: "ニュース",
      title: "ニュース",
      lede: "エネルギー分野規制庁の特集記事、論説、インタビュー、最近の活動をご紹介します。",
      categories: [
        { label: "活動", href: "/actualite/activite/", desc: "ARSEが開催するワークショップ、現地調査、各種活動です。" },
        { label: "特集", href: "/actualite/dossier/", desc: "業界の重要テーマに関する詳細な分析です。" },
        { label: "論説", href: "/actualite/editorial/", desc: "エネルギー分野の動向に対するARSEの見解です。" },
        { label: "インタビュー", href: "/actualite/interview/", desc: "エネルギー分野関係者との対話です。" },
      ],
    },
    activite: { kicker: "ニュース", title: "活動", lede: "業界関係者とともに実施するワークショップ、現地調査、最近の活動です。" },
    dossier: { kicker: "ニュース", title: "特集", lede: "エネルギー分野を形作る重要テーマに関する詳細な分析です。" },
    editorial: { kicker: "ニュース", title: "論説", lede: "エネルギー分野の動向と課題に対するARSEの見解です。" },
    interview: { kicker: "ニュース", title: "インタビュー", lede: "エネルギー分野の関係者・パートナーとの対話です。", empty: "現在表示できる記事はありません。" },

    consommateur: {
      kicker: "消費者の皆様へ",
      title: "利用者としての権利",
      lede: "公共エネルギーサービス利用者の保護は、ARSEの中核的な使命の一つです。",
      intro:
        "エネルギー分野の利用者として、皆様には公平なアクセス、適正な料金、質の高いサービスを受ける権利があります。ARSEはこれらの権利が守られるよう監督しており、事業者との紛争が生じた場合は当局に申し立てることができます。",
      rightsTitle: "規制によって保証されること",
      rights: [
        "国内全域における公平なエネルギーサービスへのアクセス",
        "当局が設定・管理する、恣意性のない料金",
        "認可事業者による質の高いサービス",
        "事業者との紛争発生時にARSEへ申し立てる権利",
      ],
      resourcesTitle: "関連リソース",
    },

    contact: {
      kicker: "お問い合わせ",
      title: "お問い合わせ",
      lede: "エネルギー分野に関するご質問・ご懸念がございましたら、ARSEまで直接お問い合わせください。",
      formTitle: "メッセージを送る",
      fields: {
        name: "お名前",
        phone: "電話番号",
        email: "メールアドレス",
        locality: "お住まいの地域",
        province: "州",
        subject: "件名",
        message: "メッセージ内容",
      },
      submit: "メッセージを送信",
      formNote: "本番運用前に、本フォームをメール送信サービス（例：Formspree）と連携させる必要があります。",
      success: "メッセージを確認しました。（デモモード：実際にはデータは送信されていません。）",
      sending: "送信中…",
      infoTitle: "連絡先情報",
      hoursTitle: "営業時間",
    },

    partenaires: {
      kicker: "パートナー",
      title: "パートナー機関",
      lede: "ARSEはブルキナファソのエネルギー分野に関わる公共機関と連携して活動しています。",
      items: [
        { name: "ANEREE", desc: "国立再生可能エネルギー・省エネルギー庁", href: "https://aneree.bf/" },
        { name: "SONABEL", desc: "ブルキナファソ国営電力会社", href: "https://www.sonabel.bf/" },
        { name: "エネルギー省", desc: "エネルギー・鉱業・採石を所管する省庁", href: "https://www.energie-mines.gov.bf/accueil" },
        { name: "ABER", desc: "ブルキナファソ地方電化庁", href: "https://aber.bf/" },
      ],
    },

    cookies: {
      kicker: "法的情報",
      title: "Cookieポリシー",
      lede: "ARSEのウェブサイトにおけるCookieの利用方法と、設定の管理方法についてご案内します。",
      sections: [
        { title: "必須Cookie", text: "サイトの正常な動作に不可欠であり、無効化することはできません。" },
        { title: "パフォーマンスCookie", text: "サイトのアクセス状況を測定し、利用状況の分析による改善に活用します。" },
        { title: "機能性Cookie", text: "訪問ごとの操作をより快適にするため、お客様の設定を記憶します。" },
        { title: "第三者Cookie", text: "動画や SNS など埋め込みコンテンツが独自のCookieを設定する場合があります。" },
        { title: "同意", text: "初回訪問時に案内バナーが表示されます。同意の有効期間は最長13か月です。" },
        { title: "設定管理", text: "ブラウザの設定からいつでもCookieの設定を変更できます。" },
        { title: "データ保護", text: "お客様のデータはブルキナファソの現行法令に準拠して取り扱われ、第三者への売却や譲渡は一切行いません。" },
      ],
    },

    terms: {
      kicker: "法的情報",
      title: "利用規約",
      lede: "エネルギー分野規制庁公式ウェブサイトのご利用に関する規約です。",
      sections: [
        { title: "サイトの目的", text: "本サイトは、ARSEの活動、使命、公式刊行物、最新情報をご紹介することを目的としています。" },
        { title: "知的財産", text: "特に明記のない限り、本サイトに掲載されるすべてのコンテンツ（文章、画像、文書）はARSEに帰属します。" },
        { title: "文書の利用について", text: "公式文書（法律、政令、決定、省令）は情報提供のみを目的として公開されています。法的効力を有するのは官報に掲載された版のみです。" },
        { title: "免責事項", text: "ARSEは掲載情報の正確性確保に努めていますが、誤りや欠落について責任を負うものではありません。" },
        { title: "外部リンク", text: "本サイトには第三者のウェブサイトへのリンクが含まれる場合がありますが、ARSEはその内容について一切の管理を行っていません。" },
      ],
    },
  },
};

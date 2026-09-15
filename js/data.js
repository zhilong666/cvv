window.portfolioData = {
  profile: { name: '潘志龙', availability: '抽象设计师', role: '把复杂的想法，变成清晰而有生命力的数字体验。', intro: '我还没有品牌，说不定以后会有。嘿嘿嘿。', statement: '我相信好的作品，不只需要被看见，也应该让人愿意停留、理解并参与其中。', bio: '这里我暂时没有想好，给我点时间，我会介绍我自己。', email: 'hello@panzhilong.design', github: 'https://github.com/zhilong666', contactNote: '目前开放 2026 年春季的品牌与产品合作。' },
  categories: ['全部', '品牌体验', '数字产品', '实验项目'],
  projects: [
    { title: '赛博法典', slug: 'wild-tea', category: '品牌体验', year: '2025', description: '讽刺现在的互联网现状，如果项目能落地，说不定能做一场行为艺术的实验。', tags: ['Pattern', 'Book'], color: 'clay', link: 'project-detail.html?project=wild-tea' },
    { title: 'Northstar OS', slug: 'northstar-os', category: '数字产品', year: '2024', description: '面向远程团队的工作台，让分散的信息重新拥有清晰的方向。', tags: ['Product', 'Frontend'], color: 'lime', link: 'project-detail.html?project=northstar-os' },
    { title: '城市声音档案', slug: 'city-sound-archive', category: '实验项目', year: '2024', description: '一个收集城市日常声响的互动档案，探索声音与记忆的关系。', tags: ['Interactive', 'Creative coding'], color: 'blue', link: 'project-detail.html?project=city-sound-archive' },
    { title: 'Still / Moving', slug: 'still-moving', category: '品牌体验', year: '2023', description: '为独立影像工作室设计的作品集，强调节奏、留白和观看感。', tags: ['Art direction', 'Web design'], color: 'orange', link: 'project-detail.html?project=still-moving' }
  ],
  experience: [
    { period: '2021 — 2021', role: '宣传片拍摄 / 导演', company: '上海 · 自由职业', detail: '为学校70周年校庆拍摄宣传片。' },
    { period: '2022.04 — 2022.12', role: '编剧', company: '南昌市纪委宣传部', detail: '跟随指导老师参加南昌市纪委宣传片拍摄，北京银行宣传片剧本制作。' },
    { period: '2023.05.01 — 2023.05.02', role: '婚礼纪录片导演', company: '一个好团队', detail: '帮助一对聋哑人夫妇拍摄他们的婚礼影片。' },
    { period: '2024.02.01 — 2024.07.15', role: '优秀实习生（美术老师）', company: '深圳市海韵学校', detail: '在深圳市海韵学校担任美术老师一职，积极完成校内的教学任务，指导美术训练队的学生产出作品，并获得全国书画大赛银奖。' }
  ],
  skills: ['Art direction', 'UI / UX design', 'HTML / CSS / JavaScript', 'React & Vue', 'Design systems', 'Motion & interaction', 'Creative coding', 'Prototyping'],
  projectDetails: [
    {
      slug: 'wild-tea',
      breadcrumb: 'Brand experience',
      eyebrow: '野路子茶研所',
      title: '让一间茶品牌，拥有真正值得停留的叙事和体验。',
      lead: 'Today, with the rapid development of the Internet, there are a large number of "expert suggestions" and "authoritative statements" to be verified ton streaming media, which often ignore the authenticity of information. Due to their reliance on the word "authority", many people choose to blindly believe in unverified information and "bow down" in front of tens of thousands of likes and hot search rankings, while truly useful information is often obscured by these overloaded pieces of information.',
      year: '2025',
      role: 'Brand Direction / Web Design / Frontend',
      type: '品牌体验',
      image: '666.jpg',
      challengeImage: 'hhh.jpg',
      bookImage: '123.jpg',
      stats: [
        { value: '12', label: '01', note: '页面视图与内容模块' },
        { value: '+32%', label: '02', note: '购买转化提升' },
        { value: '3W+', label: '03', note: '品牌曝光阅读量' }
      ],
      overviewTitle: 'Pattern Design',
      overview: 'With the rapid development of the Internet and the increasing popularity of social media, some people claim to be "experts" with only a superficial knowledge of Chinese medicine or even have no knowledge of medicine, and disseminate various health tips through the Internet. Due to the speed at which information spreads, these statements are often mistaken by the older generation for authoritative or scientific evidence, and some even believe and try to follow the advice of so-called "Internet experts" to maintain their health. However, these statements are often unsupported and meaningless, and may even pose potential harm to public health.',
      challenges: [
        { index: '01', title: '信息过多', text: '茶品、产地、工艺和活动信息分散，网站缺乏清楚的主线，用户很难理解品牌价值。' },
        { index: '02', title: '品牌不清晰', text: '视觉表达和叙事语调不稳定，导致用户对品牌定位缺少信任感，也无法建立长期记忆。' },
        { index: '03', title: '转化路径弱', text: '页面的资讯展示很强，但购买和了解路径不明确，用户很难从浏览自然过渡到下单。' }
      ],
      approach: [
        { index: '01', title: '品牌叙事重构', text: '重新定义品牌表达，以“产地 / 工艺 / 人物 / 场景”四个维度组织内容，让每一页都融入情绪和可信度。' },
        { index: '02', title: '基础视觉系统', text: '使用更强的留白、简洁的字重和明显的模块化结构，确保品牌页面在不同设备上都保持一致的高级感。' },
        { index: '03', title: '前端交付与交互', text: '实现了首屏节奏、滚动反馈和页面层级，增强浏览体验的流动感，减少信息负担。' }
      ],
      gallery: [
        { title: '首页故事版块', subtitle: '从品牌介绍到产品入口的无缝过渡', style: 'mini-one', size: 'large' },
        { title: '产品页结构', subtitle: '让信息更适合浏览，也更适合购买', style: 'mini-two', size: 'regular' },
        { title: '活动与文化页', subtitle: '通过内容设计强化品牌参与感', style: 'mini-three', size: 'regular' }
      ],
      result: '项目落地后，品牌站从“介绍型页面”升级为“可转化的品牌入口”，信息也更容易被用户理解和记住。用户在页面中的停留时长与浏览深度明显提升，多个核心商品与活动页的转化表现也更稳定。'
    },
    {
      slug: 'northstar-os',
      breadcrumb: 'Product design',
      eyebrow: 'Northstar OS',
      title: '让协作信息从杂乱变成清晰的工作系统。',
      lead: '我为一款远程协作产品设计并实现了统一的工作台视觉和信息架构，让分散任务、反馈和状态更容易被团队理解。',
      year: '2024',
      role: 'Product Design / UI / Frontend',
      type: '数字产品',
      image: '123.jpg',
      challengeImage: '666.jpg',
      bookImage: 'hhh.jpg',
      stats: [
        { value: '18', label: '01', note: '主界面模块重构' },
        { value: '2.4x', label: '02', note: '任务切换效率提升' },
        { value: '92%', label: '03', note: '团队认知度提升' }
      ],
      overviewTitle: '把信息流重新组织成可执行的工作节奏。',
      overview: '这个项目的重点不是视觉炫技，而是帮助团队在高频切换中保有结构感。我们把状态、反馈、任务和上下文重新组织成一个统一的系统。',
      overviewExtra: '在设计和实现过程中，我专注于降低认知负担，让界面能帮助团队快速判断当前状态，并推进下一步动作。',
      challenges: [
        { index: '01', title: '信息过载', text: '每天大量任务和反馈被以同等重量展示，团队很难判断优先级。' },
        { index: '02', title: '状态模糊', text: '项目状态、任务归属和截止信息分散在多个模块里，导致路由容易失控。' },
        { index: '03', title: '协作效率低', text: '界面层级不清，成员长时间停留在信息检索，而不是真正推进工作。' }
      ],
      approach: [
        { index: '01', title: '信息结构重组', text: '把任务、状态、评论和时间线重新编排为清晰的阅读路径，减少无效信息干扰。' },
        { index: '02', title: '设计系统落地', text: '统一控制台、表单、状态标签和导航语言，让界面在多个页面中保持一致。' },
        { index: '03', title: '前端实现与反馈', text: '为关键操作补充交互反馈，并进行响应式适配，确保使用体验在桌面端和移动端下都稳定。' }
      ],
      gallery: [
        { title: '任务总览', subtitle: '清晰定义什么最重要', style: 'mini-one', size: 'large' },
        { title: '状态视图', subtitle: '从散落状态到统一理解', style: 'mini-two', size: 'regular' },
        { title: '协作面板', subtitle: '让沟通更自然、更有节奏', style: 'mini-three', size: 'regular' }
      ],
      result: '该系统上线后，团队对项目状态的理解更一致，任务执行效率明显提升，内部协作时间也得到压缩。'
    },
    {
      slug: 'city-sound-archive',
      breadcrumb: 'Experimental project',
      eyebrow: '城市声音档案',
      title: '把城市日常的声音，转换成能被感知与记住的互动档案。',
      lead: '这个项目通过声音记录、可视化和互动叙事，尝试让城市中的日常声音形成一份有温度、有节奏的公共记忆。',
      year: '2024',
      role: 'Creative Coding / Experience Design',
      type: '实验项目',
      image: 'hhh.jpg',
      challengeImage: '123.jpg',
      bookImage: '666.jpg',
      stats: [
        { value: '24h', label: '01', note: '声音采集周期' },
        { value: '500+', label: '02', note: '城市声音样本' },
        { value: '8.7k', label: '03', note: '互动访问量' }
      ],
      overviewTitle: '让声音成为城市记忆的另一种表达方式。',
      overview: '我将声音、地图和交互节奏组合成一个体验型档案，让人能够通过浏览和听觉感知城市中的“日常气味”和节奏。',
      overviewExtra: '这里强调的是感受和叙事，而不是功能堆砌，界面通过节奏和空间留白，让信息像声音一样自然流动。',
      challenges: [
        { index: '01', title: '内容抽象', text: '声音本身难以直观看见，如何让它变成有秩序的体验结构是关键。' },
        { index: '02', title: '互动节奏', text: '如果交互过强，用户容易被打断；如果过弱，又无法形成参与感。' },
        { index: '03', title: '叙事层级', text: '如何把零散声音编织成有故事感的城市叙事，是设计难点。' }
      ],
      approach: [
        { index: '01', title: '声音分层', text: '将不同空间的声音按密度、节奏和频率组织，以替代传统分页结构。' },
        { index: '02', title: '交互节奏', text: '用轻微的地图交互和轨迹反馈，让用户在聆听时形成自然参与感。' },
        { index: '03', title: '可视化表达', text: '结合动态形状与动画，让声音素材具备叙事性、记忆性和审美感。' }
      ],
      gallery: [
        { title: '地图叙事', subtitle: '声音如何从城市中被连接起来', style: 'mini-one', size: 'large' },
        { title: '波形表达', subtitle: '把声音形态化为可感知的图像', style: 'mini-two', size: 'regular' },
        { title: '声音故事', subtitle: '通过节奏构建情绪和记忆', style: 'mini-three', size: 'regular' }
      ],
      result: '这个项目让声音从“背景”变成了“内容”，并帮助参与者更直观地感知城市中被忽略的日常情绪。'
    },
    {
      slug: 'still-moving',
      breadcrumb: 'Brand experience',
      eyebrow: 'Still / Moving',
      title: '为影像工作室打造一个更像作品本身的展示页。',
      lead: '我为独立影像工作室设计了一套作品集页面，让其节奏感、留白和观看体验更接近电影作品本身。',
      year: '2023',
      role: 'Art Direction / Web Design',
      type: '品牌体验',
      image: '666.jpg',
      challengeImage: 'hhh.jpg',
      bookImage: '123.jpg',
      stats: [
        { value: '9', label: '01', note: '核心页面模块' },
        { value: '3.1x', label: '02', note: '作品观看深度提升' },
        { value: '90%', label: '03', note: '用户停留满意度' }
      ],
      overviewTitle: '让作品集不只是“展示”，更像一场观看体验。',
      overview: '这个项目强调节奏、留白和叙事推进，目的是让访问者在浏览时自然进入作品所营造的氛围。',
      overviewExtra: '我们避免过度填充信息，把每个页面都设计成具有观影感的连接节点，帮助作品与创作者的气质被更完整地呈现。',
      challenges: [
        { index: '01', title: '作品压缩', text: '影像作品很难被静态网页完整表达，容易被粗暴压缩成普通列表。' },
        { index: '02', title: '视觉语言不稳', text: '影像项目往往需要有强烈气质，但页面容易因为信息过多而失去作品本身的节奏。' },
        { index: '03', title: '观看体验弱', text: '作品页需要有“看”的情绪，而不是仅仅“看见”的布局。' }
      ],
      approach: [
        { index: '01', title: '节奏设计', text: '通过视觉留白、字号层级和模块间距，让页面像电影的节奏一样自然推进。' },
        { index: '02', title: '信息收敛', text: '只保留最关键的教案、作品和介绍信息，让内容分层明确但不喧闹。' },
        { index: '03', title: '体验沉浸', text: '结合交互动画与悬停反馈，使作品呈现方式更像一段沉浸式体验。' }
      ],
      gallery: [
        { title: '首页故事', subtitle: '让作品看起来像一部作品', style: 'mini-one', size: 'large' },
        { title: '作品列表', subtitle: '从信息堆叠转向观看节奏', style: 'mini-two', size: 'regular' },
        { title: '项目页', subtitle: '内容更聚焦、观赏更沈静', style: 'mini-three', size: 'regular' }
      ],
      result: '最终页面更像作品自身的延伸，让工作室在受众面前呈现出更清晰、更稳定的气质与专业度。'
    }
  ]
};
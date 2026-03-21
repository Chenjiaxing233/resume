const resumeData = {
  highlights: [
    { value: '7 年', label: '前端开发经验' },
    { value: '5+', label: '核心项目类型' },
    { value: '1000 万+', label: '年度 API 调用量' },
    { value: '41', label: '近年服务客户数' }
  ],
  advantages: [
    {
      title: '全链路交付能力',
      description:
        '熟练掌握 JavaScript、TypeScript、Vue 全家桶与 Node.js，能够独立推进从需求分析、架构设计到上线部署的完整交付流程。'
    },
    {
      title: '多技术栈适应力',
      description:
        '具备 Vue3、React Hooks、Angular 混合架构经验，能在复杂存量系统和新项目之间快速切换并稳定推进迭代。'
    },
    {
      title: '工程化建设经验',
      description:
        '参与组件库、通用工具库、自动化脚本、构建优化与 CI/CD 流程建设，持续提升团队研发效率和交付一致性。'
    },
    {
      title: '复杂业务场景实战',
      description:
        '拥有 ERP、中后台管理系统、开放平台、App、小程序、DevOps 平台与 AI 标注系统等多类项目经验。'
    },
    {
      title: 'AI 协作开发能力',
      description:
        '熟练使用 Claude、Codex 等 AI 工具辅助方案设计、代码生成、问题排查与效率优化，能够将 AI 能力稳定融入日常研发流程，提升交付速度与方案质量。'
    }
  ],
  skills: [
    {
      title: '前端框架',
      items: [
        'Vue2 / Vue3 / Composition API / Vue Router / Pinia',
        'React Hooks',
        'Angular',
        'uni-app',
        'Element UI / Element Plus'
      ]
    },
    {
      title: '语言与工程',
      items: [
        'JavaScript / TypeScript',
        'Vite / Webpack',
        'Node.js / Express',
        'Monaco Editor',
        'Puppeteer / VSCode Extension API'
      ]
    },
    {
      title: '系统与业务能力',
      items: [
        '企业级 ERP 与中后台系统',
        '开放平台与 API 调试能力建设',
        '实时通信组件封装',
        '前端规范与 Code Review',
        '组件库设计与维护'
      ]
    },
    {
      title: '协作与交付',
      items: [
        '需求分析与技术选型',
        '跨团队协作与产品沟通',
        '复杂项目推进与排障',
        '性能优化与体验优化',
        '技术分享与团队赋能'
      ]
    }
  ],
  experience: [
    {
      company: '先临三维科技股份有限公司',
      role: '前端开发工程师',
      period: '2022.04 - 2025.12',
      summary:
        '负责核心前端业务系统开发与优化，支撑 BFF 层 Node 服务，参与组件库、自动化脚本、自动化测试等基础设施建设。',
      bullets: [
        '承担 ERP 收费版 Angular 与 Vue3 模块迭代维护，持续支撑业务稳定交付。',
        '推动财务模块从 Angular 向 Vue3 迁移，并基于 Element Plus 建设私有组件库。',
        '参与开放平台、云平台、AI 标注等多项目并行开发，覆盖开放接口、实时通信、AI 交互与三维标注场景。'
      ]
    },
    {
      company: '湖南云简信息技术有限公司',
      role: '前端开发',
      period: '2021.09 - 2022.02',
      summary:
        '参与企业级 ERP 系统建设，采用 Angular 与 Vue3 混合架构完成运营、财务、数据报表等模块开发。',
      bullets: [
        '通过 iframe 嵌入与本地存储通信实现多框架间数据与状态同步。',
        '独立负责运营看板、财务对账、数据报表等核心模块的交互与业务实现。',
        '沉淀混合技术栈协作与通信经验，为后续复杂系统开发提供实践参考。'
      ]
    },
    {
      company: '湖南机械之家信息科技有限公司',
      role: 'Web 前端',
      period: '2018.08 - 2021.08',
      summary:
        '参与公司核心中后台与 App 业务建设，覆盖数据中心、客服、订单、财务、商城、社区等多类业务模块。',
      bullets: [
        '主导 ATOM 系统多个模块从 0 到 1 开发，并协同完成路由、按钮、接口鉴权体系建设。',
        '参与机械之家 App 商城与社区模块开发，封装复用业务组件，优化跨端体验。',
        '与团队共同制定前端规范、推进 Code Review，并完善基础设施与内部技术分享。'
      ]
    },
    {
      company: '深圳特发东智科技有限公司',
      role: 'Web 前端（实习）',
      period: '2017.06 - 2018.01',
      summary:
        '负责公司内部 OA 系统维护与升级，参与旧系统流程改造与基础前端开发工作。',
      bullets: [
        '使用 jQuery 维护 OA 系统并支持版本升级。',
        '配合业务部门推进旧流程线上化，提升日常协作效率。'
      ]
    }
  ],
  projects: [
    {
      name: '开放平台',
      period: '2024.01 - 2025.12',
      tags: ['Vue3', 'Vite', 'Node.js', 'Express', 'WebSocket'],
      description:
        '主导设计并开发一站式数据接入开放平台，面向全球不同国家、机构与角色用户提供标准化数据接入方案。',
      bullets: [
        '实现接口调试模块，通过 Express 代理与 AES 加密降低接口对接门槛。',
        '支持后台富文本驱动的动态 Markdown 文档渲染，提升文档维护效率。',
        '封装实时交互组件，支持排队状态同步、已读回执与文件传输等能力。'
      ],
      achievements: [
        '近一年服务全球 41 位客户',
        '年度 API 调用超千万次',
        '平均对接成功时间由 60 天缩短至 28 天'
      ]
    },
    {
      name: 'Picas DevOps 平台',
      period: '2024.11 - 2025.12',
      tags: ['Vue3', 'Node.js', 'VSCode 插件', 'Monaco Editor'],
      description:
        '负责从 0 到 1 的前端建设，聚焦研发流程配置化、版本可视化管理与开发辅助能力集成。',
      bullets: [
        '开发 ApiDoc 解析与发布能力，构建类似 Swagger 的可视化文档体验。',
        '结合 Monaco Editor 与本地 Node 服务实现 SQL 编辑、联想与格式化能力。',
        '通过 VSCode 扩展能力支持 i18n 悬浮信息与自动翻译脚本。'
      ],
      achievements: [
        '提升开发流程一致性与配置效率',
        '将运维工作流集成进平台，降低日常操作成本'
      ]
    },
    {
      name: '齿科云平台',
      period: '2022.04 - 2025.12',
      tags: ['Vue3', 'Vite', 'MQTT', 'SSE', 'AI 对话'],
      description:
        '负责核心云端产品开发，围绕实时通信、AI 交互、打印机绑定与业务组件封装持续推进产品迭代。',
      bullets: [
        '封装 MQTT 协议能力，支撑打印机实时通讯稳定运行。',
        '配合后端接入 LangChain 工作流，通过 SSE 与 Markdown 渲染实现 AI 对话。',
        '设计验证码输入组件和业务通用组件，持续优化产品交互与商业发布质量。'
      ],
      achievements: [
        '平均打包时间由 15 至 20 分钟缩短至 5 至 7 分钟',
        '云平台用户与订单规模保持稳定增长'
      ]
    },
    {
      name: 'AI 标注系统',
      period: '2024.10 - 2024.12',
      tags: ['Three.js', '任务流', '数据可视化'],
      description:
        '为三维齿科模型训练场景搭建可追溯的在线标注系统，支撑算法团队获取高质量标注数据。',
      bullets: [
        '基于 Three.js SDK 实现三维模型旋转、缩放、标记、注释与历史回溯。',
        '构建任务下发、进度追踪、多级审核与版本管理工作流。',
        '设计结构化数据存储与可视化查询模块，提升标注结果复用效率。'
      ],
      achievements: ['标注效率提升约 30%', '显著降低人工操作误差']
    },
    {
      name: 'g+ ERP',
      period: '2021.09 - 2022.01',
      tags: ['Angular', 'Vue3', 'TypeScript', 'iframe 通信'],
      description:
        '参与企业级 ERP 核心模块建设，重点承担运营与财务侧功能开发与混合架构适配。',
      bullets: [
        '负责运营看板、财务对账、数据报表等模块前端实现。',
        '基于 iframe 与本地存储通信完成多框架间数据与状态同步。',
        '深入实践 Vue3 组合式 API 与 TypeScript 类型系统，提升维护性。'
      ],
      achievements: ['支持运营与财务模块按期上线', '积累多技术栈混合集成经验']
    },
    {
      name: 'ATOM 系统 / 机械之家 App',
      period: '2018.08 - 2021.08',
      tags: ['Vue', 'Element UI', 'Vuex', 'uni-app'],
      description:
        '覆盖公司核心中后台系统与业务 App，承担商城、社区、订单、财务、客服等多个模块的长期建设。',
      bullets: [
        '从 0 到 1 开发智能客服与多业务模块，二次封装 Element UI 简化开发。',
        '通过插件解决长列表渲染问题，并沉淀业务组件库与规范体系。',
        '独立负责商城和社区模块，推进跨端交互、复用组件与体验优化。'
      ],
      achievements: ['App 上线一年后日活突破 1 万', '支撑财务系统切换与 SKU 数据库沉淀']
    }
  ],
  education: [
    {
      school: '长沙学院',
      degree: '本科',
      major: '计算机科学与技术',
      period: '2019 - 2021'
    },
    {
      school: '湖南信息职业技术学院',
      degree: '大专',
      major: '嵌入式系统工程',
      period: '2014 - 2017'
    }
  ]
};

/**
 * 创建元素并附加类名与文本。
 * @param {string} tagName 元素标签名。
 * @param {string[]} classNames 元素类名列表。
 * @param {string} [text] 文本内容。
 * @returns {HTMLElement} 创建后的元素。
 */
function createElement(tagName, classNames = [], text = '') {
  const element = document.createElement(tagName);
  element.classList.add(...classNames);
  if (text) {
    element.textContent = text;
  }
  return element;
}

/**
 * 渲染顶部数据卡片。
 */
function renderHighlights() {
  const container = document.querySelector('#highlights');
  if (!container) {
    return;
  }

  resumeData.highlights.forEach((item) => {
    const card = createElement('article', ['metric-card']);
    const value = createElement('strong', [], item.value);
    const label = createElement('span', [], item.label);
    card.append(value, label);
    container.append(card);
  });
}

/**
 * 渲染个人优势。
 */
function renderAdvantages() {
  const container = document.querySelector('#advantages');
  if (!container) {
    return;
  }

  resumeData.advantages.forEach((item) => {
    const card = createElement('article', ['advantage-card']);
    const title = createElement('h3', [], item.title);
    const description = createElement('p', [], item.description);
    card.append(title, description);
    container.append(card);
  });
}

/**
 * 渲染技能分组。
 */
function renderSkills() {
  const container = document.querySelector('#skills-grid');
  if (!container) {
    return;
  }

  resumeData.skills.forEach((group) => {
    const wrapper = createElement('article', ['skill-group']);
    const title = createElement('h3', [], group.title);
    const list = document.createElement('ul');

    group.items.forEach((item) => {
      list.append(createElement('li', [], item));
    });

    wrapper.append(title, list);
    container.append(wrapper);
  });
}

/**
 * 渲染工作经历时间线。
 */
function renderExperience() {
  const container = document.querySelector('#experience-list');
  if (!container) {
    return;
  }

  resumeData.experience.forEach((item) => {
    const wrapper = createElement('article', ['timeline-item']);
    const header = createElement('div', ['timeline-header']);
    const titleBlock = document.createElement('div');
    const title = createElement('h3', [], item.company);
    const subline = createElement('p', ['subline'], item.role);
    subline.style.margin = '8px 0 0';
    const period = createElement('span', ['date-tag'], item.period);
    const summary = createElement('p', [], item.summary);
    const list = document.createElement('ul');

    item.bullets.forEach((bullet) => {
      list.append(createElement('li', [], bullet));
    });

    titleBlock.append(title, subline);
    header.append(titleBlock, period);
    wrapper.append(header, summary, list);
    container.append(wrapper);
  });
}

/**
 * 渲染项目卡片。
 */
function renderProjects() {
  const container = document.querySelector('#project-list');
  if (!container) {
    return;
  }

  resumeData.projects.forEach((project) => {
    const card = createElement('article', ['project-card']);
    const header = createElement('div', ['project-header']);
    const title = createElement('h3', [], project.name);
    const period = createElement('span', ['date-tag'], project.period);
    const description = createElement('p', [], project.description);
    const tags = createElement('div', ['tag-row']);
    const bullets = document.createElement('ul');
    const achievementsTitle = createElement('p', [], '项目结果');
    const achievements = createElement('div', ['tag-row']);

    project.tags.forEach((tag) => {
      tags.append(createElement('span', ['tag'], tag));
    });

    project.bullets.forEach((bullet) => {
      bullets.append(createElement('li', [], bullet));
    });

    project.achievements.forEach((item) => {
      achievements.append(createElement('span', ['tag'], item));
    });

    header.append(title, period);
    card.append(header, tags, description, bullets, achievementsTitle, achievements);
    container.append(card);
  });
}

/**
 * 渲染教育经历。
 */
function renderEducation() {
  const container = document.querySelector('#education-list');
  if (!container) {
    return;
  }

  resumeData.education.forEach((item) => {
    const card = createElement('article', ['education-card']);
    const header = createElement('div', ['education-header']);
    const title = createElement('h3', [], item.school);
    const period = createElement('span', ['date-tag'], item.period);
    const detail = createElement('p', [], `${item.degree} · ${item.major}`);
    header.append(title, period);
    card.append(header, detail);
    container.append(card);
  });
}

/**
 * 为滚动进入视口的模块添加展示动画。
 */
function setupRevealAnimation() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  items.forEach((item) => observer.observe(item));
}

/**
 * 初始化页面渲染。
 */
function initResumePage() {
  renderHighlights();
  renderAdvantages();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  setupRevealAnimation();
}

document.addEventListener('DOMContentLoaded', initResumePage);

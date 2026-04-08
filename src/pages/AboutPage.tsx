import React from 'react'
import { BookOpen, Building2, ExternalLink, GraduationCap, Medal, Users2 } from 'lucide-react'
import { associationFacts, associationMeta, departments, honors, majorDeeds, teacherMoments } from '../content/siteContent'

type HonorWallItem = {
  year: string
  title: string
  award: string
  source?: string
  link?: string
}

type DepartmentDuty = {
  name: string
  summary: string
  duties: string[]
}

const honorWallItems: HonorWallItem[] = [
  {
    year: '2025',
    title: '“护佑童心”阳光病房志愿服务团',
    award: '荣获 2025 年校青年志愿服务项目大赛优秀团队',
  },
  {
    year: '2025',
    title: '飞鸟夏令营',
    award: '获得第二届“青爱的杭州”大学生社会实践活动优秀实践团队',
    source: '杭州新闻',
    link: 'https://apiv4.cst123.cn/cst/news/shareDetail?id=1135605097074524160&ic=32gd',
  },
  {
    year: '2025',
    title: '筑梦前陈',
    award: '获得第二届“青爱的杭州”大学生社会实践活动优秀实践团队',
    source: '杭州新闻',
    link: 'https://apiv4.cst123.cn/cst/news/shareDetail?id=1138196391869284352',
  },
  {
    year: '2025',
    title: '逐梦清溪',
    award: '获得第二届“青爱的杭州”大学生社会实践活动优秀实践团队',
    source: '杭州新闻',
    link: 'https://apiv4.cst123.cn/cst/news/shareDetail?id=1142123966115086336',
  },
  {
    year: '2024-2025',
    title: '自动化青协',
    award: '荣获 2024-2025 学年院优秀学生社团',
  },
  {
    year: '2025',
    title: '飞鸟夏令营暑期支教服务团',
    award: '荣获 2025 年院暑实一等奖',
  },
  {
    year: '2025',
    title: '筑梦前陈暑期支教服务团',
    award: '荣获 2025 年院暑实一等奖',
  },
  {
    year: '2025',
    title: '逐梦清溪暑期支教服务团',
    award: '荣获 2025 年院暑实二等奖',
  },
  {
    year: '2024-2025',
    title: '飞鸟夏令营暑期支教服务团',
    award: '荣获 2024-2025 学年院优秀实践团队',
  },
  {
    year: '2024-2025',
    title: '筑梦前陈暑期支教服务团',
    award: '荣获 2024-2025 学年院优秀实践团队',
  },
  {
    year: '2024-2025',
    title: '逐梦清溪暑期支教服务团',
    award: '荣获 2024-2025 学年院优秀实践团队',
  },
  {
    year: '2024',
    title: '自动化青协暑期社会实践团队',
    award: '获评 2024 年校暑期社会实践十佳团队',
    source: '微信公众号',
    link: 'https://mp.weixin.qq.com/s/DpBVs0JmHuppcwG9HV6wAw',
  },
  {
    year: '2024',
    title: '自动化青协社会实践团队',
    award: '获评 2024 年大学生社会实践擂台赛最佳实践团队',
    source: '杭州新闻',
    link: 'https://apiv4.cst123.cn/cst/news/shareDetail?id=1024343109107974144&ic=32gd',
  },
  {
    year: '2024',
    title: '自动化青协暑期志愿服务团队',
    award: '入选 2024 年团中央“七彩假期”志愿服务团队（序号 510）',
    source: '微信公众号',
    link: 'https://mp.weixin.qq.com/s/OblkIMV_p2GlUw3cvdFbgQ',
  },
  {
    year: '2024',
    title: '“灵动翼行”项目',
    award: '荣获 2024 年浙江省青年志愿服务项目大赛铜奖',
  },
  {
    year: '2023',
    title: '“护佑童心”阳光病房志愿服务团',
    award: '获浙大儿童医院授予“优秀志愿者团队”',
  },
]

const departmentDuties: DepartmentDuty[] = [
  {
    name: '主席团',
    summary: '主席团是自动化学院（人工智能学院）青协的核心，统筹协会方向和整体布局，推动协会持续发展。',
    duties: ['掌控协会发展方向与重点布局', '统筹协会重要事务与关键决策', '协调各中心与部门联动，保障组织稳定运行'],
  },
  {
    name: '办公室',
    summary: '负责组织运行保障、财务资料管理与校内外沟通，是协会日常运转中枢。',
    duties: [
      '财务管理、档案资料管理，以及物品与场地租借',
      '负责会议安排与记录、制度建设、值班安排、考核表格、资料打印和短信收发',
      '对接协会各部门，并与校青协、校社联及院级学生组织沟通交流',
      '承担招新、青年志愿者代表大会等大型活动的物资准备、采买与报销',
      '负责暑期支教“筑梦前陈”带队工作',
      '负责“二教记忆书吧”志愿活动制度更新、培训与全时段招募',
      '统计每周志愿活动并汇总“周报送”提交校青协',
    ],
  },
  {
    name: '基地拓展中心',
    summary: '围绕社区与校外合作基地，长期开展常态化志愿服务项目。',
    duties: [
      '“智慧空间”志愿活动：维护二教秩序与环境卫生',
      '“阳光课堂”志愿活动：在下沙社区、早城社区开展儿童科普与老人关怀服务',
      '“温情小廊”志愿活动：陪伴浙大附属儿童医院儿童，开展知识课堂与互动活动',
    ],
  },
  {
    name: '项目拓展中心',
    summary: '负责重点项目运营与新项目拓展，也承担活动资源对接和筹备工作。',
    duties: [
      '“海洋天堂”志愿活动：在五个慧灵基地开展关爱陪伴与视野拓展',
      '“慧灵进校园”大型活动：带慧灵人士进校园，增强社会参与感',
      '“西湖益行”大型活动：通过益行与游戏点倡导社会关注心智障碍群体',
      '负责暑期支教“飞鸟夏令营”带队工作',
      '负责拓展新的志愿项目并为协会筹集活动资金',
    ],
  },
  {
    name: '志愿者管理中心',
    summary: '负责志愿者招募、管理与系统化运营，保障志愿服务执行质量。',
    duties: [
      '文思小学志愿活动对接与现场协助（体检、运动会等）',
      '负责学院临时志愿活动的招募与管理',
      '组织“心灵驿站摆摊”，通过治愈小游戏引导关注情绪健康',
      '对接基拓、项拓、组织部、办公室，负责志愿群建立与日常管理',
      '管理志愿汇：活动申请、时长录入补录及学院志愿信息归集',
      '管理志愿服收发与形象提醒，保障活动规范执行',
    ],
  },
  {
    name: '组织部',
    summary: '负责活动组织实施、跨部门督导与年度考核，保障活动按时按量推进。',
    duties: [
      '负责会议教室、摆摊摊位与帐篷等场地物资租借',
      '监督各部门工作进度，年末组织部门考核',
      '策划换届大会、节日活动、团建活动与聚餐',
      '负责“东湖街道养老服务中心”志愿活动组织执行',
      '负责暑期支教“逐梦清溪”带队工作',
    ],
  },
  {
    name: '新媒体部',
    summary: '负责拍摄记录、公众号运营和内容制作，让活动被更多人看见。',
    duties: [
      '活动照片与视频拍摄，完整记录活动过程',
      '运营协会公众号，制作微信推送，传播协会项目与动态',
      '制作活动海报（如摆摊、暖青大会等）',
      '撰写新闻稿、发言稿、主持稿并制作活动评比 PPT',
      '负责志愿宣传与总结视频剪辑，运营相关视频号',
    ],
  },
]

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="page-hero">
        <div className="page-hero-inner">
          <BookOpen className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">关于我们</p>
          <h1 className="page-hero-title">二十三年，自动化青协一直在做同一件事</h1>
          <p className="page-hero-copy">
            {associationMeta.fullName} 自 2002 年成立以来，把“{associationMeta.mission}”写进一代代青协人的行动里。
          </p>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="volunteer-card p-8">
            <div className="flex items-center gap-3">
              <Users2 className="h-6 w-6 text-volunteer-primary" />
              <h2 className="text-2xl font-bold text-slate-900">组织简介</h2>
            </div>
            <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600">
              <p>
                自动化青协成立于 2002 年，是学院中持续运行至今的青年志愿服务组织。协会现有 63 名成员，由姜智敏、
                姜博恩老师担任指导老师，下设办公室、组织部、新媒体部、项目拓展中心、基地拓展中心、志愿者管理中心六个部门。
              </p>
              <p>
                自成立以来，协会始终坚持“奉献、友爱、互助、进步”的准则，以“{associationMeta.mission}”为宗旨积极开展各类志愿活动。
                截至 2025 年，协会注册志愿者人数已达 5103 人，累计志愿服务时长超过 80024.7 小时。
              </p>
              <p>
                二十三载走来，青协人在一次次基地服务、赛会保障、支教实践和校园公益中锻炼自我、成长进步，也把志愿服务沉淀成学院里
                大家熟悉、也最信任的长期志愿团队之一。
              </p>
            </div>
          </article>

          <aside className="volunteer-card p-8">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-volunteer-primary" />
              <h2 className="text-2xl font-bold text-slate-900">组织关键词</h2>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-volunteer-light/35 p-4">
                <p className="text-sm font-semibold tracking-[0.16em] text-volunteer-primary">宗旨</p>
                <p className="mt-2 text-lg font-bold text-slate-900">{associationMeta.mission}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold tracking-[0.16em] text-volunteer-primary">成立时间</p>
                <p className="mt-2 text-lg font-bold text-slate-900">2002 成立 · 2025 为第二十三载</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold tracking-[0.16em] text-volunteer-primary">服务方向</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">助残、病房、赛事、支教、校园服务五条线并行，长期稳定推进。</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-heading">
            <p className="section-kicker">主要事迹</p>
            <h2 className="section-title">二十多年的服务，我们用清楚的数据和项目来展示</h2>
            <p className="section-copy">这里主要看组织规模、重点项目和年度成果，信息都能对上。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {associationFacts.map((fact) => (
              <article key={fact.label} className="volunteer-card p-6">
                <p className="text-sm font-semibold tracking-[0.18em] text-volunteer-primary/80">{fact.label}</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">{fact.value}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{fact.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-heading">
            <p className="section-kicker">传承与荣誉</p>
            <h2 className="section-title">这些荣誉，来自一场场踏实做下来的服务</h2>
            <p className="section-copy">奖项是结果，更重要的是背后长期稳定的行动和团队配合。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {honors.map((item) => (
              <article key={item.label} className="volunteer-card p-6">
                <div className="flex items-center gap-3">
                  <Medal className="h-5 w-5 text-volunteer-secondary" />
                  <h3 className="text-lg font-bold text-slate-900">{item.label}</h3>
                </div>
                <p className="mt-4 text-2xl font-bold text-volunteer-primary">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-heading">
            <p className="section-kicker">自动化青协荣誉墙</p>
            <h2 className="section-title">把奖项节点集中展示，避免分散在长文里难查找</h2>
            <p className="section-copy">以下为自动化青协及重点项目的集体荣誉清单；已提供来源链接的条目可直接跳转查看。</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {honorWallItems.map((item) => (
              <article key={`${item.year}-${item.title}-${item.award}`} className="volunteer-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex items-center rounded-full bg-volunteer-light/40 px-3 py-1 text-xs font-semibold text-volunteer-primary">
                    {item.year}
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-volunteer-primary hover:text-volunteer-primary/80"
                    >
                      <span>查看报道</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.award}</p>
                {item.source && <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">{item.source}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="section-heading">
          <p className="section-kicker">年度重点面向</p>
          <h2 className="section-title">常规活动、支教、赛会与传播，共同构成 2025 年的完整面貌</h2>
          <p className="section-copy">这一部分把 2025 年重点内容分块展示，读起来更直观。</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {majorDeeds.map((deed) => (
            <article key={deed.title} className="volunteer-card p-7">
              <h3 className="text-2xl font-bold text-slate-900">{deed.title}</h3>
              <p className="mt-4 text-sm leading-8 text-slate-600">{deed.summary}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {deed.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Users2 className="mt-0.5 h-4 w-4 shrink-0 text-volunteer-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="volunteer-section">
        <div className="section-heading">
          <p className="section-kicker">组织结构</p>
          <h2 className="section-title">六个部门一起配合，保障活动从策划到落地</h2>
          <p className="section-copy">部门信息以 2025 年全体大会内容为准，和加入页保持一致。</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((department) => (
            <article key={department.name} className="volunteer-card p-6">
              <p className="text-sm font-semibold tracking-[0.18em] text-volunteer-primary/80">{department.focus}</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">{department.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{department.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-heading">
            <p className="section-kicker">各部门职能介绍</p>
            <h2 className="section-title">主席团统筹方向，各部门分工协作推进日常工作</h2>
            <p className="section-copy">下面按部门列出具体职责，方便直接查看。</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {departmentDuties.map((department) => (
              <article key={department.name} className="volunteer-card p-7">
                <h3 className="text-2xl font-bold text-slate-900">{department.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{department.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {department.duties.map((duty) => (
                    <li key={duty} className="flex items-start gap-2">
                      <Users2 className="mt-0.5 h-4 w-4 shrink-0 text-volunteer-secondary" />
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-heading !mb-10">
            <p className="section-kicker text-volunteer-warm">指导老师年度节点</p>
            <h2 className="section-title text-white">以现有年度节点呈现老师信息，不人为拼成同一届名单</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {teacherMoments.map((teacher) => (
              <article key={teacher.label} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <GraduationCap className="h-6 w-6 text-volunteer-warm" />
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/60">{teacher.label}</p>
                <h3 className="mt-2 text-2xl font-bold">{teacher.value}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{teacher.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

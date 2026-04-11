import React from 'react'
import { BookOpen, Building2, ExternalLink, Medal, Users2 } from 'lucide-react'
import { associationFacts, associationMeta, departments, honors, majorDeeds } from '../content/siteContent'

type DepartmentDuty = {
  name: string
  summary: string
  duties: string[]
}

type GroupedHonorWallItem = {
  year: string
  title: string
  awards: string[]
  references?: Array<{
    label: string
    link: string
  }>
}

const groupedHonorWallItems: GroupedHonorWallItem[] = [
  {
    year: '2025',
    title: '“护佑童心”阳光病房志愿服务团',
    awards: ['荣获 2025 年校青年志愿服务项目大赛优秀团队'],
  },
  {
    year: '2024-2025',
    title: '飞鸟夏令营',
    awards: [
      '获得第二届“青爱的杭州”大学生社会实践活动优秀实践团队',
      '荣获 2025 年院暑实一等奖',
      '荣获 2024-2025 学年院优秀实践团队',
    ],
    references: [
      {
        label: '杭州新闻',
        link: 'https://apiv4.cst123.cn/cst/news/shareDetail?id=1135605097074524160&ic=32gd',
      },
    ],
  },
  {
    year: '2024-2025',
    title: '筑梦前陈',
    awards: [
      '获得第二届“青爱的杭州”大学生社会实践活动优秀实践团队',
      '荣获 2025 年院暑实一等奖',
      '荣获 2024-2025 学年院优秀实践团队',
    ],
    references: [
      {
        label: '杭州新闻',
        link: 'https://apiv4.cst123.cn/cst/news/shareDetail?id=1138196391869284352',
      },
    ],
  },
  {
    year: '2024-2025',
    title: '逐梦清溪',
    awards: [
      '获得第二届“青爱的杭州”大学生社会实践活动优秀实践团队',
      '荣获 2025 年院暑实二等奖',
      '荣获 2024-2025 学年院优秀实践团队',
    ],
    references: [
      {
        label: '杭州新闻',
        link: 'https://apiv4.cst123.cn/cst/news/shareDetail?id=1142123966115086336',
      },
    ],
  },
  {
    year: '2024-2025',
    title: '自动化青协',
    awards: ['荣获 2024-2025 学年院优秀学生社团'],
  },
  {
    year: '2024',
    title: '自动化青协暑期社会实践团队',
    awards: ['获评 2024 年校暑期社会实践十佳团队'],
    references: [
      {
        label: '微信公众号',
        link: 'https://mp.weixin.qq.com/s/DpBVs0JmHuppcwG9HV6wAw',
      },
    ],
  },
  {
    year: '2024',
    title: '自动化青协社会实践团队',
    awards: ['获评 2024 年大学生社会实践擂台赛最佳实践团队'],
    references: [
      {
        label: '杭州新闻',
        link: 'https://apiv4.cst123.cn/cst/news/shareDetail?id=1024343109107974144&ic=32gd',
      },
    ],
  },
  {
    year: '2024',
    title: '自动化青协暑期志愿服务团队',
    awards: ['入选 2024 年团中央“七彩假期”志愿服务团队（序号 510）'],
    references: [
      {
        label: '微信公众号',
        link: 'https://mp.weixin.qq.com/s/OblkIMV_p2GlUw3cvdFbgQ',
      },
    ],
  },
  {
    year: '2024',
    title: '“灵动翼行”项目',
    awards: ['荣获 2024 年浙江省青年志愿服务项目大赛铜奖'],
  },
  {
    year: '2023',
    title: '“护佑童心”阳光病房志愿服务团',
    awards: ['获浙大儿童医院授予“优秀志愿者团队”'],
  },
]

const departmentDuties: DepartmentDuty[] = [
  {
    name: '主席团',
    summary: '统筹协会方向、重点决策和整体协同，是组织稳定运行的中枢。',
    duties: ['把握协会年度重点与发展节奏', '协调跨部门合作与资源配置', '推动重大活动决策与复盘落地'],
  },
  {
    name: '办公室',
    summary: '负责日常事务、制度资料和会务后勤，支撑协会有序运转。',
    duties: ['会议记录、值班安排与资料归档', '物资采购、报销和场地协调', '协助大型活动的流程保障'],
  },
  {
    name: '基地拓展中心',
    summary: '围绕社区与校外合作基地推进常态化志愿服务。',
    duties: ['维护社区、病房等长期服务关系', '承接日常基地活动执行', '探索新基地与新服务场景'],
  },
  {
    name: '项目拓展中心',
    summary: '负责重点项目运营与新项目拓展，推动品牌项目持续成长。',
    duties: ['推进海洋天堂、西湖益行等重点项目', '负责暑期支教相关带队与筹备', '对接校外合作资源与公益平台'],
  },
  {
    name: '志愿者管理中心',
    summary: '负责志愿者招募、培训、运行与时长信息管理。',
    duties: ['组织志愿者招募和日常通知', '维护志愿服务信息统计与补录', '保障活动现场志愿者执行质量'],
  },
  {
    name: '组织部',
    summary: '负责活动组织实施、内部考核和团队氛围建设。',
    duties: ['推进全体大会、团建和内部活动', '监督各部门进度与节点落实', '负责年度考核与组织协同'],
  },
  {
    name: '新媒体部',
    summary: '负责活动拍摄记录、内容制作与传播运营。',
    duties: ['拍摄照片视频并整理发布', '运营公众号和相关宣传内容', '制作海报、推文和总结材料'],
  },
]

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="page-hero">
        <div className="page-hero-inner">
          <BookOpen className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">关于我们</p>
          <h1 className="page-hero-title">关于我们</h1>
          <p className="page-hero-copy">
            自动化青协自 2002 年成立以来，把“服务同学，奉献社会”写进一代代青协人的行动里。
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
                自动化青协成立于 2002 年，是学院长期持续运行的青年志愿服务组织。协会现有 63 名成员，下设办公室、组织部、新媒体部、项目拓展中心、基地拓展中心与志愿者管理中心六个部门。
              </p>
              <p>
                截至 2025 年，协会累计拥有 5103 名注册志愿者，累计志愿服务时长超过 80024.7 小时，长期参与助残、病房、养老、支教、赛事与校园公益等多条服务线。
              </p>
              <p>
                对我们来说，志愿服务不是短暂热闹的一次活动，而是一批人把时间、耐心和责任感持续投入到具体人群与具体场景中的长期陪伴。
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
                <p className="mt-2 text-sm leading-7 text-slate-700">助残、病房、赛事、养老、支教与校园公益多线并行，长期稳定推进。</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-heading">
            <p className="section-kicker">主要事迹</p>
            <h2 className="section-title">把组织规模、项目深度和年度成果放在一页看清楚</h2>
            <p className="section-copy">下面这些数据和项目，是自动化青协多年长期服务最直接的缩影。</p>
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
            <p className="section-copy">奖项是结果，更重要的是背后长期稳定的行动与团队配合。</p>
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
            {groupedHonorWallItems.map((item) => (
              <article key={`${item.year}-${item.title}`} className="volunteer-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex items-center rounded-full bg-volunteer-light/40 px-3 py-1 text-xs font-semibold text-volunteer-primary">
                    {item.year}
                  </div>
                  {item.references && item.references.length > 0 ? (
                    <a
                      href={item.references[0].link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-volunteer-primary hover:text-volunteer-primary/80"
                    >
                      <span>{item.references[0].label}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {item.awards.map((award) => (
                    <li key={`${item.title}-${award}`} className="flex items-start gap-2">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-volunteer-secondary" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="section-heading">
          <p className="section-kicker">年度重点面向</p>
          <h2 className="section-title">常规活动、支教、赛事与传播，共同构成 2025 年的完整面貌</h2>
          <p className="section-copy">这部分按主题展示 2025 年重点内容，读起来更直观。</p>
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
          <p className="section-copy">部门介绍与职责放在一起，便于快速了解协会如何运转。</p>
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
            <p className="section-kicker">各部门职责</p>
            <h2 className="section-title">主席团统筹方向，各部门分工协作推动日常工作</h2>
            <p className="section-copy">下面按部门列出具体职责，阅读和查找都会更方便。</p>
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
    </div>
  )
}

export default AboutPage

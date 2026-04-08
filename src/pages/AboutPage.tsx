import React from 'react'
import { BookOpen, Building2, GraduationCap, Medal, Users2 } from 'lucide-react'
import { associationFacts, associationMeta, departments, honors, majorDeeds, teacherMoments } from '../content/siteContent'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="page-hero">
        <div className="page-hero-inner">
          <BookOpen className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">关于我们</p>
          <h1 className="page-hero-title">一所学院里的长期志愿品牌，二十三载持续生长</h1>
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
                最稳定、最可辨识的长期品牌之一。
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
                <p className="text-sm font-semibold tracking-[0.16em] text-volunteer-primary">年份口径</p>
                <p className="mt-2 text-lg font-bold text-slate-900">2002 成立 · 2025 为第二十三载</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold tracking-[0.16em] text-volunteer-primary">品牌方向</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">助残、病房、赛事、支教、校园服务五条线并行，不靠单次活动撑起形象。</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-heading">
            <p className="section-kicker">主要事迹</p>
            <h2 className="section-title">把二十余年的长期服务，拆成可以被理解的事实结构</h2>
            <p className="section-copy">这里不再只讲抽象精神，而是把组织规模、主要项目和年度成果落到可核对的事实上。</p>
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
            <h2 className="section-title">长期主义带来的不是热闹，而是可被验证的成果</h2>
            <p className="section-copy">荣誉只作为结果出现，真正重要的是它背后长期稳定的服务方法和组织能力。</p>
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

      <section className="volunteer-section">
        <div className="section-heading">
          <p className="section-kicker">年度重点面向</p>
          <h2 className="section-title">常规活动、支教、赛会与传播，共同构成 2025 年的完整面貌</h2>
          <p className="section-copy">你给出的“主要事迹”并不只是长文材料，更适合拆成几个稳定板块来展示组织能力的广度。</p>
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
          <h2 className="section-title">六个部门，共同支撑品牌项目的策划、传播与执行</h2>
          <p className="section-copy">部门结构以 2025 年全体大会口径为准，加入页与这里保持完全一致。</p>
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

      <section className="bg-slate-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-heading !mb-10">
            <p className="section-kicker text-volunteer-warm">指导老师年度节点</p>
            <h2 className="section-title text-white">以 PDF 中出现的年度节点呈现老师信息，不人为拼成同一届名单</h2>
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

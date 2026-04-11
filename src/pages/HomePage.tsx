import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, CalendarRange, Heart, HeartHandshake, Sparkles, Trophy, Users } from 'lucide-react'
import { annualMoments, associationMeta, extendedStories, homeStats, signatureProjects } from '../content/siteContent'

const HomePage: React.FC = () => {
  const featuredProjects = signatureProjects.slice(0, 4)
  const xihuStory = extendedStories[0]
  const iconMap = [HeartHandshake, Heart, Trophy, Users]
  const heroTitleParts = associationMeta.heroTitle.split('，')

  return (
    <div className="min-h-screen text-slate-800">
      <section className="relative overflow-hidden border-b border-volunteer-primary/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,230,109,0.45),_transparent_30%),linear-gradient(135deg,_#fff7ec_0%,_#fff_40%,_#fff1da_100%)]">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,107,53,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,107,53,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-volunteer-primary/20 bg-white/80 px-4 py-2 text-sm font-semibold text-volunteer-primary shadow-sm">
              <Sparkles className="h-4 w-4" />
              <span>{associationMeta.establishedYear} - {associationMeta.currentYear} · {associationMeta.anniversaryLabel}</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              {heroTitleParts[0]}
              {heroTitleParts[1] ? (
                <>
                  <br />
                  {heroTitleParts[1]}
                </>
              ) : null}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              {associationMeta.fullName}，以“{associationMeta.mission}”为宗旨，{associationMeta.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/activities" className="warm-button inline-flex items-center justify-center gap-2">
                <span>查看品牌项目</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/timeline"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-volunteer-primary/20 bg-white px-6 py-3 font-semibold text-volunteer-primary transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <CalendarRange className="h-4 w-4" />
                <span>阅读发展历程</span>
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeStats.map((stat, index) => {
              const Icon = iconMap[index]
              return (
                <article key={stat.label} className="volunteer-card card-texture p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-volunteer-primary/80">
                      {stat.label}
                    </span>
                    <Icon className="h-5 w-5 text-volunteer-primary" />
                  </div>
                  <div className="mt-4 text-3xl font-bold text-slate-900">{stat.value}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{stat.detail}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="section-heading">
          <p className="section-kicker">品牌项目</p>
          <h2 className="section-title">四条长期项目线，撑起自动化青协的日常服务</h2>
          <p className="section-copy">
            这些项目不是临时拼出来的活动，而是和合作单位长期一起做下来的固定服务。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="volunteer-card overflow-hidden">
              <div className="h-full border-l-4 border-volunteer-primary p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold tracking-[0.18em] text-volunteer-primary/80">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">{project.name}</h3>
                  </div>
                  <span className="rounded-full bg-volunteer-light/60 px-3 py-1 text-sm font-semibold text-volunteer-primary">
                    {project.startYear}
                  </span>
                </div>
                <p className="mt-3 text-base font-medium text-slate-700">{project.subtitle}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.impact.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {project.highlights.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-volunteer-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-highlight-section bg-slate-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-kicker text-volunteer-warm">年度重点行动</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">{xihuStory.name}：从基地陪伴走向公众倡导</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">{xihuStory.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {xihuStory.impact.map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold">2025 年重点行动一览</h3>
            <div className="mt-6 space-y-4">
              {annualMoments.map((moment) => (
                <div key={moment.title} className="border-l-2 border-volunteer-warm/60 pl-4">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-semibold">{moment.title}</h4>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/60">{moment.tag}</span>
                  </div>
                  <p className="mt-1 text-sm text-white/70">{moment.context}</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">{moment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="section-heading">
          <p className="section-kicker">组织定位</p>
          <h2 className="section-title">把每一份志愿行动认真记录下来</h2>
          <p className="section-copy">{associationMeta.description}</p>
        </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="volunteer-card p-6">
              <h3 className="text-xl font-bold text-slate-900">传承时间</h3>
              <p className="mt-3 text-4xl font-bold text-volunteer-primary">{associationMeta.anniversaryLabel}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">从 2002 到 2025，青协一直在同一条路上做志愿服务。</p>
            </div>
            <div className="volunteer-card p-6">
              <h3 className="text-xl font-bold text-slate-900">服务版图</h3>
              <p className="mt-3 text-4xl font-bold text-volunteer-primary">多场景长期服务</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">社区、慧灵、病房、乡村、书吧、赛会与校园公共空间共同构成年度行动地图。</p>
            </div>
            <div className="volunteer-card p-6">
              <h3 className="text-xl font-bold text-slate-900">组织入口</h3>
              <p className="mt-3 text-4xl font-bold text-volunteer-primary">6 个部门</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">63 名成员一起分工协作，把活动策划、执行和复盘一步步做扎实。</p>
            </div>
          </div>
      </section>
    </div>
  )
}

export default HomePage

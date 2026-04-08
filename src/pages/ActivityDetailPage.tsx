import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, BadgeCheck, CalendarClock, Layers, MoveRight } from 'lucide-react'
import { activityDetailMap, teachingBaseProfiles, teachingMediaWall } from '../content/siteContent'

const teachingBaseSlugByName: Record<string, string> = {
  '飞鸟夏令营': 'feiniao',
  '筑梦前陈': 'qianchen',
  '逐梦清溪': 'qingxi',
}

const ActivityDetailPage: React.FC = () => {
  const { slug } = useParams()

  if (!slug || !activityDetailMap[slug]) {
    return <Navigate to="/activities" replace />
  }

  const project = activityDetailMap[slug]
  const isSummerTeaching = project.slug === 'summer-teaching'

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="page-hero">
        <div className="page-hero-inner">
          <Layers className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">{project.category}</p>
          <h1 className="page-hero-title">{project.name}</h1>
          <p className="page-hero-copy">
            {project.subtitle}
            {' '}·{' '}
            {project.summary}
          </p>
          <div className="mt-8">
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>返回品牌项目页</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-6">
            <article className="volunteer-card p-6">
              <div className="flex items-center gap-3">
                <CalendarClock className="h-5 w-5 text-volunteer-primary" />
                <h2 className="text-xl font-bold text-slate-900">项目概览</h2>
              </div>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm font-semibold tracking-[0.16em] text-volunteer-primary/80">起始年份</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">{project.startYear}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-[0.16em] text-volunteer-primary/80">关键数据</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.impact.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="volunteer-card p-6">
              <h2 className="text-xl font-bold text-slate-900">项目亮点</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-volunteer-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </aside>

          <div className="space-y-6">
            {isSummerTeaching ? (
              <SummerTeachingOverview />
            ) : (
              <>
                {project.subProjects && project.subProjects.length > 0 && (
                  <article className="volunteer-card p-7">
                    <div className="flex items-center gap-3">
                      <MoveRight className="h-5 w-5 text-volunteer-primary" />
                      <h2 className="text-2xl font-bold text-slate-900">团队构成</h2>
                    </div>
                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                      {project.subProjects.map((team) => (
                        <div key={team.name} className="rounded-2xl border border-volunteer-primary/10 bg-slate-50 p-5">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="text-lg font-bold text-slate-900">{team.name}</h3>
                            {team.startYear && (
                              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-volunteer-primary shadow-sm">
                                {team.startYear}
                              </span>
                            )}
                          </div>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{team.summary}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                )}

                {(project.sections ?? []).map((section) => (
                  <article key={section.title} className="volunteer-card p-7">
                    <div className="flex items-center gap-3">
                      <MoveRight className="h-5 w-5 text-volunteer-primary" />
                      <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                    </div>
                    <p className="mt-4 text-sm leading-8 text-slate-600">{section.body}</p>
                  </article>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

const SummerTeachingOverview: React.FC = () => {
  return (
    <>
      <article className="volunteer-card overflow-hidden p-7">
        <div className="flex items-center gap-3">
          <MoveRight className="h-5 w-5 text-volunteer-primary" />
          <h2 className="text-2xl font-bold text-slate-900">三基地导航</h2>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          暑期支教已拆分为三个独立基地详情页。点击对应基地可查看背景、实践内容、项目价值与媒体回响。
        </p>
        <div className="mt-5 grid gap-4 xl:grid-cols-3">
          {teachingBaseProfiles.map((base) => {
            const baseSlug = teachingBaseSlugByName[base.name]
            const targetPath = baseSlug ? `/activities/summer-teaching/base/${baseSlug}` : '/activities/summer-teaching'

            return (
              <article
                key={base.name}
                className="rounded-[24px] border border-volunteer-primary/10 bg-[linear-gradient(135deg,rgba(255,247,236,0.95),rgba(255,255,255,1))] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-volunteer-primary/80">{base.location}</p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">{base.name}</h3>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-volunteer-primary shadow-sm">
                    Since {base.since}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-slate-700">{base.theme}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {base.metrics.slice(0, 3).map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{base.summary}</p>
                <div className="mt-5">
                  <Link
                    to={targetPath}
                    className="inline-flex items-center gap-2 rounded-full border border-volunteer-primary/20 bg-white px-4 py-2 text-sm font-semibold text-volunteer-primary transition hover:bg-volunteer-light/30"
                  >
                    <span>进入基地详情</span>
                    <MoveRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </article>

      <article className="volunteer-card p-7">
        <div className="flex items-center gap-3">
          <MoveRight className="h-5 w-5 text-volunteer-primary" />
          <h2 className="text-2xl font-bold text-slate-900">媒体报道墙</h2>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {teachingMediaWall.map((item) => (
            <div
              key={`${item.platform}-${item.angle}`}
              className="rounded-[24px] border border-volunteer-primary/10 bg-[linear-gradient(135deg,rgba(255,248,239,1),rgba(255,255,255,1))] p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-bold text-slate-900">{item.platform}</p>
                <span className="rounded-full bg-volunteer-light/40 px-3 py-1 text-xs font-semibold text-volunteer-primary">{item.reach}</span>
              </div>
              <p className="mt-3 text-sm font-medium text-slate-700">{item.angle}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.value}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  )
}

export default ActivityDetailPage

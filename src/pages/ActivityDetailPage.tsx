import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, BadgeCheck, CalendarClock, Layers, MoveRight } from 'lucide-react'
import { activityDetailMap } from '../content/siteContent'

const ActivityDetailPage: React.FC = () => {
  const { slug } = useParams()

  if (!slug || !activityDetailMap[slug]) {
    return <Navigate to="/activities" replace />
  }

  const project = activityDetailMap[slug]

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="page-hero">
        <div className="page-hero-inner">
          <Layers className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">{project.category}</p>
          <h1 className="page-hero-title">{project.name}</h1>
          <p className="page-hero-copy">{project.subtitle}。{project.summary}</p>
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default ActivityDetailPage

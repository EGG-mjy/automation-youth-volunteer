import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, BadgeCheck, Layers, MoveRight } from 'lucide-react'
import { teachingBaseProfiles } from '../content/siteContent'

const teachingBaseNameBySlug: Record<string, string> = {
  feiniao: '飞鸟夏令营',
  qianchen: '筑梦前陈',
  qingxi: '逐梦清溪',
}

const teachingBaseMap = Object.fromEntries(teachingBaseProfiles.map((base) => [base.name, base]))

const TeachingBaseDetailPage: React.FC = () => {
  const { baseSlug } = useParams()
  const baseName = baseSlug ? teachingBaseNameBySlug[baseSlug] : undefined
  const base = baseName ? teachingBaseMap[baseName] : undefined

  if (!baseSlug || !base) {
    return <Navigate to="/activities/summer-teaching" replace />
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="page-hero">
        <div className="page-hero-inner">
          <Layers className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">暑期支教基地</p>
          <h1 className="page-hero-title">{base.name}</h1>
          <p className="page-hero-copy">
            {base.location} · {base.theme}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/activities/summer-teaching"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>返回暑期支教总览</span>
            </Link>
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <span>返回活动页</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="volunteer-section">
        <article className="volunteer-card overflow-hidden">
          <div className="border-b border-volunteer-primary/10 bg-[linear-gradient(135deg,rgba(255,107,53,0.12),rgba(255,230,109,0.12),rgba(78,205,196,0.10))] p-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-volunteer-primary/80">{base.location}</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">{base.name}</h2>
                <p className="mt-3 text-base font-medium text-slate-700">{base.theme}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {base.metrics.map((item) => (
                  <span key={item} className="rounded-full border border-volunteer-primary/10 bg-white/80 px-3 py-1 text-xs font-semibold text-volunteer-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-7 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-bold text-slate-900">背景介绍</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{base.background}</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900">实践内容与成长现场</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{base.practice}</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900">项目价值</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{base.impact}</p>
              </section>
            </div>

            <div className="space-y-6">
              <section className="rounded-[24px] border border-volunteer-primary/10 bg-slate-50 p-5">
                <h3 className="text-xl font-bold text-slate-900">代表亮点</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {base.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-volunteer-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[24px] border border-volunteer-primary/10 bg-white p-5 shadow-[0_16px_34px_rgba(15,23,42,0.05)]">
                <h3 className="text-xl font-bold text-slate-900">媒体聚焦与社会回响</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{base.mediaSummary}</p>
                <div className="mt-4 grid gap-3">
                  {base.mediaHits.map((item) => (
                    <article key={`${base.name}-${item.platform}-${item.angle}`} className="rounded-2xl bg-slate-50 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-slate-900">{item.platform}</p>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-volunteer-primary">{item.reach}</span>
                      </div>
                      <p className="mt-2 text-sm font-medium text-slate-700">{item.angle}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.value}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </article>

        <article className="volunteer-card mt-6 p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-volunteer-primary">
            <MoveRight className="h-4 w-4" />
            <span>继续查看另外两个基地</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {Object.entries(teachingBaseNameBySlug)
              .filter(([slug]) => slug !== baseSlug)
              .map(([slug, name]) => (
                <Link
                  key={slug}
                  to={`/activities/summer-teaching/base/${slug}`}
                  className="rounded-full border border-volunteer-primary/20 bg-volunteer-light/20 px-4 py-2 text-sm font-semibold text-volunteer-primary transition hover:bg-volunteer-light/35"
                >
                  {name}
                </Link>
              ))}
          </div>
        </article>
      </section>
    </div>
  )
}

export default TeachingBaseDetailPage

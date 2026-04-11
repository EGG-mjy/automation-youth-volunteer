import React from 'react'
import { Link } from 'react-router-dom'
import { Layers, MoveRight, SquareStack } from 'lucide-react'
import { activityColumns, activitySlices } from '../content/siteContent'

const ActivitiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="page-hero">
        <div className="page-hero-inner">
          <Layers className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">品牌项目</p>
          <h1 className="page-hero-title">品牌项目</h1>
          <p className="page-hero-copy">
            从青协长期在做的项目，到 2025 年有代表性的活动，脉络一眼就清楚。
          </p>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="section-heading">
          <p className="section-kicker">第一层</p>
          <h2 className="section-title">八个主栏目，覆盖协会最稳定的服务场景</h2>
          <p className="section-copy">每张卡片都写清楚时间、内容和重点，方便你快速了解。</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {activityColumns.map((column) => (
            <article key={column.name} className="volunteer-card p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold tracking-[0.18em] text-volunteer-primary/80">{column.category}</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">{column.name}</h3>
                </div>
                <span className="rounded-full bg-volunteer-light/40 px-3 py-1 text-sm font-semibold text-volunteer-primary">
                  {column.startYear}
                </span>
              </div>
              <p className="mt-3 text-base font-medium text-slate-700">{column.subtitle}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{column.summary}</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {column.impact.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-volunteer-primary">
                <MoveRight className="h-4 w-4" />
                <span>{column.highlights[0]}</span>
              </div>
              <div className="mt-6">
                <Link
                  to={`/activities/${column.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-volunteer-primary/20 bg-volunteer-light/20 px-4 py-2 text-sm font-semibold text-volunteer-primary transition hover:bg-volunteer-light/40"
                >
                  <span>查看详情</span>
                  <MoveRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-heading">
            <p className="section-kicker">第二层</p>
            <h2 className="section-title">2025 年代表性活动</h2>
            <p className="section-copy">这里看的是“今年具体做了什么”，和上面的长期项目互相补充。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activitySlices.map((slice) => (
              <article key={slice.title} className="volunteer-card card-texture p-6">
                <SquareStack className="h-5 w-5 text-volunteer-primary" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-volunteer-primary/80">{slice.tag}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{slice.title}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">{slice.context}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{slice.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default ActivitiesPage

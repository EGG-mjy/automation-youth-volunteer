import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarClock, Layers, MoveRight, SquareStack } from 'lucide-react'
import { activityColumns, activitySlices } from '../content/siteContent'

const ActivitiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="page-hero">
        <div className="page-hero-inner">
          <Layers className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">品牌项目</p>
          <h1 className="page-hero-title">不是随机活动列表，而是清晰可读的项目矩阵</h1>
          <p className="page-hero-copy">
            第一层展示长期品牌项目，第二层展示 2025 年具有代表性的年度切片，确保每个栏目都能回到 PDF 原始事实。
          </p>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="section-heading">
          <p className="section-kicker">第一层</p>
          <h2 className="section-title">六个主栏目，覆盖协会最稳定的服务场景</h2>
          <p className="section-copy">每张卡片都使用 PDF 原始时间、数据和一句价值概述，不再混用无关的模板信息。</p>
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
            <h2 className="section-title">2025 年活动切片，把品牌项目落到具体场景</h2>
            <p className="section-copy">年度切片用于展示项目是如何发生的，而不是替代项目本身。</p>
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

      <section className="volunteer-section">
        <div className="rounded-[32px] bg-slate-900 p-8 text-white md:p-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="section-kicker text-volunteer-warm">页面原则</p>
              <h2 className="mt-2 text-3xl font-bold">让活动页回到“项目长期性”而不是“卡片随机性”</h2>
            </div>
            <CalendarClock className="h-12 w-12 text-volunteer-warm" />
          </div>
          <p className="mt-5 max-w-4xl text-sm leading-8 text-white/80">
            这里不再放虚构地点、占位时间或泛化描述。用户进入活动页，应该立即看见哪些项目是长期坚持、哪些节点是年度重点、哪些数据可以被事实支撑。
          </p>
        </div>
      </section>
    </div>
  )
}

export default ActivitiesPage

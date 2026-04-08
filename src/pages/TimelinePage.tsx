import React from 'react'
import { Compass, Milestone, Shapes, TimerReset } from 'lucide-react'
import { serviceMatrix, timelineEvents } from '../content/siteContent'

const TimelinePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff8ef_0%,#ffffff_18%,#fff8ef_100%)]">
      <section className="page-hero">
        <div className="page-hero-inner">
          <TimerReset className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">发展历程</p>
          <h1 className="page-hero-title">从 2002 到 2025，把温暖变成一条看得见的时间线</h1>
          <p className="page-hero-copy">
            这条时间线不只写年份，也写清楚每个阶段做了什么、怎么一步步走到今天。
          </p>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-volunteer-primary via-volunteer-secondary to-volunteer-accent md:left-1/2" />
          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const reverse = index % 2 === 1
              return (
                <article
                  key={`${event.year}-${event.title}`}
                  className={`relative flex flex-col gap-4 md:items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  <div className="absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-volunteer-primary shadow md:left-1/2" />
                  <div className={`pl-10 md:w-1/2 md:pl-0 ${reverse ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="volunteer-card p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Milestone className="h-5 w-5 text-volunteer-primary" />
                          <span className="text-3xl font-bold text-volunteer-primary">{event.year}</span>
                        </div>
                        {event.badge && (
                          <span className="rounded-full bg-volunteer-light/50 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-volunteer-primary">
                            {event.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-4 text-2xl font-bold text-slate-900">{event.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-heading !mb-10">
            <p className="section-kicker text-volunteer-warm">服务版图</p>
            <h2 className="section-title text-white">除了时间线，你还能看到青协长期在做的几条服务线</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {serviceMatrix.map((item, index) => {
              const Icon = [Compass, Shapes, Milestone, TimerReset, Compass][index]
              return (
                <article key={item.label} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <Icon className="h-6 w-6 text-volunteer-warm" />
                  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/60">{item.label}</p>
                  <h3 className="mt-2 text-xl font-bold">{item.value}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">{item.detail}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TimelinePage

import React from 'react'
import { CalendarDays, MoveRight, Users2 } from 'lucide-react'
import { internalEvents } from '../content/siteContent'

const InternalEventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff8ef_0%,#ffffff_22%,#fff8ef_100%)]">
      <section className="page-hero">
        <div className="page-hero-inner">
          <CalendarDays className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">内部活动</p>
          <h1 className="page-hero-title">自动化青协内部活动纪要</h1>
          <p className="page-hero-copy">
            聚焦协会内部治理、换届传承与文化建设，记录每次全体大会与关键组织节点。
          </p>
        </div>
      </section>

      <section className="volunteer-section pt-0">
        <div className="section-heading">
          <p className="section-kicker">年度节点</p>
          <h2 className="section-title">五场核心内部活动，串联组织复盘、交接与成长</h2>
          <p className="section-copy">
            本页面采用精炼叙述保留关键事实，重点呈现任命、表彰、规划与组织展望，不包含图片内容。
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-volunteer-primary via-volunteer-secondary to-volunteer-accent md:left-1/2" />
          <div className="space-y-8">
            {internalEvents.map((event, index) => {
              const reverse = index % 2 === 1
              return (
                <article
                  key={event.id}
                  className={`relative flex flex-col gap-4 md:items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  <div className="absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-volunteer-primary shadow md:left-1/2" />
                  <div className={`pl-10 md:w-1/2 md:pl-0 ${reverse ? 'md:pr-12' : 'md:pl-12'}`}>
                    <article className="volunteer-card overflow-hidden p-6 md:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-2xl font-bold text-slate-900">{event.title}</h3>
                        <span className="rounded-full bg-volunteer-light/40 px-3 py-1 text-sm font-semibold text-volunteer-primary">
                          {event.date}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-600">{event.intro}</p>

                      <section className="mt-6">
                        <div className="flex items-center gap-2 text-sm font-semibold text-volunteer-primary">
                          <MoveRight className="h-4 w-4" />
                          <span>关键信息</span>
                        </div>
                        <ul className="mt-3 space-y-3 text-sm text-slate-600">
                          {event.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <MoveRight className="mt-0.5 h-4 w-4 shrink-0 text-volunteer-secondary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section className="mt-6 rounded-2xl bg-slate-50 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-volunteer-primary">
                          <Users2 className="h-4 w-4" />
                          <span>核心人物</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {event.keyPeople.map((person) => (
                            <span key={person} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                              {person}
                            </span>
                          ))}
                        </div>
                      </section>

                      <p className="mt-6 text-sm leading-7 text-slate-700">{event.closing}</p>
                    </article>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default InternalEventsPage

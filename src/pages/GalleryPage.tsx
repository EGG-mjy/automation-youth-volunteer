import React from 'react'
import { Camera, Image, Tags } from 'lucide-react'
import { galleryStories } from '../content/siteContent'

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff7eb_0%,#ffffff_22%,#fff7eb_100%)]">
      <section className="page-hero">
        <div className="page-hero-inner">
          <Camera className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">活动纪实</p>
          <h1 className="page-hero-title">没有真实照片墙时，就把纪实写成可以阅读的版面</h1>
          <p className="page-hero-copy">
            这一页不伪造照片瀑布流，而是用图文纪实卡片承接 PDF 里的图注、正文摘要与项目气质，为后续补图预留位置。
          </p>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="grid gap-6 lg:grid-cols-2">
          {galleryStories.map((story, index) => (
            <article key={story.title} className={`volunteer-card overflow-hidden ${index === 1 ? 'lg:translate-y-8' : ''}`}>
              <div className="h-48 border-b border-volunteer-primary/10 bg-[linear-gradient(135deg,rgba(255,107,53,0.18),rgba(78,205,196,0.18),rgba(255,230,109,0.35))] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-volunteer-primary/80">Editorial Record</p>
                <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight text-slate-900">{story.title}</h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-700">{story.caption}</p>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <Image className="mt-1 h-5 w-5 shrink-0 text-volunteer-primary" />
                  <p className="text-sm leading-7 text-slate-600">{story.summary}</p>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <Tags className="mt-1 h-5 w-5 shrink-0 text-volunteer-secondary" />
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GalleryPage

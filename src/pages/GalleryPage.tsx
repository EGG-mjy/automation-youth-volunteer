import React from 'react'
import { Camera, Image, PlayCircle, Tags } from 'lucide-react'
import { galleryStories, teachingBaseProfiles, teachingMediaWall } from '../content/siteContent'

const teachingAlbums = [
  {
    title: '飞鸟夏令营',
    description: '这里能看到飞鸟夏令营的现场照片和视频，包括课堂互动和陪伴瞬间。',
    photos: [
      { src: '/media/teaching/photos/feiniao-1.jpg', alt: '飞鸟夏令营活动照片 1' },
      { src: '/media/teaching/photos/feiniao-2.jpg', alt: '飞鸟夏令营活动照片 2' },
    ],
    video: {
      src: '/media/teaching/videos/feiniao.mp4',
      title: '飞鸟夏令营视频',
    },
  },
  {
    title: '筑梦前陈',
    description: '前陈支教的照片和视频已经整理好，在页面里可以直接看、直接播。',
    photos: [
      { src: '/media/teaching/photos/qianchen-1.jpg', alt: '筑梦前陈活动照片 1' },
      { src: '/media/teaching/photos/qianchen-2.jpg', alt: '筑梦前陈活动照片 2' },
    ],
    video: {
      src: '/media/teaching/videos/qianchen.mp4',
      title: '筑梦前陈视频',
    },
  },
  {
    title: '逐梦清溪',
    description: '清溪支教的课程和活动现场，也能通过照片和视频直接看到。',
    photos: [
      { src: '/media/teaching/photos/qingxi-1.jpg', alt: '逐梦清溪活动照片 1' },
      { src: '/media/teaching/photos/qingxi-2.jpg', alt: '逐梦清溪活动照片 2' },
    ],
    video: {
      src: '/media/teaching/videos/qingxi.mp4',
      title: '逐梦清溪视频',
    },
  },
]

const albumMetaMap = Object.fromEntries(teachingBaseProfiles.map((base) => [base.name, base]))

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff7eb_0%,#ffffff_22%,#fff7eb_100%)]">
      <section className="page-hero">
        <div className="page-hero-inner">
          <Camera className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">活动纪实</p>
          <h1 className="page-hero-title page-hero-title-wide">支教照片和视频都在这，活动现场一眼能看到</h1>
          <p className="page-hero-copy">
            飞鸟夏令营、筑梦前陈、逐梦清溪三条线的素材都放进来了，
            现在可以直接看图、直接播放视频。
          </p>
        </div>
      </section>

      <section className="volunteer-section pt-0">
        <div className="section-heading">
          <p className="section-kicker">支教影像</p>
          <h2 className="section-title">支教素材已整理到页面</h2>
          <p className="section-copy">
            目前每个基地先放代表性照片和视频，既能看清活动内容，也能保证页面加载速度。
          </p>
        </div>

        <div className="space-y-10">
          {teachingAlbums.map((album) => {
            const base = albumMetaMap[album.title]

            return (
              <article key={album.title} className="volunteer-card overflow-hidden p-6 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-volunteer-primary/80">Teaching Archive</p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900">{album.title}</h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{base?.summary ?? album.description}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-volunteer-light/50 px-4 py-2 text-sm font-semibold text-volunteer-primary">
                    <PlayCircle className="h-4 w-4" />
                    <span>含视频素材</span>
                  </div>
                </div>

                {base && (
                  <div className="mt-5 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-[24px] border border-volunteer-primary/10 bg-[linear-gradient(135deg,rgba(255,248,239,1),rgba(255,255,255,1))] p-5">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-volunteer-primary shadow-sm">Since {base.since}</span>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-volunteer-primary shadow-sm">{base.location}</span>
                      </div>
                      <p className="mt-4 text-base font-medium text-slate-800">{base.theme}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{base.background}</p>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[24px] bg-slate-50 p-5">
                        <h3 className="text-lg font-bold text-slate-900">代表课程与活动</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {base.highlights.map((item) => (
                            <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[24px] bg-slate-50 p-5">
                        <h3 className="text-lg font-bold text-slate-900">传播成果摘要</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{base.mediaSummary}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {base.metrics.map((item) => (
                            <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-volunteer-primary shadow-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {album.photos.map((photo) => (
                      <figure key={photo.src} className="overflow-hidden rounded-[24px] bg-slate-100">
                        <img src={photo.src} alt={photo.alt} className="h-72 w-full object-cover transition duration-500 hover:scale-[1.03]" />
                      </figure>
                    ))}
                  </div>

                  <div className="overflow-hidden rounded-[24px] bg-slate-950 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                    <video
                      controls
                      preload="metadata"
                      className="aspect-[4/5] w-full rounded-[18px] bg-black object-cover"
                      src={album.video.src}
                    />
                    <div className="px-2 pb-2 pt-4 text-white">
                      <p className="text-base font-semibold">{album.video.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">部署后会随站点一起发布，网页端可直接播放。</p>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
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

      <section className="bg-slate-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-heading !mb-10">
            <p className="section-kicker text-volunteer-warm">媒体报道与社会回响</p>
            <h2 className="section-title text-white">三大支教基地的媒体报道汇总</h2>
            <p className="section-copy text-white/75">这里集中展示飞鸟、前陈、清溪三条线的传播节点，不让报道成果散落在长文里。</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {teachingMediaWall.map((item) => (
              <article key={`${item.platform}-${item.angle}`} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold">{item.platform}</h3>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-volunteer-warm">{item.reach}</span>
                </div>
                <p className="mt-4 text-sm font-medium text-white/90">{item.angle}</p>
                <p className="mt-3 text-sm leading-7 text-white/75">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage

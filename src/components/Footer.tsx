import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, MapPin, Megaphone, Milestone } from 'lucide-react'
import { associationMeta } from '../content/siteContent'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6" />
              <h3 className="text-xl font-bold">{associationMeta.shortName}</h3>
            </div>
            <p className="text-sm leading-7 text-white/80">{associationMeta.fullName}</p>
            <p className="text-sm leading-relaxed text-white/70">
              以“{associationMeta.mission}”为宗旨，从 2002 到 2025 持续开展志愿服务，沉淀长期品牌项目与组织能力。
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">组织信息</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm text-white/80">杭州电子科技大学自动化学院（人工智能学院）</span>
              </div>
              <div className="flex items-center space-x-2">
                <Milestone className="h-4 w-4" />
                <span className="text-sm text-white/80">2002 成立 · 2025 为第二十三载</span>
              </div>
              <div className="flex items-center space-x-2">
                <Megaphone className="h-4 w-4" />
                <span className="text-sm text-white/80">公众号：杭电自动化青协</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">快速入口</h3>
            <div className="space-y-2">
              <Link to="/activities" className="block text-white/90 transition-colors hover:text-white">
                护佑童心
              </Link>
              <Link to="/activities" className="block text-white/90 transition-colors hover:text-white">
                灵动翼行
              </Link>
              <Link to="/activities" className="block text-white/90 transition-colors hover:text-white">
                暑期支教
              </Link>
              <Link to="/timeline" className="block text-white/90 transition-colors hover:text-white">
                发展历程
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">公众号二维码</h3>
            <div className="inline-block rounded-2xl bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
              <img
                src="/media/qrcode/automation-association-wechat-qr.png"
                alt="杭电自动化青协公众号二维码"
                className="h-36 w-36 rounded-xl object-cover"
              />
            </div>
            <p className="text-xs leading-6 text-white/70">微信扫码关注“杭电自动化青协”，获取活动通知、报名信息和项目纪实。</p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/60">
            © 2002-2025 {associationMeta.fullName} · 二十三载自动化青协志愿服务实践
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

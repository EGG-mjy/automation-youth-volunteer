import React from 'react'
import { Heart, MapPin, Megaphone, Milestone } from 'lucide-react'
import { associationMeta } from '../content/siteContent'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 青协介绍 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6" />
              <h3 className="text-xl font-bold">{associationMeta.shortName}</h3>
            </div>
            <p className="text-white/80 leading-7 text-sm">
              {associationMeta.fullName}
            </p>
            <p className="text-white/70 leading-relaxed text-sm">
              以“{associationMeta.mission}”为宗旨，从 2002 到 2025 持续书写志愿服务的长期叙事，让品牌项目真正沉淀为组织资产。
            </p>
          </div>

          {/* 联系信息 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">组织信息</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-white/80 text-sm">杭州电子科技大学自动化学院（人工智能学院）</span>
              </div>
              <div className="flex items-center space-x-2">
                <Milestone className="h-4 w-4" />
                <span className="text-white/80 text-sm">2002 成立 · 2025 为第二十三载</span>
              </div>
              <div className="flex items-center space-x-2">
                <Megaphone className="h-4 w-4" />
                <span className="text-white/80 text-sm">公众号：杭电自动化青协</span>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">旗舰入口</h3>
            <div className="space-y-2">
              <a href="/activities" className="block text-white/90 hover:text-white transition-colors">
                护佑童心
              </a>
              <a href="/activities" className="block text-white/90 hover:text-white transition-colors">
                灵动翼行
              </a>
              <a href="/activities" className="block text-white/90 hover:text-white transition-colors">
                暑期支教
              </a>
              <a href="/timeline" className="block text-white/90 hover:text-white transition-colors">
                发展历程
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2002-2025 {associationMeta.fullName} · 二十三载自青路，砥砺赓续志愿情
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

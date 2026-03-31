import React from 'react'
import { Heart, MapPin, Phone, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="warm-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 青协介绍 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6" />
              <h3 className="text-xl font-bold">自动化青协</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              自动化学院青年志愿者协会致力于为同学们提供优质的志愿服务平台，
              传递爱心，服务社会，让青春在奉献中闪光。
            </p>
          </div>

          {/* 联系信息 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">联系我们</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-white/90">自动化学院团委</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-white/90">010-12345678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-white/90">volunteer@auto.edu.cn</span>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">快速链接</h3>
            <div className="space-y-2">
              <a href="/activities" className="block text-white/90 hover:text-white transition-colors">
                最新活动
              </a>
              <a href="/join" className="block text-white/90 hover:text-white transition-colors">
                加入我们
              </a>
              <a href="/timeline" className="block text-white/90 hover:text-white transition-colors">
                青协历程
              </a>
              <a href="/gallery" className="block text-white/90 hover:text-white transition-colors">
                活动相册
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2024 自动化学院青年志愿者协会. 用爱心点亮青春，用行动传递温暖
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
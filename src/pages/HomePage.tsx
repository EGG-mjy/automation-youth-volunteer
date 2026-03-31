import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Users, Calendar, Award, ArrowRight, Star } from 'lucide-react'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: '志愿服务',
      description: '参与各类志愿服务活动，传递爱心与温暖',
      color: 'bg-volunteer-primary'
    },
    {
      icon: Calendar,
      title: '活动丰富',
      description: '定期组织多样化志愿活动，丰富校园生活',
      color: 'bg-volunteer-secondary'
    },
    {
      icon: Award,
      title: '成长平台',
      description: '在志愿服务中提升自我，收获成长与友谊',
      color: 'bg-volunteer-accent'
    }
  ]

  const activities = [
    {
      title: '社区服务行',
      description: '走进社区，为居民提供便民服务',
      image: '/images/community-service.jpg',
      participants: 120
    },
    {
      title: '环保志愿行',
      description: '保护环境，共建绿色校园',
      image: '/images/environment.jpg',
      participants: 80
    },
    {
      title: '关爱留守儿童',
      description: '用爱心温暖每一个孩子的心灵',
      image: '/images/children-care.jpg',
      participants: 60
    }
  ]

  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      <section className="relative overflow-hidden">
        <div className="warm-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="heart-icon">
                  <Heart className="h-16 w-16" fill="currentColor" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                自动化青协
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                用爱心点亮青春，用行动传递温暖
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/activities"
                  className="warm-button flex items-center justify-center space-x-2"
                >
                  <span>查看活动</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/join"
                  className="bg-white text-volunteer-primary font-semibold py-3 px-6 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  加入我们
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特色介绍 */}
      <section className="volunteer-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            为什么选择自动化青协
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们致力于为每一位志愿者提供有意义的志愿服务体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="volunteer-card p-8 text-center hover:animate-warm-glow">
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 热门活动 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              热门志愿活动
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              参与我们的品牌志愿项目，用行动诠释青春担当
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="volunteer-card overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-volunteer-primary to-volunteer-secondary flex items-center justify-center">
                  <Heart className="h-16 w-16 text-white opacity-50" fill="currentColor" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-volunteer-primary">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">{activity.participants}人参与</span>
                    </div>
                    <Link
                      to="/activities"
                      className="text-volunteer-primary hover:text-volunteer-secondary font-medium flex items-center space-x-1"
                    >
                      <span>了解详情</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="warm-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">注册志愿者</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
              <div className="text-white/80">志愿活动</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10000+</div>
              <div className="text-white/80">服务时长</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">合作机构</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="volunteer-section text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Star className="h-12 w-12 text-volunteer-warm" fill="currentColor" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            加入我们的志愿大家庭
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            让我们一起用青春的力量，为社会贡献温暖与爱心
          </p>
          <Link
            to="/join"
            className="warm-button inline-flex items-center space-x-2 text-lg"
          >
            <Heart className="h-5 w-5" fill="currentColor" />
            <span>立即加入</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
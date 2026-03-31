import React from 'react'
import { Calendar, Users, Award, Heart } from 'lucide-react'

const TimelinePage: React.FC = () => {
  const milestones = [
    {
      year: '2015',
      title: '青协成立',
      description: '自动化学院青年志愿者协会正式成立，首批会员30人',
      icon: Heart,
      color: 'bg-volunteer-primary'
    },
    {
      year: '2016',
      title: '首个品牌项目',
      description: '启动"科技进校园"科普志愿服务项目，走进3所中小学',
      icon: Award,
      color: 'bg-volunteer-secondary'
    },
    {
      year: '2017',
      title: '规模扩大',
      description: '注册志愿者突破100人，年服务时长达到2000小时',
      icon: Users,
      color: 'bg-volunteer-accent'
    },
    {
      year: '2018',
      title: '获得表彰',
      description: '荣获校级"优秀志愿服务组织"称号',
      icon: Award,
      color: 'bg-volunteer-heart'
    },
    {
      year: '2019',
      title: '智慧助老',
      description: '启动"智慧助老"项目，帮助社区老人学习智能设备',
      icon: Heart,
      color: 'bg-volunteer-primary'
    },
    {
      year: '2020',
      title: '线上服务',
      description: '疫情期间创新开展线上志愿服务，服务形式多元化',
      icon: Users,
      color: 'bg-volunteer-secondary'
    },
    {
      year: '2021',
      title: '环保公益',
      description: '开展"绿色校园"环保系列活动，倡导可持续发展理念',
      icon: Award,
      color: 'bg-volunteer-green'
    },
    {
      year: '2022',
      title: '突破500人',
      description: '注册志愿者突破500人，年服务时长超过8000小时',
      icon: Users,
      color: 'bg-volunteer-primary'
    },
    {
      year: '2023',
      title: '市级荣誉',
      description: '获得市级"优秀青年志愿服务组织"荣誉称号',
      icon: Award,
      color: 'bg-volunteer-secondary'
    },
    {
      year: '2024',
      title: '数字化转型',
      description: '启动志愿服务数字化管理平台，提升服务效率',
      icon: Heart,
      color: 'bg-volunteer-accent'
    }
  ]

  const achievements = [
    { number: '500+', label: '注册志愿者', icon: Users },
    { number: '200+', label: '志愿活动', icon: Calendar },
    { number: '10000+', label: '服务时长', icon: Heart },
    { number: '50+', label: '合作机构', icon: Award }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <section className="warm-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Calendar className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">青协大事记</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              回顾成长历程，见证青春足迹，记录每一个温暖的瞬间
            </p>
          </div>
        </div>
      </section>

      {/* 成就统计 */}
      <section className="volunteer-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="volunteer-card p-6 text-center">
                  <Icon className="h-8 w-8 text-volunteer-primary mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 时间轴 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-volunteer-primary to-volunteer-secondary"></div>

            {/* 里程碑 */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon
                const isLeft = index % 2 === 0

                return (
                  <div key={index} className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* 时间点 */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-volunteer-primary rounded-full flex items-center justify-center z-10">
                      <div className={`w-3 h-3 ${milestone.color} rounded-full`}></div>
                    </div>

                    {/* 内容卡片 */}
                    <div className={`ml-16 md:ml-0 ${isLeft ? 'md:mr-8 md:text-right' : 'md:ml-8'} flex-1`}>
                      <div className="volunteer-card p-6 hover:animate-warm-glow">
                        <div className="flex items-center mb-3">
                          <div className={`${milestone.color} w-10 h-10 rounded-full flex items-center justify-center mr-3`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-2xl font-bold text-volunteer-primary">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 重要时刻 */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">重要时刻</h2>
            <p className="text-gray-600">那些值得铭记的温暖瞬间</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">首次获奖</h3>
              <p className="text-gray-600 text-sm mb-4">2018年获得校级优秀志愿服务组织称号，这是青协发展的里程碑</p>
              <div className="text-volunteer-primary font-medium">2018年5月</div>
            </div>

            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">百人团队</h3>
              <p className="text-gray-600 text-sm mb-4">2017年志愿者人数突破100人，标志着青协进入快速发展期</p>
              <div className="text-volunteer-primary font-medium">2017年10月</div>
            </div>

            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">爱心传承</h3>
              <p className="text-gray-600 text-sm mb-4">建立志愿服务传承机制，确保青协精神代代相传</p>
              <div className="text-volunteer-primary font-medium">2020年9月</div>
            </div>
          </div>
        </div>
      </section>

      {/* 未来展望 */}
      <section className="warm-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 mx-auto mb-6" fill="currentColor" />
          <h2 className="text-3xl font-bold mb-6">展望未来</h2>
          <p className="text-xl text-white/90 mb-8">
            站在新的历史起点，自动化青协将继续秉承志愿精神，
            创新服务模式，扩大服务影响，为社会贡献更多青春力量
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">2025</div>
              <div className="text-white/80">志愿者突破800人</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">2026</div>
              <div className="text-white/80">建立校外服务基地</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">2027</div>
              <div className="text-white/80">打造全国知名志愿品牌</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TimelinePage
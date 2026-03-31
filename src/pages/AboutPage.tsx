import React from 'react'
import { Users, Target, Award, Heart, Lightbulb } from 'lucide-react'

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: '奉献精神',
      description: '用爱心服务社会，用行动传递温暖'
    },
    {
      icon: Users,
      title: '团队合作',
      description: '团结一心，携手并进，共同成长'
    },
    {
      icon: Lightbulb,
      title: '创新思维',
      description: '运用专业知识，创新服务方式'
    },
    {
      icon: Heart,
      title: '社会责任',
      description: '担当时代使命，贡献青春力量'
    }
  ]

  const team = [
    {
      name: '张同学',
      position: '协会会长',
      description: '自动化专业大三学生，志愿服务经验3年'
    },
    {
      name: '李同学',
      position: '活动部部长',
      description: '负责活动组织策划，已成功组织大型活动20余场'
    },
    {
      name: '王同学',
      position: '外联部部长',
      description: '负责对外交流合作，与50余家机构建立合作关系'
    },
    {
      name: '陈同学',
      position: '宣传部部长',
      description: '负责青协宣传工作，擅长新媒体运营'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* 页面头部 */}
      <section className="warm-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              自动化学院青年志愿者协会，用青春书写奉献，用爱心点亮未来
            </p>
          </div>
        </div>
      </section>

      {/* 青协简介 */}
      <section className="volunteer-section">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">自动化青协简介</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  自动化学院青年志愿者协会成立于2015年，是学院团委指导下的学生志愿服务组织。
                  协会秉承"奉献、友爱、互助、进步"的志愿精神，致力于为社会提供优质的志愿服务。
                </p>
                <p>
                  协会现有注册志愿者500余人，累计开展各类志愿服务活动200余场，服务时长超过10000小时，
                  与50余家社会机构建立了长期合作关系。
                </p>
                <p>
                  我们结合自动化专业特色，创新志愿服务形式，在科技科普、智慧助老、环保公益等领域
                  形成了具有专业特色的品牌项目。
                </p>
              </div>
            </div>
            <div className="volunteer-card p-8">
              <div className="text-center">
                <div className="warm-gradient w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-12 w-12 text-white" fill="currentColor" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">我们的使命</h3>
                <p className="text-gray-600">
                  用专业知识服务社会，用青春热情传递爱心，
                  让每一位志愿者在奉献中成长，在服务中收获
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">核心价值观</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们坚持的理念和价值观，指引着青协前进的方向
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="volunteer-card p-6 hover:animate-warm-glow">
                    <div className="bg-volunteer-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 组织架构 */}
      <section className="volunteer-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">组织架构</h2>
            <p className="text-gray-600">协会由四个核心部门组成，各司其职，协同合作</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">活动部</h3>
              <p className="text-gray-600 text-sm">负责活动策划、组织和执行</p>
            </div>

            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">外联部</h3>
              <p className="text-gray-600 text-sm">负责对外联络和合作拓展</p>
            </div>

            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">宣传部</h3>
              <p className="text-gray-600 text-sm">负责宣传推广和媒体运营</p>
            </div>

            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-heart w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">办公室</h3>
              <p className="text-gray-600 text-sm">负责日常管理和协调工作</p>
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">核心团队</h2>
            <p className="text-gray-600">优秀的团队是青协发展的核心动力</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="volunteer-card p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-volunteer-primary to-volunteer-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-volunteer-primary font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
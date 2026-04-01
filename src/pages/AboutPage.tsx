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
      name: '姜智敏老师',
      position: '协会指导老师',
      description: '自动化学院老师，指导青协发展，提供专业支持'
    },
    {
      name: '姜博恩老师',
      position: '协会指导老师',
      description: '自动化学院老师，协助青协日常管理，指导志愿活动'
    },
    {
      name: '主席团成员',
      position: '协会负责人',
      description: '统筹协会各项工作，带领63名成员开展志愿服务'
    },
    {
      name: '各部门部长',
      position: '部门负责人',
      description: '负责各部门日常工作，协调各项志愿活动开展'
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
                  自动化学院青年志愿者协会是一个充满活力、和谐友爱的青年志愿者组织。协会现有63名成员，
                  由姜智敏、姜博恩老师担任指导老师，始终奉行"奉献、友爱、互助、进步"的准则，
                  坚持以"服务同学，奉献社会"为宗旨。
                </p>
                <p>
                  协会注册志愿者人数已达5103人，累计志愿服务时长超过80024.7小时。
                  下设办公室、组织部、新媒体部、项目拓展中心、基地拓展中心、志愿者管理中心六个部门。
                </p>
                <p>
                  2025年，自动化青协迎来了成立二十二周年的重要时刻。二十余年来，我们打造了"护佑童心"、
                  "西湖益行"、"智能车志愿"三大品牌项目，用实际行动传递温暖与关爱。
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">办公室</h3>
              <p className="text-gray-600 text-sm">负责日常管理和协调工作</p>
            </div>

            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">组织部</h3>
              <p className="text-gray-600 text-sm">负责活动策划、组织和执行</p>
            </div>

            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">新媒体部</h3>
              <p className="text-gray-600 text-sm">负责宣传推广和媒体运营</p>
            </div>

            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-heart w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">项目拓展中心</h3>
              <p className="text-gray-600 text-sm">负责项目开发和创新</p>
            </div>

            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">基地拓展中心</h3>
              <p className="text-gray-600 text-sm">负责志愿服务基地建设</p>
            </div>

            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">志愿者管理中心</h3>
              <p className="text-gray-600 text-sm">负责志愿者管理和培训</p>
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
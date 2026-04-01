import React, { useState } from 'react'
import { Calendar, MapPin, Users, Heart, Filter, Search } from 'lucide-react'

const ActivitiesPage: React.FC = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const activities = [
    {
      id: 1,
      title: '护佑童心·儿童医院志愿服务',
      description: '为浙江大学附属儿童医院住院患儿设计趣味课程，每年开展超20次活动，服务儿童超百人',
      category: 'community',
      date: '2025-04-15',
      location: '浙江大学附属儿童医院',
      participants: 150,
      status: 'ongoing',
      impact: '服务患儿200+人，获杭州日报、人民日报报道',
      image: '/images/children-care.jpg',
      highlights: ['趣味课程', '能力提升', '媒体报道']
    },
    {
      id: 2,
      title: '西湖益行·温暖守护行动',
      description: '96名志愿者7小时坚守西湖畔，5公里行程搭建理解与爱的桥梁，服务特殊群体',
      category: 'community',
      date: '2025-04-19',
      location: '杭州西湖景区',
      participants: 96,
      status: 'completed',
      impact: '服务时长超700小时，获志愿服务大赛优秀团队',
      image: '/images/west-lake.jpg',
      highlights: ['特殊关爱', '社会影响', '品牌项目']
    },
    {
      id: 3,
      title: '智能车竞赛志愿服务',
      description: '服务全国大学生智能汽车竞赛省赛国赛，累计志愿时长8000+小时',
      category: 'community',
      date: '2025-07-18',
      location: '杭州电子科技大学',
      participants: 500,
      status: 'completed',
      impact: '保障赛事顺利进行，展现杭电学子风采',
      image: '/images/smart-car.jpg',
      highlights: ['专业服务', '大型赛事', '团队协作']
    },
    {
      id: 4,
      title: '慧灵基地助残服务',
      description: '在东湖、九堡等5个慧灵基地开展助残服务，12年发展完善，深受社会认可',
      category: 'community',
      date: '2025-03-10',
      location: '慧灵基地',
      participants: 200,
      status: 'ongoing',
      impact: '获省志愿服务项目大赛铜奖，校级优秀基地',
      image: '/images/huiling.jpg',
      highlights: ['助残服务', '12年传承', '省级荣誉']
    },
    {
      id: 5,
      title: '暑期支教·飞鸟夏令营',
      description: '走进安徽黄山祁门县柏溪中心学校，为乡村孩子带去知识与希望',
      category: 'education',
      date: '2025-07-15',
      location: '安徽黄山祁门县',
      participants: 30,
      status: 'completed',
      impact: '服务乡村儿童100+人，获多家媒体报道',
      image: '/images/summer-camp.jpg',
      highlights: ['乡村支教', '文化传承', '媒体关注']
    },
    {
      id: 6,
      title: '社区智慧助老服务',
      description: '在早城、下沙等社区为老年人开展智能手机使用教学，跨越数字鸿沟',
      category: 'community',
      date: '2025-02-20',
      location: '早城社区、下沙社区',
      participants: 80,
      status: 'ongoing',
      impact: '服务社区老人500+人次，获居民好评',
      image: '/images/elderly-care.jpg',
      highlights: ['智慧助老', '社区服务', '数字反哺']
    }
  ]

  const categories = [
    { key: 'all', label: '全部活动', count: activities.length },
    { key: 'education', label: '教育助学', count: activities.filter(a => a.category === 'education').length },
    { key: 'community', label: '社区服务', count: activities.filter(a => a.category === 'community').length },
    { key: 'environment', label: '环保公益', count: activities.filter(a => a.category === 'environment').length },
    { key: 'charity', label: '慈善公益', count: activities.filter(a => a.category === 'charity').length }
  ]

  const filteredActivities = activities.filter(activity => {
    const matchesFilter = filter === 'all' || activity.category === filter
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'ongoing': return 'bg-blue-100 text-blue-800'
      case 'upcoming': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return '已结束'
      case 'ongoing': return '进行中'
      case 'upcoming': return '即将开始'
      default: return '未知'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <section className="warm-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Heart className="h-12 w-12 mx-auto mb-4" fill="currentColor" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">志愿活动</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              用行动诠释青春担当，让爱心在奉献中闪光
            </p>
          </div>
        </div>
      </section>

      {/* 搜索和筛选 */}
      <section className="volunteer-section">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* 搜索框 */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索活动..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volunteer-primary focus:border-transparent"
                />
              </div>

              {/* 分类筛选 */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volunteer-primary focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.key} value={category.key}>
                      {category.label} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 活动列表 */}
      <section className="volunteer-section pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="volunteer-card overflow-hidden group hover:animate-warm-glow">
                {/* 活动图片 */}
                <div className="h-48 bg-gradient-to-br from-volunteer-primary to-volunteer-secondary flex items-center justify-center relative">
                  <Heart className="h-16 w-16 text-white opacity-50" fill="currentColor" />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(activity.status)}`}>
                    {getStatusText(activity.status)}
                  </div>
                </div>

                <div className="p-6">
                  {/* 活动标题 */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {activity.title}
                  </h3>

                  {/* 活动描述 */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {activity.description}
                  </p>

                  {/* 活动亮点 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activity.highlights.map((highlight, index) => (
                      <span key={index} className="px-2 py-1 bg-volunteer-light text-volunteer-primary text-xs rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* 活动信息 */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-volunteer-primary" />
                      {activity.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-volunteer-primary" />
                      {activity.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-volunteer-primary" />
                      {activity.participants}人参与
                    </div>
                  </div>

                  {/* 活动影响 */}
                  <div className="bg-volunteer-light/30 rounded-lg p-3 mb-4">
                    <div className="flex items-center text-sm text-volunteer-primary font-medium">
                      <Heart className="h-4 w-4 mr-2" fill="currentColor" />
                      {activity.impact}
                    </div>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex gap-2">
                    <button className="flex-1 warm-button text-sm">
                      查看详情
                    </button>
                    {activity.status === 'upcoming' && (
                      <button className="px-4 py-2 border border-volunteer-primary text-volunteer-primary rounded-full hover:bg-volunteer-primary hover:text-white transition-colors text-sm">
                        我要报名
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">没有找到符合条件的活动</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ActivitiesPage
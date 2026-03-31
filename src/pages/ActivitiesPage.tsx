import React, { useState } from 'react'
import { Calendar, MapPin, Users, Heart, Filter, Search } from 'lucide-react'

const ActivitiesPage: React.FC = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const activities = [
    {
      id: 1,
      title: '"科技进校园"科普志愿服务',
      description: '走进中小学，为孩子们带来精彩的科技科普课程，激发科学兴趣',
      category: 'education',
      date: '2024-03-15',
      location: '第一小学',
      participants: 150,
      status: 'completed',
      impact: '服务学生300余人',
      image: '/images/science-edu.jpg',
      highlights: ['机器人演示', '编程体验', '科学实验']
    },
    {
      id: 2,
      title: '"智慧助老"社区科技服务',
      description: '帮助社区老人学习使用智能设备，跨越数字鸿沟',
      category: 'community',
      date: '2024-03-20',
      location: '阳光社区',
      participants: 80,
      status: 'ongoing',
      impact: '服务老人200余人',
      image: '/images/elderly-care.jpg',
      highlights: ['智能手机教学', '防诈骗宣传', '生活便民']
    },
    {
      id: 3,
      title: '"绿色校园"环保志愿行',
      description: '校园环境整治，垃圾分类宣传，共建美丽校园',
      category: 'environment',
      date: '2024-03-25',
      location: '校园各区域',
      participants: 200,
      status: 'upcoming',
      impact: '预计覆盖全校师生',
      image: '/images/environment.jpg',
      highlights: ['垃圾分类', '环保宣传', '绿化维护']
    },
    {
      id: 4,
      title: '"爱心义卖"公益募捐活动',
      description: '组织爱心义卖，所得款项用于资助贫困学生',
      category: 'charity',
      date: '2024-04-01',
      location: '校园广场',
      participants: 120,
      status: 'upcoming',
      impact: '预计筹集善款5000元',
      image: '/images/charity-sale.jpg',
      highlights: ['手工艺品', '图书义卖', '才艺表演']
    },
    {
      id: 5,
      title: '"温暖陪伴"敬老院志愿服务',
      description: '定期到敬老院陪伴老人，为他们带去温暖和关怀',
      category: 'community',
      date: '2024-04-05',
      location: '夕阳红敬老院',
      participants: 60,
      status: 'upcoming',
      impact: '服务老人50余人',
      image: '/images/nursing-home.jpg',
      highlights: ['文艺表演', '聊天陪伴', '生活协助']
    },
    {
      id: 6,
      title: '"安全出行"交通引导志愿',
      description: '在学校周边路口进行文明交通引导，维护交通秩序',
      category: 'community',
      date: '2024-04-10',
      location: '学校周边路口',
      participants: 100,
      status: 'upcoming',
      impact: '服务市民千余人',
      image: '/images/traffic-guide.jpg',
      highlights: ['文明劝导', '安全宣传', '秩序维护']
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
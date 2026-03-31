import React, { useState } from 'react'
import { Heart, Calendar, Users, Camera, Filter, Search } from 'lucide-react'

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const photos = [
    {
      id: 1,
      title: '科技进校园活动',
      description: '为小学生们演示机器人编程，激发科学兴趣',
      category: 'education',
      date: '2024-03-15',
      location: '第一小学',
      participants: 150,
      likes: 89
    },
    {
      id: 2,
      title: '智慧助老服务',
      description: '耐心教老人使用智能手机，跨越数字鸿沟',
      category: 'community',
      date: '2024-03-20',
      location: '阳光社区',
      participants: 80,
      likes: 76
    },
    {
      id: 3,
      title: '环保志愿行',
      description: '校园清洁活动，倡导绿色环保理念',
      category: 'environment',
      date: '2024-03-25',
      location: '校园各区域',
      participants: 200,
      likes: 95
    },
    {
      id: 4,
      title: '敬老院陪伴',
      description: '为老人们表演节目，送去温暖和关怀',
      category: 'community',
      date: '2024-02-14',
      location: '夕阳红敬老院',
      participants: 60,
      likes: 112
    },
    {
      id: 5,
      title: '爱心义卖活动',
      description: '义卖手工艺品，筹集善款帮助贫困学生',
      category: 'charity',
      date: '2024-02-28',
      location: '校园广场',
      participants: 120,
      likes: 68
    },
    {
      id: 6,
      title: '交通文明引导',
      description: '维护校园周边交通秩序，倡导文明出行',
      category: 'community',
      date: '2024-02-20',
      location: '学校门口',
      participants: 100,
      likes: 54
    },
    {
      id: 7,
      title: '图书馆志愿服务',
      description: '整理图书，为读者提供便民服务',
      category: 'education',
      date: '2024-01-15',
      location: '学校图书馆',
      participants: 40,
      likes: 43
    },
    {
      id: 8,
      title: '冬季送温暖',
      description: '为环卫工人送去热饮和手套，表达感谢',
      category: 'charity',
      date: '2024-01-10',
      location: '城市街道',
      participants: 80,
      likes: 128
    }
  ]

  const categories = [
    { key: 'all', label: '全部照片', count: photos.length },
    { key: 'education', label: '教育助学', count: photos.filter(p => p.category === 'education').length },
    { key: 'community', label: '社区服务', count: photos.filter(p => p.category === 'community').length },
    { key: 'environment', label: '环保公益', count: photos.filter(p => p.category === 'environment').length },
    { key: 'charity', label: '慈善公益', count: photos.filter(p => p.category === 'charity').length }
  ]

  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <section className="warm-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Camera className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">活动相册</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              记录每一个温暖的瞬间，见证志愿者的青春风采
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
                  placeholder="搜索照片..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volunteer-primary focus:border-transparent"
                />
              </div>

              {/* 分类筛选 */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
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

      {/* 照片网格 */}
      <section className="volunteer-section pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="volunteer-card overflow-hidden group">
                {/* 照片区域 */}
                <div className="h-48 bg-gradient-to-br from-volunteer-primary to-volunteer-secondary flex items-center justify-center relative">
                  <Camera className="h-16 w-16 text-white opacity-50" />
                  <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1">
                    <Heart className="h-4 w-4 text-volunteer-heart" fill="currentColor" />
                  </div>
                </div>

                <div className="p-4">
                  {/* 照片标题 */}
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">
                    {photo.title}
                  </h3>

                  {/* 照片描述 */}
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {photo.description}
                  </p>

                  {/* 照片信息 */}
                  <div className="space-y-1 text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {photo.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {photo.participants}人参与
                    </div>
                  </div>

                  {/* 点赞和查看 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-volunteer-heart">
                      <Heart className="h-4 w-4" fill="currentColor" />
                      <span className="text-sm font-medium">{photo.likes}</span>
                    </div>
                    <button className="text-volunteer-primary hover:text-volunteer-secondary text-sm font-medium">
                      查看详情
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">没有找到符合条件的照片</p>
            </div>
          )}
        </div>
      </section>

      {/* 相册统计 */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">相册统计</h2>
            <p className="text-gray-600">记录青协成长的点点滴滴</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-volunteer-primary mb-2">200+</div>
              <div className="text-gray-600">精彩照片</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-volunteer-secondary mb-2">50+</div>
              <div className="text-gray-600">活动记录</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-volunteer-accent mb-2">1000+</div>
              <div className="text-gray-600">点赞数量</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-volunteer-heart mb-2">365</div>
              <div className="text-gray-600">天记录</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
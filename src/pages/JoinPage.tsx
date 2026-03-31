import React, { useState } from 'react'
import { Heart, User, Mail, Phone, MapPin, Calendar, Users, Send, CheckCircle } from 'lucide-react'

const JoinPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    major: '',
    grade: '',
    phone: '',
    email: '',
    interests: [] as string[],
    experience: '',
    motivation: '',
    availability: [] as string[]
  })

  const [submitted, setSubmitted] = useState(false)

  const interests = [
    '教育助学', '社区服务', '环保公益', '助老服务', '大型活动', '宣传策划'
  ]

  const availability = [
    '周一', '周二', '周三', '周四', '周五', '周六', '周日'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="volunteer-card p-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">报名成功！</h2>
            <p className="text-gray-600 mb-6">
              感谢您的报名！我们会在3个工作日内与您联系，请保持电话畅通。
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="warm-button"
            >
              返回首页
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <section className="warm-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <User className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">加入我们</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              成为自动化青协的一员，用青春点亮希望，用爱心温暖世界
            </p>
          </div>
        </div>
      </section>

      {/* 加入理由 */}
      <section className="volunteer-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">收获成长</h3>
              <p className="text-gray-600">在志愿服务中提升综合能力，收获个人成长</p>
            </div>

            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">结交朋友</h3>
              <p className="text-gray-600">结识志同道合的伙伴，建立深厚友谊</p>
            </div>

            <div className="volunteer-card p-6 text-center">
              <div className="bg-volunteer-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">丰富经历</h3>
              <p className="text-gray-600">获得丰富的社会实践经历，为未来加分</p>
            </div>
          </div>
        </div>
      </section>

      {/* 报名表单 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="volunteer-card p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">志愿者报名表</h2>
              <p className="text-gray-600">请填写以下信息，我们期待您的加入</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 基本信息 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volunteer-primary focus:border-transparent"
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    学号 *
                  </label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volunteer-primary focus:border-transparent"
                    placeholder="请输入学号"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    专业班级 *
                  </label>
                  <input
                    type="text"
                    name="major"
                    value={formData.major}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volunteer-primary focus:border-transparent"
                    placeholder="如：自动化21-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    年级 *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volunteer-primary focus:border-transparent"
                  >
                    <option value="">请选择年级</option>
                    <option value="大一">大一</option>
                    <option value="大二">大二</option>
                    <option value="大三">大三</option>
                    <option value="大四">大四</option>
                    <option value="研一">研一</option>
                    <option value="研二">研二</option>
                    <option value="研三">研三</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    联系电话 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volunteer-primary focus:border-transparent"
                    placeholder="请输入手机号码"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱地址
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volunteer-primary focus:border-transparent"
                    placeholder="请输入邮箱地址"
                  />
                </div>
              </div>

              {/* 感兴趣的服务领域 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  感兴趣的服务领域（可多选）
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest) => (
                    <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleCheckboxChange('interests', interest)}
                        className="w-4 h-4 text-volunteer-primary border-gray-300 rounded focus:ring-volunteer-primary"
                      />
                      <span className="text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 可参与时间 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  可参与志愿服务的时间（可多选）
                </label>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
                  {availability.map((day) => (
                    <label key={day} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.availability.includes(day)}
                        onChange={() => handleCheckboxChange('availability', day)}
                        className="w-4 h-4 text-volunteer-primary border-gray-300 rounded focus:ring-volunteer-primary"
                      />
                      <span className="text-sm text-gray-700">{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 志愿服务经历 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  志愿服务经历
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volunteer-primary focus:border-transparent"
                  placeholder="请简述您的志愿服务经历（没有经历也可以填写无）"
                />
              </div>

              {/* 加入动机 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  加入青协的动机 *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volunteer-primary focus:border-transparent"
                  placeholder="请分享您加入青协的动机和期望"
                />
              </div>

              {/* 提交按钮 */}
              <div className="text-center">
                <button
                  type="submit"
                  className="warm-button inline-flex items-center space-x-2 text-lg px-8"
                >
                  <Send className="h-5 w-5" />
                  <span>提交报名</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">联系我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6 text-volunteer-primary" />
              <span className="text-gray-700">自动化学院团委</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-volunteer-primary" />
              <span className="text-gray-700">010-12345678</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-volunteer-primary" />
              <span className="text-gray-700">volunteer@auto.edu.cn</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JoinPage
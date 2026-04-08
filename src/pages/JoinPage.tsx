import React, { useState } from 'react'
import { CheckCircle, ClipboardList, Compass, Megaphone, Send, UserPlus } from 'lucide-react'
import { contactWays, departments, joinReasons, serviceInterests } from '../content/siteContent'

const JoinPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    major: '',
    grade: '',
    interests: [] as string[],
    departmentPreference: '',
    motivation: '',
    availability: [] as string[]
  })
  const [submitted, setSubmitted] = useState(false)

  const availability = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (field: 'interests' | 'availability', value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value) ? prev[field].filter((item) => item !== value) : [...prev[field], value]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-lg volunteer-card p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          <h1 className="mt-5 text-3xl font-bold text-slate-900">报名信息已记录</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            现在先做报名意向展示。后面可以直接接入你们真实的招新表单、问卷或群链接。
          </p>
          <button onClick={() => setSubmitted(false)} className="warm-button mt-6">
            继续查看页面
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="page-hero">
        <div className="page-hero-inner">
          <UserPlus className="page-hero-icon" />
          <p className="section-kicker text-volunteer-warm">加入我们</p>
          <h1 className="page-hero-title">来青协，一起做点实事</h1>
          <p className="page-hero-copy">
            如果你愿意把热爱变成行动，欢迎加入。你会在项目里和大家一起做事、一起成长。
          </p>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="grid gap-6 md:grid-cols-3">
          {joinReasons.map((reason, index) => {
            const Icon = [Compass, Megaphone, ClipboardList][index]
            return (
              <article key={reason.label} className="volunteer-card p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-volunteer-light/50">
                  <Icon className="h-6 w-6 text-volunteer-primary" />
                </div>
                <p className="mt-4 text-sm font-semibold tracking-[0.18em] text-volunteer-primary/80">{reason.label}</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">{reason.value}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{reason.detail}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="section-heading !text-left !mb-0">
              <p className="section-kicker">六大部门</p>
              <h2 className="section-title">每个部门都有真实工作场景</h2>
              <p className="section-copy">
                部门职责和关于页保持一致，方便你对照了解每个部门平时都在做什么。
              </p>
            </div>
            <div className="grid gap-4">
              {departments.map((department) => (
                <article key={department.name} className="volunteer-card p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900">{department.name}</h3>
                    <span className="rounded-full bg-volunteer-light/40 px-3 py-1 text-xs font-semibold text-volunteer-primary">
                      {department.focus}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{department.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="volunteer-card p-8">
            <div className="section-heading !text-left !mb-8">
              <p className="section-kicker">报名信息</p>
              <h2 className="section-title">先选择你想投入的服务方向</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <input name="name" value={formData.name} onChange={handleInputChange} required placeholder="姓名" className="form-input" />
                <input name="studentId" value={formData.studentId} onChange={handleInputChange} required placeholder="学号" className="form-input" />
                <input name="major" value={formData.major} onChange={handleInputChange} required placeholder="专业班级" className="form-input" />
                <select name="grade" value={formData.grade} onChange={handleInputChange} required className="form-input">
                  <option value="">请选择年级</option>
                  {['大一', '大二', '大三', '大四', '研一', '研二', '研三'].map((grade) => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">感兴趣的服务方向</label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {serviceInterests.map((interest) => (
                    <label key={interest} className="choice-chip">
                      <input type="checkbox" checked={formData.interests.includes(interest)} onChange={() => handleCheckboxChange('interests', interest)} />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="form-label">意向部门</label>
                <select name="departmentPreference" value={formData.departmentPreference} onChange={handleInputChange} className="form-input">
                  <option value="">请选择意向部门</option>
                  {departments.map((department) => (
                    <option key={department.name} value={department.name}>{department.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">可参与时间</label>
                <div className="grid grid-cols-4 gap-3 md:grid-cols-7">
                  {availability.map((day) => (
                    <label key={day} className="choice-chip justify-center">
                      <input type="checkbox" checked={formData.availability.includes(day)} onChange={() => handleCheckboxChange('availability', day)} />
                      <span>{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="form-label">加入动机</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-input min-h-[140px]"
                  placeholder="你最希望通过哪些项目或岗位参与青协？"
                />
              </div>

              <button type="submit" className="warm-button inline-flex items-center gap-2">
                <Send className="h-4 w-4" />
                <span>提交报名意向</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="volunteer-section">
        <div className="section-heading">
          <p className="section-kicker">联系入口</p>
          <h2 className="section-title">常用联系方式</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {contactWays.map((item) => (
            <article key={item.label} className="volunteer-card p-6">
              <p className="text-sm font-semibold tracking-[0.18em] text-volunteer-primary/80">{item.label}</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">{item.value}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default JoinPage

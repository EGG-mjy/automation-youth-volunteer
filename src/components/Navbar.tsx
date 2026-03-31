import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Heart, Menu, X, Users, Calendar, Clock, UserPlus, Image } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: '首页', path: '/', icon: Heart },
    { name: '志愿活动', path: '/activities', icon: Calendar },
    { name: '关于我们', path: '/about', icon: Users },
    { name: '大事记', path: '/timeline', icon: Clock },
    { name: '活动相册', path: '/gallery', icon: Image },
    { name: '加入我们', path: '/join', icon: UserPlus },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-volunteer-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="heart-icon">
              <Heart className="h-8 w-8 text-volunteer-heart" fill="currentColor" />
            </div>
            <span className="font-display text-xl font-bold text-gray-800">
              自动化青协
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-volunteer-primary text-white'
                      : 'text-gray-600 hover:text-volunteer-primary hover:bg-volunteer-light/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-volunteer-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-volunteer-primary text-white'
                      : 'text-gray-600 hover:text-volunteer-primary hover:bg-volunteer-light/50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
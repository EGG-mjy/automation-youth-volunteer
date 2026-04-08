import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Heart, Menu, X, Users, Calendar, Clock, UserPlus, Image, ClipboardList } from 'lucide-react'
import { associationMeta } from '../content/siteContent'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: '棣栭〉', path: '/', icon: Heart },
    { name: '鍝佺墝椤圭洰', path: '/activities', icon: Calendar },
    { name: '鍏充簬鎴戜滑', path: '/about', icon: Users },
    { name: '鍙戝睍鍘嗙▼', path: '/timeline', icon: Clock },
    { name: '娲诲姩绾疄', path: '/gallery', icon: Image },
    { name: '内部活动', path: '/internal-events', icon: ClipboardList },
    { name: '鍔犲叆鎴戜滑', path: '/join', icon: UserPlus },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white/90 shadow-sm sticky top-0 z-50 border-b border-volunteer-primary/15 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="heart-icon">
              <Heart className="h-8 w-8 text-volunteer-heart" fill="currentColor" />
            </div>
            <div>
              <span className="block font-display text-xl font-bold text-gray-800">{associationMeta.shortName}</span>
              <span className="hidden text-[11px] uppercase tracking-[0.22em] text-volunteer-primary/70 md:block">
                {associationMeta.anniversaryLabel}
              </span>
            </div>
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

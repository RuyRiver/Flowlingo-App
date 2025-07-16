'use client'

import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-flowlingo-green">
              Flowlingo
            </h1>
          </div>
          
          {/* Right side - Stats and Profile */}
          <div className="flex items-center space-x-4">
            {/* Fire streak */}
            <div className="flex items-center space-x-1">
              <span className="text-xl">🔥</span>
              <span className="text-sm font-medium text-gray-700">1</span>
            </div>
            
            {/* Gems */}
            <div className="flex items-center space-x-1">
              <span className="text-xl">💎</span>
              <span className="text-sm font-medium text-gray-700">0</span>
            </div>
            
            {/* Hearts */}
            <div className="flex items-center space-x-1">
              <span className="text-xl">❤️</span>
              <span className="text-sm font-medium text-gray-700">5</span>
            </div>
            
            {/* Profile */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
              <span className="text-white text-sm font-medium">U</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
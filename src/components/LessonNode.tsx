'use client'

import React from 'react'

interface LessonNodeProps {
  type: 'start' | 'lesson' | 'locked' | 'practice' | 'checkpoint'
  isCompleted: boolean
  isActive: boolean
}

const LessonNode: React.FC<LessonNodeProps> = ({ type, isCompleted, isActive }) => {
  const getNodeContent = () => {
    switch (type) {
      case 'start':
        return (
          <div className={`
            w-16 h-16 rounded-full flex items-center justify-center relative
            ${isActive ? 'bg-flowlingo-green shadow-lg' : 'bg-gray-300'}
          `}>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            {isActive && (
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-flowlingo-green text-white px-3 py-1 rounded-full text-xs font-medium">
                  START
                </div>
              </div>
            )}
          </div>
        )
      
      case 'lesson':
        return (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )
      
      case 'locked':
        return (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
        )
      
      case 'practice':
        return (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
            </svg>
          </div>
        )
      
      case 'checkpoint':
        return (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="relative">
      {getNodeContent()}
    </div>
  )
}

export default LessonNode
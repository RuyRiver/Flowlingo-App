'use client'

import React from 'react'

interface UnitCardProps {
  title: string
  subtitle: string
  color: 'green' | 'purple'
  isActive: boolean
}

const UnitCard: React.FC<UnitCardProps> = ({ title, subtitle, color, isActive }) => {
  const colorClasses = {
    green: 'bg-gradient-to-r from-flowlingo-green to-green-400',
    purple: 'bg-gradient-to-r from-flowlingo-purple to-purple-400'
  }

  return (
    <div className={`
      relative rounded-2xl p-6 text-white shadow-lg
      ${colorClasses[color]}
      ${!isActive ? 'opacity-60' : ''}
    `}>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold mb-1">{title}</h2>
          <p className="text-white/90 text-sm">{subtitle}</p>
        </div>
        
        <button className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-3 py-1.5 flex items-center space-x-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-medium uppercase tracking-wide">Guidebook</span>
        </button>
      </div>
    </div>
  )
}

export default UnitCard
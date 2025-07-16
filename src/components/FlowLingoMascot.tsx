'use client'

import React from 'react'

const FlowLingoMascot = () => {
  return (
    <div className="relative">
      {/* Mascot Character */}
      <div className="w-20 h-20 bg-flowlingo-green rounded-full flex items-center justify-center shadow-lg">
        <div className="text-white text-2xl">
          {/* Simple mascot face */}
          <div className="relative">
            {/* Eyes */}
            <div className="flex space-x-2 mb-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            {/* Mouth */}
            <div className="w-4 h-2 bg-white rounded-full mx-auto"></div>
          </div>
        </div>
        
        {/* Waving hand */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-flowlingo-green rounded-full flex items-center justify-center shadow-md">
          <span className="text-white text-xs">👋</span>
        </div>
      </div>
      
      {/* Speech bubble or decorative element */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-lg px-3 py-1 shadow-md border">
          <span className="text-xs text-gray-700 font-medium">¡Hola!</span>
        </div>
        {/* Speech bubble tail */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
      </div>
    </div>
  )
}

export default FlowLingoMascot
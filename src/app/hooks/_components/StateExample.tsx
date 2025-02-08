'use client'

import { useState } from 'react'

export default function StateExample() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">useState Example</h3>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setCount(prev => prev - 1)}
          className="px-4 py-2 bg-slate-100 rounded hover:bg-slate-200"
        >
          -
        </button>
        <span className="text-xl">{count}</span>
        <button 
          onClick={() => setCount(prev => prev + 1)}
          className="px-4 py-2 bg-slate-100 rounded hover:bg-slate-200"
        >
          +
        </button>
      </div>
    </div>
  )
}

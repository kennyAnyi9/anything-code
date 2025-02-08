'use client'

import { useEffect, useState } from 'react'

export default function EffectExample() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth)

    // Add event listener
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">useEffect Example</h3>
      <p>Window width: {windowWidth}px</p>
      <p className="text-sm text-gray-600 mt-2">Resize your window to see it change!</p>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface ParticleSystemProps {
  mousePosition: { x: number; y: number }
}

const ParticleSystem = ({ mousePosition }: ParticleSystemProps) => {
  const particles = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 0.5 + 0.1,
  })), [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 215, 0, 0.3)',
          }}
          animate={{
            x: [0, mousePosition.x * 0.01, 0],
            y: [0, mousePosition.y * 0.01, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.speed * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default ParticleSystem

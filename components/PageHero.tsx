'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import MountainParallax from './MountainParallax'

interface PageHeroProps {
  title: string
  subtitle: string
  image?: string
  accent?: string
}

export default function PageHero({ title, subtitle, image, accent = "Sunrise" }: PageHeroProps) {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {image ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-40 mask-radial"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal" />
        </div>
      ) : (
        <MountainParallax />
      )}
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <span className="bg-sunrise/10 backdrop-blur-md border border-sunrise/30 text-sunrise px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
            {accent}
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl font-serif font-bold text-snow leading-tight mb-8"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-snow/70 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-gradient-to-b from-sunrise/50 to-transparent" />
      </div>
    </section>
  )
}

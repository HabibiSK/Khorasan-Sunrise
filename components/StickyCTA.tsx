'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  })

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <button className="flex items-center gap-3 bg-sunrise hover:bg-sunrise-light text-charcoal font-bold px-8 py-4 rounded-2xl transition-all shadow-[0_20px_50px_rgba(255,183,0,0.3)] hover:scale-105 active:scale-95 group">
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

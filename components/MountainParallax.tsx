'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MountainParallax() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mountainRef = useRef<HTMLDivElement>(null)
  const snowRef = useRef<HTMLDivElement>(null)
  const cloudsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(mountainRef.current, {
        y: 200,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(snowRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(cloudsRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep Lapis Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-lapis-dark via-lapis to-charcoal" />

      {/* Clouds / Atmosphere */}
      <div
        ref={cloudsRef}
        className="absolute inset-0 opacity-30 mask-linear-b"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 20%, #FFD700 0%, transparent 50%)',
        }}
      />

      {/* Mountains Layer (Charcoal) */}
      <div
        ref={mountainRef}
        className="absolute bottom-0 left-0 w-full h-[60%] bg-charcoal mask-linear-t"
        style={{
          clipPath: 'polygon(0% 100%, 10% 80%, 20% 90%, 35% 60%, 50% 85%, 65% 50%, 80% 90%, 90% 70%, 100% 100%)',
        }}
      />

      {/* Snow Peaks (White) */}
      <div
        ref={snowRef}
        className="absolute bottom-[30%] left-0 w-full h-[30%] bg-snow/20 mask-radial opacity-50"
        style={{
          clipPath: 'polygon(35% 100%, 35% 60%, 38% 65%, 42% 62%, 45% 68%, 50% 100%)',
        }}
      />
      <div
        ref={snowRef}
        className="absolute bottom-[40%] left-0 w-full h-[20%] bg-snow/30 mask-radial opacity-40"
        style={{
          clipPath: 'polygon(65% 100%, 65% 50%, 68% 55%, 72% 52%, 75% 58%, 80% 100%)',
        }}
      />

      {/* Sunrise Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full bg-radial-gradient from-sunrise/10 to-transparent opacity-50" />
    </div>
  )
}

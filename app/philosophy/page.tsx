'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import PageHero from '../../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

export default function PhilosophyPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Our Philosophy" 
        subtitle="Social impact, cultural preservation, and authentic experiences that leave a lasting mark on the world."
        accent="Soul"
      />

      <section ref={containerRef} className="py-32 px-4 max-w-5xl mx-auto">
        <div className="space-y-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center reveal-text">
            <div>
              <span className="text-sunrise font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The First Pillar</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-snow mb-8">
                Empowerment
              </h2>
              <p className="text-xl text-snow/70 leading-relaxed font-light mb-12">
                We believe tourism should benefit local communities and preserve cultural heritage. Our tours and accommodations are designed to empower Afghan women, support artisans, and promote sustainable development.
              </p>
              <div className="w-16 h-[2px] bg-sunrise" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl border border-snow/10">
               <Image 
                 src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                 alt="Afghan empowerment"
                 fill
                 className="object-cover mask-radial"
               />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center flex-row-reverse reveal-text">
            <div className="md:order-2">
              <span className="text-sunrise font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Second Pillar</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-snow mb-8">
                Authenticity
              </h2>
              <p className="text-xl text-snow/70 leading-relaxed font-light mb-12">
                We shun the superficial tourist trail. Every journey we craft is rooted in genuine human connection, shared meals, and authentic cultural immersion that goes beyond the surface.
              </p>
              <div className="w-16 h-[2px] bg-sunrise" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl border border-snow/10 md:order-1">
               <Image 
                 src="https://images.unsplash.com/photo-1542332213-31f87348057f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                 alt="Afghan authenticity"
                 fill
                 className="object-cover mask-radial"
               />
            </div>
          </div>

          <div className="reveal-text text-center py-32 bg-charcoal/50 backdrop-blur-xl border border-snow/5 rounded-[4rem] shadow-2xl">
             <h3 className="text-4xl md:text-6xl font-serif font-bold text-snow mb-12 italic">
               "A guest is a gift from God."
             </h3>
             <p className="text-xl text-snow/60 max-w-2xl mx-auto leading-relaxed">
               This ancient Afghan proverb is the cornerstone of our business. We treat every traveler not as a customer, but as an honored guest in our home.
             </p>
          </div>
        </div>
      </section>
    </div>
  )
}

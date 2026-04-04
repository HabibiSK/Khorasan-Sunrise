'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import PageHero from '../../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text reveal effect (simulated with line masks)
      gsap.from(".reveal-line", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Our Story" 
        subtitle="Born from a deep love for Afghanistan's rich cultural heritage and a commitment to sharing its authentic beauty with the world."
        accent="History"
      />

      <section ref={textRef} className="py-32 px-4 max-w-5xl mx-auto">
        <div className="space-y-16">
          <div className="reveal-line">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-snow mb-8">
              Rediscovering Khorasan
            </h2>
            <p className="text-xl md:text-2xl text-snow/70 leading-relaxed font-light">
              Founded by experienced guides who grew up in Afghanistan's diverse regions, we believe that true understanding comes from genuine human connections. Our mission is to bridge the gap between what the world sees on the news and the reality of Afghan life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center reveal-line">
            <div className="relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl border border-snow/10">
              <Image 
                src="/images/tour-2.png" 
                alt="Afghan heritage"
                fill
                className="object-cover mask-radial"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-serif font-bold text-sunrise">Beyond Tourism</h3>
              <p className="text-lg text-snow/60 leading-relaxed">
                Unlike typical tourist experiences, we focus on creating meaningful interactions with local communities. Our approach goes beyond sightseeing – we facilitate cultural exchange, support local artisans, and contribute to community development projects.
              </p>
              <div className="w-16 h-[2px] bg-sunrise" />
            </div>
          </div>

          <div className="reveal-line text-center py-32 bg-lapis/10 border-y border-snow/5 rounded-[4rem]">
             <h3 className="text-5xl md:text-7xl font-serif font-bold text-snow italic mb-8">
               "Behind the veil of the mountains, <br /> lies a heart of gold."
             </h3>
             <p className="text-sunrise font-bold tracking-widest uppercase">The Sunrise Philosophy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center reveal-line pt-16">
             <div className="p-8 bg-charcoal/50 backdrop-blur-xl rounded-3xl border border-snow/5 shadow-2xl">
               <h4 className="text-4xl font-serif font-bold text-sunrise mb-4">85%</h4>
               <p className="text-snow/50 text-sm uppercase tracking-widest mb-4">Local Impact</p>
               <p className="text-snow/70">Of our tour revenue goes directly to local guides, drivers, and service providers.</p>
             </div>
             <div className="p-8 bg-charcoal/50 backdrop-blur-xl rounded-3xl border border-snow/5 shadow-2xl">
               <h4 className="text-4xl font-serif font-bold text-sunrise mb-4">12</h4>
               <p className="text-snow/50 text-sm uppercase tracking-widest mb-4">Cooperatives</p>
               <p className="text-snow/70">Supported women's artisan groups through direct purchases and tourism revenue.</p>
             </div>
             <div className="p-8 bg-charcoal/50 backdrop-blur-xl rounded-3xl border border-snow/5 shadow-2xl">
               <h4 className="text-4xl font-serif font-bold text-sunrise mb-4">500+</h4>
               <p className="text-snow/50 text-sm uppercase tracking-widest mb-4">Benefited</p>
               <p className="text-snow/70">Community members positively impacted by our social initiatives.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}

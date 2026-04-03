'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ShieldCheck, Lock, PhoneCall, Globe, ArrowRight } from 'lucide-react'
import PageHero from '../../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

export default function SafetyPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-card", {
        y: 60,
        opacity: 0,
        duration: 1,
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
        title="Safety & Trust" 
        subtitle="Your safety is our highest priority. Learn about our comprehensive security measures and trusted protocols."
        accent="Protocol"
      />

      <section ref={containerRef} className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Expert Local Guides",
              desc: "Certified local guides with extensive knowledge and safety training. They are your eyes and ears on the ground.",
              icon: ShieldCheck,
              accent: "bg-sunrise/10 text-sunrise"
            },
            {
              title: "24/7 Response",
              desc: "A dedicated emergency response team available around the clock. We provide constant monitoring and support.",
              icon: PhoneCall,
              accent: "bg-lapis/20 text-lapis-light"
            },
            {
              title: "GPS Tracking",
              desc: "Every expedition is equipped with satellite communication and GPS tracking systems for real-time safety updates.",
              icon: Lock,
              accent: "bg-snow/10 text-snow"
            },
            {
              title: "Local Networks",
              desc: "We maintain deep-rooted connections with local communities, ensuring smooth and safe passage through every region.",
              icon: Globe,
              accent: "bg-sunrise/10 text-sunrise"
            }
          ].map((item, idx) => (
            <div key={idx} className="reveal-card group p-12 bg-charcoal/50 backdrop-blur-xl border border-snow/10 rounded-3xl hover:border-sunrise/30 transition-all duration-500 shadow-2xl">
              <div className={`w-16 h-16 ${item.accent} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-snow mb-6 group-hover:text-sunrise transition-colors">
                {item.title}
              </h3>
              <p className="text-lg text-snow/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal-card mt-32 p-12 md:p-24 bg-lapis/10 border border-snow/5 rounded-[4rem] text-center max-w-5xl mx-auto">
           <h3 className="text-4xl md:text-6xl font-serif font-bold text-snow mb-12 italic">
             "Our promise of safety <br /> is as solid as the mountains."
           </h3>
           <p className="text-xl text-snow/60 leading-relaxed mb-12">
             We understand the complexities of traveling in Afghanistan. That's why we leave nothing to chance, implementing multiple layers of protection and maintaining absolute transparency with our guests.
           </p>
           <button className="btn-sunrise text-lg px-12 py-5">
             Detailed Protocol Request
           </button>
        </div>
      </section>
    </div>
  )
}

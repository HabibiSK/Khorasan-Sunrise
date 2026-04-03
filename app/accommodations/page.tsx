'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import PageHero from '../../components/PageHero'
import { AccommodationCard } from '../../components/AccommodationCard'

gsap.registerPlugin(ScrollTrigger)

export default function AccommodationsPage() {
  const accommodationsRef = useRef<HTMLDivElement>(null)

  const accommodations = [
    {
      name: "Kabul House",
      location: "Heart of Kabul",
      description: "A beautifully restored traditional Afghan home in the heart of Kabul. Experience authentic Afghan hospitality in a historic setting.",
      features: ["Traditional architecture", "Garden courtyard", "Local cuisine", "Cultural immersion"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Herat House",
      location: "Ancient City of Herat",
      description: "Located in the historic district of Herat, this accommodation offers stunning views of the city's famous Friday Mosque.",
      features: ["Historic architecture", "Mosque views", "Artisan workshops", "Cultural tours"],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Mazar House",
      location: "Northern Gateway",
      description: "A comfortable home in Mazar-i-Sharif, close to the stunning Blue Mosque and offering insights into northern Afghan culture.",
      features: ["Blue Mosque proximity", "Northern cuisine", "Cultural exchanges", "Market access"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Bamyan Basecamp",
      location: "Valley of Buddhas",
      description: "Nestled in the Bamiyan Valley, this accommodation provides access to the famous Buddha statues and stunning mountain landscapes.",
      features: ["Mountain views", "Buddha site access", "Hiking trails", "Valley exploration"],
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".acc-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: accommodationsRef.current,
          start: 'top 80%',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Basecamp Houses" 
        subtitle="Authentic Afghan homes that serve as meeting points for travelers seeking genuine cultural immersion and hospitality."
        accent="Basecamps"
      />

      <section ref={accommodationsRef} className="py-32 px-4 max-w-7xl mx-auto">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-12 pb-12 md:grid md:grid-cols-2 md:overflow-visible md:snap-none md:px-0 lg:grid-cols-2 xl:grid-cols-2 scrollbar-hide">
          {accommodations.map((item, idx) => (
            <div key={idx} className="acc-card min-w-[85vw] md:min-w-0 snap-center">
              <AccommodationCard item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Hospitality Highlight */}
      <section className="relative py-32 bg-lapis overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <span className="text-sunrise font-bold tracking-widest uppercase text-xs mb-4 block">The Soul of Hospitality</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-snow mb-8">
            Mehman-Nawazi
          </h2>
          <p className="text-xl text-snow/70 leading-relaxed mb-12">
            In Afghanistan, a guest is a gift from God. Our Basecamp houses embody this ancient tradition, offering you a safe, comfortable, and truly authentic window into Afghan life.
          </p>
          <div className="w-16 h-[2px] bg-sunrise mx-auto" />
        </div>
      </section>
    </div>
  )
}

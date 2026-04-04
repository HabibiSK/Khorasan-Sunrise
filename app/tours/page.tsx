'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import PageHero from '../../components/PageHero'
import { TourCard } from '../../components/TourCard'

gsap.registerPlugin(ScrollTrigger)

export default function ToursPage() {
  const toursRef = useRef<HTMLDivElement>(null)

  const tours = [
    {
      title: "Heart of the Sunrise",
      location: "Kabul & Panjshir Valley",
      description: "Experience the vibrant pulse of Kabul and the serene beauty of the emerald-colored Panjshir River. A journey through history and hospitality.",
      image: "/images/accommodation.png",
      duration: "10 Days",
      difficulty: "Medium",
      distance: "850km",
      price: "2,490",
      rating: "4.9"
    },
    {
      title: "Ancient Herat Expedition",
      location: "Herat & Ghor Province",
      description: "Discover the architectural wonders of the Friday Mosque and the Minarets of Jam. An expedition for those who seek the whispers of the Silk Road.",
      image: "/images/hero-landscape.png",
      duration: "12 Days",
      difficulty: "Easy",
      distance: "1,200km",
      price: "2,850",
      rating: "5.0"
    },
    {
      title: "Bamyan Buddha Trail",
      location: "Bamyan Valley",
      description: "Witness the magnificent Buddha niches and the crystal-clear lakes of Band-e-Amir. A mystical landscape of red cliffs and blue water.",
      image: "/images/tour-1.png",
      duration: "8 Days",
      difficulty: "Medium",
      distance: "450km",
      price: "1,950",
      rating: "4.8"
    },
    {
      title: "Wakhan Corridor Trek",
      location: "Badakhshan Province",
      description: "A high-altitude trek into one of the most remote and untouched regions of the world. Meet the Kyrgyz nomads and witness the Pamir peaks.",
      image: "/images/tour-2.png",
      duration: "14 Days",
      difficulty: "Hard",
      distance: "300km",
      price: "3,800",
      rating: "5.0"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tour-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: toursRef.current,
          start: 'top 80%',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Signature Expeditions" 
        subtitle="Carefully crafted journeys through the soul of Afghanistan, blending adventure, history, and unparalleled hospitality."
        accent="Expeditions"
      />

      <section ref={toursRef} className="py-32 px-4 max-w-7xl mx-auto">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 md:grid md:grid-cols-2 md:overflow-visible md:snap-none md:px-0 lg:grid-cols-2 xl:grid-cols-2 scrollbar-hide">
          {tours.map((tour, idx) => (
            <div key={idx} className="tour-card min-w-[85vw] md:min-w-0 snap-center">
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="relative py-32 overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
           <h2 className="text-4xl md:text-6xl font-serif font-bold text-snow mb-8">
             Beyond Sightseeing
           </h2>
           <p className="text-xl text-snow/60 mb-12 italic">
             "Our expeditions are not just about seeing a country, but about understanding its soul and building bridges between cultures."
           </p>
           <div className="w-24 h-[1px] bg-sunrise mx-auto" />
        </div>
      </section>
    </div>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Heart, Star, MapPin, Clock, Gauge, ArrowRight } from 'lucide-react'
import MountainParallax from '../components/MountainParallax'

gsap.registerPlugin(ScrollTrigger)

// Tour Card Component
const TourCard = ({ tour }: { tour: any }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="group relative bg-charcoal/50 backdrop-blur-xl border border-snow/10 rounded-3xl overflow-hidden hover:border-sunrise/30 transition-all duration-500 shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 mask-linear-b"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 p-2 bg-charcoal/40 backdrop-blur-md rounded-full border border-snow/20 hover:bg-sunrise/20 transition-all group/heart"
        >
          <Heart className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-snow'}`} />
        </button>
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-sunrise/90 text-charcoal px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          <Star className="w-3 h-3 fill-charcoal" /> {tour.rating}
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-2 text-sunrise mb-4 text-sm font-medium">
          <MapPin className="w-4 h-4" /> {tour.location}
        </div>
        <h3 className="text-2xl font-serif font-bold text-snow mb-4 group-hover:text-sunrise transition-colors">
          {tour.title}
        </h3>
        <p className="text-snow/70 mb-8 leading-relaxed line-clamp-3">
          {tour.description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center p-3 bg-snow/5 rounded-2xl border border-snow/10 group-hover:border-sunrise/20 transition-all">
            <Clock className="w-5 h-5 text-sunrise mb-2" />
            <span className="text-[10px] text-snow/50 uppercase tracking-widest mb-1">Duration</span>
            <span className="text-xs font-bold text-snow">{tour.duration}</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-snow/5 rounded-2xl border border-snow/10 group-hover:border-sunrise/20 transition-all">
            <Gauge className="w-5 h-5 text-sunrise mb-2" />
            <span className="text-[10px] text-snow/50 uppercase tracking-widest mb-1">Level</span>
            <span className="text-xs font-bold text-snow">{tour.difficulty}</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-snow/5 rounded-2xl border border-snow/10 group-hover:border-sunrise/20 transition-all">
            <MapPin className="w-5 h-5 text-sunrise mb-2" />
            <span className="text-[10px] text-snow/50 uppercase tracking-widest mb-1">Distance</span>
            <span className="text-xs font-bold text-snow">{tour.distance}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-snow">
            <span className="text-sunrise text-sm font-normal">from</span> ${tour.price}
          </div>
          <button className="flex items-center gap-2 bg-sunrise hover:bg-sunrise-light text-charcoal font-bold px-6 py-3 rounded-2xl transition-all shadow-lg hover:shadow-sunrise/30 group/btn">
            View Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroTextRef = useRef<HTMLDivElement>(null)
  const toursRef = useRef<HTMLDivElement>(null)

  const tours = [
    {
      title: "Heart of the Sunrise",
      location: "Kabul & Panjshir Valley",
      description: "Experience the vibrant pulse of Kabul and the serene beauty of the emerald-colored Panjshir River. A journey through history and hospitality.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
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
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      duration: "8 Days",
      difficulty: "Medium",
      distance: "450km",
      price: "1,950",
      rating: "4.8"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Animation
      gsap.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        stagger: 0.2,
      })

      // Tour Cards Reveal
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

      // Background gradient movement
      gsap.to(".bg-glow", {
        x: '20%',
        y: '20%',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Background Glow */}
      <div className="bg-glow fixed top-[-20%] left-[-20%] w-[60%] h-[60%] bg-lapis/20 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="bg-glow fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sunrise/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <MountainParallax />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="hero-reveal mb-6 flex justify-center">
            <span className="bg-sunrise/10 backdrop-blur-md border border-sunrise/30 text-sunrise px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
              Land of the Sunrise
            </span>
          </div>
          <h1 ref={heroTextRef} className="hero-reveal text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-snow leading-none mb-8">
            Khorasan <br />
            <span className="text-sunrise">Sunrise</span>
          </h1>
          <p className="hero-reveal text-xl md:text-2xl text-snow/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience the soul of Afghanistan through authentic journeys, ancient history, and the warm hospitality of its people.
          </p>
          <div className="hero-reveal flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-sunrise flex items-center justify-center gap-3 group">
              Start Your Trip
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="btn-lapis backdrop-blur-xl bg-lapis/30 border border-snow/10 hover:bg-lapis/50 flex items-center justify-center gap-3">
              Watch Our Story
              <div className="w-8 h-8 rounded-full bg-snow/20 flex items-center justify-center">
                <span className="text-[10px] ml-1">▶</span>
              </div>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-snow/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-sunrise/50 to-transparent" />
        </div>
      </section>

      {/* Tours Grid */}
      <section ref={toursRef} id="tours" className="relative z-10 py-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-sunrise font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Curated Journeys</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-snow">
              Our Signature <br />
              Expeditions
            </h2>
          </div>
          <p className="text-snow/60 max-w-sm md:text-right">
            Every route is carefully crafted to ensure the perfect blend of adventure, culture, and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, idx) => (
            <div key={idx} className="tour-card">
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      </section>

      {/* Breadth-taking 3D / Atmosphere Spacer */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden my-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
            alt="Mountains"
            fill
            className="object-cover opacity-30 grayscale mask-radial"
          />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-snow mb-8 italic">
            "Beyond the mountains, <br />
            lies the soul."
          </h2>
          <div className="w-24 h-[2px] bg-sunrise mx-auto" />
        </div>
      </section>

      {/* Mobile-first swipe carousel reference */}
      <section className="py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-lapis/10 border border-snow/5 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-12">
              <div className="relative z-10 flex-1">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-snow mb-8">
                  Ready for <br />
                  <span className="text-sunrise">The Sunrise?</span>
                </h2>
                <p className="text-snow/70 text-lg mb-12 max-w-md">
                  Join our next small-group expedition and witness the beauty of Afghanistan firsthand.
                </p>
                <button className="btn-sunrise text-xl px-12 py-5">
                  Start Your Journey
                </button>
              </div>
              <div className="flex-1 relative w-full h-[300px] md:h-[500px]">
                  <Image 
                    src="https://images.unsplash.com/photo-1542332213-31f87348057f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                    alt="Ready"
                    fill
                    className="rounded-3xl object-cover mask-radial grayscale"
                  />
              </div>
           </div>
        </div>
      </section>
    </div>
  )
}
